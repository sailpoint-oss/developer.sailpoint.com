import { createAuthentication } from "docusaurus-plugin-openapi-docs/src/markdown/createAuthentication";
import { createAuthorization } from "docusaurus-plugin-openapi-docs/src/markdown/createAuthorization";
import { createCallbacks } from "docusaurus-plugin-openapi-docs/src/markdown/createCallbacks";
import { createContactInfo } from "docusaurus-plugin-openapi-docs/src/markdown/createContactInfo";
import { createDeprecationNotice } from "docusaurus-plugin-openapi-docs/src/markdown/createDeprecationNotice";
import { createDescription } from "docusaurus-plugin-openapi-docs/src/markdown/createDescription";
import { createDownload } from "docusaurus-plugin-openapi-docs/src/markdown/createDownload";
import { createHeading } from "docusaurus-plugin-openapi-docs/src/markdown/createHeading";
import { createLicense } from "docusaurus-plugin-openapi-docs/src/markdown/createLicense";
import { createLogo } from "docusaurus-plugin-openapi-docs/src/markdown/createLogo";
import { createMethodEndpoint } from "docusaurus-plugin-openapi-docs/src/markdown/createMethodEndpoint";
import { createParamsDetails } from "docusaurus-plugin-openapi-docs/src/markdown/createParamsDetails";
import { createRequestBodyDetails } from "docusaurus-plugin-openapi-docs/src/markdown/createRequestBodyDetails";
import { createRequestHeader } from "docusaurus-plugin-openapi-docs/src/markdown/createRequestHeader";
import { createNodes } from "docusaurus-plugin-openapi-docs/src/markdown/createSchema";
import { createStatusCodes } from "docusaurus-plugin-openapi-docs/src/markdown/createStatusCodes";
import { createTermsOfService } from "docusaurus-plugin-openapi-docs/src/markdown/createTermsOfService";
import { createVendorExtensions } from "docusaurus-plugin-openapi-docs/src/markdown/createVendorExtensions";
import { createVersionBadge } from "docusaurus-plugin-openapi-docs/src/markdown/createVersionBadge";
import { create, greaterThan, lessThan, render } from "docusaurus-plugin-openapi-docs/src/markdown/utils";
import {
  ContactObject,
  LicenseObject,
  MediaTypeObject,
  SecuritySchemeObject,
} from "docusaurus-plugin-openapi-docs/src/openapi/types";
import {
  ApiPageMetadata,
  InfoPageMetadata,
  SchemaPageMetadata,
  TagPageMetadata,
} from "docusaurus-plugin-openapi-docs/src/types";

interface RequestBodyProps {
  title: string;
  body: {
    content?: {
      [key: string]: MediaTypeObject;
    };
    description?: string;
    required?: boolean;
  };
}

export function createApiPageMD({
  title,
  api: {
    deprecated,
    "x-deprecated-description": deprecatedDescription,
    description,
    method,
    path,
    extensions,
    parameters,
    requestBody,
    responses,
    callbacks,
  },
  infoPath,
  frontMatter,
}: ApiPageMetadata) {
  return render([
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
    `import Heading from "@theme/Heading";\n`,
    `import OperationTabs from "@theme/OperationTabs";\n`,
    `import TabItem from "@theme/TabItem";\n\n`,
    createHeading(title),
    createMethodEndpoint(method, path),
    infoPath && createAuthorization(infoPath),
    frontMatter.show_extensions
      ? createVendorExtensions(extensions)
      : undefined,
      createDeprecation({ deprecated, description: deprecatedDescription }),
    createExperimentalNotice(parameters),
    createDescription(description),
    requestBody || parameters ? createRequestHeader("Request") : undefined,
    createParamsDetails({ parameters, type: "path" }),
    createParamsDetails({ parameters, type: "query" }),
    createParamsDetails({ parameters, type: "header" }),
    createParamsDetails({ parameters, type: "cookie" }),
    createRequestBodyDetails({
      title: "Body",
      body: requestBody,
    } as RequestBodyProps),
    createStatusCodes({ responses }),
    createCallbacks({ callbacks }),
  ]);
}


function createDeprecation({ deprecated, description }: { deprecated?: boolean; description?: string }) {
  if (deprecated == true) {
    if (description !== undefined) {
      return `:::caution deprecated\n\n${description}\n\n:::`;
    } else {
      return `:::caution deprecated\n\nThis endpoint has been deprecated and may be replaced or removed in future versions of the API.\n\n:::`;
    }
  }
}

function createExperimentalNotice(parameters){
        if (parameters && parameters.some(element => element.in === 'header' && element.name === 'X-SailPoint-Experimental')) {
            return ":::warning experimental\n\nThis API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.\n\n:::\n\n";
        }
        // Return an empty string if the condition is not met
        return "";
}