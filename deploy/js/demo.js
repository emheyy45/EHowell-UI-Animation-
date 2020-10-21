import {gsap} from "gsap";

gsap.set("#bouncie-mask",{transformOrigin:"center"});

const moveBallTL = gsap.timeline({repeat: -1});
moveBallTL.from("#svg-image", {duration:1, y: -100, ease:"bounce"})
            .from ("rectangles", {duration:.5, rotate: 200})
            .to ("#svg-image", {duration:1, y:-100, ease:"bounce"})
            .to ("#svg-image", {duration:1, x:150, ease:"bounce"})
            .to ("#svg-image", {duration:1, y:100, ease:"bounce"})
            .to ("#svg-image", {duration:1, x:400, ease:"bounce"})
            
            
            
export function moveBallAnimation(){
   

}
