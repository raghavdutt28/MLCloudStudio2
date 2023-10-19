"use client"
import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget min-w-[320px] h-[700px]" data-url="https://calendly.com/mlcloudstudio/30min?back=1&month=2023-10&background_color=ffffff&text_color=10002a&primary_color=00d2d2">
    </div>
  );
};

export default CalendlyWidget;
