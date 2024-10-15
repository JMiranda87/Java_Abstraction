import { Shape } from './Shape';

export class Triangle extends Shape {
  constructor(color?: string) {
    super();
    if (color) this.color = color;
  }

  getArea(): number {
    return 0.5 * this.base * this.height;
  }

  displayShapeName(): void {
    console.log("I am a Triangle");
  }

  toString(): string {
    return `Triangle[base=${this.base},height=${this.height},${super.toString()}]`;
  }
}