import { entreeOptions } from "./Entrees.js"
import { Sales } from "./Sales.js"
import { saveSubmissionButton } from "./saveOrderSubmission.js"
import { sideOptions } from "./SideDishes.js"
import { vegetableOptions } from "./Vegetables.js"

export const FoodTruck = async () => {
    const entreesHTML = await entreeOptions()
    const vegetableHTML = await vegetableOptions()
    const sideDishHTML = await sideOptions()
    const submissionButton = saveSubmissionButton()
    const salesListHTML = await Sales()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class="choices_paints options"
                <h2>Entrees:</h2>
                ${entreesHTML}
            </section>

            <section class="choices_paints options"
                <h2>Vegetables:</h2>
                ${vegetableHTML}
            </section>

            <section class="choices_paints options"
                <h2>Side Dishes:</h2>
                ${sideDishHTML}
            </section>
        </article>

        <article class="orderButton">
            ${submissionButton}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales:</h2>
                ${salesListHTML}
        </article>
    `
}

