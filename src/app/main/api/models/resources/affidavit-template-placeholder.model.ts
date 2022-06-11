import { AffidavitTemplateResource } from "./affidavit-template.model";
import { UserResource } from "./user.model";

export interface AffidavitTemplatePlaceholderResource {
    id: number;
    placeholder: string;
    label: string;
    is_required: boolean;
    created_at: Date;
    updated_at: Date;
    // Relations
    affidavitTemplate: AffidavitTemplateResource;
}