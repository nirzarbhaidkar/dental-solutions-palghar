
import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

const FacebookPixel = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (function(f:any, b, e, v, n, t, s) {
        if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode?.insertBefore(t,s)})(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', '1358034681882804');
      window.fbq('track', 'PageView');

      const noscript = document.createElement('noscript');
      const img = document.createElement('img');
      img.height = 1;
      img.width = 1;
      img.style.display = 'none';
      img.src = "https://www.facebook.com/tr?id=1358034681882804&ev=PageView&noscript=1";
      noscript.appendChild(img);
      document.body.appendChild(noscript);
    }
  }, []);

  return null;
};

export default FacebookPixel;
