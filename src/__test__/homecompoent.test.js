import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Home from "../components/home/Home"

it("home renders correctly",() => {
    const { queryByTestId } = render(<Home/>)

    expect(queryByTestId("circular-loader-component")).toBeTruthy()
    expect(queryByTestId("start-button")).toBeTruthy()
    expect(queryByTestId("pause-button")).toBeTruthy()

})
