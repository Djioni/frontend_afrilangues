const COLORS = {
  primary: "#ff4500",
  primary2: "#F66823",
  primary3: "#FF6B36",
  secondary: "#df5411",
  secondary2: "#feb345",
  secondary3: "#e56030",
  gray: "eaeaea",
  gray2: "rgba(0, 0, 0, 0.05)",
  white: "white",
  lightWhite: "",
  dark: "#424242",
};
const CONTAINER = {
  medium: "3%",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};
const BORDER_WIDTTH = {
  small: 3,
  medium: 5,
};
const FONT_FAMILY = {
  regular: "poppins-regular",
  medium: "poppins-medium",
  thin: "poppins-thin",
  semibold: "poppins-semiBold",
  extraLight: "poppins-extraLight",
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const BORDER_RADIUS = {
  xSmall: 4,
  small: 7,
  medium: 15,
};

const SHADOWS_OPTION = Platform.select({
  ios: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  android: {
    elevation: 4,
  },
});

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

export {
  COLORS,
  FONT,
  SIZES,
  SHADOWS,
  SHADOWS_OPTION,
  BORDER_WIDTTH,
  BORDER_RADIUS,
  CONTAINER,
  FONT_FAMILY,
};
