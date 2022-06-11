import { AffidavitApplicationResource } from "./affidavit-application.model";

export interface AffidavitApplicationFormEntryResource {
    id: number;
    placeholder: string;
    label: string;
    provided_value: string;
    created_at: Date;
    updated_at: Date;
    // Relation
    affidavitApplication: AffidavitApplicationResource;
}