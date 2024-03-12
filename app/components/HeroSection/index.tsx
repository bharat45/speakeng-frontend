'use client';
import Image from 'next/image'
import styles from './HeroSection.module.css'

import whatsappIcon from '@/public/whatsapp.png'

const HeroSection = () => {

    const redirectToWhatsapp = () => {
        window.open('https://api.whatsapp.com/send?phone=9711459849&text=hello%20there!', '_blank')
    }

  return (
    <div className={styles.container}>
        <div className={styles.profile}>
            <img src="https://res.cloudinary.com/dajjwki2e/image/upload/v1710049962/profile_de4718a3e3.jpg" alt="" style={{borderRadius: '50%'}} />
        </div>
        <div className={styles.header}>
            <h1>Welcome!</h1>
            <h2>lets start learning</h2>
            <button className={styles.whatsappButton} onClick={redirectToWhatsapp}>
                <Image src={whatsappIcon} alt="" />
                <span>Whatsapp</span>
            </button>
        </div>
    </div>
  )
}
 
export default HeroSection