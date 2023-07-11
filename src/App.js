import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Principles } from './components/Principle/Principle';
import { Process } from './components/Process/Process';
import { Pricing } from './components/Pricing/Pricing';
import { Gallery } from './components/Gallery/Gallery';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import { SectionTitle } from './components/SectionTitle/SectionTitle';
import { getText } from './helpers/languages';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <SectionTitle title={getText('principles')} position="8" />
      <Principles />
      <SectionTitle title={getText('process')} position="40" />
      <Process />
      <SectionTitle title={getText('gallery')} position="60" />
      <Gallery />
      <SectionTitle title={getText('price')} position="75" />
      <Pricing />
      <SectionTitle title={getText('contacts')} position="100" />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
