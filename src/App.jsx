import JoinUS from "./Components/Buttons/JoinUs";
import Settings from "./Components/Buttons/Settings";
import Login from "./Components/Buttons/Login";
import ContactUS from "./Components/Buttons/ContactUS";
import Search from "./Components/Buttons/Search";
import Help from "./Components/Buttons/Help";
import Download from "./Components/Buttons/Download";
import Home from "./Components/Buttons/Home";
import Button from "./Components/Button/Button";
import './App.css';

// import Settings from "./Components/Buttons/Settings";



function App() {
    return (
        <>
            <div className="container my-5 col-4">


                <JoinUS /> <Settings />
                <Login /> <ContactUS />
                <Search /> <Help />
                <Home /> <Download />
            </div>
            
            <div className="container my-5 col-4">
                <h3>Part 2 </h3> 
                <Button  name={"Join Us" , "JoinUS"} /> 
                <Button name={"Settings"}/> 
                <Button name={"Login"}/> 
                <Button name={"Contact-Us"}/> 
                <Button name={"Search"}/> 
                <Button name={"Help"}/> 
                <Button name={"Home"}/> 
                <Button name={"Download"}/> 
            </div>
        </>
    );
  
}

export default App;
