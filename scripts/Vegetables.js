import { setVegetableId } from "./transientState.js"

const handleVegetableChange = (vegetableSelectedChangeEvent) => {
    if(vegetableSelectedChangeEvent.target.id === "vegetable") {
        const convertedToInteger = parseInt(vegetableSelectedChangeEvent.target.value)
        setVegetableId(convertedToInteger)
    }
}

export const vegetableOptions = async () => {
    const response = await fetch(' http://localhost:8088/vegetables')
    const vegetables = await response.json()
    
    document.addEventListener(
        "change",
        handleVegetableChange
    )
    
    let vegetableHTML = `<select id="vegetable">
                        <option value='0'>Vegetable Selection:</option>`
        
    const vegetableStringArray =vegetables.map(
        (vegetable) => {
            return `<option value=${vegetable.id}>${vegetable.type}</option>`
        }
    )
    vegetableHTML +=vegetableStringArray.join("")
    vegetableHTML += `</select>`
    
    return vegetableHTML
}
