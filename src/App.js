import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";

import Welcome from "./components/Welcome";
import Comment from "./components/Comment";
import Car from "./components/Car";

const comment = {
  date: new Date(),
  text: 'I hope you enjoy my restaurent!!',
  author: {
    name: 'Vien',
    avatarUrl: 'https://www.w3schools.com/howto/img_avatar.png',
  }
}

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Welcome name="Vien"/>
      <Comment date={comment.date} text={comment.text} author={comment.author}/>
      <Car/>
    </div>
  );
}

export default App;
