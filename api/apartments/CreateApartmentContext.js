import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "../auth/AuthContext";
import URI_MAP from "../uri/URI_MAP";

export const CreateApartmentContext = createContext({});

const CreateApartmentProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiErrorMsg, setApiErrorMsg] = useState("");

  const {user} = useAuthContext()

  const [token, setToken] = useState("")
  
  useEffect(() => {
    
  if (user !== null) {
    setToken(user.access_token)
  } else {
    setToken("")
  }
  }, [user])
  

  //   sign up request
  const handleCreateApartment = async ({
    title,
    category,
    price,
    locality,
    description,
    availability,
    toilets,
    size,
    selectType,
    bathrooms,
    bedrooms,
    // country,
    states,
    city,
    street,
    formData,
  }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        URI_MAP.ome.apartment,
        {
          title: title,
          category: category,
          _type: selectType,
          price: price,
          locality: locality,
          // country: country,
          state: states,
          area: city,
          street: street,
          specifications: {
            toilets: toilets,
            size: size,
            bathrooms: bathrooms,
            bedrooms: bedrooms,
          },
          descriptions: description,
          is_available: availability,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        }
      );
      const appartmentId = response.data.id;
      console.log("response", appartmentId);
      console.log(`${URI_MAP.ome.apartment}${appartmentId}/pictures/`);
      // setUser(data.user);
      const secondRes = await axios.post(
        `${URI_MAP.ome.apartment}${appartmentId}/pictures/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        }
      );

      const data = secondRes;
      setIsLoading(false);
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
      setApiErrorMsg(error);
      console.log("apiErrorMsg", apiErrorMsg);
    }
  };

  return (
    <CreateApartmentContext.Provider
      value={{
        handleCreateApartment,
        isLoading,
        setIsLoading,
        apiErrorMsg,
        setApiErrorMsg,
      }}
    >
      {props.children}
    </CreateApartmentContext.Provider>
  );
};

export const useCreateApartmentContext = () => {
  const context = useContext(CreateApartmentContext);
  //   if (!context) throw new Error("useCreateApartmentContext must be used in HouseProvider");

  return context;
};
export default CreateApartmentProvider;
