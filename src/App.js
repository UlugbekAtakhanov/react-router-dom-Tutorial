import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ActiveNavbar from "./components/ActiveNavbar";
import OrderSummary from "./pages/OrderSummary";
import PlaceOrder from "./pages/PlaceOrder";
import ActiveNavbar1 from "./components/ActiveNavbar1";
import ActiveNavbar2 from "./components/ActiveNavbar2";
import NoMatch from "./pages/NoMatch";
import Products from "./pages/Products";
import Featured from "./pages/FeaturedProducts";
import New from "./pages/NewProducts";
import Users from "./pages/Users";
import ActiveNavbar3 from "./components/ActiveNavbar3";
import UserDetails from "./pages/UserDetails";
import Admin from "./pages/Admin";
import Users1 from "./pages/Users1";
import UserDetails1 from "./pages/UserDetails1";
import QueryParams from "./pages/QueryParams";
import ActiveNavbar4 from "./components/ActiveNavbar4";

function App() {
    return (
        <div className="App">

            {/* Configuring routes(URL) using Routes and Route component */}
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes> */}


            {/* Link component and creating Navbar component */}
            {/* Link for navigating through the project pages  */}
            {/* <a> element for navigating to external websites */}
            {/* <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes> */}



            {/* NavLink component and active class in it */}
            {/* Use NavLink only in navbar*/}
            {/* by default it receives "active" class, inspect !!! */}
            {/* active class is created in index.css extending @tailwind/components */}
            {/* <ActiveNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes> */}



            {/* Navigating programmatically -- navigates to another URL when state is changed or some event is occured (useState, useEffect) */}
            {/* navigate(-1) == navigate back */}
            {/* replace: true */}
            {/* <ActiveNavbar1 />
            <Routes>
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/order-summary" element={<OrderSummary />} />
            </Routes> */}


            {/* NoMatch route */}
            {/* check console without nomatch route */}
            {/* <ActiveNavbar1 />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/order-summary" element={<OrderSummary />} /> */}
                {/* this route will rendered, if URL dismatch */}
                {/* <Route path = "*" element = {<NoMatch />} />
            </Routes> */}


            {/* Nested Routes and explaining relative links */}
            {/* <ActiveNavbar2 />
            <Routes> */}

                {/* Main route,    and  notice how url is changes*/}
                {/* <Route path="/products" element={<Products />}> */}
                    {/* nested routes */}
                    {/* write nested routes url without slash, otherwise error will occur */}
                    {/* <Route path="featured-products" element={<Featured />} />
                    <Route path="new-products" element={<New />} />
                </Route>

            </Routes> */}


            {/* index prop instead of path, it will render nested component on navigating to parent */}
            {/* <ActiveNavbar2 />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/order-summary" element={<OrderSummary />} /> */}

                {/* Main route,    and  notice how url is changes*/}
                {/* <Route path="/products" element={<Products />}> */}
                    {/* index prop, Featured component will be rendered automatically after navigating to /products */}
                    {/* <Route index element = {<Featured />} />

                    <Route path="featured-products" element={<Featured />} />
                    <Route path="new-products" element={<New />} />
                </Route>

                <Route path="*" element={<NoMatch />} />
            </Routes> */}



            {/* Dynamic Routes */}
            {/* <ActiveNavbar3 />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/order-summary" element={<OrderSummary />} />
                <Route path="/products" element={<Products />}>
                    <Route index element={<Featured />} />
                    <Route path="featured-products" element={<Featured />} />
                    <Route path="new-products" element={<New />} />
                </Route> */}

                {/* users list route */}
                {/* <Route path="/users" element={<Users />} /> */}

                {/* user details route , NOTE! == userId can be any number or string*/}
                {/* /users/1   will render UserDetails */}
                {/* /users/2   will render UserDetails */}
                {/* /users/admin   will render UserDetails */}
                {/* NOTE !!!  this routes are hard-coded(not dynamic) routes */}
                {/* <Route path="/users/1" element={<UserDetails />} />
                <Route path="/users/2" element={<UserDetails />} />
                <Route path="/users/admin" element={<UserDetails />} /> */}

                {/* NOTE !!! this route is dynamic route */}
                {/* <Route path="/users/:userId" element={<UserDetails />} /> */}

                {/* but if you will create Admin component, and will give path, than that component will rendered first than dynamic path with the given path */}
                {/* <Route path = "/users/admin" element = {<Admin />} /> */}
                {/* react-router first will search from "specific routes", if there is no match it will search from "dynamic routes" */}

            {/* </Routes> */}



            {/* useParams function for extracting param from URL */}
            {/* <ActiveNavbar3 />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/order-summary" element={<OrderSummary />} />
                <Route path="/products" element={<Products />}>
                    <Route index element={<Featured />} />
                    <Route path="featured-products" element={<Featured />} />
                    <Route path="new-products" element={<New />} />
                </Route> */}

                {/* you can also use dynamic routes as a nested route */}
                {/* <Route path="/users" element={<Users1 />} >
                    <Route path=":userId" element={<UserDetails1 />} />
                </Route>

                <Route path="*" element={<NoMatch />} />
            </Routes> */}


            {/* useSearchParams -- /users?filter=active, it is especially used in filtering or serching data */}
            {/* <ActiveNavbar4 />
            <Routes> */}
                
                {/* query params */}
                {/* <Route path = "/query" element = {<QueryParams />} />

            </Routes> */}





        </div>
    );
}

export default App;
