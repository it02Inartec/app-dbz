import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter {{ counter }}</h3>
    <button (click)="decrement(counter)">-1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increment(counter)">+1</button>`
})
export class CounterComponent {

    public counter:number = 1;

    increment(c:number): void {
        this.counter = c + 1;
    }

    decrement(c:number): void {
        this.counter = c - 1;
    }

    reset(): void {
        this.counter = 1;
    }
}