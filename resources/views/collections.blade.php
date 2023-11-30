@extends('shopify-app::layouts.default')

@section('content')
    <table class="w-full table-auto text-sm text-left">
        <thead class="text-gray-600 font-medium border-b">
            <tr>
                <th class="py-3 pr-6">Name</th>
                <th class="py-3 pr-6">Description</th>
                <th class="py-3 pr-6"></th>
                <th class="py-3 pr-6"></th>
            </tr>
        </thead>
        <tbody class="text-gray-600 divide-y">
            @foreach ($collections as $collection)
                <tr>
                    <td class="pr-6 py-4 whitespace-nowrap ">
                        {{ $collection->name }}
                    </td>
                    <td class="pr-6 py-4 whitespace-nowrap ">
                        {{ $collection->description }}
                    </td>

                    <td class="text-right whitespace-nowrap">

                        <a href="{{ URL::tokenRoute('createCollection', ['collectionId' => $collection->id]) }}"
                            class="py-1.5 px-3 text-red-600 hover:text-gray-500 duration-150 hover:bg-red-50 border rounded-lg">Edit</a>
                        &nbsp;
                        <a href="{{ URL::tokenRoute('products', ['collectionId' => $collection->id]) }}"
                            class="py-1.5 px-3 text-red-600 hover:text-gray-500 duration-150 hover:bg-red-50 border rounded-lg">Products</a>
                    </td>

                </tr>
            @endforeach
        </tbody>
    </table>
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
