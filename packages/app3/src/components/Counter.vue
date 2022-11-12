<template>
	<div>
		<h1>vue app3</h1>
		<h2 id="local_counter">Local Counter {{ counter }}</h2>
		<h2 id="global_counter">Global Counter {{ globalEventDistributor ? globalEventDistributor.globalStore.counter : null }}</h2>
		<ui-button id="incrementBtn" @click="increment()">increment</ui-button>
		<ui-button id="incrementGlobalBtn" @click="globalEventDistributor && globalEventDistributor.globalStore.counter++">increment global</ui-button>
	</div>
</template>

<script lang="ts">
import store from "../store";
import { Prop, Options, Watch } from "vue-property-decorator";
import { Vue } from "vue-class-component";
import { GlobalEventDistributor } from "@xotoboil-multifront/common";

import { UiButton } from "@xotoboil-multifront/ui-vue";

@Options({ name: "Counter", components: { UiButton } })
export default class Counter extends Vue {
	@Prop()
	globalEventDistributor!: GlobalEventDistributor;

	get counter() {
		return store.state.counter;
	}

	increment() {
		store.dispatch("counterIncrement");
	}
}
</script>
