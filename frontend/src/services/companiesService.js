export const getAllCompanies = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/companies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des donénes");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    console.log("Erreur :", error);
  }
};

export const getCompanyByAdvertisement = (advertisement, companies) => {
  return companies.find(
    (company) => company.company_id === advertisement.company_id,
  );
};
