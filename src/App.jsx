import { BrowserRouter, Routes, Route } from "react-router-dom";

import Quizz from "./screens/quizz";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Quizz />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;