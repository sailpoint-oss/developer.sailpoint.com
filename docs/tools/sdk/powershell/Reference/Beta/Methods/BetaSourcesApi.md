---
id: beta-sources
title: Sources
pagination_label: Sources
sidebar_label: Sources
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sources', 'BetaSources'] 
slug: /tools/sdk/powershell/beta/methods/sources
tags: ['SDK', 'Software Development Kit', 'Sources', 'BetaSources']
---

# Sources
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
[**New-BetaProvisioningPolicy**](#create-provisioning-policy) | **POST** `/sources/{sourceId}/provisioning-policies` | Create Provisioning Policy
[**New-BetaSource**](#create-source) | **POST** `/sources` | Creates a source in IdentityNow.
[**New-BetaSourceSchema**](#create-source-schema) | **POST** `/sources/{sourceId}/schemas` | Create Schema on Source
[**Remove-Beta**](#delete) | **DELETE** `/sources/{id}` | Delete Source by ID
[**Remove-BetaAccountsAsync**](#delete-accounts-async) | **POST** `/sources/{sourceId}/remove-accounts` | Remove All Accounts in a Source
[**Remove-BetaNativeChangeDetectionConfig**](#delete-native-change-detection-config) | **DELETE** `/sources/{sourceId}/native-change-detection-config` | Delete Native Change Detection Configuration
[**Remove-BetaProvisioningPolicy**](#delete-provisioning-policy) | **DELETE** `/sources/{sourceId}/provisioning-policies/{usageType}` | Delete Provisioning Policy by UsageType
[**Remove-BetaSourceSchema**](#delete-source-schema) | **DELETE** `/sources/{sourceId}/schemas/{schemaId}` | Delete Source Schema by ID
[**Get-BetaCorrelationConfig**](#get-correlation-config) | **GET** `/sources/{sourceId}/correlation-config` | Get Source Correlation Configuration
[**Get-BetaNativeChangeDetectionConfig**](#get-native-change-detection-config) | **GET** `/sources/{sourceId}/native-change-detection-config` | Native Change Detection Configuration
[**Get-BetaProvisioningPolicy**](#get-provisioning-policy) | **GET** `/sources/{sourceId}/provisioning-policies/{usageType}` | Get Provisioning Policy by UsageType
[**Get-BetaSource**](#get-source) | **GET** `/sources/{id}` | Get Source by ID
[**Get-BetaSourceAccountsSchema**](#get-source-accounts-schema) | **GET** `/sources/{sourceId}/schemas/accounts` | Downloads source accounts schema template
[**Get-BetaSourceAttrSyncConfig**](#get-source-attr-sync-config) | **GET** `/sources/{id}/attribute-sync-config` | Attribute Sync Config
[**Get-BetaSourceConfig**](#get-source-config) | **GET** `/sources/{id}/connectors/source-config` | Gets source config with language translations
[**Get-BetaSourceEntitlementRequestConfig**](#get-source-entitlement-request-config) | **GET** `/sources/{sourceId}/entitlement-request-config` | Get Source Entitlement Request Configuration
[**Get-BetaSourceEntitlementsSchema**](#get-source-entitlements-schema) | **GET** `/sources/{sourceId}/schemas/entitlements` | Downloads source entitlements schema template
[**Get-BetaSourceSchema**](#get-source-schema) | **GET** `/sources/{sourceId}/schemas/{schemaId}` | Get Source Schema by ID
[**Get-BetaSourceSchemas**](#get-source-schemas) | **GET** `/sources/{sourceId}/schemas` | List Schemas on Source
[**Import-BetaAccounts**](#import-accounts) | **POST** `/sources/{sourceId}/load-accounts` | Account Aggregation
[**Import-BetaEntitlements**](#import-entitlements) | **POST** `/sources/{sourceId}/load-entitlements` | Entitlement Aggregation
[**Import-BetaSourceAccountsSchema**](#import-source-accounts-schema) | **POST** `/sources/{sourceId}/schemas/accounts` | Uploads source accounts schema template
[**Import-BetaSourceConnectorFile**](#import-source-connector-file) | **POST** `/sources/{sourceId}/upload-connector-file` | Upload connector file to source
[**Import-BetaSourceEntitlementsSchema**](#import-source-entitlements-schema) | **POST** `/sources/{sourceId}/schemas/entitlements` | Uploads source entitlements schema template
[**Import-BetaUncorrelatedAccounts**](#import-uncorrelated-accounts) | **POST** `/sources/{sourceId}/load-uncorrelated-accounts` | Process Uncorrelated Accounts
[**Get-BetaProvisioningPolicies**](#list-provisioning-policies) | **GET** `/sources/{sourceId}/provisioning-policies` | Lists ProvisioningPolicies
[**Get-BetaSources**](#list-sources) | **GET** `/sources` | Lists all sources in IdentityNow.
[**Receive-BetaResourceObjects**](#peek-resource-objects) | **POST** `/sources/{sourceId}/connector/peek-resource-objects` | Peek source connector&#39;s resource objects
[**Ping-BetaCluster**](#ping-cluster) | **POST** `/sources/{sourceId}/connector/ping-cluster` | Ping cluster for source connector
[**Send-BetaCorrelationConfig**](#put-correlation-config) | **PUT** `/sources/{sourceId}/correlation-config` | Update Source Correlation Configuration
[**Send-BetaNativeChangeDetectionConfig**](#put-native-change-detection-config) | **PUT** `/sources/{sourceId}/native-change-detection-config` | Update Native Change Detection Configuration
[**Send-BetaProvisioningPolicy**](#put-provisioning-policy) | **PUT** `/sources/{sourceId}/provisioning-policies/{usageType}` | Update Provisioning Policy by UsageType
[**Send-BetaSource**](#put-source) | **PUT** `/sources/{id}` | Update Source (Full)
[**Send-BetaSourceAttrSyncConfig**](#put-source-attr-sync-config) | **PUT** `/sources/{id}/attribute-sync-config` | Update Attribute Sync Config
[**Send-BetaSourceSchema**](#put-source-schema) | **PUT** `/sources/{sourceId}/schemas/{schemaId}` | Update Source Schema (Full)
[**Sync-BetaAttributesForSource**](#sync-attributes-for-source) | **POST** `/sources/{sourceId}/synchronize-attributes` | Synchronize single source attributes.
[**Test-BetaSourceConfiguration**](#test-source-configuration) | **POST** `/sources/{sourceId}/connector/test-configuration` | Test configuration for source connector
[**Test-BetaSourceConnection**](#test-source-connection) | **POST** `/sources/{sourceId}/connector/check-connection` | Check connection for source connector.
[**Update-BetaProvisioningPoliciesInBulk**](#update-provisioning-policies-in-bulk) | **POST** `/sources/{sourceId}/provisioning-policies/bulk-update` | Bulk Update Provisioning Policies
[**Update-BetaProvisioningPolicy**](#update-provisioning-policy) | **PATCH** `/sources/{sourceId}/provisioning-policies/{usageType}` | Partial update of Provisioning Policy
[**Update-BetaSource**](#update-source) | **PATCH** `/sources/{id}` | Update Source (Partial)
[**Update-BetaSourceEntitlementRequestConfig**](#update-source-entitlement-request-config) | **PUT** `/sources/{sourceId}/entitlement-request-config` | Update Source Entitlement Request Configuration
[**Update-BetaSourceSchema**](#update-source-schema) | **PATCH** `/sources/{sourceId}/schemas/{schemaId}` | Update Source Schema (Partial)


## create-provisioning-policy
This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-provisioning-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id
 Body  | ProvisioningPolicyDto | [**ProvisioningPolicyDto**](../models/provisioning-policy-dto) | True  | 

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created ProvisioningPolicyDto object | ProvisioningPolicyDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source id
$ProvisioningPolicyDto = @"{
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
}"@

# Create Provisioning Policy

try {
    $Result = ConvertFrom-JsonToProvisioningPolicyDto -Json $ProvisioningPolicyDto
    New-BetaProvisioningPolicy -SourceId $SourceId -ProvisioningPolicyDto $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaProvisioningPolicy -SourceId $SourceId -ProvisioningPolicyDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaProvisioningPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-source
This creates a specific source with a full source JSON representation. Any passwords are submitted as plain-text and encrypted upon receipt in IdentityNow.
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-source)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Source | [**Source**](../models/source) | True  | 
  Query | ProvisionAsCsv | **Boolean** |   (optional) | If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don't set this query parameter and you attempt to set the `type` attribute directly, the request won't correctly generate the source.  

### Return type
[**Source**](../models/source)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created Source object. Any passwords will only show the the encrypted cipher-text, as they are not decrypt-able in IdentityNow cloud-based services, per IdentityNow security design. | Source
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Source = @"{
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
}"@
$ProvisionAsCsv = $false # Boolean | If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don't set this query parameter and you attempt to set the `type` attribute directly, the request won't correctly generate the source.   (optional)

# Creates a source in IdentityNow.

try {
    $Result = ConvertFrom-JsonToSource -Json $Source
    New-BetaSource -Source $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaSource -Source $Result -ProvisionAsCsv $ProvisionAsCsv  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-source-schema
Use this API to create a new schema on the specified source in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-source-schema)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID.
 Body  | Schema | [**Schema**](../models/schema) | True  | 

### Return type
[**Schema**](../models/schema)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The schema was successfully created on the specified source. | Schema
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | Source ID.
$Schema = @"{
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "nativeObjectType" : "User",
  "configuration" : {
    "groupMemberAttribute" : "member"
  },
  "created" : "2019-12-24T22:32:58.104Z",
  "includePermissions" : false,
  "name" : "account",
  "hierarchyAttribute" : "memberOf",
  "modified" : "2019-12-31T20:22:28.104Z",
  "attributes" : [ {
    "name" : "sAMAccountName",
    "type" : "STRING",
    "isMultiValued" : false,
    "isEntitlement" : false,
    "isGroup" : false
  }, {
    "name" : "memberOf",
    "type" : "STRING",
    "schema" : {
      "type" : "CONNECTOR_SCHEMA",
      "id" : "2c9180887671ff8c01767b4671fc7d60",
      "name" : "group"
    },
    "description" : "Group membership",
    "isMultiValued" : true,
    "isEntitlement" : true,
    "isGroup" : true
  } ],
  "id" : "2c9180835d191a86015d28455b4a2329",
  "displayAttribute" : "distinguishedName",
  "identityAttribute" : "sAMAccountName"
}"@

# Create Schema on Source

try {
    $Result = ConvertFrom-JsonToSchema -Json $Schema
    New-BetaSourceSchema -SourceId $SourceId -Schema $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaSourceSchema -SourceId $SourceId -Schema $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaSourceSchema"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete
Use this API to delete a specific source in Identity Security Cloud (ISC).
The API removes all the accounts on the source first, and then it deletes the source. You can retrieve the actual task execution status with this method: GET `/task-status/{id}`
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source ID.

### Return type
[**Delete202Response**](../models/delete202-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | Delete202Response
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | Source ID.

# Delete Source by ID

try {
    Remove-Beta -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-Beta -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-Beta"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-accounts-async
Use this endpoint to remove all accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.

This endpoint is good for:
* Removing accounts that no longer exist on the source.
* Removing accounts that won't be aggregated following updates to the source configuration.
* Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.


[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-accounts-async)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The source id

### Return type
[**TaskResultDto**](../models/task-result-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. Returns task result details of removal request. | TaskResultDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ebbf35756e1140699ce52b233121384a" # String | The source id

# Remove All Accounts in a Source

try {
    Remove-BetaAccountsAsync -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaAccountsAsync -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaAccountsAsync"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-native-change-detection-config
Deletes the native change detection configuration for the source specified by the given ID.
A token with API, or ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-native-change-detection-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The source id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The source id

# Delete Native Change Detection Configuration

try {
    Remove-BetaNativeChangeDetectionConfig -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaNativeChangeDetectionConfig -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaNativeChangeDetectionConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-provisioning-policy
Deletes the provisioning policy with the specified usage on an application.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-provisioning-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source ID.
Path   | UsageType | [**UsageType**](../models/usage-type) | True  | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source ID.
$UsageType = "CREATE" # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

# Delete Provisioning Policy by UsageType

try {
    Remove-BetaProvisioningPolicy -SourceId $SourceId -UsageType $UsageType 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaProvisioningPolicy -SourceId $SourceId -UsageType $UsageType  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaProvisioningPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-source-schema


[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-source-schema)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source ID.
Path   | SchemaId | **String** | True  | The Schema ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source ID.
$SchemaId = "2c9180835d191a86015d28455b4a2329" # String | The Schema ID.

# Delete Source Schema by ID

try {
    Remove-BetaSourceSchema -SourceId $SourceId -SchemaId $SchemaId 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaSourceSchema -SourceId $SourceId -SchemaId $SchemaId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaSourceSchema"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-correlation-config
This API returns the existing correlation configuration for a source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-correlation-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The source id

### Return type
[**CorrelationConfig**](../models/correlation-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Correlation configuration for a source | CorrelationConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The source id

# Get Source Correlation Configuration

try {
    Get-BetaCorrelationConfig -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaCorrelationConfig -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaCorrelationConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-native-change-detection-config
This API returns the existing native change detection configuration for a source specified by the given ID.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-native-change-detection-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The source id

### Return type
[**NativeChangeDetectionConfig**](../models/native-change-detection-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Native change detection configuration for a source | NativeChangeDetectionConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The source id

# Native Change Detection Configuration

try {
    Get-BetaNativeChangeDetectionConfig -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNativeChangeDetectionConfig -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNativeChangeDetectionConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-provisioning-policy
This end-point retrieves the ProvisioningPolicy with the specified usage on the specified Source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-provisioning-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source ID.
Path   | UsageType | [**UsageType**](../models/usage-type) | True  | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The requested ProvisioningPolicyDto was successfully retrieved. | ProvisioningPolicyDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source ID.
$UsageType = "CREATE" # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

# Get Provisioning Policy by UsageType

try {
    Get-BetaProvisioningPolicy -SourceId $SourceId -UsageType $UsageType 
    
    # Below is a request that includes all optional parameters
    # Get-BetaProvisioningPolicy -SourceId $SourceId -UsageType $UsageType  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaProvisioningPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-source
Use this API to get a source by a specified ID in Identity Security Cloud (ISC).
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source ID.

### Return type
[**Source**](../models/source)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Source object. | Source
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | Source ID.

# Get Source by ID

try {
    Get-BetaSource -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSource -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-source-accounts-schema


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-accounts-schema)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully downloaded the file | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example
```powershell
$SourceId = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The Source id

# Downloads source accounts schema template

try {
    Get-BetaSourceAccountsSchema -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSourceAccountsSchema -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSourceAccountsSchema"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-source-attr-sync-config
This API returns the existing attribute synchronization configuration for a source specified by the given ID. The response contains all attributes, regardless of whether they enabled or not.
A token with ORG_ADMIN or HELPDESK authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-attr-sync-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The source id

### Return type
[**AttrSyncSourceConfig**](../models/attr-sync-source-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Attribute synchronization configuration for a source | AttrSyncSourceConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | The source id

# Attribute Sync Config

try {
    Get-BetaSourceAttrSyncConfig -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSourceAttrSyncConfig -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSourceAttrSyncConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-source-config
Looks up and returns the source config for the requested source id after populating the source config values and applying language translations.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The Source id
  Query | Locale | **String** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to ""en""

### Return type
[**ConnectorDetail**](../models/connector-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Connector Detail object | ConnectorDetail
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "MyId" # String | The Source id
$Locale = "de" # String | The locale to apply to the config. If no viable locale is given, it will default to ""en"" (optional)

# Gets source config with language translations

try {
    Get-BetaSourceConfig -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSourceConfig -Id $Id -Locale $Locale  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSourceConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-source-entitlement-request-config
This API gets the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-entitlement-request-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id

### Return type
[**SourceEntitlementRequestConfig**](../models/source-entitlement-request-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Source Entitlement Request Configuration Details. | SourceEntitlementRequestConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The Source id

# Get Source Entitlement Request Configuration

try {
    Get-BetaSourceEntitlementRequestConfig -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSourceEntitlementRequestConfig -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSourceEntitlementRequestConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-source-entitlements-schema


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-entitlements-schema)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id
  Query | SchemaName | **String** |   (optional) | Name of entitlement schema

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully downloaded the file | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example
```powershell
$SourceId = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The Source id
$SchemaName = "?schemaName=group" # String | Name of entitlement schema (optional)

# Downloads source entitlements schema template

try {
    Get-BetaSourceEntitlementsSchema -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSourceEntitlementsSchema -SourceId $SourceId -SchemaName $SchemaName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSourceEntitlementsSchema"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-source-schema
Get the Source Schema by ID in IdentityNow.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-schema)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source ID.
Path   | SchemaId | **String** | True  | The Schema ID.

### Return type
[**Schema**](../models/schema)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The requested Schema was successfully retrieved. | Schema
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source ID.
$SchemaId = "2c9180835d191a86015d28455b4a2329" # String | The Schema ID.

# Get Source Schema by ID

try {
    Get-BetaSourceSchema -SourceId $SourceId -SchemaId $SchemaId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSourceSchema -SourceId $SourceId -SchemaId $SchemaId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSourceSchema"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-source-schemas
Use this API to list the schemas that exist on the specified source in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-schemas)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID.
  Query | IncludeTypes | **String** |   (optional) | If set to 'group', then the account schema is filtered and only group schemas are returned. Only a value of 'group' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas.
  Query | IncludeNames | **String** |   (optional) | A comma-separated list of schema names to filter result.

### Return type
[**Schema[]**](../models/schema)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The schemas were successfully retrieved. | Schema[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | Source ID.
$IncludeTypes = "group" # String | If set to 'group', then the account schema is filtered and only group schemas are returned. Only a value of 'group' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. (optional)
$IncludeNames = "account" # String | A comma-separated list of schema names to filter result. (optional)

# List Schemas on Source

try {
    Get-BetaSourceSchemas -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSourceSchemas -SourceId $SourceId -IncludeTypes $IncludeTypes -IncludeNames $IncludeNames  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSourceSchemas"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-accounts
Starts an account aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body.
You will also need to set the Content-Type header to `multipart/form-data`.
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-accounts)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source Id
   | File | **System.IO.FileInfo** |   (optional) | The CSV file containing the source accounts to aggregate.
   | DisableOptimization | **String** |   (optional) | Use this flag to reprocess every account whether or not the data has changed.

### Return type
[**LoadAccountsTask**](../models/load-accounts-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Aggregate Accounts Task | LoadAccountsTask
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source Id
$File =  # System.IO.FileInfo | The CSV file containing the source accounts to aggregate. (optional)
$DisableOptimization = "true" # String | Use this flag to reprocess every account whether or not the data has changed. (optional)

# Account Aggregation

try {
    Import-BetaAccounts -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Import-BetaAccounts -SourceId $SourceId -File $File -DisableOptimization $DisableOptimization  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-BetaAccounts"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-entitlements
Starts an entitlement aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body. 
You will also need to set the Content-Type header to `multipart/form-data`.
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-entitlements)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source Id
   | File | **System.IO.FileInfo** |   (optional) | The CSV file containing the source entitlements to aggregate.

### Return type
[**LoadEntitlementTask**](../models/load-entitlement-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Aggregate Entitlements Task | LoadEntitlementTask
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source Id
$File =  # System.IO.FileInfo | The CSV file containing the source entitlements to aggregate. (optional)

# Entitlement Aggregation

try {
    Import-BetaEntitlements -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Import-BetaEntitlements -SourceId $SourceId -File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-BetaEntitlements"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-source-accounts-schema
This API uploads a source schema template file to configure a source's account attributes.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-source-accounts-schema)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id
   | File | **System.IO.FileInfo** |   (optional) | 

### Return type
[**Schema**](../models/schema)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully uploaded the file | Schema
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$SourceId = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The Source id
$File =  # System.IO.FileInfo |  (optional)

# Uploads source accounts schema template

try {
    Import-BetaSourceAccountsSchema -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Import-BetaSourceAccountsSchema -SourceId $SourceId -File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-BetaSourceAccountsSchema"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-source-connector-file
This uploads a supplemental source connector file (like jdbc driver jars) to a source's S3 bucket. This also sends ETS and Audit events.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-source-connector-file)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id
   | File | **System.IO.FileInfo** |   (optional) | 

### Return type
[**Source**](../models/source)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Uploaded the file successfully and sent all post-upload events | Source
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$SourceId = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The Source id
$File =  # System.IO.FileInfo |  (optional)

# Upload connector file to source

try {
    Import-BetaSourceConnectorFile -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Import-BetaSourceConnectorFile -SourceId $SourceId -File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-BetaSourceConnectorFile"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-source-entitlements-schema
This API uploads a source schema template file to configure a source's entitlement attributes.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-source-entitlements-schema)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id
  Query | SchemaName | **String** |   (optional) | Name of entitlement schema
   | File | **System.IO.FileInfo** |   (optional) | 

### Return type
[**Schema**](../models/schema)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully uploaded the file | Schema
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$SourceId = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The Source id
$SchemaName = "?schemaName=group" # String | Name of entitlement schema (optional)
$File =  # System.IO.FileInfo |  (optional)

# Uploads source entitlements schema template

try {
    Import-BetaSourceEntitlementsSchema -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Import-BetaSourceEntitlementsSchema -SourceId $SourceId -SchemaName $SchemaName -File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-BetaSourceEntitlementsSchema"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-uncorrelated-accounts
File is required for upload. You will also need to set the Content-Type header to `multipart/form-data`

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-uncorrelated-accounts)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source Id
   | File | **System.IO.FileInfo** |   (optional) | 

### Return type
[**LoadUncorrelatedAccountsTask**](../models/load-uncorrelated-accounts-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Uncorrelated Accounts Task | LoadUncorrelatedAccountsTask
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$SourceId = "75dbec1ebe154d5785da27b95e1dd5d7" # String | Source Id
$File =  # System.IO.FileInfo |  (optional)

# Process Uncorrelated Accounts

try {
    Import-BetaUncorrelatedAccounts -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Import-BetaUncorrelatedAccounts -SourceId $SourceId -File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-BetaUncorrelatedAccounts"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-provisioning-policies
This end-point lists all the ProvisioningPolicies in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-provisioning-policies)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id

### Return type
[**ProvisioningPolicyDto[]**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of ProvisioningPolicyDto objects | ProvisioningPolicyDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source id

# Lists ProvisioningPolicies

try {
    Get-BetaProvisioningPolicies -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaProvisioningPolicies -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaProvisioningPolicies"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-sources
This end-point lists all the sources in IdentityNow.

A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-sources)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq*  **modified**: *eq*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType**
  Query | ForSubadmin | **String** |   (optional) | Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned.
  Query | IncludeIDNSource | **Boolean** |   (optional) (default to $false) | Include the IdentityNow source in the response.

### Return type
[**Source[]**](../models/source)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Source objects | Source[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name eq "Employees"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq*  **modified**: *eq*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** (optional)
$ForSubadmin = "name" # String | Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. (optional)
$IncludeIDNSource = $true # Boolean | Include the IdentityNow source in the response. (optional) (default to $false)

# Lists all sources in IdentityNow.

try {
    Get-BetaSources 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSources -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters -ForSubadmin $ForSubadmin -IncludeIDNSource $IncludeIDNSource  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSources"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## peek-resource-objects
Retrieves a sample of data returned from account and group aggregation requests.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/peek-resource-objects)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The ID of the Source
 Body  | ResourceObjectsRequest | [**ResourceObjectsRequest**](../models/resource-objects-request) | True  | 

### Return type
[**ResourceObjectsResponse**](../models/resource-objects-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of resource objects that was fetched from the source connector. | ResourceObjectsResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "cef3ee201db947c5912551015ba0c679" # String | The ID of the Source
$ResourceObjectsRequest = @"{
  "maxCount" : 100,
  "objectType" : "group"
}"@

# Peek source connector's resource objects

try {
    $Result = ConvertFrom-JsonToResourceObjectsRequest -Json $ResourceObjectsRequest
    Receive-BetaResourceObjects -SourceId $SourceId -ResourceObjectsRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Receive-BetaResourceObjects -SourceId $SourceId -ResourceObjectsRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Receive-BetaResourceObjects"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## ping-cluster
This endpoint validates that the cluster being used by the source is reachable from IdentityNow.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/ping-cluster)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The ID of the Source

### Return type
[**StatusResponse**](../models/status-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The result of pinging connection with the source connector. | StatusResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "cef3ee201db947c5912551015ba0c679" # String | The ID of the Source

# Ping cluster for source connector

try {
    Ping-BetaCluster -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Ping-BetaCluster -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Ping-BetaCluster"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-correlation-config
Replaces the correlation configuration for the source specified by the given ID with the configuration provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-correlation-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The source id
 Body  | CorrelationConfig | [**CorrelationConfig**](../models/correlation-config) | True  | 

### Return type
[**CorrelationConfig**](../models/correlation-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated correlation configuration for a source | CorrelationConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The source id
$CorrelationConfig = @"{
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
}"@

# Update Source Correlation Configuration

try {
    $Result = ConvertFrom-JsonToCorrelationConfig -Json $CorrelationConfig
    Send-BetaCorrelationConfig -SourceId $SourceId -CorrelationConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaCorrelationConfig -SourceId $SourceId -CorrelationConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaCorrelationConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-native-change-detection-config
Replaces the native change detection configuration for the source specified by the given ID with the configuration provided in the request body.
    
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-native-change-detection-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The source id
 Body  | NativeChangeDetectionConfig | [**NativeChangeDetectionConfig**](../models/native-change-detection-config) | True  | 

### Return type
[**NativeChangeDetectionConfig**](../models/native-change-detection-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated native change detection configuration for a source | NativeChangeDetectionConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The source id
$NativeChangeDetectionConfig = @"{
  "selectedEntitlements" : [ "memberOf", "memberOfSharedMailbox" ],
  "operations" : [ "ACCOUNT_UPDATED", "ACCOUNT_DELETED" ],
  "selectedNonEntitlementAttributes" : [ "lastName", "phoneNumber", "objectType", "servicePrincipalName" ],
  "allNonEntitlementAttributes" : false,
  "allEntitlements" : false,
  "enabled" : true
}"@

# Update Native Change Detection Configuration

try {
    $Result = ConvertFrom-JsonToNativeChangeDetectionConfig -Json $NativeChangeDetectionConfig
    Send-BetaNativeChangeDetectionConfig -SourceId $SourceId -NativeChangeDetectionConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaNativeChangeDetectionConfig -SourceId $SourceId -NativeChangeDetectionConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaNativeChangeDetectionConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-provisioning-policy
This end-point updates the provisioning policy with the specified usage on the specified source in IdentityNow.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-provisioning-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source ID.
Path   | UsageType | [**UsageType**](../models/usage-type) | True  | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
 Body  | ProvisioningPolicyDto | [**ProvisioningPolicyDto**](../models/provisioning-policy-dto) | True  | 

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The ProvisioningPolicyDto was successfully replaced. | ProvisioningPolicyDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source ID.
$UsageType = "CREATE" # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
$ProvisioningPolicyDto = @"{
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
}"@

# Update Provisioning Policy by UsageType

try {
    $Result = ConvertFrom-JsonToProvisioningPolicyDto -Json $ProvisioningPolicyDto
    Send-BetaProvisioningPolicy -SourceId $SourceId -UsageType $UsageType -ProvisioningPolicyDto $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaProvisioningPolicy -SourceId $SourceId -UsageType $UsageType -ProvisioningPolicyDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaProvisioningPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-source
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
Path   | Id | **String** | True  | Source ID.
 Body  | Source | [**Source**](../models/source) | True  | 

### Return type
[**Source**](../models/source)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Source object. Any passwords will only show the the encrypted cipher-text so that they aren&#39;t decryptable in Identity Security Cloud (ISC) cloud-based services, per ISC security design. | Source
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | Source ID.
$Source = @"{
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
}"@

# Update Source (Full)

try {
    $Result = ConvertFrom-JsonToSource -Json $Source
    Send-BetaSource -Id $Id -Source $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaSource -Id $Id -Source $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-source-attr-sync-config
Replaces the attribute synchronization configuration for the source specified by the given ID with the configuration provided in the request body. Only the "enabled" field of the values in the "attributes" array is mutable. Attempting to change other attributes or add new values to the "attributes" array will result in an error.
    
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-source-attr-sync-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The source id
 Body  | AttrSyncSourceConfig | [**AttrSyncSourceConfig**](../models/attr-sync-source-config) | True  | 

### Return type
[**AttrSyncSourceConfig**](../models/attr-sync-source-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated attribute synchronization configuration for a source | AttrSyncSourceConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | The source id
$AttrSyncSourceConfig = @"{
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
}"@

# Update Attribute Sync Config

try {
    $Result = ConvertFrom-JsonToAttrSyncSourceConfig -Json $AttrSyncSourceConfig
    Send-BetaSourceAttrSyncConfig -Id $Id -AttrSyncSourceConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaSourceAttrSyncConfig -Id $Id -AttrSyncSourceConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaSourceAttrSyncConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-source-schema
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
Path   | SourceId | **String** | True  | The Source ID.
Path   | SchemaId | **String** | True  | The Schema ID.
 Body  | Schema | [**Schema**](../models/schema) | True  | 

### Return type
[**Schema**](../models/schema)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Schema was successfully replaced. | Schema
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source ID.
$SchemaId = "2c9180835d191a86015d28455b4a2329" # String | The Schema ID.
$Schema = @"{
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "nativeObjectType" : "User",
  "configuration" : {
    "groupMemberAttribute" : "member"
  },
  "created" : "2019-12-24T22:32:58.104Z",
  "includePermissions" : false,
  "name" : "account",
  "hierarchyAttribute" : "memberOf",
  "modified" : "2019-12-31T20:22:28.104Z",
  "attributes" : [ {
    "name" : "sAMAccountName",
    "type" : "STRING",
    "isMultiValued" : false,
    "isEntitlement" : false,
    "isGroup" : false
  }, {
    "name" : "memberOf",
    "type" : "STRING",
    "schema" : {
      "type" : "CONNECTOR_SCHEMA",
      "id" : "2c9180887671ff8c01767b4671fc7d60",
      "name" : "group"
    },
    "description" : "Group membership",
    "isMultiValued" : true,
    "isEntitlement" : true,
    "isGroup" : true
  } ],
  "id" : "2c9180835d191a86015d28455b4a2329",
  "displayAttribute" : "distinguishedName",
  "identityAttribute" : "sAMAccountName"
}"@

# Update Source Schema (Full)

try {
    $Result = ConvertFrom-JsonToSchema -Json $Schema
    Send-BetaSourceSchema -SourceId $SourceId -SchemaId $SchemaId -Schema $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaSourceSchema -SourceId $SourceId -SchemaId $SchemaId -Schema $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaSourceSchema"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## sync-attributes-for-source
This end-point performs attribute synchronization for a selected source.
A token with ORG_ADMIN or SOURCE_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/sync-attributes-for-source)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id

### Return type
[**SourceSyncJob**](../models/source-sync-job)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | A Source Sync job | SourceSyncJob
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "MySourceId" # String | The Source id

# Synchronize single source attributes.

try {
    Sync-BetaAttributesForSource -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Sync-BetaAttributesForSource -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Sync-BetaAttributesForSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## test-source-configuration
This endpoint performs a more detailed validation of the source's configuration that can take longer than the lighter weight credential validation performed by the checkConnection API.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/test-source-configuration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The ID of the Source

### Return type
[**StatusResponse**](../models/status-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The result of testing source connector configuration with response from it. | StatusResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "cef3ee201db947c5912551015ba0c679" # String | The ID of the Source

# Test configuration for source connector

try {
    Test-BetaSourceConfiguration -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Test-BetaSourceConfiguration -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-BetaSourceConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## test-source-connection
This endpoint validates that the configured credentials are valid and will properly authenticate with the source identified by the sourceId path parameter.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/test-source-connection)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The ID of the Source.

### Return type
[**StatusResponse**](../models/status-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The result of checking connection to the source connector with response from it. | StatusResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "cef3ee201db947c5912551015ba0c679" # String | The ID of the Source.

# Check connection for source connector.

try {
    Test-BetaSourceConnection -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Test-BetaSourceConnection -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-BetaSourceConnection"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-provisioning-policies-in-bulk
This end-point updates a list of provisioning policies on the specified source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-provisioning-policies-in-bulk)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id.
 Body  | ProvisioningPolicyDto | [**[]ProvisioningPolicyDto**](../models/provisioning-policy-dto) | True  | 

### Return type
[**ProvisioningPolicyDto[]**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of the ProvisioningPolicyDto was successfully replaced. | ProvisioningPolicyDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source id.
 $ProvisioningPolicyDto = @"{
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
}"@ # ProvisioningPolicyDto[] | 
 

# Bulk Update Provisioning Policies

try {
    $Result = ConvertFrom-JsonToProvisioningPolicyDto -Json $ProvisioningPolicyDto
    Update-BetaProvisioningPoliciesInBulk -SourceId $SourceId -ProvisioningPolicyDto $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaProvisioningPoliciesInBulk -SourceId $SourceId -ProvisioningPolicyDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaProvisioningPoliciesInBulk"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-provisioning-policy
This API selectively updates an existing Provisioning Policy using a JSONPatch payload.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-provisioning-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id.
Path   | UsageType | [**UsageType**](../models/usage-type) | True  | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | The JSONPatch payload used to update the schema.

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The ProvisioningPolicyDto was successfully updated. | ProvisioningPolicyDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source id.
$UsageType = "CREATE" # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | The JSONPatch payload used to update the schema.
 

# Partial update of Provisioning Policy

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BetaProvisioningPolicy -SourceId $SourceId -UsageType $UsageType -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaProvisioningPolicy -SourceId $SourceId -UsageType $UsageType -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaProvisioningPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-source
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
Path   | Id | **String** | True  | Source ID.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).

### Return type
[**Source**](../models/source)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Source object. Any passwords will only show the the encrypted cipher-text so that they are not decryptable in Identity Security Cloud cloud-based services, per ISC security design. | Source
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | Source ID.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).
 

# Update Source (Partial)

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BetaSource -Id $Id -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaSource -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-source-entitlement-request-config
This API replaces the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-source-entitlement-request-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id
 Body  | SourceEntitlementRequestConfig | [**SourceEntitlementRequestConfig**](../models/source-entitlement-request-config) | True  | 

### Return type
[**SourceEntitlementRequestConfig**](../models/source-entitlement-request-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Source Entitlement Request Configuration Details. | SourceEntitlementRequestConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The Source id
$SourceEntitlementRequestConfig = @"{
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
}"@

# Update Source Entitlement Request Configuration

try {
    $Result = ConvertFrom-JsonToSourceEntitlementRequestConfig -Json $SourceEntitlementRequestConfig
    Update-BetaSourceEntitlementRequestConfig -SourceId $SourceId -SourceEntitlementRequestConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaSourceEntitlementRequestConfig -SourceId $SourceId -SourceEntitlementRequestConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaSourceEntitlementRequestConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-source-schema
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
Path   | SourceId | **String** | True  | The Source id.
Path   | SchemaId | **String** | True  | The Schema id.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | The JSONPatch payload used to update the schema.

### Return type
[**Schema**](../models/schema)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Schema was successfully updated. | Schema
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source id.
$SchemaId = "2c9180835d191a86015d28455b4a2329" # String | The Schema id.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | The JSONPatch payload used to update the schema.
 

# Update Source Schema (Partial)

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BetaSourceSchema -SourceId $SourceId -SchemaId $SchemaId -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaSourceSchema -SourceId $SourceId -SchemaId $SchemaId -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaSourceSchema"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
