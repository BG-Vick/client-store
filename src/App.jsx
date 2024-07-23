import { Routes, Route, Link } from "react-router-dom";
import { About } from "./About";

import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <Link to="/" className="link">
          Главная
        </Link>
        <Link to="/products" className="link">
          Товары
        </Link>
        <Link to="/selected-product" className="link">
          Выбранный товар
        </Link>
        <Link to="/admin" className="link">
          Страница администратора
        </Link>
        <Link to="/registration" className="link">
          Страница регистрации
        </Link>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
