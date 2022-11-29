import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import sense_logo from '../public/sens_logo.jpg'
import sens from '../public/sens1.jpg'
 import ouse_cursor from '../public/images/mouse_cursor.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sense</title>
        <meta name="description" content="Sense" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
           <div className={styles.bgimg_1}>
           <div className={styles.christmas_specials}>圣诞节特惠</div>
           <div className={styles.free_trial}>购买RM99练习工具·送价值RM380体验课</div>
               <Image
                   className={styles.mouse_image}
                   src={ouse_cursor}
                   alt="Picture of the author"
                    width={60} automatically provided
                    height={60} automatically provided
                   // blurDataURL="data:..." automatically provided
                   // placeholder="blur" // Optional blur-up while loading
               />
           </div>
      </main>
    </div>
  )
}
