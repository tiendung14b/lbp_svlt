import { readable } from "svelte/store";

// common css value 
export const theme = readable({
  
}, (set) => {
  set({
    colors: {
    primary_color_red: "#FB342E",
    primary_color_blue: "#212163",
    second_color_blue: "#35368B"
  },
  text: {
    heading_1: "40px",
    heading_2: "32px"
  }})
})