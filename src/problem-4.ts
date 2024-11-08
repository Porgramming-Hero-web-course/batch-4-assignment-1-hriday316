{
  //
  type circle = {
    shape: "circle";
    radius: number;
  };

  type rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  function calculateShapeArea(input: circle | rectangle) {
    if ("radius" in input) {
      const pai: number = 3.14;
      const val: number = input?.radius;
      const result: number = pai * (val * val);
      return result;
    } else if ("width" in input && "height" in input) {
      const result: number = input?.height * input?.width;
      return result;
    }
  }

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
   
    const rectangleArea = calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
    });

     
    

  //
}
