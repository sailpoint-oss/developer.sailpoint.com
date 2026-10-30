## OpenAPI

```yaml PUT /certification-campaigns/v1/campaign-filters/{id}
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
  /certification-campaigns/v1/campaign-filters/{id}:
    put:
      description: Updates an existing campaign filter using the filter's ID. Required roles are ORG_ADMIN or CERT_ADMIN. The request body must not exceed 1 MiB (1,048,576 bytes); larger requests are rejected with a 400 response.
      operationId: putCampaignFilterV1
      security:
        - userAuth:
            - idn:campaign-filter:manage
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
          name: id
          schema:
            type: string
            format: uuid
            example: e9f9a139-7b84-2fd5-a658-42087040d3ac
          required: true
          description: The ID of the campaign filter being modified.
          x-sailpoint-resource-operation-id: listGovCertificationCampaignFiltersV1
      requestBody:
        required: true
        description: A campaign filter details with updated field values.
        content:
          application/json:
            schema:
              type: object
              description: Campaign Filter Update Details
              properties:
                name:
                  type: string
                  description: This is campaign filter's name.
                  example: Identity Attribute Campaign Filter
                description:
                  type: string
                  description: This is campaign filter's description.
                  example: Campaign filter to certify data based on specified property of Identity Attribute.
                mode:
                  type: string
                  description: The mode/type of Filter, where it is of INCLUSION or EXCLUSION type. INCLUSION type will include the data in generated campaign as per specified in criteria, whereas EXCLUSION type will exclude the the data in generated campaign as per specified in criteria.
                  enum:
                    - INCLUSION
                    - EXCLUSION
                  example: INCLUSION
                  title: CampaignFilterType
                criteriaList:
                  type: array
                  description: List of criteria.
                  items:
                    type: object
                    properties:
                      criteriaType:
                        type: string
                        enum:
                          - COMPOSITE
                          - ROLE
                          - IDENTITY
                          - IDENTITY_ATTRIBUTE
                          - ENTITLEMENT
                          - ACCESS_PROFILE
                          - SOURCE
                          - ACCOUNT
                          - ACCOUNT_ATTRIBUTE
                          - IDENTITY_PROFILE
                          - APP
                          - ACCESS
                        description: Type of the criteria in the filter.
                        example: IDENTITY_ATTRIBUTE
                        title: CriteriaType
                      operation:
                        type: string
                        enum:
                          - EQUALS
                          - NOT_EQUALS
                          - CONTAINS
                          - STARTS_WITH
                          - ENDS_WITH
                          - IN
                          - AND
                          - OR
                        description: Operation on a specific criteria
                        example: EQUALS
                        title: Operation
                      criteriaProperty:
                        type: string
                        description: The specified key from the Type of criteria.
                        example: displayName
                      criteriaValue:
                        type: string
                        description: The value for the specified key from the Type of Criteria. Used for scalar operations. Must be absent when operation is IN.
                        example: Allie
                      criteriaValues:
                        type: array
                        description: List of values for the IN operation. Required when operation is IN; must be absent for all other operations.
                        items:
                          type: string
                        example:
                          - 8a32c3d5f2864555948e63867c377ca2
                          - 9b41d4e6g3975666059f74978d488db3
                      children:
                        type: array
                        description: List of child criteria. Applicable only for COMPOSITE criteriaType
                        items: circular(Criteria)
                        example:
                          - criteriaType: IDENTITY
                            criteriaProperty: DISPLAY_NAME
                            criteriaValue: support
                            operation: EQUALS
                    required:
                      - criteriaType
                      - operation
                    title: Criteria
                  example:
                    - criteriaType: IDENTITY
                      criteriaProperty: DISPLAY_NAME
                      criteriaValue: support
                      operation: EQUALS
              required:
                - name
                - description
                - mode
                - criteriaList
              title: CampaignFilterUpdate
      responses:
        '200':
          description: Resource updated successfully.
          content:
            application/json:
              schema:
                type: object
                description: Campaign Filter Details
                properties:
                  id:
                    type: string
                    format: uuid
                    description: ID of the campaign filter
                    example: e9f9a139-7b84-2fd5-a658-42087040d3ac
                  name:
                    type: string
                    description: This is campaign filter's name.
                    example: Identity Attribute Campaign Filter
                  description:
                    type: string
                    description: This is campaign filter's description.
                    example: Campaign filter to certify data based on specified property of Identity Attribute.
                  owner:
                    type: string
                    description: The owner of this filter. This field is automatically populated at creation time with the current user.
                    example: SailPoint Support
                  created:
                    type: string
                    description: Creation date of Campaign Filter
                    readOnly: true
                    format: date-time
                    example: '2020-03-05T22:44:00.364Z'
                  modified:
                    type: string
                    description: Modification date of Campaign Filter
                    readOnly: true
                    format: date-time
                    example: '2020-03-05T22:52:09.969Z'
                  mode:
                    type: string
                    description: The mode/type of Filter, where it is of INCLUSION or EXCLUSION type. INCLUSION type will include the data in generated campaign as per specified in criteria, whereas EXCLUSION type will exclude the the data in generated campaign as per specified in criteria.
                    enum:
                      - INCLUSION
                      - EXCLUSION
                    example: INCLUSION
                    title: CampaignFilterType
                  criteriaList:
                    type: array
                    description: List of criteria.
                    items:
                      type: object
                      properties:
                        criteriaType:
                          type: string
                          enum:
                            - COMPOSITE
                            - ROLE
                            - IDENTITY
                            - IDENTITY_ATTRIBUTE
                            - ENTITLEMENT
                            - ACCESS_PROFILE
                            - SOURCE
                            - ACCOUNT
                            - ACCOUNT_ATTRIBUTE
                            - IDENTITY_PROFILE
                            - APP
                            - ACCESS
                          description: Type of the criteria in the filter.
                          example: IDENTITY_ATTRIBUTE
                          title: CriteriaType
                        operation:
                          type: string
                          enum:
                            - EQUALS
                            - NOT_EQUALS
                            - CONTAINS
                            - STARTS_WITH
                            - ENDS_WITH
                            - IN
                            - AND
                            - OR
                          description: Operation on a specific criteria
                          example: EQUALS
                          title: Operation
                        criteriaProperty:
                          type: string
                          description: The specified key from the Type of criteria.
                          example: displayName
                        criteriaValue:
                          type: string
                          description: The value for the specified key from the Type of Criteria. Used for scalar operations. Must be absent when operation is IN.
                          example: Allie
                        criteriaValues:
                          type: array
                          description: List of values for the IN operation. Required when operation is IN; must be absent for all other operations.
                          items:
                            type: string
                          example:
                            - 8a32c3d5f2864555948e63867c377ca2
                            - 9b41d4e6g3975666059f74978d488db3
                        children:
                          type: array
                          description: List of child criteria. Applicable only for COMPOSITE criteriaType
                          items: circular(Criteria)
                          example:
                            - criteriaType: IDENTITY
                              criteriaProperty: DISPLAY_NAME
                              criteriaValue: support
                              operation: EQUALS
                      required:
                        - criteriaType
                        - operation
                      title: Criteria
                    example:
                      - criteriaType: IDENTITY
                        criteriaProperty: DISPLAY_NAME
                        criteriaValue: support
                        operation: EQUALS
                required:
                  - name
                  - description
                  - owner
                  - mode
                title: CampaignFilterGet
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
