const OffCanvas = () => {
 let html = `
 <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top flex-row j-around a-center"
 aria-label="Dark_offcanvas_navbar">
 <div class="container-fluid">
  <a class="navbar-brand" href="#">{Company Name}</a>
  <button class="navbar-toggler" type="button" data-toggle="offcanvas" data-target="#offcanvasNavbarDark"
   aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbarDark"
   aria-labelledby="offcanvasNavbarDarkLabel">
   <div class="offcanvas-header bg-dark">
    <h5 class="offcanvas-title" id="offcanvasNavbarDarkLabel">
     {Offcanvas Title}
    </h5>
    <button type="button" class="btn-close btn-close-white" data-dismiss="offcanvas" aria-label="Close"></button>
   </div>
   <div class="offcanvas-body bg-dark">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
     <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Home</a>
     </li>
     <li class="nav-item">
      <a class="nav-link" href="#">About</a>
     </li>
     <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
       Projects
      </a>
      <ul class="dropdown-menu">
       <li><a class="dropdown-item" href="#">Calculator</a></li>
       <li>
        <a class="dropdown-item" href="#">Budget Tracker</a>
       </li>
       <li>
        <hr class="dropdown-divider" />
       </li>
       <li>
        <a class="dropdown-item" href="#">Customer Database</a>
       </li>
      </ul>
     </li>
    </ul>
    <form class="d-flex mt-3 ml-5" role="search">
     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
     <button class="btn btn-outline-success" type="submit">
      Search
     </button>
    </form>
   </div>
  </div>
 </div>
</nav>
 `;

 return html;
};

export { OffCanvas };