{
  //
  interface person {
    name: string,
    age: number,
    email: string
  }

  function validateKeys<T extends person>(obj: T, keys: (keyof T)[]): boolean {

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      if (!(key in obj)) {
        return false
      }

    }
    return true;

  }

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));


  //
}