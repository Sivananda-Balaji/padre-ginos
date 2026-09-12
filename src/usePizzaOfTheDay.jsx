import { useDebugValue, useEffect, useState } from "react";

const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(
    pizzaOfTheDay ? `${pizzaOfTheDay.id}:${pizzaOfTheDay.name}` : null,
  );
  useEffect(() => {
    const fetchPizzaOfTheDay = async () => {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    };
    fetchPizzaOfTheDay();
  }, []);
  return pizzaOfTheDay;
};

export { usePizzaOfTheDay };
