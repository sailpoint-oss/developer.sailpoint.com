## OpenAPI

```yaml POST /access-profiles/v1/bulk-delete
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
  /access-profiles/v1/bulk-delete:
    post:
      description: |-
        This endpoint initiates a bulk deletion of one or more access profiles.
        When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/get-task-status-v-1), which will return the task result's status and information. 
        This endpoint can only bulk delete up to a limit of 50 access profiles per request. 
        By default, if any of the indicated access profiles are in use, no deletions will be performed and the **inUse** field of the response indicates the usages that must be removed first. If the request field **bestEffortOnly** is **true**, however, usages are reported in the **inUse** response field but all other indicated access profiles will be deleted.
        A SOURCE_SUBADMIN user can only use this endpoint to delete access profiles associated with sources they're able to administer.
      operationId: deleteAccessProfilesInBulkV1
      security:
        - userAuth:
            - idn:access-profile:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                accessProfileIds:
                  description: List of IDs of Access Profiles to be deleted.
                  type: array
                  items:
                    type: string
                  example:
                    - 2c9180847812e0b1017817051919ecca
                    - 2c9180887812e0b201781e129f151816
                bestEffortOnly:
                  description: If **true**, silently skip over any of the specified Access Profiles if they cannot be deleted because they are in use. If **false**, no deletions will be attempted if any of the Access Profiles are in use.
                  type: boolean
                  example: true
              title: accessprofilebulkdeleterequest
            example:
              bestEffortOnly: true
              accessProfileIds:
                - 2c91808876438bb2017668b91919ecca
                - 2c91808876438ba801766e129f151816
      responses:
        '200':
          description: Returned only if **bestEffortOnly** is **false**, and one or more Access Profiles are in use.
          content:
            application/json:
              schema:
                type: object
                properties:
                  taskId:
                    type: string
                    description: ID of the task which is executing the bulk deletion. This can be passed to the **/task-status** API to track status.
                    example: 2c9180867817ac4d017817c491119a20
                  pending:
                    type: array
                    description: List of IDs of Access Profiles which are pending deletion.
                    items:
                      type: string
                    example:
                      - 2c91808876438bbb017668c21919ecca
                      - 2c91808876438bb201766e129f151816
                  inUse:
                    type: array
                    description: List of usages of Access Profiles targeted for deletion.
                    items:
                      type: object
                      properties:
                        accessProfileId:
                          type: string
                          description: ID of the Access Profile that is in use
                          example: 2c91808876438bbb017668c21919ecca
                        usedBy:
                          type: array
                          description: List of references to objects which are using the indicated Access Profile
                          items:
                            type: object
                            description: Role using the access profile.
                            properties:
                              type:
                                type: string
                                description: DTO type of role using the access profile.
                                enum:
                                  - ROLE
                                example: ROLE
                              id:
                                type: string
                                description: ID of role using the access profile.
                                example: 2c8180857a9b3da0017aa03418480f9d
                              name:
                                type: string
                                description: Display name of role using the access profile.
                                example: Manager Role
                      title: accessprofileusage
                title: accessprofilebulkdeleteresponse
              example:
                pending: []
                inUse:
                  - accessProfileId: 2c91808876438ba801766e129f151816
                    usages:
                      - type: Role
                        id: 2c9180887643764201766e9f6e121518
        '202':
          description: Returned if at least one deletion will be performed.
          content:
            application/json:
              schema:
                type: object
                properties:
                  taskId:
                    type: string
                    description: ID of the task which is executing the bulk deletion. This can be passed to the **/task-status** API to track status.
                    example: 2c9180867817ac4d017817c491119a20
                  pending:
                    type: array
                    description: List of IDs of Access Profiles which are pending deletion.
                    items:
                      type: string
                    example:
                      - 2c91808876438bbb017668c21919ecca
                      - 2c91808876438bb201766e129f151816
                  inUse:
                    type: array
                    description: List of usages of Access Profiles targeted for deletion.
                    items:
                      type: object
                      properties:
                        accessProfileId:
                          type: string
                          description: ID of the Access Profile that is in use
                          example: 2c91808876438bbb017668c21919ecca
                        usedBy:
                          type: array
                          description: List of references to objects which are using the indicated Access Profile
                          items:
                            type: object
                            description: Role using the access profile.
                            properties:
                              type:
                                type: string
                                description: DTO type of role using the access profile.
                                enum:
                                  - ROLE
                                example: ROLE
                              id:
                                type: string
                                description: ID of role using the access profile.
                                example: 2c8180857a9b3da0017aa03418480f9d
                              name:
                                type: string
                                description: Display name of role using the access profile.
                                example: Manager Role
                      title: accessprofileusage
                title: accessprofilebulkdeleteresponse
              example:
                taskId: 2c91808a7813090a01781412a1119a20
                pending:
                  - 2c91808a7813090a017813fe1919ecca
                inUse:
                  - accessProfileId: 2c91808876438ba801766e129f151816
                    usages:
                      - type: Role
                        id: 2c9180887643764201766e9f6e121518
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
