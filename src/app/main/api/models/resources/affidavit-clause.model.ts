import { AffidavitResource } from "./affidavit";

export interface AffidavitClauseResource {
    id: number;
    content: string;
    created_at: Date;
    updated_at: Date;
    // Resources
    affidavit: AffidavitResource;
}