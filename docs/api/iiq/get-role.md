## OpenAPI

```yaml GET /Roles/{roleId}
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
  /Roles/{roleId}:
    get:
      description: The Role resource with matching ID or name is returned. Attributes to include in the response can be specified with the 'attributes' query parameter. Attributes to exclude from the response can be specified with the 'excludedAttributes' query parameter. The core schema is urn:ietf:params:scim:schemas:sailpoint:1.0:Role.
      operationId: getRole
      security:
        - basicAuth: []
      parameters:
        - name: roleId
          in: path
          schema:
            type: string
          description: ID or name of Role resource.
          required: true
        - in: query
          name: lookupByName
          schema:
            type: boolean
          description: 'A boolean value that determines if the Role resource will be looked up by name instead of Id (value in path parameter ''roleId''). Setting this query parameter to true will cause the value pulled from the ''roleId'' path parameter to be treated as a name when searching for the resource.<br/><br/>**Example**: scim/v2/Roles/**Data Analyst**?**lookupByName=true**'
        - in: query
          name: attributes
          schema:
            type: string
          description: 'The Role attributes to include in the response. The query parameter value is a comma-separated list of fields to be returned in the response for each Role.<br/><br/>**Example**: attributes=name,type<br/><br/> The attributes listed will be the only ones returned in the response, with the exception of id, schemas, and meta, which are always returned for a Role.'
        - in: query
          name: excludedAttributes
          schema:
            type: string
          description: 'The Role attributes to exclude frome the response. The query parameter value is a comma-separated list of fields to be excluded from the response for each Role.<br/><br/>**Example**: excludedAttributes=permits,requirements<br/><br/> The attributes listed will be the only ones excluded frome the response, with the exception of id, schemas, and meta, which are always returned for a Role.'
      responses:
        '200':
          description: Returns a single Role resource based on the ID.
          content:
            application/json:
              schema:
                properties:
                  id:
                    description: IIQ ID of the Role.
                    type: string
                    example: c0b4568a4fe7458c434ee77d1fbt156b
                  name:
                    description: Unique name for the Role. This name MUST be unique across the entire set of Roles.
                    type: string
                    example: ADDirect-Production Manager
                  descriptions:
                    description: A list of localized descriptions of the Role.
                    type: array
                    example:
                      - locale: en_US
                        value: Directs production operations and processes for a plant, division, or company. Plans and maintains production schedules. Manages facilities and equipment maintenance.
                  type:
                    description: The type of the Role.
                    type: object
                    example:
                      iiq: false
                      requirements: false
                      permits: false
                      displayName: IT
                      manualAssignment: false
                      name: it
                      autoAssignment: false
                      assignmentSelector: false
                  displayableName:
                    description: Displayable name of the Role.
                    type: string
                    example: Staging Test Engineer - IT
                  active:
                    description: Flag to indicate this Role is enabled or active.
                    type: boolean
                    example: true
                  activationDate:
                    description: The date the Role will turn from inactive/disabled to active/enabled.
                    type: string
                    format: date-time
                    example: '2022-02-11T01:08:45.866-05:00'
                  deactivationDate:
                    description: The date the Role will turn from active/enabled to inactive/disabled.
                    type: string
                    format: date-time
                    example: '2022-02-11T01:08:45.866-05:00'
                  owner:
                    description: The owner of the Role.
                    type: object
                    properties:
                      displayName:
                        description: Display name of the Role owner.
                        type: string
                        example: Lori Ferguson
                      value:
                        description: ID of the Role owner.
                        type: string
                        example: ac1301737f901991817f90d9eb050372
                      $ref:
                        description: URI reference of the Role owner resource.
                        type: string
                        example: http://localhost:8080/identityiq/scim/v2/Users/ac1301737f901991817f90d9eb050372
                  inheritance:
                    description: Parent Roles this role inherits from.
                    type: array
                    properties:
                      displayName:
                        description: Display name of the parent Role.
                        type: string
                        example: Finance & Accounting
                      value:
                        description: ID of the parent Role.
                        type: string
                        example: ac1301737f901991817f90d9f054041c
                      $ref:
                        description: URI reference of the parent Role resource.
                        type: string
                        example: http://localhost:8080/identityiq/scim/v2/Roles/ac1301737f901991817f90d9f054041c
                  requirements:
                    description: Roles this role requires. This is normally used with business roles to reference IT roles as a way of indicating which IT roles are required to support a business role.
                    type: array
                    properties:
                      displayName:
                        description: Display name of the required Role.
                        type: string
                        example: Accounting General Access - IT
                      value:
                        description: ID of the required Role.
                        type: string
                        example: ac1301737f901991817f90d9ed110387
                      $ref:
                        description: URI reference of the required Role resource.
                        type: string
                        example: http://localhost:8080/identityiq/scim/v2/Roles/ac1301737f901991817f90d9ed110387
                  permits:
                    description: Roles this role permits. This is normally used with business roles to reference IT roles as a way of indicating which IT roles are allowed to support a business role.
                    type: array
                    properties:
                      displayName:
                        description: Display name of the permitted Role.
                        type: string
                        example: Accounts Payable Access - IT
                      value:
                        description: ID of the permitted Role.
                        type: string
                        example: ac1301737f901991817f90d9ed170388
                      $ref:
                        description: URI reference of the permitted Role resource.
                        type: string
                        example: http://localhost:8080/identityiq/scim/v2/Roles/ac1301737f901991817f90d9ed170388
                  classifications:
                    description: Classifications of this Role.
                    type: array
                    example:
                      - effective: false
                        source: UI
                        classification:
                          displayName: Special2
                          origin: JDBCDirectDemoData
                          name: Special2
                      - effective: false
                        source: UI
                        classification:
                          displayName: Special7
                          origin: JDBCDirectDemoData
                          name: Special7
                    properties:
                      source:
                        description: The source of the ObjectClassification.
                        type: string
                      effective:
                        description: Flag indicating this is an effective Classification.
                        type: boolean
                      classification:
                        description: Classification of this Object.
                        type: object
                        properties:
                          name:
                            description: The name of the Classification.
                            type: string
                          displayName:
                            description: The displayName of the Classification.
                            type: string
                          origin:
                            description: The origin of the Classification.
                            type: string
                          type:
                            description: The type of the Classification. This can be used to group Classifications in/across different origins.
                            type: string
                  meta:
                    description: Metadata of the SCIM resource.
                    properties:
                      created:
                        description: Datetime this Role was created.
                        type: string
                        format: date-time
                        example: '2022-02-11T01:34:04.074-05:00'
                      location:
                        description: The location of the SCIM resource.
                        type: string
                        example: http://localhost:8080/iiq/scim/v2/Roles/c0b4568a4fe7458c434ee77d1fbt156b
                      lastModified:
                        description: Datetime the Role was last modified.
                        type: string
                        format: date-time
                        example: '2022-02-11T01:08:45.866-05:00'
                      version:
                        description: The version of the SCIM resource.
                        type: string
                        example: W/\"1644561244074\"
                      resourceType:
                        description: The SCIM resource type.
                        type: string
                        example: Role
                  schemas:
                    description: The schemas involved in the SCIM resource.
                    type: array
                    items:
                      type: string
                    example:
                      - urn:ietf:params:scim:schemas:sailpoint:1.0:Role
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
