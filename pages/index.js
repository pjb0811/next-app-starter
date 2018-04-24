// This is the Link API
import React from "react";
import withLayout from "../components/hoc/Layout";

const Index = props => (
  <div>
    <h1 className="ui header">Hello Next.js</h1>
  </div>
);

export default withLayout(Index);
