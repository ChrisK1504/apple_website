import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ModelView from "./ModelView"
import { useRef, useState } from "react"
import { yellowImg } from "../utils"

import * as THREE from 'THREE'

const Model = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'Iphone 15 Pro in Natural Titanium',
    color: ['#8f8A81', '#FFE789', '#6F6C64'],
    img: yellowImg,
  })
  // camera control
  const cameraControlSmall = useRef();
  const cameraControllLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());
  
  useGSAP(() => {
    gsap.to('#heading', {
      opacity: 1,
      y: 0
    })
  }, [])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        <div className="flex flex-col item-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model