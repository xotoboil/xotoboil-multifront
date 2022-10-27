<template>
	<div>
		<h1>vue app3</h1>
		<h2>Local Counter {{ counter }}</h2>
		<h2>Global Counter {{ globalEventDistributor.globalStore.counter }}</h2>
		<UIButton @click="increment">increment</UIButton>
		<ui-button @click="globalEventDistributor.globalStore.counter++">increment global</ui-button>
	</div>
</template>

<script lang="ts">
import store from '../store';
import { Prop, Options,  Watch } from "vue-property-decorator";
import { Vue } from "vue-class-component";

import {UIButton} from "@xotoboil-multifront/stencil"
// import {UIButton} from "@xotoboil-multifront/ui"

@Options({name: "Counter", components: {UIButton}})
export default class Counter extends Vue {
	@Prop()
	globalEventDistributor: any;

	get counter() {
		return store.state.counter;
	}

	increment() {
		store.dispatch('counterIncrement');
	}
};
</script>
