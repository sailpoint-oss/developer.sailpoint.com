---
id: v2024-sources
title: Sources
pagination_label: Sources
sidebar_label: Sources
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sources', 'V2024Sources'] 
slug: /tools/sdk/python/v2024/methods/sources
tags: ['SDK', 'Software Development Kit', 'Sources', 'V2024Sources']
---

# sailpoint.v2024.SourcesApi
  Use this API to implement and customize source functionality. 
With source functionality in place, organizations can use Identity Security Cloud to connect their various sources and user data sets and manage access across all those different sources in a secure, scalable way. 

[Sources](https://documentation.sailpoint.com/saas/help/sources/managing_sources.html) refer to the Identity Security Cloud representations for external applications, databases, and directory management systems that maintain their own sets of users, like Dropbox, GitHub, and Workday, for example.
Organizations may use hundreds, if not thousands, of different source systems, and any one employee within an organization likely has a different user record on each source, often with different permissions on many of those records. 
Connecting these sources to Identity Security Cloud makes it possible to manage user access across them all.
Then, if a new hire starts at an organization, Identity Security Cloud can grant the new hire access to all the sources they need.
If an employee moves to a new department and needs access to new sources but no longer needs access to others, Identity Security Cloud can grant the necessary access and revoke the unnecessary access for all the employee&#39;s various sources. 
If an employee leaves the company, Identity Security Cloud can revoke access to all the employee&#39;s various source accounts immediately. 
These are just a few examples of the many ways that source functionality makes identity governance easier, more efficient, and more secure. 

In Identity Security Cloud, administrators can create configure, manage, and edit sources, and they can designate other users as source admins to be able to do so.
They can also designate users as source sub-admins, who can perform the same source actions but only on sources associated with their governance groups.
Admins go to Connections &gt; Sources to see a list of the existing source representations in their organizations. 
They can create new sources or select existing ones. 

To create a new source, the following must be specified: Source Name, Description, Source Owner, and Connection Type.
Refer to [Configuring a Source](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html#configuring-a-source) for more information about the source configuration process. 

Identity Security Cloud connects with its sources either by a direct communication with the source server (connection information specific to the source must be provided) or a flat file feed, a CSV file containing all the relevant information about the accounts to be loaded in.
Different sources use different connectors to share data with Identity Security Cloud, and each connector&#39;s setup process is specific to that connector. 
SailPoint has built a number of connectors to come out of the box and connect to the most common sources, and SailPoint actively maintains these connectors.
Refer to [Identity Security Cloud Connectors](https://documentation.sailpoint.com/connectors/identitynow/landingpages/help/landingpages/identitynow_connectivity_landing.html) for more information about these SailPoint supported connectors. 
Refer to the following links for more information about two useful connectors: 

- [JDBC Connector](https://documentation.sailpoint.com/connectors/jdbc/help/integrating_jdbc/introduction.html): This customizable connector an directly connect to databases that support JDBC (Java Database Connectivity).

- [Web Services Connector](https://documentation.sailpoint.com/connectors/webservices/help/integrating_webservices/introduction.html): This connector can directly connect to databases that support Web Services. 

Refer to [SaaS Connectivity](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/) for more information about SailPoint&#39;s new connectivity framework that makes it easy to build and manage custom connectors to SaaS sources. 

When admins select existing sources, they can view the following information about the source:

- Associated connections (any associated identity profiles, apps, or references to the source in a transform).

- Associated user accounts. These accounts are linked to their identities - this provides a more complete picture of each user&#39;s access across sources.

- Associated entitlements (sets of access rights on sources).

- Associated access profiles (groupings of entitlements). 

The user account data and the entitlements update with each data aggregation from the source. 
Organizations generally run scheduled, automated data aggregations to ensure that their data is always in sync between their sources and their Identity Security Cloud tenants so an access change on a source is detected quickly in Identity Security Cloud.
Admins can view a history of these aggregations, and they can also run manual imports. 
Refer to [Loading Account Data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) for more information about manual and scheduled aggregations. 

Admins can also make changes to determine which user account data Identity Security Cloud collects from the source and how it correlates that account data with identity data. 
To define which account attributes the source shares with Identity Security Cloud, admins can edit the account schema on the source.
Refer to [Managing Source Account Schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) for more information about source account schemas and how to edit them. 
To define the mapping between the source account attributes and their correlating identity attributes, admins can edit the correlation configuration on the source. 
Refer to [Assigning Source Accounts to Identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) for more information about this correlation process between source accounts and identities.

Admins can also delete sources, but they must first ensure that the sources no longer have any active connections: the source must not be associated with any identity profile or any app, and it must not be referenced by any transform.
Refer to [Deleting Sources](https://documentation.sailpoint.com/saas/help/sources/managing_sources.html#deleting-sources) for more information about deleting sources. 

Well organized, mapped out connections between sources and Identity Security Cloud are essential to achieving comprehensive identity access governance across all the source systems organizations need. 
Refer to [Managing Sources](https://documentation.sailpoint.com/saas/help/sources/managing_sources.html) for more information about all the different things admins can do with sources once they are connected.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-provisioning-policy**](#create-provisioning-policy) | **POST** `/sources/{sourceId}/provisioning-policies` | Create Provisioning Policy
[**create-source**](#create-source) | **POST** `/sources` | Creates a source in IdentityNow.
[**create-source-schedule**](#create-source-schedule) | **POST** `/sources/{sourceId}/schedules` | Create Schedule on Source
[**create-source-schema**](#create-source-schema) | **POST** `/sources/{sourceId}/schemas` | Create Schema on Source
[**delete-accounts-async**](#delete-accounts-async) | **POST** `/sources/{id}/remove-accounts` | Remove All Accounts in a Source
[**delete-native-change-detection-config**](#delete-native-change-detection-config) | **DELETE** `/sources/{sourceId}/native-change-detection-config` | Delete Native Change Detection Configuration
[**delete-provisioning-policy**](#delete-provisioning-policy) | **DELETE** `/sources/{sourceId}/provisioning-policies/{usageType}` | Delete Provisioning Policy by UsageType
[**delete-source**](#delete-source) | **DELETE** `/sources/{id}` | Delete Source by ID
[**delete-source-schedule**](#delete-source-schedule) | **DELETE** `/sources/{sourceId}/schedules/{scheduleType}` | Delete Source Schedule by type.
[**delete-source-schema**](#delete-source-schema) | **DELETE** `/sources/{sourceId}/schemas/{schemaId}` | Delete Source Schema by ID
[**get-accounts-schema**](#get-accounts-schema) | **GET** `/sources/{id}/schemas/accounts` | Downloads source accounts schema template
[**get-correlation-config**](#get-correlation-config) | **GET** `/sources/{id}/correlation-config` | Get Source Correlation Configuration
[**get-entitlements-schema**](#get-entitlements-schema) | **GET** `/sources/{id}/schemas/entitlements` | Downloads source entitlements schema template
[**get-native-change-detection-config**](#get-native-change-detection-config) | **GET** `/sources/{sourceId}/native-change-detection-config` | Native Change Detection Configuration
[**get-provisioning-policy**](#get-provisioning-policy) | **GET** `/sources/{sourceId}/provisioning-policies/{usageType}` | Get Provisioning Policy by UsageType
[**get-source**](#get-source) | **GET** `/sources/{id}` | Get Source by ID
[**get-source-attr-sync-config**](#get-source-attr-sync-config) | **GET** `/sources/{id}/attribute-sync-config` | Attribute Sync Config
[**get-source-config**](#get-source-config) | **GET** `/sources/{id}/connectors/source-config` | Gets source config with language translations
[**get-source-entitlement-request-config**](#get-source-entitlement-request-config) | **GET** `/sources/{id}/entitlement-request-config` | Get Source Entitlement Request Configuration
[**get-source-health**](#get-source-health) | **GET** `/sources/{sourceId}/source-health` | Fetches source health by id
[**get-source-schedule**](#get-source-schedule) | **GET** `/sources/{sourceId}/schedules/{scheduleType}` | Get Source Schedule by Type
[**get-source-schedules**](#get-source-schedules) | **GET** `/sources/{sourceId}/schedules` | List Schedules on Source
[**get-source-schema**](#get-source-schema) | **GET** `/sources/{sourceId}/schemas/{schemaId}` | Get Source Schema by ID
[**get-source-schemas**](#get-source-schemas) | **GET** `/sources/{sourceId}/schemas` | List Schemas on Source
[**import-accounts**](#import-accounts) | **POST** `/sources/{id}/load-accounts` | Account Aggregation
[**import-accounts-schema**](#import-accounts-schema) | **POST** `/sources/{id}/schemas/accounts` | Uploads source accounts schema template
[**import-connector-file**](#import-connector-file) | **POST** `/sources/{sourceId}/upload-connector-file` | Upload connector file to source
[**import-entitlements-schema**](#import-entitlements-schema) | **POST** `/sources/{id}/schemas/entitlements` | Uploads source entitlements schema template
[**import-uncorrelated-accounts**](#import-uncorrelated-accounts) | **POST** `/sources/{id}/load-uncorrelated-accounts` | Process Uncorrelated Accounts
[**list-provisioning-policies**](#list-provisioning-policies) | **GET** `/sources/{sourceId}/provisioning-policies` | Lists ProvisioningPolicies
[**list-sources**](#list-sources) | **GET** `/sources` | Lists all sources in IdentityNow.
[**peek-resource-objects**](#peek-resource-objects) | **POST** `/sources/{sourceId}/connector/peek-resource-objects` | Peek source connector&#39;s resource objects
[**ping-cluster**](#ping-cluster) | **POST** `/sources/{sourceId}/connector/ping-cluster` | Ping cluster for source connector
[**put-correlation-config**](#put-correlation-config) | **PUT** `/sources/{id}/correlation-config` | Update Source Correlation Configuration
[**put-native-change-detection-config**](#put-native-change-detection-config) | **PUT** `/sources/{sourceId}/native-change-detection-config` | Update Native Change Detection Configuration
[**put-provisioning-policy**](#put-provisioning-policy) | **PUT** `/sources/{sourceId}/provisioning-policies/{usageType}` | Update Provisioning Policy by UsageType
[**put-source**](#put-source) | **PUT** `/sources/{id}` | Update Source (Full)
[**put-source-attr-sync-config**](#put-source-attr-sync-config) | **PUT** `/sources/{id}/attribute-sync-config` | Update Attribute Sync Config
[**put-source-schema**](#put-source-schema) | **PUT** `/sources/{sourceId}/schemas/{schemaId}` | Update Source Schema (Full)
[**sync-attributes-for-source**](#sync-attributes-for-source) | **POST** `/sources/{id}/synchronize-attributes` | Synchronize single source attributes.
[**test-source-configuration**](#test-source-configuration) | **POST** `/sources/{sourceId}/connector/test-configuration` | Test configuration for source connector
[**test-source-connection**](#test-source-connection) | **POST** `/sources/{sourceId}/connector/check-connection` | Check connection for source connector.
[**update-password-policy-holders**](#update-password-policy-holders) | **PATCH** `/sources/{sourceId}/password-policies` | Update Password Policy
[**update-provisioning-policies-in-bulk**](#update-provisioning-policies-in-bulk) | **POST** `/sources/{sourceId}/provisioning-policies/bulk-update` | Bulk Update Provisioning Policies
[**update-provisioning-policy**](#update-provisioning-policy) | **PATCH** `/sources/{sourceId}/provisioning-policies/{usageType}` | Partial update of Provisioning Policy
[**update-source**](#update-source) | **PATCH** `/sources/{id}` | Update Source (Partial)
[**update-source-entitlement-request-config**](#update-source-entitlement-request-config) | **PUT** `/sources/{id}/entitlement-request-config` | Update Source Entitlement Request Configuration
[**update-source-schedule**](#update-source-schedule) | **PATCH** `/sources/{sourceId}/schedules/{scheduleType}` | Update Source Schedule (Partial)
[**update-source-schema**](#update-source-schema) | **PATCH** `/sources/{sourceId}/schemas/{schemaId}` | Update Source Schema (Partial)


## create-provisioning-policy
Create Provisioning Policy
This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-provisioning-policy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id
 Body  | provisioning_policy_dto | [**ProvisioningPolicyDto**](../models/provisioning-policy-dto) | True  | 

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created ProvisioningPolicyDto object | ProvisioningPolicyDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.provisioning_policy_dto import ProvisioningPolicyDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id # str | The Source id
    provisioning_policy_dto = {
          "name" : "example provisioning policy for inactive identities",
          "description" : "this provisioning policy creates access based on an identity going inactive",
          "fields" : [ {
            "isRequired" : false,
            "transform" : {
              "type" : "rule",
              "attributes" : {
                "name" : "Create Unique LDAP Attribute"
              }
            },
            "isMultiValued" : false,
            "name" : "userName",
            "attributes" : {
              "template" : "${firstname}.${lastname}${uniqueCounter}",
              "cloudMaxUniqueChecks" : "50",
              "cloudMaxSize" : "20",
              "cloudRequired" : "true"
            },
            "type" : "string"
          }, {
            "isRequired" : false,
            "transform" : {
              "type" : "rule",
              "attributes" : {
                "name" : "Create Unique LDAP Attribute"
              }
            },
            "isMultiValued" : false,
            "name" : "userName",
            "attributes" : {
              "template" : "${firstname}.${lastname}${uniqueCounter}",
              "cloudMaxUniqueChecks" : "50",
              "cloudMaxSize" : "20",
              "cloudRequired" : "true"
            },
            "type" : "string"
          } ],
          "usageType" : "CREATE"
        } # ProvisioningPolicyDto | 

    try:
        # Create Provisioning Policy
        new_provisioning_policy_dto = ProvisioningPolicyDto()
        new_provisioning_policy_dto.from_json(provisioning_policy_dto)
        results =SourcesApi(api_client).create_provisioning_policy(source_id, new_provisioning_policy_dto)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).create_provisioning_policy(source_id, new_provisioning_policy_dto)
        print("The response of SourcesApi->create_provisioning_policy:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->create_provisioning_policy: %s\n" % e)
```



[[Back to top]](#) 

## create-source
Creates a source in IdentityNow.
This creates a specific source with a full source JSON representation. Any passwords are submitted as plain-text and encrypted upon receipt in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-source)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | source | [**Source**](../models/source) | True  | 
  Query | provision_as_csv | **bool** |   (optional) | If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don't set this query parameter and you attempt to set the `type` attribute directly, the request won't correctly generate the source.  

### Return type
[**Source**](../models/source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created Source object. Any passwords will only show the the encrypted cipher-text, as they are not decrypt-able in IdentityNow cloud-based services, per IdentityNow security design. | Source |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.source import Source
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source = {
          "cluster" : {
            "name" : "Corporate Cluster",
            "id" : "2c9180866166b5b0016167c32ef31a66",
            "type" : "CLUSTER"
          },
          "deleteThreshold" : 10,
          "connectorId" : "active-directory",
          "description" : "This is the corporate directory.",
          "type" : "OpenLDAP - Direct",
          "connectorClass" : "sailpoint.connector.LDAPConnector",
          "connectionType" : "file",
          "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
          "passwordPolicies" : [ {
            "type" : "PASSWORD_POLICY",
            "id" : "2c9180855d191c59015d291ceb053980",
            "name" : "Corporate Password Policy"
          }, {
            "type" : "PASSWORD_POLICY",
            "id" : "2c9180855d191c59015d291ceb057777",
            "name" : "Vendor Password Policy"
          } ],
          "modified" : "2024-01-23T18:08:50.897Z",
          "id" : "2c91808568c529c60168cca6f90c1324",
          "connectorImplementationId" : "delimited-file",
          "managerCorrelationRule" : {
            "name" : "Example Rule",
            "id" : "2c918085708c274401708c2a8a760001",
            "type" : "RULE"
          },
          "owner" : {
            "name" : "MyName",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "managementWorkgroup" : {
            "name" : "My Management Workgroup",
            "id" : "2c91808568c529c60168cca6f90c2222",
            "type" : "GOVERNANCE_GROUP"
          },
          "accountCorrelationRule" : {
            "name" : "Example Rule",
            "id" : "2c918085708c274401708c2a8a760001",
            "type" : "RULE"
          },
          "authoritative" : false,
          "connectorAttributes" : {
            "healthCheckTimeout" : 30,
            "authSearchAttributes" : [ "cn", "uid", "mail" ]
          },
          "created" : "2022-02-08T14:50:03.827Z",
          "managerCorrelationMapping" : {
            "accountAttributeName" : "manager",
            "identityAttributeName" : "manager"
          },
          "credentialProviderEnabled" : false,
          "accountCorrelationConfig" : {
            "name" : "Directory [source-62867] Account Correlation",
            "id" : "2c9180855d191c59015d28583727245a",
            "type" : "ACCOUNT_CORRELATION_CONFIG"
          },
          "connector" : "active-directory",
          "healthy" : true,
          "schemas" : [ {
            "type" : "CONNECTOR_SCHEMA",
            "id" : "2c9180835d191a86015d28455b4b232a",
            "name" : "account"
          }, {
            "type" : "CONNECTOR_SCHEMA",
            "id" : "2c9180835d191a86015d28455b4b232b",
            "name" : "group"
          } ],
          "name" : "My Source",
          "connectorName" : "Active Directory",
          "category" : "CredentialProvider",
          "beforeProvisioningRule" : {
            "name" : "Example Rule",
            "id" : "2c918085708c274401708c2a8a760001",
            "type" : "RULE"
          },
          "status" : "SOURCE_STATE_HEALTHY",
          "since" : "2021-09-28T15:48:29.3801666300Z"
        } # Source | 
    provision_as_csv = false # bool | If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don't set this query parameter and you attempt to set the `type` attribute directly, the request won't correctly generate the source.   (optional) # bool | If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don't set this query parameter and you attempt to set the `type` attribute directly, the request won't correctly generate the source.   (optional)

    try:
        # Creates a source in IdentityNow.
        new_source = Source()
        new_source.from_json(source)
        results =SourcesApi(api_client).create_source(new_source, )
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).create_source(new_source, provision_as_csv)
        print("The response of SourcesApi->create_source:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->create_source: %s\n" % e)
```



[[Back to top]](#) 

## create-source-schedule
Create Schedule on Source
Use this API to create a new schedule for a type on the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-source-schedule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.
 Body  | schedule1 | [**Schedule1**](../models/schedule1) | True  | 

### Return type
[**Schedule1**](../models/schedule1)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | The schedule was successfully created on the specified source. | Schedule1 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.schedule1 import Schedule1
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    schedule1 = sailpoint.v2024.Schedule1() # Schedule1 | 

    try:
        # Create Schedule on Source
        new_schedule1 = Schedule1()
        new_schedule1.from_json(schedule1)
        results =SourcesApi(api_client).create_source_schedule(source_id, new_schedule1)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).create_source_schedule(source_id, new_schedule1)
        print("The response of SourcesApi->create_source_schedule:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->create_source_schedule: %s\n" % e)
```



[[Back to top]](#) 

## create-source-schema
Create Schema on Source
Use this API to create a new schema on the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-source-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.
 Body  | model_schema | [**ModelSchema**](../models/model-schema) | True  | 

### Return type
[**ModelSchema**](../models/model-schema)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | The schema was successfully created on the specified source. | ModelSchema |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.model_schema import ModelSchema
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    model_schema = sailpoint.v2024.ModelSchema() # ModelSchema | 

    try:
        # Create Schema on Source
        new_model_schema = ModelSchema()
        new_model_schema.from_json(model_schema)
        results =SourcesApi(api_client).create_source_schema(source_id, new_model_schema)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).create_source_schema(source_id, new_model_schema)
        print("The response of SourcesApi->create_source_schema:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->create_source_schema: %s\n" % e)
```



[[Back to top]](#) 

## delete-accounts-async
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Remove All Accounts in a Source
Use this endpoint to remove all accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.

This endpoint is good for:
* Removing accounts that no longer exist on the source.
* Removing accounts that won't be aggregated following updates to the source configuration.
* Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-accounts-async)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**TaskResultDto**](../models/task-result-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted. Returns task result details of removal request. | TaskResultDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.task_result_dto import TaskResultDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ebbf35756e1140699ce52b233121384a' # str | The source id # str | The source id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Remove All Accounts in a Source
        
        results =SourcesApi(api_client).delete_accounts_async(id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).delete_accounts_async(id, x_sail_point_experimental)
        print("The response of SourcesApi->delete_accounts_async:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->delete_accounts_async: %s\n" % e)
```



[[Back to top]](#) 

## delete-native-change-detection-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete Native Change Detection Configuration
Deletes the native change detection configuration for the source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-native-change-detection-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Delete Native Change Detection Configuration
        
        SourcesApi(api_client).delete_native_change_detection_config(id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).delete_native_change_detection_config(id, x_sail_point_experimental)
        except Exception as e:
        print("Exception when calling SourcesApi->delete_native_change_detection_config: %s\n" % e)
```



[[Back to top]](#) 

## delete-provisioning-policy
Delete Provisioning Policy by UsageType
Deletes the provisioning policy with the specified usage on an application.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-provisioning-policy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source ID.
Path   | usage_type | [**UsageType**](../models/usage-type) | True  | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.usage_type import UsageType
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    usage_type = sailpoint.v2024.UsageType() # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

    try:
        # Delete Provisioning Policy by UsageType
        
        SourcesApi(api_client).delete_provisioning_policy(source_id, usage_type)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).delete_provisioning_policy(source_id, usage_type)
        except Exception as e:
        print("Exception when calling SourcesApi->delete_provisioning_policy: %s\n" % e)
```



[[Back to top]](#) 

## delete-source
Delete Source by ID
Use this API to delete a specific source in Identity Security Cloud (ISC).
The API removes all the accounts on the source first, and then it deletes the source. You can retrieve the actual task execution status with this method: GET `/task-status/{id}`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-source)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.

### Return type
[**DeleteSource202Response**](../models/delete-source202-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | DeleteSource202Response |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.delete_source202_response import DeleteSource202Response
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.

    try:
        # Delete Source by ID
        
        results =SourcesApi(api_client).delete_source(id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).delete_source(id)
        print("The response of SourcesApi->delete_source:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->delete_source: %s\n" % e)
```



[[Back to top]](#) 

## delete-source-schedule
Delete Source Schedule by type.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-source-schedule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
Path   | schedule_type | **str** | True  | The Schedule type.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schedule_type = 'ACCOUNT_AGGREGATION' # str | The Schedule type. # str | The Schedule type.

    try:
        # Delete Source Schedule by type.
        
        SourcesApi(api_client).delete_source_schedule(source_id, schedule_type)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).delete_source_schedule(source_id, schedule_type)
        except Exception as e:
        print("Exception when calling SourcesApi->delete_source_schedule: %s\n" % e)
```



[[Back to top]](#) 

## delete-source-schema
Delete Source Schema by ID


[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-source-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
Path   | schema_id | **str** | True  | The Schema id.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema id. # str | The Schema id.

    try:
        # Delete Source Schema by ID
        
        SourcesApi(api_client).delete_source_schema(source_id, schema_id)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).delete_source_schema(source_id, schema_id)
        except Exception as e:
        print("Exception when calling SourcesApi->delete_source_schema: %s\n" % e)
```



[[Back to top]](#) 

## get-accounts-schema
Downloads source accounts schema template
This API downloads the CSV schema that defines the account attributes on a source.
>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-accounts-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Source id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully downloaded the file |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id

    try:
        # Downloads source accounts schema template
        
        SourcesApi(api_client).get_accounts_schema(id)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).get_accounts_schema(id)
        except Exception as e:
        print("Exception when calling SourcesApi->get_accounts_schema: %s\n" % e)
```



[[Back to top]](#) 

## get-correlation-config
Get Source Correlation Configuration
This API returns the existing correlation configuration for a source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-correlation-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id

### Return type
[**CorrelationConfig**](../models/correlation-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Correlation configuration for a source | CorrelationConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.correlation_config import CorrelationConfig
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id

    try:
        # Get Source Correlation Configuration
        
        results =SourcesApi(api_client).get_correlation_config(id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_correlation_config(id)
        print("The response of SourcesApi->get_correlation_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->get_correlation_config: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlements-schema
Downloads source entitlements schema template
This API downloads the CSV schema that defines the entitlement attributes on a source.

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-entitlements-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Source id
  Query | schema_name | **str** |   (optional) | Name of entitlement schema

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully downloaded the file |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    schema_name = '?schemaName=group' # str | Name of entitlement schema (optional) # str | Name of entitlement schema (optional)

    try:
        # Downloads source entitlements schema template
        
        SourcesApi(api_client).get_entitlements_schema(id, )
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).get_entitlements_schema(id, schema_name)
        except Exception as e:
        print("Exception when calling SourcesApi->get_entitlements_schema: %s\n" % e)
```



[[Back to top]](#) 

## get-native-change-detection-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Native Change Detection Configuration
This API returns the existing native change detection configuration for a source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-native-change-detection-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**NativeChangeDetectionConfig**](../models/native-change-detection-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Native change detection configuration for a source | NativeChangeDetectionConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.native_change_detection_config import NativeChangeDetectionConfig
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Native Change Detection Configuration
        
        results =SourcesApi(api_client).get_native_change_detection_config(id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_native_change_detection_config(id, x_sail_point_experimental)
        print("The response of SourcesApi->get_native_change_detection_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->get_native_change_detection_config: %s\n" % e)
```



[[Back to top]](#) 

## get-provisioning-policy
Get Provisioning Policy by UsageType
This end-point retrieves the ProvisioningPolicy with the specified usage on the specified Source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-provisioning-policy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source ID.
Path   | usage_type | [**UsageType**](../models/usage-type) | True  | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The requested ProvisioningPolicyDto was successfully retrieved. | ProvisioningPolicyDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.v2024.models.usage_type import UsageType
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    usage_type = sailpoint.v2024.UsageType() # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

    try:
        # Get Provisioning Policy by UsageType
        
        results =SourcesApi(api_client).get_provisioning_policy(source_id, usage_type)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_provisioning_policy(source_id, usage_type)
        print("The response of SourcesApi->get_provisioning_policy:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->get_provisioning_policy: %s\n" % e)
```



[[Back to top]](#) 

## get-source
Get Source by ID
Use this API to get a source by a specified ID in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.

### Return type
[**Source**](../models/source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Source object. | Source |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.source import Source
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.

    try:
        # Get Source by ID
        
        results =SourcesApi(api_client).get_source(id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source(id)
        print("The response of SourcesApi->get_source:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->get_source: %s\n" % e)
```



[[Back to top]](#) 

## get-source-attr-sync-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Attribute Sync Config
This API returns the existing attribute synchronization configuration for a source specified by the given ID. The response contains all attributes, regardless of whether they enabled or not.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-attr-sync-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AttrSyncSourceConfig**](../models/attr-sync-source-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Attribute synchronization configuration for a source | AttrSyncSourceConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.attr_sync_source_config import AttrSyncSourceConfig
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Attribute Sync Config
        
        results =SourcesApi(api_client).get_source_attr_sync_config(id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_attr_sync_config(id, x_sail_point_experimental)
        print("The response of SourcesApi->get_source_attr_sync_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->get_source_attr_sync_config: %s\n" % e)
```



[[Back to top]](#) 

## get-source-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets source config with language translations
Looks up and returns the source config for the requested source id after populating the source config values and applying language translations.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Source id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | locale | **str** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

### Return type
[**ConnectorDetail1**](../models/connector-detail1)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Connector Detail object | ConnectorDetail1 |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.connector_detail1 import ConnectorDetail1
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'id_example' # str | The Source id # str | The Source id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    locale = 'locale_example' # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

    try:
        # Gets source config with language translations
        
        results =SourcesApi(api_client).get_source_config(id, x_sail_point_experimental, )
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_config(id, x_sail_point_experimental, locale)
        print("The response of SourcesApi->get_source_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->get_source_config: %s\n" % e)
```



[[Back to top]](#) 

## get-source-entitlement-request-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get Source Entitlement Request Configuration
This API gets the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-entitlement-request-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceEntitlementRequestConfig**](../models/source-entitlement-request-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Source Entitlement Request Configuration Details. | SourceEntitlementRequestConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.source_entitlement_request_config import SourceEntitlementRequestConfig
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get Source Entitlement Request Configuration
        
        results =SourcesApi(api_client).get_source_entitlement_request_config(x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_entitlement_request_config(x_sail_point_experimental)
        print("The response of SourcesApi->get_source_entitlement_request_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->get_source_entitlement_request_config: %s\n" % e)
```



[[Back to top]](#) 

## get-source-health
Fetches source health by id
This endpoint fetches source health by source's id

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-health)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.

### Return type
[**SourceHealthDto**](../models/source-health-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Fetched source health successfully | SourceHealthDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.source_health_dto import SourceHealthDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.

    try:
        # Fetches source health by id
        
        results =SourcesApi(api_client).get_source_health(source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_health(source_id)
        print("The response of SourcesApi->get_source_health:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->get_source_health: %s\n" % e)
```



[[Back to top]](#) 

## get-source-schedule
Get Source Schedule by Type
Get the source schedule by type in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-schedule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
Path   | schedule_type | **str** | True  | The Schedule type.

### Return type
[**Schedule1**](../models/schedule1)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The requested Schedule was successfully retrieved. | Schedule1 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.schedule1 import Schedule1
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schedule_type = 'ACCOUNT_AGGREGATION' # str | The Schedule type. # str | The Schedule type.

    try:
        # Get Source Schedule by Type
        
        results =SourcesApi(api_client).get_source_schedule(source_id, schedule_type)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_schedule(source_id, schedule_type)
        print("The response of SourcesApi->get_source_schedule:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->get_source_schedule: %s\n" % e)
```



[[Back to top]](#) 

## get-source-schedules
List Schedules on Source
Use this API to list the schedules that exist on the specified source in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-schedules)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.

### Return type
[**List[Schedule1]**](../models/schedule1)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The schedules were successfully retrieved. | List[Schedule1] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.schedule1 import Schedule1
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.

    try:
        # List Schedules on Source
        
        results =SourcesApi(api_client).get_source_schedules(source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_schedules(source_id)
        print("The response of SourcesApi->get_source_schedules:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->get_source_schedules: %s\n" % e)
```



[[Back to top]](#) 

## get-source-schema
Get Source Schema by ID
Get the Source Schema by ID in IdentityNow.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
Path   | schema_id | **str** | True  | The Schema id.

### Return type
[**ModelSchema**](../models/model-schema)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The requested Schema was successfully retrieved. | ModelSchema |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.model_schema import ModelSchema
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema id. # str | The Schema id.

    try:
        # Get Source Schema by ID
        
        results =SourcesApi(api_client).get_source_schema(source_id, schema_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_schema(source_id, schema_id)
        print("The response of SourcesApi->get_source_schema:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->get_source_schema: %s\n" % e)
```



[[Back to top]](#) 

## get-source-schemas
List Schemas on Source
Use this API to list the schemas that exist on the specified source in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-schemas)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.
  Query | include_types | **str** |   (optional) | If set to 'group', then the account schema is filtered and only group schemas are returned. Only a value of 'group' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas.
  Query | include_names | **str** |   (optional) | A comma-separated list of schema names to filter result.

### Return type
[**List[ModelSchema]**](../models/model-schema)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The schemas were successfully retrieved. | List[ModelSchema] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.model_schema import ModelSchema
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    include_types = 'group' # str | If set to 'group', then the account schema is filtered and only group schemas are returned. Only a value of 'group' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. (optional) # str | If set to 'group', then the account schema is filtered and only group schemas are returned. Only a value of 'group' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. (optional)
    include_names = 'account' # str | A comma-separated list of schema names to filter result. (optional) # str | A comma-separated list of schema names to filter result. (optional)

    try:
        # List Schemas on Source
        
        results =SourcesApi(api_client).get_source_schemas(source_id, )
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_schemas(source_id, include_types, include_names)
        print("The response of SourcesApi->get_source_schemas:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->get_source_schemas: %s\n" % e)
```



[[Back to top]](#) 

## import-accounts
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Account Aggregation
Starts an account aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body.
You will also need to set the Content-Type header to `multipart/form-data`.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/import-accounts)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source Id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
   | file | **bytearray** |   (optional) | The CSV file containing the source accounts to aggregate.
   | disable_optimization | **str** |   (optional) | Use this flag to reprocess every account whether or not the data has changed.

### Return type
[**LoadAccountsTask**](../models/load-accounts-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Aggregate Accounts Task | LoadAccountsTask |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.load_accounts_task import LoadAccountsTask
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source Id # str | Source Id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    file = None # bytearray | The CSV file containing the source accounts to aggregate. (optional) # bytearray | The CSV file containing the source accounts to aggregate. (optional)
    disable_optimization = 'disable_optimization_example' # str | Use this flag to reprocess every account whether or not the data has changed. (optional) # str | Use this flag to reprocess every account whether or not the data has changed. (optional)

    try:
        # Account Aggregation
        
        results =SourcesApi(api_client).import_accounts(id, x_sail_point_experimental, )
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_accounts(id, x_sail_point_experimental, file, disable_optimization)
        print("The response of SourcesApi->import_accounts:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->import_accounts: %s\n" % e)
```



[[Back to top]](#) 

## import-accounts-schema
Uploads source accounts schema template
This API uploads a source schema template file to configure a source's account attributes.

To retrieve the file to modify and upload, log into Identity Now. 

Click **Admin** -> **Connections** -> **Sources** -> **`{SourceName}`** -> **Import Data** -> **Account Schema** -> **Options** -> **Download Schema**

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v2024/import-accounts-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Source id
   | file | **bytearray** |   (optional) | 

### Return type
[**ModelSchema**](../models/model-schema)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully uploaded the file | ModelSchema |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.model_schema import ModelSchema
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Uploads source accounts schema template
        
        results =SourcesApi(api_client).import_accounts_schema(id, )
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_accounts_schema(id, file)
        print("The response of SourcesApi->import_accounts_schema:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->import_accounts_schema: %s\n" % e)
```



[[Back to top]](#) 

## import-connector-file
Upload connector file to source
This uploads a supplemental source connector file (like jdbc driver jars) to a source's S3 bucket. This also sends ETS and Audit events.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/import-connector-file)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
   | file | **bytearray** |   (optional) | 

### Return type
[**Source**](../models/source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Uploaded the file successfully and sent all post-upload events | Source |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.source import Source
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Upload connector file to source
        
        results =SourcesApi(api_client).import_connector_file(source_id, )
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_connector_file(source_id, file)
        print("The response of SourcesApi->import_connector_file:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->import_connector_file: %s\n" % e)
```



[[Back to top]](#) 

## import-entitlements-schema
Uploads source entitlements schema template
This API uploads a source schema template file to configure a source's entitlement attributes.

To retrieve the file to modify and upload, log into Identity Now. 

Click **Admin** -> **Connections** -> **Sources** -> **`{SourceName}`** -> **Import Data** -> **Import Entitlements** -> **Download**

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v2024/import-entitlements-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Source id
  Query | schema_name | **str** |   (optional) | Name of entitlement schema
   | file | **bytearray** |   (optional) | 

### Return type
[**ModelSchema**](../models/model-schema)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully uploaded the file | ModelSchema |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.model_schema import ModelSchema
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    schema_name = '?schemaName=group' # str | Name of entitlement schema (optional) # str | Name of entitlement schema (optional)
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Uploads source entitlements schema template
        
        results =SourcesApi(api_client).import_entitlements_schema(id, )
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_entitlements_schema(id, schema_name, file)
        print("The response of SourcesApi->import_entitlements_schema:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->import_entitlements_schema: %s\n" % e)
```



[[Back to top]](#) 

## import-uncorrelated-accounts
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Process Uncorrelated Accounts
File is required for upload. You will also need to set the Content-Type header to `multipart/form-data`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/import-uncorrelated-accounts)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source Id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
   | file | **bytearray** |   (optional) | 

### Return type
[**LoadUncorrelatedAccountsTask**](../models/load-uncorrelated-accounts-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Uncorrelated Accounts Task | LoadUncorrelatedAccountsTask |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.load_uncorrelated_accounts_task import LoadUncorrelatedAccountsTask
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '75dbec1ebe154d5785da27b95e1dd5d7' # str | Source Id # str | Source Id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Process Uncorrelated Accounts
        
        results =SourcesApi(api_client).import_uncorrelated_accounts(id, x_sail_point_experimental, )
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_uncorrelated_accounts(id, x_sail_point_experimental, file)
        print("The response of SourcesApi->import_uncorrelated_accounts:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->import_uncorrelated_accounts: %s\n" % e)
```



[[Back to top]](#) 

## list-provisioning-policies
Lists ProvisioningPolicies
This end-point lists all the ProvisioningPolicies in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-provisioning-policies)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id

### Return type
[**List[ProvisioningPolicyDto]**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of ProvisioningPolicyDto objects | List[ProvisioningPolicyDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.provisioning_policy_dto import ProvisioningPolicyDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id # str | The Source id

    try:
        # Lists ProvisioningPolicies
        
        results =SourcesApi(api_client).list_provisioning_policies(source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).list_provisioning_policies(source_id)
        print("The response of SourcesApi->list_provisioning_policies:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->list_provisioning_policies: %s\n" % e)
```



[[Back to top]](#) 

## list-sources
Lists all sources in IdentityNow.
This end-point lists all the sources in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-sources)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **modified**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType**
  Query | for_subadmin | **str** |   (optional) | Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned.
  Query | include_idn_source | **bool** |   (optional) (default to False) | Include the IdentityNow source in the response.

### Return type
[**List[Source]**](../models/source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Source objects | List[Source] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.source import Source
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name eq \"Employees\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **modified**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **modified**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** (optional)
    for_subadmin = 'name' # str | Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. (optional) # str | Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. (optional)
    include_idn_source = False # bool | Include the IdentityNow source in the response. (optional) (default to False) # bool | Include the IdentityNow source in the response. (optional) (default to False)

    try:
        # Lists all sources in IdentityNow.
        
        results =SourcesApi(api_client).list_sources()
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).list_sources(limit, offset, count, filters, sorters, for_subadmin, include_idn_source)
        print("The response of SourcesApi->list_sources:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->list_sources: %s\n" % e)
```



[[Back to top]](#) 

## peek-resource-objects
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Peek source connector's resource objects
Retrieves a sample of data returned from account and group aggregation requests.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/peek-resource-objects)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the Source
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | resource_objects_request | [**ResourceObjectsRequest**](../models/resource-objects-request) | True  | 

### Return type
[**ResourceObjectsResponse**](../models/resource-objects-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of resource objects that was fetched from the source connector. | ResourceObjectsResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.resource_objects_request import ResourceObjectsRequest
from sailpoint.v2024.models.resource_objects_response import ResourceObjectsResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = 'cef3ee201db947c5912551015ba0c679' # str | The ID of the Source # str | The ID of the Source
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    resource_objects_request = {
          "maxCount" : 100,
          "objectType" : "group"
        } # ResourceObjectsRequest | 

    try:
        # Peek source connector's resource objects
        new_resource_objects_request = ResourceObjectsRequest()
        new_resource_objects_request.from_json(resource_objects_request)
        results =SourcesApi(api_client).peek_resource_objects(source_id, x_sail_point_experimental, new_resource_objects_request)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).peek_resource_objects(source_id, x_sail_point_experimental, new_resource_objects_request)
        print("The response of SourcesApi->peek_resource_objects:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->peek_resource_objects: %s\n" % e)
```



[[Back to top]](#) 

## ping-cluster
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Ping cluster for source connector
This endpoint validates that the cluster being used by the source is reachable from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/ping-cluster)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the Source
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**StatusResponse**](../models/status-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The result of pinging connection with the source connector. | StatusResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.status_response import StatusResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = 'cef3ee201db947c5912551015ba0c679' # str | The ID of the Source # str | The ID of the Source
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Ping cluster for source connector
        
        results =SourcesApi(api_client).ping_cluster(source_id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).ping_cluster(source_id, x_sail_point_experimental)
        print("The response of SourcesApi->ping_cluster:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->ping_cluster: %s\n" % e)
```



[[Back to top]](#) 

## put-correlation-config
Update Source Correlation Configuration
Replaces the correlation configuration for the source specified by the given ID with the configuration provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-correlation-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id
 Body  | correlation_config | [**CorrelationConfig**](../models/correlation-config) | True  | 

### Return type
[**CorrelationConfig**](../models/correlation-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated correlation configuration for a source | CorrelationConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.correlation_config import CorrelationConfig
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id
    correlation_config = {
          "attributeAssignments" : [ {
            "filterString" : "first_name == \"John\"",
            "ignoreCase" : false,
            "complex" : false,
            "property" : "first_name",
            "value" : "firstName",
            "operation" : "EQ",
            "matchMode" : "ANYWHERE"
          }, {
            "filterString" : "first_name == \"John\"",
            "ignoreCase" : false,
            "complex" : false,
            "property" : "first_name",
            "value" : "firstName",
            "operation" : "EQ",
            "matchMode" : "ANYWHERE"
          } ],
          "name" : "Source [source] Account Correlation",
          "id" : "2c9180835d191a86015d28455b4a2329"
        } # CorrelationConfig | 

    try:
        # Update Source Correlation Configuration
        new_correlation_config = CorrelationConfig()
        new_correlation_config.from_json(correlation_config)
        results =SourcesApi(api_client).put_correlation_config(id, new_correlation_config)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_correlation_config(id, new_correlation_config)
        print("The response of SourcesApi->put_correlation_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->put_correlation_config: %s\n" % e)
```



[[Back to top]](#) 

## put-native-change-detection-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update Native Change Detection Configuration
Replaces the native change detection configuration for the source specified by the given ID with the configuration provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-native-change-detection-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | native_change_detection_config | [**NativeChangeDetectionConfig**](../models/native-change-detection-config) | True  | 

### Return type
[**NativeChangeDetectionConfig**](../models/native-change-detection-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated native change detection configuration for a source | NativeChangeDetectionConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.native_change_detection_config import NativeChangeDetectionConfig
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    native_change_detection_config = {
          "selectedEntitlements" : [ "memberOf", "memberOfSharedMailbox" ],
          "operations" : [ "ACCOUNT_UPDATED", "ACCOUNT_DELETED" ],
          "selectedNonEntitlementAttributes" : [ "lastName", "phoneNumber", "objectType", "servicePrincipalName" ],
          "allNonEntitlementAttributes" : false,
          "allEntitlements" : false,
          "enabled" : true
        } # NativeChangeDetectionConfig | 

    try:
        # Update Native Change Detection Configuration
        new_native_change_detection_config = NativeChangeDetectionConfig()
        new_native_change_detection_config.from_json(native_change_detection_config)
        results =SourcesApi(api_client).put_native_change_detection_config(id, x_sail_point_experimental, new_native_change_detection_config)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_native_change_detection_config(id, x_sail_point_experimental, new_native_change_detection_config)
        print("The response of SourcesApi->put_native_change_detection_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->put_native_change_detection_config: %s\n" % e)
```



[[Back to top]](#) 

## put-provisioning-policy
Update Provisioning Policy by UsageType
This end-point updates the provisioning policy with the specified usage on the specified source in IdentityNow.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-provisioning-policy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source ID.
Path   | usage_type | [**UsageType**](../models/usage-type) | True  | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
 Body  | provisioning_policy_dto | [**ProvisioningPolicyDto**](../models/provisioning-policy-dto) | True  | 

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The ProvisioningPolicyDto was successfully replaced. | ProvisioningPolicyDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.v2024.models.usage_type import UsageType
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    usage_type = sailpoint.v2024.UsageType() # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
    provisioning_policy_dto = {
          "name" : "example provisioning policy for inactive identities",
          "description" : "this provisioning policy creates access based on an identity going inactive",
          "fields" : [ {
            "isRequired" : false,
            "transform" : {
              "type" : "rule",
              "attributes" : {
                "name" : "Create Unique LDAP Attribute"
              }
            },
            "isMultiValued" : false,
            "name" : "userName",
            "attributes" : {
              "template" : "${firstname}.${lastname}${uniqueCounter}",
              "cloudMaxUniqueChecks" : "50",
              "cloudMaxSize" : "20",
              "cloudRequired" : "true"
            },
            "type" : "string"
          }, {
            "isRequired" : false,
            "transform" : {
              "type" : "rule",
              "attributes" : {
                "name" : "Create Unique LDAP Attribute"
              }
            },
            "isMultiValued" : false,
            "name" : "userName",
            "attributes" : {
              "template" : "${firstname}.${lastname}${uniqueCounter}",
              "cloudMaxUniqueChecks" : "50",
              "cloudMaxSize" : "20",
              "cloudRequired" : "true"
            },
            "type" : "string"
          } ],
          "usageType" : "CREATE"
        } # ProvisioningPolicyDto | 

    try:
        # Update Provisioning Policy by UsageType
        new_provisioning_policy_dto = ProvisioningPolicyDto()
        new_provisioning_policy_dto.from_json(provisioning_policy_dto)
        results =SourcesApi(api_client).put_provisioning_policy(source_id, usage_type, new_provisioning_policy_dto)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_provisioning_policy(source_id, usage_type, new_provisioning_policy_dto)
        print("The response of SourcesApi->put_provisioning_policy:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->put_provisioning_policy: %s\n" % e)
```



[[Back to top]](#) 

## put-source
Update Source (Full)
Use this API to update a source in Identity Security Cloud (ISC), using a full object representation. This means that when you use this API, it completely replaces the existing source configuration.

These fields are immutable, so they cannot be changed:

* id
* type
* authoritative
* connector
* connectorClass
* passwordPolicies

Attempts to modify these fields will result in a 400 error.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-source)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.
 Body  | source | [**Source**](../models/source) | True  | 

### Return type
[**Source**](../models/source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Source object. Any passwords will only show the the encrypted cipher-text so that they aren&#39;t decryptable in Identity Security Cloud (ISC) cloud-based services, per ISC security design. | Source |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.source import Source
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    source = {
          "cluster" : {
            "name" : "Corporate Cluster",
            "id" : "2c9180866166b5b0016167c32ef31a66",
            "type" : "CLUSTER"
          },
          "deleteThreshold" : 10,
          "connectorId" : "active-directory",
          "description" : "This is the corporate directory.",
          "type" : "OpenLDAP - Direct",
          "connectorClass" : "sailpoint.connector.LDAPConnector",
          "connectionType" : "file",
          "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
          "passwordPolicies" : [ {
            "type" : "PASSWORD_POLICY",
            "id" : "2c9180855d191c59015d291ceb053980",
            "name" : "Corporate Password Policy"
          }, {
            "type" : "PASSWORD_POLICY",
            "id" : "2c9180855d191c59015d291ceb057777",
            "name" : "Vendor Password Policy"
          } ],
          "modified" : "2024-01-23T18:08:50.897Z",
          "id" : "2c91808568c529c60168cca6f90c1324",
          "connectorImplementationId" : "delimited-file",
          "managerCorrelationRule" : {
            "name" : "Example Rule",
            "id" : "2c918085708c274401708c2a8a760001",
            "type" : "RULE"
          },
          "owner" : {
            "name" : "MyName",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "managementWorkgroup" : {
            "name" : "My Management Workgroup",
            "id" : "2c91808568c529c60168cca6f90c2222",
            "type" : "GOVERNANCE_GROUP"
          },
          "accountCorrelationRule" : {
            "name" : "Example Rule",
            "id" : "2c918085708c274401708c2a8a760001",
            "type" : "RULE"
          },
          "authoritative" : false,
          "connectorAttributes" : {
            "healthCheckTimeout" : 30,
            "authSearchAttributes" : [ "cn", "uid", "mail" ]
          },
          "created" : "2022-02-08T14:50:03.827Z",
          "managerCorrelationMapping" : {
            "accountAttributeName" : "manager",
            "identityAttributeName" : "manager"
          },
          "credentialProviderEnabled" : false,
          "accountCorrelationConfig" : {
            "name" : "Directory [source-62867] Account Correlation",
            "id" : "2c9180855d191c59015d28583727245a",
            "type" : "ACCOUNT_CORRELATION_CONFIG"
          },
          "connector" : "active-directory",
          "healthy" : true,
          "schemas" : [ {
            "type" : "CONNECTOR_SCHEMA",
            "id" : "2c9180835d191a86015d28455b4b232a",
            "name" : "account"
          }, {
            "type" : "CONNECTOR_SCHEMA",
            "id" : "2c9180835d191a86015d28455b4b232b",
            "name" : "group"
          } ],
          "name" : "My Source",
          "connectorName" : "Active Directory",
          "category" : "CredentialProvider",
          "beforeProvisioningRule" : {
            "name" : "Example Rule",
            "id" : "2c918085708c274401708c2a8a760001",
            "type" : "RULE"
          },
          "status" : "SOURCE_STATE_HEALTHY",
          "since" : "2021-09-28T15:48:29.3801666300Z"
        } # Source | 

    try:
        # Update Source (Full)
        new_source = Source()
        new_source.from_json(source)
        results =SourcesApi(api_client).put_source(id, new_source)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_source(id, new_source)
        print("The response of SourcesApi->put_source:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->put_source: %s\n" % e)
```



[[Back to top]](#) 

## put-source-attr-sync-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update Attribute Sync Config
Replaces the attribute synchronization configuration for the source specified by the given ID with the configuration provided in the request body. Only the "enabled" field of the values in the "attributes" array is mutable. Attempting to change other attributes or add new values to the "attributes" array will result in an error.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-source-attr-sync-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | attr_sync_source_config | [**AttrSyncSourceConfig**](../models/attr-sync-source-config) | True  | 

### Return type
[**AttrSyncSourceConfig**](../models/attr-sync-source-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated attribute synchronization configuration for a source | AttrSyncSourceConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.attr_sync_source_config import AttrSyncSourceConfig
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    attr_sync_source_config = {
          "attributes" : [ {
            "name" : "email",
            "displayName" : "Email",
            "enabled" : true,
            "target" : "mail"
          }, {
            "name" : "firstname",
            "displayName" : "First Name",
            "enabled" : false,
            "target" : "givenName"
          } ],
          "source" : {
            "name" : "HR Active Directory",
            "id" : "2c9180835d191a86015d28455b4b232a",
            "type" : "SOURCE"
          }
        } # AttrSyncSourceConfig | 

    try:
        # Update Attribute Sync Config
        new_attr_sync_source_config = AttrSyncSourceConfig()
        new_attr_sync_source_config.from_json(attr_sync_source_config)
        results =SourcesApi(api_client).put_source_attr_sync_config(id, x_sail_point_experimental, new_attr_sync_source_config)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_source_attr_sync_config(id, x_sail_point_experimental, new_attr_sync_source_config)
        print("The response of SourcesApi->put_source_attr_sync_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->put_source_attr_sync_config: %s\n" % e)
```



[[Back to top]](#) 

## put-source-schema
Update Source Schema (Full)
This API will completely replace an existing Schema with the submitted payload. Some fields of the Schema cannot be updated. These fields are listed below.

* id
* name
* created
* modified

Any attempt to modify these fields will result in an error response with a status code of 400.

> `id` must remain in the request body, but it cannot be changed.  If `id` is omitted from the request body, the result will be a 400 error.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-source-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
Path   | schema_id | **str** | True  | The Schema id.
 Body  | model_schema | [**ModelSchema**](../models/model-schema) | True  | 

### Return type
[**ModelSchema**](../models/model-schema)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Schema was successfully replaced. | ModelSchema |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.model_schema import ModelSchema
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema id. # str | The Schema id.
    model_schema = sailpoint.v2024.ModelSchema() # ModelSchema | 

    try:
        # Update Source Schema (Full)
        new_model_schema = ModelSchema()
        new_model_schema.from_json(model_schema)
        results =SourcesApi(api_client).put_source_schema(source_id, schema_id, new_model_schema)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_source_schema(source_id, schema_id, new_model_schema)
        print("The response of SourcesApi->put_source_schema:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->put_source_schema: %s\n" % e)
```



[[Back to top]](#) 

## sync-attributes-for-source
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Synchronize single source attributes.
This end-point performs attribute synchronization for a selected source.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/sync-attributes-for-source)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Source id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSyncJob**](../models/source-sync-job)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | A Source Sync job | SourceSyncJob |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.source_sync_job import SourceSyncJob
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'id_example' # str | The Source id # str | The Source id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Synchronize single source attributes.
        
        results =SourcesApi(api_client).sync_attributes_for_source(id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).sync_attributes_for_source(id, x_sail_point_experimental)
        print("The response of SourcesApi->sync_attributes_for_source:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->sync_attributes_for_source: %s\n" % e)
```



[[Back to top]](#) 

## test-source-configuration
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Test configuration for source connector
This endpoint performs a more detailed validation of the source''s configuration that can take longer than the lighter weight credential validation performed by the checkConnection API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/test-source-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the Source
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**StatusResponse**](../models/status-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The result of testing source connector configuration with response from it. | StatusResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.status_response import StatusResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = 'cef3ee201db947c5912551015ba0c679' # str | The ID of the Source # str | The ID of the Source
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Test configuration for source connector
        
        results =SourcesApi(api_client).test_source_configuration(source_id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).test_source_configuration(source_id, x_sail_point_experimental)
        print("The response of SourcesApi->test_source_configuration:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->test_source_configuration: %s\n" % e)
```



[[Back to top]](#) 

## test-source-connection
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Check connection for source connector.
This endpoint validates that the configured credentials are valid and will properly authenticate with the source identified by the sourceId path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/test-source-connection)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the Source.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**StatusResponse**](../models/status-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The result of checking connection to the source connector with response from it. | StatusResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.status_response import StatusResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = 'cef3ee201db947c5912551015ba0c679' # str | The ID of the Source. # str | The ID of the Source.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Check connection for source connector.
        
        results =SourcesApi(api_client).test_source_connection(source_id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).test_source_connection(source_id, x_sail_point_experimental)
        print("The response of SourcesApi->test_source_connection:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->test_source_connection: %s\n" % e)
```



[[Back to top]](#) 

## update-password-policy-holders
Update Password Policy
This API can be used to set up or update Password Policy in IdentityNow for the specified Source.
Source must support PASSWORD feature.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-password-policy-holders)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id
 Body  | password_policy_holders_dto_inner | [**[]PasswordPolicyHoldersDtoInner**](../models/password-policy-holders-dto-inner) | True  | 

### Return type
[**List[PasswordPolicyHoldersDtoInner]**](../models/password-policy-holders-dto-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Password Policies | List[PasswordPolicyHoldersDtoInner] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.password_policy_holders_dto_inner import PasswordPolicyHoldersDtoInner
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    [sailpoint.v2024.PasswordPolicyHoldersDtoInner()] # List[PasswordPolicyHoldersDtoInner] | 
     password_policy_holders_dto_inner = [sailpoint.v2024.PasswordPolicyHoldersDtoInner()] # List[PasswordPolicyHoldersDtoInner] | 
    

    try:
        # Update Password Policy
        new_password_policy_holders_dto_inner = PasswordPolicyHoldersDtoInner()
        new_password_policy_holders_dto_inner.from_json(password_policy_holders_dto_inner)
        results =SourcesApi(api_client).update_password_policy_holders(source_id, new_password_policy_holders_dto_inner)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_password_policy_holders(source_id, new_password_policy_holders_dto_inner)
        print("The response of SourcesApi->update_password_policy_holders:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->update_password_policy_holders: %s\n" % e)
```



[[Back to top]](#) 

## update-provisioning-policies-in-bulk
Bulk Update Provisioning Policies
This end-point updates a list of provisioning policies on the specified source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-provisioning-policies-in-bulk)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
 Body  | provisioning_policy_dto | [**[]ProvisioningPolicyDto**](../models/provisioning-policy-dto) | True  | 

### Return type
[**List[ProvisioningPolicyDto]**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of the ProvisioningPolicyDto was successfully replaced. | List[ProvisioningPolicyDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.provisioning_policy_dto import ProvisioningPolicyDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    [sailpoint.v2024.ProvisioningPolicyDto()] # List[ProvisioningPolicyDto] | 
     provisioning_policy_dto = {
          "name" : "example provisioning policy for inactive identities",
          "description" : "this provisioning policy creates access based on an identity going inactive",
          "fields" : [ {
            "isRequired" : false,
            "transform" : {
              "type" : "rule",
              "attributes" : {
                "name" : "Create Unique LDAP Attribute"
              }
            },
            "isMultiValued" : false,
            "name" : "userName",
            "attributes" : {
              "template" : "${firstname}.${lastname}${uniqueCounter}",
              "cloudMaxUniqueChecks" : "50",
              "cloudMaxSize" : "20",
              "cloudRequired" : "true"
            },
            "type" : "string"
          }, {
            "isRequired" : false,
            "transform" : {
              "type" : "rule",
              "attributes" : {
                "name" : "Create Unique LDAP Attribute"
              }
            },
            "isMultiValued" : false,
            "name" : "userName",
            "attributes" : {
              "template" : "${firstname}.${lastname}${uniqueCounter}",
              "cloudMaxUniqueChecks" : "50",
              "cloudMaxSize" : "20",
              "cloudRequired" : "true"
            },
            "type" : "string"
          } ],
          "usageType" : "CREATE"
        } # List[ProvisioningPolicyDto] | 
    

    try:
        # Bulk Update Provisioning Policies
        new_provisioning_policy_dto = ProvisioningPolicyDto()
        new_provisioning_policy_dto.from_json(provisioning_policy_dto)
        results =SourcesApi(api_client).update_provisioning_policies_in_bulk(source_id, new_provisioning_policy_dto)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_provisioning_policies_in_bulk(source_id, new_provisioning_policy_dto)
        print("The response of SourcesApi->update_provisioning_policies_in_bulk:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->update_provisioning_policies_in_bulk: %s\n" % e)
```



[[Back to top]](#) 

## update-provisioning-policy
Partial update of Provisioning Policy
This API selectively updates an existing Provisioning Policy using a JSONPatch payload.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-provisioning-policy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
Path   | usage_type | [**UsageType**](../models/usage-type) | True  | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | The JSONPatch payload used to update the schema.

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The ProvisioningPolicyDto was successfully updated. | ProvisioningPolicyDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation
from sailpoint.v2024.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.v2024.models.usage_type import UsageType
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    usage_type = sailpoint.v2024.UsageType() # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
    [{op=add, path=/fields/0, value={name=email, transform={type=identityAttribute, attributes={name=email}}, attributes={}, isRequired=false, type=string, isMultiValued=false}}] # List[JsonPatchOperation] | The JSONPatch payload used to update the schema.
     json_patch_operation = {
          "op" : "replace",
          "path" : "/description",
          "value" : "New description"
        } # List[JsonPatchOperation] | The JSONPatch payload used to update the schema.
    

    try:
        # Partial update of Provisioning Policy
        new_json_patch_operation = JsonPatchOperation()
        new_json_patch_operation.from_json(json_patch_operation)
        results =SourcesApi(api_client).update_provisioning_policy(source_id, usage_type, new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_provisioning_policy(source_id, usage_type, new_json_patch_operation)
        print("The response of SourcesApi->update_provisioning_policy:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->update_provisioning_policy: %s\n" % e)
```



[[Back to top]](#) 

## update-source
Update Source (Partial)
Use this API to partially update a source in Identity Security Cloud (ISC), using a list of patch operations according to the
[JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

These fields are immutable, so they cannot be changed:

* id
* type
* authoritative
* created
* modified
* connector
* connectorClass
* passwordPolicies

Attempts to modify these fields will result in a 400 error.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-source)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).

### Return type
[**Source**](../models/source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Source object. Any passwords will only show the the encrypted cipher-text so that they aren&#39;t decryptable in Identity Security Cloud (ISC) cloud-based services, per ISC security design. | Source |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation
from sailpoint.v2024.models.source import Source
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    [{op=replace, path=/description, value=new description}] # List[JsonPatchOperation] | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).
     json_patch_operation = {
          "op" : "replace",
          "path" : "/description",
          "value" : "New description"
        } # List[JsonPatchOperation] | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).
    

    try:
        # Update Source (Partial)
        new_json_patch_operation = JsonPatchOperation()
        new_json_patch_operation.from_json(json_patch_operation)
        results =SourcesApi(api_client).update_source(id, new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_source(id, new_json_patch_operation)
        print("The response of SourcesApi->update_source:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->update_source: %s\n" % e)
```



[[Back to top]](#) 

## update-source-entitlement-request-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update Source Entitlement Request Configuration
This API replaces the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-source-entitlement-request-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | source_entitlement_request_config | [**SourceEntitlementRequestConfig**](../models/source-entitlement-request-config) | True  | 

### Return type
[**SourceEntitlementRequestConfig**](../models/source-entitlement-request-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Source Entitlement Request Configuration Details. | SourceEntitlementRequestConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.source_entitlement_request_config import SourceEntitlementRequestConfig
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    source_entitlement_request_config = {
          "accessRequestConfig" : {
            "denialCommentRequired" : false,
            "approvalSchemes" : [ {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            } ],
            "requestCommentRequired" : true
          }
        } # SourceEntitlementRequestConfig | 

    try:
        # Update Source Entitlement Request Configuration
        new_source_entitlement_request_config = SourceEntitlementRequestConfig()
        new_source_entitlement_request_config.from_json(source_entitlement_request_config)
        results =SourcesApi(api_client).update_source_entitlement_request_config(x_sail_point_experimental, new_source_entitlement_request_config)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_source_entitlement_request_config(x_sail_point_experimental, new_source_entitlement_request_config)
        print("The response of SourcesApi->update_source_entitlement_request_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->update_source_entitlement_request_config: %s\n" % e)
```



[[Back to top]](#) 

## update-source-schedule
Update Source Schedule (Partial)
Use this API to selectively update an existing Schedule using a JSONPatch payload. 

The following schedule fields are immutable and cannot be updated:

- type


[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-source-schedule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
Path   | schedule_type | **str** | True  | The Schedule type.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | The JSONPatch payload used to update the schedule.

### Return type
[**Schedule1**](../models/schedule1)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Schedule was successfully updated. | Schedule1 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation
from sailpoint.v2024.models.schedule1 import Schedule1
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schedule_type = 'ACCOUNT_AGGREGATION' # str | The Schedule type. # str | The Schedule type.
    [{op=replace, path=/cronExpression, value=0 0 6 * * ?}] # List[JsonPatchOperation] | The JSONPatch payload used to update the schedule.
     json_patch_operation = {
          "op" : "replace",
          "path" : "/description",
          "value" : "New description"
        } # List[JsonPatchOperation] | The JSONPatch payload used to update the schedule.
    

    try:
        # Update Source Schedule (Partial)
        new_json_patch_operation = JsonPatchOperation()
        new_json_patch_operation.from_json(json_patch_operation)
        results =SourcesApi(api_client).update_source_schedule(source_id, schedule_type, new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_source_schedule(source_id, schedule_type, new_json_patch_operation)
        print("The response of SourcesApi->update_source_schedule:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->update_source_schedule: %s\n" % e)
```



[[Back to top]](#) 

## update-source-schema
Update Source Schema (Partial)
Use this API to selectively update an existing Schema using a JSONPatch payload. 

The following schema fields are immutable and cannot be updated:

- id
- name
- created
- modified


To switch an account attribute to a group entitlement, you need to have the following in place:

- `isEntitlement: true`
- Must define a schema for the group and [add it to the source](https://developer.sailpoint.com/idn/api/v3/create-source-schema) before updating the `isGroup` flag.  For example, here is the `group` account attribute referencing a schema that defines the group:
```json
{
    "name": "groups",
    "type": "STRING",
    "schema": {
        "type": "CONNECTOR_SCHEMA",
        "id": "2c9180887671ff8c01767b4671fc7d60",
        "name": "group"
    },
    "description": "The groups, roles etc. that reference account group objects",
    "isMulti": true,
    "isEntitlement": true,
    "isGroup": true
}
```


[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-source-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
Path   | schema_id | **str** | True  | The Schema id.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | The JSONPatch payload used to update the schema.

### Return type
[**ModelSchema**](../models/model-schema)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Schema was successfully updated. | ModelSchema |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sources_api import SourcesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation
from sailpoint.v2024.models.model_schema import ModelSchema
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema id. # str | The Schema id.
    [{op=add, path=/attributes/-, value={name=location, type=STRING, schema=null, description=Employee location, isMulti=false, isEntitlement=false, isGroup=false}}] # List[JsonPatchOperation] | The JSONPatch payload used to update the schema.
     json_patch_operation = {
          "op" : "replace",
          "path" : "/description",
          "value" : "New description"
        } # List[JsonPatchOperation] | The JSONPatch payload used to update the schema.
    

    try:
        # Update Source Schema (Partial)
        new_json_patch_operation = JsonPatchOperation()
        new_json_patch_operation.from_json(json_patch_operation)
        results =SourcesApi(api_client).update_source_schema(source_id, schema_id, new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_source_schema(source_id, schema_id, new_json_patch_operation)
        print("The response of SourcesApi->update_source_schema:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SourcesApi->update_source_schema: %s\n" % e)
```



[[Back to top]](#) 



