import React, { useEffect } from "react";
import { Contact } from "../contacts/Contact";
import ContactForm from "../../components/contacts/contactForm";
import ContaxtFilter from "../../components/contacts/contactFilter";
import AuthContext from "../../context/Auth/AuthContext";
import { useContext } from "react";

export const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContaxtFilter />
        <Contact />
      </div>
    </div>
  );
};
