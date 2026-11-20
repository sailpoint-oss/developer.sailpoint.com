## OpenAPI

```yaml GET /TaskResults
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
  /TaskResults:
    get:
      description: |
        This endpoint returns all TaskResult resources. <br /><br />
        Attributes to include in the response can be specified with the 'attributes' query parameter. <br /><br />
        Attributes to exclude from the response can be specified with the 'excludedAttributes' query parameter. <br /><br />
        The schema related to TaskResult is:
        - **urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult**
      operationId: TaskResultsGet
      security:
        - basicAuth: []
      parameters:
        - in: query
          name: filter
          schema:
            type: string
            example: name eq "AdminsAggTask"
          description: Allows for query filters according to RFC-7644, Section 3.4.2.2 - not all operations are supported.
        - in: query
          name: lookupByName
          schema:
            type: boolean
            default: false
            example: true
          description: '**(OPTIONAL)** Set to true if the TaskResult name is passed instead of the TaskResult id.'
        - in: query
          name: sortBy
          schema:
            type: string
            example: launched
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
            example: 5
            default: 1000
          description: Specifies the number of results per page.
        - in: query
          name: attributes
          schema:
            type: string
            example: completionStatus, attributes
          description: A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.
        - in: query
          name: excludedAttributes
          schema:
            type: string
            example: taskDefinition, host
          description: A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**
      responses:
        '200':
          description: Returned all SCIM resources for this endpoint.
          content:
            application/json:
              schema:
                properties:
                  totalResults:
                    description: Number of resources returned for this endpoint
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
                          description: Unique identifier of the TaskResult.
                          type: string
                          example: 7f00000180281df7818028c03252085c
                        name:
                          description: Name of the TaskResult.
                          type: string
                          example: Aggregate HR Authoritative
                        type:
                          description: Type of the TaskResult.
                          type: string
                          example: AccountAggregation
                        completionStatus:
                          type: string
                          description: Completion Status of the TaskResult.
                          enum:
                            - Success
                            - Warning
                            - Error
                            - Terminated
                            - TempError
                          example: Success
                        launcher:
                          description: Launcher of the TaskResult.
                          type: string
                          example: spadmin
                        host:
                          description: Host of the TaskResult.
                          type: string
                          example: centos-server.local
                        progress:
                          description: Progress of the TaskResult.
                          type: string
                          example: Launched 2 partitions.
                        targetClass:
                          description: Target Class of the TaskResult.
                          type: string
                          example: Permission
                        targetName:
                          description: Target Name of the Task Result.
                          type: string
                          example: PAM Credential Container
                        terminated:
                          description: Flag to indicate this TaskResult is terminated.
                          type: boolean
                          example: true
                        partitioned:
                          description: Flag to indicate this TaskResult is partitioned.
                          type: boolean
                          example: true
                        launched:
                          type: string
                          format: date-time
                          description: The launched DateTime of the TaskResult.
                          example: '2022-04-14T10:45:26.114-05:00'
                        completed:
                          type: string
                          format: date-time
                          description: The completed DateTime of the TaskResult.
                          example: '2022-04-14T10:45:26.098-05:00'
                        expiration:
                          type: string
                          format: date-time
                          description: The expiration DateTime of the TaskResult.
                          example: '2022-05-03T16:40:34.271-05:00'
                        verified:
                          type: string
                          format: date-time
                          description: The verification DateTime of the TaskResult.
                          example: '2022-05-03T16:40:34.271-05:00'
                        percentageComplete:
                          type: integer
                          description: The percentage completed of this TaskResult.
                          example: 55
                        pendingSignOffs:
                          description: The number of pending signoffs of this TaskResult.
                          type: integer
                          example: 2
                        taskDefinition:
                          type: string
                          description: Name of the TaskDefinition of the TaskResult.
                          example: Aggregate HR Authoritative
                        taskSchedule:
                          description: Name of the TaskSchedule of the TaskResult.
                          type: string
                          example: Perform maintenance
                        attributes:
                          description: A list of attributes of the TaskResult.
                          type: array
                          items:
                            properties:
                              key:
                                description: The attribute key.
                                type: string
                                example: total
                              value:
                                description: The attribute value.
                                type: string
                                example: '3'
                        messages:
                          description: List of messages of the TaskResult.
                          type: array
                          items:
                            example:
                              - 'Unathorized access to database in server: 192.100.1.25'
                        meta:
                          type: object
                          properties:
                            created:
                              description: DateTime when the TaskResult was created.
                              type: string
                              format: date-time
                              example: '2022-04-14T10:44:54.834-05:00'
                            location:
                              description: URL to the TaskResult.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/TaskResults/7f00000180281df7818028c03252085c
                            lastModified:
                              description: DateTime of TaskResult last modification.
                              type: string
                              format: date-time
                              example: '2022-04-05T15:52:30.119-05:00'
                            version:
                              description: TaskResult version.
                              type: string
                              example: '"W"1649951094834"'
                            resourceType:
                              description: Resource type of the metadata subject.
                              type: string
                              example: TaskResult
                        schemas:
                          type: array
                          example:
                            - urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult
            application/scim+json:
              schema:
                properties:
                  totalResults:
                    description: Number of TaskResult resources returned.
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
                          description: Unique identifier of the TaskResult.
                          type: string
                          example: 7f00000180281df7818028c03252085c
                        name:
                          description: Name of the TaskResult.
                          type: string
                          example: Aggregate HR Authoritative
                        type:
                          description: Type of the TaskResult.
                          type: string
                          example: AccountAggregation
                        completionStatus:
                          type: string
                          description: Completion Status of the TaskResult.
                          enum:
                            - Success
                            - Warning
                            - Error
                            - Terminated
                            - TempError
                          example: Success
                        launcher:
                          description: Launcher of the TaskResult.
                          type: string
                          example: spadmin
                        host:
                          description: Host of the TaskResult.
                          type: string
                          example: centos-server.local
                        progress:
                          description: Progress of the TaskResult.
                          type: string
                          example: Launched 2 partitions.
                        targetClass:
                          description: Target Class of the TaskResult.
                          type: string
                          example: Permission
                        targetName:
                          description: Target Name of the Task Result.
                          type: string
                          example: PAM Credential Container
                        terminated:
                          description: Flag to indicate this TaskResult is terminated.
                          type: boolean
                          example: true
                        partitioned:
                          description: Flag to indicate this TaskResult is partitioned.
                          type: boolean
                          example: true
                        launched:
                          type: string
                          format: date-time
                          description: The launched DateTime of the TaskResult.
                          example: '2022-04-14T10:45:26.114-05:00'
                        completed:
                          type: string
                          format: date-time
                          description: The completed DateTime of the TaskResult.
                          example: '2022-04-14T10:45:26.098-05:00'
                        expiration:
                          type: string
                          format: date-time
                          description: The expiration DateTime of the TaskResult.
                          example: '2022-05-03T16:40:34.271-05:00'
                        verified:
                          type: string
                          format: date-time
                          description: The verification DateTime of the TaskResult.
                          example: '2022-05-03T16:40:34.271-05:00'
                        percentageComplete:
                          type: integer
                          description: The percentage completed of this TaskResult.
                          example: 55
                        pendingSignOffs:
                          description: The number of pending signoffs of this TaskResult.
                          type: integer
                          example: 2
                        taskDefinition:
                          type: string
                          description: Name of the TaskDefinition of the TaskResult.
                          example: Aggregate HR Authoritative
                        taskSchedule:
                          description: Name of the TaskSchedule of the TaskResult.
                          type: string
                          example: Perform maintenance
                        attributes:
                          description: A list of attributes of the TaskResult.
                          type: array
                          items:
                            properties:
                              key:
                                description: The attribute key.
                                type: string
                                example: total
                              value:
                                description: The attribute value.
                                type: string
                                example: '3'
                        messages:
                          description: List of messages of the TaskResult.
                          type: array
                          items:
                            example:
                              - 'Unathorized access to database in server: 192.100.1.25'
                        meta:
                          type: object
                          properties:
                            created:
                              description: DateTime when the TaskResult was created.
                              type: string
                              format: date-time
                              example: '2022-04-14T10:44:54.834-05:00'
                            location:
                              description: URL to the TaskResult.
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/TaskResults/7f00000180281df7818028c03252085c
                            lastModified:
                              description: DateTime of TaskResult last modification.
                              type: string
                              format: date-time
                              example: '2022-04-05T15:52:30.119-05:00'
                            version:
                              description: TaskResult version.
                              type: string
                              example: '"W"1649951094834"'
                            resourceType:
                              description: Resource type of the metadata subject.
                              type: string
                              example: TaskResult
                        schemas:
                          type: array
                          example:
                            - urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
