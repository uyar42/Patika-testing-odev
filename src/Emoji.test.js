import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import App from "./App";

describe("EMOJİ TESTS",()=>{
    let label
    let emoji
    let input 
    beforeEach(()=>{
        render(<App></App>)

        label = screen.getByText("Emoji Search")
        emoji = screen.getAllByText("Click to copy emoji")
        input = screen.getByRole('textbox')
       
    })
    test("Başlık TEST",()=>{
        expect(label).toBeInTheDocument()
 
    })

    test("Emoji list TEST",()=>{
        expect(emoji.length).toEqual(20)
    })
    test("Emoji filter TEST",()=>{
        fireEvent.change(input, { target: { value: 'kiss' } });
        expect(screen.getAllByText(/kiss/i)).toHaveLength(9);
    })
    test("Copy TEST", async  () => {
        const emoji = screen.getByText('1234');
        userEvent.click(emoji);
        const text = '1234';
        userEvent.paste(input, emoji);
        expect(emoji).toHaveTextContent(text);
  ;
   
    })

})