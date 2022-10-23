import {newSpecPage} from "@stencil/core/testing";
import {UIButton} from "../UIButton";

describe("UIButton", () => {
	it("renders", async () => {
		const page = await newSpecPage({
			components: [UIButton],
			html: `<ui-button></ui-button>`,
		});
		expect(page.root).toEqualHtml(`
      <ui-button>
        <mock:shadow-root>
        <button class="btn btn-undefined"><slot></slot></button>
        </mock:shadow-root>
      </ui-button>
    `);
	});
});
