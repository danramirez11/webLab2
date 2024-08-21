import { BrowserRouter, Routes, Route } from "react-router-dom";

import Quizz from "./screens/quizz";
import Result from "./screens/Result";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Quizz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;