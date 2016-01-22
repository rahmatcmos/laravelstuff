<div class="upload-wrapper">
    <section id="upload-area">
        <div class="container">
            <div class="row col-md-6 col-md-offset-3">
                <div class="section-header">
                    <h2 class="section-title text-center wow fadeInDown animated" style="visibility: visible;">Upload uw CSV
                        bestand.</h2>
                    <p class="text-center wow fadeindown animated" style="visibility: visible;">Selecteer uw bestand.</p>
                </div>

                {!! Form::open(['id' => 'upload-form', 'files'=>true]) !!}
                @if(Session::has('message'))
                    <script>
                        swal("{!! Session::get('message') !!}");
                    </script>
                @endif
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">Geaccepteerde csv files:</div>
                    </div>
                    <div class="panel-body">
                        <ul>
                            <li>Connections.csv</li>
                            <li>Positions.csv</li>
                            <li>Events.csv</li>
                            <li>Monitoring.csv</li>
                        </ul>
                    </div>
                </div>
                <label for="upload">Selecteer uw file:</label>
                <input type="file" class="filestyle" name="file" id="upload" data-icon="false">
                </br>
                <button type="submit" class="btn btn-primary">Upload</button>
                {!! Form::close() !!}
            </div>
        </div>
    </section><!--/#bottom-->
</div>
