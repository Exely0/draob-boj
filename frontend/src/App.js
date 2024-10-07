import { useEffect } from "react";

function App() {
  const fetchCompanies = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/companies", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Erreur :", error);
    }
  };
  useEffect(() => {
    fetchCompanies();
  }, []);

  return <div className="w-[300px] aspect-square bg-red-500"></div>;
}

export default App;
