import React from "react";
import { ArrowDropUp } from "@material-ui/icons";
import "./Footer.css";

function Footer({ data }) {
  return (
    <section className="footer">
      <p className="footer__arrow">
        <a href="#home" className="footer__arrowcenter">
          <ArrowDropUp />
        </a>
      </p>
      <div className="footer__social">
        {data.socials.map((social, index) => {
          return (
            <a key={index} rel="noopener noreferrer" href={social.url} target="_blank">
              {social.icon}
            </a>
          );
        })}
      </div>
      <div className="footer__creds">
        <p>
          Created with <span> ❤️ </span>
        </p>
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@nathananderson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Nathan Anderson
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/@nathananderson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
    </section>
  );
}

export default Footer;
