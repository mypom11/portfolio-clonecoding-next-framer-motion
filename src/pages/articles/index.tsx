import React, { useRef, MouseEvent } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import articleImg from '@/assets/What is Redux with easy explanation.png'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImg: React.FC<{
  img: StaticImageData
  title: string
  link: string
}> = ({ title, img, link }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef<HTMLImageElement>(null)

  const handleMouse = (event: MouseEvent<HTMLAnchorElement>) => {
    if (imgRef.current !== null) {
      imgRef.current.style.display = 'inline-block'
      x.set(event.pageX)
      y.set(-10)
    }
  }
  const handleMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    if (imgRef.current !== null) {
      imgRef.current.style.display = 'none'
      x.set(0)
      y.set(0)
    }
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-10"
      />
    </Link>
  )
}

const Article: React.FC<{
  img: StaticImageData
  title: string
  date: string
  link: string
}> = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 
      dark:bg-dark dark:border-light dark:text-light"
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark">
        {date}
      </span>
    </motion.li>
  )
}

const FeaturedArticle: React.FC<{
  img: StaticImageData
  title: string
  time: string
  summary: string
  link: string
}> = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark ronded-br-2xl dark:bg-light"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg p-12"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  )
}

const Articles = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <TransitionEffect />
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              img={articleImg}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />

            <FeaturedArticle
              img={articleImg}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={articleImg}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={articleImg}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={articleImg}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={articleImg}
              date="March 22, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default Articles
