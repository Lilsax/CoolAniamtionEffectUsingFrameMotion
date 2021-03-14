import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

import { titleAnim } from './animation';
import xxx from './x.jpg';

export default function App() {
  const location = useLocation();

  const path = location.pathname.split('/')[2];

  return (
    <MainDev>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {path && (
            <firstDiv layoutId="sec">
              <FixH2
                className="b"
                variants={titleAnim}
                initial="hidden"
                animate="show"
              >
                XXXTENTACION
              </FixH2>
              <Link to="/">
                <Simage layoutId="image sec" src={xxx} alt="" />
              </Link>
            </firstDiv>
          )}
        </AnimatePresence>

        <Link to="/prof/xxxtehtacion">
          <SecDev layoutId="first">
            <FirstImage layoutId="image first" src={xxx} alt="" />
          </SecDev>
        </Link>
      </AnimateSharedLayout>
    </MainDev>
  );
}

const MainDev = styled(motion.div)`
  background: rgb(189, 171, 171);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const firstDiv = styled(motion.div)`
  background: rgb(189, 171, 171);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const FixH2 = styled(motion.h2)`
  text-align: center;
  font-size: 100px;
  font-family: 'DotGothic16', sans-serif;
  margin-top: 314px;
  z-index: 9;
`;
const SecDev = styled(motion.div)`
  background: rgb(189, 171, 171);
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
`;
const FirstImage = styled(motion.img)`
  width: 350px;
  height: 400px;
  position: absolute;
  top: 50px;
  left: calc(50% - 175px);
  object-fit: cover;
`;

const Simage = styled(motion.img)`
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-top: 0vh;
  margin-bottom: 200px;
  z-index: 123;
`;
