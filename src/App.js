import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Principles } from './components/Principle/Principle';
import { Process } from './components/Process/Process';
import { Pricing } from './components/Pricing/Pricing';
import { Gallery } from './components/Gallery/Gallery';
import { SectionTitle } from './components/SectionTitle/SectionTitle';
import { getText } from './helpers/languages';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <SectionTitle title={getText('principles')} />
      <Principles />
      <SectionTitle title={getText('process')} />
      <Process />
      <SectionTitle title={getText('gallery')} />
      <Gallery />
      <SectionTitle title={getText('price')} />
      <Pricing />
      <SectionTitle title={getText('contacts')} />
    </>
  );
}

export default App;
