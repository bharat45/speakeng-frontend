"use server";
import axios from "axios";

const API_URL = "https://speakeng-backend.onrender.com/api";

export const getNavData = async () => {
  try {
    const res = await axios.get(API_URL + "/navbar?populate=*");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHeroData = async () => {
  try {
    const res = await axios.get(API_URL + "/hero-section?populate=*");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
