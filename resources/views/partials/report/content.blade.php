<content>
    <div class="container">

        <div class="section-header">
            <h2 class="section-title text-center">Users</h2>
            <hr>
        </div>

        @if ($data->count())

            @foreach($data as $element)
                <div>
                    {{ $element->firstname }}
                    {{ $element->lastname }}
                </div>
                <br>
            @endforeach

        @endif

    </div>
</content>