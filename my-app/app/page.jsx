import Image from 'next/image'

export default function Page() {
  return (
    <>
    <Image src="/IMG_2743.jpg" alt="NextImg" width={300} height={480} />
    <h1>Hello, Next.js!</h1>

    <p>Ik ga testen hoe next.js en react werken om zo te kijken welke framework het beste is en welke ik het fijnst vind werken.</p>

    <form action="">
      <input type="search" />
      <button>search</button>

      <input type="radio" />
    </form>
    </>
  )

}