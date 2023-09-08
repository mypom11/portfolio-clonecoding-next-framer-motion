import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import { LinkArrow } from '@/components/Icons'
import Layout from '@/components/Layout'
import ProfileAnimation from '@/components/ProfileAnimation'
import TransitionEffect from '@/components/TransitionEffect'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <TransitionEffect />
        <Layout className="pt-o">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <ProfileAnimation className="w-3/4 h-3/4" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design. "
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/"
                  target={'_blank'}
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                >
                  Resume
                  <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href="/"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
export default Home
