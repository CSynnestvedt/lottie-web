import { defineConfig } from "eslint/config";
// eslint.config.js
export default defineConfig([
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                window: "readonly",
                document: "readonly",
                // Add other browser globals as needed
            },
            parserOptions: {
                ecmaFeatures: {
                    globalReturn: false,
                },
            },
        },
        rules: {
            "no-var": "off",
            "prefer-destructuring": "off",
            "prefer-template": "off",
            "linebreak-style": "off",
            "object-shorthand": "off",
            "prefer-object-spread": "off",
            "comma-dangle": [
                "error",
                {
                    arrays: "always-multiline",
                    objects: "always-multiline",
                    imports: "always-multiline",
                    exports: "always-multiline",
                    functions: "never",
                },
            ],
            "no-restricted-properties": "off",
            "prefer-spread": "off",
            "no-restricted-globals": "off",
            "prefer-arrow-callback": "off",
            "prefer-rest-params": "off",
            "no-restricted-syntax": "off",
            strict: "off",
            "func-names": "off",
            "max-len": "off",
            "no-underscore-dangle": "off",
            "no-param-reassign": "off",
            "vars-on-top": "off",
            "no-use-before-define": "off",
        },
    },
])

