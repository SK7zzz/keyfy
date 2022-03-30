import React from "react";

const Layout = ({ children }: any) => {
  return (
    <div className="Layout" style={{ height: "100%" }}>
      {children}
    </div>
  );
};

export default Layout;
