import axios from "axios";

const API_URL = "https://speakeng-backend.onrender.com/api";

var navData: any;

export const getNavData = async () => {
  try {
    if (navData) {
        console.log("navData already exists");
      return navData;
    }
    const res = await axios.get(API_URL + "/navbar?populate=*");
    navData = res.data;
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
