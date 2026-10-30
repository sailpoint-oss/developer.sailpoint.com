## OpenAPI

```yaml GET /certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/access-profiles/{accessProfileId}
openapi: 3.0.1
info:
  title: SailPoint Identity Security API
  description: Use these APIs to interact with the SailPoint Identity Security platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
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
  /certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/access-profiles/{accessProfileId}:
    get:
      description: This API returns an access profile details based on access profile id provided, as long as the logged-in user is a reviewer of the specified certification, and the certification contains either the specified access profile, or a role that contains the specified access profile. ORG_ADMIN or CERT_ADMIN can also call this API.
      operationId: getGovCertificationAccessProfileV1
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
          description: The certification item ID. This must of review item type either ROLE or ACCESS_PROFILE.
          example: 2478b87b-f0d2-4585-b42d-45e4d580c5cf
          x-sailpoint-resource-operation-id: listReviewItemsV1
        - in: path
          name: accessProfileId
          required: true
          schema:
            type: string
          description: The Access Profile ID
          example: 2c9180837ca6693d017ca8d097500149
          x-sailpoint-resource-operation-id: listAccessProfilesV1
      responses:
        '200':
          description: An AccessProfile
          content:
            application/json:
              schema:
                type: object
                description: Access Profile
                properties:
                  id:
                    type: string
                    description: ID of the Access Profile
                    example: 2c91808a7190d06e01719938fcd20792
                  name:
                    type: string
                    description: Name of the Access Profile
                    example: Employee-database-read-write
                  description:
                    type: string
                    description: Information about the Access Profile
                    example: Collection of entitlements to read/write the employee database
                  created:
                    type: string
                    description: Date the Access Profile was created
                    format: date-time
                    example: '2021-03-01T22:32:58.104Z'
                  modified:
                    type: string
                    description: Date the Access Profile was last modified.
                    format: date-time
                    example: '2021-03-02T20:22:28.104Z'
                  enabled:
                    type: boolean
                    default: true
                    description: Whether the Access Profile is enabled. If the Access Profile is enabled then you must include at least one Entitlement.
                    example: true
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
                  entitlements:
                    type: array
                    description: A list of entitlements associated with the Access Profile. If enabled is false this is allowed to be empty otherwise it needs to contain at least one Entitlement.
                    items:
                      type: object
                      description: Entitlement including a specific set of access.
                      properties:
                        type:
                          type: string
                          description: Entitlement's DTO type.
                          enum:
                            - ENTITLEMENT
                          example: ENTITLEMENT
                        id:
                          type: string
                          description: Entitlement's ID.
                          example: 2c91809773dee32014e13e122092014e
                        name:
                          type: string
                          description: Entitlement's display name.
                          example: CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local
                      title: EntitlementRef
                  requestable:
                    type: boolean
                    default: true
                    description: Whether the Access Profile is requestable via access request. Currently, making an Access Profile non-requestable is only supported for customers enabled with the new Request Center. Otherwise, attempting to create an Access Profile with a value **false** in this field results in a 400 error.
                    example: true
                  accessRequestConfig:
                    description: Access request configuration for this object
                    type: object
                    properties:
                      commentsRequired:
                        type: boolean
                        description: Whether the requester of the containing object must provide comments justifying the request
                        example: true
                        default: false
                      denialCommentsRequired:
                        type: boolean
                        description: Whether an approver must provide comments when denying the request
                        example: true
                        default: false
                      approvalSchemes:
                        type: array
                        description: List describing the steps in approving the request
                        items:
                          type: object
                          properties:
                            approverType:
                              type: string
                              enum:
                                - APP_OWNER
                                - OWNER
                                - SOURCE_OWNER
                                - MANAGER
                                - GOVERNANCE_GROUP
                                - WORKFLOW
                                - ADDITIONAL_OWNER
                                - ADDITIONAL_GOVERNANCE_GROUP
                              description: |-
                                Describes the individual or group that is responsible for an approval step. Values are as follows.
                                **APP_OWNER**: The owner of the Application

                                **OWNER**: Owner of the associated Access Profile or Role

                                **SOURCE_OWNER**: Owner of the Source associated with an Access Profile

                                **MANAGER**: Manager of the Identity making the request

                                **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field
                              example: GOVERNANCE_GROUP
                            approverId:
                              type: string
                              description: ID of the specific approver, used only when approverType is GOVERNANCE_GROUP
                              example: 46c79819-a69f-49a2-becb-12c971ae66c6
                          title: AccessProfileApprovalScheme
                    title: Requestability
                  revocationRequestConfig:
                    description: Revocation request configuration for this object.
                    type: object
                    properties:
                      approvalSchemes:
                        type: array
                        description: List describing the steps in approving the revocation request
                        items:
                          type: object
                          properties:
                            approverType:
                              type: string
                              enum:
                                - APP_OWNER
                                - OWNER
                                - SOURCE_OWNER
                                - MANAGER
                                - GOVERNANCE_GROUP
                                - WORKFLOW
                                - ADDITIONAL_OWNER
                                - ADDITIONAL_GOVERNANCE_GROUP
                              description: |-
                                Describes the individual or group that is responsible for an approval step. Values are as follows.
                                **APP_OWNER**: The owner of the Application

                                **OWNER**: Owner of the associated Access Profile or Role

                                **SOURCE_OWNER**: Owner of the Source associated with an Access Profile

                                **MANAGER**: Manager of the Identity making the request

                                **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field
                              example: GOVERNANCE_GROUP
                            approverId:
                              type: string
                              description: ID of the specific approver, used only when approverType is GOVERNANCE_GROUP
                              example: 46c79819-a69f-49a2-becb-12c971ae66c6
                          title: AccessProfileApprovalScheme
                    title: Revocability
                  segments:
                    type: array
                    items:
                      type: string
                    description: List of IDs of segments, if any, to which this Access Profile is assigned.
                    example:
                      - f7b1b8a3-5fed-4fd4-ad29-82014e137e19
                      - 29cb6c06-1da8-43ea-8be4-b3125f248f2a
                  provisioningCriteria:
                    description: When an Identity has multiple Accounts on the Source with which an Access Profile is associated, this expression is evaluated against those Accounts to choose one to provision with the Access Profile.
                    example:
                      operation: OR
                      children:
                        - operation: AND
                          children:
                            - attribute: dn
                              operation: CONTAINS
                              value: useast
                            - attribute: manager
                              operation: CONTAINS
                              value: Scott.Clark
                        - operation: AND
                          children:
                            - attribute: dn
                              operation: EQUALS
                              value: Gibson
                            - attribute: telephoneNumber
                              operation: CONTAINS
                              value: '512'
                    type: object
                    nullable: true
                    properties:
                      operation:
                        type: string
                        enum:
                          - EQUALS
                          - NOT_EQUALS
                          - CONTAINS
                          - HAS
                          - AND
                          - OR
                        description: Supported operations on ProvisioningCriteria
                        example: EQUALS
                        title: ProvisioningCriteriaOperation
                      attribute:
                        type: string
                        description: Name of the Account attribute to be tested. If **operation** is one of EQUALS, NOT_EQUALS, CONTAINS, or HAS, this field is required. Otherwise, specifying it is an error.
                        example: email
                      value:
                        type: string
                        description: String value to test the Account attribute w/r/t the specified operation. If the operation is one of EQUALS, NOT_EQUALS, or CONTAINS, this field is required. Otherwise, specifying it is an error. If the Attribute is not String-typed, it will be converted to the appropriate type.
                        example: carlee.cert1c9f9b6fd@mailinator.com
                      children:
                        type: array
                        items:
                          type: object
                          nullable: true
                          description: Defines matching criteria for an Account to be provisioned with a specific Access Profile
                          properties: circular()
                          title: ProvisioningCriteriaLevel
                        description: Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes.
                        example:
                          - operation: EQUALS
                            attribute: department
                            value: Engineering
                    title: ProvisioningCriteriaLevel
                title: AccessProfile-2
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
