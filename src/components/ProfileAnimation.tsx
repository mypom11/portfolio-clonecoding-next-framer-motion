import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '../assets/animation.json'
const ProfileAnimation: React.FC<{ className?: string }> = ({ className }) => {
  return <Lottie loop animationData={lottieJson} play className={className} />
}

export default ProfileAnimation
