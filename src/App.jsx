import React, { useState } from 'react'
import Cards from './Components/Cards';
import Forms from './Components/forms';



// The issue is that the data state is not being updated when the forms component is changed. This is because the setData function is not being called when the forms component is changed. To fix this, we need to call the setData function when the forms component is changed.
function App() {
  
 

const HandleFormData = (data )=>{
 
  console.log(data);
  
  setData((prevData) => [...prevData, data]);
  
}

  const [data, setData] = useState( [{ img: "https://i.pinimg.com/736x/93/d8/30/93d8307322a0c89c7f741aec3da19565.jpg", name: "Amit", job: "Developer", post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex voluptatem delectus, deleniti nisi porro saepe non esse! Dolore iste dicta beatae, eveniet libero laudantium fuga! Suscipit, delectus dolor. Dolorem." }, { img: "https://i.pinimg.com/736x/60/fa/99/60fa999f748f9ce5feaf88a673c4c6e4.jpg", name: "Rahul", job: "Designer", post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex voluptatem delectus, deleniti nisi porro saepe non esse! Dolore iste dicta beatae, eveniet libero laudantium fuga! Suscipit, delectus dolor. Dolorem." }, { img: "https://i.pinimg.com/736x/3a/bb/40/3abb408279ad7288462ada2e213b2e49.jpg", name: "Rakesh", job: "Developer", post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex voluptatem delectus, deleniti nisi porro saepe non esse! Dolore iste dicta beatae, eveniet libero laudantium fuga! Suscipit, delectus dolor. Dolorem."  }]);

  return (
    <div className="h-screen w-full bg-gray-800 gap-[40px] pr-[40px] pl-[40px] flex items-center justify-center overflow-hidden">
      <div className="form h-[50vh] w-[30vw] flex bg-white rounded-[20px] overflow-hidden">
        <Forms HandleFormData={HandleFormData} ></Forms>
      </div>
      <div className="App h-[90vh] w-[90vw] bg-white rounded-[20px] flex-col flex  overflow-hidden border-[2px] border-black">

        <Cards  users={data} ></Cards>

      </div>

    </div>
  )
}
export default App;

