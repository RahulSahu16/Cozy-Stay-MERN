import { useEffect, useState } from "react";
import { getHomes } from "../api/homes";
import { Link } from "react-router-dom";

const Home = () => {

  const [homes, setHomes] = useState([]);

  useEffect(() => {

    const fetchHomes = async () => {
      const data = await getHomes();
      setHomes(data.homes);
    };

    fetchHomes();

  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h1>All Homes</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        {homes.map((home) => (
          <div
            key={home._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "200px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              backgroundColor : "rgba(150, 150, 150 , 1)"
            }}
          >
            <h3>{home.houseName}</h3>
            <p>📍 {home.city}</p>

            <Link to={`/home/${home._id}`}>
              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: "#4f46e5",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                View Details
              </button>
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Home;