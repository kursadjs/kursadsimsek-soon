import { useState } from 'react'
import { nanoid } from 'nanoid'
import styles from './App.module.scss'
import logo from './assets/pp.jpg'

import { CopyIcon, CopySuccessIcon, DribbbleIcon, GithubIcon, InstagramIcon, LinkedInIcon, SpotifyIcon, TwitterIcon } from './assets/Icon'
import Helmet from 'react-helmet'


export default function App() {

  const data = {
    name: 'Kürşad Şimşek',
    desc: 'UI - UX Arayüzler ve Frontend Geliştirme konusunda uzmanım. Aynı zamanda Endüstri Mühendisiyim.',
    picture: '/kursad-simsek.jpg',
    keywords: 'Kürşad Şimşek, Kürşat Şimşek, Kursad Simsek, Kürşad Şimşek Blog, Kürşat Şimşek Blog, Kürşad Şimşek Website,',
    email: 'kursadjs@protonmail.com',
    social: [
      {
        id: nanoid(),
        icon: <TwitterIcon />,
        title: 'Twitter',
        url: 'https://twitter.com/kursadjs'
      },
      {
        id: nanoid(),
        icon: <InstagramIcon />,
        title: 'Instagram',
        url: 'https://www.instagram.com/kursadjs/'
      },
      {
        id: nanoid(),
        icon: <LinkedInIcon />,
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/kursadjs/'
      },
      {
        id: nanoid(),
        icon: <DribbbleIcon />,
        title: 'Dribbble',
        url: 'https://dribbble.com/kursadjs'
      },
      {
        id: nanoid(),
        icon: <GithubIcon />,
        title: 'Github',
        url: 'https://github.com/kursadjs'
      },
      {
        id: nanoid(),
        icon: <SpotifyIcon />,
        title: 'Spotify',
        url: 'https://open.spotify.com/user/7sozqz35fzqvgorowskpix7i4'
      },
    ]
  }

  const [isCopy, setIsCopy] = useState(false)

  const copyEmail = () => {
    if (!isCopy) {
      setIsCopy(true)
      navigator.clipboard.writeText(data.email)

      setTimeout(() => {
        setIsCopy(false)
      }, 1500)
    }
  }

  return (
    <div className={styles.app}>

      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${data.name} • Kişisel Web Sitesi`}</title>
        <meta name="description" content={data.desc} />
        <meta name="theme-color" content="#121212" />
        <link rel="icon" href="/favicon.svg" />
      </Helmet>

      <div className={`container ${styles.container}`}>

        <div className={styles.profilePhoto}>
          <img src={logo} alt={data.name} />
        </div>

        <div className={styles.info}>
          <div className={styles.title}>
            <h1>{data.name}</h1>
          </div>

          <div className={styles.desc}>
            <p>{data.desc}</p>
          </div>
        </div>

        <div className={styles.email}>
          <button onClick={copyEmail} className={isCopy ? styles.active : null}>
            {isCopy ? <CopySuccessIcon /> : <CopyIcon />}
            <p>{isCopy ? 'Panoya Kopyalandı!' : data.email}</p>
          </button>
        </div>

      </div>

      <div className={styles.socialBox}>
        {data.social.map(item =>
          <button key={item.id} onClick={() => { window.open(item.url) }}>
            {item.icon}
          </button>
        )}
      </div>

    </div>
  )
}
