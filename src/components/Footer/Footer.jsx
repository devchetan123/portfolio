import React from 'react'
import style from "../Footer/footer.module.css"

function Footer() {
  return (
    <div className={style.footerDiv}  id="footer"  >
        <img src="https://i.ibb.co/gywM69d/logo2.png" height={"40px"} alt="" />
        <h2>Get in touch</h2>
            <div className={style.socialLine} >
              <div className={style.socialIconLine}  > <a href='https://mail.google.com/mail/u/0/#inbox?compose=jrjtXPVtWjSrCpqVtdwNFchNgkQDLPBZjkkSCJqhCSpPjpBSZkHJHcwtgdhShXSshPZRbSvg' target="_blank" ><img src="https://i.ibb.co/VS3d00x/icons8-gmail-50.png" height={"30px"} alt="" /> </a> <p>profileofchetan123@gmail.com</p> </div>
              <div className={style.socialIconLine}  > <img src="https://i.ibb.co/d5J8wMq/icons8-contact-50.png" height={"30px"} alt="" /> <p>8800496828</p> </div>
              <div className={style.threeIcon} >
              <div className={style.socialIconLine}  > <a href='https://www.linkedin.com/in/profileofchetan/' target="_blank" > <img src="https://i.ibb.co/v3bvDhD/icons8-linkedin-50-2.png" height={"30px"} alt="" /> </a> </div>
              <div className={style.socialIconLine}  > <a href='https://www.instagram.com/pwr_chetan/' target="_blank" > <img src="https://i.ibb.co/r4k1s74/icons8-github-50-4.png" height={"30px"} alt="" /> </a> </div>
              <div className={style.socialIconLine}  > <a href="https://github.com/devchetan123" target="_blank" > <img src="https://i.ibb.co/LQvz581/icons8-instagram-50.png" height={"30px"} alt="" /> </a> </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

// https://i.ibb.co/LQvz581/icons8-instagram-50.png
// https://i.ibb.co/v3bvDhD/icons8-linkedin-50-2.png
// https://i.ibb.co/r4k1s74/icons8-github-50-4.png
// https://i.ibb.co/d5J8wMq/icons8-contact-50.png
// https://i.ibb.co/VS3d00x/icons8-gmail-50.png