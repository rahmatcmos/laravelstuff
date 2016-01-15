@extends('layouts.pdf')

@section('title')
    Users Report
@stop

@section('content')

    <div>
        <h2 style="text-align: center">Users</h2>
        <hr>

        @if ($data->count())
            <table style="width: 100%;" cellpadding="5" cellspacing="3">
                <thead>
                <tr>
                    <th>Voornaam</th>
                    <th>Achternaam</th>
                </tr>
                </thead>
                <tbody>
                @foreach ($data as $element)
                    <tr>
                        <td>{{ $element->firtsname }}}</td>
                        <td>{{ $user->lastname }}}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        @endif
    </div>

@stop