## OpenAPI

```yaml POST /reminder-escalations/v1/config/tenants
openapi: 3.0.1
info:
  title: SailPoint Identity Security API
  description: Use these APIs to interact with the SailPoint Identity Security platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
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
  /reminder-escalations/v1/config/tenants:
    post:
      description: |-
        Creates the default reminder and escalation ruleset for a domain object type in the authenticated tenant.
        A tenant has one default per domain object type. Creating the same type again returns 409.
      operationId: createReminderEscalationTenantConfigV1
      security:
        - userAuth:
            - idn:reminder-escalation-config:manage
      parameters:
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: 'true'
          schema:
            type: string
            default: true
          required: true
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              description: Body for creating a tenant-default ruleset. The tenant comes from the authenticated request.
              required:
                - domainObjectType
                - rules
              properties:
                domainObjectType:
                  type: string
                  enum:
                    - PERSONAL_ACCESS_TOKEN
                    - CERTIFICATION
                  description: Domain object type to create a default for.
                  example: CERTIFICATION
                rules:
                  type: object
                  description: |
                    Reminder and escalation rules for one domain object type.
                    At least one of `reminders`, `escalations`, or `fallback` must be set.
                  properties:
                    reminders:
                      type: array
                      default: []
                      description: Independent reminder schedules. Every entry must use the same predicate, either `beforeDeadLine` or `activeAfter`.
                      items:
                        type: object
                        description: |
                          One reminder schedule. Exactly one of `beforeDeadLine` or `activeAfter` is set.
                          Every reminder in a ruleset must use the same predicate.
                        required:
                          - cron
                          - template
                        properties:
                          cron:
                            type: string
                            description: Five-field cron expression, evaluated in UTC.
                            example: 0 9 * * *
                          beforeDeadLine:
                            type: string
                            default: ''
                            description: |
                              ISO-8601 duration. The reminder is active when `(deadline - now) <= beforeDeadLine`.
                              A negative duration means the reminder starts after the deadline, for example `-P14D`.
                              Mutually exclusive with `activeAfter`.
                            example: P7D
                          activeAfter:
                            type: string
                            default: ''
                            description: |
                              ISO-8601 duration. The reminder is active when `(now - workflowStart) >= activeAfter`.
                              Mutually exclusive with `beforeDeadLine`.
                            example: P14D
                          template:
                            type: string
                            description: Notification template key.
                            example: cert-reminder-daily
                          maxFirings:
                            type: integer
                            format: int32
                            minimum: 1
                            nullable: true
                            default: null
                            description: Maximum number of times this reminder fires before it deactivates. Null means the reminder keeps firing while its predicate is active.
                            example: 5
                        title: reminderescalationreminder
                    escalations:
                      type: array
                      default: []
                      description: Independent escalations. Each entry has its own trigger.
                      items:
                        type: object
                        description: One escalation. Escalations in a ruleset are independent of each other.
                        required:
                          - trigger
                          - targets
                          - template
                        properties:
                          trigger:
                            type: object
                            description: |
                              When an escalation fires. `triggerType` selects which fields apply.

                              * `ON_CRON` requires `cron` and exactly one of `beforeDeadLine` or `activeAfter`. `maxFirings` is optional.
                              * `AFTER_REMINDER_COUNT` requires `count` and `delay`. The ruleset must also contain at least one reminder.
                            required:
                              - triggerType
                            properties:
                              triggerType:
                                type: string
                                enum:
                                  - ON_CRON
                                  - AFTER_REMINDER_COUNT
                                description: How this escalation decides when to fire.
                                example: AFTER_REMINDER_COUNT
                              cron:
                                type: string
                                default: ''
                                description: Five-field cron expression. Required when `triggerType` is `ON_CRON`.
                                example: 0 9 * * 1
                              beforeDeadLine:
                                type: string
                                default: ''
                                description: ISO-8601 duration relative to the deadline. Used when `triggerType` is `ON_CRON`. Mutually exclusive with `activeAfter`.
                                example: P7D
                              activeAfter:
                                type: string
                                default: ''
                                description: ISO-8601 duration relative to workflow start. Used when `triggerType` is `ON_CRON`. Mutually exclusive with `beforeDeadLine`.
                                example: P14D
                              maxFirings:
                                type: integer
                                format: int32
                                minimum: 1
                                nullable: true
                                default: null
                                description: Maximum number of times an `ON_CRON` escalation fires. Null means no cap.
                                example: 3
                              count:
                                type: integer
                                format: int32
                                minimum: 1
                                nullable: true
                                default: null
                                description: Reminder count for the current assignee. Required when `triggerType` is `AFTER_REMINDER_COUNT`. Null when `triggerType` is `ON_CRON`.
                                example: 3
                              delay:
                                type: string
                                default: ''
                                description: ISO-8601 grace period before an `AFTER_REMINDER_COUNT` escalation fires.
                                example: PT12H
                            title: reminderescalationtrigger
                          targets:
                            type: array
                            minItems: 1
                            items:
                              type: object
                              description: |
                                Escalation recipient. `identityId` is required for every `targetType` except `MANAGER_OF`, where it is optional.

                                * `MANAGER_OF` without `identityId` resolves the manager of each current assignee.
                                * `MANAGER_OF` with `identityId` resolves the manager of that identity.
                              required:
                                - targetType
                              properties:
                                targetType:
                                  type: string
                                  enum:
                                    - MANAGER_OF
                                    - IDENTITY
                                    - GOVERNANCE_GROUP
                                    - ENTITLEMENT_OWNER
                                    - SOURCE_OWNER
                                  description: Kind of recipient this target resolves to.
                                  example: MANAGER_OF
                                identityId:
                                  type: string
                                  default: ''
                                  description: Identity the target applies to. Empty for a dynamic `MANAGER_OF` target.
                                  example: id-admin-99
                              title: reminderescalationtarget
                          template:
                            type: string
                            description: Notification template key.
                            example: cert-escalation-mgr
                        title: reminderescalationescalation
                    fallback:
                      type: object
                      description: Recipients used when an escalation cannot be delivered to its configured targets.
                      required:
                        - targets
                        - template
                      properties:
                        targets:
                          type: array
                          minItems: 1
                          description: Last-resort recipients for this fallback. Each entry resolves to a manager, identity, governance group, entitlement owner, or source owner. At least one target is required.
                          items:
                            type: object
                            description: |
                              Escalation recipient. `identityId` is required for every `targetType` except `MANAGER_OF`, where it is optional.

                              * `MANAGER_OF` without `identityId` resolves the manager of each current assignee.
                              * `MANAGER_OF` with `identityId` resolves the manager of that identity.
                            required:
                              - targetType
                            properties:
                              targetType:
                                type: string
                                enum:
                                  - MANAGER_OF
                                  - IDENTITY
                                  - GOVERNANCE_GROUP
                                  - ENTITLEMENT_OWNER
                                  - SOURCE_OWNER
                                description: Kind of recipient this target resolves to.
                                example: MANAGER_OF
                              identityId:
                                type: string
                                default: ''
                                description: Identity the target applies to. Empty for a dynamic `MANAGER_OF` target.
                                example: id-admin-99
                            title: reminderescalationtarget
                        template:
                          type: string
                          description: Notification template key.
                          example: cert-escalation-fallback-admin
                      title: reminderescalationfallback
                  title: reminderescalationruleset
              title: reminderescalationtenantconfigcreate
            examples:
              certificationDefault:
                summary: Tenant default for certifications
                value:
                  domainObjectType: CERTIFICATION
                  rules:
                    reminders:
                      - cron: 0 9 * * 1
                        beforeDeadLine: P30D
                        template: cert-reminder-weekly
                      - cron: 0 9 * * *
                        beforeDeadLine: P7D
                        template: cert-reminder-daily
                    escalations:
                      - trigger:
                          triggerType: AFTER_REMINDER_COUNT
                          count: 3
                          delay: PT12H
                        targets:
                          - targetType: MANAGER_OF
                        template: cert-escalation-mgr
                    fallback:
                      targets:
                        - targetType: IDENTITY
                          identityId: id-admin-99
                      template: cert-escalation-fallback-admin
      responses:
        '201':
          description: Tenant default created.
          headers:
            location:
              description: URL of the created tenant default.
              schema:
                type: string
              example: /reminder-escalations/v1/config/tenants/CERTIFICATION
          content:
            application/json:
              schema:
                type: object
                description: |
                  Persisted tenant-default reminder and escalation rules for one domain object type.
                  The key is the authenticated tenant plus `domainObjectType`.
                required:
                  - tenantId
                  - domainObjectType
                  - rules
                  - schemaVersion
                  - revision
                  - createdAt
                  - updatedAt
                properties:
                  tenantId:
                    type: string
                    format: uuid
                    readOnly: true
                    description: Tenant id taken from the authenticated request.
                    example: 2c918085-7d3a-4c3a-9f1e-0b6c8a1d2e3f
                  domainObjectType:
                    type: string
                    enum:
                      - PERSONAL_ACCESS_TOKEN
                      - CERTIFICATION
                    description: Domain object type this default applies to.
                    example: CERTIFICATION
                  rules:
                    type: object
                    description: |
                      Reminder and escalation rules for one domain object type.
                      At least one of `reminders`, `escalations`, or `fallback` must be set.
                    properties:
                      reminders:
                        type: array
                        default: []
                        description: Independent reminder schedules. Every entry must use the same predicate, either `beforeDeadLine` or `activeAfter`.
                        items:
                          type: object
                          description: |
                            One reminder schedule. Exactly one of `beforeDeadLine` or `activeAfter` is set.
                            Every reminder in a ruleset must use the same predicate.
                          required:
                            - cron
                            - template
                          properties:
                            cron:
                              type: string
                              description: Five-field cron expression, evaluated in UTC.
                              example: 0 9 * * *
                            beforeDeadLine:
                              type: string
                              default: ''
                              description: |
                                ISO-8601 duration. The reminder is active when `(deadline - now) <= beforeDeadLine`.
                                A negative duration means the reminder starts after the deadline, for example `-P14D`.
                                Mutually exclusive with `activeAfter`.
                              example: P7D
                            activeAfter:
                              type: string
                              default: ''
                              description: |
                                ISO-8601 duration. The reminder is active when `(now - workflowStart) >= activeAfter`.
                                Mutually exclusive with `beforeDeadLine`.
                              example: P14D
                            template:
                              type: string
                              description: Notification template key.
                              example: cert-reminder-daily
                            maxFirings:
                              type: integer
                              format: int32
                              minimum: 1
                              nullable: true
                              default: null
                              description: Maximum number of times this reminder fires before it deactivates. Null means the reminder keeps firing while its predicate is active.
                              example: 5
                          title: reminderescalationreminder
                      escalations:
                        type: array
                        default: []
                        description: Independent escalations. Each entry has its own trigger.
                        items:
                          type: object
                          description: One escalation. Escalations in a ruleset are independent of each other.
                          required:
                            - trigger
                            - targets
                            - template
                          properties:
                            trigger:
                              type: object
                              description: |
                                When an escalation fires. `triggerType` selects which fields apply.

                                * `ON_CRON` requires `cron` and exactly one of `beforeDeadLine` or `activeAfter`. `maxFirings` is optional.
                                * `AFTER_REMINDER_COUNT` requires `count` and `delay`. The ruleset must also contain at least one reminder.
                              required:
                                - triggerType
                              properties:
                                triggerType:
                                  type: string
                                  enum:
                                    - ON_CRON
                                    - AFTER_REMINDER_COUNT
                                  description: How this escalation decides when to fire.
                                  example: AFTER_REMINDER_COUNT
                                cron:
                                  type: string
                                  default: ''
                                  description: Five-field cron expression. Required when `triggerType` is `ON_CRON`.
                                  example: 0 9 * * 1
                                beforeDeadLine:
                                  type: string
                                  default: ''
                                  description: ISO-8601 duration relative to the deadline. Used when `triggerType` is `ON_CRON`. Mutually exclusive with `activeAfter`.
                                  example: P7D
                                activeAfter:
                                  type: string
                                  default: ''
                                  description: ISO-8601 duration relative to workflow start. Used when `triggerType` is `ON_CRON`. Mutually exclusive with `beforeDeadLine`.
                                  example: P14D
                                maxFirings:
                                  type: integer
                                  format: int32
                                  minimum: 1
                                  nullable: true
                                  default: null
                                  description: Maximum number of times an `ON_CRON` escalation fires. Null means no cap.
                                  example: 3
                                count:
                                  type: integer
                                  format: int32
                                  minimum: 1
                                  nullable: true
                                  default: null
                                  description: Reminder count for the current assignee. Required when `triggerType` is `AFTER_REMINDER_COUNT`. Null when `triggerType` is `ON_CRON`.
                                  example: 3
                                delay:
                                  type: string
                                  default: ''
                                  description: ISO-8601 grace period before an `AFTER_REMINDER_COUNT` escalation fires.
                                  example: PT12H
                              title: reminderescalationtrigger
                            targets:
                              type: array
                              minItems: 1
                              items:
                                type: object
                                description: |
                                  Escalation recipient. `identityId` is required for every `targetType` except `MANAGER_OF`, where it is optional.

                                  * `MANAGER_OF` without `identityId` resolves the manager of each current assignee.
                                  * `MANAGER_OF` with `identityId` resolves the manager of that identity.
                                required:
                                  - targetType
                                properties:
                                  targetType:
                                    type: string
                                    enum:
                                      - MANAGER_OF
                                      - IDENTITY
                                      - GOVERNANCE_GROUP
                                      - ENTITLEMENT_OWNER
                                      - SOURCE_OWNER
                                    description: Kind of recipient this target resolves to.
                                    example: MANAGER_OF
                                  identityId:
                                    type: string
                                    default: ''
                                    description: Identity the target applies to. Empty for a dynamic `MANAGER_OF` target.
                                    example: id-admin-99
                                title: reminderescalationtarget
                            template:
                              type: string
                              description: Notification template key.
                              example: cert-escalation-mgr
                          title: reminderescalationescalation
                      fallback:
                        type: object
                        description: Recipients used when an escalation cannot be delivered to its configured targets.
                        required:
                          - targets
                          - template
                        properties:
                          targets:
                            type: array
                            minItems: 1
                            description: Last-resort recipients for this fallback. Each entry resolves to a manager, identity, governance group, entitlement owner, or source owner. At least one target is required.
                            items:
                              type: object
                              description: |
                                Escalation recipient. `identityId` is required for every `targetType` except `MANAGER_OF`, where it is optional.

                                * `MANAGER_OF` without `identityId` resolves the manager of each current assignee.
                                * `MANAGER_OF` with `identityId` resolves the manager of that identity.
                              required:
                                - targetType
                              properties:
                                targetType:
                                  type: string
                                  enum:
                                    - MANAGER_OF
                                    - IDENTITY
                                    - GOVERNANCE_GROUP
                                    - ENTITLEMENT_OWNER
                                    - SOURCE_OWNER
                                  description: Kind of recipient this target resolves to.
                                  example: MANAGER_OF
                                identityId:
                                  type: string
                                  default: ''
                                  description: Identity the target applies to. Empty for a dynamic `MANAGER_OF` target.
                                  example: id-admin-99
                              title: reminderescalationtarget
                          template:
                            type: string
                            description: Notification template key.
                            example: cert-escalation-fallback-admin
                        title: reminderescalationfallback
                    title: reminderescalationruleset
                  schemaVersion:
                    type: integer
                    format: int32
                    readOnly: true
                    description: Schema version assigned by the service. Clients do not set this field.
                    example: 1
                  revision:
                    type: integer
                    format: int32
                    minimum: 1
                    description: Optimistic-lock counter. Echo this value on update.
                    example: 1
                  createdAt:
                    type: string
                    format: date-time
                    readOnly: true
                    description: When this tenant default was created.
                    example: '2026-10-28T17:00:00Z'
                  updatedAt:
                    type: string
                    format: date-time
                    readOnly: true
                    description: When this tenant default was last updated.
                    example: '2026-10-28T17:30:00Z'
                title: reminderescalationtenantconfig
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
        '409':
          description: Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource.
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

        Personal access tokens are associated with a user in SailPoint Identity Security and relies on the user's [user level](https://documentation.sailpoint.com/saas/help/common/users/index.html) (ex. Admin, Helpdesk, etc.) to determine a base level of access.

        See [SailPoint Identity Security REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
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

        Client credentials refers to tokens that are not associated with a user in SailPoint Identity Security.

        See [SailPoint Identity Security REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
```
