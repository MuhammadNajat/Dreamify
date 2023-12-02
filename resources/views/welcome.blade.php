@extends('layouts.defaultSource')

@section('title', 'Create Collection')

@section('content')

    <div class="container text-center mt-5">
        <div class="row">
            <div class="col mt-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">About</h5>
                        <p class="card-text">Know about the store here</p>
                        <a href=" {{ URL::tokenRoute('shop') }} " class="btn btn-primary stretched-link">About</a>
                    </div>
                </div>
            </div>

            <div class="col mt-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Create</h5>
                        <p class="card-text">Crate new collection here</p>
                        <a href=" {{ URL::tokenRoute('createCollection') }} " class="btn btn-primary stretched-link">Create Collection</a>
                    </div>
                </div>
            </div>

            <div class="col mt-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">See</h5>
                        <p class="card-text">See existing collections here</p>
                        <a href=" {{ URL::tokenRoute('collections') }} " class="btn btn-primary stretched-link">See Collections</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection