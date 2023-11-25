document.getElementById("isTrail").checked = window.isTrail
document.getElementById("isStars").checked = window.isStars
document.getElementById("starsCount").value = window.starsCount
document.getElementById("trailColor").value = window.trailColor
document.getElementById("starDistance").value = window.starDistance
document.getElementById("trailDistance").value = window.trailDistance
document.getElementById("trailFade").value = window.trailFade
document.getElementById("trailThickness").value = window.trailThickness

const handleChange = (e) => {
    const input = document.getElementById(e);
    console.log(e)
    if(input?.type === "checkbox") {        
        window[e] = input.checked
    } else window[e] = input.value
}