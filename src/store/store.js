import { Store } from "pullstate";

export const UIStore = new Store({
	sideMenuIsOpen: false,

	filterUI: {
		filterMenuIsOpen: false,
		filtersSelected: {
			gender: "",
			colorsSelected: [],
			material: "",
		},
	},
});
