"use client";

import React, { useState } from "react";
import Verify from "./Verify";


export default function Register() {
  const [registered, setregistered] = useState(false);
  const [email, setEmail] = useState("");
  const [error, seterror] = useState("");

  async function RegisterEmail() {
    if (!(email.includes("@") || email.includes("."))) {
      seterror("Invalid Email");
    } else {

      try {
        const response = await fetch("http://127.0.0.1:4000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email
          })
        });
      
        if (!response.ok) {
          // Handle any error status code generically
          // We can parse the error response if needed
          const errorData = await response.json();
          console.error("Error:", errorData);
          // For instance, you can set an error state or display an error message
          seterror(errorData.error);
        } else {
          const data = await response.json();
          console.log(data);
          setregistered(true)
          // Process the data or set any state variables here
        }
      } catch (error) {
        // Handle network errors or other exceptions
        console.error("Network error:", error);
        // For instance, set an error state or display a generic error message
        seterror("Unknown Error");
      }
      
    }
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

      {registered ? (
        <Verify useremail={email} />
      ) : (
        <div className="relative h-[39px] w-[526px] flex self-center mt-[100px]  justify-between items-center rounded-[20px] shadow-[0_5px_5px_-3px_rgba(0,0,0,0.2)]">
          <input
            required
            type="text"
            placeholder="Enter your Email Here"
            className="ml-[10px] h-[39px] w-[390px] bg-transparent focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {error && (
            <div className="absolute text-red-700 w-full top-[50px] flex justify-center">
              {error}
            </div>
          )}
          <button
            className="flex  justify-center items-center h-[39px] w-[121px] bg-[#4e6cdb] font-poppins rounded-[23px] text-[12px] text-[#cfe0e4] hover:bg-[#cfe0e4] hover:text-[#4e6cdb] hover:border-[1px] hover:border-[#4e6cdb]  max-[393px]:h-[31px] max-[393px]:w-[71px]  max-[393px]:text-[12px]"
            onClick={RegisterEmail}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
}
