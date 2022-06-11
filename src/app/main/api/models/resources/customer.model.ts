import { UserResource } from "./user.model";

export interface CustomerResource {
    id: number;
    first_name: string;
    last_name: string;
    other_name: string;
    email: string;
    is_verified: string;
    created_at: Date;
    updated_at: Date;
    // Relations
    user: UserResource;
}