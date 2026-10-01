## OpenAPI

```yaml GET /discovered-applications/v1
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
  /discovered-applications/v1:
    get:
      description: |
        Get a list of applications that have been identified within the environment. This includes details such as application names, discovery dates, potential correlated saas_vendors and related suggested connectors.
      operationId: getDiscoveredApplicationsV1
      security:
        - userAuth:
            - idn:application-discovery:read
      parameters:
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
          name: detail
          schema:
            type: string
            enum:
              - SLIM
              - FULL
          description: Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior.
          example: FULL
          required: false
        - in: query
          name: filter
          schema:
            type: string
          description: |
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **name**: *eq, sw, co*

            **description**: *eq, sw, co*

            **createdAtStart**: *eq, le, ge*

            **createdAtEnd**: *eq, le, ge*

            **discoveredAtStart**: *eq, le, ge*

            **discoveredAtEnd**: *eq, le, ge*

            **discoverySource**: *eq, in*

            **discoverySourceName**: *eq, in*

            **discoverySourceCategory**: *eq, in*
          example: name eq "Okta" and description co "Okta" and discoverySource in ("csv", "Okta Saas")
          x-sailpoint-resource-operation-id: getDiscoveredApplicationsV1
          required: false
          style: form
        - in: query
          name: sorters
          schema:
            type: string
            format: comma-separated
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory**
          example: name
          required: false
      responses:
        '200':
          description: List of discovered applications. By default, the API returns a list of SLIM discovered applications.
          content:
            application/json:
              schema:
                type: array
                items:
                  oneOf:
                    - type: object
                      description: Discovered applications
                      title: Slim Discovered Application
                      properties:
                        id:
                          type: string
                          format: uuid
                          description: Unique identifier for the discovered application.
                          example: 2d9180835d2e5168015d32f890ca1581
                        name:
                          type: string
                          description: Name of the discovered application.
                          example: ExampleApp
                        discoverySource:
                          type: string
                          description: Source from which the application was discovered.
                          example: csv
                        discoveredVendor:
                          type: string
                          description: The vendor associated with the discovered application.
                          example: ExampleVendor
                        description:
                          type: string
                          description: A brief description of the discovered application.
                          example: An application for managing examples.
                        recommendedConnectors:
                          type: array
                          items:
                            type: string
                          description: List of recommended connectors for the application.
                          example:
                            - ConnectorA
                            - ConnectorB
                        discoveredAt:
                          type: string
                          format: date-time
                          description: The timestamp when the application was last received via an entitlement aggregation invocation  or a manual csv upload, in ISO 8601 format.
                          example: '2023-01-01T12:00:00Z'
                        createdAt:
                          type: string
                          format: date-time
                          description: The timestamp when the application was first discovered, in ISO 8601 format.
                          example: '2023-01-01T12:00:00Z'
                        status:
                          type: string
                          description: |-
                            The status of an application within the discovery source.

                            By default this field is set to "ACTIVE" when the application is discovered.

                            If an application has been deleted from within the discovery source, the status will be set to "INACTIVE".
                          example: ACTIVE
                        operationalStatus:
                          type: string
                          description: The operational status of the application.
                          example: Operational
                        discoverySourceCategory:
                          type: string
                          description: The category of the discovery source.
                          example: sso
                        licenseCount:
                          type: integer
                          format: int32
                          description: The number of licenses associated with the application.
                          example: 175
                        isSanctioned:
                          type: boolean
                          description: Indicates whether the application is sanctioned.
                          example: true
                          default: false
                        logo:
                          type: string
                          description: URL of the application's logo.
                          example: https://spdojtest1.oktapreview.com/api/v1/apps/0oaeuef9hiipHcMgR0h7/logo
                        appUrl:
                          type: string
                          description: The URL of the application.
                          example: https://spdojtest1.oktapreview.com/home/salesforce/0oaeuef9hiipHcMgR0h7/24
                        groups:
                          type: array
                          items:
                            type: object
                          description: List of groups associated with the application.
                          example:
                            - map:
                                id: id
                                name: JIRA Users
                                nativeIdentifiers:
                                  map:
                                    distinguishedName: CN=Engineering users,OU=Engineering,DC=corp,DC=example,DC=com
                                    id: nativeId
                                    objectSid: S-1-5-21-717838489-685202119-709183397-1177
                                type: EXTERNAL_GROUP|LOCAL_GROUP
                        usersCount:
                          type: string
                          description: The count of users associated with the application.
                          example: '175'
                        applicationOwner:
                          type: array
                          items:
                            type: string
                          description: The owners of the application.
                          example:
                            - owner1@example.com
                            - owner2@example.com
                        itApplicationOwner:
                          type: array
                          items:
                            type: string
                          description: The IT owners of the application.
                          example:
                            - itowner1@example.com
                            - itowner2@example.com
                        businessCriticality:
                          type: string
                          description: The business criticality level of the application.
                          example: High
                        dataClassification:
                          type: string
                          description: The data classification level of the application.
                          example: Restricted
                        businessUnit:
                          type: string
                          description: The business unit associated with the application.
                          example: Finance
                        installType:
                          type: string
                          description: The installation type of the application.
                          example: On Premise
                        environment:
                          type: string
                          description: The environment in which the application operates.
                          example: Production
                        riskScore:
                          type: integer
                          format: int32
                          description: The risk score of the application ranging from 0-100, 100 being highest risk.
                          example: 1
                        isBusiness:
                          type: boolean
                          description: Indicates whether the application is used for business purposes.
                          example: false
                          default: true
                        totalSigninsCount:
                          type: integer
                          format: int32
                          description: The total number of sign-in accounts for the application.
                          example: 1
                        riskLevel:
                          type: string
                          enum:
                            - High
                            - Medium
                            - Low
                          description: The risk level of the application.
                          example: Low
                        isPrivileged:
                          type: boolean
                          description: Indicates whether the application has privileged access.
                          example: false
                          default: false
                        warrantyExpiration:
                          type: string
                          description: The warranty expiration date of the application.
                          example: 2023-09-25T14:07:27.000+0000
                        attributes:
                          type: object
                          description: Additional attributes of the application useful for visibility of governance posture.
                          example:
                            features:
                              - IMPORT_PROFILE_UPDATES
                              - IMPORT_USER_SCHEMA
                              - IMPORT_NEW_USERS
                            identityStack: NOT_SHARED
                            selfService: false
                            signOnMode: SAML_2_0
                    - type: object
                      description: Discovered applications with their respective associated sources
                      title: Discovered Application
                      properties:
                        id:
                          type: string
                          format: uuid
                          description: Unique identifier for the discovered application.
                          example: 2d9180835d2e5168015d32f890ca1581
                        name:
                          type: string
                          description: Name of the discovered application.
                          example: ExampleApp
                        discoverySource:
                          type: string
                          description: Source from which the application was discovered.
                          example: csv
                        discoveredVendor:
                          type: string
                          description: The vendor associated with the discovered application.
                          example: ExampleVendor
                        description:
                          type: string
                          description: A brief description of the discovered application.
                          example: An application for managing examples.
                        recommendedConnectors:
                          type: array
                          items:
                            type: string
                          description: List of recommended connectors for the application.
                          example:
                            - ConnectorA
                            - ConnectorB
                        discoveredAt:
                          type: string
                          format: date-time
                          description: The timestamp when the application was last received via an entitlement aggregation invocation  or a manual csv upload, in ISO 8601 format.
                          example: '2023-01-01T12:00:00Z'
                        createdAt:
                          type: string
                          format: date-time
                          description: The timestamp when the application was first discovered, in ISO 8601 format.
                          example: '2023-01-01T12:00:00Z'
                        status:
                          type: string
                          description: |-
                            The status of an application within the discovery source.

                            By default this field is set to "ACTIVE" when the application is discovered.

                            If an application has been deleted from within the discovery source, the status will be set to "INACTIVE".
                          example: ACTIVE
                        associatedSources:
                          type: array
                          items:
                            type: string
                            format: uuid
                          description: List of associated sources related to this discovered application.
                          example:
                            - e0cc5d7d-bf7f-4f81-b2af-8885b09d9923
                            - a0303682-5e4a-44f7-bdc2-6ce6112549c1
                        operationalStatus:
                          type: string
                          description: The operational status of the application.
                          example: Operational
                        discoverySourceCategory:
                          type: string
                          description: The category of the discovery source.
                          example: sso
                        licenseCount:
                          type: integer
                          format: int32
                          description: The number of licenses associated with the application.
                          example: 175
                        isSanctioned:
                          type: boolean
                          description: Indicates whether the application is sanctioned.
                          example: true
                          default: false
                        logo:
                          type: string
                          description: URL of the application's logo.
                          example: https://spdojtest1.oktapreview.com/api/v1/apps/0oaeuef9hiipHcMgR0h7/logo
                        appUrl:
                          type: string
                          description: The URL of the application.
                          example: https://spdojtest1.oktapreview.com/home/salesforce/0oaeuef9hiipHcMgR0h7/24
                        groups:
                          type: array
                          items:
                            type: object
                          description: List of groups associated with the application.
                          example:
                            - map:
                                id: id
                                name: JIRA Users
                                nativeIdentifiers:
                                  map:
                                    distinguishedName: CN=Engineering users,OU=Engineering,DC=corp,DC=example,DC=com
                                    id: nativeId
                                    objectSid: S-1-5-21-717838489-685202119-709183397-1177
                                type: EXTERNAL_GROUP|LOCAL_GROUP
                        usersCount:
                          type: string
                          description: The count of users associated with the application.
                          example: '175'
                        applicationOwner:
                          type: array
                          items:
                            type: string
                          description: The owners of the application.
                          example:
                            - owner1@example.com
                            - owner2@example.com
                        itApplicationOwner:
                          type: array
                          items:
                            type: string
                          description: The IT owners of the application.
                          example:
                            - itowner1@example.com
                            - itowner2@example.com
                        businessCriticality:
                          type: string
                          description: The business criticality level of the application.
                          example: High
                        dataClassification:
                          type: string
                          description: The data classification level of the application.
                          example: Restricted
                        businessUnit:
                          type: string
                          description: The business unit associated with the application.
                          example: Finance
                        installType:
                          type: string
                          description: The installation type of the application.
                          example: On Premise
                        environment:
                          type: string
                          description: The environment in which the application operates.
                          example: Production
                        riskScore:
                          type: integer
                          format: int32
                          description: The risk score of the application ranging from 0-100, 100 being highest risk.
                          example: 1
                        isBusiness:
                          type: boolean
                          description: Indicates whether the application is used for business purposes.
                          example: false
                          default: true
                        totalSigninsCount:
                          type: integer
                          format: int32
                          description: The total number of sign-in accounts for the application.
                          example: 1
                        riskLevel:
                          type: string
                          enum:
                            - High
                            - Medium
                            - Low
                          description: The risk level of the application.
                          example: Low
                        isPrivileged:
                          type: boolean
                          description: Indicates whether the application has privileged access.
                          example: false
                          default: false
                        warrantyExpiration:
                          type: string
                          description: The warranty expiration date of the application.
                          example: 2023-09-25T14:07:27.000+0000
                        attributes:
                          type: object
                          description: Additional attributes of the application useful for visibility of governance posture.
                          example:
                            features:
                              - IMPORT_PROFILE_UPDATES
                              - IMPORT_USER_SCHEMA
                              - IMPORT_NEW_USERS
                            identityStack: NOT_SHARED
                            selfService: false
                            signOnMode: SAML_2_0
              examples:
                Slim Discovered Application:
                  description: List of discovered applications
                  value:
                    - id: 09d88a67-bae8-422c-a09b-f7a72f5ab032
                      name: Example App
                      discoverySource: csv
                      discoveredVendor: Example Vendor
                      description: An application for managing examples.
                      recommendedConnectors:
                        - ConnectorA
                        - ConnectorB
                      discoveredAt: '2023-07-01T12:00:00Z'
                      createdAt: '2024-06-01T12:00:00Z'
                      status: ACTIVE
                      operationalStatus: Operational
                      datasetId: null
                      discoverySourceCategory: csv
                      licenseCount: null
                      isSanctioned: false
                      logo: null
                      appUrl: null
                      groups: null
                      usersCount: null
                      applicationOwner:
                        - Ms. jane.doe
                      itApplicationOwner:
                        - Mr. mark.smith
                      businessCriticality: Medium
                      dataClassification: Confidential
                      businessUnit: Operations
                      installType: null
                      environment: null
                      riskScore: null
                      isBusiness: false
                      totalSigninsCount: 1
                      riskLevel: Low
                      isPrivileged: false
                      warrantyExpiration: null
                      attributes: null
                    - id: 59310a1e-0d8f-42fa-95aa-b82b263de7f6
                      name: Sample Tracker
                      discoverySource: ServiceNow CMDB
                      discoveredVendor: Sample Vendor
                      description: A tool for monitoring and managing samples.
                      recommendedConnectors:
                        - ConnectorC
                        - ConnectorD
                      discoveredAt: '2023-08-15T08:00:00Z'
                      createdAt: '2024-05-20T08:00:00Z'
                      status: ACTIVE
                      operationalStatus: Operational
                      datasetId: cmdb-servicenow:applications
                      discoverySourceCategory: cmdb
                      licenseCount: ''
                      isSanctioned: false
                      logo: ''
                      appUrl: ''
                      groups: null
                      usersCount: ''
                      applicationOwner:
                        - Ms. lisa.brown
                      itApplicationOwner:
                        - Mr. david.lee
                      businessCriticality: High
                      dataClassification: Internal
                      businessUnit: R&D
                      installType: SaaS
                      environment: Production
                      riskScore: 1
                      isBusiness: false
                      totalSigninsCount: 1
                      riskLevel: Medium
                      isPrivileged: false
                      warrantyExpiration: 2024-09-01T00:00:00.000+0000
                      attributes:
                        identityStack: NOT_SHARED
                        selfService: false
                        signOnMode: SAML_2_0
                    - id: dfe675cb-f689-475f-99f1-49e348449867
                      name: Demo Manager
                      discoverySource: Okta SaaS
                      discoveredVendor: Demo Provider
                      description: Software to demonstrate basic functionalities.
                      recommendedConnectors:
                        - ConnectorE
                        - ConnectorF
                      discoveredAt: '2023-09-10T15:00:00Z'
                      createdAt: '2024-07-03T15:00:00Z'
                      status: ACTIVE
                      operationalStatus: Operational
                      datasetId: sso-okta:applications
                      discoverySourceCategory: sso
                      licenseCount: 175
                      isSanctioned: true
                      logo: https://spdojtest1.oktapreview.com/api/v1/apps/0oaeuef9hiipHcMgR0h7/logo
                      appUrl: https://spdojtest1.oktapreview.com/home/salesforce/0oaeuef9hiipHcMgR0h7/24
                      groups:
                        - map:
                            id: id
                            name: JIRA Users
                            nativeIdentifiers:
                              map:
                                distinguishedName: CN=Engineering users,OU=Engineering,DC=corp,DC=example,DC=com
                                id: nativeId
                                objectSid: S-1-5-21-717838489-685202119-709183397-1177
                            type: EXTERNAL_GROUP|LOCAL_GROUP
                      usersCount: '175'
                      applicationOwner:
                        - Mr. abel.tuter
                      itApplicationOwner:
                        - Mr. john doe
                      businessCriticality: High
                      dataClassification: Restricted
                      businessUnit: Finance
                      installType: On Premise
                      environment: Production
                      riskScore: 1
                      isBusiness: false
                      totalSigninsCount: 1
                      riskLevel: Low
                      isPrivileged: false
                      warrantyExpiration: 2023-09-25T14:07:27.000+0000
                      attributes:
                        features:
                          - IMPORT_PROFILE_UPDATES
                          - IMPORT_USER_SCHEMA
                          - IMPORT_NEW_USERS
                        identityStack: NOT_SHARED
                        selfService: false
                        signOnMode: SAML_2_0
                Discovered Application:
                  description: List of discovered applications with their respective associated sources
                  value:
                    - id: 6f672248-2dac-4cf5-9531-fca0719cbb4a
                      name: Example App
                      discoverySource: csv
                      discoveredVendor: Example Vendor
                      description: An application for managing examples.
                      recommendedConnectors:
                        - ConnectorA
                        - ConnectorB
                      discoveredAt: '2023-07-01T12:00:00Z'
                      createdAt: '2024-06-01T12:00:00Z'
                      status: ACTIVE
                      operationalStatus: Operational
                      datasetId: null
                      discoverySourceCategory: csv
                      licenseCount: null
                      isSanctioned: false
                      logo: null
                      appUrl: null
                      groups: null
                      usersCount: null
                      applicationOwner:
                        - Ms. jane.doe
                      itApplicationOwner:
                        - Mr. mark.smith
                      businessCriticality: Medium
                      dataClassification: Confidential
                      businessUnit: Operations
                      installType: null
                      environment: null
                      riskScore: null
                      isBusiness: false
                      totalSigninsCount: 1
                      riskLevel: Low
                      isPrivileged: false
                      warrantyExpiration: null
                      attributes: null
                      associatedSources:
                        - e0cc5d7d-bf7f-4f81-b2af-8885b09d9923
                    - id: b3a3a704-6a45-45ee-a501-bbc332388222
                      name: Sample Tracker
                      discoverySource: ServiceNow CMDB
                      discoveredVendor: Sample Vendor
                      description: A tool for monitoring and managing samples.
                      recommendedConnectors:
                        - ConnectorC
                        - ConnectorD
                      discoveredAt: '2023-08-15T08:00:00Z'
                      createdAt: '2024-05-20T08:00:00Z'
                      status: ACTIVE
                      operationalStatus: Operational
                      datasetId: cmdb-servicenow:applications
                      discoverySourceCategory: cmdb
                      licenseCount: ''
                      isSanctioned: false
                      logo: ''
                      appUrl: ''
                      groups: null
                      usersCount: ''
                      applicationOwner:
                        - Ms. lisa.brown
                      itApplicationOwner:
                        - Mr. david.lee
                      businessCriticality: High
                      dataClassification: Internal
                      businessUnit: R&D
                      installType: SaaS
                      environment: Production
                      riskScore: 1
                      isBusiness: false
                      totalSigninsCount: 1
                      riskLevel: Medium
                      isPrivileged: false
                      warrantyExpiration: 2024-09-01T00:00:00.000+0000
                      attributes:
                        identityStack: NOT_SHARED
                        selfService: false
                        signOnMode: SAML_2_0
                      associatedSources:
                        - a3b159f2-5f09-43c9-b40e-a6f317aa5b8f
                        - e0cc5d7d-bf7f-4f81-b2af-8885b09d9923
                    - id: dfe675cb-f689-475f-99f1-49e348449867
                      name: Demo Manager
                      discoverySource: Okta SaaS
                      discoveredVendor: Demo Provider
                      description: Software to demonstrate basic functionalities.
                      recommendedConnectors:
                        - ConnectorE
                        - ConnectorF
                      discoveredAt: '2023-09-10T15:00:00Z'
                      createdAt: '2024-07-03T15:00:00Z'
                      status: ACTIVE
                      operationalStatus: Operational
                      datasetId: sso-okta:applications
                      discoverySourceCategory: sso
                      licenseCount: 175
                      isSanctioned: true
                      logo: https://spdojtest1.oktapreview.com/api/v1/apps/0oaeuef9hiipHcMgR0h7/logo
                      appUrl: https://spdojtest1.oktapreview.com/home/salesforce/0oaeuef9hiipHcMgR0h7/24
                      groups:
                        - map:
                            id: id
                            name: JIRA Users
                            nativeIdentifiers:
                              map:
                                distinguishedName: CN=Engineering users,OU=Engineering,DC=corp,DC=example,DC=com
                                id: nativeId
                                objectSid: S-1-5-21-717838489-685202119-709183397-1177
                            type: EXTERNAL_GROUP|LOCAL_GROUP
                      usersCount: '175'
                      applicationOwner:
                        - Mr. abel.tuter
                      itApplicationOwner:
                        - Mr. john doe
                      businessCriticality: High
                      dataClassification: Restricted
                      businessUnit: Finance
                      installType: On Premise
                      environment: Production
                      riskScore: 1
                      isBusiness: false
                      totalSigninsCount: 1
                      riskLevel: Low
                      isPrivileged: false
                      warrantyExpiration: 2023-09-25T14:07:27.000+0000
                      attributes:
                        features:
                          - IMPORT_PROFILE_UPDATES
                          - IMPORT_USER_SCHEMA
                          - IMPORT_NEW_USERS
                        identityStack: NOT_SHARED
                        selfService: false
                        signOnMode: SAML_2_0
                      associatedSources: []
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
