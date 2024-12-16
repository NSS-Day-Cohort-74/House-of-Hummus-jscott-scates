//set up transient state data structure with initial values
const transientState = {
    "entreeId": 0,
    "vegetableId": 0,
    "sideId": 0,
}

//functions to modify each property of the transient state
export const setEntreeId = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}

export const setVegetableId = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(transientState)
}

export const setSideId = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)
}

//function that converts a transientState into a placeOrder
export const savePlacedOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch ('http://localhost:8088/purchases', postOptions)

    const customEvent = new CustomEvent ("newSaleOrder")
    document. dispatchEvent(customEvent)
}