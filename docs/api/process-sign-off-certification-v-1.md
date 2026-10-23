## OpenAPI

```yaml POST /certification-campaigns/v1/certifications/{certificationId}/sign-off
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
  /certification-campaigns/v1/certifications/{certificationId}/sign-off:
    post:
      description: This API finalizes all decisions made on a certification and initiates any remediations required. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.
      operationId: processSignOffCertificationV1
      security:
        - userAuth:
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
      responses:
        '200':
          description: A Certification object
          content:
            application/json:
              schema:
                type: object
                required:
                  - campaignRef
                  - completed
                  - decisionsMade
                  - decisionsTotal
                  - dueDate
                  - reviewer
                  - phase
                  - completedSubjects
                  - totalSubjects
                properties:
                  campaignRef:
                    type: object
                    properties:
                      id:
                        type: string
                        format: uuid
                        description: The unique ID of the campaign.
                        example: ef38f943-47e9-4562-b5bb-8424a56397d8
                      name:
                        type: string
                        description: The name of the campaign.
                        example: Campaign Name
                      description:
                        type: string
                        description: The description of the campaign set by the admin who created it.
                        example: A description of the campaign
                      type:
                        type: string
                        description: Type of the campaign.
                        enum:
                          - IDENTITY
                          - UNCORRELATED_ACCOUNT
                          - MACHINE_ACCOUNT
                        example: IDENTITY
                        title: CampaignType
                      mandatoryCommentRequirement:
                        type: string
                        description: Type of the mandatory comment.
                        enum:
                          - ALL_DECISIONS
                          - REVOKE_ONLY_DECISIONS
                          - NO_DECISIONS
                        example: ALL_DECISIONS
                        title: MandatoryCommentType
                      recommendationsEnabled:
                        type: boolean
                        description: Indicates if the campaign related recommendations enabled.
                        default: false
                        example: false
                      reviewer:
                        type: object
                        description: The specified target will be the reviewer for all certifications in this campaign.
                        properties:
                          type:
                            type: string
                            description: Type of the reviewer of the campaign.
                            enum:
                              - ACCOUNT_OWNER
                              - GOVERNANCE_GROUP
                              - IDENTITY
                              - MANAGER
                              - OBJECT_OWNER
                              - SOURCE_OWNER
                            example: IDENTITY
                            title: CampaignReviewerType
                      generationType:
                        type: string
                        description: Generation type of the campaign.
                        enum:
                          - SEARCH
                          - CAMPAIGN_FILTER
                          - NO_FILTER
                        example: CAMPAIGN_FILTER
                        title: CampaignGenerationType
                    required:
                      - id
                      - name
                    title: CampaignReference
                  phase:
                    type: string
                    description: |
                      The current phase of the certification.
                      * `STAGED`: The certification is waiting to be activated.
                      * `ACTIVE`: The certification is active.
                      * `SIGNED`: The reviewer has signed off on the certification, and it is considered complete.
                    enum:
                      - STAGED
                      - ACTIVE
                      - SIGNED
                    example: ACTIVE
                    title: CertificationPhase
                  reviewProgress:
                    type: string
                    description: |
                      The progress of certification review.
                      * `NOT_STARTED`: No certification item is reviewed yet.
                      * `IN_PROGRESS`: Partial review is done on certification.
                      * `DECISIONS_COMPLETE`: All the decision completed on certification, just sign-off pending.
                      * `SIGNED`: Certification is signed off.
                    enum:
                      - NOT_STARTED
                      - IN_PROGRESS
                      - DECISIONS_COMPLETE
                      - SIGNED
                    example: SIGNED
                    title: CertificationReviewProgress
                  dueDate:
                    type: string
                    format: date-time
                    description: The due date of the certification.
                    example: '2018-10-19T13:49:37.385Z'
                  dateSigned:
                    type: string
                    format: date-time
                    description: The date the reviewer signed off on the certification. Omitted until the certification is signed off.
                    example: '2018-10-19T13:49:37.385Z'
                  dateFinished:
                    type: string
                    format: date-time
                    description: The date the certification was finished.
                    example: '2018-10-19T14:49:37.385Z'
                  reviewer:
                    description: A reference to the reviewer of the campaign.
                    type: object
                    properties:
                      id:
                        type: string
                        description: The ID of the Identity or Governance Group
                        example: 0fbe863c063c4c88a35fd7f17e8a3df5
                      type:
                        type: string
                        description: Type of the reviewer
                        enum:
                          - IDENTITY
                          - GOVERNANCE_GROUP
                        example: IDENTITY
                      name:
                        type: string
                        description: Human-readable display name of the Identity or Governance Group
                        example: William Wilson
                      email:
                        type: string
                        format: email
                        description: The email of the Identity
                        example: William.Wilson@email.com
                    title: CertificationReviewer
                  reassignment:
                    nullable: true
                    description: A reference to a reviewer that this campaign has been reassigned to.
                    type: object
                    properties:
                      reassignedFrom:
                        description: Previous certification.
                        type: object
                        properties:
                          certificationId:
                            type: string
                            format: uuid
                            description: ID of certification for review.
                            example: 7589a83c-ec4b-4f13-8ce5-6c1a5ef0756d
                          certificationDisplayName:
                            type: string
                            description: Display name of certification for review.
                            example: Manager Access for Michael Michaels
                          reviewer:
                            description: Certification reviewer
                            type: object
                            properties:
                              id:
                                type: string
                                description: The ID of the Identity or Governance Group
                                example: 0fbe863c063c4c88a35fd7f17e8a3df5
                              type:
                                type: string
                                description: Type of the reviewer
                                enum:
                                  - IDENTITY
                                  - GOVERNANCE_GROUP
                                example: IDENTITY
                              name:
                                type: string
                                description: Human-readable display name of the Identity or Governance Group
                                example: William Wilson
                              email:
                                type: string
                                format: email
                                description: The email of the Identity
                                example: William.Wilson@email.com
                            title: CertificationReviewer
                        title: CertificationReference
                      comment:
                        type: string
                        description: Comments from the previous reviewer.
                        example: Please review
                      reassignmentTrails:
                        type: array
                        description: The reassignmentTrail
                        items:
                          type: object
                          properties:
                            previousReviewer:
                              type: object
                              description: Details of the reviewer in the reassignment trail
                              properties:
                                id:
                                  type: string
                                  description: The ID of the Identity
                                  example: 0fbe863c063c4c88a35fd7f17e8a3df5
                                name:
                                  type: string
                                  description: Human-readable display name of the Identity
                                  example: William Wilson
                              title: ReassignmentTrailReviewer
                            newReviewer:
                              type: object
                              description: Details of the reviewer in the reassignment trail
                              properties:
                                id:
                                  type: string
                                  description: The ID of the Identity
                                  example: 0fbe863c063c4c88a35fd7f17e8a3df5
                                name:
                                  type: string
                                  description: Human-readable display name of the Identity
                                  example: William Wilson
                              title: ReassignmentTrailReviewer
                            reassignmentType:
                              type: string
                              description: The type of reassignment.
                              enum:
                                - AUTOMATIC_REASSIGNMENT
                                - MANUAL_REASSIGNMENT
                                - SELF_REVIEW_DELEGATION
                              example: AUTOMATIC_REASSIGNMENT
                          title: ReassignmentTrail
                    title: Reassignment
                  completed:
                    type: boolean
                    description: Indicates if all certification decisions have been made.
                    example: false
                  decisionsMade:
                    type: integer
                    description: The number of approve/revoke/acknowledge decisions that have been made by the reviewer.
                    example: 20
                    format: int32
                  decisionsTotal:
                    type: integer
                    description: The total number of approve/revoke/acknowledge decisions for the certification.
                    example: 40
                    format: int32
                  completedSubjects:
                    type: integer
                    description: The number of subjects (identities, access profiles, roles, etc.) for which all decisions have been made and are complete.
                    example: 5
                    format: int32
                  totalSubjects:
                    type: integer
                    format: int32
                    description: The total number of subjects (identities, access profiles, roles, etc.) in the certification, both complete and incomplete.
                    example: 10
                  id:
                    type: string
                    format: uuid
                    description: The certificationId
                    example: ef38f943-47e9-4562-b5bb-8424a56397d8
                  name:
                    type: string
                    description: The name of the certification
                    example: Quarterly Access Review - Q4 2018
                  created:
                    type: string
                    format: date-time
                    description: The date the certification was created
                    example: '2018-10-18T13:49:37.385Z'
                  modified:
                    type: string
                    format: date-time
                    description: The date the certification was last modified
                    example: '2018-10-19T12:49:37.385Z'
                  reauthRequired:
                    type: boolean
                    description: Indicates whether any review items within this certification requires reauthentication before sign-off or completion
                    example: false
                    default: false
                title: Certification
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
