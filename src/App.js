import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmorder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/myorders.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/users.scss";
import "./styles/orders.scss";
import "./styles/about.scss";
import "./styles/notfound.scss";
import "./styles/loading.scss";



import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import Confirmorder from "./components/Cart/Confirmorder";
import PaymentSuccess from "./components/Cart/PaymentSuccess";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import MyOrders from "./components/MyOrders/MyOrders";
import OrderDetails from "./components/MyOrders/OrderDetails";
import Dashboard from "./components/Admin/Dashboard";
import Users from "./components/Admin/Users";
import Orders from "./components/Admin/Orders";
import About from "./components/About/About";
import NotFound from "./components/Layout/NotFound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";
import toast, { Toaster } from "react-hot-toast";
import { AdminRoutes, UserLoggedRoutes, UserNotLoggedRoutes } from './utils/ProtectedRoutes'




function App() {


  const dispatch = useDispatch();
  const { error, message, isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" })
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" })
    }
  }, [dispatch, error, message])



  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />



        <Route element={<UserNotLoggedRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>


        <Route element={<UserLoggedRoutes />}>
          <Route path="/me" element={<Profile />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/confirmorder" element={<Confirmorder />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        </Route>


        <Route element={<AdminRoutes />}>

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />

        </Route>



        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
