let buy=document.querySelectorAll(".price-button")
let total=document.querySelector("#total")
let reset=document.querySelector(".reset")
let totalprice=0
console.log("btn",buy.length)
buy.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const pricetext=btn.parentElement.querySelector(".price").textContent
        const price= parseFloat(pricetext.replace("&euro;",""))
        totalprice += price
        total.textContent=totalprice
        console.log(totalprice)
        reset.style.display="block"
    })
})
reset.addEventListener("click",()=>{
    totalprice=0
    console.log(totalprice)
    total.textContent=0
    reset.style.display="none"
})