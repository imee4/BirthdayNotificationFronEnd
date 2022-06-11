import { AffidavitTemplateClauseResource } from "./affidavit-template-clause.model";
import { AffidavitTemplatePlaceholderResource } from "./affidavit-template-placeholder.model";
import { UserResource } from "./user.model";

export interface AffidavitTemplateResource {
    id: number;
    name: string;
    is_active: boolean;
    print_template: string;
    created_at: Date;
    updated_at: Date;
    // Relations
    createdBy: UserResource;
    modifiedBy: UserResource;
    placeholders: AffidavitTemplatePlaceholderResource[];
    clauses: AffidavitTemplateClauseResource[];
}