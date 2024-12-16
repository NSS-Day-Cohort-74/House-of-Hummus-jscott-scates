import { setSideId } from "./transientState.js"

const handleSideChange = (sideSelectedChangeEvent) => {
    if(sideSelectedChangeEvent.target.id === "side") {
        const convertedToInteger = parseInt(sideSelectedChangeEvent.target.value)
        setSideId(convertedToInteger)
    }
}

export const sideOptions = async () => {
    const response = await fetch(' http://localhost:8088/sides')
    const sides = await response.json()
    
    document.addEventListener(
        "change",
        handleSideChange
    )
    
    let sideHTML = `<select id="side">
                    <option value='0'>Side Selection:</option>`
        
    const sideStringArray =sides.map(
        (side) => {
            return `<option value=${side.id}>${side.title}</option>`
        }
    )
    sideHTML += sideStringArray.join("")
    sideHTML += `</select>`
    
    return sideHTML
}
