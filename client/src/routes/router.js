import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import About from "../components/About";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={App} />
        <Route path="/about" Component={About} />
      </Routes>
    </BrowserRouter>
  );
}
