import { RevenuePaymentEntryResource } from "./revenue-payment-entry.model";

export interface PaymentMethodResource {
    id: number;
    name: string;
    code: string;
    description: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    // Relations
    revenuePaymentEntries: RevenuePaymentEntryResource[];
}