<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    /**
     * Get order associated with pizza
     */
    public function pizza()
    {
        return $this->belongsTo(Pizza::class);
    }

    /**
     * Get order associated with restaurant
     */
    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }

    /**
     * Get order associated with user
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'restaurant_id',
        'pizza_id',
        'amount',
        'user_id'
    ];
}
