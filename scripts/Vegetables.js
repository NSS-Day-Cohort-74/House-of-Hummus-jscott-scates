
//placeholder for handleEntreeChange

export const vegetableOptions = async () => {
    const response = await fetch(' http://localhost:8088/vegetables')
    const vegetables = await response.json()
    
        //placeholder for event listener
    
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
