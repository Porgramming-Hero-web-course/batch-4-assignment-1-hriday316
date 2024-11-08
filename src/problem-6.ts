{
  //
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(
    profile: Profile,
    fildUpdate: Partial<Profile>
  ): Profile {
    return { ...profile, ...fildUpdate };
  }

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));

  //
}
