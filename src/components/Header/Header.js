import React from "react";

import UniverseImg from "../../images/Universe.png";

export default function Header() {
  return (
    <header className="bg-danger p-4">
      <nav className="text-white text-center d-flex gap-3 align-items-center justify-content-center">
        <img src={UniverseImg} width="25px" alt="" />
        <h1 className="fs-3">My travel journal</h1>
      </nav>
    </header>
  );
}
