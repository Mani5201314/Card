
import "./nav.css"
const Nav = () => {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-light " style={{ background: "#131921" }}>

        <div class="container-fluid">

          <a class="navbar-brand" href="#"><img src="/img/logo.jpeg" alt="" />

            <input type="search" name="" id="search" placeholder='Search Amazon' />
            <img src="/img/search.png" style={{width:"41px",position:"absolute",left:"58.5%",top:"20.2%",borderRadius:"0px 10px 10px 0px"}} alt="" />

          </a>
          

          <select name="prime videos" id="videos-select">
            <option value="">Prime Video</option>
            <option value="dog">Action</option>
            <option value="cat">Romance</option>
            <option value="hamster">Fun</option>
            <option value="parrot">Family</option>
            <option value="spider">kids</option>
          </select>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarText" >
            <ul class="navbar-nav me-auto mb-1 mb-lg-0">

              <li class="nav-item">
                <a class="nav-link active" style={{ color: "white" }} aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">

                <select name="videos" id="videos">
                  <option value="">Videos</option>
                  <option value="dog">Action</option>
                  <option value="cat">Romance</option>
                  <option value="hamster">Fun</option>
                  <option value="parrot">Family</option>
                  <option value="spider">kids</option>
                </select>
              </li>
              <li class="nav-item">
              <select name="videos" id="videos">
                  <option value="">Music</option>
                  <option value="dog">ClassicRock</option>
                  <option value="cat">Hard Rock</option>
                  <option value="hamster">Alternative</option>
                  <option value="parrot">Classical</option>
                  <option value="spider">Symphony</option>
                  <option value="spider">Choral</option>
                  <option value="spider">A Cappella</option>
                  <option value="spider">Barbershop</option>
                </select>
              </li>
            </ul>
            <span class="navbar-text">
              <a href=""> <button id="button">Login</button></a>

            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;