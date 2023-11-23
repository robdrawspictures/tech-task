import { render, screen } from "@testing-library/react";
import FormatName from "../helpers/formatName";

test('formats name correctly', () => {
    let userName = {
        "first": 'Bobby',
        "last": 'Bingo',
        "title": 'Sir',
    };
    
    render(
		<FormatName name={userName} displayTitle={true} userDetails={true} />
	);
    const linkElement = screen.getByText(/Sir Bobby Bingo/);
    expect(linkElement).toBeInTheDocument();
})