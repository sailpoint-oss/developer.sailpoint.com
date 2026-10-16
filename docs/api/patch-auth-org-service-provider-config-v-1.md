## OpenAPI

```yaml PATCH /auth-org/v1/service-provider-config
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
  /auth-org/v1/service-provider-config:
    patch:
      description: This API updates an existing service provider configuration for an org using PATCH.
      operationId: patchAuthOrgServiceProviderConfigV1
      security:
        - userAuth:
            - sp:auth-org:manage
        - applicationAuth:
            - sp:auth-org:manage
      requestBody:
        required: true
        description: |-
          A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
          Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails
          Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:
            1. Do not add or remove any elements in the federation protocol details
          in the service provider configuration.
            2. Do not modify, add, or delete the service provider details element in
          the federation protocol details.
            3. If this is the first time the patched ServiceProviderConfig enables
          Remote IDP sign-in, it must also include IDPDetails.
            4. If the patch enables Remote IDP sign in, the entityID in the
          IDPDetails cannot be null. IDPDetails must include an entityID.
            5. Any JIT configuration update must be valid.

          Just in time configuration update must be valid when enabled. This includes:
            - A Source ID
            - Source attribute mappings
            - Source attribute maps have all the required key values (firstName,
          lastName, email)
        content:
          application/json-patch+json:
            schema:
              type: array
              items:
                type: object
                title: Json Patch Operation
                description: A JSONPatch Operation as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)
                required:
                  - op
                  - path
                properties:
                  op:
                    type: string
                    description: The operation to be performed
                    enum:
                      - add
                      - remove
                      - replace
                      - move
                      - copy
                      - test
                    example: replace
                  path:
                    type: string
                    description: A string JSON Pointer representing the target path to an element to be affected by the operation
                    example: /description
                  value:
                    oneOf:
                      - type: string
                        example: New description
                        title: string
                      - type: boolean
                        example: true
                        title: boolean
                      - type: integer
                        example: 300
                        title: integer
                      - type: object
                        title: object
                        example:
                          attributes:
                            name: philip
                      - type: array
                        title: array
                        items:
                          anyOf:
                            - type: string
                            - type: integer
                            - type: object
                          example:
                            - '001'
                            - '002'
                            - '003'
                    description: The value to be used for the operation, required for "add" and "replace" operations
                    example: New description
            example:
              - op: replace
                path: /enabled
                value: true,
              - op: add
                path: /federationProtocolDetails/0/jitConfiguration
                value:
                  enabled: true
                  sourceId: 2c9180857377ed2901739c12a2da5ac8
                  sourceAttributeMappings:
                    firstName: okta.firstName
                    lastName: okta.lastName
                    email: okta.email
                    employeeNumber: okta.employeeNumber
      responses:
        '200':
          description: Auth Org Service Provider configuration updated.
          content:
            application/json:
              schema:
                description: Represents the IdentityNow as Service Provider Configuration allowing customers to log into IDN via an Identity Provider
                type: object
                title: Service Provider Configuration
                properties:
                  enabled:
                    description: This determines whether or not the SAML authentication flow is enabled for an org
                    type: boolean
                    example: true
                    default: false
                  bypassIdp:
                    description: This allows basic login with the parameter prompt=true. This is often toggled on when debugging SAML authentication setup. When false, only org admins with MFA-enabled can bypass the IDP.
                    type: boolean
                    example: true
                    default: false
                  samlConfigurationValid:
                    description: This indicates whether or not the SAML configuration is valid.
                    type: boolean
                    example: true
                    default: false
                  federationProtocolDetails:
                    description: A list of the abstract implementations of the Federation Protocol details. Typically, this will include on SpDetails object and one IdpDetails object used in tandem to define a SAML integration between a customer's identity provider and a customer's SailPoint instance (i.e., the service provider).
                    type: array
                    items:
                      anyOf:
                        - allOf:
                            - type: object
                              title: Federation Protocol Details
                              properties:
                                role:
                                  type: string
                                  description: Federation protocol role
                                  example: SAML_IDP
                                  enum:
                                    - SAML_IDP
                                    - SAML_SP
                                entityId:
                                  type: string
                                  description: An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP).
                                  example: http://www.okta.com/exkdaruy8Ln5Ry7C54x6
                            - type: object
                              description: Specification of Identity Provider Details section of Service Provider Config
                              required:
                                - mappingAttribute
                              properties:
                                binding:
                                  type: string
                                  description: Defines the binding used for the SAML flow. Used with IDP configurations.
                                  example: urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST
                                authnContext:
                                  type: string
                                  description: Specifies the SAML authentication method to use. Used with IDP configurations.
                                  example: urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport
                                logoutUrl:
                                  type: string
                                  description: The IDP logout URL. Used with IDP configurations.
                                  example: https://dev-206445.oktapreview.com/login/signout
                                includeAuthnContext:
                                  type: boolean
                                  description: Determines if the configured AuthnContext should be used or the default. Used with IDP configurations.
                                  default: false
                                  example: false
                                nameId:
                                  type: string
                                  description: The name id format to use. Used with IDP configurations.
                                  example: urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress
                                jitConfiguration:
                                  type: object
                                  title: JIT Configuration
                                  properties:
                                    enabled:
                                      type: boolean
                                      description: The indicator for just-in-time provisioning enabled
                                      default: false
                                      example: false
                                    sourceId:
                                      type: string
                                      description: the sourceId that mapped to just-in-time provisioning configuration
                                      example: 2c9180857377ed2901739c12a2da5ac8
                                    sourceAttributeMappings:
                                      type: object
                                      description: A mapping of identity profile attribute names to SAML assertion attribute names
                                      additionalProperties:
                                        type: string
                                        description: a mapping of JIT source attributes to the SAML assertion attribute
                                      example:
                                        firstName: okta.firstName
                                        lastName: okta.lastName
                                        email: okta.email
                                cert:
                                  type: string
                                  description: The Base64-encoded certificate used by the IDP. Used with IDP configurations.
                                  example: '-----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----'
                                loginUrlPost:
                                  type: string
                                  description: The IDP POST URL, used with IDP HTTP-POST bindings for IDP-initiated logins. Used with IDP configurations.
                                  example: https://dev-157216.okta.com/app/sailpointdev157216_cdovsaml_1/exkdaruy8Ln5Ry7C54x6/sso/saml
                                loginUrlRedirect:
                                  type: string
                                  description: The IDP Redirect URL. Used with IDP configurations.
                                  example: https://dev-157216.okta.com/app/sailpointdev157216_cdovsaml_1/exkdaruy8Ln5Ry7C54x6/sso/saml
                                mappingAttribute:
                                  type: string
                                  description: Return the saml Id for the given user, based on the IDN as SP settings of the org. Used with IDP configurations.
                                  example: email
                                certificateExpirationDate:
                                  type: string
                                  description: The expiration date extracted from the certificate.
                                  example: Fri Mar 08 08:54:24 UTC 2013
                                certificateName:
                                  type: string
                                  description: The name extracted from the certificate.
                                  example: OU=Conext, O=Surfnet, L=Utrecht, ST=Utrecht, C=NL
                          title: idpdetails
                        - allOf:
                            - type: object
                              title: Federation Protocol Details
                              properties:
                                role:
                                  type: string
                                  description: Federation protocol role
                                  example: SAML_IDP
                                  enum:
                                    - SAML_IDP
                                    - SAML_SP
                                entityId:
                                  type: string
                                  description: An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP).
                                  example: http://www.okta.com/exkdaruy8Ln5Ry7C54x6
                            - type: object
                              description: Specification of a Service Provider Details
                              properties:
                                alias:
                                  type: string
                                  description: Unique alias used to identify the selected local service provider based on used URL. Used with SP configurations.
                                  example: acme-sp
                                callbackUrl:
                                  type: string
                                  description: The allowed callback URL where users will be redirected to after authentication. Used with SP configurations.
                                  example: https://example-tenant.identitynow.com/sso/Consumer/metaAlias/example-tenant-sp
                                legacyAcsUrl:
                                  type: string
                                  description: The legacy ACS URL used for SAML authentication. Used with SP configurations.
                                  example: https://megapod-useast1-sso.identitysoon.com/sso/Consumer/metaAlias/acme/sp
                              required:
                                - callbackUrl
                          title: spdetails
                    example:
                      - role: SAML_IDP
                        entityId: http://www.okta.com/exktq4o24bmQA4fr60h7
                        cert: MIIDpDCCAoygAwIBAgIGAYhZ+b29MA0GCSqGSIb3DQEBCwUAMIGSMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEUMBIGA1UECwwLU1NPUHJvdmlkZXIxEzARBgNVBAMMCmRldi0yMDY0NDUxHDAaBgkqhkiG9w0BCQEWDWluZm9Ab2t0YS5jb20wHhcNMjMwNTI2MjEzMDU5WhcNMzMwNTI2MjEzMTU5WjCBkjELMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xDTALBgNVBAoMBE9rdGExFDASBgNVBAsMC1NTT1Byb3ZpZGVyMRMwEQYDVQQDDApkZXYtMjA2NDQ1MRwwGgYJKoZIhvcNAQkBFg1pbmZvQG9rdGEuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwvi1+WbF2ceGlLCrLl5PrG1lpj04IsrHX6OE666ObC2WFh+Nxvpxy+Vmzon9c9+akhK3bTv+9ifEoVc6tA1qWuCfXISAn9g81JqI68I1PGUbe6eF8pmOA18rjOrt7x94k4QukpR3+I8DfPJ+TynatltB51laLb8H4jchMafA4rDTjV/ZiYPxV0LMEIbprVyGuvBEhiEWha3wwVdDuJq996okX36YNS8PcGH+5CJ8c3YWZp/wrspgJmfCooMXeV+6zBpZfXqPpMWlUo0gcZqDOFgy3r4vkXehJdVYRlInMfDv04Lvy8VI1YAZClG/duO/6o9YVUFLjD9s+mQfhgaF5wIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQB1CTrA/pTHkarbhMHsdSFAjVoYWwdAfrssG99rIjwwr/CW9tavTC3keaoUmUeddcnLY4V/TfL07+xgQGHCBR88cnzG9h6rC9qWxt6C3nug3YDVQfkdCDgnW9A8QEvLeq/KVLoRccpJNEENb2Y5ESUXHi1+PtjkFBtvfSgZ4eEhVggirL0bJdWVm700hCnjb2iCGSbSX7WflfPi0GSmjht983caG9OwZDnDzNFt8qGWCxo4bNSThT00JnWEN/6f1BWNOt9YDrxqEyNclqhLL+RDqFsPBFIrQlsoXzqpWqCL8oS9UMNxbGATK2v3d5ueE9+SswBAFBhirCuqZw19Ri2W
                        loginUrlPost: https://dev-206445.oktapreview.com/app/tivolidev206445_acmeidntest_1/exktq4o24bmQA4fr60h7/sso/saml
                        loginUrlRedirect: https://dev-206445.oktapreview.com/app/tivolidev206445_acmeidntest_1/exktq4o24bmQA4fr60h7/sso/saml
                        logoutUrl: https://dev-206445.oktapreview.com/login/signout
                        nameId: urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress
                        binding: urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST
                        authnContext: urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport
                        includeAuthnContext: true
                        mappingAttribute: email
                        jitConfiguration:
                          enabled: true
                          sourceId: 2c9180897427f3a501745042afc83144
                          sourceAttributeMappings:
                            firstName: okta.firstName
                            lastName: okta.lastName
                            email: okta.email
                        certificateExpirationDate: Thu May 26 21:31:59 GMT 2033
                        certificateName: EMAILADDRESS=info@okta.com, CN=dev-206445, OU=SSOProvider, O=Okta, L=San Francisco, ST=California, C=US
                      - role: SAML_SP
                        entityId: https://acme.identitysoon.com/sp
                        alias: acme-sp
                        callbackUrl: https://acme.test-login.sailpoint.com/saml/SSO/alias/acme-sp
                        legacyAcsUrl: https://megapod-useast1-sso.identitysoon.com/sso/Consumer/metaAlias/acme/sp
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
              examples:
                400.1 Bad Request Content:
                  description: Response for bad request content
                  value:
                    detailCode: 400.1 Bad Request Content
                    trackingId: e7eab60924f64aa284175b9fa3309599
                    messages:
                      - locale: en
                        localeOrigin: REQUEST
                        text: firstName is required; accountName is required;
                400.1.3 Illegal value:
                  description: Response for Illegal value
                  value:
                    detailCode: 400.1.3 Illegal value
                    trackingId: e7eab60924f64aa284175b9fa3309599
                    messages:
                      - locale: en
                        localeOrigin: REQUEST
                        text: JIT source id is invalid.
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
