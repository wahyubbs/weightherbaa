export async function ReactPixelTrack() {
  const { default: ReactPixel } = await import("react-facebook-pixel");
  ReactPixel.init(process.env.NEXT_PUBLIC_PixelID!, undefined, {
    autoConfig: true,
    debug: false,
  });
  return ReactPixel;
}
