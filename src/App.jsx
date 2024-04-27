import './App.css'
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from 'lenis';

function Item(props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translate = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section>
      <div ref={ref}>
        <div className='helloParent'>
            <motion.div
              className='hello'
              style={{translateY: translate, scaleX: 1.05, scaleY: 1.05}}
            >
              <picture>
                <img src={props.image} />
              </picture>
            </motion.div>
          </div>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  

  return (
    <>
        <div className="title">
          <h1>Image Smooth Scroll</h1>
        </div>
      <div className="flex">
        <Item image="https://cdn.pixabay.com/photo/2024/03/20/06/18/ai-generated-8644732_1280.jpg" />
        <Item image="https://cdn.pixabay.com/photo/2023/02/20/20/44/ai-generated-7803073_960_720.jpg" />
        <Item image="https://cdn.pixabay.com/photo/2023/03/26/02/21/girl-7877422_1280.jpg" />
        <Item image="https://cdn.pixabay.com/photo/2023/10/14/04/27/ai-generated-8313922_1280.png" />
        <Item image="https://cdn.pixabay.com/photo/2023/12/15/11/30/sky-8450455_1280.jpg" />
        <Item image="https://cdn.pixabay.com/photo/2023/12/28/14/09/cat-8474233_1280.png" />
        <Item image="https://cdn.pixabay.com/photo/2023/10/04/17/00/ai-generated-8294107_960_720.png" />
        <Item image="https://cdn.pixabay.com/photo/2023/08/22/04/12/ai-generated-8205363_1280.jpg" />
        <Item image="https://cdn.pixabay.com/photo/2024/01/31/16/15/kitchen-8544377_1280.png" />
        <Item image="https://cdn.pixabay.com/photo/2023/10/10/12/36/lofi-8306352_1280.jpg" />
      </div>
    </>
  );
}
