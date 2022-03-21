import { Routes, Route, BrowserRouter  } from "react-router-dom"
import Homepage from "./components/HomePage/Homepage"
import Html from "./components/Pages/Html"
import Css from "./components/Pages/Css"
import Javascript from "./components/Pages/Javascript"
import Git from "./components/Pages/Git"
import Python from "./components/Pages/Python"
import Reactjs from "./components/Pages/React"
import PyQ from "./components/Pages/PyQ"
import JsQ from "./components/Pages/JsQ"
import ReactQ from "./components/Pages/ReactQ"
import Firebase from "./components/Pages/Firebase"
import Homecontents from "./components/HomePage/Homecontents"

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Homepage />
        <Routes>
          <Route path="/" exact element={<Homecontents />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/js" element={<Javascript />} />
          <Route path="/react" element={<Reactjs />} />
          <Route path="/git" element={<Git />} />
          <Route path="/firebase" element={<Firebase />} />
          <Route path="/python" element={<Python />} />
          <Route path="/jsq" element={<JsQ />} />
          <Route path="/pyq" element={<PyQ />} />
          <Route path="/reactq" element={<ReactQ />} />
        </Routes>
      </BrowserRouter>
    </>
    )
}

export default App