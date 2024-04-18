import React, { useEffect } from 'react';
import './styles.css';

const BaseInjuries = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1713379472308');
    const vizElement = divElement.getElementsByTagName('object')[0];

    const adjustVizSize = () => {
      if (divElement.offsetWidth > 800) {
        vizElement.style.minWidth = '2660px';
        vizElement.style.maxWidth = '2660px';
        vizElement.style.width = '2660px';
        vizElement.style.minHeight = '810px';
        vizElement.style.maxHeight = '1910px';
        vizElement.style.height = `${divElement.offsetWidth * 1.00}px`;
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.minWidth = '2660px';
        vizElement.style.maxWidth = '2560px';
        vizElement.style.width = '150%';
        vizElement.style.minHeight = '610px';
        vizElement.style.maxHeight = '910px';
        vizElement.style.height = `${divElement.offsetWidth * 1.00}px`;
      } else {
        vizElement.style.width = '2660px';
        vizElement.style.height = '1450px';
      }
    };

    adjustVizSize();

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    window.addEventListener('resize', adjustVizSize);

    return () => {
      window.removeEventListener('resize', adjustVizSize);
    };
  }, []);

  return (
    <div className='base-injuries-overlay'>
      <div className='base-injuries' id='viz1713379472308' style={{ position: 'absolute', width: '2560px', zIndex:'9999' }}>
        <noscript>
          <a href='#'><img alt=' ' src='https://public.tableau.com/static/images/ba/baseballinjuries/HitterDashboard/1_rss.png' style={{ border: 'none' }} /></a>
        </noscript>
        <object className='tableauViz' style={{position: 'absolute', width: '2560px', zIndex:'9999' }}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='site_root' value='' />
          <param name='name' value='baseballinjuries&#47;HitterDashboard' />
          <param name='tabs' value='yes' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https://public.tableau.com/static/images/ba/baseballinjuries/HitterDashboard/1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      </div>
    </div>
  );
};

export default BaseInjuries;
