import React, { useEffect, useState } from 'react';
import './fab.scss';

const Fab = ({ withShadow, className, scrollToTop = false }) => {
  const [showScroll, setShowScroll] = useState(!scrollToTop);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (scrollToTop) {
      window.addEventListener('scroll', checkScrollTop);
    }

    return () => {
      scrollToTop && window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div
      className={`fixed-action-btn ${
        withShadow ? ' is-shadow' : ''
      } ${className}`}
      onClick={scrollTop}
    >
      <a
        href={() => {}}
        className={`scroll-top${showScroll ? ' open' : ''}`}
        onClick={scrollTop}
      >
        <i class='fas fa-angle-up'></i>
      </a>
    </div>
  );
};

export default Fab;
