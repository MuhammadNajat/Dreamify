<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
        <form method="POST" action="{{ route('submitCollection') }}">
            @sessionToken
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" />
            </div>

            <div>
                <label for="description">Description</label>
                <input type="text" id="description" name="description" />
            </div>

            <div>
                <button type="submit">Create</button>
            </div>
        </form>
        
    </body>
</html>