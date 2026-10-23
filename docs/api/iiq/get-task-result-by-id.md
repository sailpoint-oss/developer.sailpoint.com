## OpenAPI

```yaml GET /TaskResults/{taskResultId}
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
  /TaskResults/{taskResultId}:
    get:
      description: |
        The TaskResult resource with matching id is returned.<br /><br />
        Attributes to include in the response can be specified with the attributes query parameter. <br /><br />
        Attributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />
        The schema related to TaskResult is:
        - **urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult**
      operationId: getTaskResultById
      security:
        - basicAuth: []
      parameters:
        - name: taskResultId
          in: path
          schema:
            type: string
            example: c0a8019c802d1e5a81802eb2b57e020f
          description: id of TaskResult resource.
          required: true
        - in: query
          name: attributes
          schema:
            type: string
            example: host
          description: A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.
        - in: query
          name: excludedAttributes
          schema:
            type: string
            example: name, messages
          description: A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**
      responses:
        '200':
          description: Returns a single TaskResult resource based on the id.
          content:
            application/json:
              schema:
                properties:
                  id:
                    description: Unique identifier of the TaskResult.
                    type: string
                    example: c0a8019c80761c398180856488d2051d
                  name:
                    description: Name of the TaskResult.
                    type: string
                    example: Aggregate Composite Application
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
                    example: james.smith
                  host:
                    description: Host of the TaskResult.
                    type: string
                    example: mandrake.testdomain.com
                  progress:
                    description: Progress of the TaskResult.
                    type: string
                    example: 3/5 tasks completed.
                  targetClass:
                    description: Target Class of the TaskResult.
                    type: string
                    example: Permission
                  targetName:
                    description: Target Name of the Task Result.
                    type: string
                    example: Adam.Kennedy
                  terminated:
                    description: Flag to indicate this TaskResult is terminated.
                    type: boolean
                    example: false
                  partitioned:
                    description: Flag to indicate this TaskResult is partitioned.
                    type: boolean
                    example: true
                  launched:
                    type: string
                    format: date-time
                    description: The launched DateTime of the TaskResult.
                    example: '2022-05-02T10:30:00.014-05:00'
                  completed:
                    type: string
                    format: date-time
                    description: The completed DateTime of the TaskResult.
                    example: '2022-05-02T10:30:00.035-05:00'
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
                    example: 30
                  pendingSignOffs:
                    description: The number of pending signoffs of this TaskResult.
                    type: integer
                    example: 0
                  taskDefinition:
                    type: string
                    description: Name of the TaskDefinition of the TaskResult.
                    example: Workflow Launcher
                  taskSchedule:
                    description: Name of the TaskSchedule of the TaskResult.
                    type: string
                    example: Perform Identity Request Maintenance
                  attributes:
                    description: A list of attributes of the TaskResult.
                    type: array
                    items:
                      properties:
                        key:
                          description: The attribute key.
                          type: string
                          example: inactiveWorkItemsForwarded
                        value:
                          description: The attribute value.
                          type: string
                          example: '0'
                  messages:
                    description: List of messages of the TaskResult.
                    type: array
                    items:
                      example:
                        - Partition 2 is pending.
                  meta:
                    type: object
                    properties:
                      created:
                        description: DateTime when the TaskResult was created.
                        type: string
                        format: date-time
                        example: '2022-05-02T10:30:00.018-05:00'
                      location:
                        description: URL to the TaskResult.
                        type: string
                        example: http://localhost:8080/identityiq/scim/v2/TaskResults/c0a8019c80761c398180856488d2051d
                      lastModified:
                        description: DateTime of TaskResult last modification.
                        type: string
                        format: date-time
                        example: '2022-05-02T10:30:00.036-05:00'
                      version:
                        description: TaskResult version.
                        type: string
                        example: W"1651505400036"
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
