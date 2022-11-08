// @ts-ignore
import Counter from "../components/Counter.vue";

import { mount } from "@vue/test-utils";

test("displays message", () => {
    const component = mount(Counter, {
        slots: {
            default: "Hello world",
        },
    });

    expect(component.text()).toBe("Hello world");
});

test("emits event on click", () => {
    const component = mount(Counter, {
        slots: {
            default: "Hello world",
        },
    });

    component.trigger("click");

    expect(component.emitted()).toHaveProperty("click");
});
