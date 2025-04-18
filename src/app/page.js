import "./styles/global.css";
import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";
import { About } from "./components/About/About";
import { Safety } from "./components/Safety/Safety";
import { ImportSubstitution } from "./components/ImportSubstitution/ImportSubstitution";
import Features from "./components/Features/Features";
import { TryDemo } from "./components/TryDemo/TryDemo";
import { ContactUs } from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <main>
        <Intro />
        <About />
        <Safety />
        <ImportSubstitution />
        <Features />
        <TryDemo />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
