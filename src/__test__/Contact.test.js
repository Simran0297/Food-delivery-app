import { render, screen} from "@testing-library/react"
import { Contact } from "../components/Contact"
import "@testing-library/jest-dom";

test("Componenet is rendered", ()=>{
    render(<Contact/>)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Button is rendered", ()=>{
    render(<Contact/>)
    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit your message!")
    expect(button).toBeInTheDocument();
})

test("should load input name on the page",()=>{
    render(<Contact/>);
    screen.debug()
    const input = screen.getByPlaceholderText("Name")
    expect(input).toBeInTheDocument();
})

test("component must render 2 input box",()=>{
    render(<Contact/>)
    const inputs = screen.getAllByRole("textbox")
    expect(inputs.length).toBe(2);
})