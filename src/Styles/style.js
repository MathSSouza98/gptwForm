import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme ({
    colors: {
        brand:{
          customRed:"#E60000",
          customBlack:"#292B30",
          300:"#B8CAE8",
          400:"#FFFFFF"
        }
    },
    fonts: {
      heading: `'Raleway', sans-serif`,
      body: `'Raleway', sans-serif`,
    },
})