import { BrowserRouter, Route, Routes } from "react-router-dom";
import Canvas from "../components/page/canvas";
import Select from "../components/page/selectPage";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Select />} />
          <Route path="/game:id" element={<Canvas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
