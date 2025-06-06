export interface BaseField {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
  visibility?: {
    dependsOn: string;
    condition: "equals";
    value: string;
  };
  dynamicOptions?: {
    dependsOn: string;
    endpoint: string;
    method: "GET" | "POST";
  };
}

export interface GroupField extends BaseField {
  type: "group";
  fields: Field[];
}

export type Field = BaseField | GroupField;

export interface FormDefinition {
  formId: string;
  title: string;
  fields: Field[];
}
