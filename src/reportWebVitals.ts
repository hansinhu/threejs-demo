import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const data = {
        CLS: getCLS(onPerfEntry),
        FID: getFID(onPerfEntry),
        FCP: getFCP(onPerfEntry),
        LCP: getLCP(onPerfEntry),
        TTFB: getTTFB(onPerfEntry),
      }
      console.log('web-vitals-data', data)
    });
  }
};

export default reportWebVitals;
