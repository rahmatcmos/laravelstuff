<?php

namespace App\Http\Controllers;

use App\Exceptions\ValidationFailed;
use App\Http\Requests\LoginRequest;
use App\User;
use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class SessionsController extends Controller
{

    /**
     * @return \Illuminate\View\View
     */
    public function login()
    {
        $page = 'Login';

        return view('dividers.login', compact('page'));
    }


    /**
     * @param LoginRequest $request
     * @return \Illuminate\View\View
     */
    public function postLogin(LoginRequest $request)
    {
        $page = 'Login';

        $user = User::where('email', $request->input('email'))->first();

        return $this->signIn($request, $user, $page);
    }


    /**
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function logout()
    {
        return $this->signOut();
    }


    /**
     * @param $request
     * @return array
     */
    private function getCredentials($request)
    {
        return [
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'verified' => true
        ];
    }


    /**
     * @param LoginRequest $request
     * @param $user
     * @param $page
     * @return $this|\Illuminate\Http\RedirectResponse
     */
    private function signIn(LoginRequest $request, $user, $page)
    {
        if ($user !== null) {
            try {
                // verify user
                $user->isVerified();
                // validate
                $user->validate($this->getCredentials($request));
                // sign in user
                Auth::login($user);
                // Flash success message
                alert()->success('Welkom ' . $user->firstname . ' ' . $user->lastname . '!')->autoclose(2500);
                // Log login statistics
                $user->updateLastLogin();
                // Redirect where the user intended to go
                return redirect()->intended('/dashboard/user');

                if ($user->is('admin'))
                    return redirect()->intended('/dashboard/admin');
                if ($user->is('user')) {
                    return redirect()->intended('/dashboard/user');
                }
            } catch (UserNotVerified $e) {
                // check to redirect with dashboard with or without cookie
                if (Cookie::get('user') !== null) {
                    return redirect()->to('register/confirm')->with('user', $user);
                } else {
                    return response()->view('dividers.verification',
                        compact('page', 'user'))->withCookie(Cookie::forever('user', $user));
                }
            } catch (ValidationFailed $e) {
                // flash failure
                alert()->error('Verkeerd wachtwoord of E-mail!')->autoclose(2500);

                // redirect back
                return redirect()->back();
            }
        }
        return redirect()->back()->withErrors($request); // Redirect back with errors
    }


    /**
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    private function signOut()
    {
        Auth::logout();

        alert()->success('Je bent nu uitgelogd. See ya');

        return redirect('/');
    }
}

