import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Homepage/Home";
import Signup from "./Signup_Login/Signup";
import Login from "./Signup_Login/Login";
import Profile from "./Profile_page/Profile";
import Contact from "./Contact/Contact";
import Footer from "./Footer/footer";
import Cart from "./Cart/Cart";
import AllProductsCatalog, {
  BedProductsCatalog,
  DiningProductsCatalog,
  LivingProductsCatalog,
} from "./Homepage/Homepage_components/Products_catalog";
const isSignedIn = true;

export default function App() {
  if (isSignedIn == true) {
    return (
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/productsCatalog" element={<AllProductsCatalog></AllProductsCatalog>}></Route>
          <Route path="productsCatalogLiving" element={<LivingProductsCatalog></LivingProductsCatalog>}></Route>
          <Route path="productsCatalogDining" element={<DiningProductsCatalog></DiningProductsCatalog>}></Route>
          <Route path="productsCatalogBed" element={<BedProductsCatalog></BedProductsCatalog>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    );
  } else {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
