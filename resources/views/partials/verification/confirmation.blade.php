<section id="confirmation-area">
    <div class="container">
        <div class="row row-centered">
            <div class="section-header">
                <h2 class="section-title text-center wow fadeInDown animated" style="visibility: visible;">Verifieer
                    uw account!</h2>
                <p class="text-center wow fadeindown animated" style="visibility: visible;">Klik de link.</p>
            </div>
            <p>
                Hartelijk bedankt voor de registratie, we hebben een verificatie e-mail gestuurd
                naar {{$user->email}}.
                Mocht u de e-mail niet hebben ontvangen, check dat uw spam box, het is mogelijk dat hij hier tussen
                zit.

                Heeft u nog niks ontvangen klik dan <a href="">hier</a> om een nieuwe e-mail te verzenden.
            </p>

            <p>
                Wilt u terug naar de home pagina? Klik dan <a href="{{URL::to('/')}}">hier</a>
            </p>
        </div>
    </div>
</section><!--/#bottom-->
