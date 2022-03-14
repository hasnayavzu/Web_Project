export class Users
{
    id : string;
    name : string;
    email : string;
    age : string;
    dob : string;

    constructor(id: string, name: string, email: string, age: string, dob: string)
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.dob = dob;
    }
}