import React, { type FC } from "react";

import styles from "./SocialLink.module.css";
type SocialLinkProps = {
  text: string;
  goTo: string;
  className?: string;
  title?: string;
};
const SocialLink: FC<SocialLinkProps> = ({ text, goTo, className, title }) => {
  return (
    <a
      href={goTo}
      title={title}
      className={className ? className : styles.socialLink}
    >
      {text}
    </a>
  );
};

export default SocialLink;
