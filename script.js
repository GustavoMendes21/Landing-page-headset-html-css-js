const products = document.querySelectorAll(".products-btn")

function RemoveAllClasses() {
    products.forEach(product => product.classList.remove("active"))
}

function changeImage(id) {
    const images = ["headset-1", "headset-2", "headset-3"]
    const image = document.querySelector(".product-image")

    image.setAttribute("src", `assets/${images[id]}.png`)
}

function SelectProduct(product) {
    changeImage(product.dataset.id)
    RemoveAllClasses()
    product.classList.add("active")
}



products.forEach(product => {
    product.addEventListener("click",() => SelectProduct(product))
})
