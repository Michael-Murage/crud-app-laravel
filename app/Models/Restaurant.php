<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class restaurant extends Model
{
    use HasFactory;

    /**
     * Get restaurant associated with orders
     */
    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    /**
     * Get restaurant associated with pizzas
     */
    public function pizzas()
    {
        return $this->hasManyThrough(Pizza::class, Order::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'description',
        'address'
    ];
}
