

addEventListener("DOMContentLoaded", function(){
    let myAnimation = {
        "scroll-behavior": "smooth"
    }
    let myStyle = {
        color: "red",
        display: "inline-block",
        width: "150%"
    }
    let texto = document.getElementById("Parrafo");
    Object.assign(texto.style, myStyle);
    Object.assign(document.getElementsByTagName("html")[0].style, myAnimation);
    setTimeout(() => {
        window.scrollTo(300,1000);
    }, 1000);
    

    addEventListener("scroll", function(){
        let scrollx = window.scrollX;
        let scrolly = window.scrollY;
        console.log("scroll X",scrollx);
        console.log("scroll Y",scrolly);
        
    })
    
})