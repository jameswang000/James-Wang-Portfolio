window.onload = function() {
    const divSection2Images = document.querySelectorAll(".section2Image");
    divSection2Images.forEach(div => {
        const computedStyle = getComputedStyle(div);
        div.style.height = computedStyle.width;
        const img = div.firstChild;
        img.style.width = computedStyle.width;
        img.style.height = computedStyle.width;
    });

    const sections = document.querySelectorAll(".section");

    //Calculate the max height of all sections first and 
    //then set the height of all section equal to it.
    let maxHeight = -1;
    for(let i = 0 ; i < sections.length ; i++) {
        const currSection = sections[i];
        const computedStyle = getComputedStyle(currSection);
        const currHeight = parseFloat(computedStyle.height);

        if(currHeight > maxHeight) {
            maxHeight = currHeight;
        }
    }
    console.log(maxHeight);
    sections.forEach(section => {
        console.log(section);
        section.style.height = maxHeight + "px";
        console.log(section.style.height);
    });
    /*  
    const divSection4 = document.querySelector(".section4Container");
    const computedStyle = getComputedStyle(divSection4);
    console.log(computedStyle.height);
    let newHeight = parseFloat(computedStyle.height) / 3;
    divSection4.style.height = newHeight + "px";
    */

}