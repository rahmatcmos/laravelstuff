<section id="login-area">
    <div class="container">
        <div class="row">
            <div class="section-header">
                <h2 class="section-title text-center wow fadeInDown animated" style="visibility: visible;">Login met uw
                    Lorem Ipsum-account</h2>
                <p class="text-center wo
                    w fadeindown animated" style="visibility: visible;">Login met uw CityGis-account</p>
            </div>
            {!! Form::open(['id' => 'login-form']) !!}
            @if(Session::has('message'))
                <script>
                    swal("{!! Session::get('message') !!}");
                </script>
            @endif
            <h4 style="margin-top: 2em;">{!! "Login" !!}</h4>
            <hr/>

            @include('partials.forms.errors')

                    <!--- E-Mail Field --->
            <div class="form-group">
                {!! Form::label('email', 'E-Mail:') !!}
                {!! Form::text('email', null, ['class' => 'form-control', 'placeholder' => 'E-mail']) !!}
            </div>

            <!--- Wachtwoord Field --->
            <div class="form-group">
                {!! Form::label('password', 'Wachtwoord:') !!}
                {!! Form::password('password', ['class' => 'form-control', 'placeholder' => 'Wachtwoord', 'autocomplete' => 'off']) !!}
            </div>

            <!--- Login Field --->
            <div class="form-group">
                {!! Form::button('<i class="fa fa-arrow-right"></i> Login', ['class' => 'btn btn-primary btn-lg btn-send-msg has-feedback
                has-feedback-left', 'type' => 'submit']) !!}
            </div>
            {!! Form::close() !!}
        </div>
    </div>
</section><!--/#bottom-->
