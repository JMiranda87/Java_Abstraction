import { Shape } from './Shape';

export class Rectangle extends Shape {
  constructor(color?: string, width?: number, height?: number) {
    super();
    if (color) this.color = color;
    if (width) this.width = width;
    if (height) this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  displayShapeName(): void {
    console.log("I am a Rectangle");
  }

  toString(): string {
    return `Rectangle[height=${this.height},width=${this.width},${super.toString()}]`;
  }
}