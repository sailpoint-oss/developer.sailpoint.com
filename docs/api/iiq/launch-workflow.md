## OpenAPI

```yaml POST /LaunchedWorkflows
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
    post:
      description: Endpoint to launch or execute a Workflow. A payload for the request is required and this can include inputs specific to the Workflow being launched.
      operationId: launchWorkflow
      security:
        - basicAuth: []
      parameters:
        - in: query
          name: attributes
          schema:
            type: string
            example: input
          description: A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.
        - in: query
          name: excludedAttributes
          schema:
            type: string
            example: workflowName
          description: A comma-separated list of attributes to exclude from the response. *Some attributes cannot be excluded.*
      requestBody:
        required: true
        content:
          application/scim+json:
            schema:
              properties:
                schemas:
                  type: array
                  description: Schemas related to Launched Workflows.
                  items:
                    example:
                      - urn:ietf:params:scim:schemas:sailpoint:1.0:LaunchedWorkflow
                      - urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult
                workflowName:
                  type: string
                  description: Name of the Workflow to launch.
                  example: LCM Manage Passwords
                input:
                  type: array
                  description: A list of input attributes of the Launched Workflow.
                  items:
                    properties:
                      key:
                        type: string
                        description: The attribute key.
                        example: plan
                      value:
                        type: string
                        description: The attribute value.
                        example: |
                          <ProvisioningPlan>
                            <AccountRequest application="IIQ" op="Modify">
                              <Attributes>
                                <Map>
                                  <entry key="attachmentConfigList"/>
                                  <entry key="attachments"/>
                                  <entry key="flow" value="AccessRequest"/>
                                  <entry key="id" value="c0a8019c8100148081810095445a0437"/>
                                  <entry key="interface" value="LCM"/>
                                  <entry key="operation" value="RoleAdd"/>
                                </Map>
                              </Attributes>
                              <AttributeRequest assignmentId="b92d53be96e94b47bded399345236eb9" name="assignedRoles" op="Add" value="Benefits Clerk"/>
                            </AccountRequest>
                            <AccountRequest application="IIQ" op="Modify">
                              <Attributes>
                                <Map>
                                  <entry key="attachmentConfigList"/>
                                  <entry key="attachments"/>
                                  <entry key="flow" value="AccessRequest"/>
                                  <entry key="id" value="c0a8019c810014808181009544650438"/>
                                  <entry key="interface" value="LCM"/>
                                  <entry key="operation" value="RoleAdd"/>
                                </Map>
                              </Attributes>
                              <AttributeRequest assignmentId="e4ed87c2ad1f4f2cb13b35937ab1e78a" name="assignedRoles" op="Add" value="Benefits Manager"/>
                            </AccountRequest>
                            <Attributes>
                              <Map>
                                <entry key="identityRequestId" value="0000000001"/>
                                <entry key="requester" value="spadmin"/>
                                <entry key="source" value="LCM"/>
                              </Map>
                            </Attributes>
                            <ProvisioningTargets>
                              <ProvisioningTarget assignmentId="b92d53be96e94b47bded399345236eb9" role="Benefits Clerk">
                                <AccountSelection applicationId="c0a8019c81001480818100953c6c0362" applicationName="Active_Directory" roleName="Benefits Clerk - IT" selection="237">
                                  <AccountInfo displayName="AdamKennedy" nativeIdentity="237"/>
                                </AccountSelection>
                              </ProvisioningTarget>
                              <ProvisioningTarget assignmentId="e4ed87c2ad1f4f2cb13b35937ab1e78a" role="Benefits Manager">
                                <AccountSelection applicationId="c0a8019c81001480818100953c6c0362" applicationName="Active_Directory" roleName="Benefits Clerk - IT" selection="237">
                                  <AccountInfo displayName="AdamKennedy" nativeIdentity="237"/>
                                </AccountSelection>
                                <AccountSelection applicationId="c0a8019c81001480818100953c6c0362" applicationName="Active_Directory" roleName="Benefits Manager - IT" selection="237">
                                  <AccountInfo displayName="AdamKennedy" nativeIdentity="237"/>
                                </AccountSelection>
                              </ProvisioningTarget>
                              <ProvisioningTarget assignmentId="ce66fb154b1e428eb72cd11a66a15164" retain="true" role="Payroll Analyst">
                                <AccountSelection applicationId="c0a8019c81001480818100953c6c0362" applicationName="Active_Directory" roleName="Payroll General Access - IT" selection="237">
                                  <AccountInfo displayName="AdamKennedy" nativeIdentity="237"/>
                                </AccountSelection>
                                <AccountSelection applicationId="c0a8019c81001480818100953e3e0373" applicationName="Composite_ERP_Global_Platform" selection="237">
                                  <AccountInfo displayName="AdamKennedy" nativeIdentity="237"/>
                                </AccountSelection>
                              </ProvisioningTarget>
                            </ProvisioningTargets>
                            <Requesters>
                              <Reference class="sailpoint.object.Identity" id="c0a8019c8100148081810094e34d00ea" name="spadmin"/>
                            </Requesters>
                          </ProvisioningPlan>
                      type:
                        type: string
                        description: The attribute type.
                        example: application/xml
          '*/*':
            schema:
              properties:
                schemas:
                  type: array
                  description: Schemas related to Launched Workflows.
                  items:
                    example:
                      - urn:ietf:params:scim:schemas:sailpoint:1.0:LaunchedWorkflow
                      - urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult
                workflowName:
                  type: string
                  description: Name of the Workflow to launch.
                  example: LCM Manage Passwords
                input:
                  type: array
                  description: A list of input attributes of the Launched Workflow.
                  items:
                    properties:
                      key:
                        type: string
                        description: The attribute key.
                        example: plan
                      value:
                        type: string
                        description: The attribute value.
                        example: |
                          <ProvisioningPlan>
                            <AccountRequest application="IIQ" op="Modify">
                              <Attributes>
                                <Map>
                                  <entry key="attachmentConfigList"/>
                                  <entry key="attachments"/>
                                  <entry key="flow" value="AccessRequest"/>
                                  <entry key="id" value="c0a8019c8100148081810095445a0437"/>
                                  <entry key="interface" value="LCM"/>
                                  <entry key="operation" value="RoleAdd"/>
                                </Map>
                              </Attributes>
                              <AttributeRequest assignmentId="b92d53be96e94b47bded399345236eb9" name="assignedRoles" op="Add" value="Benefits Clerk"/>
                            </AccountRequest>
                            <AccountRequest application="IIQ" op="Modify">
                              <Attributes>
                                <Map>
                                  <entry key="attachmentConfigList"/>
                                  <entry key="attachments"/>
                                  <entry key="flow" value="AccessRequest"/>
                                  <entry key="id" value="c0a8019c810014808181009544650438"/>
                                  <entry key="interface" value="LCM"/>
                                  <entry key="operation" value="RoleAdd"/>
                                </Map>
                              </Attributes>
                              <AttributeRequest assignmentId="e4ed87c2ad1f4f2cb13b35937ab1e78a" name="assignedRoles" op="Add" value="Benefits Manager"/>
                            </AccountRequest>
                            <Attributes>
                              <Map>
                                <entry key="identityRequestId" value="0000000001"/>
                                <entry key="requester" value="spadmin"/>
                                <entry key="source" value="LCM"/>
                              </Map>
                            </Attributes>
                            <ProvisioningTargets>
                              <ProvisioningTarget assignmentId="b92d53be96e94b47bded399345236eb9" role="Benefits Clerk">
                                <AccountSelection applicationId="c0a8019c81001480818100953c6c0362" applicationName="Active_Directory" roleName="Benefits Clerk - IT" selection="237">
                                  <AccountInfo displayName="AdamKennedy" nativeIdentity="237"/>
                                </AccountSelection>
                              </ProvisioningTarget>
                              <ProvisioningTarget assignmentId="e4ed87c2ad1f4f2cb13b35937ab1e78a" role="Benefits Manager">
                                <AccountSelection applicationId="c0a8019c81001480818100953c6c0362" applicationName="Active_Directory" roleName="Benefits Clerk - IT" selection="237">
                                  <AccountInfo displayName="AdamKennedy" nativeIdentity="237"/>
                                </AccountSelection>
                                <AccountSelection applicationId="c0a8019c81001480818100953c6c0362" applicationName="Active_Directory" roleName="Benefits Manager - IT" selection="237">
                                  <AccountInfo displayName="AdamKennedy" nativeIdentity="237"/>
                                </AccountSelection>
                              </ProvisioningTarget>
                              <ProvisioningTarget assignmentId="ce66fb154b1e428eb72cd11a66a15164" retain="true" role="Payroll Analyst">
                                <AccountSelection applicationId="c0a8019c81001480818100953c6c0362" applicationName="Active_Directory" roleName="Payroll General Access - IT" selection="237">
                                  <AccountInfo displayName="AdamKennedy" nativeIdentity="237"/>
                                </AccountSelection>
                                <AccountSelection applicationId="c0a8019c81001480818100953e3e0373" applicationName="Composite_ERP_Global_Platform" selection="237">
                                  <AccountInfo displayName="AdamKennedy" nativeIdentity="237"/>
                                </AccountSelection>
                              </ProvisioningTarget>
                            </ProvisioningTargets>
                            <Requesters>
                              <Reference class="sailpoint.object.Identity" id="c0a8019c8100148081810094e34d00ea" name="spadmin"/>
                            </Requesters>
                          </ProvisioningPlan>
                      type:
                        type: string
                        description: The attribute type.
                        example: application/xml
      responses:
        '201':
          description: Executes a workflow and returns the resulting LaunchedWorkflow. **LaunchedWorkflow responses include attributes from the TaskResult related to the Workflow execution.**
          content:
            application/json:
              schema:
                type: object
                description: Response example for a POST request to execute a Workflow.
                properties:
                  targetName:
                    type: string
                    description: Target name of the TaskResult.
                    example: Ernest.Wagner
                  verified:
                    type: string
                    format: date-time
                    description: The verified date of the TaskResult.
                    example: '2022-05-26T11:17:13.481-05:00'
                  partitioned:
                    type: boolean
                    description: Flag to indicate if the TaskResult is partitioned.
                    example: false
                  completed:
                    type: string
                    format: date-time
                    description: The completed date of the TaskResult.
                    example: '2022-05-26T11:17:13.678-05:00'
                  type:
                    type: string
                    description: Type of the TaskResult.
                    example: LCM
                  launched:
                    type: string
                    description: The launched date of the TaskResult.
                  pendingSignOffs:
                    type: integer
                    description: Number of pending signoffs of this TaskResult.
                    example: 0
                  urn:ietf:params:scim:schemas:sailpoint:1.0:LaunchedWorkflow:
                    type: object
                    description: LaunchedWorkflow properties.
                    properties:
                      output:
                        type: array
                        items:
                          properties:
                            type:
                              type: string
                              description: The output attribute type.
                              example: application/int
                            value:
                              type: string
                              description: The output attribute value.
                              example: '0'
                            key:
                              type: string
                              description: The output attribute key.
                              example: workflowSummary
                      retries:
                        type: integer
                        description: The number of retries performed during the execution of provisioning activities.
                        example: 0
                      input:
                        type: array
                        items:
                          properties:
                            key:
                              type: string
                              description: The input attribute key.
                              example: optimisticProvisioning
                            value:
                              type: string
                              description: The input attribute value.
                              example: 'true'
                            type:
                              type: string
                              description: The input attribute type.
                              example: boolean
                      workflowSummary:
                        type: string
                        description: XML representation of the workflow summary.
                        example: |
                          <WorkflowSummary step="end"/>
                      workflowName:
                        type: string
                        description: Name of the workflow to launch.
                        example: LCM Manage Passwords.
                      identityRequestId:
                        type: string
                        description: Id representing the identity request.
                        example: '0000000004'
                      workflowCaseId:
                        type: string
                        description: Id representing the workflow case (a running instance of a workflow).
                        example: c0a8019c810011478181012862b81568
                  targetClass:
                    type: string
                    description: Target class of the Task Result.
                    example: Identity
                  meta:
                    description: Metadata for the LaunchedWorkflow TaskResult.
                    type: array
                    items:
                      properties:
                        created:
                          description: Datetime when the TaskResult for the LaunchedWorkflow was created.
                          type: string
                          format: date-time
                          example: '2022-03-31T14:52:40.245-05:00'
                        location:
                          description: URL to the TaskResult.
                          type: string
                          example: http://localhost:8080/identityiq/scim/v2/TaskResults/c0a8019c810011478181012862b51567
                        lastModified:
                          description: Datetime of LaunchedWorkflow TaskResult last modification
                          type: string
                          format: date-time
                          example: '2022-03-31T14:52:40.265-05:00'
                        version:
                          description: Version of the LaunchedWorkflow TaskResult.
                          type: string
                          example: '"W"1649951092552"'
                        resourceType:
                          description: Resource type of the metadata subject
                          type: string
                          example: LaunchedWorkflow
                  schemas:
                    type: array
                    description: Schemas related to LaunchedWorkflow.
                    items:
                      example:
                        - urn:ietf:params:scim:schemas:sailpoint:1.0:LaunchedWorkflow
                        - urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult
                  name:
                    type: string
                    description: Name of the TaskResult for the Workflow launch.
                    example: LCM Manage Passwords - 2
                  messages:
                    type: array
                    description: List of messages of the TaskResult.
                    items:
                      example:
                        - Connection error
                  Attributes:
                    type: object
                    description: A list of attributes of the TaskResult.
                    properties:
                      key:
                        type: string
                        description: The attribute key.
                        example: retries
                      value:
                        type: string
                        description: The attribute value.
                        example: '0'
                  id:
                    type: string
                    description: Id of the task result for the Workflow launch.
                    example: c0a8019c810011478181012862b51567
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
                  taskDefinition:
                    type: string
                    description: Name of the TaskDefinition of the TaskResult.
                    example: Workflow Launcher
                  terminated:
                    type: boolean
                    description: Flag to indicate this TaskResult is terminated.
                    example: false
                  launcher:
                    type: string
                    description: Launcher of the TaskResult.
                    example: spadmin
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
