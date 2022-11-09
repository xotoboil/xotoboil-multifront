// @ts-ignore
import Counter from "../components/Counter.vue";

import { mount } from "@vue/test-utils";

test("displays message", () => {
    const component = mount(Counter);

    expect(component.text()).toMatch(/Local Counter/i);
});
