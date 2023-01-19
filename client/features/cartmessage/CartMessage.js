import React from "react";

function CartMessage() {
  const bannerStyle = {
    margin: "1px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    };

  return (
    <div style={bannerStyle}>
      <img className="cartImage"
      style={{maxWidth: "100%"}} 
        alt="Just a cart message"
        src="/wallpaper/cart.png"
      />
    </div>
  );
}

export default CartMessage;
