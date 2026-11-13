## OpenAPI

```yaml GET /Entitlements/{entitlementId}
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
  /Entitlements/{entitlementId}:
    get:
      description: |
        The Entitlement resource with matching id is returned.<br /><br />
        Attributes to include in the response can be specified with the attributes query parameter. <br /><br />
        Attributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />
      operationId: getEntitlementById
      security:
        - basicAuth: []
      parameters:
        - name: entitlementId
          in: path
          schema:
            type: string
            example: c0a8019c802d1e5a81802eb2b57e020f
          description: id of Entitlement resource.
          required: true
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
            example: name, application
          description: A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**
      responses:
        '200':
          description: Returns a single Entitlement resource based on the id.
          content:
            application/json:
              schema:
                properties:
                  id:
                    description: Unique identifier of the Entitlement.
                    type: string
                    example: 7f00000180281df7818028bfb7d204c1
                  descriptions:
                    description: A list of localized descriptions of the Entitlement.
                    type: object
                    properties:
                      locale:
                        description: The locale associated with this Entitlement description.
                        type: string
                        example: en_US
                      value:
                        description: The description in localized form.
                        type: string
                        example: <strong>**Employee Database**</strong> <em>target friendly description</em>
                  displayableName:
                    description: Displayable name of the Entitlement.
                    type: string
                    example: a2a
                  type:
                    description: Type of the Entitlement.
                    type: string
                    example: group
                  application:
                    description: The corresponding Application object of the Entitlement.
                    type: array
                    items:
                      properties:
                        value:
                          description: The Application associated with the Entitlement.
                          type: string
                          example: 7f00000180281df7818028bfed100826
                        $ref:
                          description: The URI of the SCIM resource representating the Entitlement application.
                          type: string
                          example: http://localhost:8080/identityiq/scim/v2/Applications/7f00000180281df7818028bfed100826
                        displayName:
                          description: The name of the Entitlement Application. OPTIONAL and READ-ONLY.
                          type: string
                          example: SAP
                  owner:
                    description: The owner of the Entitlement.
                    type: array
                    items:
                      properties:
                        value:
                          description: The id of the SCIM resource representing the Entitlement Owner.
                          type: string
                          example: 7f00000180281df7818028bfab930361
                        $ref:
                          description: The URI of the SCIM resource representing the Entitlement Owner.
                          type: string
                          example: http://localhost:8080/identityiq/scim/v2/Users/7f00000180281df7818028bfab930361
                        displayName:
                          description: The displayName of the Entitlement Owner. OPTIONAL and READ-ONLY.
                          type: string
                          example: Mary Johnson
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
                    example: memberOf
                  value:
                    description: Attribute value of the Entitlement.
                    type: string
                    example: CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com
                  lastRefresh:
                    description: The DateTime when the Entitlement was refreshed.
                    format: date-time
                    type: string
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
                            description: The name of the Classification.
                            type: string
                            example: ClassificationA
                          displayName:
                            description: The displayName of the Classification.
                            type: string
                            example: ClassA
                          origin:
                            description: The origin of the Classification.
                            type: string
                            example: FAM Aggregation
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
                        example: '2022-04-05T15:52:30.090-05:00'
                      location:
                        description: URL to the Entitlement.
                        type: string
                        example: http://localhost:8080/identityiq/scim/v2/Entitlements/c0a8019c7ffa186e817ffb80170a0195
                      lastModified:
                        description: DateTime of Entitlement last modification.
                        type: string
                        format: date-time
                        example: '2022-04-05T15:52:30.119-05:00'
                      version:
                        description: Entitlement version.
                        type: string
                        example: '"W"1649191950119"'
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
                    example: None
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
                        example: Caroline Lee
                      value:
                        description: id of the Entitlement reviewer.
                        type: string
                        example: c0b4568a4fe7458c434ee77f2fad267c
                      $ref:
                        description: URI reference of the Entitlement reviewer resource.
                        type: string
                        example: http://localhost:8080/identityiq/scim/v2/Users/c0b4568a4fe7458c434ee77f2fad267c
                  emails:
                    description: This is an Extended Attribute from Managed Attribute. Used to specify the Entitlement owner email.
                    type: string
                    example: clee@demoexample.com
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
