import React from "react";
import { Header } from "./partials/header";
import { Footer } from "./partials/footer";

export const Default = ({ children }) => {
  return (
    <div className="default-layout">
      <header className="header">
        <Header />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
