//@ts-ignore
import UIButton from "../stories/button/UIButton/UIButton.vue";

export const UIPlugin = {
	install: (app: any) => {
		app.component("UIButton", UIButton);
	},
};

export {UIButton};
