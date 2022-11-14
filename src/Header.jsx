import axios from "axios";

export function Header() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div>
          <div className="flex space-x-7">
            <a href="#" className="flex items-center py-2 px-2">
              <img
                src="https://res.cloudinary.com/dmfbcxwc9/image/upload/v1668351603/logoipsum-275_s14rts.svg"
                alt="Logo"
                className="h-12 w-12 mr-2"
              />
              <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                Seer
              </span>
            </a>
            <div className="flex items-center space-x-1 ml-auto">
              {localStorage.jwt === undefined ? (
                <a
                  className="py-2 px-2 font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
                  href="#"
                >
                  Welcome!
                </a>
              ) : (
                <a
                  className="py-2 px-2 font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
                  href="#"
                  onClick={handleClick}
                >
                  Logout
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
