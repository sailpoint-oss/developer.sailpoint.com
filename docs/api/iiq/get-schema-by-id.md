## OpenAPI

```yaml GET /Schemas/{schemaId}
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
  /Schemas/{schemaId}:
    get:
      description: The Schema with the matching id is returned. The id is the URN of the SCIM resource. The 'attributes' field holds the schema-specific attributes which differ depending on Schema type.
      operationId: getSchemaById
      security:
        - basicAuth: []
      parameters:
        - name: schemaId
          in: path
          schema:
            type: string
          description: The id of the Schema.
          required: true
      responses:
        '200':
          description: Returns a single Schema based on the id.
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    description: The id of the Schema. The id is the SCIM URN of the Schema.
                    type: string
                    example: urn:ietf:params:scim:schemas:sailpoint:1.0:User
                  name:
                    description: Name of the Schema.
                    type: string
                    example: User
                  description:
                    description: Description of the Schema.
                    type: string
                    example: Schema for a SCIM User.
                  attributes:
                    description: Attributes used to describe this Schema.
                    type: array
                    items:
                      properties:
                        uniqueness:
                          description: Determines whether there can be other Schema resources with the same value for this attribute. 'none' means there is no concern for uniqueness, 'server' means the uniqueness of this attribute should be guaranteed for this type of resource, and 'global' means the uniqueness should be guaranteed across all resources.
                          type: string
                          example: none
                        name:
                          description: Name of the attribute.
                          type: string
                          example: displayName
                        description:
                          description: Description of the attribute.
                          type: string
                          example: Display name of the User.
                        mutability:
                          description: Indicates the ability to change this attribute. Possible values are 'readOnly', 'readWrite', and 'writeOnly'.
                          type: string
                          example: readOnly
                        type:
                          description: Defined as 'simple' or 'complex', where simple indicates attribute values stored as strings, integers, etc., and complex indicates object-based values.
                          type: string
                          example: string
                        multiValued:
                          description: Describes whether this attribute is allowed multiple values.
                          type: boolean
                          example: false
                        caseExact:
                          description: True if attribute value is case-sensitive; false otherwise.
                          type: boolean
                          example: false
                        returned:
                          description: Dictates whether the attribute should be returned in a SCIM response body. Can be 'always', 'default', 'request', or 'never'.
                          type: string
                          example: default
                        required:
                          description: True if this attribute is required for this Schema; false otherwise.
                          type: boolean
                          example: false
                        canonicalValues:
                          description: List of canonical values that could be used to supplement attribute.
                          type: array
                          items:
                            type: string
                          example:
                            - httpbasic
                            - httpdigest
                            - oauth
                        subAttributes:
                          description: Only required if 'complex' is specified for 'type'. If this attribute is of 'complex' type, an array of objects can be stored in 'subAttributes' with attributes relevant to the respective Schema.
                          type: array
                          items:
                            additionalProperties:
                              anyOf:
                                - type: object
                  meta:
                    description: Metadata of the Schema.
                    type: object
                    properties:
                      location:
                        description: The location of the Schema.
                        type: string
                        example: http://localhost:8080/iiq/scim/v2/Schemas/7f0123417e941b00007f9db3702906cb
                      version:
                        description: The version of the Schema.
                        type: string
                        example: W"1647617443639"
                      resourceType:
                        description: The SCIM resource type.
                        type: string
                        example: Schema
                  schemas:
                    description: The schema for the Schema resource.
                    type: array
                    items:
                      type: string
                    example:
                      - urn:ietf:params:scim:schemas:core:2.0:Schema
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
