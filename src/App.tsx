import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { Login } from "./components/Login";
import { YoutubeEmbedder } from "./components/YoutubeEmbedder";
import { Register } from "./components/Register";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/youtube" element={<YoutubeEmbedder/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
