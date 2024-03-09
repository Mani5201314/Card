 import "./carousel.css"
 const Carousel = () => {
    return (
        <div className="slides" style={{width:"90%",margin:"10px 65px ",}}>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
 
  <div class="carousel-inner">
    
    <div class="carousel-item active">
      <img src="/img/silde1.webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
                <h5 id="ganesha">Gadget Guru Ganesha</h5>
                <div><a href="#" id="login1"> Watch</a></div>
     </div>
    </div>
    
    <div class="carousel-item">
      <img src="/img/silde2.webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
                <h5 id="ganesha">Gadget Guru Ganesha</h5>
                <div><a href="#" id="login1"> Watch</a></div>
     </div>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
}

export default Carousel;