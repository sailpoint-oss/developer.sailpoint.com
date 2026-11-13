## OpenAPI

```yaml GET /ServiceProviderConfig
openapi: 3.0.1
info:
  description: |
    IdentityIQ REST Endpoint Interface Documentation for SCIM
  version: '8.3'
  title: IdentityIQ SCIM REST API
servers:
  - url: http://localhost:8080/identityiq/scim/v2
    description: IdentityIQ SCIM server basepath and path to API.
paths:
  /ServiceProviderConfig:
    get:
      description: |
        This endpoint returns all ServiceProviderConfig resources. <br /><br />
        Attributes to include in the response can be specified with the 'attributes' query parameter. <br /><br />
        Attributes to exclude from the response can be specified with the 'excludedAttributes' query parameter. <br /><br />
        The schema related to ServiceProviderConfig is: <br />
        - **urn:ietf:params:scim:schemas:sailpoint:2.0:ServiceProviderConfig**
      operationId: ServiceProviderConfigGet
      security:
        - basicAuth: []
      responses:
        '200':
          description: Returned all SCIM resources for this endpoint.
          content:
            application/json:
              schema:
                properties:
                  totalResults:
                    description: Number of resources returned for this endpoint.
                    type: integer
                    example: 1,
                  startIndex:
                    description: The starting index of the resource set list. Can be specified with startIndex query parameter.
                    type: integer
                    example: 1
                  schemas:
                    description: SCIM Schema used for response.
                    type: array
                    items:
                      type: string
                    example:
                      - urn:ietf:params:scim:api:messages:2.0:ListResponse
                  Resources:
                    type: array
                    items:
                      required:
                        - patch
                        - etag
                        - bulk
                        - filter
                        - changePassword
                        - sort
                        - authenticationSchemes
                      properties:
                        documentationUri:
                          description: An HTTP addressable URL pointing to the service provider's human consumable help documentation.
                          type: string
                          example: https://community.sailpoint.com/community/identityiq/product-downloads
                        patch:
                          description: A complex type that specifies PATCH configuration options.
                          type: object
                          required:
                            - supported
                          properties:
                            supported:
                              type: boolean
                              description: Boolean value specifying whether the operation is supported.
                              example: false
                        etag:
                          description: A complex type that specifies ETAG configuration options.
                          type: object
                          required:
                            - supported
                          properties:
                            supported:
                              description: Boolean value specifying whether the operation is supported.
                              type: boolean
                        bulk:
                          description: A complex type that specifies ETAG configuration options.
                          type: object
                          required:
                            - supported
                            - maxOperations
                            - maxPayloadSize
                          properties:
                            supported:
                              description: Boolean value specifying whether the operation is supported.
                              type: boolean
                              example: false
                            maxOperations:
                              description: An integer value specifying the maximum number of operations.
                              type: integer
                              example: 3
                            maxPayloadSize:
                              description: An integer value specifying the maximum payload size in bytes.
                              type: integer
                              example: 128
                        filter:
                          description: A complex type that specifies FILTER options.
                          type: object
                          required:
                            - supported
                            - maxResults
                          properties:
                            supported:
                              description: Boolean value specifying whether the operation is supported.
                              type: boolean
                              example: true
                            maxResults:
                              description: Integer value specifying the maximum number of resources returned in a response.
                              type: integer
                              example: 10
                        changePassword:
                          description: A complex type that specifies change password options.
                          type: object
                          required:
                            - supported
                          properties:
                            supported:
                              description: Boolean value specifying whether the operation is supported.
                              type: boolean
                              example: false
                        sort:
                          description: A complex type that specifies sort result options.
                          type: object
                          required:
                            - supported
                          properties:
                            supported:
                              description: Boolean value specifying whether the operation is supported.
                              type: boolean
                              example: false
                        authenticationSchemes:
                          description: A complex type that specifies supported Authentication Scheme properties.
                          type: object
                          required:
                            - name
                            - description
                            - type
                          properties:
                            name:
                              description: The common authentication scheme name; e.g., HTTP Basic.
                              type: string
                              example: HTTP Basic
                            description:
                              description: A description of the authentication scheme.
                              type: string
                              example: Authentication Scheme using the Http Basic Standard.
                            specUri:
                              description: An HTTP addressable URL pointing to the Authentication Scheme's specification.
                              type: string
                              example: http://www.ietf.org/rfc/rfc2617.txt
                            documentationUri:
                              description: An HTTP addressable URL pointing to the Authentication Scheme's usage documentation.
                              type: string
                              example: https://community.sailpoint.com/community/identityiq/product-downloads
                            type:
                              type: string
                              description: The authentication scheme.
                              enum:
                                - oauth
                                - oauth2
                                - oauthbearertoken
                                - httpbasic
                                - httpdigest
                              example: oauthbearertoken
                        meta:
                          type: object
                          properties:
                            location:
                              type: string
                              description: URL to ServiceProviderConfig resource.
                              example: http://localhost:8080/identityiq/scim/v2/ServiceProviderConfig
                            resourceType:
                              type: string
                              description: Resource type of the metadata subject.
                              example: ServiceProviderConfig
            application/scim+json:
              schema:
                properties:
                  maxResults:
                    description: Number of ServiceProviderConfig resources returned.
                    type: integer
                    example: 1500,
                  supported:
                    type: boolean
                    example: true
                  schemas:
                    description: SCIM Schema used for response.
                    type: array
                    items:
                      type: string
                    example:
                      - urn:ietf:params:scim:api:messages:2.0:ListResponse
                  Resources:
                    description: The SCIM resources returned for this endpoint.
                    type: array
                    items:
                      required:
                        - patch
                        - etag
                        - bulk
                        - filter
                        - changePassword
                        - sort
                        - authenticationSchemes
                      properties:
                        documentationUri:
                          description: An HTTP addressable URL pointing to the service provider's human consumable help documentation.
                          type: string
                          example: https://community.sailpoint.com/community/identityiq/product-downloads
                        patch:
                          description: A complex type that specifies PATCH configuration options.
                          type: object
                          required:
                            - supported
                          properties:
                            supported:
                              type: boolean
                              description: Boolean value specifying whether the operation is supported.
                              example: false
                        etag:
                          description: A complex type that specifies ETAG configuration options.
                          type: object
                          required:
                            - supported
                          properties:
                            supported:
                              description: Boolean value specifying whether the operation is supported.
                              type: boolean
                        bulk:
                          description: A complex type that specifies ETAG configuration options.
                          type: object
                          required:
                            - supported
                            - maxOperations
                            - maxPayloadSize
                          properties:
                            supported:
                              description: Boolean value specifying whether the operation is supported.
                              type: boolean
                              example: false
                            maxOperations:
                              description: An integer value specifying the maximum number of operations.
                              type: integer
                              example: 3
                            maxPayloadSize:
                              description: An integer value specifying the maximum payload size in bytes.
                              type: integer
                              example: 128
                        filter:
                          description: A complex type that specifies FILTER options.
                          type: object
                          required:
                            - supported
                            - maxResults
                          properties:
                            supported:
                              description: Boolean value specifying whether the operation is supported.
                              type: boolean
                              example: true
                            maxResults:
                              description: Integer value specifying the maximum number of resources returned in a response.
                              type: integer
                              example: 10
                        changePassword:
                          description: A complex type that specifies change password options.
                          type: object
                          required:
                            - supported
                          properties:
                            supported:
                              description: Boolean value specifying whether the operation is supported.
                              type: boolean
                              example: false
                        sort:
                          description: A complex type that specifies sort result options.
                          type: object
                          required:
                            - supported
                          properties:
                            supported:
                              description: Boolean value specifying whether the operation is supported.
                              type: boolean
                              example: false
                        authenticationSchemes:
                          description: A complex type that specifies supported Authentication Scheme properties.
                          type: object
                          required:
                            - name
                            - description
                            - type
                          properties:
                            name:
                              description: The common authentication scheme name; e.g., HTTP Basic.
                              type: string
                              example: HTTP Basic
                            description:
                              description: A description of the authentication scheme.
                              type: string
                              example: Authentication Scheme using the Http Basic Standard.
                            specUri:
                              description: An HTTP addressable URL pointing to the Authentication Scheme's specification.
                              type: string
                              example: http://www.ietf.org/rfc/rfc2617.txt
                            documentationUri:
                              description: An HTTP addressable URL pointing to the Authentication Scheme's usage documentation.
                              type: string
                              example: https://community.sailpoint.com/community/identityiq/product-downloads
                            type:
                              type: string
                              description: The authentication scheme.
                              enum:
                                - oauth
                                - oauth2
                                - oauthbearertoken
                                - httpbasic
                                - httpdigest
                              example: oauthbearertoken
                        meta:
                          type: object
                          properties:
                            location:
                              type: string
                              description: URL to ServiceProviderConfig resource.
                              example: http://localhost:8080/identityiq/scim/v2/ServiceProviderConfig
                            resourceType:
                              type: string
                              description: Resource type of the metadata subject.
                              example: ServiceProviderConfig
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
