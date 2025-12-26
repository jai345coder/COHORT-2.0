import React,{ useState} from 'react'


import Cards from './Components/Cards'
import Forms from './Components/forms';


// This function is the main component of the application. It renders two components: 
// Forms and Cards. The Forms component is used to add new users to the data state, 
// and the Cards component is used to render the users in the data state as cards.

function App() {
  
  // The initial state of the application is an array of three objects, each representing a user.
  // Each object has an image, a name, a job, and a post.
  const [data, setData] = useState( [{ 
    // The first user is Amit, a developer.
    img: "https://i.pinimg.com/736x/93/d8/30/npm .jpg", 
    name: "Amit", 
    job: "Developer", 
    post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex voluptatem delectus, deleniti nisi porro saepe non esse! Dolore iste dicta beatae, eveniet libero laudantium fuga! Suscipit, delectus dolor. Dolorem."
  }, { 
    // The second user is Rahul, a designer.
    img: "https://i.pinimg.com/736x/60/fa/99/60fa999f748f9ce5feaf88a673c4c6e4.jpg", 
    name: "Rahul", 
    job: "Designer", 
    post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex voluptatem delectus, deleniti nisi porro saepe non esse! Dolore iste dicta beatae, eveniet libero laudantium fuga! Suscipit, delectus dolor. Dolorem."
  }, { 
    // The third user is Rakesh, a developer.
    img: "https://i.pinimg.com/736x/3a/bb/40/3abb408279ad7288462ada2e213b2e49.jpg", 
    name: "Rakesh", 
    job: "Developer", 
    post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex voluptatem delectus, deleniti nisi porro saepe non esse! Dolore iste dicta beatae, eveniet libero laudantium fuga! Suscipit, delectus dolor. Dolorem."
  } ]);

  // This function is called when the Forms component is changed. It updates the data state by adding the new user to the data state.
  const HandleFormData = (data ) => {
    console.log(data);
    setData((prevData) => [...prevData, data]);
  }

  // The Forms component is rendered with the HandleFormData function as a prop.
  return (
    <div className="h-screen w-full bg-gray-800 gap-[40px] pr-[40px] pl-[40px] flex items-center justify-center overflow-hidden">
      <div className="form h-[50vh] w-[30vw] flex bg-white rounded-[20px] overflow-hidden">
        <Forms HandleFormData={HandleFormData} ></Forms>
      </div>
      <div className="App h-[90vh] w-[90vw] bg-white rounded-[20px] flex-col flex overflow-hidden border-[2px] border-black">

        // The Cards component is rendered with the data state as a prop.
        <Cards users={data} ></Cards>

      </div>

    </div>
  )
}
export default App;

