## OpenAPI

```yaml POST /configuration-hub/v1/backups/uploads
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
  /configuration-hub/v1/backups/uploads:
    post:
      description: |-
        This API uploads a JSON configuration file into a tenant.

        Configuration files can be managed and deployed via Configuration Hub by uploading a json file which contains configuration data. The JSON file should be the same as the one used by our import endpoints. The object types supported by upload configuration file functionality are the same as the ones supported by our regular backup functionality.

        Refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects) for more information about supported objects.
      operationId: createUploadedConfigurationV1
      security:
        - userAuth:
            - sp:config-backup:manage
      requestBody:
        description: |
          The body will consist of "data" which should contain the json file and name wish should be the name you want to assign to the uploaded file"

          __Example__

              data: "uploaded.json",
              name: "A_NEW_UPLOADED_BACKUP"

          __Sample Upload File__

              {
                "version": 1,
                "tenant": "a-sample-tenant",
                "objects":
                [
                  {
                    "version": 1,
                    "self":
                      {
                        "id": "0a59c7196d2917f8aa6d29686e6600fb",
                        "type": "SOURCE",
                        "name": "Extended Form"
                      },
                    "object":
                      {
                        "id": "0a59c7196d2917f8aa6d29686e6600fb",
                        "name": "Extended Form",
                        "type": "DelimitedFile",
                        "connectorClass": "sailpoint.connector.DelimitedFileConnector",
                        "connectorScriptName": "delimited-file-angularsc",
                        "description": "Migrated app - Extended Form (original ID: 0a59c7196d2917f8aa6d29686e6600fb)",
                        "deleteThreshold": 10,
                        "provisionAsCsv": false,
                        "owner":
                          {
                            "type": "IDENTITY",
                            "id": "0a59c7196d2917f8816d29685fed00c3",
                            "name": "slpt.services"
                          },
                        "connectorAttributes":
                          {
                            "beforemoveAccount": "Do Nothing",
                            "beforemoverAccount": "Do Nothing",
                            "busApp": "false",
                            "file": "Empty",
                            "filetransport": "local",
                            "filterEmptyRecords": "true",
                            "group.filetransport": "local",
                            "group.filterEmptyRecords": "true",
                            "group.partitionMode": "auto",
                            "hasHeader": "true",
                            "indexColumn": "ID",
                            "isCaseInsensitiveMerge": "false",
                            "isSortedByIndexColumn": "false",
                            "loaProcess": "Do Nothing",
                            "ltdProcess": "Do Nothing",
                            "mergeRows": "false",
                            "moverProcess": "Do Nothing",
                            "moverRevocation": "Do Nothing",
                            "nativeChangeDetectionAttributeScope": "entitlements",
                            "nativeChangeDetectionEnabled": "false",
                            "nativeChangeProcess": "Do Nothing",
                            "parseType": "delimited",
                            "partitionMode": "auto",
                            "policyType": "Do Nothing",
                            "rehireProcess": "Do Nothing",
                            "reverseleaverProcess": "Do Nothing",
                            "rtwloaProcess": "Do Nothing",
                            "rtwltdProcess": "Do Nothing",
                            "stopIfLineHasWrongColumnLength": "false",
                            "templateApplication": "DelimitedFile Template",
                            "terminationProcess": "Do Nothing"
                          },
                        "schemas":
                          [],
                        "provisioningPolicies":
                          [],
                        "features":
                          [
                            "DIRECT_PERMISSIONS",
                            "NO_RANDOM_ACCESS",
                            "DISCOVER_SCHEMA"
                          ]
                      }
                  }
                ]
            }
        required: true
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                data:
                  type: string
                  format: binary
                  description: JSON file containing the objects to be imported.
                name:
                  type: string
                  description: Name that will be assigned to the uploaded configuration file.
              required:
                - data
                - name
      responses:
        '202':
          description: Upload job accepted and queued for processing.
          content:
            application/json:
              schema:
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
