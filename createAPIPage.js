"use strict";
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchemaPageMD = exports.createTagPageMD = exports.createInfoPageMD = exports.createApiPageMD = void 0;
const createAuthentication_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createAuthentication");
const createAuthorization_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createAuthorization");
const createCallbacks_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createCallbacks");
const createContactInfo_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createContactInfo");
const createDeprecationNotice_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createDeprecationNotice");
const createDescription_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createDescription");
const createDownload_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createDownload");
const createHeading_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createHeading");
const createLicense_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createLicense");
const createLogo_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createLogo");
const createMethodEndpoint_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createMethodEndpoint");
const createParamsDetails_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createParamsDetails");
const createRequestBodyDetails_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createRequestBodyDetails");
const createRequestHeader_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createRequestHeader");
const createSchema_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createSchema");
const createStatusCodes_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createStatusCodes");
const createTermsOfService_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createTermsOfService");
const createVendorExtensions_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createVendorExtensions");
const createVersionBadge_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/createVersionBadge");
const utils_1 = require("./node_modules/docusaurus-plugin-openapi-docs/lib/markdown/utils");
function createApiPageMD({ title, api: { deprecated, "x-deprecated-description": deprecatedDescription, description, method, path, extensions, parameters, requestBody, responses, callbacks, }, infoPath, frontMatter, }) {
    return (0, utils_1.render)([
        `import ApiTabs from "@theme/ApiTabs";\n`,
        `import DiscriminatorTabs from "@theme/DiscriminatorTabs";\n`,
        `import MethodEndpoint from "@theme/ApiExplorer/MethodEndpoint";\n`,
        `import SecuritySchemes from "@theme/ApiExplorer/SecuritySchemes";\n`,
        `import MimeTabs from "@theme/MimeTabs";\n`,
        `import ParamsItem from "@theme/ParamsItem";\n`,
        `import ResponseSamples from "@theme/ResponseSamples";\n`,
        `import SchemaItem from "@theme/SchemaItem";\n`,
        `import SchemaTabs from "@theme/SchemaTabs";\n`,
        `import Markdown from "@theme/Markdown";\n`,
        `import OperationTabs from "@theme/OperationTabs";\n`,
        `import TabItem from "@theme/TabItem";\n\n`,
        (0, createHeading_1.createHeading)(title.replace(utils_1.lessThan, "&lt;").replace(utils_1.greaterThan, "&gt;")),
        (0, createMethodEndpoint_1.createMethodEndpoint)(method, path),
        infoPath && (0, createAuthorization_1.createAuthorization)(infoPath),
        frontMatter.show_extensions
            ? (0, createVendorExtensions_1.createVendorExtensions)(extensions)
            : undefined,
        (0, createDeprecationNotice_1.createDeprecationNotice)({ deprecated, description: deprecatedDescription }),
        isExperimental(parameters),
        (0, createDescription_1.createDescription)(description),
        requestBody || parameters ? (0, createRequestHeader_1.createRequestHeader)("Request") : undefined,
        (0, createParamsDetails_1.createParamsDetails)({ parameters, type: "path" }),
        (0, createParamsDetails_1.createParamsDetails)({ parameters, type: "query" }),
        (0, createParamsDetails_1.createParamsDetails)({ parameters, type: "header" }),
        (0, createParamsDetails_1.createParamsDetails)({ parameters, type: "cookie" }),
        (0, createRequestBodyDetails_1.createRequestBodyDetails)({
            title: "Body",
            body: requestBody,
        }),
        (0, createStatusCodes_1.createStatusCodes)({ responses }),
        (0, createCallbacks_1.createCallbacks)({ callbacks }),
    ]);
}

function isExperimental(parameters) {
    if (parameters && parameters.some(element => element.in === 'header' && element.name === 'X-SailPoint-Experimental')) {
        return ":::caution experimental\n\nThis API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.\n\n:::\n\n";
    }
    // Return a default value or null if the condition is not met
    return null;
}

exports.createApiPageMD = createApiPageMD;