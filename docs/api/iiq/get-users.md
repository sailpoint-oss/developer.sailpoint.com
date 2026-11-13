## OpenAPI

```yaml GET /Users
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
  /Users:
    get:
      description: This endpoint returns all User resources. There are attributes marked as 'returned only by request', such as **roles**, which must be provided as part of the **attributes** query parameter in order to be included in the response.
      operationId: getUsers
      security:
        - basicAuth: []
      parameters:
        - in: query
          name: filter
          schema:
            type: string
            example: location eq "Raleigh" and name.givenName sw "j" and name.familyName sw "s"
          description: Allows for query filters according to RFC-7644, Section 3.4.2.2 - not all operations are supported.
        - in: query
          name: sortBy
          schema:
            type: string
            example: userName
          description: Allows sorting the results by a resource's attributes.
        - in: query
          name: sortOrder
          schema:
            type: string
            example: descending
            default: ascending
          description: Determines what order to sort results in.
        - in: query
          name: startIndex
          schema:
            type: integer
            example: 2313
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
            example: userName,nativeIdentity
          description: A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.
        - in: query
          name: excludedAttributes
          schema:
            type: string
            example: userName,manuallyCorrelated
          description: A comma-separated list of attributes to exclude from the response. *Some attributes cannot be excluded.*
      responses:
        '200':
          description: Returns all SCIM User resources.
          content:
            application/json:
              schema:
                properties:
                  totalResults:
                    description: Number of User resources returned
                    type: integer
                    example: 18
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
                        id:
                          description: IdentityIQ id of the User.
                          type: string
                          example: c0b4568a4fe7458c434ee77d1fbt156b
                        userName:
                          description: Unique identifier for the User. Typically used to directly authenticate to the service provider. Each User MUST include a non-empty userName value. This identifier MUST be unique across the entire set of Users. Cannot be changed.
                          type: string
                          example: Mock.User
                        name:
                          description: The components of the User’s real name. Providers may return just the full name as a single string in the formatted sub-attribute, or they MAY return just the individual component attributes using the other sub-attributes, or they MAY return both. If both variants are returned, they SHOULD be describing the same name, with the formatted name indicating how the component attributes should be combined.
                          properties:
                            formatted:
                              description: The full name, including all middle names, titles, and suffixes as appropriate, formatted for display.
                              type: string
                              example: Ms. Barbara J Jensen, III
                            familyName:
                              description: The family name of the User, or Last Name in most Western languages
                              type: string
                              example: Jensen
                            givenName:
                              description: The given name of the User, or First Name in most Western languages
                              type: string
                              example: Barbara
                        displayName:
                          description: The name of the User, suitable for display to end-users. The name should be the full name of the User being described.
                          type: string
                          example: Barbara Jensen
                        userType:
                          description: The type of the User, identifying the relationship between the organization and the User.
                          type: string
                          example: employee
                        active:
                          description: A Boolean value indicating the User’s administrative status.
                          type: boolean
                          example: true
                        emails:
                          description: Email addresses for the user. The value SHOULD be canonicalized by the Service Provider, e.g., bjensen@example.com instead of bjensen@EXAMPLE.COM. Canonical Type values of work, home, and other.
                          type: array
                          items:
                            properties:
                              type:
                                description: Type of email address (work, home, other).
                                type: string
                                example: work
                              value:
                                description: Canonicalized email address.
                                type: string
                                format: email
                                example: Barbara.Jensen@example.com
                              primary:
                                description: A Boolean value indicating the primary e-mail address. The primary attribute value 'true' MUST appear no more than once.
                                type: boolean
                                example: true
                        urn:ietf:params:scim:schemas:sailpoint:1.0:User:
                          description: Additional attributes of the User.
                          type: object
                          properties:
                            accounts:
                              description: Simple representation of the Account (or Link) ResourceType.
                              type: array
                              items:
                                properties:
                                  displayName:
                                    description: The display name of the Account.
                                    type: string
                                    example: Bob.Smith
                                  value:
                                    description: The id of the SCIM resource representing the Account.
                                    type: string
                                    example: c0a7778b7ef71e79817ee74e6a1f0444
                                  $ref:
                                    description: The URI of the SCIM resource representing the Account.
                                    type: string
                                    example: http://localhost:8080/iiq/scim/v2/Accounts/c0a7778b7ef71e79817ee74e6a1f0444
                            entitlements:
                              description: Entitlements of the User. Returned in response only if requested using the 'attributes' query parameter.
                              type: array
                              items:
                                properties:
                                  value:
                                    description: The value of the Entitlement.
                                    type: string
                                    example: groupmbr
                                  display:
                                    description: The display name of the Entitlement.
                                    type: string
                                    example: HelpDesk
                                  type:
                                    description: The type of Entitlement (Entitlement, Permission, etc.).
                                    type: string
                                    example: Permission
                                  application:
                                    description: The name of the Application this Entitlement applies to.
                                    type: string
                                    example: ADMockApp
                                  accountName:
                                    description: The account this Entitlement was sourced from.
                                    type: string
                                    example: CN=Barbara Jensen,OU=Taipei,OU=Asia-Pacific,DC=example,DC=com
                                  $ref:
                                    description: The URI of the SCIM resource representing the Entitlement.
                                    type: string
                                    example: http://localhost:8080/iiq/scim/v2/Entitlements/c0a7777a7f74744d817e74fc12362c67
                            roles:
                              description: Roles of the User. Returned only if requested. Returned in response only if requested using the 'attributes' query parameter.
                              type: array
                              items:
                                properties:
                                  value:
                                    description: The value of the Role.
                                    type: string
                                    example: detectedRoles
                                  display:
                                    description: The display name of the Role.
                                    type: string
                                    example: User - IT
                                  type:
                                    description: The type of Role (IT, Business, etc.).
                                    type: string
                                    example: it
                                  acquired:
                                    description: Indicates how this Role was acquired. Assigned or Detected.
                                    type: string
                                    example: Assigned
                                  application:
                                    description: The name of the Application where this Role came from.
                                    type: string
                                    example: Active_Directory
                                  accountName:
                                    description: The name of the Account this Role was sourced from.
                                    type: string
                                    example: CN=Barbara Jensen,OU=Taipei,OU=Asia-Pacific,DC=example,DC=com
                                  $ref:
                                    description: The URI of the SCIM resource representing the Role.
                                    type: string
                                    example: http://localhost:8080/iiq/scim/v2/Roles/c0a7777a7f74744d817e74fc12362c67
                            capabilities:
                              description: Capabilities assigned to this User.
                              type: array
                              items:
                                type: string
                              example:
                                - SystemAdministrator
                            riskScore:
                              description: Composite Risk Score of this User.
                              type: integer
                              example: 125
                            isManager:
                              description: A Boolean value that determines if this User is a manager.
                              type: boolean
                              example: false
                            administrator:
                              description: The Administrator of the RPA or Service Account. This attribute is only applicable if the User type is RPA/Bots or Service.
                              properties:
                                displayName:
                                  description: The display name of the Administrator of RPA user or Service account.
                                  type: string
                                  example: Bob Smith
                                value:
                                  description: The id of the SCIM resource representing the Administrator of RPA user or Service account.
                                  type: string
                                  example: c0a7777a7f74744d817e74fc12362c67O
                                $ref:
                                  description: The URI of the SCIM resource representing the Administrator of RPA user or Service Account.
                                  type: string
                                  example: http://localhost:8080/iiq/scim/v2/Users/c0a7777a7f74744d817e74fc12362c67
                            softwareVersion:
                              description: The software version of the RPA/Bots.
                              type: string
                              example: '7.3'
                            empId:
                              description: Employee id associated with this User.
                              type: string
                              example: 1b2a3c
                            dn:
                              description: Distinguished name for this User.
                              type: string
                              example: cn=Bob Smith,ou=services
                            region:
                              description: The region this User is assigned to.
                              type: string
                              example: Americas
                            regionOwner:
                              description: The User who owns the region that this resource (User) belongs to.
                              properties:
                                displayName:
                                  description: Display name of the region owner.
                                  type: string
                                  example: Joe Smith
                                value:
                                  description: The id of the region owner.
                                  type: string
                                  example: c0b4568a4fe7458c434ee77d1fbt156b
                                $ref:
                                  description: URI reference of the region owner resource.
                                  type: string
                                  example: http://localhost:8080/iiq/scim/v2/Users/c0b4568a4fe7458c434ee77d1fbt156b
                            location:
                              description: The location this User is assigned to.
                              type: string
                              example: Singapore
                            locationOwner:
                              description: The User who owns the location that this resource (User) belongs to.
                              type: object
                              properties:
                                displayName:
                                  description: Display name of the location owner.
                                  type: string
                                  example: Bob Smith
                                value:
                                  description: The id of the location owner.
                                  type: string
                                  example: c0a7778b7ef71e79817ee74e6a1f0444
                                $ref:
                                  description: URI reference to the location owner resource.
                                  type: string
                                  example: http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444
                            Department:
                              description: Department this User is assigned to.
                              type: string
                              example: Regional Operations
                            costcenter:
                              description: Cost centers this User is associated with.
                              type: array
                              items:
                                type: string
                              example:
                                - CC01
                                - DD02
                            jobtitle:
                              description: Job title given to this User.
                              type: string
                              example: Internal Audit Manager
                            lastRefresh:
                              description: Datetime representation of the last refresh for this User.
                              type: string
                              format: date-time
                        urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:
                          description: Enterprise User Schema. Contains the manager of the User.
                          properties:
                            manager:
                              description: Manager of the User.
                              properties:
                                displayName:
                                  description: Display name of the User's manager.
                                  type: string
                                  example: Bob Smith
                                value:
                                  description: The id of the SCIM resource representing the User’s manager.
                                  type: string
                                  example: c7a7347a7fe71e69077ee75f5d1f1237
                                $ref:
                                  description: The URI of the SCIM resource representing the User’s manager.
                                  type: string
                                  example: http://localhost:8080/iiq/scim/v2/Users/c7a7347a7fe71e69077ee75f5d1f1237
                        meta:
                          description: Metadata of the resource.
                          properties:
                            created:
                              description: Datetime this resource was created.
                              type: string
                              format: date-time
                              example: '2022-02-11T01:34:04.074-05:00'
                            location:
                              description: The location of the resource.
                              type: string
                              example: http://localhost:8080/iiq/scim/v2/Users/c0b4568a4fe7458c434ee77d1fbt156b
                            lastModified:
                              description: Datetime the resource was last modified.
                              type: string
                              format: date-time
                              example: '2022-02-11T01:08:45.866-05:00'
                            version:
                              description: The version of the resource.
                              type: string
                              example: W"1644561244074"
                            resourceType:
                              description: The SCIM resource type.
                              type: string
                              example: User
                        schemas:
                          description: The schemas involved in the SCIM resource.
                          type: array
                          items:
                            type: string
                          example:
                            - urn:ietf:params:scim:schemas:sailpoint:1.0:User
                            - urn:ietf:params:scim:schemas:core:2.0:User
                            - urn:ietf:params:scim:schemas:extension:enterprise:2.0:User
            application/scim+json:
              schema:
                properties:
                  totalResults:
                    description: Number of User resources returned.
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
                        id:
                          description: IdentityIQ id of the User.
                          type: string
                          example: c0b4568a4fe7458c434ee77d1fbt156b
                        userName:
                          description: Unique identifier for the User. Typically used to directly authenticate to the service provider. Each User MUST include a non-empty userName value. This identifier MUST be unique across the entire set of Users. Cannot be changed.
                          type: string
                          example: Mock.User
                        name:
                          description: The components of the User’s real name. Providers may return just the full name as a single string in the formatted sub-attribute, or they MAY return just the individual component attributes using the other sub-attributes, or they MAY return both. If both variants are returned, they SHOULD be describing the same name, with the formatted name indicating how the component attributes should be combined.
                          properties:
                            formatted:
                              description: The full name, including all middle names, titles, and suffixes as appropriate, formatted for display.
                              type: string
                              example: Ms. Barbara J Jensen, III
                            familyName:
                              description: The family name of the User, or Last Name in most Western languages
                              type: string
                              example: Jensen
                            givenName:
                              description: The given name of the User, or First Name in most Western languages
                              type: string
                              example: Barbara
                        displayName:
                          description: The name of the User, suitable for display to end-users. The name should be the full name of the User being described.
                          type: string
                          example: Barbara Jensen
                        userType:
                          description: The type of the User, identifying the relationship between the organization and the User.
                          type: string
                          example: employee
                        active:
                          description: A Boolean value indicating the User’s administrative status.
                          type: boolean
                          example: true
                        emails:
                          description: Email addresses for the user. The value SHOULD be canonicalized by the Service Provider, e.g., bjensen@example.com instead of bjensen@EXAMPLE.COM. Canonical Type values of work, home, and other.
                          type: array
                          items:
                            properties:
                              type:
                                description: Type of email address (work, home, other).
                                type: string
                                example: work
                              value:
                                description: Canonicalized email address.
                                type: string
                                format: email
                                example: Barbara.Jensen@example.com
                              primary:
                                description: A Boolean value indicating the primary e-mail address. The primary attribute value 'true' MUST appear no more than once.
                                type: boolean
                                example: 'true'
                        urn:ietf:params:scim:schemas:sailpoint:1.0:User:
                          description: Additional attributes of the User.
                          type: object
                          properties:
                            accounts:
                              description: Simple representation of the Account (or Link) ResourceType.
                              type: array
                              items:
                                properties:
                                  displayName:
                                    description: The display name of the Account.
                                    type: string
                                    example: Bob.Smith
                                  value:
                                    description: The id of the SCIM resource representing the Account.
                                    type: string
                                    example: c0a7778b7ef71e79817ee74e6a1f0444
                                  $ref:
                                    description: The URI of the SCIM resource representing the Account.
                                    type: string
                                    example: http://localhost:8080/iiq/scim/v2/Accounts/c0a7778b7ef71e79817ee74e6a1f0444
                            entitlements:
                              description: Entitlements of the User. Returned in response only if requested using the 'attributes' query parameter.
                              type: array
                              items:
                                properties:
                                  value:
                                    description: The value of the Entitlement.
                                    type: string
                                    example: groupmbr
                                  display:
                                    description: The display name of the Entitlement.
                                    type: string
                                    example: HelpDesk
                                  type:
                                    description: The type of Entitlement (Entitlement, Permission, etc.).
                                    type: string
                                    example: Permission
                                  application:
                                    description: The name of the Application this Entitlement applies to.
                                    type: string
                                    example: ADMockApp
                                  accountName:
                                    description: The account this Entitlement was sourced from.
                                    type: string
                                    example: CN=Barbara Jensen,OU=Taipei,OU=Asia-Pacific,DC=example,DC=com
                                  $ref:
                                    description: The URI of the SCIM resource representing the Entitlement.
                                    type: string
                                    example: http://localhost:8080/iiq/scim/v2/Entitlements/c0a7777a7f74744d817e74fc12362c67
                            roles:
                              description: Roles of the User. Returned only if requested. Returned in response only if requested using the 'attributes' query parameter.
                              type: array
                              items:
                                properties:
                                  value:
                                    description: The value of the Role.
                                    type: string
                                    example: detectedRoles
                                  display:
                                    description: The display name of the Role.
                                    type: string
                                    example: User - IT
                                  type:
                                    description: The type of Role (IT, Business, etc.).
                                    type: string
                                    example: it
                                  acquired:
                                    description: Indicates how this Role was acquired. Assigned or Detected.
                                    type: string
                                    example: Assigned
                                  application:
                                    description: The name of the Application where this Role came from.
                                    type: string
                                    example: Active_Directory
                                  accountName:
                                    description: The name of the Account this Role was sourced from.
                                    type: string
                                    example: CN=Barbara Jensen,OU=Taipei,OU=Asia-Pacific,DC=example,DC=com
                                  $ref:
                                    description: The URI of the SCIM resource representing the Role.
                                    type: string
                                    example: http://localhost:8080/iiq/scim/v2/Roles/c0a7777a7f74744d817e74fc12362c67
                            capabilities:
                              description: Capabilities assigned to this User.
                              type: array
                              items:
                                type: string
                              example: '["SystemAdministrator"]'
                            riskScore:
                              description: Composite Risk Score of this User.
                              type: integer
                              example: 125
                            isManager:
                              description: A Boolean value that determines if this User is a manager.
                              type: boolean
                              example: false
                            administrator:
                              description: The Administrator of the RPA or Service Account. This attribute is only applicable if the User type is RPA/Bots or Service.
                              properties:
                                displayName:
                                  description: The display name of the Administrator of RPA user or Service account.
                                  type: string
                                  example: Bob Smith
                                value:
                                  description: The id of the SCIM resource representing the Administrator of RPA user or Service account.
                                  type: string
                                  example: c0a7777a7f74744d817e74fc12362c67O
                                $ref:
                                  description: The URI of the SCIM resource representing the Administrator of RPA user or Service Account.
                                  type: string
                                  example: http://localhost:8080/iiq/scim/v2/Users/c0a7777a7f74744d817e74fc12362c67
                            softwareVersion:
                              description: The software version of the RPA/Bots.
                              type: string
                              example: '7.3'
                            empId:
                              description: Employee id associated with this User.
                              type: string
                              example: 1b2a3c
                            dn:
                              description: Distinguished name for this User.
                              type: string
                              example: cn=Bob Smith,ou=services
                            region:
                              description: The region this User is assigned to.
                              type: string
                              example: Americas
                            regionOwner:
                              description: The User who owns the region that this resource (User) belongs to.
                              properties:
                                displayName:
                                  description: Display name of the region owner.
                                  type: string
                                  example: Joe Smith
                                value:
                                  description: The id of the region owner.
                                  type: string
                                  example: c0b4568a4fe7458c434ee77d1fbt156b
                                $ref:
                                  description: URI reference of the region owner resource.
                                  type: string
                                  example: http://localhost:8080/iiq/scim/v2/Users/c0b4568a4fe7458c434ee77d1fbt156b
                            location:
                              description: The location this User is assigned to.
                              type: string
                              example: Singapore
                            locationOwner:
                              description: The User who owns the location that this resource (User) belongs to.
                              type: object
                              properties:
                                displayName:
                                  description: Display name of the location owner.
                                  type: string
                                  example: Bob Smith
                                value:
                                  description: The id of the location owner.
                                  type: string
                                  example: c0a7778b7ef71e79817ee74e6a1f0444
                                $ref:
                                  description: URI reference to the location owner resource.
                                  type: string
                                  example: http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444
                            Department:
                              description: Department this User is assigned to.
                              type: string
                              example: Regional Operations
                            costcenter:
                              description: Cost centers this User is associated with.
                              type: array
                              items:
                                type: string
                              example:
                                - CC01
                                - DD02
                            jobtitle:
                              description: Job title given to this User.
                              type: string
                              example: Internal Audit Manager
                            lastRefresh:
                              description: Datetime representation of the last refresh for this User.
                              type: string
                              format: date-time
                        urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:
                          description: Enterprise User Schema. Contains the manager of the User.
                          properties:
                            manager:
                              description: Manager of the User.
                              properties:
                                displayName:
                                  description: Display name of the User's manager.
                                  type: string
                                  example: Bob Smith
                                value:
                                  description: The id of the SCIM resource representing the User’s manager.
                                  type: string
                                  example: c7a7347a7fe71e69077ee75f5d1f1237
                                $ref:
                                  description: The URI of the SCIM resource representing the User’s manager.
                                  type: string
                                  example: http://localhost:8080/iiq/scim/v2/Users/c7a7347a7fe71e69077ee75f5d1f1237
                        meta:
                          description: Metadata of the resource.
                          properties:
                            created:
                              description: Datetime this resource was created.
                              type: string
                              format: date-time
                              example: '2022-02-11T01:34:04.074-05:00'
                            location:
                              description: The location of the resource.
                              type: string
                              example: http://localhost:8080/iiq/scim/v2/Users/c0b4568a4fe7458c434ee77d1fbt156b
                            lastModified:
                              description: Datetime the resource was last modified.
                              type: string
                              format: date-time
                              example: '2022-02-11T01:08:45.866-05:00'
                            version:
                              description: The version of the resource.
                              type: string
                              example: W"1644561244074"
                            resourceType:
                              description: The SCIM resource type.
                              type: string
                              example: User
                        schemas:
                          description: The schemas involved in the SCIM resource.
                          type: array
                          items:
                            type: string
                          example:
                            - urn:ietf:params:scim:schemas:sailpoint:1.0:User
                            - urn:ietf:params:scim:schemas:core:2.0:User
                            - urn:ietf:params:scim:schemas:extension:enterprise:2.0:User
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
