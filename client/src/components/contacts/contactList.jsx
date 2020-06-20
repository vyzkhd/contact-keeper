import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/Contact/contactContext";

export const ContactList = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { _id, name, email, phone, type } = contact;

  const handleClick = () => {
    contactContext.deleteContact(contact);
    contactContext.clearCurrent();
  };

  const handleEdit = () => {
    contactContext.setCurrent(contact);
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type == "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i>
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i>
            {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={handleClick}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactList.propTypes = {
  contact: PropTypes.object.isRequired,
};
