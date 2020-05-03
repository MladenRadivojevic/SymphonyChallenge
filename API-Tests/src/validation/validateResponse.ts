import ajv from 'ajv';

export function responseValidation(schema: any, response: any){
  
    const ajv_validator = new ajv({allErrors:true,format:'full',verbose:true});
    const validate = ajv_validator.validate(schema, response);
        return {
        is_valid: validate,
        errors: ajv_validator.errors
    };
}
