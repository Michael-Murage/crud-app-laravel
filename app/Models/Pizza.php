<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    use HasFactory;

    /**
     * Get pizza associated with orders
     */
    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    /**
     * Get pizza associated with restaurants
     */
    public function restaurants()
    {
        return $this->hasManyThrough(Restaurant::class, Order::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'image',
        'ingredients'
    ];
}
