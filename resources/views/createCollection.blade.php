@extends('layouts.defaultSource')

@section('title', 'Create Collection')

@section('content')

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8 border border-5 p-4 rounded">
            <h4>Collection Creation Form</h4>
            <form method="POST" action="{{ route('submitCollection') }}">
                @sessionToken
                <input type="hidden" name="host" value="{{getHost()}}">
                <input type="hidden" name="collectionId" id="collectionId" value="{{$collection? $collection->id : 0}}">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" class="form-control" value="{{$collection? $collection->name : ''}}"/>
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" name="description" class="form-control">{{$collection? $collection->description : ''}}</textarea>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    </div>
</div>

@endsection