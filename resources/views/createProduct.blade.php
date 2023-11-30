@extends('shopify-app::layouts.default')

@section('content')

    <form method="POST" action="{{ route('submitProduct') }}">
        @sessionToken
        <input type="hidden" name="host" value="{{getHost()}}">
        <input type="hidden" name="collectionId" id="collectionId" value="{{$collectionId}}">
        <input type="hidden" name="productId" id="productId" value="{{$productId?? 0}}">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
        </div>

        <div>
            <label for="description">Description</label>
            <textarea id="description" name="description"></textarea>
        </div>

        <div>
            <button type="submit">Create</button>
        </div>
    </form>
        
@endsection