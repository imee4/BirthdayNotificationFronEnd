import { AddUserResources } from "./add-user.model";
import { GroupsResources } from "./group-resource.model";


export class AdminResources {
    
    profile_id:number;
    user_type_id:number;
    email:string;
    password:string;
    profile: AddUserResources;
    group: GroupsResources;
}