import React from "react";

function LoginMessage() {
  const bannerStyle = {
    margin: "1px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    };

  return (
    <div style={bannerStyle}>
      <img 
      style={{maxWidth: "100%"}} 
        alt="Just a store Banner"
        src="/wallpaper/login.jpeg"
      />
    </div>
  );
}

export default LoginMessage;