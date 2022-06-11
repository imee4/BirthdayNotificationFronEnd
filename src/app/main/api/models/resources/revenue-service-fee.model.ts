import { RevenuePaymentEntryResource } from "./revenue-payment-entry.model";
import { UserResource } from "./user.model";

export interface RevenueServiceFeeResource {
    id: number;
    name: string;
    description: string;
    fee: number;
    // Relations
    createdBy: UserResource;
    modifiedBy: UserResource;
    revenuePaymentEntries: RevenuePaymentEntryResource[];
}
