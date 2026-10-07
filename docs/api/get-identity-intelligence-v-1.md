## OpenAPI

```yaml GET /intelligence/v1/identities
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
  /intelligence/v1/identities:
    get:
      description: |
        Requires tenant license idn:response-and-remediation.

        **Caution:** When Data Segmentation is enabled, generic API Management API keys are not tied to
        a user identity and may fail or return incomplete data. Use a [personal access token](https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token)
        or other user-scoped OAuth token. See [API keys](https://documentation.sailpoint.com/saas/help/common/api_keys.html)
        and [Data Segmentation](https://documentation.sailpoint.com/saas/help/segmentation/index.html).

        Resolves exactly one identity using a single SCIM-style filters expression. Returns an enriched
        Human or non-human identity (NHI) envelope. Single-clause filters only; unsupported fields or
        operators return HTTP 400.
      operationId: getIdentityIntelligenceV1
      security:
        - userAuth:
            - sp:identity-sec-intel:read
        - applicationAuth:
            - sp:identity-sec-intel:read
      parameters:
        - in: query
          name: filters
          required: true
          schema:
            type: string
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq*

            **email**: *eq*

            **opaqueIdentifier**: *eq*
          example: id eq "ef38f94347e94562b5bb8424a56397d8"
      responses:
        '200':
          description: Exactly one identity matched.
          content:
            application/json:
              schema:
                discriminator:
                  propertyName: type
                  mapping:
                    Human:
                      type: object
                      description: |
                        Human identity response (type Human). Identity attributes are hoisted to the top level.
                        The accounts, privilegedAccess, and accessHistory slices are always present (empty slices use items []).
                        The outliers slice is omitted when the tenant lacks the IDA-outliers license.
                        The identityGraph deep link is omitted when the tenant lacks the idg:base license.
                        The nonHumanIdentityOwnership slice is omitted when the tenant lacks idn:machine-identity-security.
                      required:
                        - id
                        - type
                        - accounts
                        - privilegedAccess
                        - accessHistory
                      properties:
                        id:
                          type: string
                          description: Identity Security Cloud identifier for this identity.
                          example: ef38f94347e94562b5bb8424a56397d8
                        type:
                          type: string
                          enum:
                            - Human
                          description: Identity type for the matched record.
                          example: Human
                        displayName:
                          type: string
                          description: Preferred display name for the identity across administrative experiences.
                          example: Example User
                        description:
                          type: string
                          nullable: true
                          description: Optional free-text description assigned to the identity profile when present.
                          example: Example description.
                        subtype:
                          type: string
                          nullable: true
                          description: NERM classification for the identity.
                          enum:
                            - Employee
                            - Non Employee
                            - Cannot Determine
                          example: Employee
                        attributes:
                          type: object
                          additionalProperties: true
                          description: Arbitrary SCIM-style attribute bag returned for the identity context view.
                          example:
                            department: Engineering
                            region: US
                        created:
                          type: string
                          format: date-time
                          description: Timestamp when the identity record was created in Identity Security Cloud.
                          example: '2026-05-12T08:00:00Z'
                        modified:
                          type: string
                          format: date-time
                          description: Timestamp when the identity record was last modified in Identity Security Cloud.
                          example: '2026-05-12T09:15:30Z'
                        alias:
                          type: string
                          description: Primary login or account alias for the identity.
                          example: example.user
                        email:
                          type: string
                          format: email
                          description: Primary business email address for the identity.
                          example: user@example.com
                        identityStatus:
                          type: string
                          description: Current identity lifecycle status label from Identity Security Cloud.
                          example: ACTIVE
                        isManager:
                          type: boolean
                          default: false
                          description: True when the identity is flagged as a people manager in the organization.
                          example: false
                        identityGraph:
                          type: object
                          description: Omitted when the tenant lacks the idg:base license.
                          allOf:
                            - type: object
                              required:
                                - href
                              description: |
                                Deep link into Identity Graph UI for the resolved identity at the aggregate root.
                                Omitted when the tenant lacks the idg:base license.

                                To access the Identity Graph UI, the user must have the **Identity Graph Read Only** user level assigned.
                              properties:
                                href:
                                  type: string
                                  format: uri
                                  description: |
                                    Absolute URL to the Identity Graph view. Omitted when the tenant lacks idg:base or when
                                    the IDN UI host cannot be resolved from sp-tenant. Query parameters include `entity`
                                    and `id` for the resolved identity. The `entity` value reflects identity type: `human_identity`
                                    for Human responses and `machine_identity` for NHI responses.
                                  example: https://tenant.identitynow.com/ui/identity-graph?entity=human_identity&id=ef38f94347e94562b5bb8424a56397d8
                              title: intelidentitygraphlink
                        nonHumanIdentityOwnership:
                          type: object
                          description: |
                            Omitted when the tenant lacks `idn:machine-identity-security`. When present, both `agents`
                            and `applications` always render.
                          allOf:
                            - type: object
                              required:
                                - agents
                                - applications
                              description: |
                                Non-human identities the human owns, grouped by subtype category. Present only when the tenant
                                has `idn:machine-identity-security`. When present, both `agents` and `applications` always render.
                                Each category is a flat object with optional primaryOwned/secondaryOwned buckets and optional
                                message/reason when upstream ownership fetch fails for that category.
                              properties:
                                agents:
                                  description: Ownership for non-human identities with subtype AI Agent.
                                  allOf:
                                    - type: object
                                      description: |
                                        Ownership category for agents or applications. On success, primaryOwned and secondaryOwned
                                        carry independently paged buckets. On category-level upstream failure, message and reason are
                                        set (reason: UPSTREAM_UNAVAILABLE). The service emits one flat object today, so primaryOwned
                                        and secondaryOwned may still appear on the failure path with empty items.
                                      properties:
                                        primaryOwned:
                                          type: object
                                          description: First page of non-human identities for which this human is the primary owner.
                                          allOf:
                                            - type: object
                                              required:
                                                - items
                                              description: |
                                                One paged ownership role bucket (`primaryOwned` or `secondaryOwned`) embedded on the human
                                                aggregate. Embeds the first page of owned non-human identities; totalCount when items is
                                                non-empty. Continuation next carries limit and offset.
                                              properties:
                                                items:
                                                  type: array
                                                  description: First page of owned non-human identities for this role.
                                                  items:
                                                    type: object
                                                    required:
                                                      - id
                                                      - displayName
                                                    description: Owned non-human identity summary row (aggregate slices and child route).
                                                    properties:
                                                      id:
                                                        type: string
                                                        description: Identity Security Cloud identifier for the owned non-human identity.
                                                        example: 2c91808874ff91550175097daaec161e
                                                      displayName:
                                                        type: string
                                                        description: Preferred display name for the owned non-human identity.
                                                        example: Example AI Agent
                                                      source:
                                                        type: object
                                                        description: Source of the owned non-human identity.
                                                        allOf:
                                                          - type: object
                                                            required:
                                                              - id
                                                              - name
                                                              - type
                                                            properties:
                                                              id:
                                                                type: string
                                                                description: Source identifier.
                                                                example: 60de165099e649cb828553a5e8510fc4
                                                              name:
                                                                type: string
                                                                description: Source display name.
                                                                example: Example Directory
                                                              type:
                                                                type: string
                                                                description: Source type label from upstream.
                                                                example: DelimitedFile
                                                            title: intelmachinesourcewire
                                                    title: intel-non-human-identity-ownership-item
                                                totalCount:
                                                  type: integer
                                                  format: int32
                                                  minimum: 1
                                                  description: Total number of owned non-human identities in this role; omitted when items is empty.
                                                  example: 11
                                                next:
                                                  type: string
                                                  format: uri
                                                  description: |
                                                    Absolute URL to the next page for this category and ownership role; present when totalCount
                                                    exceeds the items returned on this page. Includes `ownershipRole`, `limit`, `offset`, and
                                                    `count=true`.
                                                  example: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/non-human-identity-ownership/agents?ownershipRole=primary&limit=10&offset=10&count=true
                                              title: intel-non-human-identity-owned-slice
                                        secondaryOwned:
                                          type: object
                                          description: First page of non-human identities for which this human is a secondary owner.
                                          allOf:
                                            - type: object
                                              required:
                                                - items
                                              description: |
                                                One paged ownership role bucket (`primaryOwned` or `secondaryOwned`) embedded on the human
                                                aggregate. Embeds the first page of owned non-human identities; totalCount when items is
                                                non-empty. Continuation next carries limit and offset.
                                              properties:
                                                items:
                                                  type: array
                                                  description: First page of owned non-human identities for this role.
                                                  items:
                                                    type: object
                                                    required:
                                                      - id
                                                      - displayName
                                                    description: Owned non-human identity summary row (aggregate slices and child route).
                                                    properties:
                                                      id:
                                                        type: string
                                                        description: Identity Security Cloud identifier for the owned non-human identity.
                                                        example: 2c91808874ff91550175097daaec161e
                                                      displayName:
                                                        type: string
                                                        description: Preferred display name for the owned non-human identity.
                                                        example: Example AI Agent
                                                      source:
                                                        type: object
                                                        description: Source of the owned non-human identity.
                                                        allOf:
                                                          - type: object
                                                            required:
                                                              - id
                                                              - name
                                                              - type
                                                            properties:
                                                              id:
                                                                type: string
                                                                description: Source identifier.
                                                                example: 60de165099e649cb828553a5e8510fc4
                                                              name:
                                                                type: string
                                                                description: Source display name.
                                                                example: Example Directory
                                                              type:
                                                                type: string
                                                                description: Source type label from upstream.
                                                                example: DelimitedFile
                                                            title: intelmachinesourcewire
                                                    title: intel-non-human-identity-ownership-item
                                                totalCount:
                                                  type: integer
                                                  format: int32
                                                  minimum: 1
                                                  description: Total number of owned non-human identities in this role; omitted when items is empty.
                                                  example: 11
                                                next:
                                                  type: string
                                                  format: uri
                                                  description: |
                                                    Absolute URL to the next page for this category and ownership role; present when totalCount
                                                    exceeds the items returned on this page. Includes `ownershipRole`, `limit`, `offset`, and
                                                    `count=true`.
                                                  example: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/non-human-identity-ownership/agents?ownershipRole=primary&limit=10&offset=10&count=true
                                              title: intel-non-human-identity-owned-slice
                                        message:
                                          type: string
                                          description: Human-readable explanation of the temporary ownership data failure.
                                          example: Data temporarily unavailable. Please try again later.
                                        reason:
                                          type: string
                                          enum:
                                            - UPSTREAM_UNAVAILABLE
                                          description: Machine-readable reason code for the category-level ownership failure.
                                          example: UPSTREAM_UNAVAILABLE
                                      title: intel-non-human-identity-ownership-category
                                applications:
                                  description: Ownership for non-human identities with subtype Application.
                                  allOf:
                                    - type: object
                                      description: |
                                        Ownership category for agents or applications. On success, primaryOwned and secondaryOwned
                                        carry independently paged buckets. On category-level upstream failure, message and reason are
                                        set (reason: UPSTREAM_UNAVAILABLE). The service emits one flat object today, so primaryOwned
                                        and secondaryOwned may still appear on the failure path with empty items.
                                      properties:
                                        primaryOwned:
                                          type: object
                                          description: First page of non-human identities for which this human is the primary owner.
                                          allOf:
                                            - type: object
                                              required:
                                                - items
                                              description: |
                                                One paged ownership role bucket (`primaryOwned` or `secondaryOwned`) embedded on the human
                                                aggregate. Embeds the first page of owned non-human identities; totalCount when items is
                                                non-empty. Continuation next carries limit and offset.
                                              properties:
                                                items:
                                                  type: array
                                                  description: First page of owned non-human identities for this role.
                                                  items:
                                                    type: object
                                                    required:
                                                      - id
                                                      - displayName
                                                    description: Owned non-human identity summary row (aggregate slices and child route).
                                                    properties:
                                                      id:
                                                        type: string
                                                        description: Identity Security Cloud identifier for the owned non-human identity.
                                                        example: 2c91808874ff91550175097daaec161e
                                                      displayName:
                                                        type: string
                                                        description: Preferred display name for the owned non-human identity.
                                                        example: Example AI Agent
                                                      source:
                                                        type: object
                                                        description: Source of the owned non-human identity.
                                                        allOf:
                                                          - type: object
                                                            required:
                                                              - id
                                                              - name
                                                              - type
                                                            properties:
                                                              id:
                                                                type: string
                                                                description: Source identifier.
                                                                example: 60de165099e649cb828553a5e8510fc4
                                                              name:
                                                                type: string
                                                                description: Source display name.
                                                                example: Example Directory
                                                              type:
                                                                type: string
                                                                description: Source type label from upstream.
                                                                example: DelimitedFile
                                                            title: intelmachinesourcewire
                                                    title: intel-non-human-identity-ownership-item
                                                totalCount:
                                                  type: integer
                                                  format: int32
                                                  minimum: 1
                                                  description: Total number of owned non-human identities in this role; omitted when items is empty.
                                                  example: 11
                                                next:
                                                  type: string
                                                  format: uri
                                                  description: |
                                                    Absolute URL to the next page for this category and ownership role; present when totalCount
                                                    exceeds the items returned on this page. Includes `ownershipRole`, `limit`, `offset`, and
                                                    `count=true`.
                                                  example: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/non-human-identity-ownership/agents?ownershipRole=primary&limit=10&offset=10&count=true
                                              title: intel-non-human-identity-owned-slice
                                        secondaryOwned:
                                          type: object
                                          description: First page of non-human identities for which this human is a secondary owner.
                                          allOf:
                                            - type: object
                                              required:
                                                - items
                                              description: |
                                                One paged ownership role bucket (`primaryOwned` or `secondaryOwned`) embedded on the human
                                                aggregate. Embeds the first page of owned non-human identities; totalCount when items is
                                                non-empty. Continuation next carries limit and offset.
                                              properties:
                                                items:
                                                  type: array
                                                  description: First page of owned non-human identities for this role.
                                                  items:
                                                    type: object
                                                    required:
                                                      - id
                                                      - displayName
                                                    description: Owned non-human identity summary row (aggregate slices and child route).
                                                    properties:
                                                      id:
                                                        type: string
                                                        description: Identity Security Cloud identifier for the owned non-human identity.
                                                        example: 2c91808874ff91550175097daaec161e
                                                      displayName:
                                                        type: string
                                                        description: Preferred display name for the owned non-human identity.
                                                        example: Example AI Agent
                                                      source:
                                                        type: object
                                                        description: Source of the owned non-human identity.
                                                        allOf:
                                                          - type: object
                                                            required:
                                                              - id
                                                              - name
                                                              - type
                                                            properties:
                                                              id:
                                                                type: string
                                                                description: Source identifier.
                                                                example: 60de165099e649cb828553a5e8510fc4
                                                              name:
                                                                type: string
                                                                description: Source display name.
                                                                example: Example Directory
                                                              type:
                                                                type: string
                                                                description: Source type label from upstream.
                                                                example: DelimitedFile
                                                            title: intelmachinesourcewire
                                                    title: intel-non-human-identity-ownership-item
                                                totalCount:
                                                  type: integer
                                                  format: int32
                                                  minimum: 1
                                                  description: Total number of owned non-human identities in this role; omitted when items is empty.
                                                  example: 11
                                                next:
                                                  type: string
                                                  format: uri
                                                  description: |
                                                    Absolute URL to the next page for this category and ownership role; present when totalCount
                                                    exceeds the items returned on this page. Includes `ownershipRole`, `limit`, `offset`, and
                                                    `count=true`.
                                                  example: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/non-human-identity-ownership/agents?ownershipRole=primary&limit=10&offset=10&count=true
                                              title: intel-non-human-identity-owned-slice
                                        message:
                                          type: string
                                          description: Human-readable explanation of the temporary ownership data failure.
                                          example: Data temporarily unavailable. Please try again later.
                                        reason:
                                          type: string
                                          enum:
                                            - UPSTREAM_UNAVAILABLE
                                          description: Machine-readable reason code for the category-level ownership failure.
                                          example: UPSTREAM_UNAVAILABLE
                                      title: intel-non-human-identity-ownership-category
                              title: intel-non-human-identity-ownership
                        accounts:
                          type: object
                          description: First page of accounts for the identity.
                          allOf:
                            - type: object
                              required:
                                - items
                              description: Accounts slice embedded in the aggregate identity response.
                              properties:
                                items:
                                  type: array
                                  description: First page of accounts for the identity.
                                  items:
                                    type: object
                                    required:
                                      - id
                                      - name
                                      - disabled
                                      - locked
                                      - authoritative
                                      - systemAccount
                                      - isMachine
                                      - manuallyCorrelated
                                      - created
                                      - modified
                                    properties:
                                      id:
                                        type: string
                                        description: Unique account identifier in Identity Security Cloud.
                                        example: 2c91808874ff91550175097daaec161c
                                      name:
                                        type: string
                                        description: Account name or login value on the correlated source.
                                        example: jdoe
                                      source:
                                        type: object
                                        description: Source metadata for the account as returned by List Accounts wire format.
                                        allOf:
                                          - type: object
                                            properties:
                                              id:
                                                type: string
                                                description: Source identifier referenced by the account wire object.
                                                example: 2c9180835d2e5168015d32f890301e89
                                              name:
                                                type: string
                                                description: Human-readable source name shown in administrative consoles.
                                                example: Active Directory
                                            title: intelaccesssourcewire
                                      disabled:
                                        type: boolean
                                        description: True when the account is administratively disabled on the source.
                                        example: false
                                      locked:
                                        type: boolean
                                        description: True when the account is locked from interactive sign-in on the source.
                                        example: false
                                      authoritative:
                                        type: boolean
                                        description: True when the account is treated as authoritative for attribute synchronization.
                                        example: true
                                      systemAccount:
                                        type: boolean
                                        description: True when the account represents a non-interactive or system principal.
                                        example: false
                                      isMachine:
                                        type: boolean
                                        description: True when the account belongs to a machine or service identity.
                                        example: false
                                      manuallyCorrelated:
                                        type: boolean
                                        description: True when an administrator manually correlated the account to an identity.
                                        example: false
                                      nativeIdentity:
                                        type: string
                                        nullable: true
                                        description: Native identifier string on the source directory or application.
                                        example: CN=jdoe,OU=Users,DC=example,DC=com
                                      created:
                                        type: string
                                        format: date-time
                                        description: Timestamp when the account record was created in Identity Security Cloud.
                                        example: '2023-11-01T10:00:00Z'
                                      modified:
                                        type: string
                                        format: date-time
                                        description: Timestamp when the account record was last modified in Identity Security Cloud.
                                        example: '2024-02-15T16:20:00Z'
                                    title: intelaccessaccountwire
                                totalCount:
                                  type: integer
                                  format: int32
                                  minimum: 1
                                  description: Total number of accounts for this identity; omitted when `items` is empty.
                                  example: 42
                                next:
                                  type: string
                                  format: uri
                                  description: Absolute URL to the next accounts page; present when totalCount exceeds the items returned on this page.
                                  example: https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/accounts?limit=10&offset=10&count=true
                              title: intelaccountsslice
                        privilegedAccess:
                          type: object
                          description: Full privileged access result for the identity.
                          allOf:
                            - type: object
                              required:
                                - items
                              description: Full privileged access result embedded in the aggregate identity response.
                              properties:
                                items:
                                  type: array
                                  description: Privileged access items for the identity.
                                  items:
                                    type: object
                                    required:
                                      - privileged
                                      - id
                                      - type
                                    properties:
                                      privileged:
                                        type: boolean
                                        description: True when this item is classified as privileged access for the identity.
                                        example: true
                                      privilegeLevel:
                                        description: Effective privilege classification for the privileged access item.
                                        type: object
                                        properties:
                                          effective:
                                            type: string
                                            description: |
                                              Effective privilege level for the privileged access item.
                                            enum:
                                              - HIGH
                                              - MEDIUM
                                              - LOW
                                              - NONE
                                            example: HIGH
                                        title: intelprivilegelevel
                                      id:
                                        type: string
                                        description: Identifier of the privileged access item.
                                        example: ent-1
                                      type:
                                        type: string
                                        description: Type of privileged access object.
                                        example: entitlement
                                      displayName:
                                        type: string
                                        description: Display label for the privileged access item in administrative experiences.
                                        example: Example_Admin_Access
                                      name:
                                        type: string
                                        description: Technical name of the privileged access item.
                                        example: Example_Admin_Access
                                      source:
                                        type: object
                                        description: Source metadata associated with the privileged access item when present.
                                        properties:
                                          name:
                                            type: string
                                            description: Human-readable source name for the privileged access item.
                                            example: Example HR Source
                                          id:
                                            type: string
                                            description: Source identifier for the privileged access item.
                                            example: src-2
                                      attribute:
                                        type: string
                                        description: Source attribute name that carries the privileged value when applicable.
                                        example: EXAMPLE_PERMISSION_GROUPS
                                      value:
                                        type: string
                                        description: Privileged value on the source attribute when applicable.
                                        example: Example_Admin_Access
                                    title: intelprivilegedaccessitemwire
                              title: intelprivilegedaccessslice
                        outliers:
                          type: object
                          description: Rare access slice; omitted when the tenant lacks the IDA-outliers license.
                          allOf:
                            - type: object
                              required:
                                - rareAccess
                              description: Outlier slices embedded in the aggregate identity response.
                              properties:
                                rareAccess:
                                  description: First page of rare access items for the identity.
                                  allOf:
                                    - type: object
                                      required:
                                        - items
                                      description: Rare access slice embedded in the aggregate identity response.
                                      properties:
                                        items:
                                          type: array
                                          description: First page of rare access items for the identity.
                                          items:
                                            type: object
                                            required:
                                              - id
                                              - displayName
                                              - accessType
                                              - sourceName
                                              - extremelyRare
                                            description: One outlier access-item row.
                                            properties:
                                              id:
                                                type: string
                                                description: Stable identifier of the outlier access-item row.
                                                example: outlier-access-001
                                              displayName:
                                                type: string
                                                description: Display label of the risky access item.
                                                example: Example_Admin_Access
                                              description:
                                                type: string
                                                nullable: true
                                                description: Optional descriptive text for the risky access item.
                                                example: null
                                              accessType:
                                                type: string
                                                description: Access item type.
                                                example: ENTITLEMENT
                                              sourceName:
                                                type: string
                                                description: Source name where the risky access item exists.
                                                example: Example SaaS Source
                                              extremelyRare:
                                                type: boolean
                                                description: Indicates whether analytics marked this item as extremely rare.
                                                example: false
                                            title: inteloutlieraccessitem
                                        totalCount:
                                          type: integer
                                          format: int32
                                          minimum: 1
                                          description: Total number of rare-access items for the resolved outlier; omitted when `items` is empty.
                                          example: 15
                                        next:
                                          type: string
                                          format: uri
                                          description: Absolute URL to the next rareAccess page; present when totalCount exceeds the items returned on this page.
                                          example: https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/outliers/rare-access?limit=10&offset=10&count=true
                                      title: intelrareaccessslice
                              title: inteloutliersslice
                        accessHistory:
                          type: object
                          description: Access-history split into access items and certifications sub-slices.
                          allOf:
                            - type: object
                              required:
                                - accessItems
                                - certifications
                              description: |
                                Access-history split into two independently paged categories. accessItems carries
                                grant, remove, and account-status events. certifications carries identity-certified events.
                              properties:
                                accessItems:
                                  type: object
                                  description: First page of access-item history events for the identity.
                                  allOf:
                                    - type: object
                                      required:
                                        - items
                                      description: Access-item history slice embedded in the aggregate identity response.
                                      properties:
                                        items:
                                          type: array
                                          description: First page of access-item history events for the identity.
                                          items:
                                            type: object
                                            required:
                                              - eventType
                                            description: |
                                              Access-item history event. Supported eventTypes are AccessItemAssociated, AccessItemRemoved,
                                              and AccountStatusChanged.
                                            additionalProperties: true
                                            properties:
                                              eventType:
                                                type: string
                                                enum:
                                                  - AccessItemAssociated
                                                  - AccessItemRemoved
                                                  - AccountStatusChanged
                                                description: Type of access-item history event.
                                                example: AccessItemRemoved
                                              dateTime:
                                                type: string
                                                format: date-time
                                                description: Event timestamp.
                                                example: '2026-05-11T09:40:04.496Z'
                                            title: intelaccessitemhistoryevent
                                        totalCount:
                                          type: integer
                                          format: int32
                                          minimum: 1
                                          description: Total number of events in this category; omitted when `items` is empty.
                                          example: 128
                                        next:
                                          type: string
                                          format: uri
                                          description: Absolute URL to the next access-items page; present when totalCount exceeds the items returned on this page.
                                          example: https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/access-history/access-items?limit=10&offset=10&count=true
                                      title: intelaccesshistoryaccessitemsslice
                                certifications:
                                  type: object
                                  description: First page of certification history events for the identity.
                                  allOf:
                                    - type: object
                                      required:
                                        - items
                                      description: Certification history slice embedded in the aggregate identity response.
                                      properties:
                                        items:
                                          type: array
                                          description: First page of certification history events for the identity.
                                          items:
                                            type: object
                                            required:
                                              - eventType
                                            description: Certification history event. Supported eventType is IdentityCertified.
                                            additionalProperties: true
                                            properties:
                                              eventType:
                                                type: string
                                                enum:
                                                  - IdentityCertified
                                                description: Type of certification history event.
                                                example: IdentityCertified
                                              dateTime:
                                                type: string
                                                format: date-time
                                                description: Event timestamp.
                                                example: '2019-03-08T22:37:33.901Z'
                                              certificationId:
                                                type: string
                                                description: Identifier of the certification.
                                                example: 2c91808a77ff216301782327a50f09bf
                                              certificationName:
                                                type: string
                                                description: Display name of the certification.
                                                example: Example certification
                                              signedDate:
                                                type: string
                                                format: date-time
                                                description: Timestamp when the certification was signed.
                                                example: '2019-03-08T22:37:33.901Z'
                                            title: intelcertificationhistoryevent
                                        totalCount:
                                          type: integer
                                          format: int32
                                          minimum: 1
                                          description: Total number of events in this category; omitted when `items` is empty.
                                          example: 6
                                        next:
                                          type: string
                                          format: uri
                                          description: Absolute URL to the next certifications page; present when totalCount exceeds the items returned on this page.
                                          example: https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/access-history/certifications?limit=10&offset=10&count=true
                                      title: intelaccesshistorycertificationsslice
                              title: intelaccesshistory
                      title: intelidentityaggregate
                    NHI:
                      type: object
                      description: |
                        Non-human identity response (type NHI). Machine identity fields are hoisted to the top level
                        (no machine wrapper). Omits human-only fields and slices (email, alias, privilegedAccess, outliers,
                        accessHistory). Top-level sourceId is omitted; use source.id when present. matchConfidence is
                        present for opaque prefix resolution (exact or partial); omitted for direct id eq and exact opaque
                        matches. The identityGraph deep link is omitted when the tenant lacks the idg:base license.
                      required:
                        - id
                        - type
                        - accounts
                        - nativeIdentity
                        - owners
                        - attributes
                        - derived
                      properties:
                        id:
                          type: string
                          description: Identity Security Cloud identifier for this non-human identity.
                          example: ef38f94347e94562b5bb8424a56397d8
                        type:
                          type: string
                          enum:
                            - NHI
                          description: Identity type for the matched record.
                          example: NHI
                        displayName:
                          type: string
                          description: Preferred display name for the non-human identity.
                          example: display name
                        description:
                          type: string
                          nullable: true
                          description: Optional description from upstream when present.
                        subtype:
                          type: string
                          nullable: true
                          description: Sub-classification label for that NHI.
                          example: AI Agent
                        created:
                          type: string
                          format: date-time
                          description: Timestamp when the identity record was created in Identity Security Cloud.
                          example: '2026-05-12T08:00:00Z'
                        modified:
                          type: string
                          format: date-time
                          description: Timestamp when the identity record was last modified in Identity Security Cloud.
                          example: '2026-05-12T09:15:30Z'
                        matchConfidence:
                          type: string
                          enum:
                            - exact
                            - partial
                          description: Match quality for opaque prefix resolution; omitted for direct id eq and exact opaque matches.
                          example: exact
                        identityGraph:
                          type: object
                          description: Omitted when the tenant lacks the idg:base license.
                          allOf:
                            - type: object
                              required:
                                - href
                              description: |
                                Deep link into Identity Graph UI for the resolved identity at the aggregate root.
                                Omitted when the tenant lacks the idg:base license.

                                To access the Identity Graph UI, the user must have the **Identity Graph Read Only** user level assigned.
                              properties:
                                href:
                                  type: string
                                  format: uri
                                  description: |
                                    Absolute URL to the Identity Graph view. Omitted when the tenant lacks idg:base or when
                                    the IDN UI host cannot be resolved from sp-tenant. Query parameters include `entity`
                                    and `id` for the resolved identity. The `entity` value reflects identity type: `human_identity`
                                    for Human responses and `machine_identity` for NHI responses.
                                  example: https://tenant.identitynow.com/ui/identity-graph?entity=human_identity&id=ef38f94347e94562b5bb8424a56397d8
                              title: intelidentitygraphlink
                        accounts:
                          type: object
                          required:
                            - items
                          description: Machine accounts embedded on the non-human identity aggregate (first page).
                          properties:
                            items:
                              type: array
                              description: Machine accounts correlated to the non-human identity.
                              items:
                                type: object
                                description: Machine account row on the non-human identity aggregate accounts.items list. Every property in required is always present on the wire. Nullable object refs (source, machineIdentity, ownerIdentity) may be null. String fields may be empty when upstream has no value; booleans, timestamps, attributes, and connectorAttributes are always emitted (empty object when absent).
                                required:
                                  - id
                                  - name
                                  - nativeIdentity
                                  - source
                                  - enabled
                                  - locked
                                  - machineIdentity
                                  - ownerIdentity
                                  - description
                                  - subtype
                                  - accessType
                                  - environment
                                  - classificationMethod
                                  - manuallyEdited
                                  - manuallyCorrelated
                                  - hasEntitlements
                                  - created
                                  - modified
                                  - attributes
                                  - connectorAttributes
                                properties:
                                  id:
                                    type: string
                                    description: Unique account identifier in Identity Security Cloud.
                                    example: 2c91808874ff91550175097daaec161c
                                  name:
                                    type: string
                                    description: Account name on the correlated source.
                                    example: account-name
                                  nativeIdentity:
                                    type: string
                                    description: Native identifier on the source system.
                                    example: arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI
                                  source:
                                    nullable: true
                                    description: Source metadata for the machine account when present upstream.
                                    allOf:
                                      - type: object
                                        required:
                                          - id
                                          - name
                                          - type
                                        properties:
                                          id:
                                            type: string
                                            description: Source identifier.
                                            example: 60de165099e649cb828553a5e8510fc4
                                          name:
                                            type: string
                                            description: Source display name.
                                            example: Example Directory
                                          type:
                                            type: string
                                            description: Source type label from upstream.
                                            example: DelimitedFile
                                        title: intelmachinesourcewire
                                  enabled:
                                    type: boolean
                                    description: True when the account is enabled for use on the source.
                                    example: true
                                  locked:
                                    type: boolean
                                    description: True when the account is locked on the source.
                                    example: false
                                  machineIdentity:
                                    nullable: true
                                    description: Reference to the parent machine identity when populated upstream.
                                    allOf:
                                      - type: object
                                        description: Typed id and name reference for owners, machine identities, and authorized humans.
                                        required:
                                          - type
                                          - id
                                          - name
                                        properties:
                                          type:
                                            type: string
                                            description: Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY).
                                            example: IDENTITY
                                          id:
                                            type: string
                                            description: Referenced object identifier.
                                            example: ef38f94347e94562b5bb8424a56397d8
                                          name:
                                            type: string
                                            description: Display name for the referenced identity or entity.
                                            example: Example User
                                          email:
                                            type: string
                                            description: Email for authorized human holders when available upstream.
                                            example: user@example.com
                                        title: intelmachineentityref
                                  ownerIdentity:
                                    nullable: true
                                    description: Reference to the owning human identity when populated upstream.
                                    allOf:
                                      - type: object
                                        description: Typed id and name reference for owners, machine identities, and authorized humans.
                                        required:
                                          - type
                                          - id
                                          - name
                                        properties:
                                          type:
                                            type: string
                                            description: Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY).
                                            example: IDENTITY
                                          id:
                                            type: string
                                            description: Referenced object identifier.
                                            example: ef38f94347e94562b5bb8424a56397d8
                                          name:
                                            type: string
                                            description: Display name for the referenced identity or entity.
                                            example: Example User
                                          email:
                                            type: string
                                            description: Email for authorized human holders when available upstream.
                                            example: user@example.com
                                        title: intelmachineentityref
                                  description:
                                    type: string
                                    description: Free-text account description from the source.
                                    example: Service account for automation
                                  subtype:
                                    type: string
                                    description: Account subtype label from upstream classification.
                                    example: Service Account
                                  accessType:
                                    type: string
                                    description: Access type label for the account (for example account or entitlement).
                                    example: account
                                  environment:
                                    type: string
                                    description: Environment label associated with the account.
                                    example: production
                                  classificationMethod:
                                    type: string
                                    description: Method used to classify the account as a machine account.
                                    example: DISCOVERED
                                  manuallyEdited:
                                    type: boolean
                                    description: True when an administrator manually edited account attributes.
                                    example: false
                                  manuallyCorrelated:
                                    type: boolean
                                    description: True when an administrator manually correlated the account.
                                    example: false
                                  hasEntitlements:
                                    type: boolean
                                    description: True when the account holds one or more entitlements.
                                    example: true
                                  created:
                                    type: string
                                    format: date-time
                                    description: Timestamp when the account record was created.
                                    example: '2026-01-01T00:00:00Z'
                                  modified:
                                    type: string
                                    format: date-time
                                    description: Timestamp when the account record was last modified.
                                    example: '2026-05-01T00:00:00Z'
                                  attributes:
                                    type: object
                                    additionalProperties: true
                                    description: Extended account attributes from the source connector.
                                    example: {}
                                  connectorAttributes:
                                    type: object
                                    additionalProperties: true
                                    description: Connector-specific attribute bag from upstream.
                                    example: {}
                                title: intelmachineaccountwire
                            totalCount:
                              type: integer
                              format: int32
                              minimum: 1
                              description: Correlated machine account count from aggregation; omitted when items is empty.
                              example: 11
                            next:
                              type: string
                              format: uri
                              description: Next page URL when totalCount exceeds items returned. Includes isNHI=true.
                              example: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/2c91808874ff91550175097daaec161e/accounts?limit=10&offset=10&count=true&isNHI=true
                          title: intelmachineaccountsslice
                        nativeIdentity:
                          type: string
                          description: Native identifier on the source system.
                          example: arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI
                        datasetId:
                          type: string
                          nullable: true
                          description: Dataset identifier from upstream machine-identity services when present.
                          example: dataset-001
                        source:
                          nullable: true
                          description: Source metadata for the machine identity when present upstream.
                          allOf:
                            - type: object
                              required:
                                - id
                                - name
                                - type
                              properties:
                                id:
                                  type: string
                                  description: Source identifier.
                                  example: 60de165099e649cb828553a5e8510fc4
                                name:
                                  type: string
                                  description: Source display name.
                                  example: Example Directory
                                type:
                                  type: string
                                  description: Source type label from upstream.
                                  example: DelimitedFile
                              title: intelmachinesourcewire
                        existsOnSource:
                          type: string
                          nullable: true
                          description: Upstream existsOnSource value. Wire uses uppercase strings such as TRUE or FALSE.
                          example: 'TRUE'
                        manuallyEdited:
                          type: boolean
                          default: false
                          description: True when an administrator manually edited machine identity attributes.
                          example: false
                        manuallyCreated:
                          type: boolean
                          default: false
                          description: True when the machine identity was created manually in Identity Security Cloud.
                          example: false
                        owners:
                          type: object
                          required:
                            - primaryIdentity
                            - secondaryIdentities
                          description: |
                            Owner references. primaryIdentity is null when no primary owner is set. Primary and
                            secondary owner ids are both considered for derived.isOrphaned evaluation.
                          properties:
                            primaryIdentity:
                              nullable: true
                              description: Primary human owner of the machine identity when assigned.
                              allOf:
                                - type: object
                                  description: Typed id and name reference for owners, machine identities, and authorized humans.
                                  required:
                                    - type
                                    - id
                                    - name
                                  properties:
                                    type:
                                      type: string
                                      description: Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY).
                                      example: IDENTITY
                                    id:
                                      type: string
                                      description: Referenced object identifier.
                                      example: ef38f94347e94562b5bb8424a56397d8
                                    name:
                                      type: string
                                      description: Display name for the referenced identity or entity.
                                      example: Example User
                                    email:
                                      type: string
                                      description: Email for authorized human holders when available upstream.
                                      example: user@example.com
                                  title: intelmachineentityref
                            secondaryIdentities:
                              type: array
                              description: Secondary human owners associated with the machine identity.
                              items:
                                type: object
                                description: Typed id and name reference for owners, machine identities, and authorized humans.
                                required:
                                  - type
                                  - id
                                  - name
                                properties:
                                  type:
                                    type: string
                                    description: Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY).
                                    example: IDENTITY
                                  id:
                                    type: string
                                    description: Referenced object identifier.
                                    example: ef38f94347e94562b5bb8424a56397d8
                                  name:
                                    type: string
                                    description: Display name for the referenced identity or entity.
                                    example: Example User
                                  email:
                                    type: string
                                    description: Email for authorized human holders when available upstream.
                                    example: user@example.com
                                title: intelmachineentityref
                          title: intelmachineidentityowners
                        userEntitlements:
                          type: array
                          description: Entitlements associated with the machine identity from upstream.
                          items:
                            type: object
                            required:
                              - sourceId
                              - entitlementId
                              - displayName
                            properties:
                              sourceId:
                                type: string
                                description: Source identifier for the entitlement.
                                example: 60de165099e649cb828553a5e8510fc4
                              entitlementId:
                                type: string
                                description: Entitlement identifier on the source.
                                example: ent-001
                              displayName:
                                type: string
                                description: Display name for the entitlement.
                                example: Example_Entitlement
                              source:
                                nullable: true
                                description: Resolved source metadata when available upstream.
                                allOf:
                                  - type: object
                                    required:
                                      - id
                                      - name
                                      - type
                                    properties:
                                      id:
                                        type: string
                                        description: Source identifier.
                                        example: 60de165099e649cb828553a5e8510fc4
                                      name:
                                        type: string
                                        description: Source display name.
                                        example: Example Directory
                                      type:
                                        type: string
                                        description: Source type label from upstream.
                                        example: DelimitedFile
                                    title: intelmachinesourcewire
                            title: intelmachineuserentitlement
                        attributes:
                          type: object
                          additionalProperties: true
                          description: Connector or runtime metadata; empty object when absent upstream.
                          example: {}
                        derived:
                          type: object
                          required:
                            - isOrphaned
                            - authorizedHumanIdentities
                            - blastRadiusSummary
                          description: Derived SOC triage signals for non-human identity risk assessment.
                          properties:
                            isOrphaned:
                              type: boolean
                              description: Flags NHIs without a valid active owner for prioritization.
                              example: false
                            authorizedHumanIdentities:
                              type: array
                              description: Humans who can invoke or access this NHI agent.
                              items:
                                type: object
                                description: Typed id and name reference for owners, machine identities, and authorized humans.
                                required:
                                  - type
                                  - id
                                  - name
                                properties:
                                  type:
                                    type: string
                                    description: Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY).
                                    example: IDENTITY
                                  id:
                                    type: string
                                    description: Referenced object identifier.
                                    example: ef38f94347e94562b5bb8424a56397d8
                                  name:
                                    type: string
                                    description: Display name for the referenced identity or entity.
                                    example: Example User
                                  email:
                                    type: string
                                    description: Email for authorized human holders when available upstream.
                                    example: user@example.com
                                title: intelmachineentityref
                              example:
                                - type: IDENTITY
                                  id: ef38f94347e94562b5bb8424a56397d8
                                  name: Example User
                                  email: user@example.com
                            blastRadiusSummary:
                              type: object
                              required:
                                - impactedSources
                                - impactedAccounts
                                - impactedHumans
                              description: Fast SOC view of impact across sources, accounts, and humans.
                              properties:
                                impactedSources:
                                  type: array
                                  description: Source systems that may be impacted if compromised.
                                  items:
                                    type: string
                                  example:
                                    - Example AWS Source
                                impactedAccounts:
                                  type: integer
                                  format: int32
                                  description: Linked machine accounts that may be impacted if compromised.
                                  example: 1
                                impactedHumans:
                                  type: integer
                                  format: int32
                                  description: Unique owners and authorized humans potentially impacted if compromised.
                                  example: 1
                                hasEntitlements:
                                  type: boolean
                                  default: false
                                  description: Whether this NHI holds entitlements included in summary.
                                  example: true
                                environments:
                                  type: array
                                  description: Environment labels for impacted access in this summary.
                                  items:
                                    type: string
                                  example:
                                    - production
                                accessTypes:
                                  type: array
                                  description: Access type labels for impacted access in this summary.
                                  items:
                                    type: string
                                  example:
                                    - entitlement
                              title: intel-blast-radius-summary
                          title: intelmachinederived
                      title: intelidentitymachineaggregate
                oneOf:
                  - type: object
                    description: |
                      Human identity response (type Human). Identity attributes are hoisted to the top level.
                      The accounts, privilegedAccess, and accessHistory slices are always present (empty slices use items []).
                      The outliers slice is omitted when the tenant lacks the IDA-outliers license.
                      The identityGraph deep link is omitted when the tenant lacks the idg:base license.
                      The nonHumanIdentityOwnership slice is omitted when the tenant lacks idn:machine-identity-security.
                    required:
                      - id
                      - type
                      - accounts
                      - privilegedAccess
                      - accessHistory
                    properties:
                      id:
                        type: string
                        description: Identity Security Cloud identifier for this identity.
                        example: ef38f94347e94562b5bb8424a56397d8
                      type:
                        type: string
                        enum:
                          - Human
                        description: Identity type for the matched record.
                        example: Human
                      displayName:
                        type: string
                        description: Preferred display name for the identity across administrative experiences.
                        example: Example User
                      description:
                        type: string
                        nullable: true
                        description: Optional free-text description assigned to the identity profile when present.
                        example: Example description.
                      subtype:
                        type: string
                        nullable: true
                        description: NERM classification for the identity.
                        enum:
                          - Employee
                          - Non Employee
                          - Cannot Determine
                        example: Employee
                      attributes:
                        type: object
                        additionalProperties: true
                        description: Arbitrary SCIM-style attribute bag returned for the identity context view.
                        example:
                          department: Engineering
                          region: US
                      created:
                        type: string
                        format: date-time
                        description: Timestamp when the identity record was created in Identity Security Cloud.
                        example: '2026-05-12T08:00:00Z'
                      modified:
                        type: string
                        format: date-time
                        description: Timestamp when the identity record was last modified in Identity Security Cloud.
                        example: '2026-05-12T09:15:30Z'
                      alias:
                        type: string
                        description: Primary login or account alias for the identity.
                        example: example.user
                      email:
                        type: string
                        format: email
                        description: Primary business email address for the identity.
                        example: user@example.com
                      identityStatus:
                        type: string
                        description: Current identity lifecycle status label from Identity Security Cloud.
                        example: ACTIVE
                      isManager:
                        type: boolean
                        default: false
                        description: True when the identity is flagged as a people manager in the organization.
                        example: false
                      identityGraph:
                        type: object
                        description: Omitted when the tenant lacks the idg:base license.
                        allOf:
                          - type: object
                            required:
                              - href
                            description: |
                              Deep link into Identity Graph UI for the resolved identity at the aggregate root.
                              Omitted when the tenant lacks the idg:base license.

                              To access the Identity Graph UI, the user must have the **Identity Graph Read Only** user level assigned.
                            properties:
                              href:
                                type: string
                                format: uri
                                description: |
                                  Absolute URL to the Identity Graph view. Omitted when the tenant lacks idg:base or when
                                  the IDN UI host cannot be resolved from sp-tenant. Query parameters include `entity`
                                  and `id` for the resolved identity. The `entity` value reflects identity type: `human_identity`
                                  for Human responses and `machine_identity` for NHI responses.
                                example: https://tenant.identitynow.com/ui/identity-graph?entity=human_identity&id=ef38f94347e94562b5bb8424a56397d8
                            title: intelidentitygraphlink
                      nonHumanIdentityOwnership:
                        type: object
                        description: |
                          Omitted when the tenant lacks `idn:machine-identity-security`. When present, both `agents`
                          and `applications` always render.
                        allOf:
                          - type: object
                            required:
                              - agents
                              - applications
                            description: |
                              Non-human identities the human owns, grouped by subtype category. Present only when the tenant
                              has `idn:machine-identity-security`. When present, both `agents` and `applications` always render.
                              Each category is a flat object with optional primaryOwned/secondaryOwned buckets and optional
                              message/reason when upstream ownership fetch fails for that category.
                            properties:
                              agents:
                                description: Ownership for non-human identities with subtype AI Agent.
                                allOf:
                                  - type: object
                                    description: |
                                      Ownership category for agents or applications. On success, primaryOwned and secondaryOwned
                                      carry independently paged buckets. On category-level upstream failure, message and reason are
                                      set (reason: UPSTREAM_UNAVAILABLE). The service emits one flat object today, so primaryOwned
                                      and secondaryOwned may still appear on the failure path with empty items.
                                    properties:
                                      primaryOwned:
                                        type: object
                                        description: First page of non-human identities for which this human is the primary owner.
                                        allOf:
                                          - type: object
                                            required:
                                              - items
                                            description: |
                                              One paged ownership role bucket (`primaryOwned` or `secondaryOwned`) embedded on the human
                                              aggregate. Embeds the first page of owned non-human identities; totalCount when items is
                                              non-empty. Continuation next carries limit and offset.
                                            properties:
                                              items:
                                                type: array
                                                description: First page of owned non-human identities for this role.
                                                items:
                                                  type: object
                                                  required:
                                                    - id
                                                    - displayName
                                                  description: Owned non-human identity summary row (aggregate slices and child route).
                                                  properties:
                                                    id:
                                                      type: string
                                                      description: Identity Security Cloud identifier for the owned non-human identity.
                                                      example: 2c91808874ff91550175097daaec161e
                                                    displayName:
                                                      type: string
                                                      description: Preferred display name for the owned non-human identity.
                                                      example: Example AI Agent
                                                    source:
                                                      type: object
                                                      description: Source of the owned non-human identity.
                                                      allOf:
                                                        - type: object
                                                          required:
                                                            - id
                                                            - name
                                                            - type
                                                          properties:
                                                            id:
                                                              type: string
                                                              description: Source identifier.
                                                              example: 60de165099e649cb828553a5e8510fc4
                                                            name:
                                                              type: string
                                                              description: Source display name.
                                                              example: Example Directory
                                                            type:
                                                              type: string
                                                              description: Source type label from upstream.
                                                              example: DelimitedFile
                                                          title: intelmachinesourcewire
                                                  title: intel-non-human-identity-ownership-item
                                              totalCount:
                                                type: integer
                                                format: int32
                                                minimum: 1
                                                description: Total number of owned non-human identities in this role; omitted when items is empty.
                                                example: 11
                                              next:
                                                type: string
                                                format: uri
                                                description: |
                                                  Absolute URL to the next page for this category and ownership role; present when totalCount
                                                  exceeds the items returned on this page. Includes `ownershipRole`, `limit`, `offset`, and
                                                  `count=true`.
                                                example: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/non-human-identity-ownership/agents?ownershipRole=primary&limit=10&offset=10&count=true
                                            title: intel-non-human-identity-owned-slice
                                      secondaryOwned:
                                        type: object
                                        description: First page of non-human identities for which this human is a secondary owner.
                                        allOf:
                                          - type: object
                                            required:
                                              - items
                                            description: |
                                              One paged ownership role bucket (`primaryOwned` or `secondaryOwned`) embedded on the human
                                              aggregate. Embeds the first page of owned non-human identities; totalCount when items is
                                              non-empty. Continuation next carries limit and offset.
                                            properties:
                                              items:
                                                type: array
                                                description: First page of owned non-human identities for this role.
                                                items:
                                                  type: object
                                                  required:
                                                    - id
                                                    - displayName
                                                  description: Owned non-human identity summary row (aggregate slices and child route).
                                                  properties:
                                                    id:
                                                      type: string
                                                      description: Identity Security Cloud identifier for the owned non-human identity.
                                                      example: 2c91808874ff91550175097daaec161e
                                                    displayName:
                                                      type: string
                                                      description: Preferred display name for the owned non-human identity.
                                                      example: Example AI Agent
                                                    source:
                                                      type: object
                                                      description: Source of the owned non-human identity.
                                                      allOf:
                                                        - type: object
                                                          required:
                                                            - id
                                                            - name
                                                            - type
                                                          properties:
                                                            id:
                                                              type: string
                                                              description: Source identifier.
                                                              example: 60de165099e649cb828553a5e8510fc4
                                                            name:
                                                              type: string
                                                              description: Source display name.
                                                              example: Example Directory
                                                            type:
                                                              type: string
                                                              description: Source type label from upstream.
                                                              example: DelimitedFile
                                                          title: intelmachinesourcewire
                                                  title: intel-non-human-identity-ownership-item
                                              totalCount:
                                                type: integer
                                                format: int32
                                                minimum: 1
                                                description: Total number of owned non-human identities in this role; omitted when items is empty.
                                                example: 11
                                              next:
                                                type: string
                                                format: uri
                                                description: |
                                                  Absolute URL to the next page for this category and ownership role; present when totalCount
                                                  exceeds the items returned on this page. Includes `ownershipRole`, `limit`, `offset`, and
                                                  `count=true`.
                                                example: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/non-human-identity-ownership/agents?ownershipRole=primary&limit=10&offset=10&count=true
                                            title: intel-non-human-identity-owned-slice
                                      message:
                                        type: string
                                        description: Human-readable explanation of the temporary ownership data failure.
                                        example: Data temporarily unavailable. Please try again later.
                                      reason:
                                        type: string
                                        enum:
                                          - UPSTREAM_UNAVAILABLE
                                        description: Machine-readable reason code for the category-level ownership failure.
                                        example: UPSTREAM_UNAVAILABLE
                                    title: intel-non-human-identity-ownership-category
                              applications:
                                description: Ownership for non-human identities with subtype Application.
                                allOf:
                                  - type: object
                                    description: |
                                      Ownership category for agents or applications. On success, primaryOwned and secondaryOwned
                                      carry independently paged buckets. On category-level upstream failure, message and reason are
                                      set (reason: UPSTREAM_UNAVAILABLE). The service emits one flat object today, so primaryOwned
                                      and secondaryOwned may still appear on the failure path with empty items.
                                    properties:
                                      primaryOwned:
                                        type: object
                                        description: First page of non-human identities for which this human is the primary owner.
                                        allOf:
                                          - type: object
                                            required:
                                              - items
                                            description: |
                                              One paged ownership role bucket (`primaryOwned` or `secondaryOwned`) embedded on the human
                                              aggregate. Embeds the first page of owned non-human identities; totalCount when items is
                                              non-empty. Continuation next carries limit and offset.
                                            properties:
                                              items:
                                                type: array
                                                description: First page of owned non-human identities for this role.
                                                items:
                                                  type: object
                                                  required:
                                                    - id
                                                    - displayName
                                                  description: Owned non-human identity summary row (aggregate slices and child route).
                                                  properties:
                                                    id:
                                                      type: string
                                                      description: Identity Security Cloud identifier for the owned non-human identity.
                                                      example: 2c91808874ff91550175097daaec161e
                                                    displayName:
                                                      type: string
                                                      description: Preferred display name for the owned non-human identity.
                                                      example: Example AI Agent
                                                    source:
                                                      type: object
                                                      description: Source of the owned non-human identity.
                                                      allOf:
                                                        - type: object
                                                          required:
                                                            - id
                                                            - name
                                                            - type
                                                          properties:
                                                            id:
                                                              type: string
                                                              description: Source identifier.
                                                              example: 60de165099e649cb828553a5e8510fc4
                                                            name:
                                                              type: string
                                                              description: Source display name.
                                                              example: Example Directory
                                                            type:
                                                              type: string
                                                              description: Source type label from upstream.
                                                              example: DelimitedFile
                                                          title: intelmachinesourcewire
                                                  title: intel-non-human-identity-ownership-item
                                              totalCount:
                                                type: integer
                                                format: int32
                                                minimum: 1
                                                description: Total number of owned non-human identities in this role; omitted when items is empty.
                                                example: 11
                                              next:
                                                type: string
                                                format: uri
                                                description: |
                                                  Absolute URL to the next page for this category and ownership role; present when totalCount
                                                  exceeds the items returned on this page. Includes `ownershipRole`, `limit`, `offset`, and
                                                  `count=true`.
                                                example: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/non-human-identity-ownership/agents?ownershipRole=primary&limit=10&offset=10&count=true
                                            title: intel-non-human-identity-owned-slice
                                      secondaryOwned:
                                        type: object
                                        description: First page of non-human identities for which this human is a secondary owner.
                                        allOf:
                                          - type: object
                                            required:
                                              - items
                                            description: |
                                              One paged ownership role bucket (`primaryOwned` or `secondaryOwned`) embedded on the human
                                              aggregate. Embeds the first page of owned non-human identities; totalCount when items is
                                              non-empty. Continuation next carries limit and offset.
                                            properties:
                                              items:
                                                type: array
                                                description: First page of owned non-human identities for this role.
                                                items:
                                                  type: object
                                                  required:
                                                    - id
                                                    - displayName
                                                  description: Owned non-human identity summary row (aggregate slices and child route).
                                                  properties:
                                                    id:
                                                      type: string
                                                      description: Identity Security Cloud identifier for the owned non-human identity.
                                                      example: 2c91808874ff91550175097daaec161e
                                                    displayName:
                                                      type: string
                                                      description: Preferred display name for the owned non-human identity.
                                                      example: Example AI Agent
                                                    source:
                                                      type: object
                                                      description: Source of the owned non-human identity.
                                                      allOf:
                                                        - type: object
                                                          required:
                                                            - id
                                                            - name
                                                            - type
                                                          properties:
                                                            id:
                                                              type: string
                                                              description: Source identifier.
                                                              example: 60de165099e649cb828553a5e8510fc4
                                                            name:
                                                              type: string
                                                              description: Source display name.
                                                              example: Example Directory
                                                            type:
                                                              type: string
                                                              description: Source type label from upstream.
                                                              example: DelimitedFile
                                                          title: intelmachinesourcewire
                                                  title: intel-non-human-identity-ownership-item
                                              totalCount:
                                                type: integer
                                                format: int32
                                                minimum: 1
                                                description: Total number of owned non-human identities in this role; omitted when items is empty.
                                                example: 11
                                              next:
                                                type: string
                                                format: uri
                                                description: |
                                                  Absolute URL to the next page for this category and ownership role; present when totalCount
                                                  exceeds the items returned on this page. Includes `ownershipRole`, `limit`, `offset`, and
                                                  `count=true`.
                                                example: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/non-human-identity-ownership/agents?ownershipRole=primary&limit=10&offset=10&count=true
                                            title: intel-non-human-identity-owned-slice
                                      message:
                                        type: string
                                        description: Human-readable explanation of the temporary ownership data failure.
                                        example: Data temporarily unavailable. Please try again later.
                                      reason:
                                        type: string
                                        enum:
                                          - UPSTREAM_UNAVAILABLE
                                        description: Machine-readable reason code for the category-level ownership failure.
                                        example: UPSTREAM_UNAVAILABLE
                                    title: intel-non-human-identity-ownership-category
                            title: intel-non-human-identity-ownership
                      accounts:
                        type: object
                        description: First page of accounts for the identity.
                        allOf:
                          - type: object
                            required:
                              - items
                            description: Accounts slice embedded in the aggregate identity response.
                            properties:
                              items:
                                type: array
                                description: First page of accounts for the identity.
                                items:
                                  type: object
                                  required:
                                    - id
                                    - name
                                    - disabled
                                    - locked
                                    - authoritative
                                    - systemAccount
                                    - isMachine
                                    - manuallyCorrelated
                                    - created
                                    - modified
                                  properties:
                                    id:
                                      type: string
                                      description: Unique account identifier in Identity Security Cloud.
                                      example: 2c91808874ff91550175097daaec161c
                                    name:
                                      type: string
                                      description: Account name or login value on the correlated source.
                                      example: jdoe
                                    source:
                                      type: object
                                      description: Source metadata for the account as returned by List Accounts wire format.
                                      allOf:
                                        - type: object
                                          properties:
                                            id:
                                              type: string
                                              description: Source identifier referenced by the account wire object.
                                              example: 2c9180835d2e5168015d32f890301e89
                                            name:
                                              type: string
                                              description: Human-readable source name shown in administrative consoles.
                                              example: Active Directory
                                          title: intelaccesssourcewire
                                    disabled:
                                      type: boolean
                                      description: True when the account is administratively disabled on the source.
                                      example: false
                                    locked:
                                      type: boolean
                                      description: True when the account is locked from interactive sign-in on the source.
                                      example: false
                                    authoritative:
                                      type: boolean
                                      description: True when the account is treated as authoritative for attribute synchronization.
                                      example: true
                                    systemAccount:
                                      type: boolean
                                      description: True when the account represents a non-interactive or system principal.
                                      example: false
                                    isMachine:
                                      type: boolean
                                      description: True when the account belongs to a machine or service identity.
                                      example: false
                                    manuallyCorrelated:
                                      type: boolean
                                      description: True when an administrator manually correlated the account to an identity.
                                      example: false
                                    nativeIdentity:
                                      type: string
                                      nullable: true
                                      description: Native identifier string on the source directory or application.
                                      example: CN=jdoe,OU=Users,DC=example,DC=com
                                    created:
                                      type: string
                                      format: date-time
                                      description: Timestamp when the account record was created in Identity Security Cloud.
                                      example: '2023-11-01T10:00:00Z'
                                    modified:
                                      type: string
                                      format: date-time
                                      description: Timestamp when the account record was last modified in Identity Security Cloud.
                                      example: '2024-02-15T16:20:00Z'
                                  title: intelaccessaccountwire
                              totalCount:
                                type: integer
                                format: int32
                                minimum: 1
                                description: Total number of accounts for this identity; omitted when `items` is empty.
                                example: 42
                              next:
                                type: string
                                format: uri
                                description: Absolute URL to the next accounts page; present when totalCount exceeds the items returned on this page.
                                example: https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/accounts?limit=10&offset=10&count=true
                            title: intelaccountsslice
                      privilegedAccess:
                        type: object
                        description: Full privileged access result for the identity.
                        allOf:
                          - type: object
                            required:
                              - items
                            description: Full privileged access result embedded in the aggregate identity response.
                            properties:
                              items:
                                type: array
                                description: Privileged access items for the identity.
                                items:
                                  type: object
                                  required:
                                    - privileged
                                    - id
                                    - type
                                  properties:
                                    privileged:
                                      type: boolean
                                      description: True when this item is classified as privileged access for the identity.
                                      example: true
                                    privilegeLevel:
                                      description: Effective privilege classification for the privileged access item.
                                      type: object
                                      properties:
                                        effective:
                                          type: string
                                          description: |
                                            Effective privilege level for the privileged access item.
                                          enum:
                                            - HIGH
                                            - MEDIUM
                                            - LOW
                                            - NONE
                                          example: HIGH
                                      title: intelprivilegelevel
                                    id:
                                      type: string
                                      description: Identifier of the privileged access item.
                                      example: ent-1
                                    type:
                                      type: string
                                      description: Type of privileged access object.
                                      example: entitlement
                                    displayName:
                                      type: string
                                      description: Display label for the privileged access item in administrative experiences.
                                      example: Example_Admin_Access
                                    name:
                                      type: string
                                      description: Technical name of the privileged access item.
                                      example: Example_Admin_Access
                                    source:
                                      type: object
                                      description: Source metadata associated with the privileged access item when present.
                                      properties:
                                        name:
                                          type: string
                                          description: Human-readable source name for the privileged access item.
                                          example: Example HR Source
                                        id:
                                          type: string
                                          description: Source identifier for the privileged access item.
                                          example: src-2
                                    attribute:
                                      type: string
                                      description: Source attribute name that carries the privileged value when applicable.
                                      example: EXAMPLE_PERMISSION_GROUPS
                                    value:
                                      type: string
                                      description: Privileged value on the source attribute when applicable.
                                      example: Example_Admin_Access
                                  title: intelprivilegedaccessitemwire
                            title: intelprivilegedaccessslice
                      outliers:
                        type: object
                        description: Rare access slice; omitted when the tenant lacks the IDA-outliers license.
                        allOf:
                          - type: object
                            required:
                              - rareAccess
                            description: Outlier slices embedded in the aggregate identity response.
                            properties:
                              rareAccess:
                                description: First page of rare access items for the identity.
                                allOf:
                                  - type: object
                                    required:
                                      - items
                                    description: Rare access slice embedded in the aggregate identity response.
                                    properties:
                                      items:
                                        type: array
                                        description: First page of rare access items for the identity.
                                        items:
                                          type: object
                                          required:
                                            - id
                                            - displayName
                                            - accessType
                                            - sourceName
                                            - extremelyRare
                                          description: One outlier access-item row.
                                          properties:
                                            id:
                                              type: string
                                              description: Stable identifier of the outlier access-item row.
                                              example: outlier-access-001
                                            displayName:
                                              type: string
                                              description: Display label of the risky access item.
                                              example: Example_Admin_Access
                                            description:
                                              type: string
                                              nullable: true
                                              description: Optional descriptive text for the risky access item.
                                              example: null
                                            accessType:
                                              type: string
                                              description: Access item type.
                                              example: ENTITLEMENT
                                            sourceName:
                                              type: string
                                              description: Source name where the risky access item exists.
                                              example: Example SaaS Source
                                            extremelyRare:
                                              type: boolean
                                              description: Indicates whether analytics marked this item as extremely rare.
                                              example: false
                                          title: inteloutlieraccessitem
                                      totalCount:
                                        type: integer
                                        format: int32
                                        minimum: 1
                                        description: Total number of rare-access items for the resolved outlier; omitted when `items` is empty.
                                        example: 15
                                      next:
                                        type: string
                                        format: uri
                                        description: Absolute URL to the next rareAccess page; present when totalCount exceeds the items returned on this page.
                                        example: https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/outliers/rare-access?limit=10&offset=10&count=true
                                    title: intelrareaccessslice
                            title: inteloutliersslice
                      accessHistory:
                        type: object
                        description: Access-history split into access items and certifications sub-slices.
                        allOf:
                          - type: object
                            required:
                              - accessItems
                              - certifications
                            description: |
                              Access-history split into two independently paged categories. accessItems carries
                              grant, remove, and account-status events. certifications carries identity-certified events.
                            properties:
                              accessItems:
                                type: object
                                description: First page of access-item history events for the identity.
                                allOf:
                                  - type: object
                                    required:
                                      - items
                                    description: Access-item history slice embedded in the aggregate identity response.
                                    properties:
                                      items:
                                        type: array
                                        description: First page of access-item history events for the identity.
                                        items:
                                          type: object
                                          required:
                                            - eventType
                                          description: |
                                            Access-item history event. Supported eventTypes are AccessItemAssociated, AccessItemRemoved,
                                            and AccountStatusChanged.
                                          additionalProperties: true
                                          properties:
                                            eventType:
                                              type: string
                                              enum:
                                                - AccessItemAssociated
                                                - AccessItemRemoved
                                                - AccountStatusChanged
                                              description: Type of access-item history event.
                                              example: AccessItemRemoved
                                            dateTime:
                                              type: string
                                              format: date-time
                                              description: Event timestamp.
                                              example: '2026-05-11T09:40:04.496Z'
                                          title: intelaccessitemhistoryevent
                                      totalCount:
                                        type: integer
                                        format: int32
                                        minimum: 1
                                        description: Total number of events in this category; omitted when `items` is empty.
                                        example: 128
                                      next:
                                        type: string
                                        format: uri
                                        description: Absolute URL to the next access-items page; present when totalCount exceeds the items returned on this page.
                                        example: https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/access-history/access-items?limit=10&offset=10&count=true
                                    title: intelaccesshistoryaccessitemsslice
                              certifications:
                                type: object
                                description: First page of certification history events for the identity.
                                allOf:
                                  - type: object
                                    required:
                                      - items
                                    description: Certification history slice embedded in the aggregate identity response.
                                    properties:
                                      items:
                                        type: array
                                        description: First page of certification history events for the identity.
                                        items:
                                          type: object
                                          required:
                                            - eventType
                                          description: Certification history event. Supported eventType is IdentityCertified.
                                          additionalProperties: true
                                          properties:
                                            eventType:
                                              type: string
                                              enum:
                                                - IdentityCertified
                                              description: Type of certification history event.
                                              example: IdentityCertified
                                            dateTime:
                                              type: string
                                              format: date-time
                                              description: Event timestamp.
                                              example: '2019-03-08T22:37:33.901Z'
                                            certificationId:
                                              type: string
                                              description: Identifier of the certification.
                                              example: 2c91808a77ff216301782327a50f09bf
                                            certificationName:
                                              type: string
                                              description: Display name of the certification.
                                              example: Example certification
                                            signedDate:
                                              type: string
                                              format: date-time
                                              description: Timestamp when the certification was signed.
                                              example: '2019-03-08T22:37:33.901Z'
                                          title: intelcertificationhistoryevent
                                      totalCount:
                                        type: integer
                                        format: int32
                                        minimum: 1
                                        description: Total number of events in this category; omitted when `items` is empty.
                                        example: 6
                                      next:
                                        type: string
                                        format: uri
                                        description: Absolute URL to the next certifications page; present when totalCount exceeds the items returned on this page.
                                        example: https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/access-history/certifications?limit=10&offset=10&count=true
                                    title: intelaccesshistorycertificationsslice
                            title: intelaccesshistory
                    title: intelidentityaggregate
                  - type: object
                    description: |
                      Non-human identity response (type NHI). Machine identity fields are hoisted to the top level
                      (no machine wrapper). Omits human-only fields and slices (email, alias, privilegedAccess, outliers,
                      accessHistory). Top-level sourceId is omitted; use source.id when present. matchConfidence is
                      present for opaque prefix resolution (exact or partial); omitted for direct id eq and exact opaque
                      matches. The identityGraph deep link is omitted when the tenant lacks the idg:base license.
                    required:
                      - id
                      - type
                      - accounts
                      - nativeIdentity
                      - owners
                      - attributes
                      - derived
                    properties:
                      id:
                        type: string
                        description: Identity Security Cloud identifier for this non-human identity.
                        example: ef38f94347e94562b5bb8424a56397d8
                      type:
                        type: string
                        enum:
                          - NHI
                        description: Identity type for the matched record.
                        example: NHI
                      displayName:
                        type: string
                        description: Preferred display name for the non-human identity.
                        example: display name
                      description:
                        type: string
                        nullable: true
                        description: Optional description from upstream when present.
                      subtype:
                        type: string
                        nullable: true
                        description: Sub-classification label for that NHI.
                        example: AI Agent
                      created:
                        type: string
                        format: date-time
                        description: Timestamp when the identity record was created in Identity Security Cloud.
                        example: '2026-05-12T08:00:00Z'
                      modified:
                        type: string
                        format: date-time
                        description: Timestamp when the identity record was last modified in Identity Security Cloud.
                        example: '2026-05-12T09:15:30Z'
                      matchConfidence:
                        type: string
                        enum:
                          - exact
                          - partial
                        description: Match quality for opaque prefix resolution; omitted for direct id eq and exact opaque matches.
                        example: exact
                      identityGraph:
                        type: object
                        description: Omitted when the tenant lacks the idg:base license.
                        allOf:
                          - type: object
                            required:
                              - href
                            description: |
                              Deep link into Identity Graph UI for the resolved identity at the aggregate root.
                              Omitted when the tenant lacks the idg:base license.

                              To access the Identity Graph UI, the user must have the **Identity Graph Read Only** user level assigned.
                            properties:
                              href:
                                type: string
                                format: uri
                                description: |
                                  Absolute URL to the Identity Graph view. Omitted when the tenant lacks idg:base or when
                                  the IDN UI host cannot be resolved from sp-tenant. Query parameters include `entity`
                                  and `id` for the resolved identity. The `entity` value reflects identity type: `human_identity`
                                  for Human responses and `machine_identity` for NHI responses.
                                example: https://tenant.identitynow.com/ui/identity-graph?entity=human_identity&id=ef38f94347e94562b5bb8424a56397d8
                            title: intelidentitygraphlink
                      accounts:
                        type: object
                        required:
                          - items
                        description: Machine accounts embedded on the non-human identity aggregate (first page).
                        properties:
                          items:
                            type: array
                            description: Machine accounts correlated to the non-human identity.
                            items:
                              type: object
                              description: Machine account row on the non-human identity aggregate accounts.items list. Every property in required is always present on the wire. Nullable object refs (source, machineIdentity, ownerIdentity) may be null. String fields may be empty when upstream has no value; booleans, timestamps, attributes, and connectorAttributes are always emitted (empty object when absent).
                              required:
                                - id
                                - name
                                - nativeIdentity
                                - source
                                - enabled
                                - locked
                                - machineIdentity
                                - ownerIdentity
                                - description
                                - subtype
                                - accessType
                                - environment
                                - classificationMethod
                                - manuallyEdited
                                - manuallyCorrelated
                                - hasEntitlements
                                - created
                                - modified
                                - attributes
                                - connectorAttributes
                              properties:
                                id:
                                  type: string
                                  description: Unique account identifier in Identity Security Cloud.
                                  example: 2c91808874ff91550175097daaec161c
                                name:
                                  type: string
                                  description: Account name on the correlated source.
                                  example: account-name
                                nativeIdentity:
                                  type: string
                                  description: Native identifier on the source system.
                                  example: arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI
                                source:
                                  nullable: true
                                  description: Source metadata for the machine account when present upstream.
                                  allOf:
                                    - type: object
                                      required:
                                        - id
                                        - name
                                        - type
                                      properties:
                                        id:
                                          type: string
                                          description: Source identifier.
                                          example: 60de165099e649cb828553a5e8510fc4
                                        name:
                                          type: string
                                          description: Source display name.
                                          example: Example Directory
                                        type:
                                          type: string
                                          description: Source type label from upstream.
                                          example: DelimitedFile
                                      title: intelmachinesourcewire
                                enabled:
                                  type: boolean
                                  description: True when the account is enabled for use on the source.
                                  example: true
                                locked:
                                  type: boolean
                                  description: True when the account is locked on the source.
                                  example: false
                                machineIdentity:
                                  nullable: true
                                  description: Reference to the parent machine identity when populated upstream.
                                  allOf:
                                    - type: object
                                      description: Typed id and name reference for owners, machine identities, and authorized humans.
                                      required:
                                        - type
                                        - id
                                        - name
                                      properties:
                                        type:
                                          type: string
                                          description: Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY).
                                          example: IDENTITY
                                        id:
                                          type: string
                                          description: Referenced object identifier.
                                          example: ef38f94347e94562b5bb8424a56397d8
                                        name:
                                          type: string
                                          description: Display name for the referenced identity or entity.
                                          example: Example User
                                        email:
                                          type: string
                                          description: Email for authorized human holders when available upstream.
                                          example: user@example.com
                                      title: intelmachineentityref
                                ownerIdentity:
                                  nullable: true
                                  description: Reference to the owning human identity when populated upstream.
                                  allOf:
                                    - type: object
                                      description: Typed id and name reference for owners, machine identities, and authorized humans.
                                      required:
                                        - type
                                        - id
                                        - name
                                      properties:
                                        type:
                                          type: string
                                          description: Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY).
                                          example: IDENTITY
                                        id:
                                          type: string
                                          description: Referenced object identifier.
                                          example: ef38f94347e94562b5bb8424a56397d8
                                        name:
                                          type: string
                                          description: Display name for the referenced identity or entity.
                                          example: Example User
                                        email:
                                          type: string
                                          description: Email for authorized human holders when available upstream.
                                          example: user@example.com
                                      title: intelmachineentityref
                                description:
                                  type: string
                                  description: Free-text account description from the source.
                                  example: Service account for automation
                                subtype:
                                  type: string
                                  description: Account subtype label from upstream classification.
                                  example: Service Account
                                accessType:
                                  type: string
                                  description: Access type label for the account (for example account or entitlement).
                                  example: account
                                environment:
                                  type: string
                                  description: Environment label associated with the account.
                                  example: production
                                classificationMethod:
                                  type: string
                                  description: Method used to classify the account as a machine account.
                                  example: DISCOVERED
                                manuallyEdited:
                                  type: boolean
                                  description: True when an administrator manually edited account attributes.
                                  example: false
                                manuallyCorrelated:
                                  type: boolean
                                  description: True when an administrator manually correlated the account.
                                  example: false
                                hasEntitlements:
                                  type: boolean
                                  description: True when the account holds one or more entitlements.
                                  example: true
                                created:
                                  type: string
                                  format: date-time
                                  description: Timestamp when the account record was created.
                                  example: '2026-01-01T00:00:00Z'
                                modified:
                                  type: string
                                  format: date-time
                                  description: Timestamp when the account record was last modified.
                                  example: '2026-05-01T00:00:00Z'
                                attributes:
                                  type: object
                                  additionalProperties: true
                                  description: Extended account attributes from the source connector.
                                  example: {}
                                connectorAttributes:
                                  type: object
                                  additionalProperties: true
                                  description: Connector-specific attribute bag from upstream.
                                  example: {}
                              title: intelmachineaccountwire
                          totalCount:
                            type: integer
                            format: int32
                            minimum: 1
                            description: Correlated machine account count from aggregation; omitted when items is empty.
                            example: 11
                          next:
                            type: string
                            format: uri
                            description: Next page URL when totalCount exceeds items returned. Includes isNHI=true.
                            example: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/2c91808874ff91550175097daaec161e/accounts?limit=10&offset=10&count=true&isNHI=true
                        title: intelmachineaccountsslice
                      nativeIdentity:
                        type: string
                        description: Native identifier on the source system.
                        example: arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI
                      datasetId:
                        type: string
                        nullable: true
                        description: Dataset identifier from upstream machine-identity services when present.
                        example: dataset-001
                      source:
                        nullable: true
                        description: Source metadata for the machine identity when present upstream.
                        allOf:
                          - type: object
                            required:
                              - id
                              - name
                              - type
                            properties:
                              id:
                                type: string
                                description: Source identifier.
                                example: 60de165099e649cb828553a5e8510fc4
                              name:
                                type: string
                                description: Source display name.
                                example: Example Directory
                              type:
                                type: string
                                description: Source type label from upstream.
                                example: DelimitedFile
                            title: intelmachinesourcewire
                      existsOnSource:
                        type: string
                        nullable: true
                        description: Upstream existsOnSource value. Wire uses uppercase strings such as TRUE or FALSE.
                        example: 'TRUE'
                      manuallyEdited:
                        type: boolean
                        default: false
                        description: True when an administrator manually edited machine identity attributes.
                        example: false
                      manuallyCreated:
                        type: boolean
                        default: false
                        description: True when the machine identity was created manually in Identity Security Cloud.
                        example: false
                      owners:
                        type: object
                        required:
                          - primaryIdentity
                          - secondaryIdentities
                        description: |
                          Owner references. primaryIdentity is null when no primary owner is set. Primary and
                          secondary owner ids are both considered for derived.isOrphaned evaluation.
                        properties:
                          primaryIdentity:
                            nullable: true
                            description: Primary human owner of the machine identity when assigned.
                            allOf:
                              - type: object
                                description: Typed id and name reference for owners, machine identities, and authorized humans.
                                required:
                                  - type
                                  - id
                                  - name
                                properties:
                                  type:
                                    type: string
                                    description: Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY).
                                    example: IDENTITY
                                  id:
                                    type: string
                                    description: Referenced object identifier.
                                    example: ef38f94347e94562b5bb8424a56397d8
                                  name:
                                    type: string
                                    description: Display name for the referenced identity or entity.
                                    example: Example User
                                  email:
                                    type: string
                                    description: Email for authorized human holders when available upstream.
                                    example: user@example.com
                                title: intelmachineentityref
                          secondaryIdentities:
                            type: array
                            description: Secondary human owners associated with the machine identity.
                            items:
                              type: object
                              description: Typed id and name reference for owners, machine identities, and authorized humans.
                              required:
                                - type
                                - id
                                - name
                              properties:
                                type:
                                  type: string
                                  description: Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY).
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Referenced object identifier.
                                  example: ef38f94347e94562b5bb8424a56397d8
                                name:
                                  type: string
                                  description: Display name for the referenced identity or entity.
                                  example: Example User
                                email:
                                  type: string
                                  description: Email for authorized human holders when available upstream.
                                  example: user@example.com
                              title: intelmachineentityref
                        title: intelmachineidentityowners
                      userEntitlements:
                        type: array
                        description: Entitlements associated with the machine identity from upstream.
                        items:
                          type: object
                          required:
                            - sourceId
                            - entitlementId
                            - displayName
                          properties:
                            sourceId:
                              type: string
                              description: Source identifier for the entitlement.
                              example: 60de165099e649cb828553a5e8510fc4
                            entitlementId:
                              type: string
                              description: Entitlement identifier on the source.
                              example: ent-001
                            displayName:
                              type: string
                              description: Display name for the entitlement.
                              example: Example_Entitlement
                            source:
                              nullable: true
                              description: Resolved source metadata when available upstream.
                              allOf:
                                - type: object
                                  required:
                                    - id
                                    - name
                                    - type
                                  properties:
                                    id:
                                      type: string
                                      description: Source identifier.
                                      example: 60de165099e649cb828553a5e8510fc4
                                    name:
                                      type: string
                                      description: Source display name.
                                      example: Example Directory
                                    type:
                                      type: string
                                      description: Source type label from upstream.
                                      example: DelimitedFile
                                  title: intelmachinesourcewire
                          title: intelmachineuserentitlement
                      attributes:
                        type: object
                        additionalProperties: true
                        description: Connector or runtime metadata; empty object when absent upstream.
                        example: {}
                      derived:
                        type: object
                        required:
                          - isOrphaned
                          - authorizedHumanIdentities
                          - blastRadiusSummary
                        description: Derived SOC triage signals for non-human identity risk assessment.
                        properties:
                          isOrphaned:
                            type: boolean
                            description: Flags NHIs without a valid active owner for prioritization.
                            example: false
                          authorizedHumanIdentities:
                            type: array
                            description: Humans who can invoke or access this NHI agent.
                            items:
                              type: object
                              description: Typed id and name reference for owners, machine identities, and authorized humans.
                              required:
                                - type
                                - id
                                - name
                              properties:
                                type:
                                  type: string
                                  description: Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY).
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Referenced object identifier.
                                  example: ef38f94347e94562b5bb8424a56397d8
                                name:
                                  type: string
                                  description: Display name for the referenced identity or entity.
                                  example: Example User
                                email:
                                  type: string
                                  description: Email for authorized human holders when available upstream.
                                  example: user@example.com
                              title: intelmachineentityref
                            example:
                              - type: IDENTITY
                                id: ef38f94347e94562b5bb8424a56397d8
                                name: Example User
                                email: user@example.com
                          blastRadiusSummary:
                            type: object
                            required:
                              - impactedSources
                              - impactedAccounts
                              - impactedHumans
                            description: Fast SOC view of impact across sources, accounts, and humans.
                            properties:
                              impactedSources:
                                type: array
                                description: Source systems that may be impacted if compromised.
                                items:
                                  type: string
                                example:
                                  - Example AWS Source
                              impactedAccounts:
                                type: integer
                                format: int32
                                description: Linked machine accounts that may be impacted if compromised.
                                example: 1
                              impactedHumans:
                                type: integer
                                format: int32
                                description: Unique owners and authorized humans potentially impacted if compromised.
                                example: 1
                              hasEntitlements:
                                type: boolean
                                default: false
                                description: Whether this NHI holds entitlements included in summary.
                                example: true
                              environments:
                                type: array
                                description: Environment labels for impacted access in this summary.
                                items:
                                  type: string
                                example:
                                  - production
                              accessTypes:
                                type: array
                                description: Access type labels for impacted access in this summary.
                                items:
                                  type: string
                                example:
                                  - entitlement
                            title: intel-blast-radius-summary
                        title: intelmachinederived
                    title: intelidentitymachineaggregate
                title: intelidentityenvelope
              examples:
                Human identity:
                  description: Human identity envelope returned when filters match a human record (type Human).
                  value:
                    id: ef38f94347e94562b5bb8424a56397d8
                    type: Human
                    displayName: Example User
                    subtype: Employee
                    attributes:
                      city: Example City
                      cloudStatus: ACTIVE
                    created: '2026-05-12T08:00:00Z'
                    modified: '2026-05-12T09:15:30Z'
                    alias: example.user
                    email: user@example.com
                    identityStatus: ACTIVE
                    isManager: false
                    identityGraph:
                      href: https://tenant.identitynow.com/ui/identity-graph?entity=human_identity&id=ef38f94347e94562b5bb8424a56397d8
                    nonHumanIdentityOwnership:
                      agents:
                        primaryOwned:
                          items:
                            - id: 2c91808874ff91550175097daaec161e
                              displayName: Example AI Agent
                              source:
                                id: 310a15aa1cf34939a8730cc16b6473da
                                name: Example Source
                                type: DelimitedFile
                          totalCount: 1
                        secondaryOwned:
                          items: []
                      applications:
                        primaryOwned:
                          items:
                            - id: 2c91808874ff91550175097daaec161f
                              displayName: Example Application
                              source:
                                id: 60de165099e649cb828553a5e8510fc4
                                name: Example Directory
                                type: DelimitedFile
                          totalCount: 1
                        secondaryOwned:
                          items: []
                    accounts:
                      items:
                        - id: 2c91808874ff91550175097daaec161c
                          name: example.user
                          source:
                            id: 60de165099e649cb828553a5e8510fc4
                            name: Example Directory
                          disabled: false
                          locked: false
                          authoritative: false
                          systemAccount: false
                          isMachine: false
                          manuallyCorrelated: false
                          nativeIdentity: CN=example.user,OU=users
                          created: '2026-01-01T00:00:00Z'
                          modified: '2026-05-01T00:00:00Z'
                        - id: 2c91808874ff91550175097daaec161d
                          name: example.user.admin
                          source:
                            id: 60de165099e649cb828553a5e8510fc4
                            name: Example Directory
                          disabled: false
                          locked: false
                          authoritative: false
                          systemAccount: false
                          isMachine: false
                          manuallyCorrelated: false
                          nativeIdentity: CN=example.user.admin,OU=users
                          created: '2026-01-01T00:00:00Z'
                          modified: '2026-05-01T00:00:00Z'
                      totalCount: 11
                      next: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/accounts?limit=10&offset=10&count=true
                    privilegedAccess:
                      items:
                        - privileged: true
                          privilegeLevel:
                            effective: HIGH
                          id: ent-1
                          type: entitlement
                          displayName: Example_Admin_Access
                          name: Example_Admin_Access
                          source:
                            name: Example HR Source
                            id: src-2
                          attribute: EXAMPLE_PERMISSION_GROUPS
                          value: Example_Admin_Access
                    outliers:
                      rareAccess:
                        items:
                          - id: outlier-access-001
                            displayName: Example_Admin_Access
                            description: null
                            accessType: ENTITLEMENT
                            sourceName: Example SaaS Source
                            extremelyRare: false
                        totalCount: 11
                        next: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/outliers/rare-access?limit=10&offset=10&count=true
                    accessHistory:
                      accessItems:
                        items:
                          - eventType: AccessItemRemoved
                            dateTime: '2026-05-11T09:40:04.496Z'
                            accessItem:
                              id: access-item-001
                              accessType: entitlement
                              displayName: Example Access
                              sourceName: Example Directory
                        totalCount: 11
                        next: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/access-history/access-items?limit=10&offset=10&count=true
                      certifications:
                        items:
                          - eventType: IdentityCertified
                            dateTime: '2019-03-08T22:37:33.901Z'
                            certificationId: 2c91808a77ff216301782327a50f09bf
                            certificationName: Example certification
                            signedDate: '2019-03-08T22:37:33.901Z'
                        totalCount: 11
                        next: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/access-history/certifications?limit=10&offset=10&count=true
                Non-human identity (NHI):
                  description: Non-human identity (NHI) envelope returned for machine identities (type NHI). Embedded `accounts.items` are abbreviated; `totalCount` and `next` match the aggregate page size.
                  value:
                    id: 2c91808874ff91550175097daaec161e
                    type: NHI
                    displayName: Example AI Agent
                    description: Example alias
                    subtype: AI Agent
                    created: '2026-07-23T07:04:33.151661Z'
                    modified: '2026-07-24T07:18:45.541749Z'
                    matchConfidence: exact
                    identityGraph:
                      href: https://tenant.identitynow.com/ui/identity-graph?entity=machine_identity&id=2c91808874ff91550175097daaec161e
                    accounts:
                      items:
                        - id: 8a38d5adb13d48fdadbc9d85d1509aa0
                          name: account-name
                          nativeIdentity: arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI/MNO
                          source:
                            id: 310a15aa1cf34939a8730cc16b6473da
                            name: Example Source
                            type: SOURCE
                          enabled: true
                          locked: false
                          machineIdentity:
                            type: MACHINE_IDENTITY
                            id: 2c91808874ff91550175097daaec161e
                            name: Example AI Agent
                          classificationMethod: MANUAL
                          manuallyEdited: true
                          manuallyCorrelated: false
                          hasEntitlements: true
                          created: '2026-07-23T09:21:47.622754Z'
                          modified: '2026-07-23T11:14:31.531508Z'
                          connectorAttributes: {}
                        - id: 67c094871fa94561846d6e10342ce738
                          name: account-name
                          nativeIdentity: arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI/XYZ
                          source:
                            id: 310a15aa1cf34939a8730cc16b6473da
                            name: Example Source
                            type: SOURCE
                          enabled: true
                          locked: false
                          machineIdentity:
                            type: MACHINE_IDENTITY
                            id: 2c91808874ff91550175097daaec161e
                            name: Example AI Agent
                          ownerIdentity:
                            type: IDENTITY
                            id: 161aac3ec4b84ed6994048d21a19359a
                            name: Example Owner
                          classificationMethod: MANUAL
                          manuallyEdited: true
                          manuallyCorrelated: false
                          hasEntitlements: true
                          created: '2026-07-23T09:21:48.661594Z'
                          modified: '2026-07-23T09:23:11.913994Z'
                          connectorAttributes: {}
                      totalCount: 11
                      next: https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/2c91808874ff91550175097daaec161e/accounts?limit=10&offset=10&count=true&isNHI=true
                    nativeIdentity: arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI
                    datasetId: aws:bedrock
                    source:
                      id: 310a15aa1cf34939a8730cc16b6473da
                      name: Example Source
                      type: SOURCE
                    existsOnSource: 'TRUE'
                    manuallyEdited: true
                    manuallyCreated: false
                    owners:
                      primaryIdentity:
                        type: IDENTITY
                        id: 161aac3ec4b84ed6994048d21a19359a
                        name: Example Owner
                      secondaryIdentities:
                        - type: IDENTITY
                          id: dd412c69f49c47249b116866e6b366a2
                          name: Example Secondary Owner
                    userEntitlements:
                      - sourceId: 9c9e187d40334052a7cef2bb853d027e
                        entitlementId: 0207801fcc593323aa5d709546272d0e
                        displayName: Example Entitlement
                        source:
                          id: 9c9e187d40334052a7cef2bb853d027e
                          name: Example Source
                          type: SOURCE
                    attributes:
                      agentAliasStatus: PREPARED
                      agentId: <agent-id>
                      agentName: Example AI Agent
                      aliasName: Example alias
                      region: us-east-1
                    derived:
                      isOrphaned: true
                      authorizedHumanIdentities:
                        - type: IDENTITY
                          id: 161aac3ec4b84ed6994048d21a19359a
                          name: Example Owner
                          email: user@example.com
                        - type: IDENTITY
                          id: ca49dd488c784b3e9c41b519b154f9df
                          name: Example Authorized User
                          email: user@example.com
                      blastRadiusSummary:
                        impactedSources:
                          - Example Source
                        impactedAccounts: 2
                        impactedHumans: 3
                        hasEntitlements: true
        '400':
          description: Invalid filters or unsupported filter field or operator.
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
          description: Unauthorized access
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
        '404':
          description: No identity matched the filter (detailCode IDC_IDENTITY_NOT_FOUND).
          content:
            application/json:
              schema:
                allOf:
                  - type: object
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
                  - type: object
                    required:
                      - detailCode
                    properties:
                      detailCode:
                        type: string
                        enum:
                          - IDC_IDENTITY_NOT_FOUND
                        description: Constant detail code indicating that no identity matched the supplied filter.
                        example: IDC_IDENTITY_NOT_FOUND
                title: intelidentitynotfoundbody
        '409':
          description: Multiple identities matched the filter (detailCode IDC_IDENTITY_AMBIGUOUS).
          content:
            application/json:
              schema:
                allOf:
                  - type: object
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
                  - type: object
                    required:
                      - detailCode
                      - candidates
                    properties:
                      detailCode:
                        type: string
                        enum:
                          - IDC_IDENTITY_AMBIGUOUS
                        description: Constant detail code indicating that more than one identity matched the filter.
                        example: IDC_IDENTITY_AMBIGUOUS
                      candidates:
                        type: array
                        description: Identities that matched the ambiguous filter expression.
                        items:
                          type: object
                          required:
                            - id
                          description: One disambiguation hint when multiple identities matched the same filter.
                          properties:
                            id:
                              type: string
                              description: Identity Security Cloud identifier for a matching candidate.
                              example: ef38f94347e94562b5bb8424a56397d8
                            displayName:
                              type: string
                              description: Human-facing label when available; omitted when empty upstream.
                              example: Jane Example
                          title: intel-identity-ambiguous-candidate
                title: intel-identity-ambiguous-body
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
          description: Internal or upstream server failure.
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
