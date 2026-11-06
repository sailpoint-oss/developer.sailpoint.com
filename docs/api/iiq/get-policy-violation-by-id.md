## OpenAPI

```yaml GET /PolicyViolations/{policyViolationId}
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
  /PolicyViolations/{policyViolationId}:
    get:
      description: The PolicyViolation resource with matching id is returned.
      operationId: getPolicyViolationById
      security:
        - basicAuth: []
      parameters:
        - name: policyViolationId
          in: path
          schema:
            type: string
          description: The id of the PolicyViolation.
          required: true
        - in: query
          name: attributes
          schema:
            type: string
            example: policyName,constraintName
          description: A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.
        - in: query
          name: excludedAttributes
          schema:
            type: string
            example: policyName,constraintName
          description: A comma-separated list of attributes to exclude from the response. *Some attributes cannot be excluded.*
      responses:
        '200':
          description: Returns a PolicyViolation resource based on the id.
          content:
            application/json:
              schema:
                properties:
                  id:
                    description: IdentityIQ id of the PolicyViolation.
                    type: string
                    example: c0b4568a4fe7458c434ee77d1fbt156b
                  policyName:
                    description: Name of the Policy this PolicyViolation is associated with.
                    type: string
                    example: Entitlement Policy with Details
                  constraintName:
                    description: Name of the Constraint this PolicyViolation is associated with.
                    type: string
                    example: Entitlement Policy with Details
                  identity:
                    description: The Identity (User) that caused the PolicyViolation.
                    type: object
                    properties:
                      displayName:
                        description: Display name of the Identity that caused the PolicyViolation.
                        type: string
                        example: Bob Smith
                      value:
                        description: The id of the Identity which caused the PolicyViolation.
                        type: string
                        example: c0a7778b7ef71e79817ee74e6a1f0444
                      $ref:
                        description: URI reference to the Identity (User).
                        type: string
                        example: http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444
                  owner:
                    description: The User that owns the Policy.
                    type: object
                    properties:
                      displayName:
                        description: Display name of the Policy owner.
                        type: string
                        example: Bob Smith
                      value:
                        description: The id of the Policy owner.
                        type: string
                        example: c0a7778b7ef71e79817ee74e6a1f0444
                      $ref:
                        description: URI reference to the Policy owner.
                        type: string
                        example: http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444
                  description:
                    description: Description of the PolicyViolation.
                    type: string
                    example: Production and development systems should not be available to one person.
                  status:
                    description: Status of the PolicyViolation. This can be Open, Mitigated, Remediated, or Delegated.
                    type: string
                    example: Open
                  meta:
                    description: Metadata of the resource.
                    properties:
                      created:
                        description: Datetime this Resource was created.
                        type: string
                        format: date-time
                        example: '2022-02-11T01:34:04.074-05:00'
                      location:
                        description: The location of the resource.
                        type: string
                        example: http://localhost:8080/iiq/scim/v2/Users/c0b4568a4fe7458c434ee77d1fbt156b
                      lastModified:
                        description: Datetime the resource was last modified.
                        type: string
                        format: date-time
                        example: '2022-02-11T01:08:45.866-05:00'
                      version:
                        description: The version of the resource.
                        type: string
                        example: W/"1644561244074"
                      resourceType:
                        description: The SCIM resource type.
                        type: string
                        example: PolicyViolation
                  schemas:
                    description: The schemas involved in the SCIM resource.
                    type: array
                    items:
                      type: string
                    example:
                      - urn:ietf:params:scim:schemas:sailpoint:1.0:PolicyViolation
            application/scim+json:
              schema:
                properties:
                  id:
                    description: IdentityIQ id of the PolicyViolation.
                    type: string
                    example: c0b4568a4fe7458c434ee77d1fbt156b
                  policyName:
                    description: Name of the Policy this PolicyViolation is associated with.
                    type: string
                    example: Entitlement Policy with Details
                  constraintName:
                    description: Name of the Constraint this PolicyViolation is associated with.
                    type: string
                    example: Entitlement Policy with Details
                  identity:
                    description: The Identity (User) that caused the PolicyViolation.
                    type: object
                    properties:
                      displayName:
                        description: Display name of the Identity that caused the PolicyViolation.
                        type: string
                        example: Bob Smith
                      value:
                        description: The id of the Identity which caused the PolicyViolation.
                        type: string
                        example: c0a7778b7ef71e79817ee74e6a1f0444
                      $ref:
                        description: URI reference to the Identity (User).
                        type: string
                        example: http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444
                  owner:
                    description: The User that owns the Policy.
                    type: object
                    properties:
                      displayName:
                        description: Display name of the Policy owner.
                        type: string
                        example: Bob Smith
                      value:
                        description: The id of the Policy owner.
                        type: string
                        example: c0a7778b7ef71e79817ee74e6a1f0444
                      $ref:
                        description: URI reference to the Policy owner.
                        type: string
                        example: http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444
                  description:
                    description: Description of the PolicyViolation.
                    type: string
                    example: Production and development systems should not be available to one person.
                  status:
                    description: Status of the PolicyViolation. This can be Open, Mitigated, Remediated, or Delegated.
                    type: string
                    example: Open
                  meta:
                    description: Metadata of the resource.
                    properties:
                      created:
                        description: Datetime this Resource was created.
                        type: string
                        format: date-time
                        example: '2022-02-11T01:34:04.074-05:00'
                      location:
                        description: The location of the resource.
                        type: string
                        example: http://localhost:8080/iiq/scim/v2/Users/c0b4568a4fe7458c434ee77d1fbt156b
                      lastModified:
                        description: Datetime the resource was last modified.
                        type: string
                        format: date-time
                        example: '2022-02-11T01:08:45.866-05:00'
                      version:
                        description: The version of the resource.
                        type: string
                        example: W/"1644561244074"
                      resourceType:
                        description: The SCIM resource type.
                        type: string
                        example: PolicyViolation
                  schemas:
                    description: The schemas involved in the SCIM resource.
                    type: array
                    items:
                      type: string
                    example:
                      - urn:ietf:params:scim:schemas:sailpoint:1.0:PolicyViolation
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
