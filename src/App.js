import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import allSkills from './models/info'
import { useState } from "react";
// ------------------------------------------[]

function App() {

  const [count,setCount] = useState(0)
  const [currentInstance,setCurrentInstance] = useState(allSkills[count])
  // -----------------------------------------
  // const [title,setTitle] = useState("Software Engineering")
  // // -----------------------------------------
  // const [education,setEducation] = useState("")
  // // -----------------------------------------
  // const [currentImg, setCurrentImg] = useState('')
  // // -----------------------------------------
  // const [skills, setSkills] = useState('')
  // // -----------------------------------------
  // const [occupation,setOccupation] = useState("")
  // // -----------------------------------------
  // const [contact,setContact] = useState("")

  // -------------{State}

  const onChange=()=>{
    setCount(count+1)
    setCurrentInstance(allSkills[count])
    console.log("Count:",count)
  }
  const onRev = ()=>{
    setCount(count-1)
    setCurrentInstance(allSkills[count])
    console.log("Count:",count)
  }
  return (
    <div className="App">
      <button onClick={onRev}> Prev </button>
      <button onClick={onChange}> Next</button>
      <div className="headerContainer">
        <Header count={count}data={currentInstance} />
      </div>
      <hr />
      <div className="contactContainer">
        <Contact count={count}data={currentInstance}/>
      </div>
      <div className="eduContainer">
        <Education count={count}data={currentInstance}/>
      </div>
      <div className="workContainer">
        <Work count={count}data={currentInstance}/>
      </div>
      <div className="galleryContainer">
        <Gallery count={count}data={currentInstance}/>
      </div>
      <div className="skillsContainer">
        <Skills count={count}data={currentInstance}/>
      </div>
    </div>
  );
}

export default App;
