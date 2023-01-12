<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pizza;

class PizzaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $flavour = ['Cheese', 'Veggie', 'Pepperoni', 'Meat', 'Margherita', 'BBQ', 'Hawaiian', 'Buffalo', 'Supreme', 'The-Works'];
        
        for ($i=0; $i < 10; $i++) { 
            Pizza::create([
                'name' => $flavour[$i],
                'image' => "assets/{$flavour[$i]}",
                'ingredients' => "Wheat-floor, sugar"
            ]);
        }
    }
}
