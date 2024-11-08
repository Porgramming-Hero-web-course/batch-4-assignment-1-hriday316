{
  //
  interface name {
    name: string;
  }
  const getProperty = <T extends name, Q extends keyof T>(
    obj: T,
    key: Q
  ): T[Q] => {
    return obj[key];
  };

  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));
  //
}
