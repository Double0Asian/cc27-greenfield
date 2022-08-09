import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import App from "./App";
import Welcome from "./components/layout/Welcome";
import { LoadScript } from "@react-google-maps/api";
import "./styles/components/layout/Header.css";

const Router = () => {
  const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY;
  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="map" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadScript>
  );
};

export default Router;
