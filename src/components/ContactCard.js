import React from "react";
import avatar from "../images/avatar.jpg";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={avatar} alt="asdf" />
      <div className="content">
        <div className="header">{name}</div>

        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        // onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
