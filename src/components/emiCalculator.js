import React, { useEffect } from 'react';

const EmiCalculator = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://emicalculator.net/widget/2.0/js/emicalc-loader.min.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="ecww-widgetwrapper" style={{ minWidth: '250px', width: '100%' }}>
      <div
        id="ecww-widget"
        style={{
          position: 'relative',
          paddingTop: '0',
          paddingBottom: '280px',
          height: '0',
          overflow: 'hidden',
        }}
      ></div>
      <div
        id="ecww-more"
        style={{
          background: '#333',
          font: 'normal 13px/1 Helvetica, Arial, Verdana, Sans-serif',
          padding: '10px 0',
          color: '#fff',
          textAlign: 'center',
          width: '100%',
          clear: 'both',
          margin: '0',
          float: 'left',
        }}
      >
        <a
          style={{
            background: '#333',
            color: '#fff',
            textDecoration: 'none',
            borderBottom: '1px dotted #ccc',
          }}
          href="https://emicalculator.net/"
          title="Loan EMI Calculator"
          rel="nofollow"
          target="_blank"
        >
          emicalculator.net
        </a>
      </div>
    </div>
  );
};

export default EmiCalculator;
