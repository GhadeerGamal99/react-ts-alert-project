import { X } from "lucide-react";
import "./index.scss";
import type { ReactNode } from "react";

interface IProps {
  type: string;
  icon: ReactNode;
  title: string;
  description: string;
}
const Alert = ({ type = "alert-danger", icon, title, description }: IProps) => {
  return (
      <div className={type}>
        <div className="alert-header">
          <div className="title">
            <span>{icon}</span>
            <h4>{title}</h4>
          </div>
          <X className="close" size={30} />
        </div>

        <p>{description}</p>
      </div>
  );
};

export default Alert;
