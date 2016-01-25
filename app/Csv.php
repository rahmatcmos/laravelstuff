<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Csv extends Model
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany(Users::class);
    }


    /**
     * @param User $user
     * @return Model
     */
    public function assignTo(User $user)
    {
        return $this->users()->save($user);
    }

    public function size($size)
    {
        $this->size=$size;
        $this->save();

        return $this;
    }
}
