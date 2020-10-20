import {gsap} from "gsap";

const moveBallTL = gsap.timeline();
moveBallTL.from("#circle-1", {duration:1, y: -200, ease:"bounce"})
            .to ("#circle-2",{duration:1, y:-200, ease:"bounce"})
            .to ("#circle-3",{duration:1, y:-200, ease:"bouce"})

export function moveBallAnimation(){
   return moveBallTL; 
}
