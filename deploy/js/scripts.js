import {gsap} from "gsap";

import {moveBallAnimation} from "./demo.js"

const mainTL = gsap.timeline();
mainTL.add(moveBallAnimation());

