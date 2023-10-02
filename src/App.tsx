import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfomationPage from "./routes/information";
import ConvertingPage from "./routes/converting";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfomationPage />} />
          <Route path="converting" element={<ConvertingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
