import React, { useEffect } from 'react';

function TableauViz() {
  useEffect(() => {
    // This function will handle the loading of the Tableau script
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    scriptElement.onload = () => {
      // Configure the visualization object once the script is loaded
      const vizElement = document.getElementById('viz1713339343120').getElementsByTagName('object')[0];
      vizElement.style.width = '1300px'; // This ensures it's responsive
      vizElement.style.height = '1450px';
    };

    document.body.appendChild(scriptElement);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(scriptElement);
    };
  }, []);

  return (
    <div className='tableauPlaceholder' id='viz1713339343120'>
      <noscript>
        <a href='#'><img alt='NHL Stats Details' src='https://public.tableau.com/static/images/FK/FK5RZGQ2S/1_rss.png' /></a>
      </noscript>
      <object className='tableauViz' style={{position:'relative', top:'0vh'}}>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='path' value='shared/FK5RZGQ2S' />
        <param name='toolbar' value='top' />
        <param name='static_image' value='https://public.tableau.com/static/images/FK/FK5RZGQ2S/1.png' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='border' value='no' />
        <param name='display_overlay' value='no' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-US' />
      </object>
    </div>
  );
}

export default TableauViz;
