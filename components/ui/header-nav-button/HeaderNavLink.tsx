import React, { FC } from "react";

type HeaderNavLinkProps = {
  text: string;
  goTo: string;
  className?: string;
};
const HeaderNavLink: FC<HeaderNavLinkProps> = ({ text, goTo, className }) => {
  return (
    <a href={`#${goTo}`} className={className}>
      {text}
    </a>
  );
};

export default HeaderNavLink;
