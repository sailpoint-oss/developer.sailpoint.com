## OpenAPI

```yaml GET /ObjectConfigs
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
  /ObjectConfigs:
    get:
      description: |
        This endpoint returns all ObjectConfig resources. <br/>

        Attributes to include in the response can be specified with the attributes query parameter. <br/> 

        Attributes to exclude from the response can be specified with the excludedAttributes query parameter. <br/>

        The schema related to ObjectConfig is: 
        - **urn:ietf:params:scim:schemas:sailpoint:1.0:ObjectConfig**.
      operationId: getObjectConfigs
      security:
        - basicAuth: []
      parameters:
        - in: query
          name: filter
          schema:
            type: string
            example: name eq "identity"
          description: Allows for query filters according to RFC-7644, Section 3.4.2.2 - not all operations are supported.
        - in: query
          name: lookupByName
          schema:
            type: boolean
            default: false
            example: true
          description: (OPTIONAL) Set to true if the ObjectConfig name is passed instead of the ObjectConfig id.
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
            example: 10
            default: 1
          description: Determines the starting index of the result set.
        - in: query
          name: count
          schema:
            type: integer
            example: 10
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
            example: name, objectAttributes
          description: A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**
      responses:
        '200':
          description: Returned all SCIM resources for this endpoint.
          content:
            application/json:
              schema:
                properties:
                  totalResults:
                    description: Number of resources returned for this endpoint
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
                      properties:
                        id:
                          description: Unique identifier of the ObjectConfig.
                          type: string
                          example: c0a8019c7fe11678817fe18984351477
                        name:
                          description: Name of the ObjectConfig.
                          type: string
                          example: Link
                        objectAttributes:
                          description: A list of attributes of the ObjectConfig.
                          type: array
                          items:
                            properties:
                              name:
                                description: The object attribute name.
                                type: string
                                example: inactive
                              displayName:
                                description: The display name of the object attribute.
                                type: string
                                example: attr_demoInactive
                              type:
                                description: The type of the object attribute.
                                type: string
                                example: boolean
                              multi:
                                description: A Boolean value indicating this is a multi-valued attribute.
                                type: boolean
                                example: false
                              defaultValue:
                                description: The default value of the object attribute.
                                type: string
                                example: 'false'
                              system:
                                description: A Boolean value indicating this is a system attribute that does not have a source and is not configurable.
                                type: boolean
                                example: true
                              standard:
                                description: A Boolean value indicating this is a standard attribute (i.e. manager, email, firstname, lastname).
                                type: boolean
                                example: false
                              extendedNumber:
                                description: Integer value of the extended attribute column number in the database schema.
                                type: integer
                                example: 1
                              namedColumn:
                                description: A Boolean value indicating this attribute has a named column in the database schema.
                                type: boolean
                                example: false
                              ruleName:
                                description: Rule used to derive the value. Usually specified when there are no attributeSources defined.
                                type: string
                                example: lastLoginToDateRule
                              groupFactory:
                                description: A Boolean value indicating this attribute can be used in a group factory. Identity attributes only.
                                type: boolean
                                example: true
                              editMode:
                                description: Enumeration indicating whether this attribute allows modification.
                                type: string
                                enum:
                                  - READONLY
                                  - PERMANENT
                                  - UNTILFEEDVALUECHANGES
                                example: READONLY
                              attributeSources:
                                description: Sources of values for this atribute. Identity attributes only.
                                type: array
                                items:
                                  properties:
                                    name:
                                      description: The name of the attribute on the application.
                                      type: string
                                      example: app1_inactive
                                    key:
                                      description: Derived identifier for this source.
                                      type: string
                                      example: Active_Directory:app1_inactive
                                    instance:
                                      description: Optional instance name for template applications.
                                      type: string
                                      example: test-environment
                                    ruleName:
                                      description: Rule used to derive the value.
                                      type: string
                                      example: attributeSource-aws-S3-rule
                              attributeTargets:
                                description: Targets of this attribute that should receive the value upon attribute synchronization. Identity attributes only.
                                type: array
                                items:
                                  properties:
                                    name:
                                      description: The name of the attribute on the application.
                                      type: string
                                      example: app2_active
                                    key:
                                      description: Derived identifier for this target.
                                      type: string
                                      example: Composite_ERP_Global_Platform:app2_inactive
                                    instance:
                                      description: Optional instance name for template applications.
                                      type: string
                                      example: continuous-integration-environment1
                                    ruleName:
                                      description: Rule used to derive the value.
                                      type: string
                                      example: attributeTarget-aws-S3-rule
                                    provisionAllAccount:
                                      description: Return whether to provision all accounts if an identity has multiple accounts on the target application. Identity attributes only.
                                      type: boolean
                                      example: false
                        meta:
                          description: Metadata for the ObjectConfig
                          type: array
                          items:
                            properties:
                              created:
                                description: Datetime when the ObjectConfig was created
                                type: string
                                example: '2022-03-31T14:52:40.245-05:00'
                              location:
                                description: URL to the ObjectConfig
                                type: string
                                example: http://localhost:8080/identityiq/scim/v2/ObjectConfig/7f00000180281df7818028be62ef00e9
                              lastModified:
                                description: Datetime of ObjectConfig last modification
                                type: string
                                example: '2022-03-31T14:52:40.265-05:00'
                              version:
                                description: ObjectConfig version
                                type: string
                                example: '"W"1649951092552"'
                              resourceType:
                                description: Resource type of the metadata subject
                                type: string
                                example: ObjectConfig
            application/scim+json:
              schema:
                properties:
                  totalResults:
                    description: Number of ObjectConfig resources returned.
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
                      properties:
                        id:
                          description: Unique identifier of the ObjectConfig.
                          type: string
                          example: c0a8019c7fe11678817fe18984351477
                        name:
                          description: Name of the ObjectConfig.
                          type: string
                          example: Link
                        objectAttributes:
                          description: A list of attributes of the ObjectConfig.
                          type: array
                          items:
                            properties:
                              name:
                                description: The object attribute name.
                                type: string
                                example: inactive
                              displayName:
                                description: The display name of the object attribute.
                                type: string
                                example: attr_demoInactive
                              type:
                                description: The type of the object attribute.
                                type: string
                                example: boolean
                              multi:
                                description: A Boolean value indicating this is a multi-valued attribute.
                                type: boolean
                                example: false
                              defaultValue:
                                description: The default value of the object attribute.
                                type: string
                                example: 'false'
                              system:
                                description: A Boolean value indicating this is a system attribute that does not have a source and is not configurable.
                                type: boolean
                                example: true
                              standard:
                                description: A Boolean value indicating this is a standard attribute (i.e. manager, email, firstname, lastname).
                                type: boolean
                                example: false
                              extendedNumber:
                                description: Integer value of the extended attribute column number in the database schema.
                                type: integer
                                example: 1
                              namedColumn:
                                description: A Boolean value indicating this attribute has a named column in the database schema.
                                type: boolean
                                example: false
                              ruleName:
                                description: Rule used to derive the value. Usually specified when there are no attributeSources defined.
                                type: string
                                example: lastLoginToDateRule
                              groupFactory:
                                description: A Boolean value indicating this attribute can be used in a group factory. Identity attributes only.
                                type: boolean
                                example: true
                              editMode:
                                description: Enumeration indicating whether this attribute allows modification.
                                type: string
                                enum:
                                  - READONLY
                                  - PERMANENT
                                  - UNTILFEEDVALUECHANGES
                                example: READONLY
                              attributeSources:
                                description: Sources of values for this atribute. Identity attributes only.
                                type: array
                                items:
                                  properties:
                                    name:
                                      description: The name of the attribute on the application.
                                      type: string
                                      example: app1_inactive
                                    key:
                                      description: Derived identifier for this source.
                                      type: string
                                      example: Active_Directory:app1_inactive
                                    instance:
                                      description: Optional instance name for template applications.
                                      type: string
                                      example: test-environment
                                    ruleName:
                                      description: Rule used to derive the value.
                                      type: string
                                      example: attributeSource-aws-S3-rule
                              attributeTargets:
                                description: Targets of this attribute that should receive the value upon attribute synchronization. Identity attributes only.
                                type: array
                                items:
                                  properties:
                                    name:
                                      description: The name of the attribute on the application.
                                      type: string
                                      example: app2_active
                                    key:
                                      description: Derived identifier for this target.
                                      type: string
                                      example: Composite_ERP_Global_Platform:app2_inactive
                                    instance:
                                      description: Optional instance name for template applications.
                                      type: string
                                      example: continuous-integration-environment1
                                    ruleName:
                                      description: Rule used to derive the value.
                                      type: string
                                      example: attributeTarget-aws-S3-rule
                                    provisionAllAccount:
                                      description: Return whether to provision all accounts if an identity has multiple accounts on the target application. Identity attributes only.
                                      type: boolean
                                      example: false
                        meta:
                          description: Metadata for the ObjectConfig
                          type: array
                          items:
                            properties:
                              created:
                                description: Datetime when the ObjectConfig was created
                                type: string
                                example: '2022-03-31T14:52:40.245-05:00'
                              location:
                                description: URL to the ObjectConfig
                                type: string
                                example: http://localhost:8080/identityiq/scim/v2/ObjectConfig/7f00000180281df7818028be62ef00e9
                              lastModified:
                                description: Datetime of ObjectConfig last modification
                                type: string
                                example: '2022-03-31T14:52:40.265-05:00'
                              version:
                                description: ObjectConfig version
                                type: string
                                example: '"W"1649951092552"'
                              resourceType:
                                description: Resource type of the metadata subject
                                type: string
                                example: ObjectConfig
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
