const animations = [
    { transform: ['rotateX(0deg)', 'rotateX(360deg)'], scale: [1, 1.5, 1] },
    { transform: ['rotateX(190deg)', 'rotateX(360deg)'], scale: [1, 0.8, 1.2, 1] },
    { transform: ['rotateX(360deg)', 'rotateX(0deg)'], scale: [1, 1.2, 0.8, 1] },
    { transform: ['rotateX(45deg)', 'rotateX(360deg)'], scale: [1, 1.5, 0.5, 1] },
    { transform: ['rotateX(270deg)', 'rotateX(0deg)'], scale: [1, 0.5, 1.5, 1] }
];
const starColors = ['#F9EBB2', '#FFE194', '#FFD74A', '#FFC400', '#FFD700', '#FFDF80', '#FFF275', '#FFECB3', '#F7D794', '#F5D372'];




const generateRandom = (length) =>{
   return Math.floor(Math.random() * length);
}

const prev = { top: 0, left: 0}
const noOfStars = 3;

const animate = (star, top, left, gravaty) => {
    const randomIndex = generateRandom(animations.length)
    const duration = 1000

    setTimeout(() => { star.style.color = "black" },duration-50)
    setTimeout(() => star.remove() ,duration)

    const randomDirection = { top: generateRandom(200), left: generateRandom(200)}

    star.animate(
        { top: top+gravaty+randomDirection.top+"px", left: left+randomDirection.left+"px", color: "black", ...animations[randomIndex] },
        {duration, iterations: 1,}
    )

}

const animateTrail = (trail) => {
    const duration = 500
    setTimeout(() => { trail.style.background = "black" },duration-100)
    setTimeout(() => trail.remove() ,duration)
    trail.animate(
        { width: 0, height: 0 },
        {duration, iterations: 1,}
    )

}

const generateStar = (mouseX, mouseY) => {
    const star = document.createElement("i");
    star.className = "fa-solid fa-star stars";
    star.style.position = "absolute";
    star.style.color = starColors[generateRandom(starColors.length)]
    star.style.left = mouseX + "px";
    star.style.top = mouseY + "px";
   
    document.body.appendChild(star)
    const xdirection = mouseX > prev.left ? mouseX-100 : mouseX+100
    const ydirection = mouseY > prev.top ? mouseY-100 : mouseY+100
    animate(star, ydirection, xdirection, 100)    
}


const generateTrail = (mouseX, mouseY) => {
    const trail = document.createElement("div");
    trail.className = "trail"
    trail.style.left = mouseX + "px";
    trail.style.top = mouseY + "px";
    document.body.appendChild(trail)
    animateTrail(trail)
}

document.addEventListener('mousemove', function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    generateTrail(mouseX, mouseY)   
    if(Math.abs(prev.left - mouseX) >= 50 || Math.abs(prev.top - mouseY) >= 50){
        for(let i =0; i <= noOfStars; i++) generateStar(mouseX, mouseY)
        prev.top = mouseY
        prev.left = mouseX
    }
});