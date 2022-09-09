import { useRef } from "react"
import {
  BasisTheoryProvider,
  CardElement,
  TextElement,
  useBasisTheory,
} from "@basis-theory/basis-theory-react"

const Form = () => {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const cardRef = useRef(null)
  const { bt } = useBasisTheory()

  const handlePurchase = async () => {
    if (bt) {
      try {
        const response = await bt.tokenize({
          firstName: firstNameRef.current,
          lastName: lastNameRef.current,
          card: {
            type: "card",
            data: cardRef.current,
          },
        })
      } catch (error: any) {
        console.log(error.data)
      }
    } else {
      console.log("BT not available")
    }
  }

  return (
    <div id="form">
      <BasisTheoryProvider bt={bt}>
        <TextElement
          id="firstName"
          ref={firstNameRef}
          placeholder="First Name"
          aria-label="First name"
        />
        <TextElement
          id="lastName"
          ref={lastNameRef}
          placeholder="Last Name"
          aria-label="Last Name"
        />
        <div className="row row-input">
          <CardElement id="card" ref={cardRef} />
        </div>
        <div className="button">
          <button type="submit" onClick={handlePurchase} disabled={!bt}>
            Purchase
          </button>
        </div>
      </BasisTheoryProvider>
    </div>
  )
}

export default Form
