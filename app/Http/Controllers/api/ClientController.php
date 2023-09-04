<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator as Validator;


class ClientController extends Controller
{
    public function index()
    {
        $client = Client::all();
        if($client->count()> 0)
        {
            return response()->json([
            "status" => 200,
            "clients" => $client
            ],200);
        }
        return response()->json([
            "status" => 404,
            "message" => "No Records Found!",
        ],404);
        
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cname' => 'required|max:30',
            'caddress' => 'required|max:100',
            'cmobile' => 'required|max:20',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ],422);
        }
        else
        {
            $client = [
                        'cname' => $request->cname,
                        'caddress' => $request->caddress,
                        'cmobile' => $request->cmobile
                    ];
            Client::create($client);
            if ($client) 
            {
                return response()->json([
                    'status' => 200,
                    'message' => "Client Created Successfully.",
                ],200);
            }
            else
            {
                return response()->json([
                    'status' => 500,
                    'message' => "Something went wrong!",
                ],500);
            }
        }

        
    }

    public function show($id)
    {
        $client = Client::find($id);
        if ($client) {
            return response()->json([
                'status'=> 200,
                'client' => $client,
            ],200);
        }
        else
        {
            return response()->json([
                'status'=> 404,
                'message' => "No Client Exists",
            ],404);
        }
    }
    
    public function edit($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cname' => 'required|max:30',
            'caddress' => 'required|max:100',
            'cmobile' => 'required|max:20',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ],422);
        }
        else
        {
            $client = Client::find($id);
            $client->update([
                        'cname' => $request->cname,
                        'caddress' => $request->caddress,
                        'cmobile' => $request->cmobile
                    ]);
            if ($client) 
            {
                return response()->json([
                    'status' => 200,
                    'message' => "Client Updated Successfully.",
                ],200);
            }
            else
            {
                return response()->json([
                    'status' => 404,
                    'message' => "No Such Update!",
                ],404);
            }
        }

    }

    public function deletes($id)
    {

        $client = Client::find($id);
        if($client)
        {
            $client->delete();
                return response()->json([
                    'status' => 200,
                    'message' => "Client Deleted Successfully.",
                ],200);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => "No Client Exist!",
            ],404);
        }
    }
}
