export abstract class Shape {
  protected color: string;
  protected height: number;
  protected width: number;
  protected base: number;

  setColor(color: string): void {
    this.color = color;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  setBase(base: number): void {
    this.base = base;
  }

  abstract getArea(): number;

  toString(): string {
    return `Shape[color=${this.color}]`;
  }

  displayShapeName(): void {
    console.log("I am a Shape.");
  }
}