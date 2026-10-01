## OpenAPI

```yaml GET /connectors/v1/{scriptName}
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
  /connectors/v1/{scriptName}:
    get:
      description: 'Fetches a connector that using its script name.    '
      operationId: getConnectorV1
      security:
        - userAuth:
            - idn:connector-config:read
            - idn:connector-config:manage
      parameters:
        - name: scriptName
          in: path
          description: The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
          required: true
          x-sailpoint-resource-operation-id: getConnectorListV1
          style: simple
          explode: false
          schema:
            type: string
            example: aScriptName
        - in: query
          name: locale
          required: false
          schema:
            type: string
            enum:
              - de
              - 'no'
              - fi
              - sv
              - ru
              - pt
              - ko
              - zh-TW
              - en
              - it
              - fr
              - zh-CN
              - hu
              - es
              - cs
              - ja
              - pl
              - da
              - nl
            example: de
          description: The locale to apply to the config. If no viable locale is given, it will default to "en"
      responses:
        '200':
          description: A Connector Dto object
          content:
            application/json:
              schema:
                type: object
                title: Connector Detail
                properties:
                  name:
                    type: string
                    description: The connector name
                    example: name
                  type:
                    type: string
                    description: The connector type
                    example: ServiceNow
                  className:
                    type: string
                    description: The connector class name
                    example: class name
                  scriptName:
                    type: string
                    description: The connector script name
                    example: servicenow
                  applicationXml:
                    type: string
                    description: The connector application xml
                    example: |
                      <?xml version='1.0' encoding='UTF-8'?>
                      <!DOCTYPE Application PUBLIC "sailpoint.dtd" "sailpoint.dtd">
                      <Application connector="sailpoint.connector.OpenConnectorAdapter" name="custom Atlassian Suite - Cloud" type="custom Atlassian Suite - Cloud"/>
                  provisioningPolicies:
                    type: array
                    description: Default provisioning policies parsed from the connector application XML templates. Always an array; empty when the connector ships no templates.
                    nullable: false
                    items:
                      type: object
                      title: Provisioning Policy Dto
                      required:
                        - name
                      properties:
                        name:
                          nullable: true
                          type: string
                          description: the provisioning policy name
                          example: example provisioning policy for inactive identities
                        description:
                          type: string
                          description: the description of the provisioning policy
                          example: this provisioning policy creates access based on an identity going inactive
                        usageType:
                          type: string
                          nullable: false
                          enum:
                            - CREATE
                            - UPDATE
                            - ENABLE
                            - DISABLE
                            - DELETE
                            - ASSIGN
                            - UNASSIGN
                            - CREATE_GROUP
                            - UPDATE_GROUP
                            - DELETE_GROUP
                            - REGISTER
                            - CREATE_IDENTITY
                            - UPDATE_IDENTITY
                            - EDIT_GROUP
                            - UNLOCK
                            - CHANGE_PASSWORD
                          example: CREATE
                          description: |-
                            The type of provisioning policy usage. 
                            In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined. 
                            These are the common usage types: 
                            CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.  
                            UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source.
                            ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created. 
                            DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.
                            You can use these usage types for all your provisioning policy needs. 
                          title: usagetype
                        fields:
                          type: array
                          items:
                            type: object
                            title: Field Details Dto
                            properties:
                              name:
                                type: string
                                description: The name of the attribute.
                                example: userName
                              transform:
                                type: object
                                description: The transform to apply to the field
                                example:
                                  type: rule
                                  attributes:
                                    name: Create Unique LDAP Attribute
                                default: {}
                              attributes:
                                type: object
                                description: Attributes required for the transform
                                example:
                                  template: '{firstname}.{lastname}{uniqueCounter}'
                                  cloudMaxUniqueChecks: '50'
                                  cloudMaxSize: '20'
                                  cloudRequired: 'true'
                              isRequired:
                                type: boolean
                                readOnly: true
                                description: Flag indicating whether or not the attribute is required.
                                default: false
                                example: false
                              type:
                                type: string
                                description: |
                                  The type of the attribute.

                                  string: For text-based data.

                                  int: For whole numbers.

                                  long: For larger whole numbers.

                                  date: For date and time values.

                                  boolean: For true/false values.

                                  secret: For sensitive data like passwords, which will be masked and encrypted.
                                enum:
                                  - string
                                  - int
                                  - long
                                  - date
                                  - boolean
                                  - secret
                                example: string
                              isMultiValued:
                                type: boolean
                                description: Flag indicating whether or not the attribute is multi-valued.
                                default: false
                                example: false
                    example:
                      - name: Account
                        description: Create Account Profile
                        usageType: CREATE
                        fields:
                          - name: distinguishedName
                            transform:
                              type: identityAttribute
                              attributes:
                                name: email
                            attributes: {}
                            isRequired: true
                            type: string
                            isMultiValued: false
                    title: provisioningpolicies
                  correlationConfigXml:
                    type: string
                    description: The connector correlation config xml
                    example: "<?xml version='1.0' encoding='UTF-8'?>\n<!-- Copyright (C) 2021 SailPoint Technologies, Inc.  All rights reserved. -->\n\n<!DOCTYPE CorrelationConfig PUBLIC \"sailpoint.dtd\" \"sailpoint.dtd\">\n\n<CorrelationConfig name=\"custom Atlassian Suite - Cloud Account Correlation Config\">\n\t<AttributeAssignments>\n\t\t<Filter operation=\"EQ\" property=\"email\" value=\"mail\"/>\n\t\t<Filter operation=\"EQ\" property=\"empId\" value=\"employeeNumber\"/>\n\t\t<Filter operation=\"EQ\" property=\"displayName\" value=\"cn\"/>\n\t</AttributeAssignments>\n</CorrelationConfig>\n"
                  sourceConfigXml:
                    type: string
                    description: The connector source config xml
                    example: |-
                      <?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Copyright (C) 2023 SailPoint Technologies, Inc.  All rights reserved. --><Form xmlns="http://www.sailpoint.com/xsd/sailpoint_form_2_0.xsd" connectorName="custom Atlassian Suite - Cloud" directConnect="true" fileUpload="true" name="Custom Atlassian Suite - Cloud" status="released" type="SourceConfig">
                          <BaseConfig>
                              <Field maxFiles="10" maxSize="300" name="fileUpload" supportedExtensions="jar" type="fileupload" validateJSON="false"/>
                          </BaseConfig>
                        

                       
                      </Form>
                  sourceConfig:
                    type: string
                    nullable: true
                    description: The connector source config
                    example: |-
                      <?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Copyright (C) 2023 SailPoint Technologies, Inc.  All rights reserved. --><Form xmlns="http://www.sailpoint.com/xsd/sailpoint_form_2_0.xsd" connectorName="custom Atlassian Suite - Cloud" directConnect="true" fileUpload="true" name="Custom Atlassian Suite - Cloud" status="released" type="SourceConfig">
                          <BaseConfig>
                              <Field maxFiles="10" maxSize="300" name="fileUpload" supportedExtensions="jar" type="fileupload" validateJSON="false"/>
                          </BaseConfig>
                        

                       
                      </Form>
                  sourceConfigFrom:
                    type: string
                    nullable: true
                    description: The connector source config origin
                    example: sp-connect
                  s3Location:
                    type: string
                    description: storage path key for this connector
                    example: custom-connector/scriptname
                  uploadedFiles:
                    type: array
                    description: The list of uploaded files supported by the connector. If there was any executable files uploaded to thee connector. Typically this be empty as the executable be uploaded at source creation.
                    nullable: true
                    items:
                      type: string
                    example:
                      - pod/org/connectorFiles/testconnector/test1.jar
                  fileUpload:
                    type: boolean
                    description: true if the source is file upload
                    example: true
                    default: false
                  directConnect:
                    type: boolean
                    description: true if the source is a direct connect source
                    example: true
                    default: false
                  translationProperties:
                    type: object
                    description: A map containing translation attributes by loacale key
                    additionalProperties: true
                    example:
                      de: |-
                        # Copyright (C) 2024 SailPoint Technologies, Inc.  All rights reserved.
                        # DO NOT EDIT. This file is generated by "sailpointTranslate" command.
                        menuLabel_ConnectionSettings=Verbindungseinstellungen
                        menuLabel_AggregationSettings=Aggregationseinstellungen
                        sectionLabel_AuthenticationSettings=Verbindungseinstellungen
                        sectionLabel_AggregationSettings=Aggregationseinstellungen
                        sectionInfo_AuthenticationSettings=Konfigurieren Sie eine direkte Verbindung zwischen der Quelle Delinea Secret Server On-Premise und IdentityNow.<br><br>Geben Sie bei <strong>Zeit\u00fcberschreitung bei Verbindung</strong> die maximal erlaubte Zeitdauer (in Minuten) f\u00fcr die Verbindung von IdentityNow mit der Quelle ein.<br><br>Geben Sie die <strong>Host-URL</strong> der Delinea-SCIM-Serverquelle ein.<br><br>Geben Sie den <strong>API-Token</strong> der Quelle zur Authentifizierung ein.
                        sectionInfo_AggregationSettings=Geben Sie die Einstellungen f\u00fcr Ihre Aggregation an.<br><br>Geben Sie in das Feld  <strong>Seitengr\u00f6\u00dfe</strong> die Anzahl an Kontoeintr\u00e4gen ein, die auf einer einzelnen Seite aggregiert werden sollen, wenn gro\u00dfe Datens\u00e4tze durchlaufen werden.<br>\n<br>Geben Sie im <strong>Kontofilter</strong> die Bedingungen f\u00fcr den Kontofilter an. Beispiel: userName sw "S"<br><br>Geben Sie im <strong>Gruppenfilter</strong> die Gruppenfilterbedingungen an. Beispiel: displayName sw "S".
                        placeHolder_accAggregation=userName sw "S"
                        placeHolder_grpAggregation=displayName sw "S"
                        placeHolder_host=https://{Delinea_SCIM_Server_host}/v2
                        docLinkLabel_AuthenticationSettings=Mehr \u00fcber Verbindungseinstellungen
                        docLinkLabel_Filters=Mehr \u00fcber Konto- und Gruppenfilter
                        HostURL=Host-URL
                        ConnectionTimeout=Zeit\u00fcberschreitung bei Verbindung
                        API_TOKEN=API-Token
                        JSONPathMapping=JSON-Path-Attribut-Mapping
                        FilterConditionForAccounts=Kontofilter
                        FilterConditionForGroups=Gruppenfilter
                        Page_Size=Seitengr\u00f6\u00dfe
                        SchemaAttribute=Schema-Attribut
                        JSONpath=JSON-Pfad
                        ShortDesc=Das Integrationsmodul IdentityNow f\u00fcr Delinea Secret Server On-Premise bietet die M\u00f6glichkeit einer tiefen Governance f\u00fcr Konten und Gruppen. Es unterst\u00fctzt au\u00dferdem das End-to-End-Lebenszyklus-Management.
                  connectorMetadata:
                    type: object
                    description: A map containing metadata pertinent to the UI to be used
                    additionalProperties: true
                    example:
                      supportedUI: EXTJS
                      platform: ccg
                      shortDesc: connector description
                  status:
                    type: string
                    enum:
                      - DEPRECATED
                      - DEVELOPMENT
                      - DEMO
                      - RELEASED
                    description: The connector status
                    example: RELEASED
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
