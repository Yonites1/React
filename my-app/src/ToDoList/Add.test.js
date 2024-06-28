import { render, screen, fireEvent } from "@testing-library/react";
import Add from "./Add";
// Red - Green - Refactor
test ("add todo list test unit",()=>{
    const mockAdd = jest.fn()
    render(<Add handleAdd={mockAdd}/>)
    expect(screen.getByRole("button")).toBeDisabled();
    fireEvent.change(screen.getByRole('textbox'),{ target:{value:"sport"}});
    fireEvent.click(screen.getByRole('button'));
    //const addTaskText = screen.getByText(/Add Task/i);.
    // Assertion
    expect (mockAdd).toHaveBeenCalledWith("sport");
    expect (mockAdd).toHaveBeenCalledTimes(1);
    expect (screen.getByText(/Add Task/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeEnabled();

});