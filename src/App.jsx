import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  RouterContextProvider,
} from "react-router";
import "./App.css";
import Navbar from "./componants/rootLayout/Navbar";
import RootLayout from "./componants/rootLayout/RootLayout";
import Home from "./pages/index/Home";

// ======== creating router function ==========
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;

//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<CommonLayout />}>
//             <Route index element={<Home />}></Route>
//             <Route path="/solutions" element={<Solutions />}></Route>
//             <Route path="/cases" element={<Cases />}></Route>
//             <Route path="/about" element={<About />}></Route>
//             <Route path="/blog" element={<Blog></Blog>}></Route>
//             <Route path="/services" element={<Services />}></Route>
//             <Route path="/services/:id" element={<ServiceDetails />}></Route>
//             <Route path="/contact" element={<Contact />}></Route>
//           </Route>
//           <Route path="*" element={<Error />}></Route>
//         </Routes>
//       </BrowserRouter>
