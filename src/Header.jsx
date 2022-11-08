import axios from "axios";

export function Header() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a> |{" "}
        {localStorage.jwt === undefined ? (
          <a href="#">Link</a>
        ) : (
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        )}
      </nav>
    </header>
  );
}
