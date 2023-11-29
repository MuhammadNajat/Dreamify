<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\URL;

class CollectionController extends Controller
{
    function showAboutPage() {
        return view("about");
    }

    function showCreateCollectionPage() {
        return view("createCollection");
    }

    function showCollectionsPage() {
        return view("collections");
    }

    function getRedirectRoute($routeName, $params = []) {
        $shop = Auth::user();
        $shopDomain = str_replace(".myshopify.com", "", $shop->getDomain()->toNative());
        $path = URL::tokenRoute($routeName, $params);
        //replace http with https
        $path = str_replace("http", "https", $path);
        $path .= "&host=" . base64_encode("admin.shopify.com/store/" . $shopDomain);
        return $path;
    }

    function processCollectionSubmission(Request $request) {
        if ($request->isMethod('post')) {
            /*
            $routeName = "submitCollection";
            $params = [];
            $shop = Auth::user();
            $shopDomain = str_replace(".myshopify.com", "", $shop->getDomain()->toNative());
            $path = URL::tokenRoute($routeName, $params);
            //replace http with https
            $path = str_replace("http", "https", $path);
            $path .= "&host=" . base64_encode("admin.shopify.com/store/" . $shopDomain);
            */
            $path = getRedirectRoute("submitCollection");
            return redirect($path);
        }
        return redirect("seeCollections");
    }
}
