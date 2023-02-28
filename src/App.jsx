import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Nopage from "./component/nopage/Nopage";
import Login from "./component/login/Login";
import Content from "./component/content/Content";
import Cart from "./component/cart/Cart"
import Profile from "./component/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} >
          <Route index element={<Content />}/>
          <Route path="/home/cart" element={<Cart/>}/>
          <Route path="/home/profile" element={<Profile/>}/>
        </Route>
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
