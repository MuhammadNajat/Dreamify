<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Redirect;
//use App\Http\Controllers\RedirectResponse;
use Illuminate\Http\RedirectResponse;
use App\Models\Collection;
use App\Models\Product;

class CollectionController extends Controller
{
    function showAboutPage() {
        return view("about");
    }

    function showCollectionsPage() {
        $collections = Collection::where('shop_id', auth()->user()->id)->get();
        return view("collections", compact("collections"));
    }

    function showCreateCollectionPage(Request $request) {
        $collectionId = $request->collectionId;
        return view("createCollection",  [
            "collectionId" => $collectionId,
        ]);
    }

    function processCollectionSubmission(Request $request) : RedirectResponse {
        $collectionId = $request->collectionId;
        if ($collectionId != 0) {
            $collection = Collection::find($collectionId);
        } else {
            $collection = new Collection();
        }

        $collection->name = $request->name;
        $collection->description = $request->description;
        $collection->shop_id = auth()->user()->id;

        if ($collection->save()) {
            // Successfully saved
        } else {
            $errors = $collection->getErrors();
            dd("". $errors[0]->getMessage());
        }

        try {
            $redirectUrl = getRedirectRoute('collections');
            return redirect($redirectUrl);
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }

    public function showProductsPage(Request $request) {
        $collectionId = $request->collectionId;
        $collection = Collection::find($collectionId);
        $products = Product::where('collection_id', $collectionId)->get();
        return view("products", compact("products","collection"));
    }
}
