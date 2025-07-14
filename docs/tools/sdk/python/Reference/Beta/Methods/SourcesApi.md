---
id: beta-sources
title: Sources
pagination_label: Sources
sidebar_label: Sources
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sources', 'BetaSources'] 
slug: /tools/sdk/python/beta/methods/sources
tags: ['SDK', 'Software Development Kit', 'Sources', 'BetaSources']
---

# sailpoint.beta.SourcesApi
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-provisioning-policy**](#create-provisioning-policy) | **POST** `/sources/{sourceId}/provisioning-policies` | Create provisioning policy
[**create-source**](#create-source) | **POST** `/sources` | Creates a source in identitynow.
[**create-source-schema**](#create-source-schema) | **POST** `/sources/{sourceId}/schemas` | Create schema on source
[**delete**](#delete) | **DELETE** `/sources/{id}` | Delete source by id
[**delete-accounts-async**](#delete-accounts-async) | **POST** `/sources/{sourceId}/remove-accounts` | Remove all accounts in a source
[**delete-native-change-detection-config**](#delete-native-change-detection-config) | **DELETE** `/sources/{sourceId}/native-change-detection-config` | Delete native change detection configuration
[**delete-provisioning-policy**](#delete-provisioning-policy) | **DELETE** `/sources/{sourceId}/provisioning-policies/{usageType}` | Delete provisioning policy by usagetype
[**delete-source-schema**](#delete-source-schema) | **DELETE** `/sources/{sourceId}/schemas/{schemaId}` | Delete source schema by id
[**get-correlation-config**](#get-correlation-config) | **GET** `/sources/{sourceId}/correlation-config` | Get source correlation configuration
[**get-native-change-detection-config**](#get-native-change-detection-config) | **GET** `/sources/{sourceId}/native-change-detection-config` | Native change detection configuration
[**get-provisioning-policy**](#get-provisioning-policy) | **GET** `/sources/{sourceId}/provisioning-policies/{usageType}` | Get provisioning policy by usagetype
[**get-source**](#get-source) | **GET** `/sources/{id}` | Get source by id
[**get-source-accounts-schema**](#get-source-accounts-schema) | **GET** `/sources/{sourceId}/schemas/accounts` | Downloads source accounts schema template
[**get-source-attr-sync-config**](#get-source-attr-sync-config) | **GET** `/sources/{id}/attribute-sync-config` | Attribute sync config
[**get-source-config**](#get-source-config) | **GET** `/sources/{id}/connectors/source-config` | Gets source config with language translations
[**get-source-entitlement-request-config**](#get-source-entitlement-request-config) | **GET** `/sources/{sourceId}/entitlement-request-config` | Get source entitlement request configuration
[**get-source-entitlements-schema**](#get-source-entitlements-schema) | **GET** `/sources/{sourceId}/schemas/entitlements` | Downloads source entitlements schema template
[**get-source-schema**](#get-source-schema) | **GET** `/sources/{sourceId}/schemas/{schemaId}` | Get source schema by id
[**get-source-schemas**](#get-source-schemas) | **GET** `/sources/{sourceId}/schemas` | List schemas on source
[**import-accounts**](#import-accounts) | **POST** `/sources/{sourceId}/load-accounts` | Account aggregation
[**import-entitlements**](#import-entitlements) | **POST** `/sources/{sourceId}/load-entitlements` | Entitlement aggregation
[**import-source-accounts-schema**](#import-source-accounts-schema) | **POST** `/sources/{sourceId}/schemas/accounts` | Uploads source accounts schema template
[**import-source-connector-file**](#import-source-connector-file) | **POST** `/sources/{sourceId}/upload-connector-file` | Upload connector file to source
[**import-source-entitlements-schema**](#import-source-entitlements-schema) | **POST** `/sources/{sourceId}/schemas/entitlements` | Uploads source entitlements schema template
[**import-uncorrelated-accounts**](#import-uncorrelated-accounts) | **POST** `/sources/{sourceId}/load-uncorrelated-accounts` | Process uncorrelated accounts
[**list-provisioning-policies**](#list-provisioning-policies) | **GET** `/sources/{sourceId}/provisioning-policies` | Lists provisioningpolicies
[**list-sources**](#list-sources) | **GET** `/sources` | Lists all sources in identitynow.
[**peek-resource-objects**](#peek-resource-objects) | **POST** `/sources/{sourceId}/connector/peek-resource-objects` | Peek source connector&#39;s resource objects
[**ping-cluster**](#ping-cluster) | **POST** `/sources/{sourceId}/connector/ping-cluster` | Ping cluster for source connector
[**put-correlation-config**](#put-correlation-config) | **PUT** `/sources/{sourceId}/correlation-config` | Update source correlation configuration
[**put-native-change-detection-config**](#put-native-change-detection-config) | **PUT** `/sources/{sourceId}/native-change-detection-config` | Update native change detection configuration
[**put-provisioning-policy**](#put-provisioning-policy) | **PUT** `/sources/{sourceId}/provisioning-policies/{usageType}` | Update provisioning policy by usagetype
[**put-source**](#put-source) | **PUT** `/sources/{id}` | Update source (full)
[**put-source-attr-sync-config**](#put-source-attr-sync-config) | **PUT** `/sources/{id}/attribute-sync-config` | Update attribute sync config
[**put-source-schema**](#put-source-schema) | **PUT** `/sources/{sourceId}/schemas/{schemaId}` | Update source schema (full)
[**sync-attributes-for-source**](#sync-attributes-for-source) | **POST** `/sources/{sourceId}/synchronize-attributes` | Synchronize single source attributes.
[**test-source-configuration**](#test-source-configuration) | **POST** `/sources/{sourceId}/connector/test-configuration` | Test configuration for source connector
[**test-source-connection**](#test-source-connection) | **POST** `/sources/{sourceId}/connector/check-connection` | Check connection for source connector.
[**update-provisioning-policies-in-bulk**](#update-provisioning-policies-in-bulk) | **POST** `/sources/{sourceId}/provisioning-policies/bulk-update` | Bulk update provisioning policies
[**update-provisioning-policy**](#update-provisioning-policy) | **PATCH** `/sources/{sourceId}/provisioning-policies/{usageType}` | Partial update of provisioning policy
[**update-source**](#update-source) | **PATCH** `/sources/{id}` | Update source (partial)
[**update-source-entitlement-request-config**](#update-source-entitlement-request-config) | **PUT** `/sources/{sourceId}/entitlement-request-config` | Update source entitlement request configuration
[**update-source-schema**](#update-source-schema) | **PATCH** `/sources/{sourceId}/schemas/{schemaId}` | Update source schema (partial)


## create-provisioning-policy
Create provisioning policy
This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-provisioning-policy)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id # str | The Source id
    provisioning_policy_dto = '''{
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
        }''' # ProvisioningPolicyDto | 

    try:
        # Create provisioning policy
        new_provisioning_policy_dto = ProvisioningPolicyDto.from_json(provisioning_policy_dto)
        results = SourcesApi(api_client).create_provisioning_policy(source_id=source_id, provisioning_policy_dto=new_provisioning_policy_dto)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).create_provisioning_policy(source_id, new_provisioning_policy_dto)
        print("The response of SourcesApi->create_provisioning_policy:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->create_provisioning_policy: %s\n" % e)
```



[[Back to top]](#) 

## create-source
Creates a source in identitynow.
This creates a specific source with a full source JSON representation. Any passwords are submitted as plain-text and encrypted upon receipt in IdentityNow.
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-source)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.source import Source
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source = '''{
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
        }''' # Source | 
    provision_as_csv = false # bool | If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don't set this query parameter and you attempt to set the `type` attribute directly, the request won't correctly generate the source.   (optional) # bool | If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don't set this query parameter and you attempt to set the `type` attribute directly, the request won't correctly generate the source.   (optional)

    try:
        # Creates a source in identitynow.
        new_source = Source.from_json(source)
        results = SourcesApi(api_client).create_source(source=new_source)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).create_source(new_source, provision_as_csv)
        print("The response of SourcesApi->create_source:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->create_source: %s\n" % e)
```



[[Back to top]](#) 

## create-source-schema
Create schema on source
Use this API to create a new schema on the specified source in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-source-schema)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    model_schema = '''sailpoint.beta.ModelSchema()''' # ModelSchema | 

    try:
        # Create schema on source
        new_model_schema = ModelSchema.from_json(model_schema)
        results = SourcesApi(api_client).create_source_schema(source_id=source_id, model_schema=new_model_schema)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).create_source_schema(source_id, new_model_schema)
        print("The response of SourcesApi->create_source_schema:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->create_source_schema: %s\n" % e)
```



[[Back to top]](#) 

## delete
Delete source by id
Use this API to delete a specific source in Identity Security Cloud (ISC).
The API removes all the accounts on the source first, and then it deletes the source. You can retrieve the actual task execution status with this method: GET `/task-status/{id}`
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.

### Return type
[**Delete202Response**](../models/delete202-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | Delete202Response |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.delete202_response import Delete202Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.

    try:
        # Delete source by id
        
        results = SourcesApi(api_client).delete(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).delete(id)
        print("The response of SourcesApi->delete:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->delete: %s\n" % e)
```



[[Back to top]](#) 

## delete-accounts-async
Remove all accounts in a source
Use this endpoint to remove all accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.

This endpoint is good for:
* Removing accounts that no longer exist on the source.
* Removing accounts that won't be aggregated following updates to the source configuration.
* Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.


[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-accounts-async)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The source id

### Return type
[**TaskResultDto**](../models/task-result-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted. Returns task result details of removal request. | TaskResultDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.task_result_dto import TaskResultDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ebbf35756e1140699ce52b233121384a' # str | The source id # str | The source id

    try:
        # Remove all accounts in a source
        
        results = SourcesApi(api_client).delete_accounts_async(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).delete_accounts_async(source_id)
        print("The response of SourcesApi->delete_accounts_async:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->delete_accounts_async: %s\n" % e)
```



[[Back to top]](#) 

## delete-native-change-detection-config
Delete native change detection configuration
Deletes the native change detection configuration for the source specified by the given ID.
A token with API, or ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-native-change-detection-config)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id

    try:
        # Delete native change detection configuration
        
        SourcesApi(api_client).delete_native_change_detection_config(source_id=source_id)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).delete_native_change_detection_config(source_id)
    except Exception as e:
        print("Exception when calling SourcesApi->delete_native_change_detection_config: %s\n" % e)
```



[[Back to top]](#) 

## delete-provisioning-policy
Delete provisioning policy by usagetype
Deletes the provisioning policy with the specified usage on an application.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-provisioning-policy)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.usage_type import UsageType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    usage_type = sailpoint.beta.UsageType() # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

    try:
        # Delete provisioning policy by usagetype
        
        SourcesApi(api_client).delete_provisioning_policy(source_id=source_id, usage_type=usage_type)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).delete_provisioning_policy(source_id, usage_type)
    except Exception as e:
        print("Exception when calling SourcesApi->delete_provisioning_policy: %s\n" % e)
```



[[Back to top]](#) 

## delete-source-schema
Delete source schema by id


[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-source-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source ID.
Path   | schema_id | **str** | True  | The Schema ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema ID. # str | The Schema ID.

    try:
        # Delete source schema by id
        
        SourcesApi(api_client).delete_source_schema(source_id=source_id, schema_id=schema_id)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).delete_source_schema(source_id, schema_id)
    except Exception as e:
        print("Exception when calling SourcesApi->delete_source_schema: %s\n" % e)
```



[[Back to top]](#) 

## get-correlation-config
Get source correlation configuration
This API returns the existing correlation configuration for a source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-correlation-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The source id

### Return type
[**CorrelationConfig**](../models/correlation-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Correlation configuration for a source | CorrelationConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.correlation_config import CorrelationConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id

    try:
        # Get source correlation configuration
        
        results = SourcesApi(api_client).get_correlation_config(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_correlation_config(source_id)
        print("The response of SourcesApi->get_correlation_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_correlation_config: %s\n" % e)
```



[[Back to top]](#) 

## get-native-change-detection-config
Native change detection configuration
This API returns the existing native change detection configuration for a source specified by the given ID.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-native-change-detection-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The source id

### Return type
[**NativeChangeDetectionConfig**](../models/native-change-detection-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Native change detection configuration for a source | NativeChangeDetectionConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.native_change_detection_config import NativeChangeDetectionConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id

    try:
        # Native change detection configuration
        
        results = SourcesApi(api_client).get_native_change_detection_config(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_native_change_detection_config(source_id)
        print("The response of SourcesApi->get_native_change_detection_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_native_change_detection_config: %s\n" % e)
```



[[Back to top]](#) 

## get-provisioning-policy
Get provisioning policy by usagetype
This end-point retrieves the ProvisioningPolicy with the specified usage on the specified Source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-provisioning-policy)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.beta.models.usage_type import UsageType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    usage_type = sailpoint.beta.UsageType() # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

    try:
        # Get provisioning policy by usagetype
        
        results = SourcesApi(api_client).get_provisioning_policy(source_id=source_id, usage_type=usage_type)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_provisioning_policy(source_id, usage_type)
        print("The response of SourcesApi->get_provisioning_policy:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_provisioning_policy: %s\n" % e)
```



[[Back to top]](#) 

## get-source
Get source by id
Use this API to get a source by a specified ID in Identity Security Cloud (ISC).
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.source import Source
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.

    try:
        # Get source by id
        
        results = SourcesApi(api_client).get_source(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source(id)
        print("The response of SourcesApi->get_source:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source: %s\n" % e)
```



[[Back to top]](#) 

## get-source-accounts-schema
Downloads source accounts schema template


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-accounts-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully downloaded the file |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id

    try:
        # Downloads source accounts schema template
        
        SourcesApi(api_client).get_source_accounts_schema(source_id=source_id)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).get_source_accounts_schema(source_id)
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_accounts_schema: %s\n" % e)
```



[[Back to top]](#) 

## get-source-attr-sync-config
Attribute sync config
This API returns the existing attribute synchronization configuration for a source specified by the given ID. The response contains all attributes, regardless of whether they enabled or not.
A token with ORG_ADMIN or HELPDESK authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-attr-sync-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id

### Return type
[**AttrSyncSourceConfig**](../models/attr-sync-source-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Attribute synchronization configuration for a source | AttrSyncSourceConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.attr_sync_source_config import AttrSyncSourceConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id

    try:
        # Attribute sync config
        
        results = SourcesApi(api_client).get_source_attr_sync_config(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_attr_sync_config(id)
        print("The response of SourcesApi->get_source_attr_sync_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_attr_sync_config: %s\n" % e)
```



[[Back to top]](#) 

## get-source-config
Gets source config with language translations
Looks up and returns the source config for the requested source id after populating the source config values and applying language translations.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Source id
  Query | locale | **str** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

### Return type
[**ConnectorDetail**](../models/connector-detail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Connector Detail object | ConnectorDetail |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.connector_detail import ConnectorDetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'id_example' # str | The Source id # str | The Source id
    locale = 'locale_example' # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

    try:
        # Gets source config with language translations
        
        results = SourcesApi(api_client).get_source_config(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_config(id, locale)
        print("The response of SourcesApi->get_source_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_config: %s\n" % e)
```



[[Back to top]](#) 

## get-source-entitlement-request-config
Get source entitlement request configuration
This API gets the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-entitlement-request-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id

### Return type
[**SourceEntitlementRequestConfig**](../models/source-entitlement-request-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Source Entitlement Request Configuration Details. | SourceEntitlementRequestConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.source_entitlement_request_config import SourceEntitlementRequestConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id

    try:
        # Get source entitlement request configuration
        
        results = SourcesApi(api_client).get_source_entitlement_request_config(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_entitlement_request_config(source_id)
        print("The response of SourcesApi->get_source_entitlement_request_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_entitlement_request_config: %s\n" % e)
```



[[Back to top]](#) 

## get-source-entitlements-schema
Downloads source entitlements schema template


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-entitlements-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id
  Query | schema_name | **str** |   (optional) | Name of entitlement schema

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully downloaded the file |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    schema_name = '?schemaName=group' # str | Name of entitlement schema (optional) # str | Name of entitlement schema (optional)

    try:
        # Downloads source entitlements schema template
        
        SourcesApi(api_client).get_source_entitlements_schema(source_id=source_id)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).get_source_entitlements_schema(source_id, schema_name)
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_entitlements_schema: %s\n" % e)
```



[[Back to top]](#) 

## get-source-schema
Get source schema by id
Get the Source Schema by ID in IdentityNow.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source ID.
Path   | schema_id | **str** | True  | The Schema ID.

### Return type
[**ModelSchema**](../models/model-schema)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The requested Schema was successfully retrieved. | ModelSchema |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema ID. # str | The Schema ID.

    try:
        # Get source schema by id
        
        results = SourcesApi(api_client).get_source_schema(source_id=source_id, schema_id=schema_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_schema(source_id, schema_id)
        print("The response of SourcesApi->get_source_schema:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_schema: %s\n" % e)
```



[[Back to top]](#) 

## get-source-schemas
List schemas on source
Use this API to list the schemas that exist on the specified source in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-schemas)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    include_types = 'group' # str | If set to 'group', then the account schema is filtered and only group schemas are returned. Only a value of 'group' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. (optional) # str | If set to 'group', then the account schema is filtered and only group schemas are returned. Only a value of 'group' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. (optional)
    include_names = 'account' # str | A comma-separated list of schema names to filter result. (optional) # str | A comma-separated list of schema names to filter result. (optional)

    try:
        # List schemas on source
        
        results = SourcesApi(api_client).get_source_schemas(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_schemas(source_id, include_types, include_names)
        print("The response of SourcesApi->get_source_schemas:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_schemas: %s\n" % e)
```



[[Back to top]](#) 

## import-accounts
Account aggregation
Starts an account aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body.
You will also need to set the Content-Type header to `multipart/form-data`.
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-accounts)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source Id
   | file | **bytearray** |   (optional) | The CSV file containing the source accounts to aggregate.
   | disable_optimization | **str** |   (optional) | Use this flag to reprocess every account whether or not the data has changed.

### Return type
[**LoadAccountsTask**](../models/load-accounts-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Aggregate Accounts Task | LoadAccountsTask |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.load_accounts_task import LoadAccountsTask
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source Id # str | Source Id
    file = None # bytearray | The CSV file containing the source accounts to aggregate. (optional) # bytearray | The CSV file containing the source accounts to aggregate. (optional)
    disable_optimization = 'disable_optimization_example' # str | Use this flag to reprocess every account whether or not the data has changed. (optional) # str | Use this flag to reprocess every account whether or not the data has changed. (optional)

    try:
        # Account aggregation
        
        results = SourcesApi(api_client).import_accounts(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_accounts(source_id, file, disable_optimization)
        print("The response of SourcesApi->import_accounts:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_accounts: %s\n" % e)
```



[[Back to top]](#) 

## import-entitlements
Entitlement aggregation
Starts an entitlement aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body. 
You will also need to set the Content-Type header to `multipart/form-data`.
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-entitlements)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source Id
   | file | **bytearray** |   (optional) | The CSV file containing the source entitlements to aggregate.

### Return type
[**LoadEntitlementTask**](../models/load-entitlement-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Aggregate Entitlements Task | LoadEntitlementTask |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.load_entitlement_task import LoadEntitlementTask
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source Id # str | Source Id
    file = None # bytearray | The CSV file containing the source entitlements to aggregate. (optional) # bytearray | The CSV file containing the source entitlements to aggregate. (optional)

    try:
        # Entitlement aggregation
        
        results = SourcesApi(api_client).import_entitlements(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_entitlements(source_id, file)
        print("The response of SourcesApi->import_entitlements:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_entitlements: %s\n" % e)
```



[[Back to top]](#) 

## import-source-accounts-schema
Uploads source accounts schema template
This API uploads a source schema template file to configure a source's account attributes.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-source-accounts-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id
   | file | **bytearray** |   (optional) | 

### Return type
[**ModelSchema**](../models/model-schema)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully uploaded the file | ModelSchema |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Uploads source accounts schema template
        
        results = SourcesApi(api_client).import_source_accounts_schema(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_source_accounts_schema(source_id, file)
        print("The response of SourcesApi->import_source_accounts_schema:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_source_accounts_schema: %s\n" % e)
```



[[Back to top]](#) 

## import-source-connector-file
Upload connector file to source
This uploads a supplemental source connector file (like jdbc driver jars) to a source's S3 bucket. This also sends ETS and Audit events.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-source-connector-file)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id
   | file | **bytearray** |   (optional) | 

### Return type
[**Source**](../models/source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Uploaded the file successfully and sent all post-upload events | Source |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.source import Source
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Upload connector file to source
        
        results = SourcesApi(api_client).import_source_connector_file(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_source_connector_file(source_id, file)
        print("The response of SourcesApi->import_source_connector_file:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_source_connector_file: %s\n" % e)
```



[[Back to top]](#) 

## import-source-entitlements-schema
Uploads source entitlements schema template
This API uploads a source schema template file to configure a source's entitlement attributes.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-source-entitlements-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id
  Query | schema_name | **str** |   (optional) | Name of entitlement schema
   | file | **bytearray** |   (optional) | 

### Return type
[**ModelSchema**](../models/model-schema)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully uploaded the file | ModelSchema |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    schema_name = '?schemaName=group' # str | Name of entitlement schema (optional) # str | Name of entitlement schema (optional)
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Uploads source entitlements schema template
        
        results = SourcesApi(api_client).import_source_entitlements_schema(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_source_entitlements_schema(source_id, schema_name, file)
        print("The response of SourcesApi->import_source_entitlements_schema:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_source_entitlements_schema: %s\n" % e)
```



[[Back to top]](#) 

## import-uncorrelated-accounts
Process uncorrelated accounts
File is required for upload. You will also need to set the Content-Type header to `multipart/form-data`

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-uncorrelated-accounts)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source Id
   | file | **bytearray** |   (optional) | 

### Return type
[**LoadUncorrelatedAccountsTask**](../models/load-uncorrelated-accounts-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Uncorrelated Accounts Task | LoadUncorrelatedAccountsTask |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.load_uncorrelated_accounts_task import LoadUncorrelatedAccountsTask
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '75dbec1ebe154d5785da27b95e1dd5d7' # str | Source Id # str | Source Id
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Process uncorrelated accounts
        
        results = SourcesApi(api_client).import_uncorrelated_accounts(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_uncorrelated_accounts(source_id, file)
        print("The response of SourcesApi->import_uncorrelated_accounts:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_uncorrelated_accounts: %s\n" % e)
```



[[Back to top]](#) 

## list-provisioning-policies
Lists provisioningpolicies
This end-point lists all the ProvisioningPolicies in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-provisioning-policies)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id # str | The Source id

    try:
        # Lists provisioningpolicies
        
        results = SourcesApi(api_client).list_provisioning_policies(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).list_provisioning_policies(source_id)
        print("The response of SourcesApi->list_provisioning_policies:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->list_provisioning_policies: %s\n" % e)
```



[[Back to top]](#) 

## list-sources
Lists all sources in identitynow.
This end-point lists all the sources in IdentityNow.

A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-sources)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq*  **modified**: *eq*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw*
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.source import Source
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name eq \"Employees\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq*  **modified**: *eq*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq*  **modified**: *eq*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** (optional)
    for_subadmin = 'name' # str | Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. (optional) # str | Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. (optional)
    include_idn_source = False # bool | Include the IdentityNow source in the response. (optional) (default to False) # bool | Include the IdentityNow source in the response. (optional) (default to False)

    try:
        # Lists all sources in identitynow.
        
        results = SourcesApi(api_client).list_sources()
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).list_sources(limit, offset, count, filters, sorters, for_subadmin, include_idn_source)
        print("The response of SourcesApi->list_sources:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->list_sources: %s\n" % e)
```



[[Back to top]](#) 

## peek-resource-objects
Peek source connector's resource objects
Retrieves a sample of data returned from account and group aggregation requests.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/peek-resource-objects)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the Source
 Body  | resource_objects_request | [**ResourceObjectsRequest**](../models/resource-objects-request) | True  | 

### Return type
[**ResourceObjectsResponse**](../models/resource-objects-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of resource objects that was fetched from the source connector. | ResourceObjectsResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.resource_objects_request import ResourceObjectsRequest
from sailpoint.beta.models.resource_objects_response import ResourceObjectsResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'cef3ee201db947c5912551015ba0c679' # str | The ID of the Source # str | The ID of the Source
    resource_objects_request = '''{
          "maxCount" : 100,
          "objectType" : "group"
        }''' # ResourceObjectsRequest | 

    try:
        # Peek source connector's resource objects
        new_resource_objects_request = ResourceObjectsRequest.from_json(resource_objects_request)
        results = SourcesApi(api_client).peek_resource_objects(source_id=source_id, resource_objects_request=new_resource_objects_request)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).peek_resource_objects(source_id, new_resource_objects_request)
        print("The response of SourcesApi->peek_resource_objects:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->peek_resource_objects: %s\n" % e)
```



[[Back to top]](#) 

## ping-cluster
Ping cluster for source connector
This endpoint validates that the cluster being used by the source is reachable from IdentityNow.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/ping-cluster)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the Source

### Return type
[**StatusResponse**](../models/status-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The result of pinging connection with the source connector. | StatusResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.status_response import StatusResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'cef3ee201db947c5912551015ba0c679' # str | The ID of the Source # str | The ID of the Source

    try:
        # Ping cluster for source connector
        
        results = SourcesApi(api_client).ping_cluster(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).ping_cluster(source_id)
        print("The response of SourcesApi->ping_cluster:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->ping_cluster: %s\n" % e)
```



[[Back to top]](#) 

## put-correlation-config
Update source correlation configuration
Replaces the correlation configuration for the source specified by the given ID with the configuration provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-correlation-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The source id
 Body  | correlation_config | [**CorrelationConfig**](../models/correlation-config) | True  | 

### Return type
[**CorrelationConfig**](../models/correlation-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated correlation configuration for a source | CorrelationConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.correlation_config import CorrelationConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id
    correlation_config = '''{
          "attributeAssignments" : [ {
            "sequence" : 1,
            "filterString" : "first_name == \"John\"",
            "ignoreCase" : false,
            "complex" : false,
            "property" : "first_name",
            "value" : "firstName",
            "operation" : "EQ",
            "matchMode" : "ANYWHERE"
          }, {
            "sequence" : 1,
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
        }''' # CorrelationConfig | 

    try:
        # Update source correlation configuration
        new_correlation_config = CorrelationConfig.from_json(correlation_config)
        results = SourcesApi(api_client).put_correlation_config(source_id=source_id, correlation_config=new_correlation_config)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_correlation_config(source_id, new_correlation_config)
        print("The response of SourcesApi->put_correlation_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->put_correlation_config: %s\n" % e)
```



[[Back to top]](#) 

## put-native-change-detection-config
Update native change detection configuration
Replaces the native change detection configuration for the source specified by the given ID with the configuration provided in the request body.
    
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-native-change-detection-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The source id
 Body  | native_change_detection_config | [**NativeChangeDetectionConfig**](../models/native-change-detection-config) | True  | 

### Return type
[**NativeChangeDetectionConfig**](../models/native-change-detection-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated native change detection configuration for a source | NativeChangeDetectionConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.native_change_detection_config import NativeChangeDetectionConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id
    native_change_detection_config = '''{
          "selectedEntitlements" : [ "memberOf", "memberOfSharedMailbox" ],
          "operations" : [ "ACCOUNT_UPDATED", "ACCOUNT_DELETED" ],
          "selectedNonEntitlementAttributes" : [ "lastName", "phoneNumber", "objectType", "servicePrincipalName" ],
          "allNonEntitlementAttributes" : false,
          "allEntitlements" : false,
          "enabled" : true
        }''' # NativeChangeDetectionConfig | 

    try:
        # Update native change detection configuration
        new_native_change_detection_config = NativeChangeDetectionConfig.from_json(native_change_detection_config)
        results = SourcesApi(api_client).put_native_change_detection_config(source_id=source_id, native_change_detection_config=new_native_change_detection_config)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_native_change_detection_config(source_id, new_native_change_detection_config)
        print("The response of SourcesApi->put_native_change_detection_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->put_native_change_detection_config: %s\n" % e)
```



[[Back to top]](#) 

## put-provisioning-policy
Update provisioning policy by usagetype
This end-point updates the provisioning policy with the specified usage on the specified source in IdentityNow.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-provisioning-policy)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.beta.models.usage_type import UsageType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    usage_type = sailpoint.beta.UsageType() # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
    provisioning_policy_dto = '''{
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
        }''' # ProvisioningPolicyDto | 

    try:
        # Update provisioning policy by usagetype
        new_provisioning_policy_dto = ProvisioningPolicyDto.from_json(provisioning_policy_dto)
        results = SourcesApi(api_client).put_provisioning_policy(source_id=source_id, usage_type=usage_type, provisioning_policy_dto=new_provisioning_policy_dto)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_provisioning_policy(source_id, usage_type, new_provisioning_policy_dto)
        print("The response of SourcesApi->put_provisioning_policy:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->put_provisioning_policy: %s\n" % e)
```



[[Back to top]](#) 

## put-source
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

A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/put-source)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.source import Source
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    source = '''{
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
        }''' # Source | 

    try:
        # Update source (full)
        new_source = Source.from_json(source)
        results = SourcesApi(api_client).put_source(id=id, source=new_source)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_source(id, new_source)
        print("The response of SourcesApi->put_source:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->put_source: %s\n" % e)
```



[[Back to top]](#) 

## put-source-attr-sync-config
Update attribute sync config
Replaces the attribute synchronization configuration for the source specified by the given ID with the configuration provided in the request body. Only the "enabled" field of the values in the "attributes" array is mutable. Attempting to change other attributes or add new values to the "attributes" array will result in an error.
    
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-source-attr-sync-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The source id
 Body  | attr_sync_source_config | [**AttrSyncSourceConfig**](../models/attr-sync-source-config) | True  | 

### Return type
[**AttrSyncSourceConfig**](../models/attr-sync-source-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated attribute synchronization configuration for a source | AttrSyncSourceConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.attr_sync_source_config import AttrSyncSourceConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | The source id # str | The source id
    attr_sync_source_config = '''{
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
        }''' # AttrSyncSourceConfig | 

    try:
        # Update attribute sync config
        new_attr_sync_source_config = AttrSyncSourceConfig.from_json(attr_sync_source_config)
        results = SourcesApi(api_client).put_source_attr_sync_config(id=id, attr_sync_source_config=new_attr_sync_source_config)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_source_attr_sync_config(id, new_attr_sync_source_config)
        print("The response of SourcesApi->put_source_attr_sync_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->put_source_attr_sync_config: %s\n" % e)
```



[[Back to top]](#) 

## put-source-schema
Update source schema (full)
This API will completely replace an existing Schema with the submitted payload. Some fields of the Schema cannot be updated. These fields are listed below.
* id
* name
* created
* modified
Any attempt to modify these fields will result in an error response with a status code of 400.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-source-schema)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source ID.
Path   | schema_id | **str** | True  | The Schema ID.
 Body  | model_schema | [**ModelSchema**](../models/model-schema) | True  | 

### Return type
[**ModelSchema**](../models/model-schema)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Schema was successfully replaced. | ModelSchema |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema ID. # str | The Schema ID.
    model_schema = '''sailpoint.beta.ModelSchema()''' # ModelSchema | 

    try:
        # Update source schema (full)
        new_model_schema = ModelSchema.from_json(model_schema)
        results = SourcesApi(api_client).put_source_schema(source_id=source_id, schema_id=schema_id, model_schema=new_model_schema)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).put_source_schema(source_id, schema_id, new_model_schema)
        print("The response of SourcesApi->put_source_schema:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->put_source_schema: %s\n" % e)
```



[[Back to top]](#) 

## sync-attributes-for-source
Synchronize single source attributes.
This end-point performs attribute synchronization for a selected source.
A token with ORG_ADMIN or SOURCE_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/sync-attributes-for-source)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id

### Return type
[**SourceSyncJob**](../models/source-sync-job)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | A Source Sync job | SourceSyncJob |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.source_sync_job import SourceSyncJob
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'source_id_example' # str | The Source id # str | The Source id

    try:
        # Synchronize single source attributes.
        
        results = SourcesApi(api_client).sync_attributes_for_source(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).sync_attributes_for_source(source_id)
        print("The response of SourcesApi->sync_attributes_for_source:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->sync_attributes_for_source: %s\n" % e)
```



[[Back to top]](#) 

## test-source-configuration
Test configuration for source connector
This endpoint performs a more detailed validation of the source's configuration that can take longer than the lighter weight credential validation performed by the checkConnection API.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/test-source-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the Source

### Return type
[**StatusResponse**](../models/status-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The result of testing source connector configuration with response from it. | StatusResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.status_response import StatusResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'cef3ee201db947c5912551015ba0c679' # str | The ID of the Source # str | The ID of the Source

    try:
        # Test configuration for source connector
        
        results = SourcesApi(api_client).test_source_configuration(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).test_source_configuration(source_id)
        print("The response of SourcesApi->test_source_configuration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->test_source_configuration: %s\n" % e)
```



[[Back to top]](#) 

## test-source-connection
Check connection for source connector.
This endpoint validates that the configured credentials are valid and will properly authenticate with the source identified by the sourceId path parameter.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/test-source-connection)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the Source.

### Return type
[**StatusResponse**](../models/status-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The result of checking connection to the source connector with response from it. | StatusResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.status_response import StatusResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'cef3ee201db947c5912551015ba0c679' # str | The ID of the Source. # str | The ID of the Source.

    try:
        # Check connection for source connector.
        
        results = SourcesApi(api_client).test_source_connection(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).test_source_connection(source_id)
        print("The response of SourcesApi->test_source_connection:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->test_source_connection: %s\n" % e)
```



[[Back to top]](#) 

## update-provisioning-policies-in-bulk
Bulk update provisioning policies
This end-point updates a list of provisioning policies on the specified source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-provisioning-policies-in-bulk)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    provisioning_policy_dto = '''[sailpoint.beta.ProvisioningPolicyDto()]''' # List[ProvisioningPolicyDto] | 

    try:
        # Bulk update provisioning policies
        new_provisioning_policy_dto = ProvisioningPolicyDto.from_json(provisioning_policy_dto)
        results = SourcesApi(api_client).update_provisioning_policies_in_bulk(source_id=source_id, provisioning_policy_dto=new_provisioning_policy_dto)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_provisioning_policies_in_bulk(source_id, new_provisioning_policy_dto)
        print("The response of SourcesApi->update_provisioning_policies_in_bulk:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_provisioning_policies_in_bulk: %s\n" % e)
```



[[Back to top]](#) 

## update-provisioning-policy
Partial update of provisioning policy
This API selectively updates an existing Provisioning Policy using a JSONPatch payload.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-provisioning-policy)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.json_patch_operation import JsonPatchOperation
from sailpoint.beta.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.beta.models.usage_type import UsageType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    usage_type = sailpoint.beta.UsageType() # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
    json_patch_operation = '''[{op=add, path=/fields/0, value={name=email, transform={type=identityAttribute, attributes={name=email}}, attributes={}, isRequired=false, type=string, isMultiValued=false}}]''' # List[JsonPatchOperation] | The JSONPatch payload used to update the schema.

    try:
        # Partial update of provisioning policy
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = SourcesApi(api_client).update_provisioning_policy(source_id=source_id, usage_type=usage_type, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_provisioning_policy(source_id, usage_type, new_json_patch_operation)
        print("The response of SourcesApi->update_provisioning_policy:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_provisioning_policy: %s\n" % e)
```



[[Back to top]](#) 

## update-source
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

A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or API authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/update-source)

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
200 | Updated Source object. Any passwords will only show the the encrypted cipher-text so that they are not decryptable in Identity Security Cloud cloud-based services, per ISC security design. | Source |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.json_patch_operation import JsonPatchOperation
from sailpoint.beta.models.source import Source
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    json_patch_operation = '''[{op=replace, path=/description, value=new description}]''' # List[JsonPatchOperation] | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).

    try:
        # Update source (partial)
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = SourcesApi(api_client).update_source(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_source(id, new_json_patch_operation)
        print("The response of SourcesApi->update_source:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_source: %s\n" % e)
```



[[Back to top]](#) 

## update-source-entitlement-request-config
Update source entitlement request configuration
This API replaces the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-source-entitlement-request-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id
 Body  | source_entitlement_request_config | [**SourceEntitlementRequestConfig**](../models/source-entitlement-request-config) | True  | 

### Return type
[**SourceEntitlementRequestConfig**](../models/source-entitlement-request-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Source Entitlement Request Configuration Details. | SourceEntitlementRequestConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.source_entitlement_request_config import SourceEntitlementRequestConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    source_entitlement_request_config = '''{
          "accessRequestConfig" : {
            "denialCommentRequired" : false,
            "approvalSchemes" : [ {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            } ],
            "reauthorizationRequired" : false,
            "requestCommentRequired" : true
          },
          "revocationRequestConfig" : {
            "approvalSchemes" : [ {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            } ]
          }
        }''' # SourceEntitlementRequestConfig | 

    try:
        # Update source entitlement request configuration
        new_source_entitlement_request_config = SourceEntitlementRequestConfig.from_json(source_entitlement_request_config)
        results = SourcesApi(api_client).update_source_entitlement_request_config(source_id=source_id, source_entitlement_request_config=new_source_entitlement_request_config)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_source_entitlement_request_config(source_id, new_source_entitlement_request_config)
        print("The response of SourcesApi->update_source_entitlement_request_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_source_entitlement_request_config: %s\n" % e)
```



[[Back to top]](#) 

## update-source-schema
Update source schema (partial)
Use this API to selectively update an existing Schema using a JSONPatch payload. 

The following schema fields are immutable and cannot be updated:

- id
- name
- created
- modified


To switch an account attribute to a group entitlement, you need to have the following in place:

- `isEntitlement: true`
- Must define a schema for the group and [add it to the source](https://developer.sailpoint.com/idn/api/beta/create-source-schema) before updating the `isGroup` flag.  For example, here is the `group` account attribute referencing a schema that defines the group:
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


[API Spec](https://developer.sailpoint.com/docs/api/beta/update-source-schema)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sources_api import SourcesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.json_patch_operation import JsonPatchOperation
from sailpoint.beta.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema id. # str | The Schema id.
    json_patch_operation = '''[{op=replace, path=/displayAttribute, value={new-display-attribute=null}}]''' # List[JsonPatchOperation] | The JSONPatch payload used to update the schema.

    try:
        # Update source schema (partial)
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = SourcesApi(api_client).update_source_schema(source_id=source_id, schema_id=schema_id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).update_source_schema(source_id, schema_id, new_json_patch_operation)
        print("The response of SourcesApi->update_source_schema:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->update_source_schema: %s\n" % e)
```



[[Back to top]](#) 



