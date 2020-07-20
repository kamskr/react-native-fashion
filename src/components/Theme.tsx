import { createText, BaseTheme } from "@shopify/restyle";

const theme: BaseTheme = {
  colors: {},
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-SemiBold",
      color: "#0C0D34",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-SemiBold",
      color: "#0C0D34",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "rgba(12,13,52,0.7)",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;
