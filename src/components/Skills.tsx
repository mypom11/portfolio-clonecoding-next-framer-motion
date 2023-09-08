import React from 'react'
import { motion } from 'framer-motion'

const Skill: React.FC<{ name: string; x: string; y: string }> = ({
  name,
  x,
  y,
}) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-3 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="JavaScrpt" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="VueJS" x="-20vw" y="-15vw" />
        <Skill name="NextJS" x="15vw" y="-12vw" />
        <Skill name="tailwind CSS" x="0vw" y="-20vw" />
        <Skill name="SCSS" x="-25vw" y="18vw" />
        <Skill name="AWS" x="7vw" y="10vw" />
        <Skill name="MongDB" x="20vw" y="-10vw" />
        <Skill name="FireBase" x="-8vw" y="10vw" />
        <Skill name="Vercel" x="9vw" y="-10vw" />
      </div>
    </>
  )
}

export default Skills
