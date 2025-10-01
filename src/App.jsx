import {createRoutesFromElements, createBrowserRouter, RouterProvider, Route, Routes, RouterContextProvider } from "react-router";
import "./App.css";
import Header from "./componants/rootLayout/Header";

// ======== creating router function ==========
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element = {'home page'}></Route>
      <Route path="/header" element = {<Header />}></Route>
    </Route>
  )
)
function App() {
  return <RouterProvider router={route}></RouterProvider>
  
  
}

export default App;
