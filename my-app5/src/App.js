import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Add from './Add';
import Sub from './Sub';
import Circle from './Circle';
import Info from './Info';
import MyComp from './MyComp';
import Counter from './Counter';

function App() {
  return (
    
    <div className="App">
      
     
      <h1>HELLO WORLD</h1>
        
        

        {/* <Greet name = "Ayush was here in the "city ="World"></Greet>
        <Greet></Greet>
        <Greet></Greet>
        <Greet></Greet>
        <Greet></Greet>
        <Greet></Greet>
        <Greet></Greet> */}

        <Add a ={2}b={3}></Add>
        <br></br>
        <Sub p={4}q={2}></Sub>
        <br></br>
        <Circle r={2}></Circle>
        <br></br>
        <br></br>
        <Info> <h3>This is my place</h3></Info>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <hr></hr>
        <hr></hr>

        <MyComp></MyComp>
        <br></br>
        <br></br>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <br></br>
        <br></br>
        <Counter></Counter>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        
    </div>
  );
}

export default App;
