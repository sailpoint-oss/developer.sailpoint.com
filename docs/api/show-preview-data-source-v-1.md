## OpenAPI

```yaml POST /form-definitions/v1/{formDefinitionID}/data-source
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
  /form-definitions/v1/{formDefinitionID}/data-source:
    post:
      description: Preview form definition data source.
      operationId: showPreviewDataSourceV1
      security:
        - userAuth:
            - sp:forms:read
            - sp:forms:manage
      parameters:
        - name: formDefinitionID
          in: path
          description: Form definition ID
          required: true
          x-sailpoint-resource-operation-id: searchFormDefinitionsByTenantV1
          schema:
            type: string
            x-go-name: FormDefinitionID
          example: 00000000-0000-0000-0000-000000000000
          x-go-name: FormDefinitionID
        - name: limit
          in: query
          description: |-
            Limit

            Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results).
            If it is not specified, a default limit is used.
          schema:
            type: integer
            format: int64
            maxLength: 250
            minLength: 0
            default: 10
            x-go-name: Limit
          example: 10
          required: false
          x-go-name: Limit
        - name: filters
          in: query
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **value**: *eq, ne, in*

            Supported composite operators: *not*

            Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in ("ID01")`
          schema:
            type: string
            x-go-name: Filters
          example: value eq "ID01"
          required: false
          x-go-name: Filters
        - name: query
          in: query
          description: String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a "starts with" filter against  several fields.
          schema:
            type: string
            x-go-name: Query
          example: ac
          required: false
          x-go-name: Query
      requestBody:
        description: Body is the request payload to create a form definition dynamic schema
        content:
          application/json:
            schema:
              properties:
                dataSource:
                  properties:
                    config:
                      properties:
                        aggregationBucketField:
                          description: AggregationBucketField is the aggregation bucket field name
                          example: attributes.cloudStatus.exact
                          type: string
                          x-go-name: AggregationBucketField
                        indices:
                          description: Indices is a list of indices to use
                          example:
                            - identities
                          items:
                            enum:
                              - accessprofiles
                              - accountactivities
                              - entitlements
                              - identities
                              - events
                              - roles
                              - '*'
                            type: string
                            x-go-enum-desc: |-
                              accessprofiles SearchIndexAccessProfiles
                              accountactivities SearchIndexAccountActivities
                              entitlements SearchIndexEntitlements
                              identities SearchIndexIdentities
                              events SearchIndexEvents
                              roles SearchIndexRoles
                              * SearchIndexWildcard
                          type: array
                          x-go-name: Indices
                        objectType:
                          description: |-
                            ObjectType is a PreDefinedSelectOption value
                            IDENTITY PreDefinedSelectOptionIdentity
                            ACCESS_PROFILE PreDefinedSelectOptionAccessProfile
                            SOURCES PreDefinedSelectOptionSources
                            ROLE PreDefinedSelectOptionRole
                            ENTITLEMENT PreDefinedSelectOptionEntitlement
                          enum:
                            - IDENTITY
                            - ACCESS_PROFILE
                            - SOURCES
                            - ROLE
                            - ENTITLEMENT
                          example: IDENTITY
                          type: string
                          x-go-enum-desc: |-
                            IDENTITY PreDefinedSelectOptionIdentity
                            ACCESS_PROFILE PreDefinedSelectOptionAccessProfile
                            SOURCES PreDefinedSelectOptionSources
                            ROLE PreDefinedSelectOptionRole
                            ENTITLEMENT PreDefinedSelectOptionEntitlement
                          x-go-name: ObjectType
                        query:
                          description: Query is a text
                          example: '*'
                          type: string
                          x-go-name: Query
                      type: object
                      x-go-package: github.com/sailpoint/sp-forms/domain
                      title: formelementdynamicdatasourceconfig
                    dataSourceType:
                      description: |-
                        DataSourceType is a FormElementDataSourceType value
                        STATIC FormElementDataSourceTypeStatic
                        INTERNAL FormElementDataSourceTypeInternal
                        SEARCH FormElementDataSourceTypeSearch
                        FORM_INPUT FormElementDataSourceTypeFormInput
                      enum:
                        - STATIC
                        - INTERNAL
                        - SEARCH
                        - FORM_INPUT
                      example: STATIC
                      type: string
                      x-go-enum-desc: |-
                        STATIC FormElementDataSourceTypeStatic
                        INTERNAL FormElementDataSourceTypeInternal
                        SEARCH FormElementDataSourceTypeSearch
                        FORM_INPUT FormElementDataSourceTypeFormInput
                      x-go-name: DataSourceType
                  type: object
                  x-go-package: github.com/sailpoint/sp-forms/domain
                  title: formelementdynamicdatasource
              type: object
              x-go-package: github.com/sailpoint/sp-forms/domain
              title: formelementpreviewrequest
        required: false
      responses:
        '200':
          description: Returns a preview of a form definition data source
          content:
            application/json:
              schema:
                description: PreviewDataSourceResponse is the response sent by `/form-definitions/{formDefinitionID}/data-source` endpoint
                properties:
                  results:
                    description: Results holds a list of FormElementDataSourceConfigOptions items
                    example: '{"results":[{"label":"Alfred 255e71dfc6e","subLabel":"Alfred.255e71dfc6e@testmail.identitysoon.com","value":"2c918084821847c5018227ced2e16676"},{"label":"Alize eba9d4cd27da","subLabel":"Alize.eba9d4cd27da@testmail.identitysoon.com","value":"2c918084821847c5018227ced2f1667c"},{"label":"Antonina 01f69c3ea","subLabel":"Antonina.01f69c3ea@testmail.identitysoon.com","value":"2c918084821847c5018227ced2f9667e"},{"label":"Ardella 21e78ce155","subLabel":"Ardella.21e78ce155@testmail.identitysoon.com","value":"2c918084821847c5018227ced2e6667a"},{"label":"Arnaldo d8582b6e17","subLabel":"Arnaldo.d8582b6e17@testmail.identitysoon.com","value":"2c918084821847c5018227ced3426686"},{"label":"Aurelia admin24828","subLabel":"Aurelia.admin24828@testmail.identitysoon.com","value":"2c918084821847c5018227ced2e16674"},{"label":"Barbara 72ca418fdd","subLabel":"Barbara.72ca418fdd@testmail.identitysoon.com","value":"2c918084821847c5018227ced2fb6680"},{"label":"Barbara ee1a2436ee","subLabel":"Barbara.ee1a2436ee@testmail.identitysoon.com","value":"2c918084821847c5018227ced2e56678"},{"label":"Baylee 652d72432f3","subLabel":"Baylee.652d72432f3@testmail.identitysoon.com","value":"2c91808582184782018227ced28b6aee"},{"label":"Brock e76b56ae4d49","subLabel":"Brock.e76b56ae4d49@testmail.identitysoon.com","value":"2c91808582184782018227ced28b6aef"}]}'
                    items:
                      type: object
                      properties:
                        label:
                          description: Label is the main label to display to the user when selecting this option
                          type: string
                          example: regression-test-access-request-07c55dd6-3056-430a-86b5-fccc395bb6c5
                          x-go-name: Label
                        subLabel:
                          description: SubLabel is the sub label to display below the label in diminutive styling to help describe or identify this option
                          type: string
                          example: ''
                          x-go-name: SubLabel
                        value:
                          description: Value is the value to save as an entry when the user selects this option
                          type: string
                          example: e96674448eba4ca1ba04eee999a8f3cd
                          x-go-name: Value
                      x-go-package: github.com/sailpoint/sp-forms/domain
                      title: formelementdatasourceconfigoptions
                    type: array
                    x-go-name: Results
                type: object
                x-go-package: github.com/sailpoint/sp-forms/domain
                title: previewdatasourceresponse
        '400':
          description: An error with the request occurred
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
        '401':
          description: An error with the authorization occurred
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
        '403':
          description: An error with the user permissions occurred
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
        '404':
          description: An error with the item not found
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
        '429':
          description: Too many requests
          content:
            application/json:
              schema:
                title: Error is the standard API error response type.
                type: object
                properties:
                  detailCode:
                    description: DetailCode is the text of the status code returned
                    example: Internal Server Error
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  trackingId:
                    description: TrackingID is the request tracking unique identifier
                    example: 9cd03ef80e6a425eb6b11bdbb057cdb4
                    type: string
                    x-go-name: TrackingID
                x-go-package: github.com/sailpoint/atlas-go/atlas/web
        '500':
          description: An internal server error occurred
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
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
