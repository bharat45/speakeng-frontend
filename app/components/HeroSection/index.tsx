"use client";
import Image from "next/image";
import styles from "./HeroSection.module.css";

import whatsappIcon from "@/public/whatsapp.png";
import { getHeroData } from "@/app/lib/data";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [data, setData] = useState<any>({});
  const [userAgent, setuserAgent] = useState<string>("");

  const redirectToWhatsapp = () => {
    const message = data.data.attributes.whatsappMessage.split(" ").join("%20");
    window.open(
      `https://api.whatsapp.com/send?phone=${data.data.attributes.phoneNumber}&text=${message}`,
      "_blank"
    );
  };



  useEffect(() => {
    const getData = async () => {
      const data = await getHeroData();
      setData(data);
    };
    setuserAgent(navigator.userAgent);
    getData();
  }, []);

  if (!data.data) return null;

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img
          src={data.data.attributes.profilePicture.data.attributes.url}
          alt=""
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className={styles.header}>
        <h1>{data.data.attributes.title}</h1>
        <h2>{data.data.attributes.tagLine}</h2>
        <button className={styles.whatsappButton} onClick={redirectToWhatsapp}>
          <Image src={whatsappIcon} alt="" />
          <span>Whatsapp</span>
        </button>
      </div>
      <h1>User Agent: {userAgent}</h1>
    </div>
  );
};

export default HeroSection;
