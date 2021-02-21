<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Validator;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Task::all();

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
            "project_id"=>"required",
            "title"=>"required",
            "description"=>"required"
        );
        Auth::user();

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails())
        {
            return $validator->errors();
        }
        else {
        $task = new Task();
        $task->project_id = $request->project_id;
        $task->title = $request->title;
        $task->description = $request->description;
        $task->save();
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
        return Task::findOrFail($id);

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
            "project_id"=>"required",
            "title"=>"required",
            "description"=>"required"
        );

        Auth::user();

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails())
        {
            return $validator->errors();
        }
        else {

        $updade_task = Task::findOrFail($id);
        $updade_task->project_id = $request->project_id;
        $updade_task->title = $request->title;
        $updade_task->description = $request->description;
        $updade_task->update();
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
        $delete_task = Task::findOrFail($id);
        $delete_task->delete();

        return ["Data has been deleted"];
    }
}
