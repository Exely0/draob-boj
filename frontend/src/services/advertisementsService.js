export const getAllAdvertisements = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/advertisements", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Erreur lors de la création de l'advertisement");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    console.log("Erreur :", error);
  }
};
