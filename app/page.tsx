import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import Section1 from "@/src/components/Section1";
import Section2 from "@/src/components/Section2";
import Section3 from "@/src/components/Section3";
import Section4 from "@/src/components/Section4";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <Toaster position="top-center" reverseOrder={false} />
      <main className="flex-1">
        {/* Añadido padding-top para compensar el navbar fijo */}
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
      <Footer />
    </div>
  );
}
