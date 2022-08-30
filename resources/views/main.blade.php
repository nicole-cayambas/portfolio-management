<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{config('app.name')}}</title>

    </head>
    <body>
        <div id="root">you need to enable javascript to load this page.</div>
        {{-- @viteReactRefresh --}}
        @vite(['resources/js/app.jsx'])
    </body>
</html>
