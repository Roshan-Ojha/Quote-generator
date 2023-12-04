
export default function Verify() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-[39px] w-[526px] flex self-center mt-[100px]  justify-between items-center rounded-[20px] shadow-[0_5px_5px_-3px_rgba(0,0,0,0.2)]">
        <input
          type= "text"
          placeholder="Enter your OTP"
          maxLength={6}
          className="ml-[10px] h-[39px] w-[390px] bg-transparent focus:outline-none"
        ></input>
        <button className="flex  justify-center items-center h-[39px] w-[121px] bg-[#4e6cdb] font-poppins rounded-[23px] text-[12px] text-[#cfe0e4] hover:bg-[#cfe0e4] hover:text-[#4e6cdb] hover:border-[1px] hover:border-[#4e6cdb]  max-[393px]:h-[31px] max-[393px]:w-[71px]  max-[393px]:text-[12px]">
          Verify
        </button>
      </div>
    </div>
  );
}
