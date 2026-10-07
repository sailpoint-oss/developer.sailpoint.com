## OpenAPI

```yaml GET /search/v1/{index}/{id}
openapi: 3.0.1
info:
  title: Identity Security Cloud API
  description: Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
  termsOfService: https://developer.sailpoint.com/discuss/tos
  contact:
    name: Developer Relations
    url: https://developer.sailpoint.com/discuss/api-help
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT
  version: v1
servers:
  - url: https://{tenant}.api.identitynow.com
    description: This is the production API server.
    variables:
      tenant:
        default: sailpoint
        description: This is the name of your tenant, typically your company's name.
  - url: https://{apiUrl}
    description: This is the versioned API server.
    variables:
      apiUrl:
        default: sailpoint.api.identitynow.com
        description: This is the api url of your tenant
paths:
  /search/v1/{index}/{id}:
    get:
      description: |-
        Fetches a single document from the specified index, using the specified document ID.
        **Note:** Response fields with an underscore (`_`) prefix, such as `_type` and `_index`, are internal metadata fields. These fields are for SailPoint internal use only and are subject to change without notice. Do not rely on them in your integrations.
      operationId: searchGetV1
      security:
        - userAuth:
            - sp:search:read
        - applicationAuth:
            - sp:search:read
      parameters:
        - in: path
          name: index
          description: |
            The index from which to fetch the specified document.

            The currently supported index names are: *accessprofiles*, *accountactivities*, *entitlements*, *events*, *identities*, and *roles*.
          schema:
            type: string
            enum:
              - accessprofiles
              - accountactivities
              - entitlements
              - events
              - identities
              - roles
          required: true
          example: identities
        - in: path
          name: id
          description: ID of the requested document.
          schema:
            type: string
          required: true
          example: 2c91808568c529c60168cca6f90c1313
          x-sailpoint-resource-operation-id:
            - listAccessProfilesV1
            - listAccountActivitiesV1
            - listEntitlementsV1
            - listRolesV1
            - listIdentitiesV1
      responses:
        '200':
          description: The requested document.
          content:
            application/json:
              schema:
                type: object
                oneOf:
                  - description: 'More complete representation of an access profile.  '
                    allOf:
                      - type: object
                        properties:
                          description:
                            type: string
                            description: Access item's description.
                            example: Admin access
                          created:
                            type: string
                            description: ISO-8601 date-time referring to the time when the object was created.
                            nullable: true
                            format: date-time
                            example: '2018-06-25T20:22:28.104Z'
                          modified:
                            type: string
                            description: ISO-8601 date-time referring to the time when the object was last modified.
                            nullable: true
                            format: date-time
                            example: '2018-06-25T20:22:28.104Z'
                          synced:
                            type: string
                            description: |-
                              ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                              This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                              There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                            nullable: true
                            format: date-time
                            example: '2018-06-25T20:22:33.104Z'
                          enabled:
                            type: boolean
                            description: Indicates whether the access item is currently enabled.
                            default: false
                            example: true
                          requestable:
                            type: boolean
                            description: Indicates whether the access item can be requested.
                            default: true
                            example: true
                          requestCommentsRequired:
                            type: boolean
                            description: Indicates whether comments are required for requests to access the item.
                            default: false
                            example: false
                          owner:
                            type: object
                            description: Owner's identity.
                            properties:
                              type:
                                type: string
                                description: Owner's DTO type.
                                enum:
                                  - IDENTITY
                                example: IDENTITY
                              id:
                                type: string
                                description: Owner's identity ID.
                                example: 2c9180a46faadee4016fb4e018c20639
                              name:
                                type: string
                                description: Owner's display name.
                                example: Support
                              email:
                                type: string
                                description: Owner's email.
                                example: cloud-support@sailpoint.com
                        title: baseaccess
                      - type: object
                        required:
                          - id
                          - name
                        properties:
                          id:
                            type: string
                            description: Access profile's ID.
                            example: 2c9180825a6c1adc015a71c9023f0818
                          name:
                            type: string
                            description: Access profile's name.
                            example: Cloud Eng
                          source:
                            type: object
                            description: Access profile's source.
                            properties:
                              id:
                                type: string
                                description: Source's ID.
                                example: ff8081815757d4fb0157588f3d9d008f
                              name:
                                type: string
                                description: Source's name.
                                example: Employees
                          entitlements:
                            type: array
                            description: Entitlements the access profile has access to.
                            items:
                              type: object
                              properties:
                                hasPermissions:
                                  type: boolean
                                  description: Indicates whether the entitlement has permissions.
                                  default: false
                                  example: false
                                description:
                                  type: string
                                  description: Entitlement's description.
                                  nullable: true
                                  example: Cloud engineering
                                attribute:
                                  type: string
                                  description: Entitlement attribute's name.
                                  example: memberOf
                                value:
                                  type: string
                                  description: Entitlement's value.
                                  example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                schema:
                                  type: string
                                  description: Entitlement's schema.
                                  example: group
                                privileged:
                                  type: boolean
                                  description: Indicates whether the entitlement is privileged.
                                  default: false
                                  example: false
                                id:
                                  type: string
                                  description: Entitlement's ID.
                                  example: 2c918084575812550157589064f33b89
                                name:
                                  type: string
                                  description: Entitlement's name.
                                  example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                              title: baseentitlement
                          entitlementCount:
                            type: integer
                            description: Number of entitlements.
                            example: 5
                          segments:
                            type: array
                            description: Segments with the access profile.
                            items:
                              type: object
                              properties:
                                id:
                                  type: string
                                  example: b009b6e3-b56d-41d9-8735-cb532ea0b017
                                  description: Segment's unique ID.
                                name:
                                  type: string
                                  example: Test Segment
                                  description: Segment's display name.
                              title: basesegment
                          segmentCount:
                            type: integer
                            description: Number of segments with the access profile.
                            format: int32
                            example: 1
                          tags:
                            type: array
                            description: Tags that have been applied to the object.
                            items:
                              type: string
                            example:
                              - TAG_1
                              - TAG_2
                            title: tags
                          apps:
                            type: array
                            description: Applications with the access profile
                            items:
                              type: object
                              properties:
                                id:
                                  type: string
                                  example: 2c91808568c529c60168cca6f90c1313
                                  description: The unique ID of the referenced object.
                                name:
                                  type: string
                                  description: Name of application
                                  example: Travel and Expense
                                description:
                                  description: Description of application.
                                  type: string
                                  example: Travel and Expense Application
                                owner:
                                  type: object
                                  description: Owner's identity.
                                  properties:
                                    type:
                                      type: string
                                      description: Owner's DTO type.
                                      enum:
                                        - IDENTITY
                                      example: IDENTITY
                                    id:
                                      type: string
                                      description: Owner's identity ID.
                                      example: 2c9180a46faadee4016fb4e018c20639
                                    name:
                                      type: string
                                      description: Owner's display name.
                                      example: John Doe
                                    email:
                                      type: string
                                      description: Owner's email.
                                      example: john.doe@sailpoint.com
                              title: accessapps
                    title: accessprofiledocument
                  - description: AccountActivity
                    type: object
                    properties:
                      id:
                        type: string
                        example: 2c91808375d8e80a0175e1f88a575222
                        description: ID of account activity.
                      action:
                        type: string
                        description: Type of action performed in the activity.
                        externalDocs:
                          description: Learn more about account activity action types
                          url: https://documentation.sailpoint.com/saas/help/search/searchable-fields.html#searching-account-activity-data
                        example: Identity Refresh.
                      created:
                        type: string
                        description: ISO-8601 date-time referring to the time when the object was created.
                        nullable: true
                        format: date-time
                        example: '2018-06-25T20:22:28.104Z'
                      modified:
                        type: string
                        description: ISO-8601 date-time referring to the time when the object was last modified.
                        nullable: true
                        format: date-time
                        example: '2018-06-25T20:22:28.104Z'
                      synced:
                        type: string
                        description: |-
                          ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                          This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                          There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                        example: '2018-06-25T20:22:28.104Z'
                      stage:
                        type: string
                        description: Activity's current stage.
                        example: Completed
                      status:
                        type: string
                        description: Activity's current status.
                        example: Complete
                      requester:
                        allOf:
                          - type: object
                            properties:
                              id:
                                type: string
                                example: 2c91808568c529c60168cca6f90c1313
                                description: The unique ID of the referenced object.
                              name:
                                type: string
                                example: John Doe
                                description: The human readable name of the referenced object.
                            title: reference
                          - type: object
                            properties:
                              type:
                                type: string
                                example: Identity
                                description: Type of object
                        title: activityidentity
                      recipient:
                        allOf:
                          - type: object
                            properties:
                              id:
                                type: string
                                example: 2c91808568c529c60168cca6f90c1313
                                description: The unique ID of the referenced object.
                              name:
                                type: string
                                example: John Doe
                                description: The human readable name of the referenced object.
                            title: reference
                          - type: object
                            properties:
                              type:
                                type: string
                                example: Identity
                                description: Type of object
                        title: activityidentity
                      trackingNumber:
                        type: string
                        description: Account activity's tracking number.
                        example: 61aad0c9e8134eca89e76a35e0cabe3f
                      errors:
                        type: array
                        description: Errors provided by the source while completing account actions.
                        items:
                          type: string
                        nullable: true
                        example: null
                      warnings:
                        type: array
                        description: Warnings provided by the source while completing account actions.
                        items:
                          type: string
                        nullable: true
                        example: null
                      approvals:
                        type: array
                        description: Approvals performed on an item during activity.
                        items:
                          type: object
                          properties:
                            comments:
                              type: array
                              items:
                                type: object
                                properties:
                                  comment:
                                    type: string
                                    description: The comment text
                                    example: This request was autoapproved by our automated ETS subscriber.
                                  commenter:
                                    type: string
                                    description: The name of the commenter
                                    example: Automated AR Approval
                                  date:
                                    type: string
                                    nullable: true
                                    format: date-time
                                    example: '2018-06-25T20:22:28.104Z'
                                    description: A date-time in ISO-8601 format
                                    title: datetime
                                title: approvalcomment-2
                            modified:
                              type: string
                              nullable: true
                              format: date-time
                              example: '2018-06-25T20:22:28.104Z'
                              description: A date-time in ISO-8601 format
                              title: datetime
                            owner:
                              allOf:
                                - type: object
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808568c529c60168cca6f90c1313
                                      description: The unique ID of the referenced object.
                                    name:
                                      type: string
                                      example: John Doe
                                      description: The human readable name of the referenced object.
                                  title: reference
                                - type: object
                                  properties:
                                    type:
                                      type: string
                                      example: Identity
                                      description: Type of object
                              title: activityidentity
                            result:
                              type: string
                              description: The result of the approval
                              example: Finished
                            attributeRequest:
                              type: object
                              properties:
                                name:
                                  type: string
                                  description: Attribute name.
                                  example: groups
                                op:
                                  type: string
                                  description: Operation to perform on attribute.
                                  example: Add
                                value:
                                  oneOf:
                                    - type: string
                                      example: '3203537556531076'
                                    - type: array
                                      items:
                                        type: string
                                        example:
                                          - '3203537556531076'
                                          - '1263537556831096'
                                  description: Value of attribute.
                              title: attributerequest
                            source:
                              allOf:
                                - type: object
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808568c529c60168cca6f90c1313
                                      description: The unique ID of the referenced object.
                                    name:
                                      type: string
                                      example: John Doe
                                      description: The human readable name of the referenced object.
                                  title: reference
                                - type: object
                                  properties:
                                    type:
                                      type: string
                                      example: Delimited File
                                      description: Type of source returned.
                              title: accountsource
                          title: approval
                      originalRequests:
                        type: array
                        description: Original actions that triggered all individual source actions related to the account action.
                        items:
                          type: object
                          properties:
                            accountId:
                              type: string
                              description: Account ID.
                              example: CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com
                            result:
                              type: object
                              properties:
                                status:
                                  type: string
                                  description: Request result status
                                  example: Manual Task Created
                              title: result
                            attributeRequests:
                              type: array
                              description: Attribute changes requested for account.
                              items:
                                type: object
                                properties:
                                  name:
                                    type: string
                                    description: Attribute name.
                                    example: groups
                                  op:
                                    type: string
                                    description: Operation to perform on attribute.
                                    example: Add
                                  value:
                                    oneOf:
                                      - type: string
                                        example: '3203537556531076'
                                      - type: array
                                        items:
                                          type: string
                                          example:
                                            - '3203537556531076'
                                            - '1263537556831096'
                                    description: Value of attribute.
                                title: attributerequest
                            op:
                              type: string
                              description: Operation used.
                              example: add
                            source:
                              allOf:
                                - type: object
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808568c529c60168cca6f90c1313
                                      description: The unique ID of the referenced object.
                                    name:
                                      type: string
                                      example: John Doe
                                      description: The human readable name of the referenced object.
                                  title: reference
                                - type: object
                                  properties:
                                    type:
                                      type: string
                                      example: Delimited File
                                      description: Type of source returned.
                              title: accountsource
                              description: Account's source.
                          title: originalrequest
                      expansionItems:
                        type: array
                        description: Controls that translated the attribute requests into actual provisioning actions on the source.
                        items:
                          type: object
                          properties:
                            accountId:
                              type: string
                              description: The ID of the account
                              example: 2c91808981f58ea601821c3e93482e6f
                            cause:
                              type: string
                              example: Role
                              description: Cause of the expansion item.
                            name:
                              type: string
                              description: The name of the item
                              example: smartsheet-role
                            attributeRequest:
                              type: object
                              properties:
                                name:
                                  type: string
                                  description: Attribute name.
                                  example: groups
                                op:
                                  type: string
                                  description: Operation to perform on attribute.
                                  example: Add
                                value:
                                  oneOf:
                                    - type: string
                                      example: '3203537556531076'
                                    - type: array
                                      items:
                                        type: string
                                        example:
                                          - '3203537556531076'
                                          - '1263537556831096'
                                  description: Value of attribute.
                              title: attributerequest
                            source:
                              allOf:
                                - type: object
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808568c529c60168cca6f90c1313
                                      description: The unique ID of the referenced object.
                                    name:
                                      type: string
                                      example: John Doe
                                      description: The human readable name of the referenced object.
                                  title: reference
                                - type: object
                                  properties:
                                    type:
                                      type: string
                                      example: Delimited File
                                      description: Type of source returned.
                              title: accountsource
                            id:
                              type: string
                              description: ID of the expansion item
                              example: ac2887ffe0e7435a8c18c73f7ae94c7b
                            state:
                              type: string
                              description: State of the expansion item
                              example: EXECUTING
                          title: expansionitem
                      accountRequests:
                        type: array
                        description: Account data for each individual source action triggered by the original requests.
                        items:
                          type: object
                          properties:
                            accountId:
                              type: string
                              description: Unique ID of the account
                              example: John.Doe
                            attributeRequests:
                              type: array
                              items:
                                type: object
                                properties:
                                  name:
                                    type: string
                                    description: Attribute name.
                                    example: groups
                                  op:
                                    type: string
                                    description: Operation to perform on attribute.
                                    example: Add
                                  value:
                                    oneOf:
                                      - type: string
                                        example: '3203537556531076'
                                      - type: array
                                        items:
                                          type: string
                                          example:
                                            - '3203537556531076'
                                            - '1263537556831096'
                                    description: Value of attribute.
                                title: attributerequest
                            op:
                              type: string
                              example: Modify
                              description: The operation that was performed
                            provisioningTarget:
                              allOf:
                                - type: object
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808568c529c60168cca6f90c1313
                                      description: The unique ID of the referenced object.
                                    name:
                                      type: string
                                      example: John Doe
                                      description: The human readable name of the referenced object.
                                  title: reference
                                - type: object
                                  properties:
                                    type:
                                      type: string
                                      example: Delimited File
                                      description: Type of source returned.
                              title: accountsource
                            result:
                              type: object
                              properties:
                                errors:
                                  type: array
                                  items:
                                    type: string
                                    example: |-
                                      [ConnectorError] [
                                        {
                                          "code": "unrecognized_keys",
                                          "keys": [
                                            "groups"
                                          ],
                                          "path": [],
                                          "message": "Unrecognized key(s) in object: 'groups'"
                                        }
                                      ] (requestId: 5e9d6df5-9b1b-47d9-9bf1-dc3a2893299e)
                                  description: Error message.
                                status:
                                  type: string
                                  description: The status of the account request
                                  example: failed
                                ticketId:
                                  type: string
                                  nullable: true
                                  example: null
                                  description: ID of associated ticket.
                            source:
                              allOf:
                                - type: object
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808568c529c60168cca6f90c1313
                                      description: The unique ID of the referenced object.
                                    name:
                                      type: string
                                      example: John Doe
                                      description: The human readable name of the referenced object.
                                  title: reference
                                - type: object
                                  properties:
                                    type:
                                      type: string
                                      example: Delimited File
                                      description: Type of source returned.
                              title: accountsource
                          title: accountrequest
                      sources:
                        type: string
                        description: Sources involved in the account activity.
                        example: smartsheet-test, airtable-v4, IdentityNow
                    title: accountactivitydocument
                  - description: Entitlement
                    allOf:
                      - type: object
                        required:
                          - id
                          - name
                        properties:
                          id:
                            type: string
                            example: 2c91808375d8e80a0175e1f88a575222
                            description: ID of the referenced object.
                          name:
                            type: string
                            example: john.doe
                            description: The human readable name of the referenced object.
                        title: basedocument
                      - type: object
                        properties:
                          modified:
                            type: string
                            description: ISO-8601 date-time referring to the time when the object was last modified.
                            nullable: true
                            format: date-time
                            example: '2018-06-25T20:22:28.104Z'
                          synced:
                            type: string
                            description: |-
                              ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                              This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                              There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                          displayName:
                            type: string
                            description: Entitlement's display name.
                            example: Admin
                          source:
                            type: object
                            description: Entitlement's source.
                            properties:
                              id:
                                type: string
                                description: ID of entitlement's source.
                                example: 2c91808b6e9e6fb8016eec1a2b6f7b5f
                              name:
                                type: string
                                description: Display name of entitlement's source.
                                example: ODS-HR-Employees
                              type:
                                type: string
                                example: SOURCE
                                description: Type of object.
                          segments:
                            type: array
                            description: Segments with the entitlement.
                            items:
                              type: object
                              properties:
                                id:
                                  type: string
                                  example: b009b6e3-b56d-41d9-8735-cb532ea0b017
                                  description: Segment's unique ID.
                                name:
                                  type: string
                                  example: Test Segment
                                  description: Segment's display name.
                              title: basesegment
                          segmentCount:
                            type: integer
                            description: Number of segments with the role.
                            format: int32
                            example: 1
                          requestable:
                            type: boolean
                            description: Indicates whether the entitlement is requestable.
                            default: false
                            example: false
                          cloudGoverned:
                            type: boolean
                            description: Indicates whether the entitlement is cloud governed.
                            default: false
                            example: false
                          created:
                            type: string
                            description: ISO-8601 date-time referring to the time when the object was created.
                            nullable: true
                            format: date-time
                            example: '2018-06-25T20:22:28.104Z'
                          privileged:
                            type: boolean
                            description: Indicates whether the entitlement is privileged.
                            default: false
                            example: false
                          tags:
                            type: array
                            description: Tags that have been applied to the object.
                            items:
                              type: string
                            example:
                              - TAG_1
                              - TAG_2
                            title: tags
                          attribute:
                            type: string
                            description: Attribute information for the entitlement.
                            example: groups
                          value:
                            type: string
                            description: Value of the entitlement.
                            example: 1733ff75-441e-4327-9bfc-3ac445fd8cd1
                          sourceSchemaObjectType:
                            type: string
                            description: Source schema object type of the entitlement.
                            example: group
                          schema:
                            type: string
                            description: Schema type of the entitlement.
                            example: group
                          hash:
                            type: string
                            description: Read-only calculated hash value of an entitlement.
                            example: c6fab95235584cca98a454a2f51e5683bc77d6a0
                          attributes:
                            type: object
                            additionalProperties: true
                            description: Attributes of the entitlement.
                          truncatedAttributes:
                            type: array
                            description: Truncated attributes of the entitlement.
                            items:
                              type: string
                          containsDataAccess:
                            type: boolean
                            description: Indicates whether the entitlement contains data access.
                            default: false
                          manuallyUpdatedFields:
                            type: object
                            description: Indicates whether the entitlement's display name and/or description have been manually updated.
                            nullable: true
                            properties:
                              DESCRIPTION:
                                type: boolean
                                default: false
                                example: false
                              DISPLAY_NAME:
                                type: boolean
                                default: false
                                example: false
                          permissions:
                            type: array
                            items:
                              type: object
                              properties:
                                target:
                                  type: string
                                  description: The target the permission would grants rights on.
                                  example: SYS.GV_$TRANSACTION
                                rights:
                                  type: array
                                  description: All the rights (e.g. actions) that this permission allows on the target
                                  items:
                                    type: string
                                    example: SELECT
                    title: entitlementdocument
                  - type: object
                    description: Event
                    properties:
                      id:
                        type: string
                        example: 2c91808375d8e80a0175e1f88a575222
                        description: ID of the entitlement.
                      name:
                        type: string
                        example: Add Entitlement Passed
                        description: Name of the entitlement.
                      created:
                        type: string
                        description: ISO-8601 date-time referring to the time when the object was created.
                        nullable: true
                        format: date-time
                        example: '2018-06-25T20:22:28.104Z'
                      synced:
                        type: string
                        description: |-
                          ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                          This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                          There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                        example: '2018-06-25T20:22:28.104Z'
                      action:
                        type: string
                        description: Name of the event as it's displayed in audit reports.
                        example: AddEntitlement
                      type:
                        type: string
                        description: Event type. Refer to [Event Types](https://documentation.sailpoint.com/saas/help/search/index.html#event-types) for a list of event types and their meanings.
                        example: ACCESS_ITEM
                      actor:
                        type: object
                        properties:
                          name:
                            type: string
                            description: Name of the actor that generated the event.
                            example: System
                      target:
                        type: object
                        properties:
                          name:
                            type: string
                            description: Name of the target, or recipient, of the event.
                            example: Carol.Adams
                      stack:
                        type: string
                        description: The event's stack.
                        example: tpe
                      trackingNumber:
                        type: string
                        description: ID of the group of events.
                        example: 63f891e0735f4cc8bf1968144a1e7440
                      ipAddress:
                        type: string
                        description: Target system's IP address.
                        example: 52.52.97.85
                      details:
                        type: string
                        description: ID of event's details.
                        example: 73b65dfbed1842548c207432a18c84b0
                      attributes:
                        type: object
                        description: Attributes involved in the event.
                        additionalProperties: true
                        example:
                          pod: stg03-useast1
                          org: acme
                          sourceName: SailPoint
                      objects:
                        type: array
                        description: Objects the event is happening to.
                        items:
                          type: string
                          example: AUTHENTICATION
                      operation:
                        type: string
                        description: Operation, or action, performed during the event.
                        example: ADD
                      status:
                        type: string
                        description: Event status. Refer to [Event Statuses](https://documentation.sailpoint.com/saas/help/search/index.html#event-statuses) for a list of event statuses and their meanings.
                        example: PASSED
                      technicalName:
                        type: string
                        description: Event's normalized name. This normalized name always follows the pattern of 'objects_operation_status'.
                        example: ENTITLEMENT_ADD_PASSED
                    title: eventdocument
                  - description: Identity
                    allOf:
                      - type: object
                        required:
                          - id
                          - name
                        properties:
                          id:
                            type: string
                            example: 2c91808375d8e80a0175e1f88a575222
                            description: ID of the referenced object.
                          name:
                            type: string
                            example: john.doe
                            description: The human readable name of the referenced object.
                        title: basedocument
                      - allOf:
                          - type: object
                            properties:
                              id:
                                type: string
                                example: 2c91808568c529c60168cca6f90c1313
                                description: The unique ID of the referenced object.
                              name:
                                type: string
                                example: John Doe
                                description: The human readable name of the referenced object.
                            title: reference
                          - type: object
                            properties:
                              displayName:
                                type: string
                                example: John Q. Doe
                        title: displayreference
                      - type: object
                        properties:
                          displayName:
                            type: string
                            example: Carol.Adams
                            description: Identity's display name.
                          firstName:
                            type: string
                            description: Identity's first name.
                            example: Carol
                          lastName:
                            type: string
                            description: Identity's last name.
                            example: Adams
                          email:
                            type: string
                            description: Identity's primary email address.
                            example: Carol.Adams@sailpointdemo.com
                          created:
                            type: string
                            description: ISO-8601 date-time referring to the time when the object was created.
                            nullable: true
                            format: date-time
                            example: '2018-06-25T20:22:28.104Z'
                          modified:
                            type: string
                            description: ISO-8601 date-time referring to the time when the object was last modified.
                            nullable: true
                            format: date-time
                            example: '2018-06-25T20:22:28.104Z'
                          phone:
                            type: string
                            description: Identity's phone number.
                            example: +1 440-527-3672
                          synced:
                            type: string
                            description: |-
                              ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                              This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                              There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                          inactive:
                            type: boolean
                            description: Indicates whether the identity is inactive.
                            default: false
                            example: false
                          protected:
                            type: boolean
                            description: Indicates whether the identity is protected.
                            default: false
                            example: false
                          status:
                            type: string
                            description: Identity's status in SailPoint.
                            example: UNREGISTERED
                          employeeNumber:
                            type: string
                            description: Identity's employee number.
                            example: 1a2a3d4e
                          manager:
                            type: object
                            description: Identity's manager.
                            nullable: true
                            properties:
                              id:
                                type: string
                                description: ID of identity's manager.
                                example: 2c9180867dfe694b017e208e27c05799
                              name:
                                type: string
                                description: Name of identity's manager.
                                example: Amanda.Ross
                              displayName:
                                type: string
                                description: Display name of identity's manager.
                                example: Amanda.Ross
                          isManager:
                            type: boolean
                            description: Indicates whether the identity is a manager of other identities.
                            example: false
                          identityProfile:
                            type: object
                            description: Identity's identity profile.
                            properties:
                              id:
                                type: string
                                description: Identity profile's ID.
                                example: 3bc8ad26b8664945866b31339d1ff7d2
                              name:
                                type: string
                                description: Identity profile's name.
                                example: HR Employees
                          source:
                            type: object
                            description: Identity's source.
                            properties:
                              id:
                                type: string
                                description: ID of identity's source.
                                example: 2c91808b6e9e6fb8016eec1a2b6f7b5f
                              name:
                                type: string
                                description: Display name of identity's source.
                                example: ODS-HR-Employees
                          attributes:
                            type: object
                            description: Map or dictionary of key/value pairs.
                            additionalProperties: true
                            example:
                              country: US
                              firstname: Carol
                              cloudStatus: UNREGISTERED
                          disabled:
                            type: boolean
                            description: Indicates whether the identity is disabled.
                            default: false
                            example: false
                          locked:
                            type: boolean
                            description: Indicates whether the identity is locked.
                            default: false
                            example: false
                          processingState:
                            type: string
                            description: Identity's processing state.
                            nullable: true
                            example: ERROR
                          processingDetails:
                            description: Identity's processing details.
                            nullable: true
                            type: object
                            properties:
                              date:
                                type: string
                                nullable: true
                                format: date-time
                                example: '2018-06-25T20:22:28.104Z'
                                description: A date-time in ISO-8601 format
                                title: datetime
                              stage:
                                type: string
                                example: In Process
                              retryCount:
                                type: integer
                                example: 0
                                format: int32
                              stackTrace:
                                type: string
                                example: <stack trace>
                              message:
                                type: string
                                example: <message>
                            title: processingdetails
                          accounts:
                            type: array
                            description: List of accounts associated with the identity.
                            items:
                              allOf:
                                - type: object
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808568c529c60168cca6f90c1313
                                      description: The unique ID of the referenced object.
                                    name:
                                      type: string
                                      example: John Doe
                                      description: The human readable name of the referenced object.
                                  title: reference
                                - type: object
                                  properties:
                                    accountId:
                                      type: string
                                      description: Account ID.
                                      example: John.Doe
                                    source:
                                      allOf:
                                        - type: object
                                          properties:
                                            id:
                                              type: string
                                              example: 2c91808568c529c60168cca6f90c1313
                                              description: The unique ID of the referenced object.
                                            name:
                                              type: string
                                              example: John Doe
                                              description: The human readable name of the referenced object.
                                          title: reference
                                        - type: object
                                          properties:
                                            type:
                                              type: string
                                              example: Delimited File
                                              description: Type of source returned.
                                      title: accountsource
                                    disabled:
                                      type: boolean
                                      description: Indicates whether the account is disabled.
                                      default: false
                                      example: false
                                    locked:
                                      type: boolean
                                      description: Indicates whether the account is locked.
                                      default: false
                                      example: false
                                    privileged:
                                      type: boolean
                                      description: Indicates whether the account is privileged.
                                      default: false
                                      example: false
                                    manuallyCorrelated:
                                      type: boolean
                                      description: Indicates whether the account has been manually correlated to an identity.
                                      default: false
                                      example: false
                                    passwordLastSet:
                                      type: string
                                      nullable: true
                                      format: date-time
                                      example: '2018-06-25T20:22:28.104Z'
                                      description: A date-time in ISO-8601 format
                                      title: datetime
                                    entitlementAttributes:
                                      type: object
                                      nullable: true
                                      description: Map or dictionary of key/value pairs.
                                      additionalProperties: true
                                      example:
                                        moderator: true
                                        admin: true
                                        trust_level: '4'
                                    created:
                                      type: string
                                      description: ISO-8601 date-time referring to the time when the object was created.
                                      nullable: true
                                      format: date-time
                                      example: '2018-06-25T20:22:28.104Z'
                                    supportsPasswordChange:
                                      type: boolean
                                      description: Indicates whether the account supports password change.
                                      default: false
                                      example: false
                                    accountAttributes:
                                      type: object
                                      nullable: true
                                      description: Map or dictionary of key/value pairs.
                                      additionalProperties: true
                                      example:
                                        type: global
                                        admin: true
                                        trust_level: '4'
                              title: baseaccount
                          accountCount:
                            type: integer
                            description: Number of accounts associated with the identity.
                            format: int32
                            example: 3
                          apps:
                            type: array
                            description: List of applications the identity has access to.
                            items:
                              allOf:
                                - type: object
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808568c529c60168cca6f90c1313
                                      description: The unique ID of the referenced object.
                                    name:
                                      type: string
                                      example: John Doe
                                      description: The human readable name of the referenced object.
                                  title: reference
                                - type: object
                                  properties:
                                    source:
                                      type: object
                                      properties:
                                        id:
                                          type: string
                                          example: 2c91808568c529c60168cca6f90c1313
                                          description: The unique ID of the referenced object.
                                        name:
                                          type: string
                                          example: John Doe
                                          description: The human readable name of the referenced object.
                                      title: reference
                                    account:
                                      type: object
                                      properties:
                                        id:
                                          type: string
                                          description: The SailPoint generated unique ID
                                          example: 2c9180837dfe6949017e21f3d8cd6d49
                                        accountId:
                                          type: string
                                          description: The account ID generated by the source
                                          example: CN=Carol Adams,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                              title: app
                          appCount:
                            type: integer
                            format: int32
                            description: Number of applications the identity has access to.
                            example: 2
                          access:
                            type: array
                            description: List of access items assigned to the identity.
                            items:
                              discriminator:
                                propertyName: type
                                mapping:
                                  ACCESS_PROFILE:
                                    description: This is a summary representation of an access profile.
                                    allOf:
                                      - allOf:
                                          - allOf:
                                              - type: object
                                                properties:
                                                  id:
                                                    type: string
                                                    example: 2c91808568c529c60168cca6f90c1313
                                                    description: The unique ID of the referenced object.
                                                  name:
                                                    type: string
                                                    example: John Doe
                                                    description: The human readable name of the referenced object.
                                                title: reference
                                              - type: object
                                                properties:
                                                  displayName:
                                                    type: string
                                                    example: John Q. Doe
                                            title: displayreference
                                          - type: object
                                            properties:
                                              description:
                                                description: Description of access item.
                                                type: string
                                                nullable: true
                                                example: null
                                        title: access
                                      - type: object
                                        properties:
                                          type:
                                            type: string
                                            description: Type of the access item.
                                            example: ACCESS_PROFILE
                                          source:
                                            type: object
                                            properties:
                                              id:
                                                type: string
                                                example: 2c91808568c529c60168cca6f90c1313
                                                description: The unique ID of the referenced object.
                                              name:
                                                type: string
                                                example: John Doe
                                                description: The human readable name of the referenced object.
                                            title: reference
                                          owner:
                                            allOf:
                                              - type: object
                                                properties:
                                                  id:
                                                    type: string
                                                    example: 2c91808568c529c60168cca6f90c1313
                                                    description: The unique ID of the referenced object.
                                                  name:
                                                    type: string
                                                    example: John Doe
                                                    description: The human readable name of the referenced object.
                                                title: reference
                                              - type: object
                                                properties:
                                                  displayName:
                                                    type: string
                                                    example: John Q. Doe
                                            title: displayreference
                                          revocable:
                                            type: boolean
                                            example: true
                                    title: accessprofilesummary
                                  ENTITLEMENT:
                                    description: EntitlementReference
                                    allOf:
                                      - allOf:
                                          - allOf:
                                              - type: object
                                                properties:
                                                  id:
                                                    type: string
                                                    example: 2c91808568c529c60168cca6f90c1313
                                                    description: The unique ID of the referenced object.
                                                  name:
                                                    type: string
                                                    example: John Doe
                                                    description: The human readable name of the referenced object.
                                                title: reference
                                              - type: object
                                                properties:
                                                  displayName:
                                                    type: string
                                                    example: John Q. Doe
                                            title: displayreference
                                          - type: object
                                            properties:
                                              description:
                                                description: Description of access item.
                                                type: string
                                                nullable: true
                                                example: null
                                        title: access
                                      - type: object
                                        properties:
                                          source:
                                            type: object
                                            properties:
                                              id:
                                                type: string
                                                example: 2c91808568c529c60168cca6f90c1313
                                                description: The unique ID of the referenced object.
                                              name:
                                                type: string
                                                example: John Doe
                                                description: The human readable name of the referenced object.
                                            title: reference
                                          type:
                                            type: string
                                            description: Type of the access item.
                                            example: ENTITLEMENT
                                          privileged:
                                            type: boolean
                                            example: false
                                          attribute:
                                            type: string
                                            example: memberOf
                                          value:
                                            type: string
                                            example: CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                                          standalone:
                                            type: boolean
                                            example: false
                                    title: accessprofileentitlement
                                  ROLE:
                                    description: Role
                                    allOf:
                                      - allOf:
                                          - allOf:
                                              - type: object
                                                properties:
                                                  id:
                                                    type: string
                                                    example: 2c91808568c529c60168cca6f90c1313
                                                    description: The unique ID of the referenced object.
                                                  name:
                                                    type: string
                                                    example: John Doe
                                                    description: The human readable name of the referenced object.
                                                title: reference
                                              - type: object
                                                properties:
                                                  displayName:
                                                    type: string
                                                    example: John Q. Doe
                                            title: displayreference
                                          - type: object
                                            properties:
                                              description:
                                                description: Description of access item.
                                                type: string
                                                nullable: true
                                                example: null
                                        title: access
                                      - type: object
                                        properties:
                                          type:
                                            type: string
                                            description: Type of the access item.
                                            example: ROLE
                                          owner:
                                            allOf:
                                              - type: object
                                                properties:
                                                  id:
                                                    type: string
                                                    example: 2c91808568c529c60168cca6f90c1313
                                                    description: The unique ID of the referenced object.
                                                  name:
                                                    type: string
                                                    example: John Doe
                                                    description: The human readable name of the referenced object.
                                                title: reference
                                              - type: object
                                                properties:
                                                  displayName:
                                                    type: string
                                                    example: John Q. Doe
                                            title: displayreference
                                          disabled:
                                            type: boolean
                                          revocable:
                                            type: boolean
                                    title: accessprofilerole
                              oneOf:
                                - description: This is a summary representation of an access profile.
                                  allOf:
                                    - allOf:
                                        - allOf:
                                            - type: object
                                              properties:
                                                id:
                                                  type: string
                                                  example: 2c91808568c529c60168cca6f90c1313
                                                  description: The unique ID of the referenced object.
                                                name:
                                                  type: string
                                                  example: John Doe
                                                  description: The human readable name of the referenced object.
                                              title: reference
                                            - type: object
                                              properties:
                                                displayName:
                                                  type: string
                                                  example: John Q. Doe
                                          title: displayreference
                                        - type: object
                                          properties:
                                            description:
                                              description: Description of access item.
                                              type: string
                                              nullable: true
                                              example: null
                                      title: access
                                    - type: object
                                      properties:
                                        type:
                                          type: string
                                          description: Type of the access item.
                                          example: ACCESS_PROFILE
                                        source:
                                          type: object
                                          properties:
                                            id:
                                              type: string
                                              example: 2c91808568c529c60168cca6f90c1313
                                              description: The unique ID of the referenced object.
                                            name:
                                              type: string
                                              example: John Doe
                                              description: The human readable name of the referenced object.
                                          title: reference
                                        owner:
                                          allOf:
                                            - type: object
                                              properties:
                                                id:
                                                  type: string
                                                  example: 2c91808568c529c60168cca6f90c1313
                                                  description: The unique ID of the referenced object.
                                                name:
                                                  type: string
                                                  example: John Doe
                                                  description: The human readable name of the referenced object.
                                              title: reference
                                            - type: object
                                              properties:
                                                displayName:
                                                  type: string
                                                  example: John Q. Doe
                                          title: displayreference
                                        revocable:
                                          type: boolean
                                          example: true
                                  title: accessprofilesummary
                                - description: EntitlementReference
                                  allOf:
                                    - allOf:
                                        - allOf:
                                            - type: object
                                              properties:
                                                id:
                                                  type: string
                                                  example: 2c91808568c529c60168cca6f90c1313
                                                  description: The unique ID of the referenced object.
                                                name:
                                                  type: string
                                                  example: John Doe
                                                  description: The human readable name of the referenced object.
                                              title: reference
                                            - type: object
                                              properties:
                                                displayName:
                                                  type: string
                                                  example: John Q. Doe
                                          title: displayreference
                                        - type: object
                                          properties:
                                            description:
                                              description: Description of access item.
                                              type: string
                                              nullable: true
                                              example: null
                                      title: access
                                    - type: object
                                      properties:
                                        source:
                                          type: object
                                          properties:
                                            id:
                                              type: string
                                              example: 2c91808568c529c60168cca6f90c1313
                                              description: The unique ID of the referenced object.
                                            name:
                                              type: string
                                              example: John Doe
                                              description: The human readable name of the referenced object.
                                          title: reference
                                        type:
                                          type: string
                                          description: Type of the access item.
                                          example: ENTITLEMENT
                                        privileged:
                                          type: boolean
                                          example: false
                                        attribute:
                                          type: string
                                          example: memberOf
                                        value:
                                          type: string
                                          example: CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                                        standalone:
                                          type: boolean
                                          example: false
                                  title: accessprofileentitlement
                                - description: Role
                                  allOf:
                                    - allOf:
                                        - allOf:
                                            - type: object
                                              properties:
                                                id:
                                                  type: string
                                                  example: 2c91808568c529c60168cca6f90c1313
                                                  description: The unique ID of the referenced object.
                                                name:
                                                  type: string
                                                  example: John Doe
                                                  description: The human readable name of the referenced object.
                                              title: reference
                                            - type: object
                                              properties:
                                                displayName:
                                                  type: string
                                                  example: John Q. Doe
                                          title: displayreference
                                        - type: object
                                          properties:
                                            description:
                                              description: Description of access item.
                                              type: string
                                              nullable: true
                                              example: null
                                      title: access
                                    - type: object
                                      properties:
                                        type:
                                          type: string
                                          description: Type of the access item.
                                          example: ROLE
                                        owner:
                                          allOf:
                                            - type: object
                                              properties:
                                                id:
                                                  type: string
                                                  example: 2c91808568c529c60168cca6f90c1313
                                                  description: The unique ID of the referenced object.
                                                name:
                                                  type: string
                                                  example: John Doe
                                                  description: The human readable name of the referenced object.
                                              title: reference
                                            - type: object
                                              properties:
                                                displayName:
                                                  type: string
                                                  example: John Q. Doe
                                          title: displayreference
                                        disabled:
                                          type: boolean
                                        revocable:
                                          type: boolean
                                  title: accessprofilerole
                              title: identityaccess
                          accessCount:
                            type: integer
                            format: int32
                            description: Number of access items assigned to the identity.
                            example: 5
                          entitlementCount:
                            type: integer
                            format: int32
                            description: Number of entitlements assigned to the identity.
                            example: 10
                          roleCount:
                            type: integer
                            format: int32
                            description: Number of roles assigned to the identity.
                            example: 1
                          accessProfileCount:
                            type: integer
                            format: int32
                            description: Number of access profiles assigned to the identity.
                            example: 1
                          owns:
                            type: array
                            description: Access items the identity owns.
                            items:
                              type: object
                              properties:
                                sources:
                                  type: array
                                  items:
                                    type: object
                                    properties:
                                      id:
                                        type: string
                                        example: 2c91808568c529c60168cca6f90c1313
                                        description: The unique ID of the referenced object.
                                      name:
                                        type: string
                                        example: John Doe
                                        description: The human readable name of the referenced object.
                                    title: reference
                                entitlements:
                                  type: array
                                  items:
                                    type: object
                                    properties:
                                      id:
                                        type: string
                                        example: 2c91808568c529c60168cca6f90c1313
                                        description: The unique ID of the referenced object.
                                      name:
                                        type: string
                                        example: John Doe
                                        description: The human readable name of the referenced object.
                                    title: reference
                                accessProfiles:
                                  type: array
                                  items:
                                    type: object
                                    properties:
                                      id:
                                        type: string
                                        example: 2c91808568c529c60168cca6f90c1313
                                        description: The unique ID of the referenced object.
                                      name:
                                        type: string
                                        example: John Doe
                                        description: The human readable name of the referenced object.
                                    title: reference
                                roles:
                                  type: array
                                  items:
                                    type: object
                                    properties:
                                      id:
                                        type: string
                                        example: 2c91808568c529c60168cca6f90c1313
                                        description: The unique ID of the referenced object.
                                      name:
                                        type: string
                                        example: John Doe
                                        description: The human readable name of the referenced object.
                                    title: reference
                                apps:
                                  type: array
                                  items:
                                    type: object
                                    properties:
                                      id:
                                        type: string
                                        example: 2c91808568c529c60168cca6f90c1313
                                        description: The unique ID of the referenced object.
                                      name:
                                        type: string
                                        example: John Doe
                                        description: The human readable name of the referenced object.
                                    title: reference
                                governanceGroups:
                                  type: array
                                  items:
                                    type: object
                                    properties:
                                      id:
                                        type: string
                                        example: 2c91808568c529c60168cca6f90c1313
                                        description: The unique ID of the referenced object.
                                      name:
                                        type: string
                                        example: John Doe
                                        description: The human readable name of the referenced object.
                                    title: reference
                                fallbackApprover:
                                  type: boolean
                                  example: false
                              title: owns
                          ownsCount:
                            type: integer
                            format: int32
                            description: Number of access items the identity owns.
                            example: 5
                          tags:
                            type: array
                            description: Tags that have been applied to the object.
                            items:
                              type: string
                            example:
                              - TAG_1
                              - TAG_2
                            title: tags
                          tagsCount:
                            type: integer
                            format: int32
                            description: Number of tags on the identity.
                          visibleSegments:
                            type: array
                            description: List of segments that the identity is in.
                            items:
                              type: string
                            nullable: true
                            example:
                              - All Employees
                          visibleSegmentCount:
                            type: integer
                            format: int32
                            description: Number of segments the identity is in.
                            example: 1
                    title: identitydocument
                  - description: Role
                    allOf:
                      - type: object
                        properties:
                          description:
                            type: string
                            description: Access item's description.
                            example: Admin access
                          created:
                            type: string
                            description: ISO-8601 date-time referring to the time when the object was created.
                            nullable: true
                            format: date-time
                            example: '2018-06-25T20:22:28.104Z'
                          modified:
                            type: string
                            description: ISO-8601 date-time referring to the time when the object was last modified.
                            nullable: true
                            format: date-time
                            example: '2018-06-25T20:22:28.104Z'
                          synced:
                            type: string
                            description: |-
                              ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                              This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                              There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                            nullable: true
                            format: date-time
                            example: '2018-06-25T20:22:33.104Z'
                          enabled:
                            type: boolean
                            description: Indicates whether the access item is currently enabled.
                            default: false
                            example: true
                          requestable:
                            type: boolean
                            description: Indicates whether the access item can be requested.
                            default: true
                            example: true
                          requestCommentsRequired:
                            type: boolean
                            description: Indicates whether comments are required for requests to access the item.
                            default: false
                            example: false
                          owner:
                            type: object
                            description: Owner's identity.
                            properties:
                              type:
                                type: string
                                description: Owner's DTO type.
                                enum:
                                  - IDENTITY
                                example: IDENTITY
                              id:
                                type: string
                                description: Owner's identity ID.
                                example: 2c9180a46faadee4016fb4e018c20639
                              name:
                                type: string
                                description: Owner's display name.
                                example: Support
                              email:
                                type: string
                                description: Owner's email.
                                example: cloud-support@sailpoint.com
                        title: baseaccess
                      - type: object
                        required:
                          - id
                          - name
                        properties:
                          id:
                            type: string
                            example: 2c91808375d8e80a0175e1f88a575222
                            description: ID of the role.
                          name:
                            type: string
                            example: Branch Manager Access
                            description: Name of the role.
                          accessProfiles:
                            type: array
                            description: Access profiles included with the role.
                            nullable: true
                            items:
                              type: object
                              properties:
                                id:
                                  type: string
                                  example: 2c91809c6faade77016fb4f0b63407ae
                                  description: Access profile's unique ID.
                                name:
                                  type: string
                                  example: Admin Access
                                  description: Access profile's display name.
                              title: baseaccessprofile
                          accessProfileCount:
                            type: integer
                            description: Number of access profiles included with the role.
                            nullable: true
                            format: int32
                            example: 1
                          tags:
                            type: array
                            description: Tags that have been applied to the object.
                            items:
                              type: string
                            example:
                              - TAG_1
                              - TAG_2
                            title: tags
                            nullable: true
                          segments:
                            type: array
                            description: Segments with the role.
                            nullable: true
                            items:
                              type: object
                              properties:
                                id:
                                  type: string
                                  example: b009b6e3-b56d-41d9-8735-cb532ea0b017
                                  description: Segment's unique ID.
                                name:
                                  type: string
                                  example: Test Segment
                                  description: Segment's display name.
                              title: basesegment
                          segmentCount:
                            type: integer
                            description: Number of segments with the role.
                            nullable: true
                            format: int32
                            example: 1
                          entitlements:
                            type: array
                            description: Entitlements included with the role.
                            nullable: true
                            items:
                              allOf:
                                - type: object
                                  properties:
                                    hasPermissions:
                                      type: boolean
                                      description: Indicates whether the entitlement has permissions.
                                      default: false
                                      example: false
                                    description:
                                      type: string
                                      description: Entitlement's description.
                                      nullable: true
                                      example: Cloud engineering
                                    attribute:
                                      type: string
                                      description: Entitlement attribute's name.
                                      example: memberOf
                                    value:
                                      type: string
                                      description: Entitlement's value.
                                      example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                    schema:
                                      type: string
                                      description: Entitlement's schema.
                                      example: group
                                    privileged:
                                      type: boolean
                                      description: Indicates whether the entitlement is privileged.
                                      default: false
                                      example: false
                                    id:
                                      type: string
                                      description: Entitlement's ID.
                                      example: 2c918084575812550157589064f33b89
                                    name:
                                      type: string
                                      description: Entitlement's name.
                                      example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                  title: baseentitlement
                                - properties:
                                    sourceSchemaObjectType:
                                      type: string
                                      description: Schema objectType.
                                      example: group
                                    hash:
                                      type: string
                                      description: Read-only calculated hash value of an entitlement.
                                      example: c6fab95235584cca98a454a2f51e5683bc77d6a0
                          entitlementCount:
                            type: integer
                            description: Number of entitlements included with the role.
                            nullable: true
                            format: int32
                            example: 3
                          dimensional:
                            type: boolean
                            example: false
                            default: false
                          dimensionSchemaAttributeCount:
                            type: integer
                            description: Number of dimension attributes included with the role.
                            nullable: true
                            format: int32
                            example: 3
                          dimensionSchemaAttributes:
                            type: array
                            description: Dimension attributes included with the role.
                            nullable: true
                            items:
                              type: object
                              properties:
                                derived:
                                  type: boolean
                                  example: true
                                  default: true
                                displayName:
                                  type: string
                                  description: Displayname of the dimension attribute.
                                  example: Department
                                name:
                                  type: string
                                  description: Name of the dimension attribute.
                                  example: department
                          dimensions:
                            type: array
                            nullable: true
                            items:
                              type: object
                              properties:
                                id:
                                  type: string
                                  description: Unique ID of the dimension.
                                  example: b3c28992ba964a40a7598978139d1ced
                                name:
                                  type: string
                                  description: Name of the dimension.
                                  example: Manager Austin Branch
                                description:
                                  type: string
                                  nullable: true
                                  description: Description of the dimension.
                                  example: Managers located at the Austin branch
                                entitlements:
                                  type: array
                                  description: Entitlements included with the role.
                                  nullable: true
                                  items:
                                    allOf:
                                      - type: object
                                        properties:
                                          hasPermissions:
                                            type: boolean
                                            description: Indicates whether the entitlement has permissions.
                                            default: false
                                            example: false
                                          description:
                                            type: string
                                            description: Entitlement's description.
                                            nullable: true
                                            example: Cloud engineering
                                          attribute:
                                            type: string
                                            description: Entitlement attribute's name.
                                            example: memberOf
                                          value:
                                            type: string
                                            description: Entitlement's value.
                                            example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                          schema:
                                            type: string
                                            description: Entitlement's schema.
                                            example: group
                                          privileged:
                                            type: boolean
                                            description: Indicates whether the entitlement is privileged.
                                            default: false
                                            example: false
                                          id:
                                            type: string
                                            description: Entitlement's ID.
                                            example: 2c918084575812550157589064f33b89
                                          name:
                                            type: string
                                            description: Entitlement's name.
                                            example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                        title: baseentitlement
                                      - properties:
                                          sourceSchemaObjectType:
                                            type: string
                                            description: Schema objectType.
                                            example: group
                                          hash:
                                            type: string
                                            description: Read-only calculated hash value of an entitlement.
                                            example: c6fab95235584cca98a454a2f51e5683bc77d6a0
                                accessProfiles:
                                  type: array
                                  nullable: true
                                  description: Access profiles included in the dimension.
                                  items:
                                    type: object
                                    properties:
                                      id:
                                        type: string
                                        example: 2c91809c6faade77016fb4f0b63407ae
                                        description: Access profile's unique ID.
                                      name:
                                        type: string
                                        example: Admin Access
                                        description: Access profile's display name.
                                    title: baseaccessprofile
                    title: roledocument
                title: searchdocument
              examples:
                accessProfile:
                  summary: Accessprofile
                  value:
                    id: 13b856dd9a264206954b63ecbb57a853
                    name: Cloud Eng
                    description: Cloud Eng
                    source:
                      id: 5c71ff71195b4794a0b87e7cf36fb017
                      name: Active Directory
                    entitlements:
                      - hasPermissions: false
                        attribute: memberOf
                        value: CN=Cloud Engineering,DC=sailpoint,DC=COM
                        schema: group
                        privileged: false
                        id: 7372eaddd75749bd89a2e76a363eb891
                        name: Cloud Engineering
                        description: Cloud Engineering
                    entitlementCount: 1
                    segments: []
                    segmentCount: 0
                    apps: []
                    created: '2024-09-16T17:41:25Z'
                    modified: '2024-09-16T19:30:54Z'
                    synced: '2025-02-12T06:32:40.156Z'
                    enabled: true
                    requestable: true
                    requestCommentsRequired: false
                    owner:
                      id: ff8081815757d36a015757d42e56031e
                      name: SailPoint Support
                      type: IDENTITY
                      email: cloud-support@sailpoint.com
                    tags:
                      - TAG_1
                      - TAG_2
                accountActivity:
                  summary: Accountactivity
                  value:
                    id: 6f76c3add1db4ba8bbe0d42aaceb7a07
                    requester:
                      name: Amos.Cunningham
                      id: ef1e2a36099447cb9448c68e1804dd9f
                      type: Identity
                    synced: '2025-01-02T21:47:16.953Z'
                    sources: Active Directory
                    created: '2025-01-02T21:45:59.795Z'
                    accountRequests:
                      - result:
                          status: committed
                        accountId: CN=Amos Cunningham,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        op: Modify
                        provisioningTarget:
                          name: Active Directory
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          type: ADLDAPConnector
                        source:
                          name: Active Directory
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          type: ADLDAPConnector
                        attributeRequests:
                          - op: Add
                            name: memberOf
                            value: CN=HelpDesk,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                    stage: Completed
                    originalRequests:
                      - result:
                          status: Manual Task Created
                        accountId: CN=Amos Cunningham,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        op: Modify
                        accountUuid: '{17413e85-1c08-4bb0-b658-9afdaad11d0a}'
                        source:
                          name: Active Directory
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          type: ADLDAPConnector
                        attributeRequests:
                          - op: Add
                            name: memberOf
                            value: CN=HelpDesk,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                    expansionItems: []
                    approvals:
                      - owner:
                          name: tina.smith
                          id: 322c6bce405a495a8e841a014b7d8410
                          type: Identity
                        result: Finished
                        attributeRequest:
                          op: Add
                          name: memberOf
                          value:
                            - CN=HelpDesk,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        accountUuid: '{17413e85-1c08-4bb0-b658-9afdaad11d0a}'
                        modified: '2025-01-02T21:47:16.903Z'
                        source:
                          name: Active Directory
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          type: ADLDAPConnector
                    recipient:
                      name: Amos.Cunningham
                      id: ef1e2a36099447cb9448c68e1804dd9f
                      type: Identity
                    action: Access Request
                    modified: '2025-01-02T21:47:16.903Z'
                    trackingNumber: 051d09b0bb5b453d91f658ba7f1e3171
                    status: Complete
                entitlement:
                  summary: Entitlement
                  value:
                    id: 2c9180867dde18d1017de8ea1f5c130f
                    name: Vendor Creation
                    displayName: Vendor Creation
                    created: '2021-12-23T20:09:57.340Z'
                    modified: '2023-05-02T06:31:19.357Z'
                    attribute: groups
                    value: VC
                    sourceSchemaObjectType: group
                    schema: group
                    privileged: false
                    cloudGoverned: false
                    hash: 22ac1f7a13c8a462c67ee74f5fcbf06a277cce50
                    description: Set up new AP vendors
                    requestable: false
                    source:
                      id: 2c9180887de347a7017de8e75fa5570a
                      type: SOURCE
                      name: Finance
                    containsDataAccess: 'false'
                event:
                  summary: Event
                  value:
                    id: 001909ce8cc3b519436197105426b18b5fc6ca179803c0c3702e9038107bec78
                    stack: wps
                    synced: '2023-06-01T22:01:38.170Z'
                    created: '2023-06-01T22:01:37.818Z'
                    objects:
                      - ACCOUNT
                    type: PROVISIONING
                    technicalName: ACCOUNT_MODIFY_PASSED
                    target:
                      name: Colt.Spears
                    actor:
                      name: System
                    name: Modify Account Passed
                    action: ModifyAccount
                    attributes:
                      accountUuid: '{2d1ec18a-84cc-4659-bf75-a1ce4d56a9c5}'
                      cloudAppName: Active Directory
                      appId: 5c71ff71195b4794a0b87e7cf36fb017
                      sourceId: source
                      sourceName: Active Directory
                      accountName: CN=Colt Spears,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpoint,DC=com
                      interface: Identity Refresh
                      trackingNumber: 1f74901adbc0412d9fa51314195155be
                    operation: MODIFY
                    status: PASSED
                identity:
                  summary: Identity
                  value:
                    id: 2c9180865c45e7e3015c46c434a80622
                    name: Laura Peeters
                    firstName: Laura
                    lastName: Peeters
                    displayName: Laura Peeters
                    email: Laura.Peeters@sailpointdemo.com
                    created: '2024-04-04T21:36:00.385Z'
                    inactive: false
                    protected: false
                    status: ACTIVE
                    employeeNumber: '10673'
                    manager:
                      id: 88e405b1a3b8439daf2efc8f4ff0a98b
                      name: Mia Garcia
                      displayName: Mia Garcia
                    isManager: true
                    identityProfile:
                      id: 00a2bc6244b34f4a88d985f035f2b68b
                      name: HR Global
                    source:
                      id: 524f8d986f9b4192865269516d169eb0
                      name: HR Global
                    attributes:
                      city: Brussels
                      cloudAuthoritativeSource: 524f8d986f9b4192865269516d169eb0
                      cloudLifecycleState: active
                      cloudStatus: UNREGISTERED
                      country: BE
                      department: EMEA Sales
                      displayName: Laura Peeters
                      email: Laura.Peeters@sailpointdemo.com
                      firstname: Laura
                      identificationNumber: '10673'
                      identityState: ACTIVE
                      internalCloudStatus: UNREGISTERED
                      jobTitle: Manager,  Sales - Belgium
                      lastname: Peeters
                      location: EMEA
                      uid: '10673'
                      visibleSegments:
                        - d75ae486-044b-4eba-8113-0cdacb5341df
                    disabled: false
                    locked: false
                    accounts:
                      - id: 830396e8863442f1bce7b485612c8b51
                        name: Laura Peeters
                        accountId: '10673'
                        source:
                          id: 524f8d986f9b4192865269516d169eb0
                          name: HR Global
                          type: DelimitedFile
                        disabled: false
                        locked: false
                        privileged: false
                        manuallyCorrelated: false
                        entitlementAttributes: {}
                        created: '2024-04-04T21:36:00.385Z'
                        supportsPasswordChange: false
                      - id: cd6797419f37492ba22ea991f9d6ba90
                        name: $SEK300-N3K0K4HOPEB6
                        accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        source:
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          name: Active Directory
                          type: Active Directory - Direct
                        disabled: false
                        locked: false
                        privileged: false
                        manuallyCorrelated: true
                        passwordLastSet: '2024-04-04T21:38:57.434Z'
                        entitlementAttributes:
                          memberOf:
                            - CN=Salesforce Access,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                            - CN=Sales-Folder,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                            - CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                            - CN=Salesforce opportunity management,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        created: '2024-04-04T21:42:26.787Z'
                        supportsPasswordChange: true
                      - id: db145fd0ec6a4e0cbc3a24bbe0758c8f
                        name: Laura Peeters
                        accountId: '10681'
                        source:
                          id: 524f8d986f9b4192865269516d169eb0
                          name: HR Global
                          type: DelimitedFile
                        disabled: false
                        locked: false
                        privileged: false
                        manuallyCorrelated: false
                        entitlementAttributes: {}
                        created: '2024-04-04T21:36:15.769Z'
                        supportsPasswordChange: false
                      - id: 6b75898eec394b4c98a5c3d2d9ba311b
                        name: Laura Peeters
                        accountId: Laura Peeters
                        source:
                          id: af4686d6482841ac96d793901372ad9b
                          name: IdentityNow
                          type: IdentityNowConnector
                        disabled: false
                        locked: false
                        privileged: false
                        manuallyCorrelated: false
                        entitlementAttributes: {}
                        created: '2024-04-04T21:36:15.809Z'
                        supportsPasswordChange: true
                        accountAttributes: {}
                    accountCount: 3
                    apps:
                      - id: '20003'
                        name: Active Directory
                        source:
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          name: Active Directory
                        account:
                          id: cd6797419f37492ba22ea991f9d6ba90
                          accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                      - id: '20013'
                        name: AD test
                        source:
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          name: Active Directory
                        account:
                          id: cd6797419f37492ba22ea991f9d6ba90
                          accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                      - id: '20014'
                        name: Test AD
                        source:
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          name: Active Directory
                        account:
                          id: cd6797419f37492ba22ea991f9d6ba90
                          accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                      - id: '5092'
                        name: Accounting
                        source:
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          name: Active Directory
                        account:
                          id: cd6797419f37492ba22ea991f9d6ba90
                          accountId: CN=Laura Peeters,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                      - id: '5822114389092541705'
                        name: IdentityNow app
                        source:
                          id: af4686d6482841ac96d793901372ad9b
                          name: IdentityNow
                        account:
                          id: 6b75898eec394b4c98a5c3d2d9ba311b
                          accountId: Laura Peeters
                    appCount: 5
                    access:
                      - id: 4919721c3c1a4ca484469b85f0fd9ba1
                        name: Benefits
                        displayName: Benefits
                        type: ENTITLEMENT
                        enabled: false
                        requestable: false
                        requestCommentsRequired: false
                        source:
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          name: Active Directory
                        disabled: false
                        privileged: false
                        attribute: memberOf
                        value: CN=Benefits,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        standalone: false
                        cloudEligible: false
                        cloudGoverned: false
                        schema: group
                      - id: 4bf8f57887874e9c83ae3a662bf8988c
                        name: Sales-Folder
                        displayName: Sales-Folder
                        type: ENTITLEMENT
                        enabled: false
                        requestable: false
                        requestCommentsRequired: false
                        source:
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          name: Active Directory
                        disabled: false
                        privileged: false
                        attribute: memberOf
                        value: CN=Sales-Folder,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        standalone: false
                        cloudEligible: false
                        cloudGoverned: false
                        schema: group
                      - id: f1bea520cace4489805d26de3463262d
                        name: Salesforce Access
                        displayName: Salesforce Access
                        type: ENTITLEMENT
                        enabled: false
                        requestable: false
                        requestCommentsRequired: false
                        source:
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          name: Active Directory
                        disabled: false
                        privileged: false
                        attribute: memberOf
                        value: CN=Salesforce Access,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        standalone: false
                        cloudEligible: false
                        cloudGoverned: false
                        schema: group
                      - id: 98a76b26b7884f3e8d115991cebc09b2
                        name: Salesforce opportunity management
                        displayName: Salesforce opportunity management
                        type: ENTITLEMENT
                        enabled: false
                        requestable: false
                        requestCommentsRequired: false
                        source:
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          name: Active Directory
                        disabled: false
                        privileged: false
                        attribute: memberOf
                        value: CN=Salesforce opportunity management,OU=Sales,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                        standalone: false
                        cloudEligible: false
                        cloudGoverned: false
                        schema: group
                      - id: 7e277d102c874560becc464cdfe33a86
                        name: Benefits Employees
                        displayName: Benefits Employees
                        type: ACCESS_PROFILE
                        description: Access for Benefits Employees. Distribution group and File share access.
                        enabled: false
                        requestable: false
                        requestCommentsRequired: false
                        source:
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          name: Active Directory
                        owner:
                          id: 278f8a1859df48d2a0adb204257b26a2
                          name: Jerry.Bennett
                          displayName: Jerry.Bennett
                        disabled: false
                        privileged: false
                        standalone: false
                        revocable: false
                        cloudEligible: false
                        cloudGoverned: false
                      - id: 468171f0af874adebb58d3718519bd56
                        name: SalesCommonAccess
                        displayName: SalesCommonAccess
                        type: ACCESS_PROFILE
                        description: Grants basic access for everyone in the sale department
                        enabled: false
                        requestable: false
                        requestCommentsRequired: false
                        source:
                          id: 5c71ff71195b4794a0b87e7cf36fb017
                          name: Active Directory
                        owner:
                          id: 278f8a1859df48d2a0adb204257b26a2
                          name: Jerry.Bennett
                          displayName: Jerry.Bennett
                        disabled: false
                        privileged: false
                        standalone: false
                        revocable: false
                        cloudEligible: false
                        cloudGoverned: false
                      - id: ad7025c956734455b28fa35e315e77fe
                        name: Benefits Common Access
                        displayName: Benefits Common Access
                        type: ROLE
                        description: Testing AD provisioning with birthright access
                        enabled: false
                        requestable: false
                        requestCommentsRequired: false
                        owner:
                          id: 322c6bce405a495a8e841a014b7d8410
                          name: tina.smith
                          displayName: tina.smith
                        disabled: false
                        privileged: false
                        standalone: false
                        revocable: false
                        cloudEligible: false
                        cloudGoverned: false
                      - id: a8819cb0445541438fe08dd38f311b3c
                        name: SalesGlobal
                        displayName: SalesGlobal
                        type: ROLE
                        description: All Sales people in the company
                        enabled: false
                        requestable: false
                        requestCommentsRequired: false
                        owner:
                          id: 29b6ee3f91484d159b1ceac3109af151
                          name: se.admin
                          displayName: se.admin
                        disabled: false
                        privileged: false
                        standalone: false
                        revocable: false
                        cloudEligible: false
                        cloudGoverned: false
                    accessCount: 8
                    accessProfileCount: 2
                    entitlementCount: 4
                    roleCount: 2
                    modified: '2025-01-17T03:17:17.895Z'
                    visibleSegments:
                      - All Employees
                    visibleSegmentCount: 1
                    tagCount: 2
                    tags:
                      - TAG_1
                      - TAG_2
                role:
                  summary: Role
                  value:
                    id: 2c91808c6faadea6016fb4f2bc69077b
                    accessProfileCount: 1
                    accessProfiles:
                      - id: 468171f0af874adebb58d3718519bd56
                        name: SalesCommonAccess
                    created: '2023-06-01T22:00:55.311Z'
                    description: All Sales people in the company
                    dimensional: false
                    enabled: true
                    modified: '2023-06-01T22:00:55.432Z'
                    name: SalesGlobal
                    owner:
                      email: admin@sailpointdemo.com
                      id: c18630c4811c4030810afb3a14f388cf
                      name: admin
                      type: IDENTITY
                    requestCommentsRequired: false
                    requestable: true
                    tags:
                      - TAG_1
                      - TAG_2
        '400':
          description: Client Error - Returned if the request body is invalid.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
        '401':
          description: Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    description: A message describing the error
                    example: 'JWT validation failed: JWT is expired'
        '403':
          description: Forbidden - Returned if the user you are running as, doesn't have access to this end-point.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '403':
                  summary: An example of a 403 response object
                  value:
                    detailCode: 403 Forbidden
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: The server understood the request but refuses to authorize it.
        '404':
          description: Not Found - returned if the request URL refers to a resource or object that does not exist
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '404':
                  summary: An example of a 404 response object
                  value:
                    detailCode: 404 Not found
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: The server did not find a current representation for the target resource.
        '429':
          description: Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    description: A message describing the error
                    example: ' Rate Limit Exceeded '
        '500':
          description: Internal Server Error - Returned if there is an unexpected error.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '500':
                  summary: An example of a 500 response object
                  value:
                    detailCode: 500.0 Internal Fault
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: An internal fault occurred.
components:
  securitySchemes:
    userAuth:
      type: oauth2
      x-displayName: Personal Access Token
      description: |
        OAuth2 Bearer token (JWT) generated using either a [personal access token (PAT)](https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token) or through the [authorization code flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-authorization-code-grant-flow).

        Personal access tokens are associated with a user in Identity Security Cloud and relies on the user's [user level](https://documentation.sailpoint.com/saas/help/common/users/index.html) (ex. Admin, Helpdesk, etc.) to determine a base level of access.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
        authorizationCode:
          authorizationUrl: https://example-tenant.login.sailpoint.com/oauth/authorize
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
    applicationAuth:
      type: oauth2
      x-displayName: Client Credentials
      description: |
        OAuth2 Bearer token (JWT) generated using [client credentials flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-client-credentials-grant-flow).

        Client credentials refers to tokens that are not associated with a user in Identity Security Cloud.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
```
