import { savePlacedOrder } from "./transientState.js"

const handleSaleSubmissionClick = (salePlacedClickEvent) => {
    if(salePlacedClickEvent.target.id === "purchase") {
        savePlacedOrder()
    }
}

export const saveSubmissionButton = () => {
    
   document.addEventListener(
    "click",
    handleSaleSubmissionClick
   )

    return `<button id="purchase">Purchase Combo</button>`
}