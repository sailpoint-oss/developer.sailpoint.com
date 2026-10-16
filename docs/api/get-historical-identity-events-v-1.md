## OpenAPI

```yaml GET /historical-identities/v1/{id}/events
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
  /historical-identities/v1/{id}/events:
    get:
      description: 'This method retrieves all access events for the identity Requires authorization scope of ''idn:identity-history:read'' '
      operationId: getHistoricalIdentityEventsV1
      security:
        - userAuth:
            - idn:identity-history:read
            - idn:identity-history:manage
        - applicationAuth:
            - idn:identity-history:read
            - idn:identity-history:manage
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: listHistoricalIdentitiesV1
          description: The identity id
          example: 8c190e6787aa4ed9a90bd9d5344523fb
        - in: query
          name: from
          schema:
            type: string
          required: false
          description: The optional instant until which access events are returned
          example: '2024-03-01T13:00:00Z'
        - in: query
          name: eventTypes
          schema:
            type: array
            items:
              type: string
          required: false
          description: An optional list of event types to return.  If null or empty, all events are returned
          example:
            - AccessAddedEvent
            - AccessRemovedEvent
        - in: query
          name: accessItemTypes
          schema:
            type: array
            items:
              type: string
          required: false
          description: An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned
          example:
            - entitlement
            - account
        - in: query
          name: limit
          description: |-
            Max number of results to return.
            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: 250
          schema:
            type: integer
            format: int32
            minimum: 0
            maximum: 250
            default: 250
        - in: query
          name: offset
          description: |-
            Offset into the full result set. Usually specified with *limit* to paginate through the results.
            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: 0
          schema:
            type: integer
            format: int32
            minimum: 0
            default: 0
        - in: query
          name: count
          description: |-
            If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.

            Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.

            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: true
          schema:
            type: boolean
            default: false
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: true
          schema:
            type: string
            default: true
          required: true
      responses:
        '200':
          description: The list of events for the identity
          content:
            application/json:
              schema:
                type: array
                items:
                  anyOf:
                    - type: object
                      title: Identity Certified
                      required:
                        - certificationId
                        - certificationName
                      properties:
                        certificationId:
                          type: string
                          description: the id of the certification item
                          example: 2c91808a77ff216301782327a50f09bf
                        certificationName:
                          type: string
                          description: the certification item name
                          example: Cert name
                        signedDate:
                          type: string
                          description: the date ceritification was signed
                          example: '2019-03-08T22:37:33.901Z'
                        certifiers:
                          type: array
                          description: this field is deprecated and may go away
                          items:
                            type: object
                            title: Certifier Response
                            properties:
                              id:
                                type: string
                                description: the id of the certifier
                                example: 8a80828f643d484f01643e14202e206f
                              displayName:
                                type: string
                                description: the name of the certifier
                                example: John Snow
                          example:
                            - id: 8a80828f643d484f01643e14202e206f
                              displayName: John Snow
                        reviewers:
                          type: array
                          description: The list of identities who review this certification
                          items:
                            type: object
                            title: Certifier Response
                            properties:
                              id:
                                type: string
                                description: the id of the certifier
                                example: 8a80828f643d484f01643e14202e206f
                              displayName:
                                type: string
                                description: the name of the certifier
                                example: John Snow
                          example:
                            - id: 8a80828f643d484f01643e14202e206f
                              displayName: John Snow
                        signer:
                          type: object
                          title: Certifier Response
                          properties:
                            id:
                              type: string
                              description: the id of the certifier
                              example: 8a80828f643d484f01643e14202e206f
                            displayName:
                              type: string
                              description: the name of the certifier
                              example: John Snow
                          description: Identity who signed off on the certification
                          example:
                            id: 8a80828f643d484f01643e14202e206f
                            displayName: John Snow
                        eventType:
                          type: string
                          description: the event type
                          example: IdentityCertified
                        dateTime:
                          type: string
                          description: the date of event
                          example: '2019-03-08T22:37:33.901Z'
                    - type: object
                      title: Access Item Associated
                      required:
                        - accessItem
                        - governanceEvent
                      properties:
                        eventType:
                          type: string
                          description: the event type
                          example: AccessItemAssociated
                        dateTime:
                          type: string
                          description: the date of event
                          example: '2019-03-08T22:37:33.901Z'
                        identityId:
                          type: string
                          description: the identity id
                          example: 8c190e6787aa4ed9a90bd9d5344523fb
                        accessItem:
                          type: object
                          anyOf:
                            - type: object
                              title: Access Item Entitlement Response
                              properties:
                                id:
                                  type: string
                                  example: 2c918087763e69d901763e72e97f006f
                                  description: the access item id
                                accessType:
                                  type: string
                                  example: entitlement
                                  description: the access item type. entitlement in this case
                                displayName:
                                  type: string
                                  example: Dr. Arden Rogahn MD
                                  description: the display name of the identity
                                sourceName:
                                  type: string
                                  example: DataScienceDataset
                                  description: the name of the source
                                attribute:
                                  type: string
                                  example: groups
                                  description: the entitlement attribute
                                value:
                                  type: string
                                  example: Upward mobility access
                                  description: the associated value
                                type:
                                  type: string
                                  example: ENTITLEMENT
                                  description: the type of entitlement
                                description:
                                  type: string
                                  example: Entitlement - Workday/Citizenship access
                                  description: the description for the entitlment
                                  nullable: true
                                sourceId:
                                  type: string
                                  example: 2793o32dwd
                                  description: the id of the source
                                standalone:
                                  type: boolean
                                  example: true
                                  description: indicates whether the entitlement is standalone
                                  nullable: true
                                privileged:
                                  type: boolean
                                  example: false
                                  description: indicates whether the entitlement is privileged
                                  nullable: true
                                cloudGoverned:
                                  type: boolean
                                  example: true
                                  description: indicates whether the entitlement is cloud governed
                                  nullable: true
                              required:
                                - attribute
                                - value
                                - type
                                - standalone
                                - privileged
                                - cloudGoverned
                            - type: object
                              title: Access Item Access Profile Response
                              properties:
                                id:
                                  type: string
                                  example: 2c918087763e69d901763e72e97f006f
                                  description: the access item id
                                accessType:
                                  type: string
                                  example: accessProfile
                                  description: the access item type. accessProfile in this case
                                displayName:
                                  type: string
                                  example: Dr. Arden Rogahn MD
                                  description: the display name of the identity
                                sourceName:
                                  type: string
                                  example: DataScienceDataset
                                  description: the name of the source
                                entitlementCount:
                                  type: integer
                                  format: int32
                                  example: 12
                                  description: the number of entitlements the access profile will create
                                description:
                                  type: string
                                  example: AccessProfile - Workday/Citizenship access
                                  description: the description for the access profile
                                  nullable: true
                                sourceId:
                                  type: string
                                  example: 2793o32dwd
                                  description: the id of the source
                                appRefs:
                                  type: array
                                  items:
                                    type: object
                                    properties:
                                      cloudAppId:
                                        type: string
                                        example: 8c190e6787aa4ed9a90bd9d5344523fb
                                        description: the cloud app id associated with the access profile
                                      cloudAppName:
                                        type: string
                                        example: Sample App
                                        description: the cloud app name associated with the access profile
                                  example:
                                    - cloudAppId: 8c190e6787aa4ed9a90bd9d5344523fb
                                      cloudAppName: Sample App
                                    - cloudAppId: 2c91808a77ff216301782327a50f09bf
                                      cloudAppName: Another App
                                  description: the list of app ids associated with the access profile
                                startDate:
                                  type: string
                                  example: '2024-07-01T05:00:00.00Z'
                                  description: the date the access profile will be assigned to the specified identity, in case requested with a future start date
                                  nullable: true
                                removeDate:
                                  type: string
                                  example: '2024-07-01T06:00:00.00Z'
                                  description: the date the access profile is no longer assigned to the specified identity
                                  nullable: true
                                standalone:
                                  type: boolean
                                  example: false
                                  description: indicates whether the access profile is standalone
                                  nullable: true
                                revocable:
                                  type: boolean
                                  example: true
                                  description: indicates whether the access profile is revocable
                                  nullable: true
                              required:
                                - appRefs
                                - standalone
                                - revocable
                                - entitlementCount
                            - type: object
                              title: Access Item Account Response
                              required:
                                - nativeIdentity
                              properties:
                                id:
                                  type: string
                                  example: 2c918087763e69d901763e72e97f006f
                                  description: the access item id
                                accessType:
                                  type: string
                                  example: account
                                  description: the access item type. account in this case
                                displayName:
                                  type: string
                                  example: Dr. Arden Rogahn MD
                                  description: the display name of the identity
                                sourceName:
                                  type: string
                                  example: DataScienceDataset
                                  description: the name of the source
                                nativeIdentity:
                                  type: string
                                  example: dr.arden.ogahn.d
                                  description: the native identifier used to uniquely identify an acccount
                                sourceId:
                                  type: string
                                  example: 2793o32dwd
                                  description: the id of the source
                                entitlementCount:
                                  type: integer
                                  format: int32
                                  example: 12
                                  description: the number of entitlements the account will create
                            - type: object
                              title: Access Item Role Response
                              properties:
                                id:
                                  type: string
                                  example: 2c918087763e69d901763e72e97f006f
                                  description: the access item id
                                accessType:
                                  type: string
                                  example: role
                                  description: the access item type. role in this case
                                displayName:
                                  type: string
                                  example: sample
                                  description: the role display name
                                sourceName:
                                  type: string
                                  example: Source Name
                                  description: the associated source name if it exists
                                  nullable: true
                                description:
                                  type: string
                                  example: Role - Workday/Citizenship access
                                  description: the description for the role
                                startDate:
                                  type: string
                                  example: '2024-07-01T05:00:00.00Z'
                                  description: the date the access profile will be assigned to the specified identity, in case requested with a future start date
                                  nullable: true
                                removeDate:
                                  type: string
                                  example: '2024-07-01T06:00:00.00Z'
                                  description: the date the role is no longer assigned to the specified identity
                                revocable:
                                  type: boolean
                                  example: true
                                  description: indicates whether the role is revocable
                              required:
                                - revocable
                            - type: object
                              title: Access Item App Response
                              required:
                                - appRoleId
                              properties:
                                id:
                                  type: string
                                  example: 2c918087763e69d901763e72e97f006f
                                  description: the access item id
                                accessType:
                                  type: string
                                  example: app
                                  description: the access item type. entitlement in this case
                                displayName:
                                  type: string
                                  example: Display Name
                                  description: the access item display name
                                sourceName:
                                  type: string
                                  example: appName
                                  description: the associated source name if it exists
                                  nullable: true
                                appRoleId:
                                  type: string
                                  example: 2c918087763e69d901763e72e97f006f
                                  description: the app role id
                                  nullable: true
                          example:
                            id: 8c190e6787aa4ed9a90bd9d5344523fb
                            accessType: account
                            nativeIdentity: 127999
                            sourceName: JDBC Entitlements Source
                            entitlementCount: 0
                            displayName: Sample Name
                        governanceEvent:
                          example:
                            name: Manager Certification for Jon Snow
                            dateTime: '2019-03-08T22:37:33.901Z'
                            type: certification
                            governanceId: 2c91808a77ff216301782327a50f09bf
                            owners:
                              - id: bc693f07e7b645539626c25954c58554
                                displayName: Jon Snow
                            reviewers:
                              - id: bc693f07e7b645539626c25954c58554
                                displayName: Jon Snow
                            decisionMaker:
                              id: bc693f07e7b645539626c25954c58554
                              displayName: Jon Snow
                          type: object
                          title: Correlated Governance Event
                          nullable: true
                          properties:
                            name:
                              type: string
                              description: The name of the governance event, such as the certification name or access request ID.
                              example: Manager Certification for Jon Snow
                            dateTime:
                              type: string
                              description: The date that the certification or access request was completed.
                              example: '2019-03-08T22:37:33.901Z'
                            type:
                              type: string
                              enum:
                                - certification
                                - accessRequest
                              description: The type of governance event.
                              example: certification
                            governanceId:
                              type: string
                              description: The ID of the instance that caused the event - either the certification ID or access request ID.
                              example: 2c91808a77ff216301782327a50f09bf
                            owners:
                              type: array
                              description: The owners of the governance event (the certifiers or approvers)
                              items:
                                type: object
                                title: Certifier Response
                                properties:
                                  id:
                                    type: string
                                    description: the id of the certifier
                                    example: 8a80828f643d484f01643e14202e206f
                                  displayName:
                                    type: string
                                    description: the name of the certifier
                                    example: John Snow
                              example:
                                - id: 8a80828f643d484f01643e14202e206f
                                  displayName: John Snow
                            reviewers:
                              type: array
                              description: The owners of the governance event (the certifiers or approvers), this field should be preferred over owners
                              items:
                                type: object
                                title: Certifier Response
                                properties:
                                  id:
                                    type: string
                                    description: the id of the certifier
                                    example: 8a80828f643d484f01643e14202e206f
                                  displayName:
                                    type: string
                                    description: the name of the certifier
                                    example: John Snow
                              example:
                                - id: 8a80828f643d484f01643e14202e206f
                                  displayName: John Snow
                            decisionMaker:
                              type: object
                              title: Certifier Response
                              properties:
                                id:
                                  type: string
                                  description: the id of the certifier
                                  example: 8a80828f643d484f01643e14202e206f
                                displayName:
                                  type: string
                                  description: the name of the certifier
                                  example: John Snow
                              description: The decision maker
                              example:
                                id: 8a80828f643d484f01643e14202e206f
                                displayName: John Snow
                        accessItemType:
                          type: string
                          enum:
                            - account
                            - app
                            - entitlement
                            - role
                            - accessProfile
                          description: the access item type
                          example: account
                    - type: object
                      title: Access Item Removed
                      required:
                        - accessItem
                      properties:
                        accessItem:
                          type: object
                          anyOf:
                            - type: object
                              title: Access Item Entitlement Response
                              properties:
                                id:
                                  type: string
                                  example: 2c918087763e69d901763e72e97f006f
                                  description: the access item id
                                accessType:
                                  type: string
                                  example: entitlement
                                  description: the access item type. entitlement in this case
                                displayName:
                                  type: string
                                  example: Dr. Arden Rogahn MD
                                  description: the display name of the identity
                                sourceName:
                                  type: string
                                  example: DataScienceDataset
                                  description: the name of the source
                                attribute:
                                  type: string
                                  example: groups
                                  description: the entitlement attribute
                                value:
                                  type: string
                                  example: Upward mobility access
                                  description: the associated value
                                type:
                                  type: string
                                  example: ENTITLEMENT
                                  description: the type of entitlement
                                description:
                                  type: string
                                  example: Entitlement - Workday/Citizenship access
                                  description: the description for the entitlment
                                  nullable: true
                                sourceId:
                                  type: string
                                  example: 2793o32dwd
                                  description: the id of the source
                                standalone:
                                  type: boolean
                                  example: true
                                  description: indicates whether the entitlement is standalone
                                  nullable: true
                                privileged:
                                  type: boolean
                                  example: false
                                  description: indicates whether the entitlement is privileged
                                  nullable: true
                                cloudGoverned:
                                  type: boolean
                                  example: true
                                  description: indicates whether the entitlement is cloud governed
                                  nullable: true
                              required:
                                - attribute
                                - value
                                - type
                                - standalone
                                - privileged
                                - cloudGoverned
                            - type: object
                              title: Access Item Access Profile Response
                              properties:
                                id:
                                  type: string
                                  example: 2c918087763e69d901763e72e97f006f
                                  description: the access item id
                                accessType:
                                  type: string
                                  example: accessProfile
                                  description: the access item type. accessProfile in this case
                                displayName:
                                  type: string
                                  example: Dr. Arden Rogahn MD
                                  description: the display name of the identity
                                sourceName:
                                  type: string
                                  example: DataScienceDataset
                                  description: the name of the source
                                entitlementCount:
                                  type: integer
                                  format: int32
                                  example: 12
                                  description: the number of entitlements the access profile will create
                                description:
                                  type: string
                                  example: AccessProfile - Workday/Citizenship access
                                  description: the description for the access profile
                                  nullable: true
                                sourceId:
                                  type: string
                                  example: 2793o32dwd
                                  description: the id of the source
                                appRefs:
                                  type: array
                                  items:
                                    type: object
                                    properties:
                                      cloudAppId:
                                        type: string
                                        example: 8c190e6787aa4ed9a90bd9d5344523fb
                                        description: the cloud app id associated with the access profile
                                      cloudAppName:
                                        type: string
                                        example: Sample App
                                        description: the cloud app name associated with the access profile
                                  example:
                                    - cloudAppId: 8c190e6787aa4ed9a90bd9d5344523fb
                                      cloudAppName: Sample App
                                    - cloudAppId: 2c91808a77ff216301782327a50f09bf
                                      cloudAppName: Another App
                                  description: the list of app ids associated with the access profile
                                startDate:
                                  type: string
                                  example: '2024-07-01T05:00:00.00Z'
                                  description: the date the access profile will be assigned to the specified identity, in case requested with a future start date
                                  nullable: true
                                removeDate:
                                  type: string
                                  example: '2024-07-01T06:00:00.00Z'
                                  description: the date the access profile is no longer assigned to the specified identity
                                  nullable: true
                                standalone:
                                  type: boolean
                                  example: false
                                  description: indicates whether the access profile is standalone
                                  nullable: true
                                revocable:
                                  type: boolean
                                  example: true
                                  description: indicates whether the access profile is revocable
                                  nullable: true
                              required:
                                - appRefs
                                - standalone
                                - revocable
                                - entitlementCount
                            - type: object
                              title: Access Item Account Response
                              required:
                                - nativeIdentity
                              properties:
                                id:
                                  type: string
                                  example: 2c918087763e69d901763e72e97f006f
                                  description: the access item id
                                accessType:
                                  type: string
                                  example: account
                                  description: the access item type. account in this case
                                displayName:
                                  type: string
                                  example: Dr. Arden Rogahn MD
                                  description: the display name of the identity
                                sourceName:
                                  type: string
                                  example: DataScienceDataset
                                  description: the name of the source
                                nativeIdentity:
                                  type: string
                                  example: dr.arden.ogahn.d
                                  description: the native identifier used to uniquely identify an acccount
                                sourceId:
                                  type: string
                                  example: 2793o32dwd
                                  description: the id of the source
                                entitlementCount:
                                  type: integer
                                  format: int32
                                  example: 12
                                  description: the number of entitlements the account will create
                            - type: object
                              title: Access Item Role Response
                              properties:
                                id:
                                  type: string
                                  example: 2c918087763e69d901763e72e97f006f
                                  description: the access item id
                                accessType:
                                  type: string
                                  example: role
                                  description: the access item type. role in this case
                                displayName:
                                  type: string
                                  example: sample
                                  description: the role display name
                                sourceName:
                                  type: string
                                  example: Source Name
                                  description: the associated source name if it exists
                                  nullable: true
                                description:
                                  type: string
                                  example: Role - Workday/Citizenship access
                                  description: the description for the role
                                startDate:
                                  type: string
                                  example: '2024-07-01T05:00:00.00Z'
                                  description: the date the access profile will be assigned to the specified identity, in case requested with a future start date
                                  nullable: true
                                removeDate:
                                  type: string
                                  example: '2024-07-01T06:00:00.00Z'
                                  description: the date the role is no longer assigned to the specified identity
                                revocable:
                                  type: boolean
                                  example: true
                                  description: indicates whether the role is revocable
                              required:
                                - revocable
                            - type: object
                              title: Access Item App Response
                              required:
                                - appRoleId
                              properties:
                                id:
                                  type: string
                                  example: 2c918087763e69d901763e72e97f006f
                                  description: the access item id
                                accessType:
                                  type: string
                                  example: app
                                  description: the access item type. entitlement in this case
                                displayName:
                                  type: string
                                  example: Display Name
                                  description: the access item display name
                                sourceName:
                                  type: string
                                  example: appName
                                  description: the associated source name if it exists
                                  nullable: true
                                appRoleId:
                                  type: string
                                  example: 2c918087763e69d901763e72e97f006f
                                  description: the app role id
                                  nullable: true
                          example:
                            id: 8c190e6787aa4ed9a90bd9d5344523fb
                            accessType: account
                            nativeIdentity: 127999
                            sourceName: JDBC Entitlements Source
                            entitlementCount: 0
                            displayName: Sample Name
                        identityId:
                          type: string
                          description: the identity id
                          example: 8c190e6787aa4ed9a90bd9d5344523fb
                        eventType:
                          type: string
                          description: the event type
                          example: AccessItemRemoved
                        dateTime:
                          type: string
                          description: the date of event
                          example: '2019-03-08T22:37:33.901Z'
                        accessItemType:
                          type: string
                          enum:
                            - account
                            - app
                            - entitlement
                            - role
                            - accessProfile
                          description: the access item type
                          example: account
                        governanceEvent:
                          example:
                            name: Manager Certification for Jon Snow
                            dt: '2019-03-08T22:37:33.901Z'
                            type: certification
                            governanceId: 2c91808a77ff216301782327a50f09bf
                            owners:
                              - id: bc693f07e7b645539626c25954c58554
                                displayName: Jon Snow
                            reviewers:
                              - id: bc693f07e7b645539626c25954c58554
                                displayName: Jon Snow
                            decisionMaker:
                              id: bc693f07e7b645539626c25954c58554
                              displayName: Jon Snow
                          type: object
                          title: Correlated Governance Event
                          nullable: true
                          properties:
                            name:
                              type: string
                              description: The name of the governance event, such as the certification name or access request ID.
                              example: Manager Certification for Jon Snow
                            dateTime:
                              type: string
                              description: The date that the certification or access request was completed.
                              example: '2019-03-08T22:37:33.901Z'
                            type:
                              type: string
                              enum:
                                - certification
                                - accessRequest
                              description: The type of governance event.
                              example: certification
                            governanceId:
                              type: string
                              description: The ID of the instance that caused the event - either the certification ID or access request ID.
                              example: 2c91808a77ff216301782327a50f09bf
                            owners:
                              type: array
                              description: The owners of the governance event (the certifiers or approvers)
                              items:
                                type: object
                                title: Certifier Response
                                properties:
                                  id:
                                    type: string
                                    description: the id of the certifier
                                    example: 8a80828f643d484f01643e14202e206f
                                  displayName:
                                    type: string
                                    description: the name of the certifier
                                    example: John Snow
                              example:
                                - id: 8a80828f643d484f01643e14202e206f
                                  displayName: John Snow
                            reviewers:
                              type: array
                              description: The owners of the governance event (the certifiers or approvers), this field should be preferred over owners
                              items:
                                type: object
                                title: Certifier Response
                                properties:
                                  id:
                                    type: string
                                    description: the id of the certifier
                                    example: 8a80828f643d484f01643e14202e206f
                                  displayName:
                                    type: string
                                    description: the name of the certifier
                                    example: John Snow
                              example:
                                - id: 8a80828f643d484f01643e14202e206f
                                  displayName: John Snow
                            decisionMaker:
                              type: object
                              title: Certifier Response
                              properties:
                                id:
                                  type: string
                                  description: the id of the certifier
                                  example: 8a80828f643d484f01643e14202e206f
                                displayName:
                                  type: string
                                  description: the name of the certifier
                                  example: John Snow
                              description: The decision maker
                              example:
                                id: 8a80828f643d484f01643e14202e206f
                                displayName: John Snow
                    - type: object
                      title: Attributes Changed
                      required:
                        - attributeChanges
                      properties:
                        attributeChanges:
                          type: array
                          items:
                            type: object
                            title: Attribute Change
                            properties:
                              name:
                                type: string
                                description: the attribute name
                                example: firstname
                              previousValue:
                                type: string
                                description: the old value of attribute
                                example: adam
                              newValue:
                                type: string
                                description: the new value of attribute
                                example: zampa
                        eventType:
                          type: string
                          description: the event type
                          example: AttributesChanged
                        identityId:
                          type: string
                          description: the identity id
                          example: 8a80828f643d484f01643e14202e206f
                        dateTime:
                          type: string
                          description: the date of event
                          example: '2019-03-08T22:37:33.901Z'
                    - type: object
                      title: Access Requested
                      required:
                        - accessRequest
                      properties:
                        accessRequest:
                          description: the access request details
                          type: object
                          title: Access Request Response
                          properties:
                            requesterId:
                              type: string
                              example: 2c91808a77ff216301782327a50f09bf
                              description: the requester Id
                            requesterName:
                              type: string
                              example: Bing C
                              description: the requesterName
                            items:
                              type: array
                              example:
                                - operation: Add
                                  accessItemType: role
                                  name: Role-1
                                  decision: APPROVED
                                  description: The role descrition
                                  sourceId: 8a80828f643d484f01643e14202e206f
                                  sourceName: Source1
                                  approvalInfos:
                                    - name: John Snow
                                      id: 8a80828f643d484f01643e14202e2000
                                      status: Approved
                              items:
                                type: object
                                title: Access Request Item Response
                                properties:
                                  operation:
                                    type: string
                                    example: Add
                                    description: the access request item operation
                                  accessItemType:
                                    type: string
                                    example: role
                                    description: the access item type
                                  name:
                                    type: string
                                    example: Role-1
                                    description: the name of access request item
                                  decision:
                                    type: string
                                    example: APPROVED
                                    enum:
                                      - APPROVED
                                      - REJECTED
                                    description: the final decision for the access request
                                  description:
                                    type: string
                                    example: The role descrition
                                    description: the description of access request item
                                  sourceId:
                                    type: string
                                    example: 8a80828f643d484f01643e14202e206f
                                    description: the source id
                                  sourceName:
                                    type: string
                                    example: Source1
                                    description: the source Name
                                  approvalInfos:
                                    type: array
                                    example:
                                      - name: John Snow
                                        id: 8a80828f643d484f01643e14202e2000
                                        status: Approved
                                    items:
                                      type: object
                                      title: Approval Info Response
                                      properties:
                                        id:
                                          type: string
                                          example: 8a80828f643d484f01643e14202e2000
                                          description: the id of approver
                                        name:
                                          type: string
                                          example: John Snow
                                          description: the name of approver
                                        status:
                                          type: string
                                          example: Approved
                                          description: the status of the approval request
                        identityId:
                          type: string
                          example: 8a80828f643d484f01643e14202e206f
                          description: the identity id
                        eventType:
                          type: string
                          example: AccessRequested
                          description: the event type
                        dateTime:
                          type: string
                          example: '2019-03-08T22:37:33.901Z'
                          description: the date of event
                    - type: object
                      title: Account Status Changed
                      required:
                        - account
                        - statusChange
                      properties:
                        eventType:
                          type: string
                          example: AccountStatusChanged
                          description: the event type
                        identityId:
                          type: string
                          description: the identity id
                          example: 8a80828f643d484f01643e14202e206f
                        dateTime:
                          type: string
                          description: the date of event
                          example: '2019-03-08T22:37:33.901Z'
                        account:
                          type: object
                          properties:
                            id:
                              type: string
                              description: the ID of the account in the database
                              example: 2c91808a77ff216301782327a50f09bf
                            nativeIdentity:
                              type: string
                              description: the native identifier of the account
                              example: dr.arden.ogahn.d
                            displayName:
                              type: string
                              description: the display name of the account
                              example: Adam Archer
                            sourceId:
                              type: string
                              description: the ID of the source for this account
                              example: 8a80828f643d484f01643e14202e206f
                            sourceName:
                              type: string
                              description: the name of the source for this account
                              example: JDBC Entitlements Source
                            entitlementCount:
                              type: integer
                              format: int32
                              description: the number of entitlements on this account
                              example: 2
                            accessType:
                              type: string
                              description: this value is always "account"
                              example: account
                        statusChange:
                          type: object
                          properties:
                            previousStatus:
                              type: string
                              description: the previous status of the account
                              enum:
                                - enabled
                                - disabled
                                - locked
                              example: enabled
                            newStatus:
                              type: string
                              description: the new status of the account
                              enum:
                                - enabled
                                - disabled
                                - locked
                              example: disabled
              examples:
                AccessItemAssociated:
                  description: An Access item associated event
                  value:
                    - accessItem:
                        id: 8c190e6787aa4ed9a90bd9d5344523fb
                        accessType: account
                        nativeIdentity: 127999
                        sourceName: JDBC Entitlements Source
                        entitlementCount: 0
                        displayName: Sample Name
                      eventType: AccessItemAssociated
                      identityId: 8a80828f643d484f01643e14202e206f
                      dt: '2019-03-08T22:37:33.901Z'
                      governanceEvent:
                        name: Access Request 58
                        dt: '2019-03-08T22:37:33.901Z'
                        type: accessRequest
                        governanceId: 2c91808a77ff216301782327a50f09e1
                        owners:
                          - id: bc693f07e7b645539626c25954c58554
                            displayName: Jon Snow
                        reviewers:
                          - id: bc693f07e7b645539626c25954c58554
                            displayName: Jon Snow
                        decisionMaker:
                          id: bc693f07e7b645539626c25954c58554
                          displayName: Jon Snow
                AccessItemRemoved:
                  description: An Access item removed event
                  value:
                    - accessItem:
                        id: 8c190e6787aa4ed9a90bd9d5344523fb
                        accessType: account
                        nativeIdentity: 127999
                        sourceName: JDBC Entitlements Source
                        entitlementCount: 0
                        displayName: Sample Name
                      eventType: AccessItemRemoved
                      identityId: 8a80828f643d484f01643e14202e206f
                      dt: '2019-03-08T22:37:33.901Z'
                      governanceEvent:
                        name: Manager Certification for Jon Snow
                        dt: '2019-03-08T22:37:33.901Z'
                        type: certification
                        governanceId: 2c91808a77ff216301782327a50f09bf
                        owners:
                          - id: bc693f07e7b645539626c25954c58554
                            displayName: Jon Snow
                        reviewers:
                          - id: bc693f07e7b645539626c25954c58554
                            displayName: Jon Snow
                        decisionMaker:
                          id: bc693f07e7b645539626c25954c58554
                          displayName: Jon Snow
                AttributesChanged:
                  description: An attribute changed event
                  value:
                    - attributeChanges:
                        - name: firstname
                          previousValue: adam
                          newValue: zampa
                      eventType: AttributesChanged
                      identityId: 8a80828f643d484f01643e14202e206f
                      dt: '2019-03-08T22:37:33.901Z'
                AccessRequested:
                  description: An access requested event
                  value:
                    accessRequest:
                      requesterId: 2c91808a77ff216301782327a50f09bf
                      requestName: Bing C
                      items:
                        - operation: Add
                          accessItemType: role
                          name: Role-1
                          decision: APPROVED
                          description: The role descrition
                          sourceId: 8a80828f643d484f01643e14202e206f
                          sourceName: Source1
                          approvalInfos:
                            - name: John Snow
                              id: 8a80828f643d484f01643e14202e2000
                              status: Approved
                    eventType: AccessRequested
                    identityId: 8a80828f643d484f01643e14202e206f
                    dt: '2019-03-08T22:37:33.901Z'
                IdentityCertified:
                  description: An identity certified event
                  value:
                    - certification:
                        id: 2c91808a77ff216301782327a50f09bf
                        name: Cert name
                        signedDate: '2019-03-08T22:37:33.901Z'
                        certifiers:
                          - id: 8a80828f643d484f01643e14202e206f
                            displayName: John Snow
                        reviewers:
                          - id: 8a80828f643d484f01643e14202e206f
                            displayName: Daenerys Targaryen
                        signer:
                          id: 8a80828f643d484f01643e14202e206f
                          displayName: Tyrion Lannister
                      eventType: IdentityCertified
                      identityId: 8a80828f643d484f01643e14202e206f
                      dt: '2019-03-08T22:37:33.901Z'
                AccountStatusChanged:
                  description: An account status changed event
                  value:
                    - account:
                        id: 2c91808a77ff216301782327a50f09bf
                        nativeIdentity: 127999
                        displayName: Sample Name
                        sourceId: 8a80828f643d484f01643e14202e206f
                        sourceName: JDBC Entitlements Source
                        entitlementCount: 0
                        accessType: account
                      statusChange:
                        previousStatus: ENABLED
                        newStatus: DISABLED
                      eventType: AccountStatusChanged
                      identityId: 8a80828f643d484f01643e14202e206f
                      dt: '2019-03-08T22:37:33.901Z'
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
