import { FC, ReactNode } from "react";

interface EmProps {
  children: ReactNode;
  href?: string;
}

const EmText: FC<EmProps> = ({ href, children }) => {
  return href ? (
    <a className="sp-text" href="https://www.chicagoventure.com">
      {children}
    </a>
  ) : (
    <em className="sp-text">{children}</em>
  );
};

export default EmText;
