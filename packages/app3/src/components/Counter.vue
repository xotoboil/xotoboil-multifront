<template>
	<div>
		<h1>vue app3</h1>
		<h2>Local Counter {{ counter }}</h2>
		<h2>Global Counter {{ globalEventDistributor.globalStore.counter }}</h2>
		<ui-button @click="increment">increment</ui-button>
		<ui-button @click="globalEventDistributor.globalStore.counter++">increment global</ui-button>
	</div>
</template>

<script lang="ts">
import store from "../store";
import { Prop, Options, Watch } from "vue-property-decorator";
import { Vue } from "vue-class-component";
import { GlobalEventDistributerModel } from "@/models/GlobalEventDistributerModel";

import { UiButton } from "@xotoboil-multifront/ui-vue";

@Options({ name: "Counter", components: { UiButton } })
export default class Counter extends Vue {
	@Prop()
	globalEventDistributor: GlobalEventDistributerModel;

	get counter() {
		return store.state.counter;
	}

	increment() {
		store.dispatch("counterIncrement");
	}
}
</script>
