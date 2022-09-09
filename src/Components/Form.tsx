import { useRef } from "react"
import {
  BasisTheoryApiError,
  BasisTheoryProvider,
  BasisTheoryValidationError,
  CardElement,
  TextElement,
  useBasisTheory,
} from "@basis-theory/basis-theory-react"
import axios from "axios"

const Form = () => {
  // const firstNameRef = useRef(null)
  // const lastNameRef = useRef(null)
  const cardRef = useRef(null)
  const { bt } = useBasisTheory()

  const handlePurchase = async () => {
    // const firstName = firstNameRef.current
    // const lastName = lastNameRef.current

    if (bt) {
      try {
        const cardToken = await bt.tokens.create({
          // firstName,
          // lastName,

          type: "card",
          data: cardRef.current,
        })

        // await axios.post("https://api.basistheory.com/tokenize", {
        //   firstName,
        //   lastName,
        //   cardToken: tokens.card
        // })
      } catch (error) {
        if (error instanceof BasisTheoryValidationError) {
          console.error("There was a validation error")
        } else if (error instanceof BasisTheoryApiError) {
          console.error("There was an API error")
        } else {
          console.error("There was an error")
        }
      }
    }
  }

  return (
    <div id="form">
      {/* <BasisTheoryProvider bt={bt}> */}
      {/* <TextElement
          bt={bt}
          id="firstName"
          ref={firstNameRef}
          placeholder="First Name"
          aria-label="First name"
        />
        <TextElement
          bt={bt}
          id="lastName"
          ref={lastNameRef}
          placeholder="Last Name"
          aria-label="Last Name"
        /> */}
      <div className="row row-input">
        <CardElement id="card" bt={bt} ref={cardRef} />
      </div>
      <div className="button">
        <button type="submit" onClick={handlePurchase} disabled={!bt}>
          Purchase
        </button>
      </div>
      {/* </BasisTheoryProvider> */}
    </div>
  )
}

export default Form
