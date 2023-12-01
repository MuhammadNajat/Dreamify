@extends('layouts.defaultSource')

@section('content')
        <h3 class="display-4 text-center mt-20">Shop Name is <b>{{ $shopDomain ?? Auth::user()->name }}</b></h3>
        <h3 class="display-4 text-center">Shop ID is <b>{{ Auth::user()->id }}</h3>
@endsection