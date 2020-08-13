<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function getProjects(){
        $projects = \App\Project::all();
        return response()->json(['projects' => $projects]);
    }

    public function newProject(Request $request){
        $project = new \App\Project;
        $project->title = $request->title;
        $project->description = $request->description;
        $project->is_completed = false;
        $project->save();
        return response()->json(['response'=>'success']);
    }

}
