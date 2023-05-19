import { extendTheme } from "@chakra-ui/react";
import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);
  
const baseStyle = definePartsStyle({
  control: {
    borderRadius: 50,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "brand.customRed",
    background: "white",
  }
});

const variants = {
  groove: definePartsStyle({
    control: {
      borderRadius: 50,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "brand.customRed",
      background: "white",

      _checked: {
        borderWidth: "1px",
        background: "white",
        padding: "7px",
        borderColor: "brand.customRed",
        _hover: {
          bg: "none",
          borderColor: "none"
        },
        _before: {
          background: "brand.customRed",
          padding: "4px"
        }
      },
      _hover: {
        bg: "white",
        borderColor: "brand.customRed"
      }
    }
  })
};

const radioTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
});

export const theme = extendTheme ({
    colors: {
        brand:{
          customRed:"#E60000",
          customBlack:"#292B30",
          300:"#B8CAE8",
          400:"#FFFFFF",
          buttonTop: "#FF6700",
          buttonMid: "#174BD6",
          buttonBot: "#40BF91",
        }
    },
    fonts: {
      heading: `'Raleway', sans-serif`,
      body: `'Raleway', sans-serif`,
    },
    components: {
      Radio: radioTheme,
    },
})