@extends('layouts.defaultSource')

@section('content')
        <div>
                <h4 class="text-center mt-5">Shop Name is <b>{{ preg_replace('/.myshopify.com$/', '', Auth::user()->name) }}</b></h4>
        </div>
        <div>
                <h4 class="text-center">Shop ID is <b>{{ Auth::user()->id }}</h4>
        </div>
@endsection