<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function getProjects(){
        $projects = \App\Project::where('is_completed', false)
        ->orderBy('created_at', 'DESC')
        ->get();
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
    public function getProject(Request $request){
        $project = \App\Project::where('title', $request->title)->with('tasks')->get();
        
        return response()->json(['project'=> $project]);
    }

}
