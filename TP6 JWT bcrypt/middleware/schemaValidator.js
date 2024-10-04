const schemas = require('../middleware/schema');

const supportedMethods = ["post", "put", "patch", "delete","get"];

const schemaValidator = (path, useJoiError = true) => {
    const schema = schemas[path];

    if (!schema) {
        throw new Error(`Schema not found for path: ${path}`);
    }

    return (req, res, next) => {
        const method = req.method.toLowerCase();

        if (!supportedMethods.includes(method)) {
            return next();
        }

        const { error, value } = schema.validate(req.body);

        if (error) {
            const customError = {
                status: "failed",
                error: "Invalid request. Please review request and try again.",
            };

            const joiError = {
                status: "failed",
                error: {
                    original: error._original,
                    details: error.details.map(({ message, type }) => ({
                        message: message.replace(/['"]/g, ""),
                        type,
                    })),
                },
            };

            return res.status(422).json(useJoiError ? joiError : customError);
        }

        // validation successful
        req.body = value;
        return next();
    };
};

module.exports = schemaValidator;