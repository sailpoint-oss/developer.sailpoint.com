## OpenAPI

```yaml GET /configuration-hub/v1/backups
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
  /configuration-hub/v1/backups:
    get:
      description: This API gets a list of existing backups for the current tenant.
      operationId: listBackupsV1
      security:
        - userAuth:
            - sp:config-backup:read
            - sp:config-backup:manage
      parameters:
        - in: query
          name: filters
          schema:
            type: string
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **status**: *eq*
          example: status eq "COMPLETE"
          required: false
      responses:
        '200':
          description: List of existing backups.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    jobId:
                      type: string
                      description: Unique id assigned to this backup.
                      example: 3469b87d-48ca-439a-868f-2160001da8c1
                    status:
                      type: string
                      description: Status of the backup.
                      enum:
                        - NOT_STARTED
                        - IN_PROGRESS
                        - COMPLETE
                        - CANCELLED
                        - FAILED
                      example: COMPLETE
                    type:
                      type: string
                      description: Type of the job, will always be BACKUP for this type of job.
                      enum:
                        - BACKUP
                      example: BACKUP
                    tenant:
                      type: string
                      description: The name of the tenant performing the upload
                      example: tenant-name
                    requesterName:
                      type: string
                      description: The name of the requester.
                      example: Requester Name
                    fileExists:
                      type: boolean
                      default: true
                      description: Whether or not a file was created and stored for this backup.
                      example: true
                    created:
                      type: string
                      format: date-time
                      description: The time the job was started.
                      example: '2021-05-11T22:23:16Z'
                    modified:
                      type: string
                      format: date-time
                      description: The time of the last update to the job.
                      example: '2021-05-11T22:23:16Z'
                    completed:
                      type: string
                      format: date-time
                      description: The time the job was completed.
                      example: '2021-05-11T22:23:16Z'
                    name:
                      type: string
                      description: The name assigned to the upload file in the request body.
                      example: Backup Name
                    userCanDelete:
                      type: boolean
                      default: true
                      description: Whether this backup can be deleted by a regular user.
                      example: false
                    isPartial:
                      type: boolean
                      default: false
                      description: Whether this backup contains all supported object types or only some of them.
                      example: false
                    backupType:
                      type: string
                      description: |-
                        Denotes how this backup was created.
                        - MANUAL - The backup was created by a user.
                        - AUTOMATED - The backup was created by devops.
                        - AUTOMATED_DRAFT - The backup was created during a draft process.
                        - UPLOADED - The backup was created by uploading an existing configuration file.
                      enum:
                        - UPLOADED
                        - AUTOMATED
                        - MANUAL
                      example: MANUAL
                    options:
                      type: object
                      nullable: true
                      description: Backup options control what will be included in the backup.
                      properties:
                        includeTypes:
                          type: array
                          description: Object type names to be included in a Configuration Hub backup command.
                          items:
                            type: string
                            enum:
                              - ACCESS_PROFILE
                              - ACCESS_REQUEST_CONFIG
                              - ATTR_SYNC_SOURCE_CONFIG
                              - AUTH_ORG
                              - CAMPAIGN_FILTER
                              - FORM_DEFINITION
                              - GOVERNANCE_GROUP
                              - IDENTITY_OBJECT_CONFIG
                              - IDENTITY_PROFILE
                              - LIFECYCLE_STATE
                              - NOTIFICATION_TEMPLATE
                              - PASSWORD_POLICY
                              - PASSWORD_SYNC_GROUP
                              - PUBLIC_IDENTITIES_CONFIG
                              - ROLE
                              - RULE
                              - SEGMENT
                              - SERVICE_DESK_INTEGRATION
                              - SOD_POLICY
                              - SOURCE
                              - TAG
                              - TRANSFORM
                              - TRIGGER_SUBSCRIPTION
                              - WORKFLOW
                            example: TRIGGER_SUBSCRIPTION
                        objectOptions:
                          description: Additional options targeting specific objects related to each item in the includeTypes field.
                          type: object
                          additionalProperties:
                            type: object
                            properties:
                              includedNames:
                                description: Object names to be included in a backup.
                                type: array
                                items:
                                  type: string
                                  example: Test Object name
                            title: objectexportimportnames
                          example:
                            TRIGGER_SUBSCRIPTION:
                              includedNames:
                                - Trigger Subscription name
                      title: backupoptions
                    hydrationStatus:
                      type: string
                      description: Whether the object details of this backup are ready.
                      enum:
                        - HYDRATED
                        - NOT_HYDRATED
                      example: NOT_HYDRATED
                    totalObjectCount:
                      type: integer
                      format: int64
                      description: Number of objects contained in this backup.
                      example: 10
                    cloudStorageStatus:
                      type: string
                      description: Whether this backup has been transferred to a customer storage location.
                      enum:
                        - SYNCED
                        - NOT_SYNCED
                        - SYNC_FAILED
                      example: SYNCED
                  title: backupresponse
              example:
                - jobId: 09491993-9cb6-49a7-8d37-8bef54d33502
                  status: COMPLETE
                  type: BACKUP
                  tenant: tenant-name
                  requesterName: Requester Name
                  fileExists: true
                  created: '2024-02-19T19:54:15.373Z'
                  modified: '2024-02-19T20:39:00.341Z'
                  completed: '2024-02-19T19:54:15.605Z'
                  name: Backup name
                  userCanDelete: false
                  isPartial: true
                  backupType: MANUAL
                  options:
                    includeTypes:
                      - SOURCE
                    objectOptions:
                      SOURCE:
                        includedNames:
                          - Source Name
                  hydrationStatus: HYDRATED
                  totalObjectCount: 2
                  cloudStorageStatus: SYNCED
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
