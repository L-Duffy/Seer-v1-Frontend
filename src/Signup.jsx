import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="bg-gray-800 flex justify-center" id="signup">
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <span className="py-2 font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Signup
          </span>
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2" for="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2" for="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2" for="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2" for="password_confirmation">
              Confirm
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password_confirmation"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="pt-9">
              <button
                className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm  font-medium text-purple-600 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
                type="submit"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                  Submit
                </span>
              </button>
            </div>
            <span className="pt-7 text-purple-600">forgot password?</span>
          </div>
        </form>
      </div>
    </div>
  );
}
