<?php

namespace App\Mailers;

use App\User;
use Illuminate\Contracts\Mail\Mailer;

class AppMailer
{

    protected $mailer;

    protected $from = 'admin@change.me';

    protected $to;

    protected $view;

    protected $data = [ ];


    /**
     * AppMailer constructor.
     * @param Mailer $mailer
     */
    public function __construct(Mailer $mailer)
    {
        $this->mailer = $mailer;
    }


    /**
     * @param User $user
     */
    public function sendEmailConfirmationTo(User $user)
    {
        $this->to = $user->email;
        $this->view = 'emails.confirm';
        $this->data = compact('user'); // $user

        $this->deliver();
    }


    /**
     * Deliver the e-mail
     */
    public function deliver()
    {
        $this->mailer->send($this->view, $this->data, function($message) {
            $message->from($this->from, 'Administrator')
                ->to($this->to);
        });
    }
}