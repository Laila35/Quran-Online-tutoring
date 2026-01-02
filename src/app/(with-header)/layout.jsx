// src/app/(with-header)/layout.jsx
import Navbar from "../../components/Navbar";
import TopNavbar from "../../components/TopNavbar";

export default function WithHeaderLayout({ children }) {
  return (
    <>
      <TopNavbar />
      <Navbar />
      {children}
    </>
  );
}
