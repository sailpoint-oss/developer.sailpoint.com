## OpenAPI

```yaml GET /ssf/v1/streams
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
  /ssf/v1/streams:
    get:
      description: |
        Retrieves either a list of all SSF stream configurations or the individual configuration if specified by ID.

        As stream configurations are tied to a client ID, you can only view the stream associated with the client ID
        of the request OAuth 2.0 access token.

        Query parameter `aud` (co filter) can be used to filter by audience.
      operationId: getStreamV1
      security:
        - userAuth:
            - sp:ssf-transmitter-streams:manage
      parameters:
        - in: query
          name: stream_id
          required: false
          schema:
            type: string
          description: If provided, returns that stream; otherwise returns list of all streams.
          example: 550e8400-e29b-41d4-a716-446655440000
      responses:
        '200':
          description: Single stream (when stream_id is provided) or list of streams (when stream_id is omitted).
          content:
            application/json:
              schema:
                oneOf:
                  - type: object
                    description: Full stream configuration returned by create/get/update/replace.
                    properties:
                      stream_id:
                        type: string
                        description: Unique stream identifier.
                        example: 550e8400-e29b-41d4-a716-446655440000
                      iss:
                        type: string
                        description: Issuer (transmitter) URL.
                        example: https://tenant.sailpoint.com
                      aud:
                        type: string
                        description: Audience for the stream.
                        example: https://receiver.example.com
                      delivery:
                        type: object
                        description: Delivery configuration returned in stream responses.
                        properties:
                          method:
                            type: string
                            description: Delivery method.
                            example: urn:ietf:rfc:8935
                          endpoint_url:
                            type: string
                            description: Receiver endpoint URL.
                            example: https://receiver.example.com/ssf/events
                        title: deliveryresponse
                      events_supported:
                        type: array
                        items:
                          type: string
                          format: uri
                        description: |
                          Event types supported by the transmitter. Use CAEP event-type URIs in the form:
                          `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session-revoked).
                        example:
                          - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                      events_requested:
                        type: array
                        items:
                          type: string
                          format: uri
                        description: |
                          Event types requested by the receiver. Use CAEP event-type URIs in the form:
                          `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).
                        example:
                          - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                      events_delivered:
                        type: array
                        items:
                          type: string
                          format: uri
                        description: Event types currently being delivered (intersection of supported and requested).
                        example:
                          - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                      description:
                        type: string
                        description: Optional stream description.
                        example: Production event stream
                      inactivity_timeout:
                        type: integer
                        format: int32
                        description: Inactivity timeout in seconds (optional).
                        example: 3600
                      min_verification_interval:
                        type: integer
                        format: int32
                        description: Minimum verification interval in seconds (optional).
                        example: 300
                    title: streamconfigresponse
                  - type: array
                    items:
                      type: object
                      description: Full stream configuration returned by create/get/update/replace.
                      properties:
                        stream_id:
                          type: string
                          description: Unique stream identifier.
                          example: 550e8400-e29b-41d4-a716-446655440000
                        iss:
                          type: string
                          description: Issuer (transmitter) URL.
                          example: https://tenant.sailpoint.com
                        aud:
                          type: string
                          description: Audience for the stream.
                          example: https://receiver.example.com
                        delivery:
                          type: object
                          description: Delivery configuration returned in stream responses.
                          properties:
                            method:
                              type: string
                              description: Delivery method.
                              example: urn:ietf:rfc:8935
                            endpoint_url:
                              type: string
                              description: Receiver endpoint URL.
                              example: https://receiver.example.com/ssf/events
                          title: deliveryresponse
                        events_supported:
                          type: array
                          items:
                            type: string
                            format: uri
                          description: |
                            Event types supported by the transmitter. Use CAEP event-type URIs in the form:
                            `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session-revoked).
                          example:
                            - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                        events_requested:
                          type: array
                          items:
                            type: string
                            format: uri
                          description: |
                            Event types requested by the receiver. Use CAEP event-type URIs in the form:
                            `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).
                          example:
                            - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                        events_delivered:
                          type: array
                          items:
                            type: string
                            format: uri
                          description: Event types currently being delivered (intersection of supported and requested).
                          example:
                            - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                        description:
                          type: string
                          description: Optional stream description.
                          example: Production event stream
                        inactivity_timeout:
                          type: integer
                          format: int32
                          description: Inactivity timeout in seconds (optional).
                          example: 3600
                        min_verification_interval:
                          type: integer
                          format: int32
                          description: Minimum verification interval in seconds (optional).
                          example: 300
                      title: streamconfigresponse
              examples:
                single:
                  summary: Single stream (get /ssf/streams?stream_id=...)
                  value:
                    stream_id: 550e8400-e29b-41d4-a716-446655440000
                    iss: https://tenant.sailpoint.com
                    aud: https://receiver.example.com
                    delivery:
                      method: urn:ietf:rfc:8935
                      endpoint_url: https://receiver.example.com/ssf/events
                    events_supported:
                      - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                    events_requested:
                      - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                    events_delivered:
                      - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                    description: Production event stream
                    inactivity_timeout: 3600
                    min_verification_interval: 300
                list:
                  summary: List of streams (get /ssf/streams)
                  value:
                    - stream_id: 550e8400-e29b-41d4-a716-446655440000
                      iss: https://tenant.sailpoint.com
                      aud: https://receiver.example.com
                      delivery:
                        method: urn:ietf:rfc:8935
                        endpoint_url: https://receiver.example.com/ssf/events
                      events_supported:
                        - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                      events_requested:
                        - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                      events_delivered:
                        - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                      description: Production stream
                      inactivity_timeout: 3600
                      min_verification_interval: 300
                    - stream_id: 660e8400-e29b-41d4-a716-446655440001
                      iss: https://tenant.sailpoint.com
                      aud: https://other-receiver.example.com
                      delivery:
                        method: urn:ietf:rfc:8935
                        endpoint_url: https://other-receiver.example.com/events
                      events_supported:
                        - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                      events_requested:
                        - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                      events_delivered:
                        - https://schemas.openid.net/secevent/caep/event-type/{event-type}
                      description: ''
                      inactivity_timeout: 3600
                      min_verification_interval: 300
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
