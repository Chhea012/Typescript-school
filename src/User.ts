export class User {
    protected id : number;
    protected name : string;
    protected email : string;
    private  password : string;
    constructor (id :number, name : string){
        this.id = id;
        this.name = name;
        this.email = "";
        this.password = "";
    }
    // create function register
    public register (email : string, password :string):string{
        this.email = email;
        this.password = password;
        return `${this.name} register with email ${this.email}`
    }
    // create function login
    public login ( email : string, password : string): string{
        if (this.email === email && this.password === password){
            return  `${this.name} logged in successful`;
        }else{
            return `logged in falsed ${this.name} `;
        }
    }
    // create function  updatepassword
    public updatepassword (newpassword: string):string{
        this.password = newpassword;
        return `${this.name} update password changed`
    }
    // create function updateprofile
    public updateprofile ( newname : string): string{
        this.name = newname;
        return `profile update changed ${this.name}`
    }
}