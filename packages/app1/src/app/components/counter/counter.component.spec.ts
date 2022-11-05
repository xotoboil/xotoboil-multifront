/* eslint-disable prettier/prettier */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { CounterComponent } from "./counter.component";
import { StoreModule } from "@ngrx/store";
import { rootReducer } from "src/app/store/root-reducer";
import { Decrement, Increment, Reset } from "src/app/store/actions/counter.actions";

describe("CounterComponent", () => {
	let component: CounterComponent;
	let fixture: ComponentFixture<CounterComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CounterComponent],
			providers: [],
			imports: [StoreModule.forRoot(rootReducer)],
			schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CounterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	describe("ngOnInit", () => {
		it("should set count selector value", (done) => {
			component.ngOnInit();
			expect(component.count).toBeDefined();
			component.count.subscribe((count) => {
				expect(count).toBe(0);
				done();
			});
		});
	});

	describe("increment", () => {
		it("should dispatch the Increment action", () => {
			const fnDispatch = spyOn(component["store"], "dispatch");
			component.ngOnInit();
			component.increment();
			expect(fnDispatch).toHaveBeenCalledWith(new Increment());
		});
	});

	describe("decrement", () => {
		it("should dispatch the Decrement action", () => {
			const fnDispatch = spyOn(component["store"], "dispatch");
			component.decrement();
			expect(fnDispatch).toHaveBeenCalledWith(new Decrement());
		});
	});

	describe("reset", () => {
		it("should dispatch the Reset action", () => {
			const fnDispatch = spyOn(component["store"], "dispatch");
			component.reset();
			expect(fnDispatch).toHaveBeenCalledWith(new Reset());
		});
	});
});
