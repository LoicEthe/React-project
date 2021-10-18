const Carousel = () => (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                    className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={require( "../../assets/img/1.jpg").default} className="d-block w-100" alt="mouette"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Mouette</h5>
                    <p>Pirouette Alouette.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={require( "../../assets/img/2.jpg").default} className="d-block w-100" alt="petit_oiseau"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Petit zozio</h5>
                    <p>Tout ce qui est petit est mignon.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={require( "../../assets/img/3.jpg").default} className="d-block w-100" alt="chiot"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Chiot</h5>
                    <p>Et ouais.</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button"
                data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"/>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button"
                data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"/>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
)
export default Carousel