import React, { useEffect } from 'react';
import './styles.css';

const IceInjuries = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1713376105326');
    const vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '2600px';
    vizElement.style.height = '1400px';

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    return () => {
      // Clean up any resources when the component is unmounted
      vizElement.parentNode.removeChild(scriptElement);
    };
  }, []);

  return (
    <div className='ice-injuries' id='viz1713376105326' style={{ position: 'relative', fontSize:'25px'}}>
      <noscript>
        <a href='#'>
          <img
            alt='Visualizing Injuries in the NHL'
            src='https://public.tableau.com/static/images/In/InjuriesVis/Dashboard1/1_rss.png'
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className='tableauViz' style={{ position: 'relative', height:'99vh', width:'2000px' }}>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='InjuriesVis/Dashboard1' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='top' />
        <param name='static_image' value='https://public.tableau.com/static/images/In/InjuriesVis/Dashboard1/1.png' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-US' />
      </object>
    </div>
  );
};

export default IceInjuries;
