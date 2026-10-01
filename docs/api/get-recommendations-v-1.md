## OpenAPI

```yaml POST /recommendations/v1/request
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
  /recommendations/v1/request:
    post:
      description: The getRecommendations API returns recommendations based on the requested object. The recommendations are invoked by IdentityIQ and IdentityNow plug-ins that retrieve recommendations based on the performed calculations.
      operationId: getRecommendationsV1
      security:
        - userAuth:
            - iai:decisions:manage
      parameters:
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: true
          schema:
            type: string
            default: true
          required: true
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              title: Recommendation Request Dto
              properties:
                requests:
                  type: array
                  items:
                    description: List of requests to retrieve recommendations
                    type: object
                    title: Recommendation Request
                    properties:
                      identityId:
                        type: string
                        description: The identity ID
                        example: 2c938083633d259901633d25c68c00fa
                      item:
                        type: object
                        title: Access Item Ref
                        properties:
                          id:
                            type: string
                            description: ID of the access item to retrieve the recommendation for.
                            example: 2c938083633d259901633d2623ec0375
                          type:
                            type: string
                            example: ENTITLEMENT
                            description: Access item's type.
                            enum:
                              - ENTITLEMENT
                              - ACCESS_PROFILE
                              - ROLE
                excludeInterpretations:
                  type: boolean
                  description: Exclude interpretations in the response if "true". Return interpretations in the response if this attribute is not specified.
                  default: 'false'
                  example: 'false'
                includeTranslationMessages:
                  type: boolean
                  description: When set to true, the calling system uses the translated messages for the specified language
                  default: 'false'
                  example: 'false'
                includeDebugInformation:
                  type: boolean
                  description: Returns the recommender calculations if set to true
                  default: 'false'
                  example: 'true'
                prescribeMode:
                  type: boolean
                  description: When set to true, uses prescribedRulesRecommenderConfig to get identity attributes and peer group threshold instead of standard config.
                  default: 'false'
                  example: 'false'
      responses:
        '200':
          description: The recommendations for a customer
          content:
            application/json:
              schema:
                type: object
                title: Recommendation Response Dto
                properties:
                  response:
                    type: array
                    items:
                      type: object
                      title: Recommendation Response
                      properties:
                        request:
                          type: object
                          title: Recommendation Request
                          properties:
                            identityId:
                              type: string
                              description: The identity ID
                              example: 2c938083633d259901633d25c68c00fa
                            item:
                              type: object
                              title: Access Item Ref
                              properties:
                                id:
                                  type: string
                                  description: ID of the access item to retrieve the recommendation for.
                                  example: 2c938083633d259901633d2623ec0375
                                type:
                                  type: string
                                  example: ENTITLEMENT
                                  description: Access item's type.
                                  enum:
                                    - ENTITLEMENT
                                    - ACCESS_PROFILE
                                    - ROLE
                        recommendation:
                          type: string
                          example: 'YES'
                          description: The recommendation - YES if the access is recommended, NO if not recommended, MAYBE if there is not enough information to make a recommendation, NOT_FOUND if the identity is not found in the system
                          enum:
                            - 'YES'
                            - 'NO'
                            - MAYBE
                            - NOT_FOUND
                        interpretations:
                          type: array
                          items:
                            type: string
                          description: The list of interpretations explaining the recommendation. The array is empty if includeInterpretations is false or not present in the request. e.g. - [ "Not approved in the last 6 months." ]. Interpretations will be translated using the client's locale as found in the Accept-Language header. If a translation for the client's locale cannot be found, the US English translation will be returned.
                          example:
                            - 75% of identities with the same department have this access. This information had a high impact on the overall score.
                            - 67% of identities with the same peer group have this access. This information had a low impact on the overall score.
                            - 42% of identities with the same location have this access. This information had a low impact on the overall score.
                        translationMessages:
                          type: array
                          example:
                            - key: recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH
                              values:
                                - '75'
                                - department
                          items:
                            type: object
                            title: Translation Message
                            properties:
                              key:
                                type: string
                                description: The key of the translation message
                                example: recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH
                              values:
                                type: array
                                description: The values corresponding to the translation messages
                                items:
                                  type: string
                                example:
                                  - '75'
                                  - department
                          description: The list of translation messages, if they have been requested.
                        recommenderCalculations:
                          description: The calcuations performed behind the scenes that provide recommendations to the user.
                          properties:
                            identityId:
                              type: string
                              description: The ID of the identity
                              example: 2c91808457d8f3ab0157e3e62cb4213c
                            entitlementId:
                              type: string
                              description: The entitlement ID
                              example: 2c91809050db617d0150e0bf3215385e
                            recommendation:
                              type: string
                              description: The actual recommendation
                              example: 'YES'
                            overallWeightedScore:
                              type: number
                              description: The overall weighted score
                            featureWeightedScores:
                              type: object
                              description: The weighted score of each individual feature
                              additionalProperties:
                                type: number
                            threshold:
                              type: number
                              description: The configured value against which the overallWeightedScore is compared
                            identityAttributes:
                              type: object
                              description: The values for your configured features
                              additionalProperties:
                                type: object
                                properties:
                                  value:
                                    type: string
                            featureValues:
                              description: The feature details
                              type: object
                              title: Feature Value Dto
                              properties:
                                feature:
                                  type: string
                                  description: The type of feature
                                  example: department
                                numerator:
                                  type: integer
                                  format: int32
                                  example: 14
                                  description: The number of identities that have access to the feature
                                denominator:
                                  type: integer
                                  format: int32
                                  example: 14
                                  description: The number of identities with the corresponding feature
                          title: recommendercalculations
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
