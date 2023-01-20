import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useAuthContext } from "../auth/AuthContext";
import URI_MAP from "../uri/URI_MAP";

export const ContactContext = createContext({});

const ContactProvider = (props) => {
  const { user } = useAuthContext();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);

  //   sign up request

  const handleContact = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        URI_MAP.ome.contactus,
        {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          message: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsLoading(false);
      const data = response.data;
      setSuccessful(true);
      // console.log('data', data)
    } catch (error) {
      console.log("error", error.response);
      setIsLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        handleContact,
        isLoading,
        setIsLoading,
        message,
        setMessage,
        successful,
        setSuccessful,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => {
  const context = useContext(ContactContext);
  //   if (!context) throw new Error("useBlogContext must be used in HouseProvider");

  return context;
};
export default ContactProvider;
