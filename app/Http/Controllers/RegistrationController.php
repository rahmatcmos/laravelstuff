<?php

namespace App\Http\Controllers;

use App\Mailers\AppMailer;
use App\Role;
use App\Permission;
use App\User;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Session;

class RegistrationController extends Controller
{

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getRegister()
    {
        $page = 'Registratie';
        $countries = countries();

        return view('dividers.register', compact('page', 'countries'));
    }


    /**
     * @param Request $request
     * @param AppMailer $mailer
     * @return mixed
     */
    public function postRegister(Request $request, AppMailer $mailer)
    {
        $page = 'Registratie';

        // Validate the request & create new validator
        $this->validate($request, [
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'phonenumber' => 'required',
            'zip' => 'required|string',
            'streetnumber' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6'
        ]);

        // create the user
        $user = User::create($request->all());

        // email a confirmation link
        $mailer->sendEmailConfirmationTo($user);

        // redirect to confirmation page
        return Redirect::to('register/confirm')->with('user', $user);
    }


    /**
     * @param $token
     * @return Redirect
     */
    public function confirmEmail($token)
    {
        $role = Role::where('id', 3)->first();
        $user = User::whereToken($token)->firstOrFail()->confirmEmail();

        \DB::table('role_user')->insert([
            'role_id' => $role->id,
            'user_id' => $user->id
        ]);

        Auth::login($user);
        // $user->assignRole($role);
        return redirect()->to('dashboard/user');
    }


    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    protected function confirmAccount()
    {
        $page = "Verifieer E-mail";

        if (Session::has('user') && Cookie::get('user') === null) {
            $user = Session::get('user');

            $cookie = Cookie::forever('user', $user);
            return response()->view('dividers.verification', compact('page', 'user'))->withCookie($cookie);
        }

        if (Cookie::get('user') !== null) {
            $user = Cookie::get('user');
            $userIs = User::where('email', $user->email)->first();
            if ($userIs !== null && $userIs->verified)
                return Redirect::to('login')->withCookie(Cookie::forget('user'));
            return view('dividers.verification', compact('page', 'user'));
        }
    }
}

