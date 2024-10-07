function App() {
  const createAdvertisement = async () => {
    const advertisement1 = {
      title: "Full Stack Developer",
      description:
        "We are looking for a Full Stack Developer proficient in JavaScript, Node.js, and React. The candidate should be able to handle both frontend and backend development, with a focus on building scalable applications.",
      salary: 45000.0,
      location: "Paris, France",
      company_id: 1,
    };

    try {
      const result1 = await fetch("http://localhost:3001/api/advertisements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(advertisement1),
      });
      if (!result1.ok) {
        throw new Error("Erreur lors de la création de l'advertisement");
      }
      const response1 = await result1.json();
      console.log("reponse: ", response1);
    } catch (error) {
      console.log("Erreur:", error);
    }
  };

  return (
    <div
      onClick={createAdvertisement}
      className="col-auto aspect-square h-7 max-h-8 w-[300px] bg-red-500 hover:cursor-pointer"
    ></div>
  );
}

export default App;
