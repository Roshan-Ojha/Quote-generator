import { use, useState } from "react";
import { useRouter } from "next/navigation";

interface Email {
  useremail: string;
}

export default function Verify(props: Email) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const router = useRouter()

  async function VerifyOTP() {
    try {

     
      const response = await fetch("http://127.0.0.1:4000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: props.useremail,
          otp: otp,
        })
      });

      if (!response.ok) {
        console.log("Hello")
        const errorData = await response.json();
        setError(errorData.error);
      } else {
        const data = await response.json();
        router.push("/")

      }
    } catch (error) {
      console.log("her?")
      setError("Some Error Occured");
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div>{props.useremail}</div>
      <div className="relative h-[39px] w-[526px] flex self-center mt-[100px]  justify-between items-center rounded-[20px] shadow-[0_5px_5px_-3px_rgba(0,0,0,0.2)]">
        <input
          type="text"
          placeholder="Enter your OTP"
          maxLength={6}
          className="ml-[10px] h-[39px] w-[390px] bg-transparent focus:outline-none"
          onChange={(e) => setOtp(e.target.value)}
        ></input>
        {error && (
          <div className="absolute text-red-700 w-full top-[50px] flex justify-center">
            {error}
          </div>
        )}
        <button
          className="flex  justify-center items-center h-[39px] w-[121px] bg-[#4e6cdb] font-poppins rounded-[23px] text-[12px] text-[#cfe0e4] hover:bg-[#cfe0e4] hover:text-[#4e6cdb] hover:border-[1px] hover:border-[#4e6cdb]  max-[393px]:h-[31px] max-[393px]:w-[71px]  max-[393px]:text-[12px]"
          onClick={VerifyOTP}
        >
          Verify
        </button>
      </div>
    </div>
  );
}
