import { AffidavitResource } from "./affidavit"; 
import { AffidavitApplicationFormEntryResource } from "./affidavit-application-form-entry.model";
import { AffidavitTemplateResource } from "./affidavit-template.model";
import { LgaResource } from "./lga.model";
import { RevenuePaymentEntryResource } from "./revenue-payment-entry.model";
import { UserResource } from "./user.model";

export interface AffidavitApplicationResource {
    id: number;
    ref_no: string;
    signature_file: string;
    passport_photo_file: string;
    affidavit_type_name: string;
    status: string;
    is_paid: boolean;
    deponent_name: string;
    town_native: string;
    town_resident: string;
    occupation: string;
    gender: string;
    religion: string;
    created_at: Date;
    updated_at: Date;
    // Relations
    createdBy: UserResource;
    lga: LgaResource;
    affidavitTemplate: AffidavitTemplateResource;
    revenuePaymentEntry: RevenuePaymentEntryResource;
    affidavit: AffidavitResource;
    formEntries: AffidavitApplicationFormEntryResource[]; 
}