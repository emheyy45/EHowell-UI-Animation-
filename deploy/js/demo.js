import {gsap} from "gsap";

const moveBallTL = gsap.timeline();
moveBallTL.from("#circle-1", {duration:1, y: -400, ease:"none"})
            .to ("#circle-2",{duration:1, y:-400, ease:"none"})
            .to ("#circle-3",{duration:1, y:-400, ease:"none"})

export function moveBallAnimation(){
   return moveBallTL; 
}
