import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import projectImg from '@/assets/agency-website-cover-image.jpg'
import Image, { StaticImageData } from 'next/image'
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject: React.FC<{
  type: string
  title: string
  summary: string
  link: string
  gitLink: string
  img: StaticImageData
}> = ({ type, title, summary, img, link, gitLink }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark ronded-br-2xl dark:bg-light"></div>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg p-12"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link href={link} target="_blank" className="hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={gitLink} target="_blank" className="w-10">
            <GithubIcon className="" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            VisitProject
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project: React.FC<{
  type: string
  title: string
  link: string
  gitLink: string
  img: StaticImageData
}> = ({ type, title, img, link, gitLink }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark p-6 relative bg-light dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link href={link} target="_blank" className="hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={gitLink} target="_blank" className="w-8">
            <GithubIcon className="" />
          </Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <TransitionEffect />
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 ">
            <div className="col-span-12 ">
              <FeaturedProject
                type="feturedProject"
                title="Crypto Screener Application"
                img={projectImg}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                gitLink="/"
              />
            </div>
            <div className="col-span-6 ">
              <Project
                type="feturedProject"
                title="Crypto Screener Application"
                img={projectImg}
                link="/"
                gitLink="/"
              />
            </div>
            <div className="col-span-6 ">
              {' '}
              <Project
                type="feturedProject"
                title="Crypto Screener Application"
                img={projectImg}
                link="/"
                gitLink="/"
              />
            </div>

            <div className="col-span-12 ">
              <FeaturedProject
                type="feturedProject"
                title="Crypto Screener Application"
                img={projectImg}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                gitLink="/"
              />
            </div>
            <div className="col-span-6 ">
              {' '}
              <Project
                type="feturedProject"
                title="Crypto Screener Application"
                img={projectImg}
                link="/"
                gitLink="/"
              />
            </div>
            <div className="col-span-6 ">
              {' '}
              <Project
                type="feturedProject"
                title="Crypto Screener Application"
                img={projectImg}
                link="/"
                gitLink="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects
