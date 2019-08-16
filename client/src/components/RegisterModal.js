import React, { useContext } from "react";
import "./RegisterModal.css";
import { StateContext } from "../StateContext";
import useForm from "react-hook-form";
const RegisterModal = () => {
  const [state, setState] = useContext(StateContext);
  const closeBtn = () => {
    setState({ ...state, registerToggle: false });
  };
  const { register, errors, handleSubmit } = useForm({ mode: "onBlur" });
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <section className="register-wrapper">
        <div className="register-content">
          <button className="close-btn" onClick={closeBtn}>
            x
          </button>
          <div className="flex flex-col items-center h-full py-8">
            <h3 className="text-2xl">Register</h3>
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  name="username"
                  className={
                    errors.username
                      ? "border-red-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  }
                  id="username"
                  type="text"
                  placeholder="username"
                  ref={register({
                    required: true,
                    minLength: 6
                  })}
                />
                <div className="text-red-500 pt-2 text-sm italic">
                  {(errors.username &&
                    errors.username.type === "required" &&
                    "Field is required") ||
                    (errors.username &&
                      errors.username.type === "minLength" &&
                      "Must be at least 6 characters")}
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  name="email"
                  className={
                    errors.email
                      ? "border-red-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  }
                  id="email"
                  type="email"
                  placeholder="e.g test@mail.com"
                  ref={register({
                    required: true,
                    minLength: 3,
                    pattern: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/
                  })}
                />
                <div className="text-red-500 pt-2 text-sm italic">
                  {(errors.email &&
                    errors.email.type === "required" &&
                    "Field is required") ||
                    (errors.email &&
                      errors.email.type === "pattern" &&
                      "Must be a valid email address") ||
                    (errors.email &&
                      errors.email.type === "minLength" &&
                      "Must be at least 3 characters")}
                </div>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  name="password"
                  ref={register({
                    required: true,
                    pattern: /^(?=.{8,})(?=.*[0-9])/
                  })}
                  className={
                    errors.password
                      ? "border-red-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  }
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <div className="text-red-500 text-sm italic pt-2">
                  {(errors.password &&
                    errors.password.type === "required" &&
                    "Field is required") ||
                    (errors.password &&
                      errors.password.type === "pattern" &&
                      "Must be a valid email address")}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default RegisterModal;
