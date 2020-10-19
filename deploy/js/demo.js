import {gsap} from "gsap";

gsap.set("#svg-hourglass",{transformOrigin: "center"});

const hourGlassTL = gsap.timeline();
hourGlassTL.to("Layer_1", {duration:1, rotation: 180});

export function hourGlassAnimation(){
    return hourGlassTL; 
}
