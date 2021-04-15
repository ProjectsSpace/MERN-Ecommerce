import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // function to fetch data from API
    const fetchData = async () => {
      try {
        // Setting the loading phase
        setLoading(true);

        // Fetching data from API
        const { data } = await axios.get("/api/products");

        // Turing of the loading phase
        setLoading(false);

        // Setting products data
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    // Calling fetchdata function to load products
    fetchData();
  }, []);

  return (
    <div className="row center">
      {/* Conditional Component loading */}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        products.map((product) => (
          <Product key={product._id} product={product} />
        ))
      )}
    </div>
  );
}

export default HomeScreen;
