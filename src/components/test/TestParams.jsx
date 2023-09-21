import React from "react";
import { useParams } from "react-router-dom";

const TestParams = () => {
  const { title } = useParams();
  console.log(title);
  return <div>TestParams</div>;
};

export default TestParams;
