import React from 'react'
import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.footerText}>Images and icons from Flaticon, Freepix, and pxfuel. 
            <br></br>
            &copy; {new Date().getFullYear()} Nithika Karunamoorthy. All Rights Reserved.
        </p>
      </div> 
    </footer> 

  )
}

export default Footer;