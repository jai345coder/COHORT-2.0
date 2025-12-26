import { useRef } from "react";
import React,{ useState} from "react";



/**
 * This function renders a form that the user can fill out to create a new user.
 * The form has fields for the user's name, job, image, and post.
 * When the user submits the form, the function calls the HandleFormData function from the parent component and passes in the new user object.
 */
function Forms({HandleFormData}) {

    // Refs are used to access the values of the form fields.
    const Name = useRef(null);
    const Feild = useRef(null);
    const img = useRef(null);
    const Post = useRef(null);

    // This function is called when the form is submitted.
    const handleForm =(e)=>{
        // Prevent the default form submission behavior.
        e.preventDefault();

        // Call the HandleFormData function from the parent component and pass in the new user object.
        HandleFormData({
            name: Name.current.value, // Get the value of the name field.
            job: Feild.current.value, // Get the value of the job field.
            img: img.current.value, // Get the value of the image field.
            post: Post.current.value // Get the value of the post field.
        });
    }

    // This JSX element renders the form.
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
