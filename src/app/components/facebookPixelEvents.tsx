"use client";
import React, { useEffect } from "react";
import { ReactPixelTrack } from "./pixelEvent";

export const FacebookPixelEvents: React.FC = () => {
  useEffect(() => {
    ReactPixelTrack().then((reactPixel) => {
      reactPixel.pageView();
    });
  }, []);

  return null;
};
