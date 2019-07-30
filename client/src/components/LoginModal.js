import React from "react";
import "./LoginModal.css";
const LoginModal = () => {
  return (
    <React.Fragment>
      <section className="login-wrapper">
        <div className="login-content">
          <button className="close-btn">x</button>
          <div className="flex flex-col items-center h-full py-8">
            <h3 className="text-2xl">Login</h3>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 form">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="e.g test@mail.com"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default LoginModal;
