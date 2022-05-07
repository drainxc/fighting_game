import { BrowserRouter, Route, Routes } from "react-router-dom";
import Canvas from "../components/page/canvas";
import Select from "../components/page/selectPage";
import Title from "../components/page/title";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/select" element={<Select />} />
          <Route path="/game:id" element={<Canvas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
