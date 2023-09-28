import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are ?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed necessitatibus, ex maxime et nam esse, vero quas tempore quibusdam dolore qui corrupti aperiam eos, explicabo quisquam error minus in ad?
            <br /><br />
            Exercitationem dolorum eum nesciunt fugit neque reprehenderit rem eligendi saepe cum, quisquam architecto doloremque odio totam soluta tempora ducimus nobis quas atque repellat delectus corporis ab iusto mollitia itaque. Optio.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do ?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed necessitatibus, ex maxime et nam esse, vero quas tempore quibusdam dolore qui corrupti aperiam eos, explicabo quisquam error minus in ad?
            <br /><br />
            - Exercitationem dolorum eum nesciunt fugit neque  <br />
            - reprehenderit rem eligendi saepe cum, quisquam <br />
            - architecto doloremque odio totam soluta tempora <br />

            <Button url="/contact" text="Contact"/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About