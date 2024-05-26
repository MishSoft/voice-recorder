import React, { useState } from "react";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

export default function Auth() {
  const [isReg, setIsReg] = useState<boolean>(false);
  console.log(isReg);
  return (
    <div className="w-full">
      {!isReg ? <Login setIsreg={setIsReg} /> : <Register setIsReg={setIsReg} />}
    </div>
  );
}
