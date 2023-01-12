<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;

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
        //
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
        try {
            $piz = Pizza::find(intval($key));
            $piz->update([
                'name' => $request->name,
                'image' => $request->image,
                'ingredients' => $request->ingredients
            ]);

            return response()->json($piz);
        } catch (\Throwable $th) {
            abort(404, "Resource not found");
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pizza  $pizza
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pizza $pizza, $key)
    {
        try {
            $piz = Pizza::find(intval($key));
            $piz->delete();
            return response()->json($piz);
            
        } catch (\Throwable $th) {
            abort(404, "Resource not found");
        }
        
    }
}
