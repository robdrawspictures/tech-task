import { render, screen } from "@testing-library/react";
import FormatAddress from "../helpers/formatAddress";

const testUser = {
    "user": {
        "location": {
            "street": {
                "name": "Firelink Shrine",
                "number": "23"
            },
            "city": "Anor Londo",
            "state": "Lothric",
            "country": "Boletaria",
            "nat": "DS",
            "postcode": "DS3 PTS",
            "coordinates": {
                "latitude": 69,
                "longitude": 420
            },
            "timezone": {
                "offset": -3.0,
                "description": "Anor Londo, Grand Archives, Irythyl Valley"
            }
        }
    }
}

test("doesn't render extra details if isDetail value is false", () => {


	let testAddress = render(
		<FormatAddress user={testUser.user} isDetail={false} />
	);

	expect(testAddress)
		.not.toContain("Anor Londo, Grand Archives, Irythyl Valley");
});

test("renders extra details if isDetail value is false", () => {


render(
		<FormatAddress user={testUser.user} isDetail={true} />
	);

        const linkElement = screen.getByText(
			/Anor Londo, Grand Archives, Irythyl Valley/i
		);

	expect(linkElement).toBeInTheDocument();
});