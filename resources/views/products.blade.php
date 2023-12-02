@extends('layouts.defaultSource')

@section('title', 'Create Collection')

@section('content')
    <div class="text-center">
        <h4>Products for Collection <b>{{$collection->name}}</b></h4>
        <a href="{{ URL::tokenRoute('createProduct', ['collectionId' => $collection->id]) }}" class="btn btn-info" role="button">Add Product</a>
    </div>
    <div class="container mt-2">
        <div class="row justify-content-center">
            <div class="col-md-10">
                    <table class="table table-dark table-hover text-center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($products as $product)
                                <tr>
                                    <td>
                                        {{ $product->name }}
                                    </td>
                                    <td>
                                        {{ Str::of($product->description)->limit(30) }}
                                    </td>

                                    <td>
                                        <a href="{{ URL::tokenRoute('createProduct', ['productId' => $product->id, 'collectionId' => $collection->id]) }}"
                                            class="btn btn-info" role="button">Edit</a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script>
        function showCreateGroup() {
            document.getElementById('create-group').classList.remove('hidden');
        }

        function hideCreateGroup() {
            document.getElementById('create-group').classList.add('hidden');
            //clear the values
            document.getElementById('name').value = '';
            document.getElementById('description').value = '';
            document.getElementById('groupid').value = '';
        }

        function editCollection(button) {
            console.log(button.dataset);
            /*document.getElementById('create-group').classList.remove('hidden');
            //get the data-name, data-description and data-id
            document.getElementById('name').value = button.dataset.name;
            document.getElementById('description').value = button.dataset.description;
            document.getElementById('collectionId').value = button.dataset.id;*/
        }
    </script>
@endpush
