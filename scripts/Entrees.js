
//placeholder for handleEntreeChange

export const entreeOptions = async () => {
    const response = await fetch('http://localhost:8088/entrees')
    const entrees = await response.json()

    //placeholder for event listener

    let entreeHTML = `<select id="entree">
                            <option value='0'>Entree Selection:</option>`
    
    const entreesStringArray = entrees.map(
        (entree) => {
            return `<option value=${entree.id}>${entree.name}</option>`
        }
    )
    entreeHTML += entreesStringArray.join("")
    entreeHTML += `</select>`

    return entreeHTML
}