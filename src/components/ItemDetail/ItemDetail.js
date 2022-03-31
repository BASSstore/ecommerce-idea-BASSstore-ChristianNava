import React, { useState } from "react";
import "./ItemDetail.css";


const ItemDetail = ({ product, initial }) => {
  const { title, description_short, price, stock, pictureUrl } = product;

  return (
    <div className="item-detail text-center">
      <h2 className="display-6">Detalle del Producto</h2>
      <div className="container">
        <img src={pictureUrl} alt="" />
        
        <p>{description_short}</p>
        <p>Precio en MXN: {price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
