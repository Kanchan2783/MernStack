import icon from '../vendor/images/icon.png';
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:" #87fbe1  "}}>
        <div className="container-fluid">
        <span class="navbar-brand mb-0 h1">
        <img src={icon}  alt="" width="30" height="25" />
            Kanchan_Site
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}