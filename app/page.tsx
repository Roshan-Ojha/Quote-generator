import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen" >
      <div className="flex flex-row   justify-between items-center ">
        <div className="text-[30px] font-[700] p-[50px] font-poppins max-[393px]:text-[20px] ">
          <span>Quote</span>
          <br></br>
          <span>Oasis</span>
        </div>
        <button className="mr-[50px] h-[62px] w-[142px] bg-[#4e6cdb] font-poppins rounded-[23px] text-[18px] text-[#cfe0e4] hover:bg-[#cfe0e4] hover:text-[#4e6cdb] hover:border-[1px] hover:border-[#4e6cdb]  max-[393px]:h-[31px] max-[393px]:w-[71px]  max-[393px]:text-[12px]">
          Register
        </button>
      </div>

      <div className="flex flex-col justify-center items-center w-9/12  self-center content-center max-[393px]:w-11/12 mt-[100px] max-[393px]:mt-[40px]">
        <div className="text-[#27252e] text-[76px] self-center max-[393px]:text-[35px] font-[700]">
          Quote of the Day
        </div>
        <div className="text-[#414044] font-poppins text-[47px] flex flex-col justify-center items-center content-center self-center max-[393px]:text-[20px] mt-[50px] leading-[80px] max-[393px]:mt-[20px] max-[393px]:leading-[35px]">
          Never give up because you never know if the next try is going to be
          the one that works .
        </div>
        <div className="text-[39px] text-[#58565a] flex self-end mr-[10px] max-[393px]:text-[15px] mt-[25px]">
          Roshan Ojha
        </div>
        <button className="self-end mt-[50px] h-[111px] w-[313px] bg-[#4e6cdb] font-poppins rounded-[23px] text-[33px] font-[700] text-[#cfe0e4] hover:bg-[#cfe0e4] hover:text-[#4e6cdb] hover:border-[1px] hover:border-[#4e6cdb] max-[393px]:h-[55px] max-[393px]:w-[156px] max-[393px]:text-[20px] max-[393px]:font-[500] max-[393px]:mt-[30px]">
          New Quote
        </button>
      </div>
    </div>
  );
}
