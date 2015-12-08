<section id="registration-area">
    <div class="container">
        <div class="row" id="pwd-container">
            <div class="section-header">
                <h2 class="section-title text-center wow fadeInDown animated" style="visibility: visible;">Maak uw
                    CityGis-account</h2>
                <p class="text-center wow fadeindown animated" style="visibility: visible;">Vul het formulier in.</p>
            </div>
            {!! Form::open(['id' => 'registration-form', 'autocomplete' => 'on']) !!}
            <h4 style="margin-top: 2em;">{!! "Persoonlijke gegevens" !!}</h4>
            <hr/>

            @include('partials.forms.errors')

            <div class="form-group has-feedback">
                <!--- Voornaam Field --->
                {!! Form::label('firstname', 'Voornaam:') !!}
                {!! Form::text('firstname', null, ['class' => 'form-control', 'placeholder' => 'Voornaam']) !!}
                <i id='firstname1' class="glyphicon form-control-feedback center-check"></i>
            </div>
            <div class="form-group has-feedback">
                <!--- Achternaam Field --->
                {!! Form::label('lastname', 'Achternaam:') !!}
                {!! Form::text('lastname', null, ['class' => 'form-control', 'placeholder' => 'Achternaam']) !!}
                <i id='lastname1' class="glyphicon form-control-feedback center-check"></i>
            </div>
            <!--- Telefoonnummer Field --->
            <div class="form-group has-feedback">
                {!! Form::label('phonenumber', 'Telefoonnummer:') !!}
                {!! Form::text('phonenumber', null, ['class' => 'form-control', 'placeholder' => 'Telefoonnummer']) !!}
                <i id='phonenumber1' class="glyphicon form-control-feedback center-check"></i>
            </div>
            <!--- Bedrijfsnaam Field --->
            <div class="form-group">
                {!! Form::label('companyname', 'Bedrijfsnaam:') !!}
                {!! Form::text('companyname', null, ['class' => 'form-control', 'placeholder' => 'Bedrijfsnaam']) !!}
                <span style="font-size: 0.75em; color: gray;">(Optioneel)</span>
            </div>
            <div class="form-inline radio">
                <label style="margin: 0 0.5em 0 0;">
                    {{--{!! Form::radio('radiogrp', 'Nederland', true, ['id' => 'NL']) !!}--}}
                    <input type="radio" name="country" id="NL" checked="checked" value="Nederland">
                    Nederland
                </label>
                <label style="margin: 0 0.3em 1em 0;">
                    {{--        {!! Form::radio('radiogrp', 'else', false, ['id' => 'else']) !!}--}}
                    <input type="radio" name="country" id="else" value="else">
                    Anders...
                </label>
                <select class="form-control input-xs no-radius" name="countries" id="countries">
                    @foreach ($countries as $country => $name)
                        @if ($country === 'AF')
                            <option value="" selected disabled id="choice-select"> {{ "Kies een land..."}}</option>
                            <option id={{$country}}>{!!$name!!}</option>
                        @elseif ($country !== 'NL')
                            <option id={{$country}}>{!!$name!!}</option>
                        @endif
                    @endforeach
                </select>
            </div>
            <div class="form-inline">
                <!--- Postcode Field --->
                <div class="form-group has-feedback" style="margin: 0 3.8em 1em 0;">
                    {!! Form::label('zip', 'Postcode:') !!}
                    <br/>
                    {!! Form::text('zip', null, ['class' => 'form-control', 'style' => 'width: 100%;', 'placeholder' => 'Postcode']) !!}
                    <i style="margin-top: 2.3em;" id='zip1' class="glyphicon form-control-feedback"></i>
                </div>
                <!--- Huisnummer Field --->
                <div class="form-group has-feedback" style="margin-bottom: 1em;">
                    {!! Form::label('streetnumber', 'Huisnummer:') !!}
                    <br/>
                    {!! Form::text('streetnumber', null, ['class' => 'form-control', 'style' => 'width: 100%;', 'placeholder' => 'Huisnummer']) !!}
                    <i style="margin-top: 2.3em;" id='streetnumber1' class="glyphicon form-control-feedback"></i>
                </div>
            </div>
            <div class="form-inline autocomplete">
                <!--- Plaats Field --->
                <div class="form-group has-feedback" style="margin: 0 3.8em 1em 0;">
                    {!! Form::label('town', 'Plaats:') !!}
                    <br/>
                    {!! Form::text('town', null, ['class' => 'form-control', 'style' => 'width: 100%;', 'placeholder' => 'Plaats']) !!}
                    <i style="margin-top: 2.3em;" id='town1' class="glyphicon form-control-feedback"></i>
                </div>
                <!--- Province Field --->
                <div class="form-group has-feedback" style="margin-bottom: 1em;">
                    {!! Form::label('province', 'Provincie:') !!}
                    <br/>
                    {!! Form::text('province', null, ['class' => 'form-control', 'style' => 'width: 100%;', 'placeholder' => 'Provincie']) !!}
                    <i style="margin-top: 2.3em;" id='province1' class="glyphicon form-control-feedback"></i>
                </div>
            </div>
            <h4>{!! "Inloggegevens" !!}</h4>
            <hr/>
            <!--- E-mail Field --->
            <div class="form-group has-feedback">
                {!! Form::label('email', 'E-mail:') !!}
                {!! Form::email('email', null, ['class' => 'form-control', 'placeholder' => 'E-mail']) !!}
                <i id='email1' class="glyphicon form-control-feedback center-check"></i>
            </div>
            <!--- Wachtwoord Field --->
            <div class="form-group has-feedback">
                {!! Form::label('password', 'Wachtwoord:') !!}
                {!! Form::password('password', ['class' => 'form-control', 'placeholder' => 'Wachtwoord']) !!}
                <i id='password1' class="glyphicon form-control-feedback center-check"></i>
            </div>
            <!--- Wachtwoord bevestiging Field --->
            <div class="form-group has-feedback">
                {!! Form::label('password_confirmation', 'Wachtwoord bevestiging:') !!}
                {!! Form::password('password_confirmation', ['class' => 'form-control', 'placeholder' => 'Wachtwoord']) !!}
                <i id='password_confirmation1' class="glyphicon form-control-feedback center-check"></i>
            </div>
            <div class="progress pwstrength_viewport_progress">
                <div class="progress-bar"></div>
            </div>
            <!--- Verzenden Field --->
            <div class="form-group" style="margin-bottom: 2em">
                {!! Form::button('<i class="fa fa-arrow-right"></i> Verzenden', ['class' => 'btn btn-primary btn-lg btn-send-msg has-feedback
                has-feedback-left', 'type' => 'submit', 'value' => 'Verzenden']) !!}
            </div>
        </div>
    </div>
</section>
