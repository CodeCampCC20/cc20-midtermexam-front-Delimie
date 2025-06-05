import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputForm from "../components/form/InputForm";
import { schemaLogin } from "../validate/schemaLogin";
import * as Yup from "yup";
import yupValidate from "../validate/yupValidate";
import axios from "axios";
import { fetchLogin } from "../apis/todoApi";

const initialInput = {
  username: "",
  password: "",
};

function LoginPage() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setInputError((prev) => ({ ...prev, [name]: "" }));
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      await schemaLogin.validate(input, { abortEarly: false });
      console.log('Hello')
      // const res = await axios.post("http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/login", input)
      const res = await fetchLogin(input);
      console.log(res.data);
      navigate("mytodo");
      setInput(initialInput);
      setInputError(initialInput);
      toast.success("Login Success");

    } catch (err) {
      toast.error("Login Failed");
      if (err instanceof Yup.ValidationError) {
        const errorYup = yupValidate(err);
        setInputError(errorYup);
      }
    } finally {
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={hdlSubmit}
        className="w-[400px] bg-white mx-auto rounded-2xl p-8 space-y-5 mt-8"
      >
        <h1 className="text-4xl">Welcome</h1>
        <InputForm
          type="text"
          name="username"
          placeholder="username"
          value={input.username}
          handleChange={handleChange}
          error={inputError.username}
        />
        <InputForm
          type="password"
          name="password"
          placeholder="password"
          value={input.password}
          handleChange={handleChange}
          error={inputError.password}
        />
        <button
          type="submit"
          className="w-full py-1 cursor-pointer rounded-sm bg-blue-950 text-white hover:bg-blue-800 duration-150"
        >
          LOG IN
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
