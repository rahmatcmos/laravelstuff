<?php

namespace App;

use App\Exceptions\userNotVerified;
use App\Exceptions\ValidationFailed;
use Carbon\Carbon;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Support\Facades\Auth;

class User extends Model implements AuthenticatableContract, AuthorizableContract, CanResetPasswordContract
{

    use Authenticatable, Authorizable, CanResetPassword;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'phonenumber',
        'companyname',
        'country',
        'zip',
        'streetnumber',
        'town',
        'province',
        'email',
        'password'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [ 'password', 'remember_token' ];


    public static function boot()
    {
        parent::boot();

        static::creating(function ($user) {
            $user->token = str_random(30); // Set random token when in the process of creating a user
        });
    }


    // Mutator for encrypting the password when creating a user
    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }


    /**
     * @return $this
     */
    public function confirmEmail()
    {
        $this->verified = true; // Change verified status
        $this->token = null; // Change token
        $this->activated_at = Carbon::now('Europe/Amsterdam');
        $this->save(); // Persist

        return $this; // Return the current user
    }


    /**
     * @return bool
     * @throws userNotVerified
     */
    public function isVerified()
    {
        if (!$this->verified) {
            throw new UserNotVerified();
        }
        return true;
    }


    /**
     * @param $credentials
     * @throws ValidationFailed
     */
    public function validate($credentials)
    {
        $valid = Auth::validate($credentials);

        if (!$valid)
            throw new ValidationFailed();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }


    /**
     * @param $role
     * @return bool
     */
    public function hasRole($role)
    {
        if (is_string($role)) {
            return $this->roles->contains('name', $role);
        }

        // If collection call the method recursively
        foreach ($role as $r) {
            if ($this->hasRole($r->name)) {
                return true;
            }
        }
    }


    /**
     * Update the last login
     */
    public function updateLastLogin()
    {
        $this->last_login = Carbon::now('Europe/Amsterdam');
        $this->save();
    }


    /**
     * @param Role $role
     */
    public function assignRole(Role $role)
    {
        if ($role == null) {
            throw new ModelNotFoundException;
        }

        $this->roles()->save($role);
    }
}
