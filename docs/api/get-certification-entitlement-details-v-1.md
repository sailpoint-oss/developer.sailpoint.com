## OpenAPI

```yaml GET /certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}
openapi: 3.0.1
info:
  title: Identity Security Cloud API
  description: Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
  termsOfService: https://developer.sailpoint.com/discuss/tos
  contact:
    name: Developer Relations
    url: https://developer.sailpoint.com/discuss/api-help
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT
  version: v1
servers:
  - url: https://{tenant}.api.identitynow.com
    description: This is the production API server.
    variables:
      tenant:
        default: sailpoint
        description: This is the name of your tenant, typically your company's name.
  - url: https://{apiUrl}
    description: This is the versioned API server.
    variables:
      apiUrl:
        default: sailpoint.api.identitynow.com
        description: This is the api url of your tenant
paths:
  /certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/entitlements/{entitlementId}:
    get:
      description: This API get the details for the entitlement, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified entitlement, or an access profile that contains the specified entitlement. ORG_ADMIN or CERT_ADMIN can also call this API.
      operationId: getCertificationEntitlementDetailsV1
      security:
        - userAuth:
            - idn:campaign:read
            - idn:campaign:manage
      parameters:
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: 'true'
          schema:
            type: string
            default: 'true'
          required: true
        - in: path
          name: certificationId
          schema:
            type: string
            format: uuid
          required: true
          description: The certification ID
          example: ef38f943-47e9-4562-b5bb-8424a56397d8
          x-sailpoint-resource-operation-id: listCertificationsV1
        - in: path
          name: reviewItemId
          schema:
            type: string
            format: uuid
          required: true
          description: The certification item ID
          example: 2478b87b-f0d2-4585-b42d-45e4d580c5cf
          x-sailpoint-resource-operation-id: listReviewItemsV1
        - in: path
          name: entitlementId
          schema:
            type: string
          required: true
          description: The entitlement ID
          example: ef38f94347e94562b5bb8424a56397d8
          x-sailpoint-resource-operation-id: listEntitlementsV1
      responses:
        '200':
          description: An entitlement detail corresponding to the given entitlement ID
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                    description: The id for the entitlement
                    example: 2c918085718230600171993742c63558
                  name:
                    type: string
                    description: The name of the entitlement
                    example: CN=entitlement.bbb7c650
                  created:
                    type: string
                    description: Time when the entitlement was created
                    format: date-time
                    example: '2020-10-08T18:33:52.029Z'
                  modified:
                    type: string
                    description: Time when the entitlement was last modified
                    format: date-time
                    example: '2020-10-08T18:33:52.029Z'
                  attribute:
                    type: string
                    description: The entitlement attribute name
                    example: memberOf
                  value:
                    type: string
                    description: The value of the entitlement
                    example: CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local
                  sourceSchemaObjectType:
                    type: string
                    description: The schema object type on the source used to represent the entitlement and its attributes
                    example: groups
                  privileged:
                    type: boolean
                    example: false
                    default: false
                    deprecated: true
                    description: Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the entitlement is a privileged entitlement. Retained for backward compatibility.
                  cloudGoverned:
                    type: boolean
                    example: true
                    default: false
                    description: Indicates if the entitlement is cloud governed
                  description:
                    type: string
                    description: Information about the entitlement
                    example: Gives read/write access to the company database
                  requestable:
                    type: boolean
                    example: false
                    default: false
                    description: Indicates if the entitlement is requestable
                  attributes:
                    type: object
                    description: A map of free-form key-value pairs from the source system
                    example:
                      fieldName: fieldValue
                    additionalProperties: true
                  source:
                    type: object
                    properties:
                      id:
                        type: string
                        description: The source ID
                        example: 2c9180827ca885d7017ca8ce28a000eb
                      type:
                        type: string
                        description: The source type, will always be "SOURCE"
                        example: SOURCE
                      name:
                        type: string
                        description: The source name
                        example: ODS-AD-Source
                    title: SourceReferenceDTO
                  owner:
                    type: object
                    description: Simplified DTO for the owner
                    properties:
                      id:
                        type: string
                        description: The owner id
                        example: 2a2fdacca5e345f18bf7970cfbb8fec2
                      name:
                        type: string
                        description: The owner name
                        example: identity 1
                      type:
                        type: string
                        enum:
                          - IDENTITY
                        description: The type of the owner. Initially only type IDENTITY is supported
                        example: IDENTITY
                    title: OwnerReferenceDTO
                  directPermissions:
                    type: array
                    items:
                      type: object
                      description: Simplified DTO for the Permission objects stored in SailPoint's database. The data is aggregated from customer systems and is free-form, so its appearance can vary largely between different clients/customers.
                      properties:
                        rights:
                          type: array
                          description: All the rights (e.g. actions) that this permission allows on the target
                          readOnly: true
                          items:
                            type: string
                            example: SELECT
                        target:
                          type: string
                          description: The target the permission would grants rights on.
                          readOnly: true
                          example: SYS.GV_$TRANSACTION
                      title: PermissionDTO
                  segments:
                    type: array
                    items:
                      type: string
                    description: List of IDs of segments, if any, to which this Entitlement is assigned.
                    example:
                      - f7b1b8a3-5fed-4fd4-ad29-82014e137e19
                      - 29cb6c06-1da8-43ea-8be4-b3125f248f2a
                  manuallyUpdatedFields:
                    description: 'Object contains entitlement manually updated fields. Field value is true if is was updated manually via entitlement import csv or patch endpoint. Field value is false if that property value has not been changed after first entitlement aggregation. Values for all manually updatable fields must be specified. For now only two entitlement fields support this: DISPLAY_NAME and DESCRIPTION.'
                    example:
                      displayName: true
                      description: true
                    type: object
                    properties:
                      displayName:
                        type: boolean
                        default: false
                        description: |-
                          True if the entitlements name was updated manually via entitlement import csv or patch endpoint. False means that property value has not been change after first entitlement aggregation.
                          Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `name` property.
                        example: true
                      description:
                        type: boolean
                        default: false
                        description: |-
                          True if the entitlement description was updated manually via entitlement import csv or patch endpoint. False means that property value has not been change after first entitlement aggregation.
                          Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `description` property.
                        example: true
                    title: ManuallyUpdatedFieldsDTO
                  containsDataAccess:
                    type: boolean
                    description: True if the entitlement has DAS data
                    default: false
                    example: true
                  dataAccess:
                    nullable: true
                    description: DAS data for the entitlement
                    type: object
                    properties:
                      policies:
                        type: array
                        description: List of classification policies that apply to resources the entitlement or group has access to.
                        items:
                          type: object
                          properties:
                            value:
                              type: string
                              description: Value of the policy
                              example: GDPR-20
                      categories:
                        type: array
                        description: List of classification categories that apply to resources the entitlement or group has access to.
                        items:
                          type: object
                          properties:
                            value:
                              type: string
                              description: Value of the category
                              example: SSN
                            matchCount:
                              type: integer
                              description: Number of matches for the category.
                              example: 10
                      impactScore:
                        type: object
                        properties:
                          value:
                            type: string
                            description: Impact Score for this data
                            example: Medium
                      modified:
                        type: string
                        format: date-time
                        description: Modification date of Data Access
                        example: '2023-10-11T18:33:52.029Z'
                    title: DataAccess-2
                title: PassThroughEntitlement
        '400':
          description: Client Error - Returned if the request body is invalid.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
        '401':
          description: Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    description: A message describing the error
                    example: 'JWT validation failed: JWT is expired'
        '403':
          description: Forbidden - Returned if the user you are running as, doesn't have access to this end-point.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '403':
                  summary: An example of a 403 response object
                  value:
                    detailCode: 403 Forbidden
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: The server understood the request but refuses to authorize it.
        '404':
          description: Not Found - returned if the request URL refers to a resource or object that does not exist
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '404':
                  summary: An example of a 404 response object
                  value:
                    detailCode: 404 Not found
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: The server did not find a current representation for the target resource.
        '429':
          description: Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    description: A message describing the error
                    example: ' Rate Limit Exceeded '
        '500':
          description: Internal Server Error - Returned if there is an unexpected error.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '500':
                  summary: An example of a 500 response object
                  value:
                    detailCode: 500.0 Internal Fault
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: An internal fault occurred.
components:
  securitySchemes:
    userAuth:
      type: oauth2
      x-displayName: Personal Access Token
      description: |
        OAuth2 Bearer token (JWT) generated using either a [personal access token (PAT)](https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token) or through the [authorization code flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-authorization-code-grant-flow).

        Personal access tokens are associated with a user in Identity Security Cloud and relies on the user's [user level](https://documentation.sailpoint.com/saas/help/common/users/index.html) (ex. Admin, Helpdesk, etc.) to determine a base level of access.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
        authorizationCode:
          authorizationUrl: https://example-tenant.login.sailpoint.com/oauth/authorize
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
    applicationAuth:
      type: oauth2
      x-displayName: Client Credentials
      description: |
        OAuth2 Bearer token (JWT) generated using [client credentials flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-client-credentials-grant-flow).

        Client credentials refers to tokens that are not associated with a user in Identity Security Cloud.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
```
