import { render } from '@testing-library/react';
import Cell from './Cell'

it('renders without crashing', () => {
    render(<table><tbody><tr><Cell/></tr></tbody></table>);
})

it('should match snapshot', () => {
    const {asFragment} = render(<table><tbody><tr><Cell className='Cell'/></tr></tbody></table>);
    expect(asFragment()).toMatchSnapshot()  
})

it('should match snapshot', () => {
    const {asFragment} = render(<table><tbody><tr><Cell className='Cell Cell-lit'/></tr></tbody></table>);
    expect(asFragment()).toMatchSnapshot()  
})