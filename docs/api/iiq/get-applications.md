## OpenAPI

```yaml GET /Applications
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
  /Applications:
    get:
      description: |
        This endpoint returns all Application resources. <br /><br />
        Attributes to include in the response can be specified with the 'attributes' query parameter. <br /><br /> 
        Attributes to exclude from the response can be specified with the 'excludedAttributes' query parameter. <br /><br />
        The schema related to Applications is: 
        - **urn:ietf:params:scim:schemas:core:1.0:Application**
      operationId: getApplications
      security:
        - basicAuth: []
      parameters:
        - in: query
          name: filter
          schema:
            type: string
            example: type eq "Active Directory - Direct"
          description: Allows for query filters according to RFC-7644, Section 3.4.2.2 - not all operations are supported.
        - in: query
          name: lookupByName
          schema:
            type: boolean
            default: false
            example: true
        - in: query
          name: sortBy
          schema:
            type: string
            example: name
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
            default: 1
          description: Specifies the number of results per page.
        - in: query
          name: attributes
          schema:
            type: string
            example: name,type,features
          description: The Application attributes to include in the response. The query parameter value is a comma-separated list of fields to be returned in the response for each Application. The attributes listed will be the only ones returned in the response, with the exception of id, schemas, and meta, which are always returned for an Application.
        - in: query
          name: excludedAttributes
          schema:
            type: string
            example: features
          description: The Application attributes to exclude frome the response. The query parameter value is a comma-separated list of fields to be excluded from the response for each Application. The attributes listed will be the only ones excluded frome the response, with the exception of id, schemas, and meta, which are always returned for an Application.
      responses:
        '200':
          description: Returns all SCIM Application resources.
          content:
            application/json:
              schema:
                properties:
                  totalResults:
                    description: Number of Application resources returned.
                    type: integer
                    example: 18,
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
                          description: IdentityIQ id of the Application.
                          type: string
                          example: c0b4568a4fe7458c434ee77d1fbt156b
                        name:
                          description: Unique name for the Application. This name MUST be unique across the entire set of Applications.
                          type: string
                          example: Active Directory
                        descriptions:
                          description: A list of localized descriptions of the Application.
                          type: array
                          example:
                            - locale: en_US
                              value: The main Active_Directory domain data for the corporate network.
                        type:
                          description: The type of the Application.
                          type: string
                          example: Active Directory - Direct
                        features:
                          description: A list of features of the Application.
                          type: array
                          example:
                            - - DIRECT_PERMISSIONS
                              - NO_RANDOM_ACCESS
                              - DISCOVER_SCHEMA
                        owner:
                          description: The owner of the Application.
                          type: object
                          properties:
                            displayName:
                              description: Display name of the application owner.
                              type: string
                              example: Joe Smith
                            value:
                              description: id of the application owner.
                              type: string
                              example: c0b4568a4fe7458c434ee77d1fbt156b
                            $ref:
                              description: URI reference of the application owner resource.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/Users/c0b4568a4fe7458c434ee77d1fbt156b
                        applicationSchemas:
                          description: List of the Application Schemas.
                          type: object
                          properties:
                            value:
                              description: The urn of the Application Schema.
                              type: string
                              example: urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:Active Directory:account
                            type:
                              description: The type of Application Schema (account, group, etc.).
                              type: string
                              example: account
                            $ref:
                              description: The URI of the SCIM resource representing the Entitlement.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/Schemas/urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:Active%20Directory:account
                        meta:
                          description: Metadata of the SCIM resource.
                          properties:
                            created:
                              description: Datetime this Application was created.
                              type: string
                              format: date-time
                              example: '2022-02-11T01:34:04.074-05:00'
                            location:
                              description: The location of the SCIM resource.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/Applications/c0b4568a4fe7458c434ee77d1fbt156b
                            lastModified:
                              description: Datetime the Application was last modified.
                              type: string
                              format: date-time
                              example: '2022-02-11T01:08:45.866-05:00'
                            version:
                              description: The version of the SCIM resource.
                              type: string
                              example: W"1644561244074"
                            resourceType:
                              description: The SCIM resource type.
                              type: string
                              example: Application
                            schemas:
                              description: The schemas involved in the SCIM resource.
                              type: array
                              items:
                                type: string
                              example:
                                - urn:ietf:params:scim:schemas:sailpoint:1.0:Application
            application/scim+json:
              schema:
                properties:
                  totalResults:
                    description: Number of Application resources returned.
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
                          description: IdentityIQ id of the Application.
                          type: string
                          example: c0b4568a4fe7458c434ee77d1fbt156b
                        name:
                          description: Unique name for the Application. This name MUST be unique across the entire set of Applications.
                          type: string
                          example: Active Directory
                        descriptions:
                          description: A list of localized descriptions of the Application.
                          type: array
                          example:
                            - locale: en_US
                              value: The main Active_Directory domain data for the corporate network.
                        type:
                          description: The type of the Application.
                          type: string
                          example: Active Directory - Direct
                        features:
                          description: A list of features of the Application.
                          type: array
                          example:
                            - - DIRECT_PERMISSIONS
                              - NO_RANDOM_ACCESS
                              - DISCOVER_SCHEMA
                        owner:
                          description: The owner of the Application.
                          type: object
                          properties:
                            displayName:
                              description: Display name of the application owner.
                              type: string
                              example: Joe Smith
                            value:
                              description: id of the application owner.
                              type: string
                              example: c0b4568a4fe7458c434ee77d1fbt156b
                            $ref:
                              description: URI reference of the application owner resource.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/Users/c0b4568a4fe7458c434ee77d1fbt156b
                        applicationSchemas:
                          description: List of the Application Schemas.
                          type: object
                          properties:
                            value:
                              description: The urn of the Application Schema.
                              type: string
                              example: urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:Active Directory:account
                            type:
                              description: The type of Application Schema (account, group, etc.).
                              type: string
                              example: account
                            $ref:
                              description: The URI of the SCIM resource representing the Entitlement.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/Schemas/urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:Active%20Directory:account
                        meta:
                          description: Metadata of the SCIM resource.
                          properties:
                            created:
                              description: Datetime this Application was created.
                              type: string
                              format: date-time
                              example: '2022-02-11T01:34:04.074-05:00'
                            location:
                              description: The location of the SCIM resource.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/Applications/c0b4568a4fe7458c434ee77d1fbt156b
                            lastModified:
                              description: Datetime the Application was last modified.
                              type: string
                              format: date-time
                              example: '2022-02-11T01:08:45.866-05:00'
                            version:
                              description: The version of the SCIM resource.
                              type: string
                              example: W"1644561244074"
                            resourceType:
                              description: The SCIM resource type.
                              type: string
                              example: Application
                            schemas:
                              description: The schemas involved in the SCIM resource.
                              type: array
                              items:
                                type: string
                              example:
                                - urn:ietf:params:scim:schemas:sailpoint:1.0:Application
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
