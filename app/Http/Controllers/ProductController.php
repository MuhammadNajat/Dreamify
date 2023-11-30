<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\Product;

class ProductController extends Controller
{
    public function showCreateProductPage(Request $request) {
        $productId = $request->productId;
        $collectionId = $request->collectionId;
        return view("createProduct",  [
            "productId" => $productId,
            "collectionId" => $collectionId
        ]);
    }

    public function processProductSubmission(Request $request) : RedirectResponse {
        $productId = $request->productId;
        if ($productId != 0) {
            $product = Product::find($productId);
        } else {
            $product = new Product();
        }

        $collectionId = $request->collectionId;

        $product->name = $request->name;
        $product->description = $request->description;
        $product->shop_id = auth()->user()->id;
        $product->collection_id = $collectionId;

        if ($product->save()) {
            // Successfully saved
        } else {
            $errors = $product->getErrors();
            dd("". $errors[0]->getMessage());
        }

        try {
            $redirectUrl = getRedirectRoute('products', ["collectionId" => $collectionId]);
            return redirect($redirectUrl);
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }
}
