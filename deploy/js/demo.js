import {gsap} from "gsap";

const moveBallTL = gsap.timeline();
moveBallTL.from("#circle-1", {duration:1, y: -200, easeOut:"bounce"})
            .to ("#circle-2",{duration:1, y:-200, easeOut:"bounce"})
            .to ("#circle-3",{duration:1, y:-200, easeOut:"bouce"})

export function moveBallAnimation(){
   return moveBallTL; 
}
