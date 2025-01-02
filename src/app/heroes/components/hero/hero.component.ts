import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;

  changeName(): void {
    this.name = 'Gokú';
  
  }
  changeAge(): void {
    this.age = 25;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  reset(): void {
    this.name = 'iroman';
    this.age = 45;
  }
}