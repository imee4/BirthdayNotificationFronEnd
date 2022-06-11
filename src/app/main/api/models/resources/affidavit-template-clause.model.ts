import { AffidavitApplicationResource } from "./affidavit-application.model";

export interface AffidavitTemplateClauseResource {
    id: number;
    content: string;
    created_at: Date;
    updated_at: Date;
    // Relations
    affidavitTemplate: AffidavitApplicationResource;
}