## OpenAPI

```yaml GET /ObjectConfig/{objectConfigId}
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
  /ObjectConfig/{objectConfigId}:
    get:
      description: |
        The ObjectConfig resource with matching name or id is returned. <br/>

        Attributes to include in the response can be specified with the 'attributes' query parameter. <br/>

        Attributes to exclude from the response can be specified with the 'excludedAttributes' query parameter.

        The schema related to ObjectConfig is:
        - **urn:ietf:params:scim:schemas:sailpoint:1.0:ObjectConfig**
      operationId: getObjectConfigById
      security:
        - basicAuth: []
      parameters:
        - name: objectConfigId
          in: path
          schema:
            type: string
            example: 7f00000180281df7818028be62e500e8
          description: id of ObjectConfig resource.
          required: true
        - in: query
          name: attributes
          schema:
            type: string
            example: objectAttributes
          description: A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.
        - in: query
          name: excludedAttributes
          schema:
            type: string
            example: name
          description: A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**
      responses:
        '200':
          description: Returns a single ObjectConfig resource based on its name or id.
          content:
            application/json:
              schema:
                properties:
                  id:
                    description: Unique identifier of the ObjectConfig.
                    type: string
                    example: 7f00000180281df7818028be63aa00ef
                  name:
                    description: Name of the ObjectConfig.
                    type: string
                    example: Bundle
                  objectAttributes:
                    description: A list of attributes of the ObjectConfig.
                    type: array
                    items:
                      properties:
                        name:
                          description: The object attribute name.
                          type: string
                          example: StringAttr
                        displayName:
                          description: The display name of the object attribute.
                          type: string
                          example: attr_demoString
                        type:
                          description: The type of the object attribute.
                          type: string
                          example: string
                        multi:
                          description: A Boolean value indicating this is a multi-valued attribute.
                          type: boolean
                          example: false
                        defaultValue:
                          description: The default value of the object attribute.
                          type: string
                          example: None
                        system:
                          description: A Boolean value indicating this is a system attribute that does not have a source and is not configurable.
                          type: boolean
                          example: false
                        standard:
                          description: A Boolean value indicating this is a standard attribute (i.e. manager, email, firstname, lastname).
                          type: boolean
                          example: false
                        extendedNumber:
                          description: Integer value of the extended attribute column number in the database schema.
                          type: integer
                          example: 2
                        namedColumn:
                          description: A Boolean value indicating this attribute has a named column in the database schema.
                          type: boolean
                          example: false
                        ruleName:
                          description: Rule used to derive the value. Usually specified when there are no attributeSources defined.
                          type: string
                          example: lastLoginToDate
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
                                example: lastName
                              key:
                                description: Derived identifier for this source.
                                type: string
                                example: testInstancesApplication/inst2:lastName
                              instance:
                                description: Optional instance name for template applications.
                                type: string
                                example: inst2
                              ruleName:
                                description: Rule used to derive the value.
                                type: string
                                example: Identity Attribute Rule - Type
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
