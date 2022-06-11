import { AffidavitApplicationResource } from "./affidavit-application.model";

export interface AddUserResources {
    id:number;
    email:string;
    name:string;
    phone_number:number;
    dob:Date;
    gender:string;
}