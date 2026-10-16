## OpenAPI

```yaml POST /sp-config/v1/import
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
  /sp-config/v1/import:
    post:
      description: |
        This post will import objects from a JSON configuration file into a tenant.
        By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted.
        The backup is provided so that the state of the configuration prior to the import is available for inspection or restore if needed.
        The backup can be skipped by setting "excludeBackup" to true in the import options.
        If a backup is performed, the id of the backup will be provided in the ImportResult as the "exportJobId". This can be downloaded 
        using the `/sp-config/export/{exportJobId}/download` endpoint.

        You cannot currently import from the Non-Employee Lifecycle Management (NELM) source. You cannot use this endpoint to back up or store NELM data. 

        For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).
      operationId: importSpConfigV1
      security:
        - userAuth:
            - sp:config:manage
      parameters:
        - in: query
          name: preview
          schema:
            type: boolean
            default: false
          required: false
          description: |
            This option is intended to give the user information about how an
            import operation would proceed, without having any effect on the target tenant.
            If this parameter is "true", no objects will be imported. Instead, the import
            process will pre-process the import file and attempt to resolve references within
            imported objects. The import result file will contain messages pertaining to
            how specific references were resolved, any errors associated with the preprocessing,
            and messages indicating which objects would be imported.
          example: 'true'
      requestBody:
        description: "The form-data \"name\" attribute for the file content must be \"data\".\n\n__Example__\n\n    data: \"config_export_0340b957-5caa-44f6-ada2-d3c4c5bd0b19.json\",\n    options: {\n      \"excludeTypes\": [],\n      \"includeTypes\": [\"TRIGGER_SUBSCRIPTION\"],\n      \"objectOptions\": {\n        \"TRIGGER_SUBSCRIPTION\": {\n          \"includedIds\": [ \"193446a1-c431-4326-8ba7-d6eebf922948\"],\n          \"includedNames\":[]\n        }\n      },\n      \"defaultReferences\": [\n        {\n          \"type\": \"TRIGGER_SUBSCRIPTION\",\n          \"id\": \"be9e116d-08e1-49fc-ab7f-fa585e96c9e4\",\n          \"name\": \"Test Trigger\"\n        }\n      ],\n      \"excludeBackup\": false\n    }\n\n__Sample Import File__\n\n    {\n    \t\"version\": 1,\n    \t\"timestamp\": \"2021-05-10T15:19:23.425041-05:00\",\n    \t\"tenant\": \"sampleTenant\",\n    \t\"options\": {\n    \t\t\"excludeTypes\": [],\n    \t\t\"includeTypes\": [\"TRIGGER_SUBSCRIPTION\"],\n    \t\t\"objectOptions\": null\n    \t},\n    \t\"objects\": [{\n    \t\t\t\"version\": 1,\n    \t\t\t\"self\": {\n    \t\t\t\t\"type\": \"TRIGGER_SUBSCRIPTION\",\n    \t\t\t\t\"name\": \"test trigger\",\n    \t\t\t\t\"id\": \"193446a1-c431-4326-8ba7-d6eebf922948\"\n    \t\t\t},\n    \t\t\t\"object\": {\n    \t\t\t\t\"type\": \"HTTP\",\n    \t\t\t\t\"enabled\": true,\n    \t\t\t\t\"httpConfig\": {\n    \t\t\t\t\t\"url\": \"https://localhost\",\n    \t\t\t\t\t\"httpAuthenticationType\": \"NO_AUTH\",\n    \t\t\t\t\t\"basicAuthConfig\": null,\n    \t\t\t\t\t\"bearerTokenAuthConfig\": null,\n    \t\t\t\t\t\"httpDispatchMode\": \"SYNC\"\n    \t\t\t\t},\n    \t\t\t\t\"triggerName\": \"Access Request Submitted\",\n    \t\t\t\t\"responseDeadline\": \"PT1H\",\n    \t\t\t\t\"name\": \"test trigger\",\n    \t\t\t\t\"triggerId\": \"idn:access-request-pre-approval\"\n    \t\t\t}\n    \t\t}\n    \t]\n    }\n"
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
                options:
                  type: object
                  title: Import Options
                  properties:
                    excludeTypes:
                      description: Object type names to be excluded from an sp-config export command.
                      type: array
                      items:
                        type: string
                        enum:
                          - CONNECTOR_RULE
                          - IDENTITY_OBJECT_CONFIG
                          - IDENTITY_PROFILE
                          - RULE
                          - SOURCE
                          - TRANSFORM
                          - TRIGGER_SUBSCRIPTION
                        example: SOURCE
                    includeTypes:
                      description: Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes.
                      type: array
                      items:
                        type: string
                        enum:
                          - CONNECTOR_RULE
                          - IDENTITY_OBJECT_CONFIG
                          - IDENTITY_PROFILE
                          - RULE
                          - SOURCE
                          - TRANSFORM
                          - TRIGGER_SUBSCRIPTION
                        example: TRIGGER_SUBSCRIPTION
                    objectOptions:
                      description: Additional options targeting specific objects related to each item in the includeTypes field
                      type: object
                      additionalProperties:
                        type: object
                        title: Object Export Import Options
                        properties:
                          includedIds:
                            description: Object ids to be included in an import or export.
                            type: array
                            items:
                              type: string
                              example: be9e116d-08e1-49fc-ab7f-fa585e96c9e4
                          includedNames:
                            description: Object names to be included in an import or export.
                            type: array
                            items:
                              type: string
                              example: Test Object
                      example:
                        TRIGGER_SUBSCRIPTION:
                          includedIds:
                            - be9e116d-08e1-49fc-ab7f-fa585e96c9e4
                          includedNames:
                            - Test 2
                    defaultReferences:
                      description: List of object types that can be used to resolve references on import.
                      type: array
                      items:
                        type: string
                        enum:
                          - CONNECTOR_RULE
                          - IDENTITY_OBJECT_CONFIG
                          - IDENTITY_PROFILE
                          - RULE
                          - SOURCE
                          - TRANSFORM
                          - TRIGGER_SUBSCRIPTION
                        example: TRIGGER_SUBSCRIPTION
                    excludeBackup:
                      description: By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted. If excludeBackup is true, the backup will not be performed.
                      type: boolean
                      default: false
                      example: 'false'
              required:
                - data
            example:
              data: config_export_0340b957-5caa-44f6-ada2-d3c4c5bd0b19.json
              options:
                excludeTypes: []
                includeTypes:
                  - TRIGGER_SUBSCRIPTION
                objectOptions:
                  TRIGGER_SUBSCRIPTION:
                    includedIds:
                      - be9e116d-08e1-49fc-ab7f-fa585e96c9e4
                    includedNames:
                      - Lori Test 2
                defaultReferences:
                  - type: TRIGGER_SUBSCRIPTION
                    id: be9e116d-08e1-49fc-ab7f-fa585e96c9e4
                    name: Test Trigger
                excludeBackup: false
      responses:
        '202':
          description: Import job accepted and queued for processing.
          content:
            application/json:
              schema:
                type: object
                title: Sp Config Job
                properties:
                  jobId:
                    type: string
                    description: Unique id assigned to this job.
                    example: 3469b87d-48ca-439a-868f-2160001da8c1
                  status:
                    type: string
                    description: Status of the job.
                    enum:
                      - NOT_STARTED
                      - IN_PROGRESS
                      - COMPLETE
                      - CANCELLED
                      - FAILED
                    example: COMPLETE
                  type:
                    type: string
                    description: Type of the job, either export or import.
                    enum:
                      - EXPORT
                      - IMPORT
                    example: IMPORT
                  expiration:
                    type: string
                    format: date-time
                    description: The time until which the artifacts will be available for download.
                    example: '2021-05-11T22:23:16Z'
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
                required:
                  - jobId
                  - status
                  - type
                  - created
                  - modified
        '400':
          description: |
            Client Error - Returned if the request body is invalid.
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
