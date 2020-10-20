import {gsap} from "gsap";

const moveBallTL = gsap.timeline();
moveBallTL.from("#circle-1", {duration:1, y: -400, ease:"none"})
            .to ("#circle-1",{duration:1, y:-400, ease:"none"})

export function moveBallAnimation(){
   // return hourGlassTL; 
}
