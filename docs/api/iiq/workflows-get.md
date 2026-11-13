## OpenAPI

```yaml GET /Workflows
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
  /Workflows:
    get:
      description: |
        This endpoint returns all Workflow resources. <br /><br />
        Attributes to include in the response can be specified with the 'attributes' query parameter. <br /><br /> 
        Attributes to exclude from the response can be specified with the 'excludedAttributes' query parameter. <br /><br />
        The schema related to Workflow is: <br /> 
        - **urn:ietf:params:scim:schemas:sailpoint:1.0:Workflow**
      operationId: WorkflowsGet
      security:
        - basicAuth: []
      parameters:
        - in: query
          name: filter
          schema:
            type: string
            example: name eq "Do Provisioning Forms"
          description: Allows for query filters according to RFC-7644, Section 3.4.2.2 - not all operations are supported.
        - in: query
          name: lookupByName
          schema:
            type: boolean
            default: false
            example: true
          description: '**(OPTIONAL)** Set to true if the Workflows name is passed instead of the Workflow id.'
        - in: query
          name: sortBy
          schema:
            type: string
            example: name
          description: Allows sorting the results by a resource's attributes.
        - in: query
          name: sortOrder
          schema:
            type: string
            default: ascending
            example: descending
          description: Determines what order to sort results in.
        - in: query
          name: startIndex
          schema:
            type: integer
            example: 15
            default: 1
          description: Determines the starting index of the result set.
        - in: query
          name: count
          schema:
            type: integer
            example: 15
            default: 1000
          description: Specifies the number of results per page.
        - in: query
          name: attributes
          schema:
            type: string
            example: name
          description: A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.
        - in: query
          name: excludedAttributes
          schema:
            type: string
            example: name, type
          description: A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**
      responses:
        '200':
          description: Returned all SCIM resources for this endpoint.
          content:
            application/json:
              schema:
                properties:
                  totalResults:
                    description: Number of resources returned for this endpoint.
                    type: integer
                    example: 1,
                  startIndex:
                    description: The starting index of the resource set list. Can be specified with startIndex query parameter.
                    type: integer
                    example: 1
                  schemas:
                    description: SCIM Schema used for response.
                    type: array
                    items:
                      type: string
                    example:
                      - urn:ietf:params:scim:api:messages:2.0:ListResponse
                  Resources:
                    type: array
                    items:
                      required:
                        - name
                      properties:
                        id:
                          description: Unique identifier of the Workflow.
                          type: string
                          example: 7f00000180281df7818028bf977502f3
                        name:
                          description: Name of the Workflow.
                          type: string
                          example: Identity Request Approve Identity Changes
                        description:
                          description: Description of the Workflow.
                          type: string
                          example: |2

                                 The subprocess that drives the Create and Update Identity workflows.
                                 This is different then the Identity Request Approve subprocess because this
                                 approval process produces a form with the approval so that
                                 approvers can update values while approving.

                                 This subprocess builds the form necessary for the editable approvals
                                 and then assimilates that data entered back to the plan, which
                                 can be returned from the subprocess.
                        type:
                          description: Type of the Workflow.
                          type: string
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
                          example: Subprocess
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
                              example: '2022-04-14T10:44:46.453-05:00'
                            location:
                              description: URL to the Workflow.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/Workflows/7f00000180281df7818028bf977502f3
                            lastModified:
                              description: DateTime of Workflow last modification.
                              type: string
                              example: '2022-05-05T15:52:30.119-05:00'
                            version:
                              description: Workflow version.
                              type: string
                              example: W"1649951086453"
                            resourceType:
                              description: Resource type of the metadata subject.
                              type: string
                              example: Workflow
            application/scim+json:
              schema:
                properties:
                  totalResults:
                    description: Number of Workflow resources returned.
                    type: integer
                    example: 1500,
                  startIndex:
                    description: The starting index of the resource set list. Can be specified with startIndex query parameter.
                    type: integer
                    example: 1
                  schemas:
                    description: SCIM Schema used for response.
                    type: array
                    items:
                      type: string
                    example:
                      - urn:ietf:params:scim:api:messages:2.0:ListResponse
                  Resources:
                    description: The SCIM resources returned for this endpoint.
                    type: array
                    items:
                      required:
                        - name
                      properties:
                        id:
                          description: Unique identifier of the Workflow.
                          type: string
                          example: 7f00000180281df7818028bf977502f3
                        name:
                          description: Name of the Workflow.
                          type: string
                          example: Identity Request Approve Identity Changes
                        description:
                          description: Description of the Workflow.
                          type: string
                          example: |2

                                 The subprocess that drives the Create and Update Identity workflows.
                                 This is different then the Identity Request Approve subprocess because this
                                 approval process produces a form with the approval so that
                                 approvers can update values while approving.

                                 This subprocess builds the form necessary for the editable approvals
                                 and then assimilates that data entered back to the plan, which
                                 can be returned from the subprocess.
                        type:
                          description: Type of the Workflow.
                          type: string
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
                          example: Subprocess
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
                              example: '2022-04-14T10:44:46.453-05:00'
                            location:
                              description: URL to the Workflow.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/Workflows/7f00000180281df7818028bf977502f3
                            lastModified:
                              description: DateTime of Workflow last modification.
                              type: string
                              example: '2022-05-05T15:52:30.119-05:00'
                            version:
                              description: Workflow version.
                              type: string
                              example: W"1649951086453"
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
