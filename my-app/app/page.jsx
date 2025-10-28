import Image from 'next/image'
import styles from './home.module.css';

export default function Page() {
  return (
    <>
    <Image className={styles.imgAutumn} src="/IMG_2743.jpg" alt="AutumnImg" width={300} height={480}  priority/>
    <h1 className={styles.title}>Hello, Next.js!</h1>

    <p className={styles.textIntro}>Ik ga testen hoe next.js en react werken om zo te kijken welke framework het beste is en welke ik het fijnst vind werken.</p>

    <p className={styles.textFramework}>Welke framework vind jij het beste?</p>
    <fieldset>
  <legend>Select your framework</legend>

  <div>
    <input type="radio" id="svelte" name="drone" value="svelte" defaultChecked />
    <label htmlFor="svelte">Svelte</label>
  </div>

  <div>
    <input type="radio" id="reactnext.js" name="drone" value="react/next.js" />
    <label htmlFor="react/next.js">React/Next.js</label>
  </div>

  <div>
    <input type="radio" id="starlight" name="drone" value="starlight" />
    <label htmlFor="starlight">Starlight</label>
  </div>
</fieldset>

<input type="checkbox" id='check' name='drone' value="check" />
<label htmlFor="framework check">Ben er het ermee eens met het gekozen framework</label>
    </>
  )

}