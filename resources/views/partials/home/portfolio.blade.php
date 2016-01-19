<section id="portfolio">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title text-center wow fadeInDown">Onze Werken</h2>
            <p class="text-center wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>

        <div class="text-center">
            <ul class="portfolio-filter">
                <li><a class="active" href="#" data-filter="*">Openbare Orde en Veiligheid</a></li>
                <li><a href="#" data-filter=".animation">Politie</a></li>
                <li><a href="#" data-filter=".Business">Brandweer</a></li>
                <li><a href="#" data-filter=".art">Ambulance</a></li>
            </ul><!--/#portfolio-filter-->
        </div>

        <div class="portfolio-items">
            <div class="portfolio-item animation">
                <div class="portfolio-item-inner">
                    <img class="img-responsive" src="{{ URL::asset('img/portfolio/01.jpg') }}" alt="">
                    <div class="portfolio-info">
                        <h3>Portfolio Item 1</h3>
                        <a class="preview" href="{{ URL::asset('img/portfolio/full.jpg') }}" rel="prettyPhoto">
                            <img src="{{ URL::asset('img/portfolio/expand.png') }}" alt="">
                        </a>
                    </div>
                </div>
            </div><!--/.portfolio-item-->

            <div class="portfolio-item Business art">
                <div class="portfolio-item-inner">
                    <img class="img-responsive" src={{ URL::asset("img/portfolio/02.jpg") }} alt="">
                    <div class="portfolio-info">
                        <h3>Portfolio Item 2</h3>
                        <a class="preview" href= {{ URL::asset("img/portfolio/full.jpg") }} rel="prettyPhoto">
                            <img src={{ URL::asset("img/portfolio/expand.png") }} alt="">
                        </a>
                    </div>
                </div>
            </div><!--/.portfolio-item-->

            <div class="portfolio-item animation">
                <div class="portfolio-item-inner">
                    <img class="img-responsive" src={{ URL::asset("img/portfolio/03.jpg") }} alt="">
                    <div class="portfolio-info">
                        <h3>Portfolio Item 3</h3>
                        <a class="preview" href={{ URL::asset("img/portfolio/full.jpg") }} rel="prettyPhoto">
                            <img src={{ URL::asset("img/portfolio/expand.png") }} alt="">
                        </a>
                    </div>
                </div>
            </div><!--/.portfolio-item-->

            <div class="portfolio-item Business">
                <div class="portfolio-item-inner">
                    <img class="img-responsive" src={{ URL::asset("img/portfolio/04.jpg") }} alt="">
                    <div class="portfolio-info">
                        <h3>Portfolio Item 4</h3>
                        <a class="preview" href= {{ url::asset("img/portfolio/full.jpg") }} rel="prettyPhoto">
                            <img src={{ URL::asset("img/portfolio/expand.png") }} alt="">
                        </a>
                    </div>
                </div>
            </div><!--/.portfolio-item-->

            <div class="portfolio-item animation art">
                <div class="portfolio-item-inner">
                    <img class="img-responsive" src={{ URL::asset("img/portfolio/05.jpg") }} alt="">
                    <div class="portfolio-info">
                        <h3>Portfolio Item 5</h3>
                        <a class="preview" href={{ URL::asset("img/portfolio/full.jpg") }} rel="prettyPhoto">
                            <img src={{ URL::asset("img/portfolio/expand.png") }} alt="">
                        </a>
                    </div>
                </div>
            </div><!--/.portfolio-item-->

            <div class="portfolio-item Business">
                <div class="portfolio-item-inner">
                    <img class="img-responsive" src={{ URL::asset("img/portfolio/06.jpg") }} alt="">
                    <div class="portfolio-info">
                        <h3>Portfolio Item 5</h3>
                        <a class="preview" href={{ URL::asset("img/portfolio/full.jpg") }} rel="prettyPhoto">
                            <img src={{ URL::asset("img/portfolio/expand.png") }} alt="">
                        </a>
                    </div>
                </div>
            </div><!--/.portfolio-item-->

            <div class="portfolio-item animation art">
                <div class="portfolio-item-inner">
                    <img class="img-responsive" src={{ URL::asset("img/portfolio/07.jpg") }} alt="">
                    <div class="portfolio-info">
                        <h3>Portfolio Item 7</h3>
                        <a class="preview" href={{ URL::asset("img/portfolio/full.jpg") }} rel="prettyPhoto">
                            <img src={{ URL::asset("img/portfolio/expand.png") }} alt="">
                        </a>
                    </div>
                </div>
            </div><!--/.portfolio-item-->

            <div class="portfolio-item Business">
                <div class="portfolio-item-inner">
                    <img class="img-responsive" src={{ URL::asset("img/portfolio/08.jpg") }} alt="">
                    <div class="portfolio-info">
                        <h3>Portfolio Item 8</h3>
                        <a class="preview" href={{ URL::asset("img/portfolio/full.jpg") }} rel="prettyPhoto">
                            <img src={{ URL::asset("img/portfolio/expand.png") }} alt="">
                        </a>
                    </div>
                </div>
            </div><!--/.portfolio-item-->
        </div>
    </div><!--/.container-->
</section><!--/#portfolio-->

