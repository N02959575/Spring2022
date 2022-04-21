export interface User{

    firstName: string;
    lastName: string;
    handle: string;
    password: string;
    email: string;
    pic: string;
    id: number;
    token?: string; // ? means optional property (allowed to be null or skipped)
}