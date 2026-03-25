<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/ai-test', function () {
    try {
        $response = Http::get('http://127.0.0.1:8001/');
        return $response->json();
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Could not reach FastAPI service',
            'message' => $e->getMessage()
        ], 500);
    }
});