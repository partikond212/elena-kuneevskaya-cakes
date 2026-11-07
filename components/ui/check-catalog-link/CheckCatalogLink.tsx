import React, { type FC } from "react";

type CheckCatalogLinkProps = {
  text: string;
  goTo: string;
  className?: string;
};
const CheckCatalogLink: FC<CheckCatalogLinkProps> = ({
  text,
  goTo,
  className,
}) => {
  return (
    <a href={`#${goTo}`} className={className}>
      {text}
    </a>
  );
};

export default CheckCatalogLink;
