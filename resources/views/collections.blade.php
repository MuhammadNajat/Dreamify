@extends('layouts.defaultSource')

@section('title', 'Create Collection')

@section('content')
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <table class="table table-dark table-hover">
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