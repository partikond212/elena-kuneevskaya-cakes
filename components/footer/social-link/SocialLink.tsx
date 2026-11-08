import React, { type FC } from "react";

import styles from "./SocialLink.module.css";
type SocialLinkProps = {
  text: string;
  goTo: string;
};
const SocialLink: FC<SocialLinkProps> = ({ text, goTo }) => {
  return <a href={goTo}>{text}</a>;
};

export default SocialLink;
