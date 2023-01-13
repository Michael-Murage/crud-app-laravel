<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class PizzaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Pizza::all());
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
            'image' => 'required',
            'ingredients' => 'required'
        ]);

        $pizza = Pizza::create([
            'name' => $request->name,
            'image' => $request->image,
            'ingredients' => $request->ingredients
        ]);

        return response()->json($pizza);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pizza  $pizza
     * @return \Illuminate\Http\Response
     */
    public function show(Pizza $pizza, $key)
    {
        try {
            $pizza = Pizza::find(intval($key));
            return response()->json($pizza);
        } catch (\Throwable $th) {
            abort(404, "Pizza not found");
        }
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pizza  $pizza
     * @return \Illuminate\Http\Response
     */
    public function edit(Pizza $pizza)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pizza  $pizza
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pizza $pizza, $key)
    {
        $user_id = $request->user;
        if (!$user_id) {
            abort(401, "You must be logged in!");
        }
        $user = User::find($user_id);
        if (!$user->is_seller) {
            abort(401, "You must be a seller to edit or delete data");
        }
        $piz = Pizza::find(intval($key));
        $piz->update([
            'name' => $request->name,
            'image' => $request->image,
            'ingredients' => $request->ingredients
        ]);
        return response()->json($piz);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pizza  $pizza
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pizza $pizza, $key, Request $request)
    {
        $user_id = $request->user;
        if (!$user_id) {
            abort(401, "You must be logged in!");
        }
        $user = User::find($user_id);
        if (!$user->is_seller) {
            abort(401, "You must be a seller to edit or delete data");
        }
        $piz = Pizza::find(intval($key));
        $piz->delete();
        return response()->json($piz);
    }
}
