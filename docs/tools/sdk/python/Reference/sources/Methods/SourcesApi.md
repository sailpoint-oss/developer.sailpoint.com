---
id: sources
title: Sources
pagination_label: Sources
sidebar_label: Sources
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sources', 'Sources'] 
slug: /tools/sdk/python/sources/methods/sources
tags: ['SDK', 'Software Development Kit', 'Sources', 'Sources']
---

# sailpoint.sources.SourcesApi
  Use this API to implement and customize source functionality. 
With source functionality in place, organizations can use Identity Security Cloud to connect their various sources and user data sets and manage access across all those different sources in a secure, scalable way. 

[Sources](https://documentation.sailpoint.com/saas/help/sources/index.html) refer to the Identity Security Cloud representations for external applications, databases, and directory management systems that maintain their own sets of users, like Dropbox, GitHub, and Workday, for example.
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
Refer to [Deleting Sources](https://documentation.sailpoint.com/saas/help/sources/index.html#deleting-sources) for more information about deleting sources. 

Well organized, mapped out connections between sources and Identity Security Cloud are essential to achieving comprehensive identity access governance across all the source systems organizations need. 
Refer to [Managing Sources](https://documentation.sailpoint.com/saas/help/sources/index.html) for more information about all the different things admins can do with sources once they are connected.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-provisioning-policy-v1**](#create-provisioning-policy-v1) | **POST** `/sources/v1/{sourceId}/provisioning-policies` | Create provisioning policy
[**create-source-schedule-v1**](#create-source-schedule-v1) | **POST** `/sources/v1/{sourceId}/schedules` | Create schedule on source
[**create-source-schema-v1**](#create-source-schema-v1) | **POST** `/sources/v1/{sourceId}/schemas` | Create schema on source
[**create-source-v1**](#create-source-v1) | **POST** `/sources/v1` | Creates a source in identitynow.
[**delete-accounts-async-v1**](#delete-accounts-async-v1) | **POST** `/sources/v1/{id}/remove-accounts` | Remove all accounts in source
[**delete-native-change-detection-config-v1**](#delete-native-change-detection-config-v1) | **DELETE** `/sources/v1/{sourceId}/native-change-detection-config` | Delete native change detection configuration
[**delete-provisioning-policy-v1**](#delete-provisioning-policy-v1) | **DELETE** `/sources/v1/{sourceId}/provisioning-policies/{usageType}` | Delete provisioning policy by usagetype
[**delete-source-schedule-v1**](#delete-source-schedule-v1) | **DELETE** `/sources/v1/{sourceId}/schedules/{scheduleType}` | Delete source schedule by type.
[**delete-source-schema-v1**](#delete-source-schema-v1) | **DELETE** `/sources/v1/{sourceId}/schemas/{schemaId}` | Delete source schema by id
[**delete-source-v1**](#delete-source-v1) | **DELETE** `/sources/v1/{id}` | Delete source by id
[**get-account-delete-approval-config-v1**](#get-account-delete-approval-config-v1) | **GET** `/sources/v1/{sourceId}/approval-config/account-delete` | Human Account Deletion Approval Config
[**get-accounts-schema-v1**](#get-accounts-schema-v1) | **GET** `/sources/v1/{id}/schemas/accounts` | Downloads source accounts schema template
[**get-correlation-config-v1**](#get-correlation-config-v1) | **GET** `/sources/v1/{id}/correlation-config` | Get source correlation configuration
[**get-entitlements-schema-v1**](#get-entitlements-schema-v1) | **GET** `/sources/v1/{id}/schemas/entitlements` | Downloads source entitlements schema template
[**get-machine-account-deletion-approval-config-by-source-v1**](#get-machine-account-deletion-approval-config-by-source-v1) | **GET** `/sources/v1/{sourceId}/approval-config/machine-account-delete` | Machine Account Deletion Approval Config
[**get-native-change-detection-config-v1**](#get-native-change-detection-config-v1) | **GET** `/sources/v1/{sourceId}/native-change-detection-config` | Native change detection configuration
[**get-provisioning-policy-v1**](#get-provisioning-policy-v1) | **GET** `/sources/v1/{sourceId}/provisioning-policies/{usageType}` | Get provisioning policy by usagetype
[**get-source-attr-sync-config-v1**](#get-source-attr-sync-config-v1) | **GET** `/sources/v1/{id}/attribute-sync-config` | Attribute sync config
[**get-source-config-v1**](#get-source-config-v1) | **GET** `/sources/v1/{id}/connectors/source-config` | Gets source config with language-translations
[**get-source-connections-v1**](#get-source-connections-v1) | **GET** `/sources/v1/{sourceId}/connections` | Get source connections by id
[**get-source-entitlement-request-config-v1**](#get-source-entitlement-request-config-v1) | **GET** `/sources/v1/{id}/entitlement-request-config` | Get source entitlement request configuration
[**get-source-health-v1**](#get-source-health-v1) | **GET** `/sources/v1/{sourceId}/source-health` | Fetches source health by id
[**get-source-schedule-v1**](#get-source-schedule-v1) | **GET** `/sources/v1/{sourceId}/schedules/{scheduleType}` | Get source schedule by type
[**get-source-schedules-v1**](#get-source-schedules-v1) | **GET** `/sources/v1/{sourceId}/schedules` | List schedules on source
[**get-source-schema-v1**](#get-source-schema-v1) | **GET** `/sources/v1/{sourceId}/schemas/{schemaId}` | Get source schema by id
[**get-source-schemas-v1**](#get-source-schemas-v1) | **GET** `/sources/v1/{sourceId}/schemas` | List schemas on source
[**get-source-v1**](#get-source-v1) | **GET** `/sources/v1/{id}` | Get source by id
[**import-accounts-schema-v1**](#import-accounts-schema-v1) | **POST** `/sources/v1/{id}/schemas/accounts` | Uploads source accounts schema template
[**import-accounts-v1**](#import-accounts-v1) | **POST** `/sources/v1/{id}/load-accounts` | Account aggregation
[**import-connector-file-v1**](#import-connector-file-v1) | **POST** `/sources/v1/{sourceId}/upload-connector-file` | Upload connector file to source
[**import-entitlements-schema-v1**](#import-entitlements-schema-v1) | **POST** `/sources/v1/{id}/schemas/entitlements` | Uploads source entitlements schema template
[**import-entitlements-v1**](#import-entitlements-v1) | **POST** `/sources/v1/{sourceId}/load-entitlements` | Entitlement aggregation
[**import-uncorrelated-accounts-v1**](#import-uncorrelated-accounts-v1) | **POST** `/sources/v1/{id}/load-uncorrelated-accounts` | Process uncorrelated accounts
[**list-password-policy-holders-on-source-v1**](#list-password-policy-holders-on-source-v1) | **GET** `/sources/v1/{sourceId}/password-policies` | Get Password Policy for source
[**list-provisioning-policies-v1**](#list-provisioning-policies-v1) | **GET** `/sources/v1/{sourceId}/provisioning-policies` | Lists provisioningpolicies
[**list-sources-v1**](#list-sources-v1) | **GET** `/sources/v1` | Lists all sources in identitynow.
[**ping-cluster-v1**](#ping-cluster-v1) | **POST** `/sources/v1/{sourceId}/connector/ping-cluster` | Ping cluster for source connector
[**put-correlation-config-v1**](#put-correlation-config-v1) | **PUT** `/sources/v1/{id}/correlation-config` | Update source correlation configuration
[**put-native-change-detection-config-v1**](#put-native-change-detection-config-v1) | **PUT** `/sources/v1/{sourceId}/native-change-detection-config` | Update native change detection configuration
[**put-provisioning-policy-v1**](#put-provisioning-policy-v1) | **PUT** `/sources/v1/{sourceId}/provisioning-policies/{usageType}` | Update provisioning policy by usagetype
[**put-source-attr-sync-config-v1**](#put-source-attr-sync-config-v1) | **PUT** `/sources/v1/{id}/attribute-sync-config` | Update attribute sync config
[**put-source-schema-v1**](#put-source-schema-v1) | **PUT** `/sources/v1/{sourceId}/schemas/{schemaId}` | Update source schema (full)
[**put-source-v1**](#put-source-v1) | **PUT** `/sources/v1/{id}` | Update source (full)
[**search-resource-objects-v1**](#search-resource-objects-v1) | **POST** `/sources/v1/{sourceId}/connector/peek-resource-objects` | Peek source connector&#39;s resource objects
[**sync-attributes-for-source-v1**](#sync-attributes-for-source-v1) | **POST** `/sources/v1/{id}/synchronize-attributes` | Synchronize single source attributes.
[**test-source-configuration-v1**](#test-source-configuration-v1) | **POST** `/sources/v1/{sourceId}/connector/test-configuration` | Test configuration for source connector
[**test-source-connection-v1**](#test-source-connection-v1) | **POST** `/sources/v1/{sourceId}/connector/check-connection` | Check connection for source connector.
[**update-account-deletion-approval-config-v1**](#update-account-deletion-approval-config-v1) | **PATCH** `/sources/v1/{sourceId}/approval-config/account-delete` | Human Account Deletion Approval Config
[**update-machine-account-deletion-approval-config-v1**](#update-machine-account-deletion-approval-config-v1) | **PATCH** `/sources/v1/{sourceId}/approval-config/machine-account-delete` | Machine Account Deletion Approval Config
[**update-password-policy-holders-v1**](#update-password-policy-holders-v1) | **PATCH** `/sources/v1/{sourceId}/password-policies` | Update password policy
[**update-provisioning-policies-in-bulk-v1**](#update-provisioning-policies-in-bulk-v1) | **POST** `/sources/v1/{sourceId}/provisioning-policies/bulk-update` | Bulk update provisioning policies
[**update-provisioning-policy-v1**](#update-provisioning-policy-v1) | **PATCH** `/sources/v1/{sourceId}/provisioning-policies/{usageType}` | Partial update of provisioning policy
[**update-source-entitlement-request-config-v1**](#update-source-entitlement-request-config-v1) | **PUT** `/sources/v1/{id}/entitlement-request-config` | Update source entitlement request configuration
[**update-source-schedule-v1**](#update-source-schedule-v1) | **PATCH** `/sources/v1/{sourceId}/schedules/{scheduleType}` | Update source schedule (partial)
[**update-source-schema-v1**](#update-source-schema-v1) | **PATCH** `/sources/v1/{sourceId}/schemas/{schemaId}` | Update source schema (partial)
[**update-source-v1**](#update-source-v1) | **PATCH** `/sources/v1/{id}` | Update source (partial)


## create-provisioning-policy-v1
Create provisioning policy
This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-provisioning-policy-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id
 Body  | provisioningpolicydto | [**Provisioningpolicydto**](../models/provisioningpolicydto) | True  | 

### Return type
[**Provisioningpolicydto**](../models/provisioningpolicydto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created ProvisioningPolicyDto object | Provisioningpolicydto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.provisioningpolicydto import Provisioningpolicydto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id # str | The Source id
    provisioningpolicydto = '''{"name":"Account","description":"Account Provisioning Policy","usageType":"CREATE","fields":[{"name":"displayName","transform":{"type":"identityAttribute","attributes":{"name":"displayName"}},"attributes":{},"isRequired":false,"type":"string","isMultiValued":false},{"name":"distinguishedName","transform":{"type":"usernameGenerator","attributes":{"sourceCheck":true,"patterns":["CN=$fi $ln,OU=zzUsers,OU=Demo,DC=seri,DC=sailpointdemo,DC=com","CN=$fti $ln,OU=zzUsers,OU=Demo,DC=seri,DC=sailpointdemo,DC=com","CN=$fn $ln,OU=zzUsers,OU=Demo,DC=seri,DC=sailpointdemo,DC=com","CN=$fn$ln${uniqueCounter},OU=zzUsers,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"],"fn":{"type":"identityAttribute","attributes":{"name":"firstname"}},"ln":{"type":"identityAttribute","attributes":{"name":"lastname"}},"fi":{"type":"substring","attributes":{"input":{"type":"identityAttribute","attributes":{"name":"firstname"}},"begin":0,"end":1}},"fti":{"type":"substring","attributes":{"input":{"type":"identityAttribute","attributes":{"name":"firstname"}},"begin":0,"end":2}}}},"attributes":{"cloudMaxUniqueChecks":"5","cloudMaxSize":"100","cloudRequired":"true"},"isRequired":false,"type":"","isMultiValued":false},{"name":"description","transform":{"type":"static","attributes":{"value":""}},"attributes":{},"isRequired":false,"type":"string","isMultiValued":false}]}''' # Provisioningpolicydto | 

    try:
        # Create provisioning policy
        new_provisioningpolicydto = Provisioningpolicydto.from_json(provisioningpolicydto)
        results = SourcesApi(api_client).create_provisioning_policy_v1(source_id=source_id, provisioningpolicydto=new_provisioningpolicydto)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).create_provisioning_policy_v1(source_id, new_provisioningpolicydto)
        print("The response of SourcesApi->create_provisioning_policy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->create_provisioning_policy_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-source-schedule-v1
Create schedule on source
Use this API to create a new schedule for a type on the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-source-schedule-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.
 Body  | schedule3 | [**Schedule3**](../models/schedule3) | True  | 

### Return type
[**Schedule3**](../models/schedule3)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | The schedule was successfully created on the specified source. | Schedule3 |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.schedule3 import Schedule3
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    schedule3 = '''sailpoint.sources.Schedule3()''' # Schedule3 | 

    try:
        # Create schedule on source
        new_schedule3 = Schedule3.from_json(schedule3)
        results = SourcesApi(api_client).create_source_schedule_v1(source_id=source_id, schedule3=new_schedule3)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).create_source_schedule_v1(source_id, new_schedule3)
        print("The response of SourcesApi->create_source_schedule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->create_source_schedule_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-source-schema-v1
Create schema on source
Use this API to create a new schema on the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-source-schema-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    model_schema = '''sailpoint.sources.ModelSchema()''' # ModelSchema | 

    try:
        # Create schema on source
        new_model_schema = ModelSchema.from_json(model_schema)
        results = SourcesApi(api_client).create_source_schema_v1(source_id=source_id, model_schema=new_model_schema)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).create_source_schema_v1(source_id, new_model_schema)
        print("The response of SourcesApi->create_source_schema_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->create_source_schema_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-source-v1
Creates a source in identitynow.
This creates a specific source with a full source JSON representation. Any passwords are submitted as plain-text and encrypted upon receipt in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-source-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.source import Source
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source = '''sailpoint.sources.Source()''' # Source | 
    provision_as_csv = false # bool | If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don't set this query parameter and you attempt to set the `type` attribute directly, the request won't correctly generate the source.   (optional) # bool | If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don't set this query parameter and you attempt to set the `type` attribute directly, the request won't correctly generate the source.   (optional)

    try:
        # Creates a source in identitynow.
        new_source = Source.from_json(source)
        results = SourcesApi(api_client).create_source_v1(source=new_source)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).create_source_v1(new_source, provision_as_csv)
        print("The response of SourcesApi->create_source_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->create_source_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-accounts-async-v1
Remove all accounts in source
Use this endpoint to remove all accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.

This endpoint is good for:
* Removing accounts that no longer exist on the source.
* Removing accounts that won't be aggregated following updates to the source configuration.
* Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-accounts-async-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id

### Return type
[**Taskresultdto**](../models/taskresultdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted. Returns task result details of removal request. | Taskresultdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.taskresultdto import Taskresultdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ebbf35756e1140699ce52b233121384a' # str | The source id # str | The source id

    try:
        # Remove all accounts in source
        
        results = SourcesApi(api_client).delete_accounts_async_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).delete_accounts_async_v1(id)
        print("The response of SourcesApi->delete_accounts_async_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->delete_accounts_async_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-native-change-detection-config-v1
Delete native change detection configuration
Deletes the native change detection configuration for the source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-native-change-detection-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The source id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id

    try:
        # Delete native change detection configuration
        
        SourcesApi(api_client).delete_native_change_detection_config_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).delete_native_change_detection_config_v1(source_id)
    except Exception as e:
        print("Exception when calling SourcesApi->delete_native_change_detection_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-provisioning-policy-v1
Delete provisioning policy by usagetype
Deletes the provisioning policy with the specified usage on an application.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-provisioning-policy-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source ID.
Path   | usage_type | [**Usagetype**](../models/usagetype) | True  | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.usagetype import Usagetype
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    usage_type = sailpoint.sources.Usagetype() # Usagetype | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. # Usagetype | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.

    try:
        # Delete provisioning policy by usagetype
        
        SourcesApi(api_client).delete_provisioning_policy_v1(source_id=source_id, usage_type=usage_type)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).delete_provisioning_policy_v1(source_id, usage_type)
    except Exception as e:
        print("Exception when calling SourcesApi->delete_provisioning_policy_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-source-schedule-v1
Delete source schedule by type.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-source-schedule-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schedule_type = 'ACCOUNT_AGGREGATION' # str | The Schedule type. # str | The Schedule type.

    try:
        # Delete source schedule by type.
        
        SourcesApi(api_client).delete_source_schedule_v1(source_id=source_id, schedule_type=schedule_type)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).delete_source_schedule_v1(source_id, schedule_type)
    except Exception as e:
        print("Exception when calling SourcesApi->delete_source_schedule_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-source-schema-v1
Delete source schema by id


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-source-schema-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema id. # str | The Schema id.

    try:
        # Delete source schema by id
        
        SourcesApi(api_client).delete_source_schema_v1(source_id=source_id, schema_id=schema_id)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).delete_source_schema_v1(source_id, schema_id)
    except Exception as e:
        print("Exception when calling SourcesApi->delete_source_schema_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-source-v1
Delete source by id
Use this API to delete a specific source in Identity Security Cloud (ISC).
The API removes all the accounts on the source first, and then it deletes the source. You can retrieve the actual task execution status with this method: GET `/task-status/{id}`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-source-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.

### Return type
[**DeleteSourceV1202Response**](../models/delete-source-v1202-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | DeleteSourceV1202Response |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.delete_source_v1202_response import DeleteSourceV1202Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.

    try:
        # Delete source by id
        
        results = SourcesApi(api_client).delete_source_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).delete_source_v1(id)
        print("The response of SourcesApi->delete_source_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->delete_source_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-account-delete-approval-config-v1
Human Account Deletion Approval Config
The endpoint retrieves the approval configuration for deleting human accounts from a specified source. It returns details such as whether approval is required, who the approvers are, and any additional approval settings. This helps administrators understand and manage the approval workflow for human account deletions in their organization. The response is provided as an AccountDeleteConfigDto object.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-account-delete-approval-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id

### Return type
[**Accountdeleteconfigdto**](../models/accountdeleteconfigdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with a AccountDeleteConfigDto for human account deletion approval config by sourceId. | Accountdeleteconfigdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.accountdeleteconfigdto import Accountdeleteconfigdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ha38f94347e94562b5bb8424a56498d8' # str | The Source id # str | The Source id

    try:
        # Human Account Deletion Approval Config
        
        results = SourcesApi(api_client).get_account_delete_approval_config_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_account_delete_approval_config_v1(source_id)
        print("The response of SourcesApi->get_account_delete_approval_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_account_delete_approval_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-accounts-schema-v1
Downloads source accounts schema template
This API downloads the CSV schema that defines the account attributes on a source.
>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-accounts-schema-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id

    try:
        # Downloads source accounts schema template
        
        SourcesApi(api_client).get_accounts_schema_v1(id=id)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).get_accounts_schema_v1(id)
    except Exception as e:
        print("Exception when calling SourcesApi->get_accounts_schema_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-correlation-config-v1
Get source correlation configuration
This API returns the existing correlation configuration for a source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-correlation-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id

### Return type
[**Correlationconfig**](../models/correlationconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Correlation configuration for a source | Correlationconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.correlationconfig import Correlationconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id

    try:
        # Get source correlation configuration
        
        results = SourcesApi(api_client).get_correlation_config_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_correlation_config_v1(id)
        print("The response of SourcesApi->get_correlation_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_correlation_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlements-schema-v1
Downloads source entitlements schema template
This API downloads the CSV schema that defines the entitlement attributes on a source.

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlements-schema-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    schema_name = '?schemaName=group' # str | Name of entitlement schema (optional) # str | Name of entitlement schema (optional)

    try:
        # Downloads source entitlements schema template
        
        SourcesApi(api_client).get_entitlements_schema_v1(id=id)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).get_entitlements_schema_v1(id, schema_name)
    except Exception as e:
        print("Exception when calling SourcesApi->get_entitlements_schema_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-account-deletion-approval-config-by-source-v1
Machine Account Deletion Approval Config
Retrieves the machine account deletion approval configuration for a specific source. This endpoint returns details about the approval requirements, approvers, and comment settings that govern the deletion of machine accounts associated with the given source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-machine-account-deletion-approval-config-by-source-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | source id.

### Return type
[**Accountdeleteconfigdto**](../models/accountdeleteconfigdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with a AccountDeleteConfigDto for machine account deletion approval config by sourceId. | Accountdeleteconfigdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.accountdeleteconfigdto import Accountdeleteconfigdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'gt38f94347e94562b5bb8424a56498d8' # str | source id. # str | source id.

    try:
        # Machine Account Deletion Approval Config
        
        results = SourcesApi(api_client).get_machine_account_deletion_approval_config_by_source_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_machine_account_deletion_approval_config_by_source_v1(source_id)
        print("The response of SourcesApi->get_machine_account_deletion_approval_config_by_source_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_machine_account_deletion_approval_config_by_source_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-native-change-detection-config-v1
Native change detection configuration
This API returns the existing native change detection configuration for a source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-native-change-detection-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The source id

### Return type
[**Nativechangedetectionconfig**](../models/nativechangedetectionconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Native change detection configuration for a source | Nativechangedetectionconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.nativechangedetectionconfig import Nativechangedetectionconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id

    try:
        # Native change detection configuration
        
        results = SourcesApi(api_client).get_native_change_detection_config_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_native_change_detection_config_v1(source_id)
        print("The response of SourcesApi->get_native_change_detection_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_native_change_detection_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-provisioning-policy-v1
Get provisioning policy by usagetype
This end-point retrieves the ProvisioningPolicy with the specified usage on the specified Source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-provisioning-policy-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source ID.
Path   | usage_type | [**Usagetype**](../models/usagetype) | True  | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.

### Return type
[**Provisioningpolicydto**](../models/provisioningpolicydto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The requested ProvisioningPolicyDto was successfully retrieved. | Provisioningpolicydto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.provisioningpolicydto import Provisioningpolicydto
from sailpoint.sources.models.usagetype import Usagetype
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    usage_type = sailpoint.sources.Usagetype() # Usagetype | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. # Usagetype | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.

    try:
        # Get provisioning policy by usagetype
        
        results = SourcesApi(api_client).get_provisioning_policy_v1(source_id=source_id, usage_type=usage_type)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_provisioning_policy_v1(source_id, usage_type)
        print("The response of SourcesApi->get_provisioning_policy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_provisioning_policy_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-source-attr-sync-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Attribute sync config
This API returns the existing attribute synchronization configuration for a source specified by the given ID. The response contains all attributes, regardless of whether they enabled or not.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-source-attr-sync-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Attrsyncsourceconfig**](../models/attrsyncsourceconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Attribute synchronization configuration for a source | Attrsyncsourceconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.attrsyncsourceconfig import Attrsyncsourceconfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Attribute sync config
        
        results = SourcesApi(api_client).get_source_attr_sync_config_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_attr_sync_config_v1(id, x_sail_point_experimental)
        print("The response of SourcesApi->get_source_attr_sync_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_attr_sync_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-source-config-v1
Gets source config with language-translations
Looks up and returns the source config for the requested source id after populating the source config values and applying language translations.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-source-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Source id
  Query | locale | **str** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

### Return type
[**Connectordetail**](../models/connectordetail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Connector Detail object | Connectordetail |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.connectordetail import Connectordetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'cef3ee201db947c5912551015ba0c679' # str | The Source id # str | The Source id
    locale = 'en' # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

    try:
        # Gets source config with language-translations
        
        results = SourcesApi(api_client).get_source_config_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_config_v1(id, locale)
        print("The response of SourcesApi->get_source_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-source-connections-v1
Get source connections by id
Use this API to get all dependent Profiles, Attributes, Applications and Custom Transforms for a source by a specified ID in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-source-connections-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.

### Return type
[**Sourceconnectionsdto**](../models/sourceconnectionsdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Source Connections object. | Sourceconnectionsdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.sourceconnectionsdto import Sourceconnectionsdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.

    try:
        # Get source connections by id
        
        results = SourcesApi(api_client).get_source_connections_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_connections_v1(source_id)
        print("The response of SourcesApi->get_source_connections_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_connections_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-source-entitlement-request-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get source entitlement request configuration
This API gets the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-source-entitlement-request-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Source id
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Sourceentitlementrequestconfig**](../models/sourceentitlementrequestconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Source Entitlement Request Configuration Details. | Sourceentitlementrequestconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.sourceentitlementrequestconfig import Sourceentitlementrequestconfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get source entitlement request configuration
        
        results = SourcesApi(api_client).get_source_entitlement_request_config_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_entitlement_request_config_v1(id, x_sail_point_experimental)
        print("The response of SourcesApi->get_source_entitlement_request_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_entitlement_request_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-source-health-v1
Fetches source health by id
This endpoint fetches source health by source's id

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-source-health-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.

### Return type
[**Sourcehealthdto**](../models/sourcehealthdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Fetched source health successfully | Sourcehealthdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.sourcehealthdto import Sourcehealthdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.

    try:
        # Fetches source health by id
        
        results = SourcesApi(api_client).get_source_health_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_health_v1(source_id)
        print("The response of SourcesApi->get_source_health_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_health_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-source-schedule-v1
Get source schedule by type
Get the source schedule by type in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-source-schedule-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
Path   | schedule_type | **str** | True  | The Schedule type.

### Return type
[**Schedule3**](../models/schedule3)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The requested Schedule was successfully retrieved. | Schedule3 |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.schedule3 import Schedule3
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schedule_type = 'ACCOUNT_AGGREGATION' # str | The Schedule type. # str | The Schedule type.

    try:
        # Get source schedule by type
        
        results = SourcesApi(api_client).get_source_schedule_v1(source_id=source_id, schedule_type=schedule_type)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_schedule_v1(source_id, schedule_type)
        print("The response of SourcesApi->get_source_schedule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_schedule_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-source-schedules-v1
List schedules on source
Use this API to list the schedules that exist on the specified source in Identity Security Cloud (ISC).
:::info
This endpoint uses a **cron expression** to schedule a task, following standard **cron job syntax**.

For example, `0 0 12 1/1 * ? *` runs the task **daily at 12:00 PM**.

**Days of the week are represented as 1-7 (Sunday-Saturday).**
:::


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-source-schedules-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.

### Return type
[**List[Schedule3]**](../models/schedule3)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The schedules were successfully retrieved. | List[Schedule3] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.schedule3 import Schedule3
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.

    try:
        # List schedules on source
        
        results = SourcesApi(api_client).get_source_schedules_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_schedules_v1(source_id)
        print("The response of SourcesApi->get_source_schedules_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_schedules_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-source-schema-v1
Get source schema by id
Get the Source Schema by ID in IdentityNow.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-source-schema-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema id. # str | The Schema id.

    try:
        # Get source schema by id
        
        results = SourcesApi(api_client).get_source_schema_v1(source_id=source_id, schema_id=schema_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_schema_v1(source_id, schema_id)
        print("The response of SourcesApi->get_source_schema_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_schema_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-source-schemas-v1
List schemas on source
Use this API to list the schemas that exist on the specified source in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-source-schemas-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    include_types = 'group' # str | If set to 'group', then the account schema is filtered and only group schemas are returned. Only a value of 'group' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. (optional) # str | If set to 'group', then the account schema is filtered and only group schemas are returned. Only a value of 'group' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. (optional)
    include_names = 'account' # str | A comma-separated list of schema names to filter result. (optional) # str | A comma-separated list of schema names to filter result. (optional)

    try:
        # List schemas on source
        
        results = SourcesApi(api_client).get_source_schemas_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_schemas_v1(source_id, include_types, include_names)
        print("The response of SourcesApi->get_source_schemas_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_schemas_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-source-v1
Get source by id
Use this API to get a source by a specified ID in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-source-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.source import Source
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.

    try:
        # Get source by id
        
        results = SourcesApi(api_client).get_source_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_v1(id)
        print("The response of SourcesApi->get_source_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_v1: %s\n" % e)
```



[[Back to top]](#) 

## import-accounts-schema-v1
Uploads source accounts schema template
This API uploads a source schema template file to configure a source's account attributes.

To retrieve the file to modify and upload, log into Identity Now. 

Click **Admin** -> **Connections** -> **Sources** -> **`{SourceName}`** -> **Import Data** -> **Account Schema** -> **Options** -> **Download Schema**

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v1/import-accounts-schema-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Uploads source accounts schema template
        
        results = SourcesApi(api_client).import_accounts_schema_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_accounts_schema_v1(id, file)
        print("The response of SourcesApi->import_accounts_schema_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_accounts_schema_v1: %s\n" % e)
```



[[Back to top]](#) 

## import-accounts-v1
Account aggregation
Starts an account aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body.
You will also need to set the Content-Type header to `multipart/form-data`.

[API Spec](https://developer.sailpoint.com/docs/api/v1/import-accounts-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source Id
   | file | **bytearray** |   (optional) | The CSV file containing the source accounts to aggregate.
   | disable_optimization | **str** |   (optional) | Use this flag to reprocess every account whether or not the data has changed.

### Return type
[**Loadaccountstask**](../models/loadaccountstask)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Aggregate Accounts Task | Loadaccountstask |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.loadaccountstask import Loadaccountstask
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source Id # str | Source Id
    file = None # bytearray | The CSV file containing the source accounts to aggregate. (optional) # bytearray | The CSV file containing the source accounts to aggregate. (optional)
    disable_optimization = 'disable_optimization_example' # str | Use this flag to reprocess every account whether or not the data has changed. (optional) # str | Use this flag to reprocess every account whether or not the data has changed. (optional)

    try:
        # Account aggregation
        
        results = SourcesApi(api_client).import_accounts_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_accounts_v1(id, file, disable_optimization)
        print("The response of SourcesApi->import_accounts_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_accounts_v1: %s\n" % e)
```



[[Back to top]](#) 

## import-connector-file-v1
Upload connector file to source
This uploads a supplemental source connector file (like jdbc driver jars) to a source's S3 bucket. This also sends ETS and Audit events.

[API Spec](https://developer.sailpoint.com/docs/api/v1/import-connector-file-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.source import Source
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Upload connector file to source
        
        results = SourcesApi(api_client).import_connector_file_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_connector_file_v1(source_id, file)
        print("The response of SourcesApi->import_connector_file_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_connector_file_v1: %s\n" % e)
```



[[Back to top]](#) 

## import-entitlements-schema-v1
Uploads source entitlements schema template
This API uploads a source schema template file to configure a source's entitlement attributes.

To retrieve the file to modify and upload, log into Identity Now. 

Click **Admin** -> **Connections** -> **Sources** -> **`{SourceName}`** -> **Import Data** -> **Import Entitlements** -> **Download**

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v1/import-entitlements-schema-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    schema_name = '?schemaName=group' # str | Name of entitlement schema (optional) # str | Name of entitlement schema (optional)
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Uploads source entitlements schema template
        
        results = SourcesApi(api_client).import_entitlements_schema_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_entitlements_schema_v1(id, schema_name, file)
        print("The response of SourcesApi->import_entitlements_schema_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_entitlements_schema_v1: %s\n" % e)
```



[[Back to top]](#) 

## import-entitlements-v1
Entitlement aggregation
Starts an entitlement aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body. 
You will also need to set the Content-Type header to `multipart/form-data`.
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/import-entitlements-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source Id
   | file | **bytearray** |   (optional) | The CSV file containing the source entitlements to aggregate.

### Return type
[**Loadentitlementtask**](../models/loadentitlementtask)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Aggregate Entitlements Task | Loadentitlementtask |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.loadentitlementtask import Loadentitlementtask
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source Id # str | Source Id
    file = None # bytearray | The CSV file containing the source entitlements to aggregate. (optional) # bytearray | The CSV file containing the source entitlements to aggregate. (optional)

    try:
        # Entitlement aggregation
        
        results = SourcesApi(api_client).import_entitlements_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_entitlements_v1(source_id, file)
        print("The response of SourcesApi->import_entitlements_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_entitlements_v1: %s\n" % e)
```



[[Back to top]](#) 

## import-uncorrelated-accounts-v1
Process uncorrelated accounts
File is required for upload. You will also need to set the Content-Type header to `multipart/form-data`

[API Spec](https://developer.sailpoint.com/docs/api/v1/import-uncorrelated-accounts-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source Id
   | file | **bytearray** |   (optional) | 

### Return type
[**Loaduncorrelatedaccountstask**](../models/loaduncorrelatedaccountstask)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Uncorrelated Accounts Task | Loaduncorrelatedaccountstask |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.loaduncorrelatedaccountstask import Loaduncorrelatedaccountstask
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '75dbec1ebe154d5785da27b95e1dd5d7' # str | Source Id # str | Source Id
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Process uncorrelated accounts
        
        results = SourcesApi(api_client).import_uncorrelated_accounts_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_uncorrelated_accounts_v1(id, file)
        print("The response of SourcesApi->import_uncorrelated_accounts_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_uncorrelated_accounts_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-password-policy-holders-on-source-v1
Get Password Policy for source
This API can be used to get Password Policy in IdentityNow for the specified Source.
Source must support PASSWORD feature.


[API Spec](https://developer.sailpoint.com/docs/api/v1/list-password-policy-holders-on-source-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[PasswordpolicyholdersdtoInner]**](../models/passwordpolicyholdersdto-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Password Policies | List[PasswordpolicyholdersdtoInner] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.passwordpolicyholdersdto_inner import PasswordpolicyholdersdtoInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Get Password Policy for source
        
        results = SourcesApi(api_client).list_password_policy_holders_on_source_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).list_password_policy_holders_on_source_v1(source_id, offset, limit, count)
        print("The response of SourcesApi->list_password_policy_holders_on_source_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->list_password_policy_holders_on_source_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-provisioning-policies-v1
Lists provisioningpolicies
This end-point lists all the ProvisioningPolicies in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-provisioning-policies-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id
  Query | offset | **int** |   (optional) (default to 0) | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0.
  Query | limit | **int** |   (optional) (default to 250) | Limit        Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.

### Return type
[**List[Provisioningpolicydto]**](../models/provisioningpolicydto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of ProvisioningPolicyDto objects | List[Provisioningpolicydto] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.provisioningpolicydto import Provisioningpolicydto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id # str | The Source id
    offset = 0 # int | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit = 250 # int | Limit        Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int | Limit        Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)

    try:
        # Lists provisioningpolicies
        
        results = SourcesApi(api_client).list_provisioning_policies_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).list_provisioning_policies_v1(source_id, offset, limit)
        print("The response of SourcesApi->list_provisioning_policies_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->list_provisioning_policies_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-sources-v1
Lists all sources in identitynow.
This end-point lists all the sources in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-sources-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.source import Source
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
        # Lists all sources in identitynow.
        
        results = SourcesApi(api_client).list_sources_v1()
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).list_sources_v1(limit, offset, count, filters, sorters, for_subadmin, include_idn_source)
        print("The response of SourcesApi->list_sources_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->list_sources_v1: %s\n" % e)
```



[[Back to top]](#) 

## ping-cluster-v1
Ping cluster for source connector
This endpoint validates that the cluster being used by the source is reachable from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/ping-cluster-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the Source

### Return type
[**Statusresponse**](../models/statusresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The result of pinging connection with the source connector. | Statusresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.statusresponse import Statusresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'cef3ee201db947c5912551015ba0c679' # str | The ID of the Source # str | The ID of the Source

    try:
        # Ping cluster for source connector
        
        results = SourcesApi(api_client).ping_cluster_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).ping_cluster_v1(source_id)
        print("The response of SourcesApi->ping_cluster_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->ping_cluster_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-correlation-config-v1
Update source correlation configuration
Replaces the correlation configuration for the source specified by the given ID with the configuration provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-correlation-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id
 Body  | correlationconfig | [**Correlationconfig**](../models/correlationconfig) | True  | 

### Return type
[**Correlationconfig**](../models/correlationconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated correlation configuration for a source | Correlationconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.correlationconfig import Correlationconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id
    correlationconfig = '''sailpoint.sources.Correlationconfig()''' # Correlationconfig | 

    try:
        # Update source correlation configuration
        new_correlationconfig = Correlationconfig.from_json(correlationconfig)
        results = SourcesApi(api_client).put_correlation_config_v1(id=id, correlationconfig=new_correlationconfig)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_correlation_config_v1(id, new_correlationconfig)
        print("The response of SourcesApi->put_correlation_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->put_correlation_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-native-change-detection-config-v1
Update native change detection configuration
Replaces the native change detection configuration for the source specified by the given ID with the configuration provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-native-change-detection-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The source id
 Body  | nativechangedetectionconfig | [**Nativechangedetectionconfig**](../models/nativechangedetectionconfig) | True  | 

### Return type
[**Nativechangedetectionconfig**](../models/nativechangedetectionconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated native change detection configuration for a source | Nativechangedetectionconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.nativechangedetectionconfig import Nativechangedetectionconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id
    nativechangedetectionconfig = '''sailpoint.sources.Nativechangedetectionconfig()''' # Nativechangedetectionconfig | 

    try:
        # Update native change detection configuration
        new_nativechangedetectionconfig = Nativechangedetectionconfig.from_json(nativechangedetectionconfig)
        results = SourcesApi(api_client).put_native_change_detection_config_v1(source_id=source_id, nativechangedetectionconfig=new_nativechangedetectionconfig)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_native_change_detection_config_v1(source_id, new_nativechangedetectionconfig)
        print("The response of SourcesApi->put_native_change_detection_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->put_native_change_detection_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-provisioning-policy-v1
Update provisioning policy by usagetype
This end-point updates the provisioning policy with the specified usage on the specified source in IdentityNow.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-provisioning-policy-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source ID.
Path   | usage_type | [**Usagetype**](../models/usagetype) | True  | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.
 Body  | provisioningpolicydto | [**Provisioningpolicydto**](../models/provisioningpolicydto) | True  | 

### Return type
[**Provisioningpolicydto**](../models/provisioningpolicydto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The ProvisioningPolicyDto was successfully replaced. | Provisioningpolicydto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.provisioningpolicydto import Provisioningpolicydto
from sailpoint.sources.models.usagetype import Usagetype
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    usage_type = sailpoint.sources.Usagetype() # Usagetype | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. # Usagetype | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.
    provisioningpolicydto = '''sailpoint.sources.Provisioningpolicydto()''' # Provisioningpolicydto | 

    try:
        # Update provisioning policy by usagetype
        new_provisioningpolicydto = Provisioningpolicydto.from_json(provisioningpolicydto)
        results = SourcesApi(api_client).put_provisioning_policy_v1(source_id=source_id, usage_type=usage_type, provisioningpolicydto=new_provisioningpolicydto)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_provisioning_policy_v1(source_id, usage_type, new_provisioningpolicydto)
        print("The response of SourcesApi->put_provisioning_policy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->put_provisioning_policy_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-source-attr-sync-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update attribute sync config
Replaces the attribute synchronization configuration for the source specified by the given ID with the configuration provided in the request body. Only the "enabled" field of the values in the "attributes" array is mutable. Attempting to change other attributes or add new values to the "attributes" array will result in an error.


[API Spec](https://developer.sailpoint.com/docs/api/v1/put-source-attr-sync-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id
 Body  | attrsyncsourceconfig | [**Attrsyncsourceconfig**](../models/attrsyncsourceconfig) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Attrsyncsourceconfig**](../models/attrsyncsourceconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated attribute synchronization configuration for a source | Attrsyncsourceconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.attrsyncsourceconfig import Attrsyncsourceconfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id
    attrsyncsourceconfig = '''sailpoint.sources.Attrsyncsourceconfig()''' # Attrsyncsourceconfig | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update attribute sync config
        new_attrsyncsourceconfig = Attrsyncsourceconfig.from_json(attrsyncsourceconfig)
        results = SourcesApi(api_client).put_source_attr_sync_config_v1(id=id, attrsyncsourceconfig=new_attrsyncsourceconfig)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_source_attr_sync_config_v1(id, new_attrsyncsourceconfig, x_sail_point_experimental)
        print("The response of SourcesApi->put_source_attr_sync_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->put_source_attr_sync_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-source-schema-v1
Update source schema (full)
This API will completely replace an existing Schema with the submitted payload. Some fields of the Schema cannot be updated. These fields are listed below.

* id
* name
* created
* modified

Any attempt to modify these fields will result in an error response with a status code of 400.

> `id` must remain in the request body, but it cannot be changed.  If `id` is omitted from the request body, the result will be a 400 error.


[API Spec](https://developer.sailpoint.com/docs/api/v1/put-source-schema-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema id. # str | The Schema id.
    model_schema = '''sailpoint.sources.ModelSchema()''' # ModelSchema | 

    try:
        # Update source schema (full)
        new_model_schema = ModelSchema.from_json(model_schema)
        results = SourcesApi(api_client).put_source_schema_v1(source_id=source_id, schema_id=schema_id, model_schema=new_model_schema)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_source_schema_v1(source_id, schema_id, new_model_schema)
        print("The response of SourcesApi->put_source_schema_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->put_source_schema_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-source-v1
Update source (full)
Use this API to update a source in Identity Security Cloud (ISC), using a full object representation. This means that when you use this API, it completely replaces the existing source configuration.

These fields are immutable, so they cannot be changed:

* id
* type
* authoritative
* connector
* connectorClass
* passwordPolicies

Attempts to modify these fields will result in a 400 error.


[API Spec](https://developer.sailpoint.com/docs/api/v1/put-source-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.source import Source
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    source = '''sailpoint.sources.Source()''' # Source | 

    try:
        # Update source (full)
        new_source = Source.from_json(source)
        results = SourcesApi(api_client).put_source_v1(id=id, source=new_source)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_source_v1(id, new_source)
        print("The response of SourcesApi->put_source_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->put_source_v1: %s\n" % e)
```



[[Back to top]](#) 

## search-resource-objects-v1
Peek source connector's resource objects
Retrieves a sample of data returned from account and group aggregation requests.

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-resource-objects-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the Source
 Body  | resourceobjectsrequest | [**Resourceobjectsrequest**](../models/resourceobjectsrequest) | True  | 

### Return type
[**Resourceobjectsresponse**](../models/resourceobjectsresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of resource objects that was fetched from the source connector. | Resourceobjectsresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.resourceobjectsrequest import Resourceobjectsrequest
from sailpoint.sources.models.resourceobjectsresponse import Resourceobjectsresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'cef3ee201db947c5912551015ba0c679' # str | The ID of the Source # str | The ID of the Source
    resourceobjectsrequest = '''sailpoint.sources.Resourceobjectsrequest()''' # Resourceobjectsrequest | 

    try:
        # Peek source connector's resource objects
        new_resourceobjectsrequest = Resourceobjectsrequest.from_json(resourceobjectsrequest)
        results = SourcesApi(api_client).search_resource_objects_v1(source_id=source_id, resourceobjectsrequest=new_resourceobjectsrequest)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).search_resource_objects_v1(source_id, new_resourceobjectsrequest)
        print("The response of SourcesApi->search_resource_objects_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->search_resource_objects_v1: %s\n" % e)
```



[[Back to top]](#) 

## sync-attributes-for-source-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Synchronize single source attributes.
This end-point performs attribute synchronization for a selected source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/sync-attributes-for-source-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Source id
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Sourcesyncjob**](../models/sourcesyncjob)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | A Source Sync job | Sourcesyncjob |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.sourcesyncjob import Sourcesyncjob
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'id_example' # str | The Source id # str | The Source id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Synchronize single source attributes.
        
        results = SourcesApi(api_client).sync_attributes_for_source_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).sync_attributes_for_source_v1(id, x_sail_point_experimental)
        print("The response of SourcesApi->sync_attributes_for_source_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->sync_attributes_for_source_v1: %s\n" % e)
```



[[Back to top]](#) 

## test-source-configuration-v1
Test configuration for source connector
This endpoint performs a more detailed validation of the source''s configuration that can take longer than the lighter weight credential validation performed by the checkConnection API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-source-configuration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the Source

### Return type
[**Statusresponse**](../models/statusresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The result of testing source connector configuration with response from it. | Statusresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.statusresponse import Statusresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'cef3ee201db947c5912551015ba0c679' # str | The ID of the Source # str | The ID of the Source

    try:
        # Test configuration for source connector
        
        results = SourcesApi(api_client).test_source_configuration_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).test_source_configuration_v1(source_id)
        print("The response of SourcesApi->test_source_configuration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->test_source_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## test-source-connection-v1
Check connection for source connector.
This endpoint validates that the configured credentials are valid and will properly authenticate with the source identified by the sourceId path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-source-connection-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the Source.

### Return type
[**Statusresponse**](../models/statusresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The result of checking connection to the source connector with response from it. | Statusresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.statusresponse import Statusresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'cef3ee201db947c5912551015ba0c679' # str | The ID of the Source. # str | The ID of the Source.

    try:
        # Check connection for source connector.
        
        results = SourcesApi(api_client).test_source_connection_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).test_source_connection_v1(source_id)
        print("The response of SourcesApi->test_source_connection_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->test_source_connection_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-account-deletion-approval-config-v1
Human Account Deletion Approval Config
Updates the approval configuration for deleting human accounts for a specific source, identified by source ID. This endpoint allows administrators to modify settings such as whether approval is required, who the approvers are, and other approval-related options. The update is performed using a JSON Patch payload, and the response returns the updated AccountDeleteConfigDto object reflecting the new approval workflow configuration.


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-account-deletion-approval-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Human account source ID.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | The JSONPatch payload used to update the object.

### Return type
[**Accountdeleteconfigdto**](../models/accountdeleteconfigdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | This response indicates the PATCH operation succeeded and the API returns the updated AccountDeleteConfigDto object. | Accountdeleteconfigdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.accountdeleteconfigdto import Accountdeleteconfigdto
from sailpoint.sources.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '00eebcf881994e419d72e757fd30dc0e' # str | Human account source ID. # str | Human account source ID.
    jsonpatchoperation = '''[sailpoint.sources.Jsonpatchoperation()]''' # List[Jsonpatchoperation] | The JSONPatch payload used to update the object.

    try:
        # Human Account Deletion Approval Config
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = SourcesApi(api_client).update_account_deletion_approval_config_v1(source_id=source_id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_account_deletion_approval_config_v1(source_id, new_jsonpatchoperation)
        print("The response of SourcesApi->update_account_deletion_approval_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_account_deletion_approval_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-machine-account-deletion-approval-config-v1
Machine Account Deletion Approval Config
Use this endpoint to update the machine account deletion approval configuration for a specific source.
The update is performed using a JSON Patch payload, which allows partial modifications to the approval config.
This operation is typically used to change approval requirements, approvers, or comments settings for machine account deletion.
The endpoint expects the source ID as a path parameter and a valid JSON Patch array in the request body.


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-machine-account-deletion-approval-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | machine account source ID.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | The JSONPatch payload used to update the object.

### Return type
[**Accountdeleteconfigdto**](../models/accountdeleteconfigdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | This response indicates the PATCH operation succeeded and the API returns the updated AccountDeleteConfigDto object. | Accountdeleteconfigdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.accountdeleteconfigdto import Accountdeleteconfigdto
from sailpoint.sources.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '00eebcf881994e419d72e757fd30dc0e' # str | machine account source ID. # str | machine account source ID.
    jsonpatchoperation = '''[sailpoint.sources.Jsonpatchoperation()]''' # List[Jsonpatchoperation] | The JSONPatch payload used to update the object.

    try:
        # Machine Account Deletion Approval Config
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = SourcesApi(api_client).update_machine_account_deletion_approval_config_v1(source_id=source_id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_machine_account_deletion_approval_config_v1(source_id, new_jsonpatchoperation)
        print("The response of SourcesApi->update_machine_account_deletion_approval_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_machine_account_deletion_approval_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-password-policy-holders-v1
Update password policy
This API can be used to set up or update Password Policy in IdentityNow for the specified Source.
Source must support PASSWORD feature.


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-password-policy-holders-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id
 Body  | passwordpolicyholdersdto_inner | [**[]PasswordpolicyholdersdtoInner**](../models/passwordpolicyholdersdto-inner) | True  | 

### Return type
[**List[PasswordpolicyholdersdtoInner]**](../models/passwordpolicyholdersdto-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Password Policies | List[PasswordpolicyholdersdtoInner] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.passwordpolicyholdersdto_inner import PasswordpolicyholdersdtoInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    passwordpolicyholdersdto_inner = '''[sailpoint.sources.PasswordpolicyholdersdtoInner()]''' # List[PasswordpolicyholdersdtoInner] | 

    try:
        # Update password policy
        new_passwordpolicyholdersdto_inner = PasswordpolicyholdersdtoInner.from_json(passwordpolicyholdersdto_inner)
        results = SourcesApi(api_client).update_password_policy_holders_v1(source_id=source_id, passwordpolicyholdersdto_inner=new_passwordpolicyholdersdto_inner)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_password_policy_holders_v1(source_id, new_passwordpolicyholdersdto_inner)
        print("The response of SourcesApi->update_password_policy_holders_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_password_policy_holders_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-provisioning-policies-in-bulk-v1
Bulk update provisioning policies
This end-point updates a list of provisioning policies on the specified source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-provisioning-policies-in-bulk-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
 Body  | provisioningpolicydto | [**[]Provisioningpolicydto**](../models/provisioningpolicydto) | True  | 

### Return type
[**List[Provisioningpolicydto]**](../models/provisioningpolicydto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of the ProvisioningPolicyDto was successfully replaced. | List[Provisioningpolicydto] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.provisioningpolicydto import Provisioningpolicydto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    provisioningpolicydto = '''[sailpoint.sources.Provisioningpolicydto()]''' # List[Provisioningpolicydto] | 

    try:
        # Bulk update provisioning policies
        new_provisioningpolicydto = Provisioningpolicydto.from_json(provisioningpolicydto)
        results = SourcesApi(api_client).update_provisioning_policies_in_bulk_v1(source_id=source_id, provisioningpolicydto=new_provisioningpolicydto)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_provisioning_policies_in_bulk_v1(source_id, new_provisioningpolicydto)
        print("The response of SourcesApi->update_provisioning_policies_in_bulk_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_provisioning_policies_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-provisioning-policy-v1
Partial update of provisioning policy
This API selectively updates an existing Provisioning Policy using a JSONPatch payload.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-provisioning-policy-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
Path   | usage_type | [**Usagetype**](../models/usagetype) | True  | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | The JSONPatch payload used to update the schema.

### Return type
[**Provisioningpolicydto**](../models/provisioningpolicydto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The ProvisioningPolicyDto was successfully updated. | Provisioningpolicydto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.sources.models.provisioningpolicydto import Provisioningpolicydto
from sailpoint.sources.models.usagetype import Usagetype
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    usage_type = sailpoint.sources.Usagetype() # Usagetype | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. # Usagetype | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.
    jsonpatchoperation = '''[{"op":"add","path":"/fields/0","value":{"name":"email","transform":{"type":"identityAttribute","attributes":{"name":"email"}},"attributes":{},"isRequired":false,"type":"string","isMultiValued":false}}]''' # List[Jsonpatchoperation] | The JSONPatch payload used to update the schema.

    try:
        # Partial update of provisioning policy
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = SourcesApi(api_client).update_provisioning_policy_v1(source_id=source_id, usage_type=usage_type, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_provisioning_policy_v1(source_id, usage_type, new_jsonpatchoperation)
        print("The response of SourcesApi->update_provisioning_policy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_provisioning_policy_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-source-entitlement-request-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update source entitlement request configuration
This API replaces the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-source-entitlement-request-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Source id
 Body  | sourceentitlementrequestconfig | [**Sourceentitlementrequestconfig**](../models/sourceentitlementrequestconfig) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Sourceentitlementrequestconfig**](../models/sourceentitlementrequestconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Source Entitlement Request Configuration Details. | Sourceentitlementrequestconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.sourceentitlementrequestconfig import Sourceentitlementrequestconfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    sourceentitlementrequestconfig = '''{"accessRequestConfig":{"approvalSchemes":[]}}''' # Sourceentitlementrequestconfig | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update source entitlement request configuration
        new_sourceentitlementrequestconfig = Sourceentitlementrequestconfig.from_json(sourceentitlementrequestconfig)
        results = SourcesApi(api_client).update_source_entitlement_request_config_v1(id=id, sourceentitlementrequestconfig=new_sourceentitlementrequestconfig)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_source_entitlement_request_config_v1(id, new_sourceentitlementrequestconfig, x_sail_point_experimental)
        print("The response of SourcesApi->update_source_entitlement_request_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_source_entitlement_request_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-source-schedule-v1
Update source schedule (partial)
Use this API to selectively update an existing Schedule using a JSONPatch payload. 

The following schedule fields are immutable and cannot be updated:

- type


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-source-schedule-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
Path   | schedule_type | **str** | True  | The Schedule type.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | The JSONPatch payload used to update the schedule.

### Return type
[**Schedule3**](../models/schedule3)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Schedule was successfully updated. | Schedule3 |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.sources.models.schedule3 import Schedule3
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schedule_type = 'ACCOUNT_AGGREGATION' # str | The Schedule type. # str | The Schedule type.
    jsonpatchoperation = '''[{"op":"replace","path":"/cronExpression","value":"0 0 6 * * ?"}]''' # List[Jsonpatchoperation] | The JSONPatch payload used to update the schedule.

    try:
        # Update source schedule (partial)
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = SourcesApi(api_client).update_source_schedule_v1(source_id=source_id, schedule_type=schedule_type, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_source_schedule_v1(source_id, schedule_type, new_jsonpatchoperation)
        print("The response of SourcesApi->update_source_schedule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_source_schedule_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-source-schema-v1
Update source schema (partial)
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


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-source-schema-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id.
Path   | schema_id | **str** | True  | The Schema id.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | The JSONPatch payload used to update the schema.

### Return type
[**ModelSchema**](../models/model-schema)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Schema was successfully updated. | ModelSchema |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.sources.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema id. # str | The Schema id.
    jsonpatchoperation = '''[{"op":"add","path":"/attributes/-","value":{"name":"location","type":"STRING","schema":null,"description":"Employee location","isMulti":false,"isEntitlement":false,"isGroup":false}}]''' # List[Jsonpatchoperation] | The JSONPatch payload used to update the schema.

    try:
        # Update source schema (partial)
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = SourcesApi(api_client).update_source_schema_v1(source_id=source_id, schema_id=schema_id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_source_schema_v1(source_id, schema_id, new_jsonpatchoperation)
        print("The response of SourcesApi->update_source_schema_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_source_schema_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-source-v1
Update source (partial)
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


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-source-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).

### Return type
[**Source**](../models/source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Source object. Any passwords will only show the the encrypted cipher-text so that they aren&#39;t decryptable in Identity Security Cloud (ISC) cloud-based services, per ISC security design. | Source |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSourcesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSourcesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.sources.api.sources_api import SourcesApi
from sailpoint.sources.api_client import ApiClient
from sailpoint.sources.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.sources.models.source import Source
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    jsonpatchoperation = '''[{"op":"replace","path":"/description","value":"new description"}]''' # List[Jsonpatchoperation] | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).

    try:
        # Update source (partial)
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = SourcesApi(api_client).update_source_v1(id=id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_source_v1(id, new_jsonpatchoperation)
        print("The response of SourcesApi->update_source_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_source_v1: %s\n" % e)
```



[[Back to top]](#) 



