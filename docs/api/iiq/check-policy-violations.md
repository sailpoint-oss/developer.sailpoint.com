## OpenAPI

```yaml POST /CheckedPolicyViolations
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
  /CheckedPolicyViolations:
    post:
      description: |
        >This submits a set of access items to request and a set of policies to check after the access provisioning is simulated in order to determine if policy violations would be created by provisioning the access items. It receives a payload that includes:  

        >**An identity:** Used as the recipient for the access items on the simulation. 

        >**A provisioning plan:** To specify the changes to be simulatedly provisioned in the provided identity  

        >**A list of policies:** to check after the simulation of provisioning plan was applied to the identity in order to determine if the access granted in the simulation causes new policy violations. 

        >Optionally you can pass a list of attributes, as query params, to be included or excluded from the response, this setting is applicable only to top level attributes as defined in the schema ***urn:ietf:params:scim:schemas:sailpoint:1.0:CheckedPolicyViolation.***  

        >**Valid values**: 
        **- policies**
         **- identity**
         **- plan**
         **- violations**
         **- leftBundles**
         **- rightBundles** 
      operationId: checkPolicyViolations
      security:
        - basicAuth: []
      parameters:
        - in: query
          name: attributes
          schema:
            type: string
          description: A list of attributes to indicate what top level attributes to include in the response
        - in: query
          name: authnPassword
          schema:
            type: string
          description: Password for authentication
        - in: query
          name: authnUsername
          schema:
            type: string
          description: Username for authentication
        - in: query
          name: excludedAttributes
          schema:
            type: string
          description: A list of attributes to indicate what top level attributes to exclude from the response
        - in: query
          name: lookupByName
          schema:
            type: boolean
          description: This is not required in this endpoint, the returned object is a new PolicyViolation and not one returned from the persistence layer. This is inherited from the BaseSCIMResource and is used to override the default id based lookup, and use a name based lookup instead, if for any reason the artifact id is not present.
          example: false
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                identity:
                  description: An identity for whom access is requested on the provisioning simulation
                  type: string
                  example:
                    identity: Ryan.Russell
                plan:
                  description: A provisioning plan detailing the access to request on the simulation
                  type: object
                  properties:
                    value:
                      type: object
                      properties:
                        accounts:
                          type: array
                          items:
                            type: object
                            properties:
                              op:
                                description: The operation to perform on the provisioning.
                                type: string
                                example: Modify
                              instance:
                                type: string
                                example: 'null'
                                description: A particular instance to provision this access to
                              application:
                                type: string
                                example: Active_Directory
                                description: The application that owns the access items in the request
                              attributes:
                                type: array
                                items:
                                  type: object
                                  properties:
                                    op:
                                      description: The operation to perform on the access item.
                                      type: string
                                      example: Add
                                    name:
                                      description: The type of access item to provision.
                                      type: string
                                      example: groupmbr
                                    value:
                                      description: The name of the access item to provision.
                                      type: string
                                      example: UnixAdministration
                    type:
                      type: string
                      example: application/sailpoint.object.ProvisioningPlan+json
                policies:
                  description: A list of policies to check for new policy violations on the access provisioned by the simulation.
                  type: array
                  items:
                    type: string
                  example:
                    - SOD Policy
                    - Entitlement Policy
                    - RandomPolicyNotExisting
      responses:
        '201':
          description: Returns a list of violations based on simulated requested access
          content:
            application/json:
              schema:
                type: object
                properties:
                  identity:
                    description: An identity for whom access was requested on the provisioning simulation
                    type: string
                    example:
                      identity: Ryan.Russell
                  meta:
                    type: object
                    properties:
                      resourceType:
                        description: ''
                        type: string
                        example: CheckedPolicyViolation
                  violations:
                    type: array
                    items:
                      properties:
                        entitlements:
                          description: An array of the entitlements used in the provisioning simulation.
                          type: array
                          items:
                            type: string
                          example:
                            - a2a
                            - a2b
                            - benefits
                        policyName:
                          description: The name of the policy that conflicted with the access items provisioned in the simulation causing policy violation.
                          type: string
                          example: SOD Policy
                        policyType:
                          description: The type of the policy that conflicted with the access items provisioned in the simulation causing policy violation(s).
                          type: string
                          example: SOD
                        description:
                          description: The description of the policy violation(s) caused by the access provisioned in the simulation.
                          type: string
                          example: Security design should not be combined with administrative permissions.
                        constraintName:
                          description: The specific constraint in the policy that conflicted with the access items provisioned in the simulation.
                          type: string
                          example: ' IT SOD-117'
                        leftBundles:
                          description: The left set of entitlements defined in the policy constraint in order to check against another set of entitlements for compliance.
                          type: array
                          items:
                            type: string
                          example:
                            - Security Architect - IT
                        rightBundles:
                          description: The right set of entitlements defined in the policy constraint in order to check against another set of entitlements for compliance.
                          type: array
                          items:
                            type: string
                          example:
                            - Unix Administrator - IT
                  schemas:
                    description: The SCIM schema for Checked Policy Violations.
                    type: array
                    items:
                      type: string
                      example: urn:ietf:params:scim:schemas:sailpoint:1.0:CheckedPolicyViolation
                  policies:
                    description: The set of policies used to check for conflicting access in the provisioning simulation
                    type: array
                    items:
                      type: string
                    example:
                      - SOD Policy
                      - Entitlement Policy
                      - RandomPolicyNotExisting
                  plan:
                    description: A provisioning plan detailing the access to request on the simulation
                    type: object
                    properties:
                      value:
                        type: object
                        properties:
                          accounts:
                            type: array
                            items:
                              type: object
                              properties:
                                op:
                                  description: The operation performed on the access in the provisioning simulation.
                                  type: string
                                  example: Modify
                                instance:
                                  type: string
                                  example: 'null'
                                  description: A particular instance to provision this access to
                                application:
                                  type: string
                                  example: Active_Directory
                                  description: The application that owns the access provisioned in the simulation.
                                attributes:
                                  type: array
                                  items:
                                    type: object
                                    properties:
                                      op:
                                        description: The operation performed on the access in the provisioning simulation.
                                        type: string
                                        example: Add
                                      name:
                                        description: The type of provisioned access.
                                        type: string
                                        example: groupmbr
                                      value:
                                        description: The name of the provisioned access items.
                                        type: string
                                        example: UnixAdministration
                      type:
                        type: string
                        example: application/sailpoint.object.ProvisioningPlan+json
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
