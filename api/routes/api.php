<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\SchoolYearController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('user', fn(Request $request) => $request->user());

    Route::apiResource('school-years', SchoolYearController::class);
    Route::apiResource('courses', CourseController::class);
});
