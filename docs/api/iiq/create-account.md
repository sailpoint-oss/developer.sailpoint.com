## OpenAPI

```yaml POST /Accounts
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
  /Accounts:
    post:
      description: The endpoint used to create an Account resource. The required payload fields can differ drastically depending on the Application.
      operationId: createAccount
      security:
        - basicAuth: []
      parameters:
        - in: query
          name: attributes
          schema:
            type: string
            example: displayName,active
          description: A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.
        - in: query
          name: excludedAttributes
          schema:
            type: string
            example: displayName,active
          description: A comma-separated list of attributes to exclude from the response. *Some attributes cannot be excluded.*
      requestBody:
        required: true
        content:
          application/scim+json:
            schema:
              properties:
                identity:
                  required:
                    - value
                  description: The corresponding User object of the Account.
                  properties:
                    userName:
                      description: The identity name of the Account User.
                      type: string
                      example: Barbara.Jensen
                    displayName:
                      description: The displayable name of the Account User.
                      type: string
                      example: Barbara Jensen
                    value:
                      description: IdentityIQ identifier for the Account User.
                      type: string
                      example: c0a7778b7ef71e79817ee74e6a1f0444
                    ref:
                      description: The URI of the SCIM resource representing the Account User.
                      type: string
                      example: http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444
                application:
                  required:
                    - value
                  description: The corresponding Application object of the Account.
                  properties:
                    displayName:
                      description: The displayable name of the Account Application.
                      type: string
                      example: Mock Application1
                    value:
                      description: IdentityIQ identifier for the Account Application.
                      type: string
                      example: c0a7778b7ef71e79817ee74e6a1f0444
                    ref:
                      description: The URI of the SCIM resource representing the Account Application.
                      type: string
                      example: http://localhost:8080/iiq/scim/v2/Applications/c0a7778b7ef71e79817ee74e6a1f0444
                nativeIdentity:
                  description: The Account unique identifier associated with the native application. This field is immutable.
                  type: string
                  example: a1b2c3
                displayName:
                  description: The name of the Account, suitable for display to end-users.
                  type: string
                  example: Barbara Jensen
                instance:
                  description: The instance identifier of the Account. This field is immutable.
                  type: string
                  example: mockInstance
                password:
                  description: The password of the Account, used in created or changing the Account password. This attribute is write-only and will never be returned in a response.
                  type: string
                  example: useStrongPwd123!
                currentPassword:
                  description: The current password of the Account, used in created or changing the Account password. This attribute is write-only and will never be returned in a response.
                  type: string
                  example: useStrongPwd123!
                urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:APPLICATION NAME:account:
                  description: 'Provide the name of Application that corresponds to this Account in APPLICATION NAME. This field contains an object structure dependent on the Application that the Account applies to.<br/><br/>Example:  urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:**My Application1**:account: { "department": "IT"}'
                  type: object
                  additionalProperties: true
                active:
                  description: Flag to indicate this account is enabled or disabled.
                  type: boolean
                  example: true
                locked:
                  description: Flag to indicate this account is locked. An account may be unlocked by setting this attribute to false, but can not be locked by setting a false value to true.
                  type: boolean
                  example: true
              required:
                - identity
                - application
                - nativeIdentity
                - urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:APPLICATION NAME:account
          '*/*':
            schema:
              properties:
                identity:
                  required:
                    - value
                  description: The corresponding User object of the Account.
                  properties:
                    userName:
                      description: The identity name of the Account User.
                      type: string
                      example: Barbara.Jensen
                    displayName:
                      description: The displayable name of the Account User.
                      type: string
                      example: Barbara Jensen
                    value:
                      description: IdentityIQ identifier for the Account User.
                      type: string
                      example: c0a7778b7ef71e79817ee74e6a1f0444
                    ref:
                      description: The URI of the SCIM resource representing the Account User.
                      type: string
                      example: http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444
                application:
                  required:
                    - value
                  description: The corresponding Application object of the Account.
                  properties:
                    displayName:
                      description: The displayable name of the Account Application.
                      type: string
                      example: Mock Application1
                    value:
                      description: IdentityIQ identifier for the Account Application.
                      type: string
                      example: c0a7778b7ef71e79817ee74e6a1f0444
                    ref:
                      description: The URI of the SCIM resource representing the Account Application.
                      type: string
                      example: http://localhost:8080/iiq/scim/v2/Applications/c0a7778b7ef71e79817ee74e6a1f0444
                nativeIdentity:
                  description: The Account unique identifier associated with the native application. This field is immutable.
                  type: string
                  example: a1b2c3
                displayName:
                  description: The name of the Account, suitable for display to end-users.
                  type: string
                  example: Barbara Jensen
                instance:
                  description: The instance identifier of the Account. This field is immutable.
                  type: string
                  example: mockInstance
                password:
                  description: The password of the Account, used in created or changing the Account password. This attribute is write-only and will never be returned in a response.
                  type: string
                  example: useStrongPwd123!
                currentPassword:
                  description: The current password of the Account, used in created or changing the Account password. This attribute is write-only and will never be returned in a response.
                  type: string
                  example: useStrongPwd123!
                urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:APPLICATION NAME:account:
                  description: 'Provide the name of Application that corresponds to this Account in APPLICATION NAME. This field contains an object structure dependent on the Application that the Account applies to.<br/><br/>Example:  urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:**My Application1**:account: { "department": "IT"}'
                  type: object
                  additionalProperties: true
                active:
                  description: Flag to indicate this account is enabled or disabled.
                  type: boolean
                  example: true
                locked:
                  description: Flag to indicate this account is locked. An account may be unlocked by setting this attribute to false, but can not be locked by setting a false value to true.
                  type: boolean
                  example: true
              required:
                - identity
                - application
                - nativeIdentity
                - urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:APPLICATION NAME:account
      responses:
        '201':
          description: Creates an Account and returns the resultant Account.
          content:
            application/json:
              schema:
                properties:
                  id:
                    description: IdentityIQ id of the Account.
                    type: string
                    example: c0b4568a4fe7458c434ee77d1fbt156b
                  identity:
                    description: The corresponding User object of the Account.
                    properties:
                      userName:
                        description: The identity name of the Account User.
                        type: string
                        example: Barbara.Jensen
                      displayName:
                        description: The displayable name of the Account User.
                        type: string
                        example: Barbara Jensen
                      value:
                        description: IdentityIQ identifier for the Account User.
                        type: string
                        example: c0a7778b7ef71e79817ee74e6a1f0444
                      ref:
                        description: The URI of the SCIM resource representing the Account User.
                        type: string
                        example: http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444
                  application:
                    description: The corresponding Application object of the Account.
                    properties:
                      displayName:
                        description: The displayable name of the Account Application.
                        type: string
                        example: Mock Application1
                      value:
                        description: IdentityIQ identifier for the Account Application.
                        type: string
                        example: c0a7778b7ef71e79817ee74e6a1f0444
                      ref:
                        description: The URI of the SCIM resource representing the Account Application.
                        type: string
                        example: http://localhost:8080/iiq/scim/v2/Applications/c0a7778b7ef71e79817ee74e6a1f0444
                  nativeIdentity:
                    description: The Account unique identifier associated with the native application. This field is immutable.
                    type: string
                    example: a1b2c3
                  displayName:
                    description: The name of the Account, suitable for display to end-users.
                    type: string
                    example: Barbara Jensen
                  instance:
                    description: The instance identifier of the Account. This field is immutable.
                    type: string
                    example: null
                  uuid:
                    description: The UUID of the Account.
                    type: string
                    example: '{f99999ff-f000-444b-b6ae-4443dd6cd6ed}'
                  urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:APPLICATION NAME:account:
                    description: 'Provide the name of Application that corresponds to this Account in APPLICATION NAME. This field contains an object structure dependent on the Application that the Account applies to.<br/><br/>Example:  urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:**My Application1**:account: { "department": "IT"}'
                    type: object
                    additionalProperties: true
                  active:
                    description: Flag to indicate this account is enabled or disabled.
                    type: boolean
                    example: true
                  locked:
                    description: Flag to indicate this account is locked. An account may be unlocked by setting this attribute to false, but can not be locked by setting a false value to true.
                    type: boolean
                    example: true
                  manuallyCorrelated:
                    description: Flag to indicate this account has been manually correlated in the UI.
                    type: boolean
                    example: true
                  hasEntitlements:
                    description: Flag to indicate this account has one or more entitlement attributes.
                    type: boolean
                    example: true
                  lastRefresh:
                    description: Datetime representation of the last refresh for this Account.
                    type: string
                    format: date-time
                  lastTargetAggregation:
                    description: Datetime representation of last targeted aggregation for the Account.
                    type: string
                    format: date-time
                  meta:
                    description: Metadata of the SCIM resource.
                    properties:
                      created:
                        description: Datetime this resource was created.
                        type: string
                        format: date-time
                        example: '2022-02-11T01:34:04.074-05:00'
                      location:
                        description: The location of the resource.
                        type: string
                        example: http://localhost:8080/iiq/scim/v2/Accounts/c0b4568a4fe7458c434ee77d1fbt156b
                      lastModified:
                        description: Datetime the resource was last modified.
                        type: string
                        format: date-time
                        example: '2022-02-11T01:08:45.866-05:00'
                      version:
                        description: The version of the SCIM resource.
                        type: string
                        example: W"1644561244074"
                      resourceType:
                        description: The resource type.
                        type: string
                        example: Account
                  schemas:
                    description: The schemas involved in the SCIM resource.
                    type: array
                    items:
                      type: string
                    example:
                      - urn:ietf:params:scim:schemas:sailpoint:1.0:Account
                      - urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:Mock Application:account
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
