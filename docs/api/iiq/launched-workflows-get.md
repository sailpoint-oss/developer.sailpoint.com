## OpenAPI

```yaml GET /LaunchedWorkflows
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
  /LaunchedWorkflows:
    get:
      description: |
        This endpoint returns all LaunchedWorkflow resources. <br /><br />
        Attributes to include in the response can be specified with the 'attributes' query parameter. <br /><br /> 
        Attributes to exclude from the response can be specified with the 'excludedAttributes' query parameter. <br /><br />
        The schema related to LaunchedWorkflow is: 
        - **urn:ietf:params:scim:schemas:sailpoint:1.0:LaunchedWorkflow**
      operationId: LaunchedWorkflowsGet
      security:
        - basicAuth: []
      parameters:
        - in: query
          name: filter
          schema:
            type: string
            example: completed eq "2022-05-03T16:40:34.271-05:00"
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
            example: name, expiration
          description: A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.
        - in: query
          name: excludedAttributes
          schema:
            type: string
            example: identityRequestId
          description: A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**
      responses:
        '200':
          description: Returned all SCIM resources for this endpoint. <br/> **LaunchedWorkflow responses include attributes from the TaskResult related to the Workflow execution.**
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
                        partitioned:
                          description: Flag to indicate this TaskResult is partitioned. (From the TaskResult used to launch the Workflow).
                          type: boolean
                          example: true
                        completed:
                          type: string
                          format: date-time
                          description: The completed DateTime of the TaskResult. (From the TaskResult used to launch the Workflow).
                          example: '2022-04-14T10:45:26.098-05:00'
                        type:
                          description: Type of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: string
                          example: Workflow
                        launched:
                          type: string
                          format: date-time
                          description: The launched DateTime of the TaskResult. (From the TaskResult used to launch the Workflow).
                          example: '2022-04-14T10:45:26.114-05:00'
                        pendingSignOffs:
                          description: The number of pending signoffs of this TaskResult. (From the TaskResult used to launch the Workflow).
                          type: integer
                          example: 2
                        workflowName:
                          description: Name of the Workflow to launch.
                          type: string
                          example: Update Identity Adam.Kennedy AccessRequest
                        identityRequestId:
                          description: Id representing the identity request.
                          type: string
                          example: '0000000001'
                        workflowCaseId:
                          description: Id representing the workflow case (a running instance of a workflow).
                          type: string
                          example: c0a8019c808b1baa81808bde2c2201b3
                        workflowProcessId:
                          type: string
                          description: Id representing the workflow monitoring process log.
                          example: 7f000001806719888180675c8f8a225g
                        retries:
                          description: The number of retries performed during the execution of provisioning activities.
                          type: integer
                          example: 1
                        approvalSet:
                          description: XML representation of approvals.
                          type: string
                          example: 'example: <ApprovalSet><ApprovalItem application="SAP" approver="John.Coleman" assignmentId="25701d226e9d4f98a8e42fcebb61980f" displayName="IT Role" displayValue="SAP Admin" id="7e314fb9b307481682b42f8e714b382d" name="assignedRoles" operation="Add" state="Finished" value="SAP Admin"><Attributes> <Map><entry key="attachmentConfigList"/><entry key="attachments"/><entry key="flow" value="AccessRequest"/><entry key="id" value="7f00000180281df7818028bfb3561254"/><entry key="interface" value="LCM"/><entry key="operation" value="RoleAdd"/></Map></Attributes></ApprovalItem></ApprovalSet>'
                        workflowSummary:
                          description: XML representation of the workflow summary.
                          type: string
                          example: 'example: "<WorkflowSummary step="end"><Interactions><ApprovalSummary completer="James Smith" endDate="1651001587664" owner="James.Smith" request="Approve modification of entitlement ADDirectDemodata group: CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com" startDate="1651001561152" state="Finished" workItemId="7f000001806719888180675c9006016b" workItemType="Approval"/></Interactions></WorkflowSummary>"'
                        input:
                          description: A list of input attributes of the Launched Workflow.
                          type: object
                          properties:
                            key:
                              description: The attribute key.
                              type: string
                              example: _workflowRef
                            value:
                              description: The attribute value.
                              type: string
                              example: UpdateIdentityWorkflow
                            type:
                              description: The attribute type.
                              type: string
                              example: string
                        output:
                          description: A list of output attributes of the Launched Workflow.
                          type: object
                          properties:
                            key:
                              description: The attribute key.
                              type: string
                              example: workflowSummary
                            value:
                              description: The attribute value.
                              type: string
                              example: '<WorkflowSummary step="end">\n  <Interactions>\n    <ApprovalSummary completer="James Smith" endDate="1651001587664" owner="James.Smith" request="Approve modification of entitlement ADDirectDemodata group: CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com" startDate="1651001561152" state="Finished" workItemId="7f000001806719888180675c9006016b" workItemType="Approval"/>\n  </Interactions>\n</WorkflowSummary>\n'
                            type:
                              description: The attribute type.
                              type: string
                              example: application/xml
                        targetClass:
                          description: Target Class of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: string
                          example: Permission
                        name:
                          description: Name of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: string
                          example: Update Account Group a2a
                        messages:
                          description: List of messages of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: array
                          items:
                            example:
                              - Task executed successfully.
                        attributes:
                          description: A list of attributes of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: array
                          items:
                            properties:
                              key:
                                description: The attribute key.
                                type: string
                                example: Workflow Summary
                              value:
                                description: The attribute value.
                                type: string
                                example: '<WorkflowSummary step="end">\n  <Interactions>\n    <ApprovalSummary completer="James Smith" endDate="1651001587664" owner="James.Smith" request="Approve modification of entitlement ADDirectDemodata group: CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com" startDate="1651001561152" state="Finished" workItemId="7f000001806719888180675c9006016b" workItemType="Approval"/>\n  </Interactions>\n</WorkflowSummary>\n'
                        id:
                          description: Unique identifier of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: string
                          example: 7f00000180281df7818028c03252085c
                        completionStatus:
                          type: string
                          description: Completion Status of the TaskResult. (From the TaskResult used to launch the Workflow).
                          enum:
                            - Success
                            - Warning
                            - Error
                            - Terminated
                            - TempError
                          example: Success
                        taskDefinition:
                          type: string
                          description: Name of the TaskDefinition of the TaskResult. (From the TaskResult used to launch the Workflow).
                          example: Workflow Launcher
                        terminated:
                          description: Flag to indicate this TaskResult is terminated. (From the TaskResult used to launch the Workflow).
                          type: boolean
                          example: true
                        launcher:
                          description: Launcher of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: string
                          example: spadmin
                        meta:
                          type: object
                          properties:
                            created:
                              description: DateTime when the TaskResult was created. (From the TaskResult used to launch the Workflow).
                              type: string
                              format: date-time
                              example: '2022-04-14T10:44:54.834-05:00'
                            location:
                              description: URL to the TaskResult. (From the TaskResult used to launch the Workflow).
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/TaskResults/7f00000180281df7818028c03252085c
                            lastModified:
                              description: DateTime of TaskResult last modification. (From the TaskResult used to launch the Workflow).
                              type: string
                              format: date-time
                              example: '2022-04-05T15:52:30.119-05:00'
                            version:
                              description: TaskResult version. (From the TaskResult used to launch the Workflow).
                              type: string
                              example: '"W"1649951094834"'
                            resourceType:
                              description: Resource type of the metadata subject. (From the TaskResult used to launch the Workflow).
                              type: string
                              example: TaskResult
            application/scim+json:
              schema:
                properties:
                  totalResults:
                    description: Number of LaunchedWorkflow resources returned.
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
                        partitioned:
                          description: Flag to indicate this TaskResult is partitioned. (From the TaskResult used to launch the Workflow).
                          type: boolean
                          example: true
                        completed:
                          type: string
                          format: date-time
                          description: The completed DateTime of the TaskResult. (From the TaskResult used to launch the Workflow).
                          example: '2022-04-14T10:45:26.098-05:00'
                        type:
                          description: Type of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: string
                          example: Workflow
                        launched:
                          type: string
                          format: date-time
                          description: The launched DateTime of the TaskResult. (From the TaskResult used to launch the Workflow).
                          example: '2022-04-14T10:45:26.114-05:00'
                        pendingSignOffs:
                          description: The number of pending signoffs of this TaskResult. (From the TaskResult used to launch the Workflow).
                          type: integer
                          example: 2
                        workflowName:
                          description: Name of the Workflow to launch.
                          type: string
                          example: Update Identity Adam.Kennedy AccessRequest
                        identityRequestId:
                          description: Id representing the identity request.
                          type: string
                          example: '0000000001'
                        workflowCaseId:
                          description: Id representing the workflow case (a running instance of a workflow).
                          type: string
                          example: c0a8019c808b1baa81808bde2c2201b3
                        workflowProcessId:
                          type: string
                          description: Id representing the workflow monitoring process log.
                          example: 7f000001806719888180675c8f8a225g
                        retries:
                          description: The number of retries performed during the execution of provisioning activities.
                          type: integer
                          example: 1
                        approvalSet:
                          description: XML representation of approvals.
                          type: string
                          example: 'example: <ApprovalSet><ApprovalItem application="SAP" approver="John.Coleman" assignmentId="25701d226e9d4f98a8e42fcebb61980f" displayName="IT Role" displayValue="SAP Admin" id="7e314fb9b307481682b42f8e714b382d" name="assignedRoles" operation="Add" state="Finished" value="SAP Admin"><Attributes> <Map><entry key="attachmentConfigList"/><entry key="attachments"/><entry key="flow" value="AccessRequest"/><entry key="id" value="7f00000180281df7818028bfb3561254"/><entry key="interface" value="LCM"/><entry key="operation" value="RoleAdd"/></Map></Attributes></ApprovalItem></ApprovalSet>'
                        workflowSummary:
                          description: XML representation of the workflow summary.
                          type: string
                          example: 'example: "<WorkflowSummary step="end"><Interactions><ApprovalSummary completer="James Smith" endDate="1651001587664" owner="James.Smith" request="Approve modification of entitlement ADDirectDemodata group: CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com" startDate="1651001561152" state="Finished" workItemId="7f000001806719888180675c9006016b" workItemType="Approval"/></Interactions></WorkflowSummary>"'
                        input:
                          description: A list of input attributes of the Launched Workflow.
                          type: object
                          properties:
                            key:
                              description: The attribute key.
                              type: string
                              example: _workflowRef
                            value:
                              description: The attribute value.
                              type: string
                              example: UpdateIdentityWorkflow
                            type:
                              description: The attribute type.
                              type: string
                              example: string
                        output:
                          description: A list of output attributes of the Launched Workflow.
                          type: object
                          properties:
                            key:
                              description: The attribute key.
                              type: string
                              example: workflowSummary
                            value:
                              description: The attribute value.
                              type: string
                              example: '<WorkflowSummary step="end">\n  <Interactions>\n    <ApprovalSummary completer="James Smith" endDate="1651001587664" owner="James.Smith" request="Approve modification of entitlement ADDirectDemodata group: CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com" startDate="1651001561152" state="Finished" workItemId="7f000001806719888180675c9006016b" workItemType="Approval"/>\n  </Interactions>\n</WorkflowSummary>\n'
                            type:
                              description: The attribute type.
                              type: string
                              example: application/xml
                        targetClass:
                          description: Target Class of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: string
                          example: Permission
                        name:
                          description: Name of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: string
                          example: Update Account Group a2a
                        messages:
                          description: List of messages of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: array
                          items:
                            example:
                              - Task executed successfully.
                        attributes:
                          description: A list of attributes of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: array
                          items:
                            properties:
                              key:
                                description: The attribute key.
                                type: string
                                example: Workflow Summary
                              value:
                                description: The attribute value.
                                type: string
                                example: '<WorkflowSummary step="end">\n  <Interactions>\n    <ApprovalSummary completer="James Smith" endDate="1651001587664" owner="James.Smith" request="Approve modification of entitlement ADDirectDemodata group: CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com" startDate="1651001561152" state="Finished" workItemId="7f000001806719888180675c9006016b" workItemType="Approval"/>\n  </Interactions>\n</WorkflowSummary>\n'
                        id:
                          description: Unique identifier of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: string
                          example: 7f00000180281df7818028c03252085c
                        completionStatus:
                          type: string
                          description: Completion Status of the TaskResult. (From the TaskResult used to launch the Workflow).
                          enum:
                            - Success
                            - Warning
                            - Error
                            - Terminated
                            - TempError
                          example: Success
                        taskDefinition:
                          type: string
                          description: Name of the TaskDefinition of the TaskResult. (From the TaskResult used to launch the Workflow).
                          example: Workflow Launcher
                        terminated:
                          description: Flag to indicate this TaskResult is terminated. (From the TaskResult used to launch the Workflow).
                          type: boolean
                          example: true
                        launcher:
                          description: Launcher of the TaskResult. (From the TaskResult used to launch the Workflow).
                          type: string
                          example: spadmin
                        meta:
                          type: object
                          properties:
                            created:
                              description: DateTime when the TaskResult was created. (From the TaskResult used to launch the Workflow).
                              type: string
                              format: date-time
                              example: '2022-04-14T10:44:54.834-05:00'
                            location:
                              description: URL to the TaskResult. (From the TaskResult used to launch the Workflow).
                              type: string
                              example: http://localhost:8080/identityiq/scim/v2/TaskResults/7f00000180281df7818028c03252085c
                            lastModified:
                              description: DateTime of TaskResult last modification. (From the TaskResult used to launch the Workflow).
                              type: string
                              format: date-time
                              example: '2022-04-05T15:52:30.119-05:00'
                            version:
                              description: TaskResult version. (From the TaskResult used to launch the Workflow).
                              type: string
                              example: '"W"1649951094834"'
                            resourceType:
                              description: Resource type of the metadata subject. (From the TaskResult used to launch the Workflow).
                              type: string
                              example: TaskResult
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
