import { CourtResource } from "./court.model";
import { UserResource } from "./user.model";

export interface HrStaffResource {
    id: number;
    staff_code: string;
    full_name: string;
    first_name: string;
    last_name: string;
    other_name: string;
    email: string;
    phone_number: string;
    created_at: Date;
    updated_at: Date;
    // Relations
    court: CourtResource;
    user: UserResource;
}