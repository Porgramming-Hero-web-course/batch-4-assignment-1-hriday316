## 1. The significance of union and intersection types in Typescript.

Union and intersection type are the most importent types it typescript. It's can allow us ensure type sefty in our code. Let's deep drive into  Union and Intersection types.

# Union
Union type allows us to define a variable or parameter that can hold multiple types. Using the "|" operator union type holds multiple types. It is commonly used when we are not sure exactly what type of argument received in a function or what type of data type returns this function. This case we use union types. It gives more flexibility. Aslo union type using type guards allowing for different operations depending on types. For example :

example 1: 

let id: string | number;
id = "M-24";
id = 326;


example 2
type role = "admin" | "user" | "moderator";

function getManage(input: role){
    if(input === "admin"){
        // do something
    }esle if(input === "moderator"){
        // do something
    }esle{
        //do something
    }
}


# Intersection
Intersection are similar to union types. Intersection are the type that allow to combine multiple types into a single type with all of the properties that we require. Intersections are marge's several kinds into one. This combining behavior is particularly useful in object oriented design and working with class and interface. It also useful when we want to create a new type by combining existing types without modifying the original ones. For example

 
type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };


 
