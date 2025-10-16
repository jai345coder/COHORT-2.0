import React from "react";

function Card({users}) {
  
    const {name , job ,img ,post} = users;
    return (
        <>
           {
    users.map((elem )=>{
    return(


        <div className="Card h-[30vh] w-[20vw] bg-white rounded-[10px] pr-[10px] pl-[10px] pt-[10px] pb-[10px] border-[2px] border-black">
                <div className="up w-full border-b-[1px] h-[25%] flex items-center gap-[10px] justify-left ">
                   <div className="up1 h-full w-[60%]  flex items-center gap-[10px]">
                     <div className="logo rounded-full h-[45px] w-[45px] bg-black"> <img className="w-full h-full rounded-full object-cover" src={elem.img} alt="" /></div>
                    <h4 className="text-black text-[14px] font-bold ">{elem.name}</h4>
                   </div>
                   <div className="job h-[80%] w-[35%] bg-green-700 rounded-[10px] flex items-center justify-center"><h5 className="text-white text-[16px]">{elem.job}</h5></div>
                </div>
                <div className="para w-full h-[65%] pt-[10px]">
                    <p className="text-black text-[14px] ">{elem.post}</p>
                </div>
            </div>
    )
})

           }
        </>
    )
}

export default Card