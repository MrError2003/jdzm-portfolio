import * as React from "react";

const Bgtres = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    {/* Definir el patrón */}
    <defs>
      <pattern id="pattern" width="200" height="200" patternUnits="userSpaceOnUse">
        <rect width="200" height="200" fill="#0D0D0D" />
        <path fill="#006438" d="m100 57.1-36 36 7.5 7.5L100 72.1z" />
        <path fill="#007849" d="M100 57.1v15l28.6 28.5 7.5-7.5z" />
        <path fill="#006438" d="M100 163.2v15l70.7-70.7.1-15.1z" />
        <path fill="#007849" d="M100 163.2 29.2 92.5v15l70.8 70.7z" />
        <path
          fill="#268C5C"
          d="M100 21.8 29.2 92.5l70.7 70.7 70.7-70.7L100 21.8zm0 106.1L64.6 92.5 100 57.1l35.4 35.4-35.4 35.4z"
        />
        <path fill="#00301f" d="M0 157.1v15l28.6 28.5 7.5-7.5z" />
        <path fill="#053826" d="m70.7 200 .1-7.6-7.6 7.6z" />
        <path fill="#0F402E" d="M27.8 200h35.4l7.5-7.5L0 121.8v35.4l35.3 35.3z" />
        <path fill="#053826" d="m200 157.1-36 36 7.5 7.5 28.5-28.5z" />
        <path fill="#00301f" d="m136.7 200-7.5-7.5v7.5z" />
        <path
          fill="#0F402E"
          d="m172.1 200-7.5-7.5 35.4-35.4v.1-35.4l-70.8 70.7 7.5 7.5z"
        />
        <path fill="#00301f" d="M129.2 0v7.5L200 78.2v-15L136.7 0z" />
        <path fill="#0F402E" d="M200 27.8v.1L172.1 0h-35.4L200 63.2z" />
        <path fill="#053826" d="M63.2 0 0 63.2v15L70.7 7.5V0z" />
        <path fill="#0F402E" d="M0 63.2 63.2 0H27.8L0 27.8z" />
      </pattern>
    </defs>
    {/* Usar el patrón en un rectángulo grande */}
    <rect width="100%" height="100%" fill="url(#pattern)" />
  </svg>
);

export default Bgtres;
