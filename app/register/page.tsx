"use client";

import React, { useState } from "react";
import Verify from "./Verify";
import { useRouter } from "next/navigation";

export default function Register() {
  const [registered, setregistered] = useState(false);
  const [email, setEmail] = useState("");

  function RegisterEmail() {
    setregistered(true);

  }

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="text-[30px] font-[700] p-[50px] font-poppins max-[393px]:text-[20px] ">
        <span>Quote</span>
        <br></br>
        <span>Oasis</span>
      </div>

      <div className="flex self-center text-[24px] text-[#030303] font-poppins">
        Get Inspired, Subscribet to Quote Oasis
      </div>

      {registered?<Verify/>:<div className="h-[39px] w-[526px] flex self-center mt-[100px]  justify-between items-center rounded-[20px] shadow-[0_5px_5px_-3px_rgba(0,0,0,0.2)]">
        <input
          type="text"
          placeholder="Enter your Email Here"
          className="ml-[10px] h-[39px] w-[390px] bg-transparent focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button className="flex  justify-center items-center h-[39px] w-[121px] bg-[#4e6cdb] font-poppins rounded-[23px] text-[12px] text-[#cfe0e4] hover:bg-[#cfe0e4] hover:text-[#4e6cdb] hover:border-[1px] hover:border-[#4e6cdb]  max-[393px]:h-[31px] max-[393px]:w-[71px]  max-[393px]:text-[12px]"
        onClick={RegisterEmail}
        >
          Register
        </button>
      </div>}
    </div>
  );
}
