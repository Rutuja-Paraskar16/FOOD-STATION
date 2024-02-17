const Header = () => {
  return(
    <>
    <nav className="navbar navbar-expand-sm ">
    <div className="container-fluid">
      <a className="navbar-brand" ></a>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpe5INDYrOUrFLpjA7e9cauuBATLWI3EP8ww&usqp=CAU" height="80px" width="100px"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="text" placeholder="Search"/>
          <button className="btn btn-primary" type="button">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </>
  )
  }
  export default Header;