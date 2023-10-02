import { Route, Routes } from "react-router-dom";
import InfomationPage from "./routes/information";
import ConvertingPage from "./routes/converting";
import styles from "./app.module.scss";
const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<InfomationPage />} />
        <Route path="/converting" element={<ConvertingPage />} />
      </Routes>
    </div>
  );
};

export default App;
