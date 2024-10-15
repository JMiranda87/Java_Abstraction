import React, { useEffect, useState } from 'react';
import { Circle } from '../shapes/Circle';
import { Rectangle } from '../shapes/Rectangle';
import { Triangle } from '../shapes/Triangle';
import { Shape } from '../shapes/Shape';

const ShapeDemo: React.FC = () => {
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    const runDemo = () => {
      const newOutput: string[] = [];

      const c = new Circle(100);
      newOutput.push(`Area of Circle ${c.getArea()}`);

      newOutput.push("+++++++++++++++++");
      const shapeCircleObj: Shape = new Circle(100);
      shapeCircleObj.displayShapeName();
      newOutput.push(`Area of Circle ${shapeCircleObj.getArea()}`);
      newOutput.push(shapeCircleObj.toString());
      newOutput.push(`Is Circle: ${shapeCircleObj instanceof Circle}`);

      newOutput.push("+++++++++++++++++");
      const shapeRectangleObj: Shape = new Rectangle("Red");
      shapeRectangleObj.displayShapeName();
      shapeRectangleObj.setHeight(2);
      shapeRectangleObj.setWidth(4);
      newOutput.push(`Area of Rectangle is ${shapeRectangleObj.getArea()}`);
      newOutput.push(shapeRectangleObj.toString());
      newOutput.push(`Is Rectangle: ${shapeRectangleObj instanceof Rectangle}`);

      newOutput.push("--------------------");
      const shapeTriangleObj: Shape = new Triangle("Blue");
      shapeTriangleObj.displayShapeName();
      shapeTriangleObj.setHeight(10);
      shapeTriangleObj.setBase(15);
      newOutput.push(`Area of Triangle is ${shapeTriangleObj.getArea()}`);
      newOutput.push(shapeTriangleObj.toString());

      setOutput(newOutput);
    };

    runDemo();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Java Abstraction Demo</h1>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </pre>
    </div>
  );
};

export default ShapeDemo;