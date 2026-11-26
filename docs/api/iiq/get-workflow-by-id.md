## OpenAPI

```yaml GET /Workflows/{workflowId}
openapi: 3.0.1
info:
  description: |
    IdentityIQ REST Endpoint Interface Documentation for SCIM
  version: '8.3'
  title: IdentityIQ SCIM REST API
servers:
  - url: http://localhost:8080/identityiq/scim/v2
    description: IdentityIQ SCIM server basepath and path to API.
paths:
  /Workflows/{workflowId}:
    get:
      description: |
        The Workflow resource with matching id is returned.<br /><br />
        Attributes to include in the response can be specified with the attributes query parameter. <br /><br /> 
        Attributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />

        The schema related to Workflow is: <br /> 
        - **urn:ietf:params:scim:schemas:sailpoint:1.0:Workflow**
      operationId: getWorkflowById
      security:
        - basicAuth: []
      parameters:
        - name: workflowId
          in: path
          schema:
            type: string
            example: c0a8019c802d1e5a81802eb2b57e020f
          description: id of Workflow resource.
          required: true
        - in: query
          name: attributes
          schema:
            type: string
            example: name, type
          description: A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.
        - in: query
          name: excludedAttributes
          schema:
            type: string
            example: name, handler
          description: A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**
      responses:
        '200':
          description: Returns a single Workflow resource based on the id.
          content:
            application/json:
              schema:
                required:
                  - name
                properties:
                  id:
                    description: Unique identifier of the Workflow.
                    type: string
                    example: 7f00000180281df7818028be6a9c01a3
                  name:
                    description: Name of the Workflow.
                    type: string
                    example: Aggregate Correlated Applications
                  description:
                    description: Description of the Workflow.
                    type: string
                    example: Library for Steps.
                  type:
                    type: string
                    description: Type of the Workflow.
                    enum:
                      - Batch Provisioning
                      - Scheduled Assignment
                      - Scheduled Role Activation
                      - Managed Attribute
                      - Identity Correlation
                      - Identity Event
                      - Identity Lifecycle
                      - Identity Update
                      - Identity Refresh
                      - LCM Identity
                      - LCM Provisioning
                      - LCM Registration
                      - Policy Violation
                      - Role Modeler
                      - Subprocess
                      - Password Intercept
                      - Alert
                      - Attribute Sync
                    example: Step Library
                  handler:
                    description: Handler of the Workflow.
                    type: string
                    example: sailpoint.api.StandardWorkflowHandler
                  meta:
                    type: object
                    properties:
                      created:
                        description: DateTime when the Workflow was created.
                        type: string
                        format: date-time
                        example: '2022-04-14T10:43:29.436-05:00'
                      location:
                        description: URL to the Workflow.
                        type: string
                        example: http://localhost:8080/identityiq/scim/v2/Workflows/7f00000180281df7818028be6a9c01a3
                      lastModified:
                        description: DateTime of Workflow last modification.
                        type: string
                        format: date-time
                        example: '2022-05-05T15:52:30.119-05:00'
                      version:
                        description: Workflow version.
                        type: string
                        example: '"W"1649951094834"'
                      resourceType:
                        description: Resource type of the metadata subject.
                        type: string
                        example: Workflow
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
