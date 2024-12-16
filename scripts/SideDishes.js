export const Sides = () => {

    return html
}

//placeholder for handleEntreeChange

export const sideOptions = async () => {
    const response = await fetch(' http://localhost:8088/sides')
    const sides = await response.json()
    
        //placeholder for event listener
    
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
