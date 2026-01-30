import React from "react";
import Card from "./Components/Card";

const App = () => {
  return (
    <div>
      <Card
        children={
          <>
            <h2>Mosharrof Hossain</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              tenetur.
            </p>
          </>
        }
      />

      <Card>
        <h2>Nahid Islam</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          consectetur eos totam maiores non.
        </p>
      </Card>
    </div>
  );
};

export default App;
