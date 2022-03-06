<template>
	<div>
		<h1>Vue app</h1>
		{{ counter }}
		<button @click="increment">Increment</button>
		<h2>Global counter</h2>
		{{ globalEventDistributor.globalStore.counter }}
		<button @click="globalEventDistributor.globalStore.counter++">IncrementGlobal</button>
	</div>
</template>

<script lang="ts">
import store from '../store';
import { defineComponent } from 'vue';
import { Prop, Options,  Watch } from "vue-property-decorator";
import { Vue } from "vue-class-component";

@Options({name: "Counter"})
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
