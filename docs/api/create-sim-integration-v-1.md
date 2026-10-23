## OpenAPI

```yaml POST /sim-integrations/v1
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
  /sim-integrations/v1:
    post:
      description: Create a new SIM Integrations.
      operationId: createSIMIntegrationV1
      security:
        - userAuth:
            - idn:service-desk-integration:manage
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
        description: DTO containing the details of the SIM integration
        content:
          application/json:
            schema:
              type: object
              title: Sim Integration Details
              allOf:
                - type: object
                  title: Base Common Dto
                  required:
                    - name
                  properties:
                    id:
                      description: System-generated unique ID of the Object
                      type: string
                      example: id12345
                      readOnly: true
                    name:
                      description: Name of the Object
                      type: string
                      example: aName
                      nullable: true
                    created:
                      description: Creation date of the Object
                      type: string
                      example: '2015-05-28T14:07:17Z'
                      format: date-time
                      readOnly: true
                    modified:
                      description: Last modification date of the Object
                      type: string
                      example: '2015-05-28T14:07:17Z'
                      format: date-time
                      readOnly: true
                - type: object
                  properties:
                    description:
                      type: string
                      description: The description of the integration
                      example: Integration description
                      nullable: false
                    type:
                      type: string
                      description: The integration type
                      example: ServiceNow Service Desk
                      nullable: false
                    attributes:
                      type: object
                      description: The attributes map containing the credentials used to configure the integration.
                      nullable: true
                      example: '{"uid":"Walter White","firstname":"walter","cloudStatus":"UNREGISTERED","displayName":"Walter White","identificationNumber":"942","lastSyncDate":1470348809380,"email":"walter@gmail.com","lastname":"white"}'
                    sources:
                      type: array
                      description: The list of sources (managed resources)
                      items:
                        type: string
                      example:
                        - 2c9180835d191a86015d28455b4a2329
                        - 2c5680835d191a85765d28455b4a9823
                      nullable: false
                    cluster:
                      type: string
                      description: The cluster/proxy
                      example: xyzzy999
                      nullable: false
                    statusMap:
                      type: object
                      description: Custom mapping between the integration result and the provisioning result
                      example:
                        closed_cancelled: Failed
                        closed_complete: Committed
                        closed_incomplete: Failed
                        closed_rejected: Failed
                        in_process: Queued
                        requested: Queued
                    request:
                      type: object
                      description: Request data to customize desc and body of the created ticket
                      example:
                        description: SailPoint Access Request,
                        req_description: The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,
                        req_short_description: SailPoint New Access Request Created from IdentityNow,
                        short_description: SailPoint Access Request $!plan.arguments.identityRequestId
                    beforeProvisioningRule:
                      description: Before provisioning rule of integration
                      properties:
                        type:
                          type: string
                          enum:
                            - ACCOUNT_CORRELATION_CONFIG
                            - ACCESS_PROFILE
                            - ACCESS_REQUEST_APPROVAL
                            - ACCOUNT
                            - APPLICATION
                            - CAMPAIGN
                            - CAMPAIGN_FILTER
                            - CERTIFICATION
                            - CLUSTER
                            - CONNECTOR_SCHEMA
                            - ENTITLEMENT
                            - GOVERNANCE_GROUP
                            - IDENTITY
                            - IDENTITY_PROFILE
                            - IDENTITY_REQUEST
                            - MACHINE_IDENTITY
                            - LIFECYCLE_STATE
                            - PASSWORD_POLICY
                            - ROLE
                            - RULE
                            - SOD_POLICY
                            - SOURCE
                            - TAG
                            - TAG_CATEGORY
                            - TASK_RESULT
                            - REPORT_RESULT
                            - SOD_VIOLATION
                            - ACCOUNT_ACTIVITY
                            - WORKGROUP
                          description: An enumeration of the types of DTOs supported within the IdentityNow infrastructure.
                          example: IDENTITY
                          title: dtotype
                        id:
                          type: string
                          description: ID of the rule
                          example: 2c918085708c274401708c2a8a760001
                        name:
                          type: string
                          description: Human-readable display name of the rule
                          example: Example Rule
        required: true
      responses:
        '200':
          description: details of the created integration
          content:
            application/json:
              schema:
                allOf:
                  - type: object
                    description: Service Desk integration's specification.
                    required:
                      - name
                      - description
                      - type
                      - attributes
                    properties:
                      id:
                        type: string
                        description: Unique identifier for the Service Desk integration
                        example: 62945a496ef440189b1f03e3623411c8
                      name:
                        description: Service Desk integration's name. The name must be unique.
                        type: string
                        example: Service Desk Integration Name
                      created:
                        type: string
                        format: date-time
                        description: The date and time the Service Desk integration was created
                        example: '2024-01-17T18:45:25.994Z'
                      modified:
                        type: string
                        format: date-time
                        description: The date and time the Service Desk integration was last modified
                        example: '2024-02-18T18:45:25.994Z'
                      description:
                        description: Service Desk integration's description.
                        type: string
                        example: A very nice Service Desk integration
                      type:
                        description: |
                          Service Desk integration types:

                          - ServiceNowSDIM
                          - ServiceNow
                        type: string
                        default: ServiceNowSDIM
                        example: ServiceNowSDIM
                      ownerRef:
                        allOf:
                          - type: object
                            title: Owner Dto
                            description: Owner's identity.
                            properties:
                              type:
                                type: string
                                description: Owner's DTO type.
                                enum:
                                  - IDENTITY
                                example: IDENTITY
                              id:
                                type: string
                                description: Owner's identity ID.
                                example: 2c9180a46faadee4016fb4e018c20639
                              name:
                                type: string
                                description: Owner's name.
                                example: Support
                      clusterRef:
                        allOf:
                          - type: object
                            title: Source Cluster Dto
                            description: Source cluster.
                            properties:
                              type:
                                type: string
                                description: Source cluster DTO type.
                                enum:
                                  - CLUSTER
                                example: CLUSTER
                              id:
                                type: string
                                description: Source cluster ID.
                                example: 2c9180847a7fccdd017aa5896f9f4f6f
                              name:
                                type: string
                                description: Source cluster display name.
                                example: Training VA
                      cluster:
                        description: Cluster ID for the Service Desk integration (replaced by clusterRef, retained for backward compatibility).
                        type: string
                        example: xyzzy999
                        deprecated: true
                        nullable: true
                      managedSources:
                        description: Source IDs for the Service Desk integration (replaced by provisioningConfig.managedSResourceRefs, but retained here for backward compatibility).
                        type: array
                        items:
                          type: string
                        deprecated: true
                        example:
                          - 2c9180835d191a86015d28455b4a2329
                          - 2c5680835d191a85765d28455b4a9823
                      provisioningConfig:
                        description: The 'provisioningConfig' property specifies the configuration used to provision integrations.
                        type: object
                        title: Provisioning Config
                        properties:
                          universalManager:
                            description: Specifies whether this configuration is used to manage provisioning requests for all sources from the org.  If true, no managedResourceRefs are allowed.
                            type: boolean
                            readOnly: true
                            default: false
                            example: true
                          managedResourceRefs:
                            description: References to sources for the Service Desk integration template.  May only be specified if universalManager is false.
                            type: array
                            items:
                              allOf:
                                - type: object
                                  title: Service Desk Source
                                  description: Source for Service Desk integration template.
                                  properties:
                                    type:
                                      type: string
                                      description: DTO type of source for service desk integration template.
                                      enum:
                                        - SOURCE
                                      example: SOURCE
                                    id:
                                      type: string
                                      description: ID of source for service desk integration template.
                                      example: 2c9180835d191a86015d28455b4b232a
                                    name:
                                      type: string
                                      description: Human-readable name of source for service desk integration template.
                                      example: HR Active Directory
                            example:
                              - type: SOURCE
                                id: 2c9180855d191c59015d291ceb051111
                                name: My Source 1
                              - type: SOURCE
                                id: 2c9180855d191c59015d291ceb052222
                                name: My Source 2
                          planInitializerScript:
                            description: This is a reference to a plan initializer script.
                            type: object
                            nullable: true
                            properties:
                              source:
                                description: This is a Rule that allows provisioning instruction changes.
                                type: string
                                example: |
                                  <?xml version='1.0' encoding='UTF-8'?>\r\n<!DOCTYPE Rule PUBLIC \"sailpoint.dtd\" \"sailpoint.dtd\">\r\n<Rule name=\"Example Rule\" type=\"BeforeProvisioning\">\r\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\r\n  <Source><![CDATA[\r\nimport sailpoint.object.*;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\r\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\r\nimport sailpoint.object.ProvisioningPlan;\r\nimport sailpoint.object.ProvisioningPlan.Operation;\r\n\r\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n}\r\n\r\n  ]]></Source>
                          noProvisioningRequests:
                            description: Name of an attribute that when true disables the saving of ProvisioningRequest objects whenever plans are sent through this integration.
                            type: boolean
                            default: false
                            example: true
                          provisioningRequestExpiration:
                            description: When saving pending requests is enabled, this defines the number of hours the request is allowed to live before it is considered expired and no longer affects plan compilation.
                            type: integer
                            format: int32
                            example: 7
                      attributes:
                        description: Service Desk integration's attributes. Validation constraints enforced by the implementation.
                        type: object
                        additionalProperties: true
                        example:
                          property: value
                          key: value
                      beforeProvisioningRule:
                        allOf:
                          - type: object
                            title: Before Provisioning Rule Dto
                            description: Before Provisioning Rule.
                            properties:
                              type:
                                type: string
                                description: Before Provisioning Rule DTO type.
                                enum:
                                  - RULE
                                example: RULE
                              id:
                                type: string
                                description: Before Provisioning Rule ID.
                                example: 048eb3d55c5a4758bd07dccb87741c78
                              name:
                                type: string
                                description: Rule display name.
                                example: Before Provisioning Airtable Rule
                title: servicedeskintegrationdto
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
