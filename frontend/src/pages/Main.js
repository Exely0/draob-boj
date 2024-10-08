import React, { useState, useEffect } from "react";
import { getAllCompanies } from "../services/companiesService";
import { getAllAdvertisements } from "../services/advertisementsService";
import { getCompanyByAdvertisement } from "../services/companiesService";

const Main = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loadingAdv, setLoadingAdv] = useState(true);
  const [loadingComp, setLoadingComp] = useState(true);

  const fetchAdvertisements = async () => {
    try {
      const datas = await getAllAdvertisements();
      setAdvertisements(datas);
      setLoadingAdv(false);
    } catch (error) {
      console.log("Erreur lors du chargement des données", error);
      setLoadingAdv(false);
    }
  };

  const fetchCompanies = async () => {
    try {
      const companiesData = await getAllCompanies();
      setCompanies(companiesData);
      setLoadingComp(false);
    } catch (error) {
      console.log("Erreur lors du chargement des données", error);
      setLoadingComp(false);
    }
  };

  useEffect(() => {
    fetchAdvertisements();
    fetchCompanies();
  }, []);
  return (
    <div className="grid grid-cols-2 gap-6 [&>div]:rounded-xl [&>div]:border-2 [&>div]:border-black">
      <div>
        {loadingAdv || loadingComp ? (
          <p>Loading...</p>
        ) : (
          advertisements.map((advertisement) => (
            <div key={advertisement.advertisement_id}>
              <h1>{advertisement.title}</h1>
              <p>{advertisement.description}</p>
              <p>{advertisement.salary}</p>
              <p>{advertisement.location}</p>
              <p className="text-green-500">
                {getCompanyByAdvertisement(advertisement, companies).name}
              </p>
            </div>
          ))
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Main;
