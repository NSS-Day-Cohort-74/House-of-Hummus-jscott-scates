export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await response.json()

    let salesHTML = ""
    const salesStringArray = sales.map(
        (sale) => {
            let salePrice = sale.entree.price + sale.vegetable.price + sale.side.price

            salePrice = salePrice.toLocaleString("en-us", {
                style: "currency",
                currency:"USD"
            })

            return `
                <section class="order">
                    <div>Receipt #${sale.id} = ${salePrice}</div>
                </section> 
            `
        }
    )

    salesHTML = salesStringArray.join("")

    return salesHTML
}

