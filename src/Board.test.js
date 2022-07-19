import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Board from './Board'
import createBoard from './createBoard'

beforeEach(() => {
    jest.spyOn(createBoard, 'create').mockImplementation(() => [
                    [{on: true, coord:[0, 0]}, {on: false, coord:[0, 1]}, {on: true, coord:[0, 2]}], 
                    [{on: false, coord:[1, 0]}, {on: true, coord:[1, 1]}, {on: false, coord:[1, 2]}], 
                    [{on: true, coord:[2, 0]}, {on: false, coord:[2, 1]}, {on: true, coord:[2, 2]}]
                ]);
});

afterEach(() => {
    createBoard.create.mockRestore();
})

it('renders without crashing', () => {
    render(<Board />)
})

it('should match snapshot', () => {
    const {asFragment} = render(<Board />)
    expect(asFragment()).toMatchSnapshot()
})

it('should switch the correct cells on click', () => {
    const {queryByTestId} = render(<Board/>);
    const center = queryByTestId("1,1")
    const up = queryByTestId("0,1")
    const down = queryByTestId("2,1")
    const left = queryByTestId("1,0")
    const right = queryByTestId("1,2")

    expect(center).toHaveClass('Cell', 'Cell-lit')
    expect(up).toHaveClass('Cell')
    expect(down).toHaveClass('Cell')
    expect(left).toHaveClass('Cell')
    expect(right).toHaveClass('Cell')

    fireEvent.click(center)
    expect(center).toHaveClass('Cell')
    expect(up).toHaveClass('Cell', 'Cell-lit')
    expect(down).toHaveClass('Cell', 'Cell-lit')
    expect(left).toHaveClass('Cell', 'Cell-lit')
    expect(right).toHaveClass('Cell', 'Cell-lit')
})