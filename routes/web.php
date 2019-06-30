<?php

Route::get('generate', function() {
	echo bcrypt("12312312");
});

Route::get('/', function () {
    return view('welcome');
});
