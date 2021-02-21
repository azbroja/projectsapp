<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Validator;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Project::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = array(
            "title"=>"required",
            "description"=>"required"
        );

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails())
        {
            return $validator->errors();
        }
        else {
        $project = new Project();
        $project->title = $request->title;
        $project->description = $request->description;
        $project->save();
        }

        return ["Data has been saved"];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Project::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $rules = array(
            "title"=>"required",
            "description"=>"required"
        );

        $user = Auth::user();

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails() || !$user->is_admin)
        {
            return $validator->errors();
        }
        else {

        $updade_project = Project::findOrFail($id);
        $updade_project->title = $request->title;
        $updade_project->description = $request->description;
        $updade_project->update();
        }
        return ["Data has been updated"];

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete_project = Project::findOrFail($id);
        $delete_project->delete();

        return ["Data has been deleted"];


    }
}
