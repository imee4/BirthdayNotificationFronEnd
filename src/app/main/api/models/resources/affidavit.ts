import { AffidavitApplicationResource } from "./affidavit-application.model";
import { AffidavitClauseResource } from "./affidavit-clause.model";
import { LgaResource } from "./lga.model";
import { UserResource } from "./user.model";

export interface AffidavitResource {
    id: number;
    ref_no: string;
    occupation: string;
    gender: string;
    religion: string;
    generated_file: string;
    created_at: Date;
    updated_at: Date;
    // Relations
    lga: LgaResource;
    createdBy: UserResource;
    affidavitApplication: AffidavitApplicationResource;
    affidavitClauses: AffidavitClauseResource[];
}