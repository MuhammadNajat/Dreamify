@extends('layouts.defaultSource')

@section('title', 'Create Product')

@section('content')

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8 border border-5 p-4 rounded">
            <h4>Product Creation Form</h4>
            <form method="POST" action="{{ route('submitProduct') }}">
                @sessionToken
                <input type="hidden" name="host" value="{{getHost()}}">
                <input type="hidden" name="collectionId" id="collectionId" value="{{$collectionId}}">
                <input type="hidden" name="productId" id="productId" value="{{$product? $product->id : 0}}">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" class="form-control" value="{{$product? $product->name : ''}}"/>
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" name="description" class="form-control">{{$product? $product->description : ''}}</textarea>
                </div>

                <div>
                    <button type="submit" class="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection