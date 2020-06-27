import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import EmojiImg from '../Image/EmojiImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { img, title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={200} distance="30px">
          <h1 className="hero-title">
            {title || ' '}
            <span className="text-color-main">{name || ''}</span>
            <br />
            {subtitle || ''}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={400} distance="30px">
          <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="#about">
              {cta || 'Know more'}
            </a>
          </p>
        </Fade>
        <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={600} distance="600px">
          <div className="about-wrapper__image">
            <EmojiImg alt="emoji picture" filename={img} />
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
