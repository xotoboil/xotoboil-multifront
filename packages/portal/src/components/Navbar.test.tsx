import React from "react";
import { render, screen } from "@testing-library/react";
import { NavBar } from "./NavBar";

const ComponentWrapper: any = (): React.ReactElement => {
	return <NavBar />;
};
describe("Navbar", () => {
	test("should render <Navbar/>", () => {
		render(<ComponentWrapper />);
		expect(screen.getByRole("navigation")).toBeDefined();
	});
});
