## OpenAPI

```yaml GET /ResourceTypes
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
  /ResourceTypes:
    get:
      description: All ResourceType resources are listed in the response. The common fields for each ResourceType entry are 'endpoint', 'id', 'name', 'description', 'schema' and 'schemaExtensions'.
      operationId: getResourceTypes
      security:
        - basicAuth: []
      responses:
        '200':
          description: Returns all ResourceType resources.
          content:
            application/json:
              schema:
                properties:
                  totalResults:
                    description: Number of ResourceType resources returned.
                    type: integer
                    example: 18
                  schemas:
                    description: The ResourceTypes type represented by URN used for this response.
                    type: array
                    items:
                      type: string
                    example:
                      - urn:ietf:params:scim:api:messages:2.0:ListResponse
                  Resources:
                    type: array
                    items:
                      type: object
                      properties:
                        id:
                          description: ID of the ResourceType.
                          type: string
                          example: User
                        name:
                          description: Name of the ResourceType.
                          type: string
                          example: User
                        endpoint:
                          description: The ResourceType's HTTP addressable endpoint relative to the Base URL.
                          type: string
                          example: /Applications
                        description:
                          description: Description of the ResourceType.
                          type: string
                          example: User Account.
                        schema:
                          description: The primary/base schema URI of the ResourceType.
                          type: string
                          example: urn:ietf:params:scim:schemas:sailpoint:1.0:User
                        schemaExtensions:
                          description: A list of URIs of the ResourceType's schema extensions.
                          type: array
                          items:
                            example:
                              - schema: urn:ietf:params:scim:schemas:extension:enterprise:2.0:User
                                required: true
                              - schema: urn:ietf:params:scim:schemas:sailpoint:1.0:User
                                required: true
                        meta:
                          description: Metadata of the ResourceType.
                          type: object
                          properties:
                            location:
                              description: The location of the ResourceType.
                              type: string
                              example: http://localhost:8080/iiq/scim/v2/ResourceTypes/User
                            resourceType:
                              description: The SCIM resource type.
                              type: string
                              example: ResourceType
                        schemas:
                          description: The schema for the ResourceType resource.
                          type: array
                          items:
                            type: string
                          example:
                            - urn:ietf:params:scim:schemas:core:2.0:ResourceType
            application/scim+json:
              schema:
                properties:
                  totalResults:
                    description: Number of Schema resources returned.
                    type: integer
                    example: 18
                  schemas:
                    description: The Schema type represented by URN used for this response.
                    type: array
                    items:
                      type: string
                    example:
                      - urn:ietf:params:scim:api:messages:2.0:ListResponse
                  Resources:
                    type: array
                    items:
                      type: object
                      properties:
                        id:
                          description: ID of the ResourceType.
                          type: string
                          example: User
                        name:
                          description: Name of the ResourceType.
                          type: string
                          example: User
                        endpoint:
                          description: The ResourceType's HTTP addressable endpoint relative to the Base URL.
                          type: string
                          example: /Applications
                        description:
                          description: Description of the ResourceType.
                          type: string
                          example: User Account.
                        schema:
                          description: The primary/base schema URI of the ResourceType.
                          type: string
                          example: urn:ietf:params:scim:schemas:sailpoint:1.0:User
                        schemaExtensions:
                          description: A list of URIs of the ResourceType's schema extensions.
                          type: array
                          items:
                            example:
                              - schema: urn:ietf:params:scim:schemas:extension:enterprise:2.0:User
                                required: true
                              - schema: urn:ietf:params:scim:schemas:sailpoint:1.0:User
                                required: true
                        meta:
                          description: Metadata of the ResourceType.
                          type: object
                          properties:
                            location:
                              description: The location of the ResourceType.
                              type: string
                              example: http://localhost:8080/iiq/scim/v2/ResourceTypes/User
                            resourceType:
                              description: The SCIM resource type.
                              type: string
                              example: ResourceType
                        schemas:
                          description: The schema for the ResourceType resource.
                          type: array
                          items:
                            type: string
                          example:
                            - urn:ietf:params:scim:schemas:core:2.0:ResourceType
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
