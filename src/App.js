import { AppList } from './App.styled';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Principles } from './components/Principle/Principle';
import { Process } from './components/Process/Process';
import { Pricing } from './components/Pricing/Pricing';
import { Gallery } from './components/Gallery/Gallery';
import { Contacts } from './components/Contacts/Contacts';
// import { Footer } from './components/Footer/Footer';
// import { SectionTitle } from './components/SectionTitle/SectionTitle';
// import { getText } from './helpers/languages';
import { useRef, useState, useEffect } from 'react';

function App() {
  const [listChild, setListChild] = useState([]);
  const listRef = useRef();

  function onHeaderClick(e) {
    if (e.target.nodeName !== 'A') return;

    let current = e.target.id;

    listChild.map(item => {
      if (item.classList.contains('show') && item.id === current) {
        item.classList.remove('show');

        return listChild[0].classList.add('show');
      }
      return item.id === current ? item.classList.add('show') : item.classList.remove('show');
    });
  }

  useEffect(() => {
    setListChild(Object.values(listRef.current.children));
  }, []);

  return (
    <>
      <AppList ref={listRef}>
        <li className="show app-list__item" id="hero">
          <Hero />
        </li>
        <li className="app-list__item" id="about">
          <About />
        </li>
        <li className="app-list__item" id="principles">
          <Principles />
        </li>
        <li className="app-list__item" id="process">
          <Process />
        </li>
        <li className="app-list__item" id="gallery">
          <Gallery />
        </li>
        <li className="app-list__item" id="pricing">
          <Pricing />
        </li>
        <li className="app-list__item" id="contacts">
          <Contacts />
        </li>
      </AppList>
      <Header Click={onHeaderClick} />

      {/* <SectionTitle title={getText('principles')} position="8" />

      <SectionTitle title={getText('process')} position="40" />

      <SectionTitle title={getText('gallery')} position="60" />
      <Gallery />
      <SectionTitle title={getText('price')} position="75" />
      <Pricing />
      <SectionTitle title={getText('contacts')} position="100" />
      <Contacts />
      <Footer /> */}
    </>
  );
}

export default App;
