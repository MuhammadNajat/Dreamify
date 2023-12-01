@extends('layouts.defaultSource')

@section('title', 'Create Collection')

@section('content')
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12 d-flex justify-content-between">
                <h4 class="text-start ml-2">Collections</h4>
                <a href=" {{ URL::tokenRoute('createCollection') }} " class="btn btn-info mr-2" role="button">Create New</a>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-12">
                <table class="table table-dark table-hover mt-2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($collections as $collection)
                            <tr>
                                <td >
                                    {{ $collection->name }}
                                </td>
                                <td>
                                    {{Str::of($collection->description)->limit(20)}}
                                </td>

                                <td>
                                    <a href="{{ URL::tokenRoute('createCollection', ['collectionId' => $collection->id]) }}"
                                        class="btn btn-info" role="button">Edit</a>
                                </td>
                                <td>
                                    <a href="{{ URL::tokenRoute('products', ['collectionId' => $collection->id]) }}"
                                        class="btn btn-info" role="button">Products</a>
                                </td>

                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection