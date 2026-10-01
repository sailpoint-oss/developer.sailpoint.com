## OpenAPI

```yaml EVENT webhook
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
  webhook:
    event:
      description: |-
        This event trigger fires after a certification is signed off on and moves to the 'End' status. Do not confuse this event trigger with the Campaign End trigger.
        This is a `FIRE_AND_FORGET` event trigger.  You can have a maximum of 50 subscriptions for this trigger. For more information about this event trigger, refer to [Certification Sign Off](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/certification-signed-off).
      operationId: certificationSignedOffEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              title: Certification Signed Off
              type: object
              required:
                - certification
              properties:
                certification:
                  description: The certification campaign that was signed off on.
                  required:
                    - id
                    - name
                    - created
                  allOf:
                    - type: object
                      title: Certification Dto
                      required:
                        - campaignRef
                        - completed
                        - decisionsMade
                        - decisionsTotal
                        - due
                        - signed
                        - reviewer
                        - campaignOwner
                        - hasErrors
                        - phase
                        - entitiesCompleted
                        - entitiesTotal
                      properties:
                        campaignRef:
                          type: object
                          title: Campaign Reference
                          required:
                            - id
                            - name
                            - type
                            - campaignType
                            - description
                            - correlatedStatus
                            - mandatoryCommentRequirement
                          properties:
                            id:
                              type: string
                              description: The unique ID of the campaign.
                              example: ef38f94347e94562b5bb8424a56397d8
                            name:
                              type: string
                              description: The name of the campaign.
                              example: Campaign Name
                            type:
                              type: string
                              enum:
                                - CAMPAIGN
                              description: The type of object that is being referenced.
                              example: CAMPAIGN
                            campaignType:
                              type: string
                              enum:
                                - MANAGER
                                - SOURCE_OWNER
                                - SEARCH
                                - ROLE_COMPOSITION
                                - MACHINE_ACCOUNT
                              description: The type of the campaign.
                              example: MANAGER
                            description:
                              type: string
                              description: The description of the campaign set by the admin who created it.
                              nullable: true
                              example: A description of the campaign
                            correlatedStatus:
                              type: string
                              description: The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source).
                              enum:
                                - CORRELATED
                                - UNCORRELATED
                              example: CORRELATED
                            mandatoryCommentRequirement:
                              type: string
                              description: Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions.
                              enum:
                                - ALL_DECISIONS
                                - REVOKE_ONLY_DECISIONS
                                - NO_DECISIONS
                              example: NO_DECISIONS
                        phase:
                          type: string
                          description: |
                            The current phase of the campaign.
                            * `STAGED`: The campaign is waiting to be activated.
                            * `ACTIVE`: The campaign is active.
                            * `SIGNED`: The reviewer has signed off on the campaign, and it is considered complete.
                          enum:
                            - STAGED
                            - ACTIVE
                            - SIGNED
                          example: ACTIVE
                          title: certificationphase
                        due:
                          type: string
                          format: date-time
                          description: The due date of the certification.
                          example: '2018-10-19T13:49:37.385Z'
                        signed:
                          type: string
                          format: date-time
                          description: The date the reviewer signed off on the certification.
                          example: '2018-10-19T13:49:37.385Z'
                        reviewer:
                          type: object
                          title: Reviewer
                          properties:
                            id:
                              type: string
                              description: The id of the reviewer.
                              example: ef38f94347e94562b5bb8424a56397d8
                            name:
                              type: string
                              description: The name of the reviewer.
                              example: Reviewer Name
                            email:
                              type: string
                              nullable: true
                              description: The email of the reviewing identity. This is only applicable to reviewers of the `IDENTITY` type.
                              example: reviewer@test.com
                            type:
                              type: string
                              enum:
                                - IDENTITY
                                - GOVERNANCE_GROUP
                              description: The type of the reviewing identity.
                              example: IDENTITY
                            created:
                              nullable: true
                              example: '2018-06-25T20:22:28.104Z'
                              format: date-time
                              type: string
                              description: The created date of the reviewing identity.
                            modified:
                              nullable: true
                              example: '2018-06-25T20:22:28.104Z'
                              format: date-time
                              type: string
                              description: The modified date of the reviewing identity.
                          description: A reference to the reviewer of the campaign.
                        reassignment:
                          type: object
                          title: Reassignment
                          nullable: true
                          properties:
                            from:
                              type: object
                              title: Certification Reference
                              properties:
                                id:
                                  type: string
                                  description: The id of the certification.
                                  example: ef38f94347e94562b5bb8424a56397d8
                                name:
                                  type: string
                                  description: The name of the certification.
                                  example: Certification Name
                                type:
                                  type: string
                                  enum:
                                    - CERTIFICATION
                                  example: CERTIFICATION
                                reviewer:
                                  type: object
                                  title: Reviewer
                                  properties:
                                    id:
                                      type: string
                                      description: The id of the reviewer.
                                      example: ef38f94347e94562b5bb8424a56397d8
                                    name:
                                      type: string
                                      description: The name of the reviewer.
                                      example: Reviewer Name
                                    email:
                                      type: string
                                      nullable: true
                                      description: The email of the reviewing identity. This is only applicable to reviewers of the `IDENTITY` type.
                                      example: reviewer@test.com
                                    type:
                                      type: string
                                      enum:
                                        - IDENTITY
                                        - GOVERNANCE_GROUP
                                      description: The type of the reviewing identity.
                                      example: IDENTITY
                                    created:
                                      nullable: true
                                      example: '2018-06-25T20:22:28.104Z'
                                      format: date-time
                                      type: string
                                      description: The created date of the reviewing identity.
                                    modified:
                                      nullable: true
                                      example: '2018-06-25T20:22:28.104Z'
                                      format: date-time
                                      type: string
                                      description: The modified date of the reviewing identity.
                            comment:
                              type: string
                              description: The comment entered when the Certification was reassigned
                              example: Reassigned for a reason
                          description: A reference to a reviewer that this campaign has been reassigned to.
                        hasErrors:
                          type: boolean
                          example: false
                          description: Indicates it the certification has any errors.
                        errorMessage:
                          type: string
                          nullable: true
                          example: The certification has an error
                          description: A message indicating what the error is.
                        completed:
                          type: boolean
                          description: Indicates if all certification decisions have been made.
                          example: false
                        decisionsMade:
                          type: integer
                          description: The number of approve/revoke/acknowledge decisions that have been made by the reviewer.
                          example: 20
                          format: int32
                        decisionsTotal:
                          type: integer
                          description: The total number of approve/revoke/acknowledge decisions for the certification.
                          example: 40
                          format: int32
                        entitiesCompleted:
                          type: integer
                          description: The number of entities (identities, access profiles, roles, etc.) for which all decisions have been made and are complete.
                          example: 5
                          format: int32
                        entitiesTotal:
                          type: integer
                          format: int32
                          description: The total number of entities (identities, access profiles, roles, etc.) in the certification, both complete and incomplete.
                          example: 10
                  properties:
                    id:
                      type: string
                      description: Unique ID of the certification.
                      example: 2c91808576f886190176f88caf0d0067
                    name:
                      type: string
                      description: The name of the certification.
                      example: Manager Access Review for Alice Baker
                    created:
                      type: string
                      format: date-time
                      description: The date and time the certification was created.
                      example: '2020-02-16T03:04:45.815Z'
                    modified:
                      nullable: true
                      type: string
                      format: date-time
                      description: The date and time the certification was last modified.
                      example: '2020-02-16T03:06:45.815Z'
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
