<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

function fake() {
   insert_table("João Pedro Fernandes", "joao@gmail.com", "23/02/1992", "(31) 98098 8989");
   insert_table("Fulano Beltrano Oliveira Silva", "fulano@gmail.com", "12/05/1989", "(31) 93244 7833");
   insert_table("Bruna Santos Aparecida", "bruna@gmail.com", "02/12/1989", "(31) 94989 5765");
   insert_table("Maria Paula Pereira", "maria@gmail.com", "11/09/1994", "(31) 91123 7819");
}

function create_table() {
   Schema::create('users', function($table) {
     $table->increments('id');
     $table->string('nome');
     $table->string('email');
     $table->string('nascimento');
     $table->string('telefone');
   });
}

function drop_table() {
   Schema::dropIfExists('users');
}

function delete_table() {
   DB::delete('delete from users');
}

function insert_table($nome, $email, $nascimento, $telefone) {
   DB::insert('insert into users (nome, email, nascimento, telefone) values (?,?,?,?)', [$nome, $email, $nascimento, $telefone]);
}

function list_table() {
   return DB::select('select * from users');
}

Route::get('/', function () {
    return "Welcome to IN8 Serviços Online";
});

Route::post('insert', function (Request $request) {
    $nome = $request->input('nome');
    $email = $request->input('email');
    $nascimento = $request->input('nascimento');
    $telefone = $request->input('telefone');
    insert_table($nome, $email, $nascimento, $telefone);
    $response = array("status" => "ok");
    return $response;
});

Route::get('list', function () {
    $response = list_table();
    return $response;
});

Route::get('create', function () {
    create_table();
    $response = array("status" => "ok");
    return $response;
});

Route::get('drop', function () {
    drop_table();
    $response = array("status" => "ok");
    return $response;
});

Route::get('delete', function () {
    delete_table();
    $response = array("status" => "ok");
    return $response;
});

Route::get('fake', function () {
    fake();
    $response = array("status" => "ok");
    return $response;
});
