import React from "react";
import loader from "../../assets/loader2.svg";
import "./WithLoading.css";

export default function WithLoading(Component) {
  const WrappedComponent = ({ isLoading, ...props }) => {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="loadingContainer">
        <div className="loader">
          <img src={loader} alt="loader" />
        </div>
      </div>
    );
  };

  return WrappedComponent;
}
