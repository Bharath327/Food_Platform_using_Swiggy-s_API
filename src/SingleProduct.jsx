import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();
  const resInfo = useRestaurantMenu();

  useEffect(() => {
    if (resInfo && Array.isArray(resInfo)) {
      const check = resInfo.find(prod => prod?.info?.id === id);
      setSingleProduct(check);
    }
  }, [resInfo, id]);

  return (
    <div>
      <h1>{singleProduct?.info?.name}</h1>
    </div>
  );
};

export default SingleProduct;
