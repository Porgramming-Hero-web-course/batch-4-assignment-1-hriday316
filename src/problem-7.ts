{
  //
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}

    getCarAge() {
       const currentYear:number = new Date().getFullYear();
       const age:number = currentYear - this.year;
       console.log(`${age} (assuming current year is ${currentYear})`);
       
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  car.getCarAge();

  //
}
