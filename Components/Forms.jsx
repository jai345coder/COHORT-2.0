import React, { useRef } from 'react'
function Forms({HandleFormData}) {

    const Name = useRef(null);
    const Feild = useRef(null);
    const img = useRef(null);
    const Post = useRef(null);

    const handleForm =(e)=>{
        e.preventDefault();
        HandleFormData({name:Name.current.value,job:Feild.current.value,img:img.current.value,post:Post.current.value});
    }

    return (
        <div  className="h-full w-full flex items-center justify-center bg-green-700  flex flex-col">
            <form onSubmit={handleForm}  className="h-full w-full gap-[2px] bg-white pt-[20px] pb-[20px] pr-[10px] pl-[10px] flex flex-col items-center justify-center" action="">
                <input ref={Name} className='pt-[5px] pb-[5px] h-[7vh] w-[16vw]  border-[2px] border-black' type="text" placeholder='Name' />
                <input ref={Feild} className='pt-[5px] pb-[5px] h-[7vh] w-[16vw]  border-[2px] border-black' type="text" placeholder='Feild' />
                
                <input ref={img} className='pt-[5px] pb-[5px] h-[7vh] w-[16vw]   border-[2px] border-black'  type="text" placeholder='image'/>
                <br />
                <div  className="para w-full h-[80%] border-[2px] border-black">
                    <textarea ref={Post} className='h-full w-full flex items-center justify-left pr-[10px] pl-[10px] pt-[10px] pb-[10px]' name="" id="">

                    </textarea>
                </div>

                <input  className="bg-black w-[10vw] h-[10vh]   text-white rounded-[10px]" type="Submit" />

            </form>




        </div>
    )
}
export default Forms;