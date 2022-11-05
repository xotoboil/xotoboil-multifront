export class GlobalStoreModel {
	counter!: number;
}

export class GlobalEventDistributerModel {
	globalStore!: GlobalStoreModel;
}
