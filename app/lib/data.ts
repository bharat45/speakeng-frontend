'use server';
import axios from "axios";

const API_URL = "https://speakeng-backend.onrender.com/api";

var navData: any;
export const getNavData = async () => {
  try {
    if (navData) {
      return navData;
    }
    const res = await axios.get(API_URL + "/navbar?populate=*");
    navData = res.data;
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

var HeroData: any;
export const getHeroData = async () => {
  try {
    if (HeroData) {
      return HeroData;
    }
    const res = await axios.get(API_URL + "/hero-section?populate=*");
    HeroData = res.data;
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
