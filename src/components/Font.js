import React, { memo } from "react";

const Font = () => (
  <link
    href="https://fonts.googleapis.com/css?family=Arima+Madurai:200,400,700&display=swap"
    rel="stylesheet"
  />
);

export default memo(Font, () => true);
