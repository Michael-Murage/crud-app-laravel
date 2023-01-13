<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;
use App\Models\User;

class RestaurantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Restaurant::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (!$request->user) {
            abort(401, "You must be logged in!");
        }
        $user = User::find($request->user);
        if (!$user || !$user->is_seller) {
            abort(401, "You must be a seller to edit or delete data");
        }
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'address' => 'required'
        ]);

        $restaurant = Restaurant::create([
            'name' => $request->name,
            'description' => $request->description,
            'address' => $request->address
        ]);

        return response()->json($restaurant);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\restaurants  $restaurants
     * @return \Illuminate\Http\Response
     */
    public function show(restaurants $restaurants)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\restaurants  $restaurants
     * @return \Illuminate\Http\Response
     */
    public function edit(restaurants $restaurants)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\restaurants  $restaurants
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, restaurants $restaurants)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\restaurants  $restaurants
     * @return \Illuminate\Http\Response
     */
    public function destroy(restaurants $restaurants)
    {
        //
    }
}
