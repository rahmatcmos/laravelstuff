<section id="upload-area">
    <div class="container">
        <div class="row row-centered">
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

                <div class="form-group">
                    <div class="fileUpload btn btn-primary">
                        <i class="fa fa-folder-open-o"></i> Zoek...
                        <input id="file" type="file" class="upload" name="file"/>
                    </div>
                    <input id="path" placeholder="Selecteer bestand" disabled="disabled" id="path"/>
                </div>

                <div class="form-group">
                    {!! Form::button('<i class="fa fa-upload"></i> Upload', ['class' => 'btn btn-primary btn-lg btn-send-msg has-feedback
                    has-feedback-left', 'type' => 'submit']) !!}
                </div>
            </div>

            <script>
                document.getElementById("file").onchange = function () {
                    document.getElementById("path").value = this.value;
                };
            </script>
            {!! Form::close() !!}
        </div>
    </div>
</section><!--/#bottom-->
