---
id: sources
title: Sources
pagination_label: Sources
sidebar_label: Sources
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sources', 'Sources'] 
slug: /tools/sdk/python/v3/methods/sources
tags: ['SDK', 'Software Development Kit', 'Sources', 'Sources']
---

# sailpoint.v3.SourcesApi
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-provisioning-policy**](#create-provisioning-policy) | **POST** `/sources/{sourceId}/provisioning-policies` | Create provisioning policy
[**create-source**](#create-source) | **POST** `/sources` | Creates a source in identitynow.
[**create-source-schema**](#create-source-schema) | **POST** `/sources/{sourceId}/schemas` | Create schema on source
[**delete-provisioning-policy**](#delete-provisioning-policy) | **DELETE** `/sources/{sourceId}/provisioning-policies/{usageType}` | Delete provisioning policy by usagetype
[**delete-source**](#delete-source) | **DELETE** `/sources/{id}` | Delete source by id
[**delete-source-schema**](#delete-source-schema) | **DELETE** `/sources/{sourceId}/schemas/{schemaId}` | Delete source schema by id
[**get-accounts-schema**](#get-accounts-schema) | **GET** `/sources/{id}/schemas/accounts` | Downloads source accounts schema template
[**get-entitlements-schema**](#get-entitlements-schema) | **GET** `/sources/{id}/schemas/entitlements` | Downloads source entitlements schema template
[**get-provisioning-policy**](#get-provisioning-policy) | **GET** `/sources/{sourceId}/provisioning-policies/{usageType}` | Get provisioning policy by usagetype
[**get-source**](#get-source) | **GET** `/sources/{id}` | Get source by id
[**get-source-connections**](#get-source-connections) | **GET** `/sources/{sourceId}/connections` | Get source connections by id
[**get-source-health**](#get-source-health) | **GET** `/sources/{sourceId}/source-health` | Fetches source health by id
[**get-source-schema**](#get-source-schema) | **GET** `/sources/{sourceId}/schemas/{schemaId}` | Get source schema by id
[**get-source-schemas**](#get-source-schemas) | **GET** `/sources/{sourceId}/schemas` | List schemas on source
[**import-accounts-schema**](#import-accounts-schema) | **POST** `/sources/{id}/schemas/accounts` | Uploads source accounts schema template
[**import-connector-file**](#import-connector-file) | **POST** `/sources/{sourceId}/upload-connector-file` | Upload connector file to source
[**import-entitlements-schema**](#import-entitlements-schema) | **POST** `/sources/{id}/schemas/entitlements` | Uploads source entitlements schema template
[**list-provisioning-policies**](#list-provisioning-policies) | **GET** `/sources/{sourceId}/provisioning-policies` | Lists provisioningpolicies
[**list-sources**](#list-sources) | **GET** `/sources` | Lists all sources in identitynow.
[**put-provisioning-policy**](#put-provisioning-policy) | **PUT** `/sources/{sourceId}/provisioning-policies/{usageType}` | Update provisioning policy by usagetype
[**put-source**](#put-source) | **PUT** `/sources/{id}` | Update source (full)
[**put-source-schema**](#put-source-schema) | **PUT** `/sources/{sourceId}/schemas/{schemaId}` | Update source schema (full)
[**update-provisioning-policies-in-bulk**](#update-provisioning-policies-in-bulk) | **POST** `/sources/{sourceId}/provisioning-policies/bulk-update` | Bulk update provisioning policies
[**update-provisioning-policy**](#update-provisioning-policy) | **PATCH** `/sources/{sourceId}/provisioning-policies/{usageType}` | Partial update of provisioning policy
[**update-source**](#update-source) | **PATCH** `/sources/{id}` | Update source (partial)
[**update-source-schema**](#update-source-schema) | **PATCH** `/sources/{sourceId}/schemas/{schemaId}` | Update source schema (partial)


## create-provisioning-policy
Create provisioning policy
This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-provisioning-policy)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.provisioning_policy_dto import ProvisioningPolicyDto
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

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-source)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.source import Source
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


[API Spec](https://developer.sailpoint.com/docs/api/v3/create-source-schema)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.
    model_schema = '''sailpoint.v3.ModelSchema()''' # ModelSchema | 

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

## delete-provisioning-policy
Delete provisioning policy by usagetype
Deletes the provisioning policy with the specified usage on an application.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-provisioning-policy)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.usage_type import UsageType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    usage_type = sailpoint.v3.UsageType() # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

    try:
        # Delete provisioning policy by usagetype
        
        SourcesApi(api_client).delete_provisioning_policy(source_id=source_id, usage_type=usage_type)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).delete_provisioning_policy(source_id, usage_type)
    except Exception as e:
        print("Exception when calling SourcesApi->delete_provisioning_policy: %s\n" % e)
```



[[Back to top]](#) 

## delete-source
Delete source by id
Use this API to delete a specific source in Identity Security Cloud (ISC).
The API removes all the accounts on the source first, and then it deletes the source. You can retrieve the actual task execution status with this method: GET `/task-status/{id}`

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-source)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.delete_source202_response import DeleteSource202Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.

    try:
        # Delete source by id
        
        results = SourcesApi(api_client).delete_source(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).delete_source(id)
        print("The response of SourcesApi->delete_source:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->delete_source: %s\n" % e)
```



[[Back to top]](#) 

## delete-source-schema
Delete source schema by id


[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-source-schema)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema id. # str | The Schema id.

    try:
        # Delete source schema by id
        
        SourcesApi(api_client).delete_source_schema(source_id=source_id, schema_id=schema_id)
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

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-accounts-schema)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id

    try:
        # Downloads source accounts schema template
        
        SourcesApi(api_client).get_accounts_schema(id=id)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).get_accounts_schema(id)
    except Exception as e:
        print("Exception when calling SourcesApi->get_accounts_schema: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlements-schema
Downloads source entitlements schema template
This API downloads the CSV schema that defines the entitlement attributes on a source.

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-entitlements-schema)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    schema_name = '?schemaName=group' # str | Name of entitlement schema (optional) # str | Name of entitlement schema (optional)

    try:
        # Downloads source entitlements schema template
        
        SourcesApi(api_client).get_entitlements_schema(id=id)
        # Below is a request that includes all optional parameters
        # SourcesApi(api_client).get_entitlements_schema(id, schema_name)
    except Exception as e:
        print("Exception when calling SourcesApi->get_entitlements_schema: %s\n" % e)
```



[[Back to top]](#) 

## get-provisioning-policy
Get provisioning policy by usagetype
This end-point retrieves the ProvisioningPolicy with the specified usage on the specified Source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-provisioning-policy)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.v3.models.usage_type import UsageType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    usage_type = sailpoint.v3.UsageType() # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

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

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-source)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.source import Source
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

## get-source-connections
Get source connections by id
Use this API to get all dependent Profiles, Attributes, Applications and Custom Transforms for a source by a specified ID in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-source-connections)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.

### Return type
[**SourceConnectionsDto**](../models/source-connections-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Source Connections object. | SourceConnectionsDto |  -  |
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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.source_connections_dto import SourceConnectionsDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | Source ID. # str | Source ID.

    try:
        # Get source connections by id
        
        results = SourcesApi(api_client).get_source_connections(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_connections(source_id)
        print("The response of SourcesApi->get_source_connections:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_connections: %s\n" % e)
```



[[Back to top]](#) 

## get-source-health
Fetches source health by id
This endpoint fetches source health by source's id

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-source-health)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.source_health_dto import SourceHealthDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.

    try:
        # Fetches source health by id
        
        results = SourcesApi(api_client).get_source_health(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).get_source_health(source_id)
        print("The response of SourcesApi->get_source_health:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->get_source_health: %s\n" % e)
```



[[Back to top]](#) 

## get-source-schema
Get source schema by id
Get the Source Schema by ID in IdentityNow.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-source-schema)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema id. # str | The Schema id.

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

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-source-schemas)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.model_schema import ModelSchema
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

## import-accounts-schema
Uploads source accounts schema template
This API uploads a source schema template file to configure a source's account attributes.

To retrieve the file to modify and upload, log into Identity Now. 

Click **Admin** -> **Connections** -> **Sources** -> **`{SourceName}`** -> **Import Data** -> **Account Schema** -> **Options** -> **Download Schema**

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v3/import-accounts-schema)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Uploads source accounts schema template
        
        results = SourcesApi(api_client).import_accounts_schema(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_accounts_schema(id, file)
        print("The response of SourcesApi->import_accounts_schema:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_accounts_schema: %s\n" % e)
```



[[Back to top]](#) 

## import-connector-file
Upload connector file to source
This uploads a supplemental source connector file (like jdbc driver jars) to a source's S3 bucket. This also sends ETS and Audit events.

[API Spec](https://developer.sailpoint.com/docs/api/v3/import-connector-file)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.source import Source
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Upload connector file to source
        
        results = SourcesApi(api_client).import_connector_file(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_connector_file(source_id, file)
        print("The response of SourcesApi->import_connector_file:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
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

[API Spec](https://developer.sailpoint.com/docs/api/v3/import-entitlements-schema)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | The Source id # str | The Source id
    schema_name = '?schemaName=group' # str | Name of entitlement schema (optional) # str | Name of entitlement schema (optional)
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Uploads source entitlements schema template
        
        results = SourcesApi(api_client).import_entitlements_schema(id=id)
        # Below is a request that includes all optional parameters
        # results = SourcesApi(api_client).import_entitlements_schema(id, schema_name, file)
        print("The response of SourcesApi->import_entitlements_schema:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourcesApi->import_entitlements_schema: %s\n" % e)
```



[[Back to top]](#) 

## list-provisioning-policies
Lists provisioningpolicies
This end-point lists all the ProvisioningPolicies in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-provisioning-policies)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.provisioning_policy_dto import ProvisioningPolicyDto
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

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-sources)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.source import Source
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

## put-provisioning-policy
Update provisioning policy by usagetype
This end-point updates the provisioning policy with the specified usage on the specified source in IdentityNow.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/v3/put-provisioning-policy)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.v3.models.usage_type import UsageType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    usage_type = sailpoint.v3.UsageType() # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
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


[API Spec](https://developer.sailpoint.com/docs/api/v3/put-source)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.source import Source
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

## put-source-schema
Update source schema (full)
This API will completely replace an existing Schema with the submitted payload. Some fields of the Schema cannot be updated. These fields are listed below.

* id
* name
* created
* modified

Any attempt to modify these fields will result in an error response with a status code of 400.

> `id` must remain in the request body, but it cannot be changed.  If `id` is omitted from the request body, the result will be a 400 error.


[API Spec](https://developer.sailpoint.com/docs/api/v3/put-source-schema)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema id. # str | The Schema id.
    model_schema = '''sailpoint.v3.ModelSchema()''' # ModelSchema | 

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

## update-provisioning-policies-in-bulk
Bulk update provisioning policies
This end-point updates a list of provisioning policies on the specified source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v3/update-provisioning-policies-in-bulk)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    provisioning_policy_dto = '''[sailpoint.v3.ProvisioningPolicyDto()]''' # List[ProvisioningPolicyDto] | 

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
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/v3/update-provisioning-policy)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.json_patch_operation import JsonPatchOperation
from sailpoint.v3.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.v3.models.usage_type import UsageType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    usage_type = sailpoint.v3.UsageType() # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
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


[API Spec](https://developer.sailpoint.com/docs/api/v3/update-source)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.json_patch_operation import JsonPatchOperation
from sailpoint.v3.models.source import Source
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


[API Spec](https://developer.sailpoint.com/docs/api/v3/update-source-schema)

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
from sailpoint.v3.api.sources_api import SourcesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.json_patch_operation import JsonPatchOperation
from sailpoint.v3.models.model_schema import ModelSchema
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source id. # str | The Source id.
    schema_id = '2c9180835d191a86015d28455b4a2329' # str | The Schema id. # str | The Schema id.
    json_patch_operation = '''[{op=add, path=/attributes/-, value={name=location, type=STRING, schema=null, description=Employee location, isMulti=false, isEntitlement=false, isGroup=false}}]''' # List[JsonPatchOperation] | The JSONPatch payload used to update the schema.

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



