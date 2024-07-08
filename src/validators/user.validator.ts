import Joi from "joi";

const userValidator =
    Joi.object({
        username: Joi.string()
            .pattern(/w{3,}/)
            // .required()
            .error(errors => {
                console.log(errors);
                errors.forEach(error => {
                    switch (error.code) {
                        case 'string.empty':
                            error.message = 'cannot be empty asasdasdas';
                            break;
                        case 'string.min':
                            error.message = 'cannot be empty lower than 3';
                            break;
                        default:
                            break;
                    }
                })
                return errors;
            }),
        password: Joi.string()
            .min(3)
            .max(12)
            .required()
            .messages({
                "string.min": "password must be at least 3 chars",
                "string.max": "password cannot be gt 12 chars",
            }),
        age: Joi.number()
            .min(1)
            .max(132)
            .required()
            .messages({
                "number.min": "min age is 1",
                "number.max": "max age is 132",
            })
    })

export default userValidator;