import { render, screen } from "@testing-library/react";
import FormatDate from "../helpers/formatDate";

test("formats birth date correctly, and displays correct elements based on type", () => {
	let testDate = {
        "date": '1970-10-15T14:56:28.716Z',
        "age": 53
	};

	render(
		<FormatDate date={testDate} type='birth' />
	);
    const testStr1 = "15/10/1970"
	const linkElement1 = screen.getByText(new RegExp(testStr1));
	expect(linkElement1).toBeInTheDocument();
    const testStr2 = "(Age: 53)"
	const linkElement2 = screen.getByText(new RegExp(testStr2));
	expect(linkElement2).toBeInTheDocument();
});

test("formats registration date correctly, and displays correct elements based on type", () => {
	let testDate = {
        "date": '2016-02-27T14:56:28.716Z',
        "age": 7
	};

	render(
		<FormatDate date={testDate} type='register' />
	);
    const testStr1 = "27/02/2016"
	const linkElement1 = screen.getByText(new RegExp(testStr1));
	expect(linkElement1).toBeInTheDocument();
    const testStr2 = "(7 years)"
	const linkElement2 = screen.getByText(new RegExp(testStr2));
	expect(linkElement2).toBeInTheDocument();
});
