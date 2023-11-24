import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App mx-auto h-full">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
