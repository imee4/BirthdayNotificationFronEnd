import { PaymentMethodResource } from "./payment-method.model";
import { RevenueServiceFeeResource } from "./revenue-service-fee.model";

export interface RevenuePaymentEntryResource {
    id: number;
    order_id: string;
    ref_id: string;
    app_id: string;
    amount: number;
    transaction_fee: number;
    vat: number;
    total: number;
    status: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    // Relations
    paymentMethod: PaymentMethodResource;
    serviceFee: RevenueServiceFeeResource;
}