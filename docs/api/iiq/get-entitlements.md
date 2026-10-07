## OpenAPI

```yaml GET /Entitlements
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
  /Entitlements:
    get:
      description: |
        This endpoint returns all Entitlement resources. <br /><br />
        Attributes to include in the response can be specified with the 'attributes' query parameter. <br /><br />
        Attributes to exclude from the response can be specified with the 'excludedAttributes' query parameter. <br /><br />
        The schemas related to Entitlements are:
        - **urn:ietf:params:scim:schemas:sailpoint:1.0:Entitlement**
      operationId: getEntitlements
      security:
        - basicAuth: []
      parameters:
        - in: query
          name: filter
          schema:
            type: string
            example: displayableName eq "accessLog"
          description: Allows for query filters according to RFC-7644, Section 3.4.2.2 - not all operations are supported.
        - in: query
          name: sortBy
          schema:
            type: string
            example: application
          description: Allows sorting the results by a resource's attributes.
        - in: query
          name: sortOrder
          schema:
            type: string
            default: ascending
            example: descending
          description: Determines what order to sort results in.
        - in: query
          name: startIndex
          schema:
            type: integer
            example: 10
            default: 1
          description: Determines the starting index of the result set.
        - in: query
          name: count
          schema:
            type: integer
            example: 10
            default: 1000
          description: Specifies the number of results per page.
        - in: query
          name: attributes
          schema:
            type: string
            example: application
          description: A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.
        - in: query
          name: excludedAttributes
          schema:
            type: string
            example: application
          description: A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**
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
                      properties:
                        id:
                          description: Unique identifier of the Entitlement.
                          type: string
                          example: 7f00000180281df7818028bfb83204dc
                        descriptions:
                          description: A list of localized descriptions of the Entitlement.
                          type: object
                          properties:
                            locale:
                              description: The locale associated with this Entitlement description.
                              type: string
                              example: en_GB
                            value:
                              description: The description in localized form.
                              type: string
                              example: <strong>**AP_Logins**</strong> Target Friendly Description
                        displayName:
                          description: Displayable name of the Entitlement.
                          type: string
                          example: AP_Logins
                        type:
                          description: Type of the Entitlement.
                          type: string
                          example: Permission
                        application:
                          description: The corresponding Application object of the Entitlement.
                          type: array
                          items:
                            properties:
                              value:
                                description: The Application associated with the Entitlement.
                                type: string
                                example: 7f00000180281df7818028bfac5a0367
                              $ref:
                                description: The URI of the SCIM resource representating the Entitlement application.
                                type: string
                                example: http://localhost:8080/identityiq/scim/v2/Applications/7f00000180281df7818028bfed100826
                              displayName:
                                description: The name of the Entitlement Application. OPTIONAL and READ-ONLY.
                                type: string
                                example: Oracle_DB_oasis
                        owner:
                          description: The owner of the Entitlement.
                          type: array
                          items:
                            properties:
                              value:
                                description: The id of the SCIM resource representing the Entitlement Owner.
                                type: string
                                example: 7f00000180281df7818028bfb0d103c7
                              $ref:
                                description: The URI of the SCIM resource representing the Entitlement Owner.
                                type: string
                                example: http://localhost:8080/identityiq/scim/v2/Users/7f00000180281df7818028bfb0d103c7
                              displayName:
                                description: The displayName of the Entitlement Owner. OPTIONAL and READ-ONLY.
                                type: string
                                example: Debra Wood
                        requestable:
                          description: Flag to indicate this entitlement is requestable.
                          type: boolean
                          example: true
                        aggregated:
                          description: Flag to indicate this entitlement has been aggregated.
                          type: boolean
                          example: true
                        attribute:
                          description: Attribute of the Entitlement.
                          type: string
                          example: AP_Logins
                        value:
                          description: Attribute value of the Entitlement.
                          type: string
                          example: CN=AP_Logins,OU=Security,OU=Permissions,DC=test,DC=sailpoint,DC=com
                        lastRefresh:
                          description: The DateTime when the Entitlement was refreshed.
                          type: string
                          format: date-time
                          example: '2022-04-14T10:48:01.907-05:00'
                        lastTargetAggregation:
                          description: The date aggregation was last targeted of the Entitlement.
                          type: string
                          format: date-time
                          example: '2022-04-14T10:48:01.907-05:00'
                        classifications:
                          description: Classifications of this Entitlement.
                          type: object
                          required:
                            - classification
                          properties:
                            source:
                              description: The source of the ObjectClassification.
                              type: string
                              example: UI
                            effective:
                              description: Flag indicating this is an effective Classification.
                              type: boolean
                              example: false
                            classification:
                              description: Classification of this object.
                              type: object
                              properties:
                                name:
                                  description: The name of the classification.
                                  type: string
                                  example: ClassificationB
                                displayName:
                                  description: The display name of the classification.
                                  type: string
                                  example: ClassB
                                origin:
                                  description: The origin of the Classification.
                                  type: string
                                  example: PAMSource
                                type:
                                  description: The type of the Classification.
                                  type: string
                                  example: Aggregation
                        meta:
                          type: object
                          properties:
                            created:
                              description: DateTime when the Entitlement was created.
                              type: string
                              format: date-time
                              example: '2022-04-14T10:44:54.834-05:00'
                            location:
                              description: URL to the Entitlement.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/Entitlements/7f00000180281df7818028bfb83204dc
                            lastModified:
                              description: DateTime of Entitlement last modification.
                              type: string
                              format: date-time
                              example: '2022-04-05T15:52:30.119-05:00'
                            version:
                              description: Entitlement version.
                              type: string
                              example: '"W"1649951094834"'
                            resourceType:
                              description: Resource type of the metadata subject.
                              type: string
                              example: Entitlement
                        schemas:
                          type: array
                          example:
                            - urn:ietf:params:scim:schemas:sailpoint:1.0:Entitlement
                        entitleAuth:
                          description: This is an Extended Attribute from Managed Attribute used to describe the authorization level of an Entitlement.
                          type: string
                          example: Low
                        entDate:
                          description: This is an Extended Attribute from Managed Attribute. The Entitlement DateTime.
                          type: string
                          format: date-time
                          example: '2022-04-14T10:44:54.738-05:00'
                        active:
                          description: This is an Extended Attribute from Managed Attribute. Describes if an Entitlement is active.
                          type: boolean
                          example: false
                        rank:
                          description: This is an Extended Attribute from Managed Attribute.
                          type: integer
                          example: 3
                        rule:
                          description: This is an Extended Attribute from Managed Attribute. Used to specify a Rule object for the Entitlement.
                          type: string
                          example: APLogin-Contractors-Rule
                        reviewer:
                          description: This is an Extended Attribute from Managed Attribute. The Identity that reviewed the Entitlement.
                          type: object
                          properties:
                            displayName:
                              description: Display name of the Entitlement reviewer.
                              type: string
                              example: Dan Patrick
                            value:
                              description: id of the Entitlement reviewer.
                              type: string
                              example: c0b4568a4fe7458c434ee77f2fad267c
                            $ref:
                              description: URI reference of the Entitlement reviewer resource.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/Users/c0b4568a4fe7458c434ee77f2fad267c
                        email:
                          description: This is an Extended Attribute from Managed Attribute. Used to specify the Entitlement owner email.
                          type: string
                          example: dpatrick@demoexample.com
            application/scim+json:
              schema:
                properties:
                  totalResults:
                    description: Number of Entitlement resources returned.
                    type: integer
                    example: 1500,
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
                    description: The SCIM resources returned for this endpoint.
                    type: array
                    items:
                      properties:
                        id:
                          description: Unique identifier of the Entitlement.
                          type: string
                          example: 7f00000180281df7818028bfb83204dc
                        descriptions:
                          description: A list of localized descriptions of the Entitlement.
                          type: object
                          properties:
                            locale:
                              description: The locale associated with this Entitlement description.
                              type: string
                              example: en_GB
                            value:
                              description: The description in localized form.
                              type: string
                              example: <strong>**AP_Logins**</strong> Target Friendly Description
                        displayName:
                          description: Displayable name of the Entitlement.
                          type: string
                          example: AP_Logins
                        type:
                          description: Type of the Entitlement.
                          type: string
                          example: Permission
                        application:
                          description: The corresponding Application object of the Entitlement.
                          type: array
                          items:
                            properties:
                              value:
                                description: The Application associated with the Entitlement.
                                type: string
                                example: 7f00000180281df7818028bfac5a0367
                              $ref:
                                description: The URI of the SCIM resource representating the Entitlement application.
                                type: string
                                example: http://localhost:8080/identityiq/scim/v2/Applications/7f00000180281df7818028bfed100826
                              displayName:
                                description: The name of the Entitlement Application. OPTIONAL and READ-ONLY.
                                type: string
                                example: Oracle_DB_oasis
                        owner:
                          description: The owner of the Entitlement.
                          type: array
                          items:
                            properties:
                              value:
                                description: The id of the SCIM resource representing the Entitlement Owner.
                                type: string
                                example: 7f00000180281df7818028bfb0d103c7
                              $ref:
                                description: The URI of the SCIM resource representing the Entitlement Owner.
                                type: string
                                example: http://localhost:8080/identityiq/scim/v2/Users/7f00000180281df7818028bfb0d103c7
                              displayName:
                                description: The displayName of the Entitlement Owner. OPTIONAL and READ-ONLY.
                                type: string
                                example: Debra Wood
                        requestable:
                          description: Flag to indicate this entitlement is requestable.
                          type: boolean
                          example: true
                        aggregated:
                          description: Flag to indicate this entitlement has been aggregated.
                          type: boolean
                          example: true
                        attribute:
                          description: Attribute of the Entitlement.
                          type: string
                          example: AP_Logins
                        value:
                          description: Attribute value of the Entitlement.
                          type: string
                          example: CN=AP_Logins,OU=Security,OU=Permissions,DC=test,DC=sailpoint,DC=com
                        lastRefresh:
                          description: The DateTime when the Entitlement was refreshed.
                          type: string
                          format: date-time
                          example: '2022-04-14T10:48:01.907-05:00'
                        lastTargetAggregation:
                          description: The date aggregation was last targeted of the Entitlement.
                          type: string
                          format: date-time
                          example: '2022-04-14T10:48:01.907-05:00'
                        classifications:
                          description: Classifications of this Entitlement.
                          type: object
                          required:
                            - classification
                          properties:
                            source:
                              description: The source of the ObjectClassification.
                              type: string
                              example: UI
                            effective:
                              description: Flag indicating this is an effective Classification.
                              type: boolean
                              example: false
                            classification:
                              description: Classification of this object.
                              type: object
                              properties:
                                name:
                                  description: The name of the classification.
                                  type: string
                                  example: ClassificationB
                                displayName:
                                  description: The display name of the classification.
                                  type: string
                                  example: ClassB
                                origin:
                                  description: The origin of the Classification.
                                  type: string
                                  example: PAMSource
                                type:
                                  description: The type of the Classification.
                                  type: string
                                  example: Aggregation
                        meta:
                          type: object
                          properties:
                            created:
                              description: DateTime when the Entitlement was created.
                              type: string
                              format: date-time
                              example: '2022-04-14T10:44:54.834-05:00'
                            location:
                              description: URL to the Entitlement.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/Entitlements/7f00000180281df7818028bfb83204dc
                            lastModified:
                              description: DateTime of Entitlement last modification.
                              type: string
                              format: date-time
                              example: '2022-04-05T15:52:30.119-05:00'
                            version:
                              description: Entitlement version.
                              type: string
                              example: '"W"1649951094834"'
                            resourceType:
                              description: Resource type of the metadata subject.
                              type: string
                              example: Entitlement
                        schemas:
                          type: array
                          example:
                            - urn:ietf:params:scim:schemas:sailpoint:1.0:Entitlement
                        entitleAuth:
                          description: This is an Extended Attribute from Managed Attribute used to describe the authorization level of an Entitlement.
                          type: string
                          example: Low
                        entDate:
                          description: This is an Extended Attribute from Managed Attribute. The Entitlement DateTime.
                          type: string
                          format: date-time
                          example: '2022-04-14T10:44:54.738-05:00'
                        active:
                          description: This is an Extended Attribute from Managed Attribute. Describes if an Entitlement is active.
                          type: boolean
                          example: false
                        rank:
                          description: This is an Extended Attribute from Managed Attribute.
                          type: integer
                          example: 3
                        rule:
                          description: This is an Extended Attribute from Managed Attribute. Used to specify a Rule object for the Entitlement.
                          type: string
                          example: APLogin-Contractors-Rule
                        reviewer:
                          description: This is an Extended Attribute from Managed Attribute. The Identity that reviewed the Entitlement.
                          type: object
                          properties:
                            displayName:
                              description: Display name of the Entitlement reviewer.
                              type: string
                              example: Dan Patrick
                            value:
                              description: id of the Entitlement reviewer.
                              type: string
                              example: c0b4568a4fe7458c434ee77f2fad267c
                            $ref:
                              description: URI reference of the Entitlement reviewer resource.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/Users/c0b4568a4fe7458c434ee77f2fad267c
                        email:
                          description: This is an Extended Attribute from Managed Attribute. Used to specify the Entitlement owner email.
                          type: string
                          example: dpatrick@demoexample.com
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
