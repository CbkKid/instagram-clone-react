import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

export default function NavLink({ to, activeOnlyWhenExact, component }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  const isActive = match;

  return (
    <div className={match ? "active" : ""}>
      <Link to={to}>{component ? component(match) : null}</Link>
    </div>
  );
}
