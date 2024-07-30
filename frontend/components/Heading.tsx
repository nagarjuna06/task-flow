import React from "react";

const Heading = () => {
  return (
    <h1 className="text-3xl font-bold mb-4 text-center">
      Welcome to{" "}
      <span className="text-primary">{process.env.NEXT_PUBLIC_APP_NAME}</span>!
    </h1>
  );
};

export default Heading;
