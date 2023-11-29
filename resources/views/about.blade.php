@extends('shopify-app::layouts.default')

@section('content')
    <p>Shop Name: {{ $shopDomain ?? Auth::user()->name }}</p>
    <p>Shop ID: {{ $shopDomain ?? Auth::user()->id }}</p>
@endsection

@section('scripts')
    @parent

    <script>
        actions.TitleBar.create(app, { title: 'Welcome' });
    </script>
@endsection