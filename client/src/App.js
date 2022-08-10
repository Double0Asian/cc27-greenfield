import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/reset.css";
import "./styles/base.css";
import TopArea from "./components/layout/TopArea";
import MapArea from "./components/layout/MapArea";
import Loading from "./components/modules/Loading";
import { LoadScript } from "@react-google-maps/api";

function App() {
  const [userLocation, setUserLocation] = useState({});
  const [mode, setMode] = useState();
  const [locations, setLocations] = useState([]);
  const [destination, setDestination] = useState({});
  const [isActive, setIsActive] = useState(false);

  const LOCAL_SERVER = process.env.REACT_APP_LOCAL_SERVER || "";
  const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY;

  const getData = async function (limit, mode) {
    await axios
      .get(`${LOCAL_SERVER}/api/v1/closest`, {
        // server runs on 8000 (react on 3000)
        params: { userLocation, limit, mode },
      })
      .then((res) => {
        setLocations(res.data);
        if (res.data.length === 1) setDestination(res.data[0]);
      })
      .catch((err) => console.log(err));
  };
  // get locations based on menu mode selection
  useEffect(() => {
    if (userLocation["lat"]) {
      // if user location exists
      switch (mode) {
        case "closest_bathroom":
          getData(1, "closest_bathroom");
          break;
        case "public_bathroom":
          getData(100, "public_bathroom");
          break;
        case "non_public_bathroom":
          getData(100, "non_public_bathroom");
          break;
        case "all_bathrooms":
          getData(100, "all_bathrooms");
          break;
        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLocation, mode]);

  return (
    <div className="app">
      <LoadScript
        googleMapsApiKey={GOOGLE_API_KEY}
        loadingElement={<Loading />}
      ></LoadScript>
      <div
        className="container"
        style={{
          width: isActive ? "80%" : "40%",
          transition: "all 500ms",
        }}
      >
        <TopArea
          userLocation={userLocation}
          setUserLocation={setUserLocation}
          mode={mode}
          setMode={setMode}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        {locations.length > 0 && (
          <MapArea
            userLocation={userLocation}
            setUserLocation={setUserLocation}
            locations={locations}
            setLocations={setLocations}
            destination={destination}
            setDestination={setDestination}
            setIsActive={setIsActive}
          />
        )}
      </div>
    </div>
  );
}

export default App;
