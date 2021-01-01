import React, { useState } from "react";
import { Drawer, IconButton } from "@material-ui/core";
import { Menu, Home, Person, Code, MailOutline } from "@material-ui/icons";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar({ data }) {
  const [open, setOpen] = useState(false);
  const list = [
    { ref: "home", title: "Home", icon: <Home className="nav__icon" />, dataText: "home" },
    { ref: "about", title: "About", icon: <Person className="nav__icon" /> },
    { ref: "resume", title: "Resume", icon: <Home className="nav__icon" /> },
    {
      ref: "projects",
      title: "Projects",
      icon: <Code className="nav__icon" />,
    },
    {
      ref: "contact",
      title: "Contact",
      icon: <MailOutline className="nav__icon" />,
    },
  ];

  return (
    <>
      {open ? null : (
        <IconButton className="nav__btn" onClick={() => setOpen(true)}>
          <Menu className="nav__hamburgerIcon" />
        </IconButton>
      )}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <nav className="nav">
          <div className="nav__logo">
            <Link to="home" smooth spy duration={800}>
              B
            </Link>
          </div>
          <ul className="nav__links">
            {list.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    activeClass="active"
                    to={item.ref}
                    smooth={true}
                    duration={200}
                    spy={true}
                    className="nav__lista"
                  >
                    <span className="nav__icon">{item.icon}</span>{" "}
                    <span className="nav__title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="nav__social">
            {data?.socials.map((social, index) => {
              return (
                <li key={index}>
                  <a rel="noopener noreferrer" target="_blank" href={social.url}>
                    {social.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Drawer>
    </>
  );
}

export default Navbar;
