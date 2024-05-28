<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class BlogController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blog = Blog::orderBy('created_at','DESC')->get();
        return response()->json([
            'status'=>'true',
            'data'=>$blog
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        // Validate the incoming request data
        $validator = Validator::make($request->all(),[
            'author' => 'required',
            'title' => 'required',
            'description' => 'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Validation Error.',
                'errors' => $validator->errors()
            ]);
        }else{
            $blog = new Blog();
            $blog->author = $request->input('author');
            $blog->title = $request->input('title');
            $blog->description = $request->input('description');
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time().'.'.$image->getClientOriginalExtension();
                $image->move('uploads/blogs/', $imageName);
                $blog->image = 'uploads/blogs/'.$imageName;
            }
            $blog->save();
            return response()->json([
                'status' => true,
                'message' => 'Blog post created successfully!',
                'data' => $blog
            ]);
        }

    }



    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        //
    }
}
