import { newE2EPage } from "@stencil/core/testing";

describe("UIButton", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<ui-button></ui-button>");

		const element = await page.find("UIButton");
		expect(element).toHaveClass("hydrated");
	});
});
