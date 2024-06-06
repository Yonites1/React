import {render, screen, fireEvent} from '@testing-library/react';
import List from './List';
describe("List",()=>{

    // RGR// Red Green Refactor
    const mockItems = [];
    beforeEach(()=>{  
    mockItems.push({id:1, name: "sport", done: false}, {id:1, name: "soccer", done: false})
});
    
    test ("List unit test", ()=>{
        
        render(<List items={mockItems}/>)
        // assertion
        mockItems.forEach((item)=> {
            expect(screen.getByText(item.name)).toBeInTheDocument();
        });
        //expect(screen.getByText("sport")).toBeInTheDocument(); 
        //expect(screen.getByText("soccer")).toBeInTheDocument();
    })

    test ("Delete unit test", ()=>{
        const handleDelete = jest.fn();
        render(<List items={mockItems} onDelete={handleDelete}/>)
        // Asseration
        const buttons = screen.getAllByRole("button")
        fireEvent.click(buttons[0])
        expect(handleDelete).toHaveBeenCalledWith("sport");

    })
    test("Checkbox unit test", ()=>{
        const handleCheck = jest.fn();
        render(<List items={mockItems} onCheck={handleCheck}/>);
        const checkBoxes = screen.getAllByRole("checkbox");
        fireEvent.click(checkBoxes[0]);
        expect(handleCheck).toHaveBeenCalledTimes(1);
        
    });
});