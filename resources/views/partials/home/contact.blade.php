<section id="contact-area">
    <div class="container">
        <div class="row">
            <div class="section-header">
                <h2 class="section-title text-center wow fadeInDown animated" style="visibility: visible;">Verstuur een Bericht</h2>
                <p class="text-center wow fadeInDown animated" style="visibility: visible;">Laat een berichtje achter en wij nemen zo spoeding mogelijk contact op.</p>
            </div>
            <form id="main-contact-form" name="contact-form" method="post" action="#">
                <div class="col-lg-6 animated animate-from-left" style="opacity: 1; left: 0px;">
                    <div class="form-group has-feedback">
                        <label for="name">Naam (verplicht)</label>
                        <input id="name" type="text" name="name" class="form-control" placeholder="Naam">
                        <i id='name1' class="glyphicon form-control-feedback center-check"></i>
                    </div>
                    <div class="form-group has-feedback">
                        <label for="email">E-mail Adres (verplicht)</label>
                        <input type="email" id="email" name="email" class="form-control" placeholder="E-mail">
                        <i id='email1' class="glyphicon form-control-feedback center-check"></i>
                    </div>
                    <div class="form-group has-feedback">
                        <label for="subject">Onderwerp (verplicht)</label>
                        <input type="text" id="subject" name="subject" class="form-control" placeholder="Onderwerp">
                        <i id='subject1' class="glyphicon form-control-feedback center-check"></i>
                    </div>
                </div>
                <div class="col-lg-6 animated animate-from-right" style="opacity: 1; right: 0px;">
                    <div class="form-group">
                        <label for="message">Bericht (verplicht)</label>
                        <textarea name="message" id="message" class="form-control" rows="8" placeholder="Uw bericht..."></textarea>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="text-center">
                    {!! Form::button('<i class="fa fa-arrow-right"></i> Verzenden', ['class' => 'btn btn-primary btn-lg btn-send-msg has-feedback
                    has-feedback-left', 'type' => 'submit']) !!}
                </div>
            </form>
        </div>
    </div>
</section><!--/#bottom-->
