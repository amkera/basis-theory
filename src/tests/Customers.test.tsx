import axios from "axios"
import Customers from "../Components/Customers"
import mockAxios from "axios"

jest.mock("axios") //not sure if I can use this since I used the React SDK & not axios
//unclear what data is
mockAxios.get.mockImplementation(() => Promise.resolve({ data: {} }))

describe("Customers Page", () => {
  it("should perform get request to the API", async () => {
    //TODO: TypeError: Cannot read property 'useState' of null
  })
})
