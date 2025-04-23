import "./Nav.scss";

function Navbar() {
  const user = true;

  return (
    <nav>
      <div className="left">
      <a href="/" className="logo">
        <img src="/locuslogo.svg" alt="Logo" />
        <span>LocusEstate</span>
        </a>

        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">
          Sign up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
