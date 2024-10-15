import { Shape } from './Shape';

export class Circle extends Shape {
  protected radius: number;
  private readonly PI = Math.PI;

  constructor(radius: number, height?: number) {
    super();
    this.radius = radius;
    if (height) {
      this.height = height;
    }
  }

  getArea(): number {
    return this.PI * Math.pow(this.radius, 2);
  }

  displayShapeName(): void {
    console.log(`Drawing a Circle of radius ${this.radius}`);
  }

  toString(): string {
    return `Circle[radius=${this.radius}, ${super.toString()}]`;
  }
}