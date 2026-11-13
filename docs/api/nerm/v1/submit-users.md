## OpenAPI

```yaml POST /users
openapi: 3.0.1
info:
  version: 1.0.0
  title: NERM API
  description: The NERM API accesss and modifies resources in your environment.
  license:
    name: MIT
servers:
  - url: https://{tenantName}.nonemployee.com/api
    variables:
      tenantName:
        default: acmeco
        description: Tenant name assigned to customer
paths:
  /users:
    post:
      description: Create multiple new users
      operationId: submitUsers
      security:
        - userAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                users:
                  type: array
                  items:
                    type: object
                    required:
                      - name
                      - email
                      - type
                      - login
                    properties:
                      name:
                        type: string
                        description: The user name
                        example: Bob
                      email:
                        type: string
                        format: email
                        description: The user email
                        example: test@sailpoint.com
                      type:
                        type: string
                        enum:
                          - NeprofileUser
                          - NeaccessUser
                        default: NeprofileUser
                        description: The user type
                        example: NeprofileUser
                      profile_id:
                        type: string
                        format: uuid
                        description: The user profile id. Not required for NeprofileUser
                        example: db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e
                      title:
                        type: string
                        description: The user description
                        example: my_user_title
                      status:
                        type: string
                        enum:
                          - Active
                          - Pending
                          - Disabled
                        description: The user status
                        example: Active
                      login:
                        type: string
                        description: The user login
                        example: my_user
                      group_strings:
                        type: string
                        description: The user group strings
                        example: Administrator_group,Developer_group
                      locale:
                        type: string
                        description: The locale the user prefers to use
                        example: fr-CA
                      password:
                        type: string
                        description: The user password. Not required for NeprofileUser
                        example: U*bF7hy9fW
                      sailpoint_identity_id:
                        type: string
                        description: The SailPoint Identity ID associated with this user
                        example: db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e
                    title: User
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                oneOf:
                  - type: object
                    properties:
                      users:
                        type: array
                        items:
                          type: object
                          properties:
                            id:
                              type: string
                              format: uuid
                              readonly: true
                              example: db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e
                              description: ID of the object to retrieve or update
                            uid:
                              type: string
                              readonly: true
                              example: user1
                              description: UID of the user
                            name:
                              type: string
                              description: The name
                              example: myusername
                            email:
                              type: string
                              format: email
                              description: The email
                              example: test@sailpoint.com
                            type:
                              type: string
                              enum:
                                - NeprofileUser
                                - NeaccessUser
                              default: NeprofileUser
                              description: Type of user
                              example: NeprofileUser
                            title:
                              type: string
                              description: The title
                              example: Director
                            status:
                              type: string
                              enum:
                                - Active
                                - Pending
                                - Disabled
                              description: Status of the user
                              example: Active
                            login:
                              type: string
                              description: The login
                              example: myLogin
                            last_login:
                              type: string
                              format: date-time
                              readOnly: true
                              description: When the user last logged in
                              example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                            cookies_accepted_at:
                              type: string
                              format: date-time
                              readOnly: true
                              description: When cookies were accepted
                              example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                            preferred_language:
                              type: string
                              description: The locale the user prefers to use
                              example: fr-CA
                            locale:
                              type: string
                              description: The locale the user prefers to use
                              example: fr-CA
                            group_strings:
                              type: string
                              description: Group strings configured on the customer's Active Directory configuration, provided by the IDP at the moment on authentication.
                              example: Admin_group, Developer_group
                            sailpoint_identity_id:
                              type: string
                              description: The identity ID of the user in ISC
                              example: 9496f8d6ddab49c0bef1e9ee6f1b835a
                          title: User-2
                    title: Users
                  - type: object
                    properties:
                      info:
                        type: string
                        example: job has started
                      job_status:
                        type: object
                        properties:
                          job_id:
                            type: string
                            example: 3ce88e47ad6dba2ddf349d21
                          status:
                            type: string
                            example: queued
                      status:
                        type: integer
                        example: 200
                    title: Job
        '400':
          description: Bad Request - unable to complete.
          content:
            application/json:
              schema:
                oneOf:
                  - type: object
                    properties:
                      error:
                        example: Invalid JSON syntax. Please check your syntax and try again.
                    title: InvalidJson
                  - type: object
                    properties:
                      error:
                        example: The <object> failed to create/update
                      errors:
                        example:
                          attribute: can't be blank
                    title: ValidationErrors
        '500':
          description: Internal Server Error - returned on unhandled exceptions.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    description: A message describing the error
                    example: Sorry something went wrong
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
```
