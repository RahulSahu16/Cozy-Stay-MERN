import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHomeById } from "../services/homeService";

const HomeDetails = () => {

  const { id } = useParams();
  const [home, setHome] = useState(null);

  useEffect(() => {

    const fetchHome = async () => {
      const data = await getHomeById(id);
      console.log(data.home);
      setHome(data.home);
    };

    fetchHome();

  }, [id]);

  if (!home) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>

      <h1>{home.houseName}</h1>

      <p>📍 {home.city}</p>

      <img
        src={`http://localhost:3000/uploads/${home.imageURL}`}
        alt={home.houseName}
        style={{ width: "300px", borderRadius: "10px" }}
        />

    </div>
  );
};

export default HomeDetails;