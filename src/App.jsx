import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza</h1>
      <Pizza
        name="perpperoni"
        description="Cheese,Pepperoni"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Americano"
        description="hotdogs"
        image="/public/pizzas/big_meat.webp"
      />
    </div>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
