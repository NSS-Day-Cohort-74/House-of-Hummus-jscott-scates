import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    debugger
    mainContainer.innerHTML = await FoodTruck()
}
//placeholder for event listener

renderAllHTML()

