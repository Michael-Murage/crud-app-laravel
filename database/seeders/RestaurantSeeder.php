<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Restaurant;

class RestaurantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $restaurant = ['Ecco Pizzeria', 'Couch Tomato', 'Angie\'s Pizza', 'Palio\'s Pizza Cafe', 'Pizza Capri',
	    'Oz Pizza', 'Pizza Guys', 'Kentucky Fried Chicken', 'Mellow Mushroom', 'Verdugo Pizza'];

        for ($i=0; $i < count($restaurant); $i++) { 
            Restaurant::create([
                'name' => $restaurant[$i],
                'description' => "Nice restaurant",
                'address' => "along Kenyatta Avenue opposite Shoppers Plaza",
            ]);
        }
    }
}
