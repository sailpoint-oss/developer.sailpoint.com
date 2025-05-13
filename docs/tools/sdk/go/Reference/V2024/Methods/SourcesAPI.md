---
id: v2024-sources
title: Sources
pagination_label: Sources
sidebar_label: Sources
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sources', 'V2024Sources'] 
slug: /tools/sdk/go/v2024/methods/sources
tags: ['SDK', 'Software Development Kit', 'Sources', 'V2024Sources']
---

# SourcesAPI
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
[**create-provisioning-policy**](#create-provisioning-policy) | **Post** `/sources/{sourceId}/provisioning-policies` | Create Provisioning Policy
[**create-source**](#create-source) | **Post** `/sources` | Creates a source in IdentityNow.
[**create-source-schedule**](#create-source-schedule) | **Post** `/sources/{sourceId}/schedules` | Create Schedule on Source
[**create-source-schema**](#create-source-schema) | **Post** `/sources/{sourceId}/schemas` | Create Schema on Source
[**delete-accounts-async**](#delete-accounts-async) | **Post** `/sources/{id}/remove-accounts` | Remove All Accounts in a Source
[**delete-native-change-detection-config**](#delete-native-change-detection-config) | **Delete** `/sources/{sourceId}/native-change-detection-config` | Delete Native Change Detection Configuration
[**delete-provisioning-policy**](#delete-provisioning-policy) | **Delete** `/sources/{sourceId}/provisioning-policies/{usageType}` | Delete Provisioning Policy by UsageType
[**delete-source**](#delete-source) | **Delete** `/sources/{id}` | Delete Source by ID
[**delete-source-schedule**](#delete-source-schedule) | **Delete** `/sources/{sourceId}/schedules/{scheduleType}` | Delete Source Schedule by type.
[**delete-source-schema**](#delete-source-schema) | **Delete** `/sources/{sourceId}/schemas/{schemaId}` | Delete Source Schema by ID
[**get-accounts-schema**](#get-accounts-schema) | **Get** `/sources/{id}/schemas/accounts` | Downloads source accounts schema template
[**get-correlation-config**](#get-correlation-config) | **Get** `/sources/{id}/correlation-config` | Get Source Correlation Configuration
[**get-entitlements-schema**](#get-entitlements-schema) | **Get** `/sources/{id}/schemas/entitlements` | Downloads source entitlements schema template
[**get-native-change-detection-config**](#get-native-change-detection-config) | **Get** `/sources/{sourceId}/native-change-detection-config` | Native Change Detection Configuration
[**get-provisioning-policy**](#get-provisioning-policy) | **Get** `/sources/{sourceId}/provisioning-policies/{usageType}` | Get Provisioning Policy by UsageType
[**get-source**](#get-source) | **Get** `/sources/{id}` | Get Source by ID
[**get-source-attr-sync-config**](#get-source-attr-sync-config) | **Get** `/sources/{id}/attribute-sync-config` | Attribute Sync Config
[**get-source-config**](#get-source-config) | **Get** `/sources/{id}/connectors/source-config` | Gets source config with language-translations
[**get-source-connections**](#get-source-connections) | **Get** `/sources/{sourceId}/connections` | Get Source Connections by ID
[**get-source-entitlement-request-config**](#get-source-entitlement-request-config) | **Get** `/sources/{id}/entitlement-request-config` | Get Source Entitlement Request Configuration
[**get-source-health**](#get-source-health) | **Get** `/sources/{sourceId}/source-health` | Fetches source health by id
[**get-source-schedule**](#get-source-schedule) | **Get** `/sources/{sourceId}/schedules/{scheduleType}` | Get Source Schedule by Type
[**get-source-schedules**](#get-source-schedules) | **Get** `/sources/{sourceId}/schedules` | List Schedules on Source
[**get-source-schema**](#get-source-schema) | **Get** `/sources/{sourceId}/schemas/{schemaId}` | Get Source Schema by ID
[**get-source-schemas**](#get-source-schemas) | **Get** `/sources/{sourceId}/schemas` | List Schemas on Source
[**import-accounts**](#import-accounts) | **Post** `/sources/{id}/load-accounts` | Account Aggregation
[**import-accounts-schema**](#import-accounts-schema) | **Post** `/sources/{id}/schemas/accounts` | Uploads source accounts schema template
[**import-connector-file**](#import-connector-file) | **Post** `/sources/{sourceId}/upload-connector-file` | Upload connector file to source
[**import-entitlements-schema**](#import-entitlements-schema) | **Post** `/sources/{id}/schemas/entitlements` | Uploads source entitlements schema template
[**import-uncorrelated-accounts**](#import-uncorrelated-accounts) | **Post** `/sources/{id}/load-uncorrelated-accounts` | Process Uncorrelated Accounts
[**list-provisioning-policies**](#list-provisioning-policies) | **Get** `/sources/{sourceId}/provisioning-policies` | Lists ProvisioningPolicies
[**list-sources**](#list-sources) | **Get** `/sources` | Lists all sources in IdentityNow.
[**ping-cluster**](#ping-cluster) | **Post** `/sources/{sourceId}/connector/ping-cluster` | Ping cluster for source connector
[**put-correlation-config**](#put-correlation-config) | **Put** `/sources/{id}/correlation-config` | Update Source Correlation Configuration
[**put-native-change-detection-config**](#put-native-change-detection-config) | **Put** `/sources/{sourceId}/native-change-detection-config` | Update Native Change Detection Configuration
[**put-provisioning-policy**](#put-provisioning-policy) | **Put** `/sources/{sourceId}/provisioning-policies/{usageType}` | Update Provisioning Policy by UsageType
[**put-source**](#put-source) | **Put** `/sources/{id}` | Update Source (Full)
[**put-source-attr-sync-config**](#put-source-attr-sync-config) | **Put** `/sources/{id}/attribute-sync-config` | Update Attribute Sync Config
[**put-source-schema**](#put-source-schema) | **Put** `/sources/{sourceId}/schemas/{schemaId}` | Update Source Schema (Full)
[**search-resource-objects**](#search-resource-objects) | **Post** `/sources/{sourceId}/connector/peek-resource-objects` | Peek source connector&#39;s resource objects
[**sync-attributes-for-source**](#sync-attributes-for-source) | **Post** `/sources/{id}/synchronize-attributes` | Synchronize single source attributes.
[**test-source-configuration**](#test-source-configuration) | **Post** `/sources/{sourceId}/connector/test-configuration` | Test configuration for source connector
[**test-source-connection**](#test-source-connection) | **Post** `/sources/{sourceId}/connector/check-connection` | Check connection for source connector.
[**update-password-policy-holders**](#update-password-policy-holders) | **Patch** `/sources/{sourceId}/password-policies` | Update Password Policy
[**update-provisioning-policies-in-bulk**](#update-provisioning-policies-in-bulk) | **Post** `/sources/{sourceId}/provisioning-policies/bulk-update` | Bulk Update Provisioning Policies
[**update-provisioning-policy**](#update-provisioning-policy) | **Patch** `/sources/{sourceId}/provisioning-policies/{usageType}` | Partial update of Provisioning Policy
[**update-source**](#update-source) | **Patch** `/sources/{id}` | Update Source (Partial)
[**update-source-entitlement-request-config**](#update-source-entitlement-request-config) | **Put** `/sources/{id}/entitlement-request-config` | Update Source Entitlement Request Configuration
[**update-source-schedule**](#update-source-schedule) | **Patch** `/sources/{sourceId}/schedules/{scheduleType}` | Update Source Schedule (Partial)
[**update-source-schema**](#update-source-schema) | **Patch** `/sources/{sourceId}/schemas/{schemaId}` | Update Source Schema (Partial)


## create-provisioning-policy
Create Provisioning Policy
This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-provisioning-policy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateProvisioningPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **provisioningPolicyDto** | [**ProvisioningPolicyDto**](../models/provisioning-policy-dto) |  | 

### Return type

[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id # string | The Source id
    provisioningpolicydto := []byte(`{
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
        }`) // ProvisioningPolicyDto | 

  
   var provisioningPolicyDto v2024.ProvisioningPolicyDto
   if err := json.Unmarshal(provisioningpolicydto, &provisioningPolicyDto); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.CreateProvisioningPolicy(context.Background(), sourceId).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.CreateProvisioningPolicy(context.Background(), sourceId).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.CreateProvisioningPolicy``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateProvisioningPolicy`: ProvisioningPolicyDto
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.CreateProvisioningPolicy`: %v\n", resp)
}
```

[[Back to top]](#)

## create-source
Creates a source in IdentityNow.
This creates a specific source with a full source JSON representation. Any passwords are submitted as plain-text and encrypted upon receipt in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-source)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | [**Source**](../models/source) |  | 
 **provisionAsCsv** | **bool** | If this parameter is &#x60;true&#x60;, it configures the source as a Delimited File (CSV) source. Setting this to &#x60;true&#x60; will automatically set the &#x60;type&#x60; of the source to &#x60;DelimitedFile&#x60;.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don&#39;t set this query parameter and you attempt to set the &#x60;type&#x60; attribute directly, the request won&#39;t correctly generate the source.   | 

### Return type

[**Source**](../models/source)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    source := []byte(`{
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
        }`) // Source | 
    provisionAsCsv := false // bool | If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don't set this query parameter and you attempt to set the `type` attribute directly, the request won't correctly generate the source.   (optional) # bool | If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don't set this query parameter and you attempt to set the `type` attribute directly, the request won't correctly generate the source.   (optional)

  
   var source v2024.Source
   if err := json.Unmarshal(source, &source); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.CreateSource(context.Background()).Source(source).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.CreateSource(context.Background()).Source(source).ProvisionAsCsv(provisionAsCsv).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.CreateSource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateSource`: Source
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.CreateSource`: %v\n", resp)
}
```

[[Back to top]](#)

## create-source-schedule
Create Schedule on Source
Use this API to create a new schedule for a type on the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-source-schedule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **schedule1** | [**Schedule1**](../models/schedule1) |  | 

### Return type

[**Schedule1**](../models/schedule1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    schedule1 := []byte(``) // Schedule1 | 

  
   var schedule1 v2024.Schedule1
   if err := json.Unmarshal(schedule1, &schedule1); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.CreateSourceSchedule(context.Background(), sourceId).Schedule1(schedule1).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.CreateSourceSchedule(context.Background(), sourceId).Schedule1(schedule1).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.CreateSourceSchedule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateSourceSchedule`: Schedule1
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.CreateSourceSchedule`: %v\n", resp)
}
```

[[Back to top]](#)

## create-source-schema
Create Schema on Source
Use this API to create a new schema on the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-source-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceSchemaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **schema** | [**Schema**](../models/schema) |  | 

### Return type

[**Schema**](../models/schema)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    schema := []byte(`{
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
        }`) // Schema | 

  
   var schema v2024.Schema
   if err := json.Unmarshal(schema, &schema); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.CreateSourceSchema(context.Background(), sourceId).Schema(schema).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.CreateSourceSchema(context.Background(), sourceId).Schema(schema).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.CreateSourceSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateSourceSchema`: Schema
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.CreateSourceSchema`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-accounts-async
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Remove All Accounts in a Source
Use this endpoint to remove all accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.

This endpoint is good for:
* Removing accounts that no longer exist on the source.
* Removing accounts that won't be aggregated following updates to the source configuration.
* Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-accounts-async)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccountsAsyncRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**TaskResultDto**](../models/task-result-dto)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ebbf35756e1140699ce52b233121384a` // string | The source id # string | The source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.DeleteAccountsAsync(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.DeleteAccountsAsync(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteAccountsAsync``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteAccountsAsync`: TaskResultDto
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.DeleteAccountsAsync`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-native-change-detection-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Delete Native Change Detection Configuration
Deletes the native change detection configuration for the source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-native-change-detection-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNativeChangeDetectionConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.SourcesAPI.DeleteNativeChangeDetectionConfig(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	//r, err := apiClient.V2024.SourcesAPI.DeleteNativeChangeDetectionConfig(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteNativeChangeDetectionConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-provisioning-policy
Delete Provisioning Policy by UsageType
Deletes the provisioning policy with the specified usage on an application.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-provisioning-policy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**usageType** | [**UsageType**](../models/) | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to &#39;Create Account Profile&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to &#39;Update Account Profile&#39;, the provisioning template for the &#39;Update&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to &#39;Enable Account Profile&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner&#39;s account is created.  DISABLE - This usage type relates to &#39;Disable Account Profile&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteProvisioningPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    usageType := CREATE // UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.SourcesAPI.DeleteProvisioningPolicy(context.Background(), sourceId, usageType).Execute()
	//r, err := apiClient.V2024.SourcesAPI.DeleteProvisioningPolicy(context.Background(), sourceId, usageType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteProvisioningPolicy``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-source
Delete Source by ID
Use this API to delete a specific source in Identity Security Cloud (ISC).
The API removes all the accounts on the source first, and then it deletes the source. You can retrieve the actual task execution status with this method: GET `/task-status/{id}`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-source)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeleteSource202Response**](../models/delete-source202-response)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.DeleteSource(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.DeleteSource(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteSource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteSource`: DeleteSource202Response
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.DeleteSource`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-source-schedule
Delete Source Schedule by type.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-source-schedule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**scheduleType** | **string** | The Schedule type. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSourceScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    scheduleType := `ACCOUNT_AGGREGATION` // string | The Schedule type. # string | The Schedule type.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.SourcesAPI.DeleteSourceSchedule(context.Background(), sourceId, scheduleType).Execute()
	//r, err := apiClient.V2024.SourcesAPI.DeleteSourceSchedule(context.Background(), sourceId, scheduleType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteSourceSchedule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-source-schema
Delete Source Schema by ID


[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-source-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**schemaId** | **string** | The Schema id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSourceSchemaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    schemaId := `2c9180835d191a86015d28455b4a2329` // string | The Schema id. # string | The Schema id.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.SourcesAPI.DeleteSourceSchema(context.Background(), sourceId, schemaId).Execute()
	//r, err := apiClient.V2024.SourcesAPI.DeleteSourceSchema(context.Background(), sourceId, schemaId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteSourceSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-accounts-schema
Downloads source accounts schema template
This API downloads the CSV schema that defines the account attributes on a source.
>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-accounts-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccountsSchemaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.SourcesAPI.GetAccountsSchema(context.Background(), id).Execute()
	//r, err := apiClient.V2024.SourcesAPI.GetAccountsSchema(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetAccountsSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-correlation-config
Get Source Correlation Configuration
This API returns the existing correlation configuration for a source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-correlation-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCorrelationConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CorrelationConfig**](../models/correlation-config)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.GetCorrelationConfig(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.GetCorrelationConfig(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetCorrelationConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCorrelationConfig`: CorrelationConfig
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetCorrelationConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-entitlements-schema
Downloads source entitlements schema template
This API downloads the CSV schema that defines the entitlement attributes on a source.

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-entitlements-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementsSchemaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **schemaName** | **string** | Name of entitlement schema | 

### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    schemaName := `?schemaName=group` // string | Name of entitlement schema (optional) # string | Name of entitlement schema (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.SourcesAPI.GetEntitlementsSchema(context.Background(), id).Execute()
	//r, err := apiClient.V2024.SourcesAPI.GetEntitlementsSchema(context.Background(), id).SchemaName(schemaName).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetEntitlementsSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-native-change-detection-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Native Change Detection Configuration
This API returns the existing native change detection configuration for a source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-native-change-detection-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNativeChangeDetectionConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**NativeChangeDetectionConfig**](../models/native-change-detection-config)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.GetNativeChangeDetectionConfig(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.GetNativeChangeDetectionConfig(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetNativeChangeDetectionConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetNativeChangeDetectionConfig`: NativeChangeDetectionConfig
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetNativeChangeDetectionConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-provisioning-policy
Get Provisioning Policy by UsageType
This end-point retrieves the ProvisioningPolicy with the specified usage on the specified Source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-provisioning-policy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**usageType** | [**UsageType**](../models/) | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to &#39;Create Account Profile&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to &#39;Update Account Profile&#39;, the provisioning template for the &#39;Update&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to &#39;Enable Account Profile&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner&#39;s account is created.  DISABLE - This usage type relates to &#39;Disable Account Profile&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProvisioningPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    usageType := CREATE // UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.GetProvisioningPolicy(context.Background(), sourceId, usageType).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.GetProvisioningPolicy(context.Background(), sourceId, usageType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetProvisioningPolicy``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetProvisioningPolicy`: ProvisioningPolicyDto
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetProvisioningPolicy`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source
Get Source by ID
Use this API to get a source by a specified ID in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Source**](../models/source)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.GetSource(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.GetSource(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSource`: Source
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSource`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-attr-sync-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Attribute Sync Config
This API returns the existing attribute synchronization configuration for a source specified by the given ID. The response contains all attributes, regardless of whether they enabled or not.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-attr-sync-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceAttrSyncConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**AttrSyncSourceConfig**](../models/attr-sync-source-config)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.GetSourceAttrSyncConfig(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.GetSourceAttrSyncConfig(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceAttrSyncConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSourceAttrSyncConfig`: AttrSyncSourceConfig
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceAttrSyncConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-config
Gets source config with language-translations
Looks up and returns the source config for the requested source id after populating the source config values and applying language translations.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **locale** | **string** | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | 

### Return type

[**ConnectorDetail**](../models/connector-detail)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `cef3ee201db947c5912551015ba0c679` // string | The Source id # string | The Source id
    locale := `en` // string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.GetSourceConfig(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.GetSourceConfig(context.Background(), id).Locale(locale).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSourceConfig`: ConnectorDetail
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-connections
Get Source Connections by ID
Use this API to get all dependent Profiles, Attributes, Applications and Custom Transforms for a source by a specified ID in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-connections)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceConnectionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SourceConnectionsDto**](../models/source-connections-dto)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.GetSourceConnections(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.GetSourceConnections(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceConnections``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSourceConnections`: SourceConnectionsDto
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceConnections`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-entitlement-request-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get Source Entitlement Request Configuration
This API gets the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-entitlement-request-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceEntitlementRequestConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**SourceEntitlementRequestConfig**](../models/source-entitlement-request-config)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.GetSourceEntitlementRequestConfig(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.GetSourceEntitlementRequestConfig(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceEntitlementRequestConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSourceEntitlementRequestConfig`: SourceEntitlementRequestConfig
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceEntitlementRequestConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-health
Fetches source health by id
This endpoint fetches source health by source's id

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-health)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceHealthRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SourceHealthDto**](../models/source-health-dto)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.GetSourceHealth(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.GetSourceHealth(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceHealth``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSourceHealth`: SourceHealthDto
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceHealth`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-schedule
Get Source Schedule by Type
Get the source schedule by type in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-schedule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**scheduleType** | **string** | The Schedule type. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Schedule1**](../models/schedule1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    scheduleType := `ACCOUNT_AGGREGATION` // string | The Schedule type. # string | The Schedule type.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.GetSourceSchedule(context.Background(), sourceId, scheduleType).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.GetSourceSchedule(context.Background(), sourceId, scheduleType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceSchedule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSourceSchedule`: Schedule1
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceSchedule`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-schedules
List Schedules on Source
Use this API to list the schedules that exist on the specified source in Identity Security Cloud (ISC).
:::info
This endpoint uses a **cron expression** to schedule a task, following standard **cron job syntax**.

For example, `0 0 12 1/1 * ? *` runs the task **daily at 12:00 PM**.

**Days of the week are represented as 1-7 (Sunday-Saturday).**
:::


[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-schedules)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]Schedule1**](../models/schedule1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.GetSourceSchedules(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.GetSourceSchedules(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceSchedules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSourceSchedules`: []Schedule1
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceSchedules`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-schema
Get Source Schema by ID
Get the Source Schema by ID in IdentityNow.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**schemaId** | **string** | The Schema id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceSchemaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Schema**](../models/schema)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    schemaId := `2c9180835d191a86015d28455b4a2329` // string | The Schema id. # string | The Schema id.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.GetSourceSchema(context.Background(), sourceId, schemaId).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.GetSourceSchema(context.Background(), sourceId, schemaId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSourceSchema`: Schema
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceSchema`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-schemas
List Schemas on Source
Use this API to list the schemas that exist on the specified source in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-source-schemas)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceSchemasRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **includeTypes** | **string** | If set to &#39;group&#39;, then the account schema is filtered and only group schemas are returned. Only a value of &#39;group&#39; is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. | 
 **includeNames** | **string** | A comma-separated list of schema names to filter result. | 

### Return type

[**[]Schema**](../models/schema)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    includeTypes := `group` // string | If set to 'group', then the account schema is filtered and only group schemas are returned. Only a value of 'group' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. (optional) # string | If set to 'group', then the account schema is filtered and only group schemas are returned. Only a value of 'group' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. (optional)
    includeNames := `account` // string | A comma-separated list of schema names to filter result. (optional) # string | A comma-separated list of schema names to filter result. (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.GetSourceSchemas(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.GetSourceSchemas(context.Background(), sourceId).IncludeTypes(includeTypes).IncludeNames(includeNames).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceSchemas``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSourceSchemas`: []Schema
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceSchemas`: %v\n", resp)
}
```

[[Back to top]](#)

## import-accounts
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Account Aggregation
Starts an account aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body.
You will also need to set the Content-Type header to `multipart/form-data`.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/import-accounts)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportAccountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **file** | ***os.File** | The CSV file containing the source accounts to aggregate. | 
 **disableOptimization** | **string** | Use this flag to reprocess every account whether or not the data has changed. | 

### Return type

[**LoadAccountsTask**](../models/load-accounts-task)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source Id # string | Source Id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    file := BINARY_DATA_HERE // *os.File | The CSV file containing the source accounts to aggregate. (optional) # *os.File | The CSV file containing the source accounts to aggregate. (optional)
    disableOptimization := `disableOptimization_example` // string | Use this flag to reprocess every account whether or not the data has changed. (optional) # string | Use this flag to reprocess every account whether or not the data has changed. (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.ImportAccounts(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.ImportAccounts(context.Background(), id).XSailPointExperimental(xSailPointExperimental).File(file).DisableOptimization(disableOptimization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportAccounts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportAccounts`: LoadAccountsTask
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportAccounts`: %v\n", resp)
}
```

[[Back to top]](#)

## import-accounts-schema
Uploads source accounts schema template
This API uploads a source schema template file to configure a source's account attributes.

To retrieve the file to modify and upload, log into Identity Now. 

Click **Admin** -> **Connections** -> **Sources** -> **`{SourceName}`** -> **Import Data** -> **Account Schema** -> **Options** -> **Download Schema**

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v2024/import-accounts-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportAccountsSchemaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **file** | ***os.File** |  | 

### Return type

[**Schema**](../models/schema)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    file := BINARY_DATA_HERE // *os.File |  (optional) # *os.File |  (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.ImportAccountsSchema(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.ImportAccountsSchema(context.Background(), id).File(file).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportAccountsSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportAccountsSchema`: Schema
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportAccountsSchema`: %v\n", resp)
}
```

[[Back to top]](#)

## import-connector-file
Upload connector file to source
This uploads a supplemental source connector file (like jdbc driver jars) to a source's S3 bucket. This also sends ETS and Audit events.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/import-connector-file)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportConnectorFileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **file** | ***os.File** |  | 

### Return type

[**Source**](../models/source)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    file := BINARY_DATA_HERE // *os.File |  (optional) # *os.File |  (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.ImportConnectorFile(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.ImportConnectorFile(context.Background(), sourceId).File(file).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportConnectorFile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportConnectorFile`: Source
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportConnectorFile`: %v\n", resp)
}
```

[[Back to top]](#)

## import-entitlements-schema
Uploads source entitlements schema template
This API uploads a source schema template file to configure a source's entitlement attributes.

To retrieve the file to modify and upload, log into Identity Now. 

Click **Admin** -> **Connections** -> **Sources** -> **`{SourceName}`** -> **Import Data** -> **Import Entitlements** -> **Download**

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/v2024/import-entitlements-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportEntitlementsSchemaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **schemaName** | **string** | Name of entitlement schema | 
 **file** | ***os.File** |  | 

### Return type

[**Schema**](../models/schema)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    schemaName := `?schemaName=group` // string | Name of entitlement schema (optional) # string | Name of entitlement schema (optional)
    file := BINARY_DATA_HERE // *os.File |  (optional) # *os.File |  (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.ImportEntitlementsSchema(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.ImportEntitlementsSchema(context.Background(), id).SchemaName(schemaName).File(file).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportEntitlementsSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportEntitlementsSchema`: Schema
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportEntitlementsSchema`: %v\n", resp)
}
```

[[Back to top]](#)

## import-uncorrelated-accounts
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Process Uncorrelated Accounts
File is required for upload. You will also need to set the Content-Type header to `multipart/form-data`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/import-uncorrelated-accounts)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportUncorrelatedAccountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **file** | ***os.File** |  | 

### Return type

[**LoadUncorrelatedAccountsTask**](../models/load-uncorrelated-accounts-task)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `75dbec1ebe154d5785da27b95e1dd5d7` // string | Source Id # string | Source Id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    file := BINARY_DATA_HERE // *os.File |  (optional) # *os.File |  (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.ImportUncorrelatedAccounts(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.ImportUncorrelatedAccounts(context.Background(), id).XSailPointExperimental(xSailPointExperimental).File(file).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportUncorrelatedAccounts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportUncorrelatedAccounts`: LoadUncorrelatedAccountsTask
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportUncorrelatedAccounts`: %v\n", resp)
}
```

[[Back to top]](#)

## list-provisioning-policies
Lists ProvisioningPolicies
This end-point lists all the ProvisioningPolicies in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-provisioning-policies)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiListProvisioningPoliciesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id # string | The Source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.ListProvisioningPolicies(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.ListProvisioningPolicies(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ListProvisioningPolicies``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListProvisioningPolicies`: []ProvisioningPolicyDto
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ListProvisioningPolicies`: %v\n", resp)
}
```

[[Back to top]](#)

## list-sources
Lists all sources in IdentityNow.
This end-point lists all the sources in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-sources)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **modified**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** | 
 **forSubadmin** | **string** | Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. | 
 **includeIDNSource** | **bool** | Include the IdentityNow source in the response. | [default to false]

### Return type

[**[]Source**](../models/source)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name eq "Employees"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **modified**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **modified**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** (optional)
    forSubadmin := `name` // string | Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. (optional) # string | Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. (optional)
    includeIDNSource := true // bool | Include the IdentityNow source in the response. (optional) (default to false) # bool | Include the IdentityNow source in the response. (optional) (default to false)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.ListSources(context.Background()).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.ListSources(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).ForSubadmin(forSubadmin).IncludeIDNSource(includeIDNSource).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ListSources``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListSources`: []Source
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ListSources`: %v\n", resp)
}
```

[[Back to top]](#)

## ping-cluster
Ping cluster for source connector
This endpoint validates that the cluster being used by the source is reachable from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/ping-cluster)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the Source | 

### Other Parameters

Other parameters are passed through a pointer to a apiPingClusterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**StatusResponse**](../models/status-response)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `cef3ee201db947c5912551015ba0c679` // string | The ID of the Source # string | The ID of the Source

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.PingCluster(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.PingCluster(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PingCluster``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PingCluster`: StatusResponse
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PingCluster`: %v\n", resp)
}
```

[[Back to top]](#)

## put-correlation-config
Update Source Correlation Configuration
Replaces the correlation configuration for the source specified by the given ID with the configuration provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-correlation-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCorrelationConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **correlationConfig** | [**CorrelationConfig**](../models/correlation-config) |  | 

### Return type

[**CorrelationConfig**](../models/correlation-config)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id
    correlationconfig := []byte(`{
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
        }`) // CorrelationConfig | 

  
   var correlationConfig v2024.CorrelationConfig
   if err := json.Unmarshal(correlationconfig, &correlationConfig); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.PutCorrelationConfig(context.Background(), id).CorrelationConfig(correlationConfig).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.PutCorrelationConfig(context.Background(), id).CorrelationConfig(correlationConfig).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutCorrelationConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutCorrelationConfig`: CorrelationConfig
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutCorrelationConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## put-native-change-detection-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update Native Change Detection Configuration
Replaces the native change detection configuration for the source specified by the given ID with the configuration provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-native-change-detection-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutNativeChangeDetectionConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **nativeChangeDetectionConfig** | [**NativeChangeDetectionConfig**](../models/native-change-detection-config) |  | 

### Return type

[**NativeChangeDetectionConfig**](../models/native-change-detection-config)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    nativechangedetectionconfig := []byte(`{
          "selectedEntitlements" : [ "memberOf", "memberOfSharedMailbox" ],
          "operations" : [ "ACCOUNT_UPDATED", "ACCOUNT_DELETED" ],
          "selectedNonEntitlementAttributes" : [ "lastName", "phoneNumber", "objectType", "servicePrincipalName" ],
          "allNonEntitlementAttributes" : false,
          "allEntitlements" : false,
          "enabled" : true
        }`) // NativeChangeDetectionConfig | 

  
   var nativeChangeDetectionConfig v2024.NativeChangeDetectionConfig
   if err := json.Unmarshal(nativechangedetectionconfig, &nativeChangeDetectionConfig); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.PutNativeChangeDetectionConfig(context.Background(), id).XSailPointExperimental(xSailPointExperimental).NativeChangeDetectionConfig(nativeChangeDetectionConfig).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.PutNativeChangeDetectionConfig(context.Background(), id).XSailPointExperimental(xSailPointExperimental).NativeChangeDetectionConfig(nativeChangeDetectionConfig).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutNativeChangeDetectionConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutNativeChangeDetectionConfig`: NativeChangeDetectionConfig
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutNativeChangeDetectionConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## put-provisioning-policy
Update Provisioning Policy by UsageType
This end-point updates the provisioning policy with the specified usage on the specified source in IdentityNow.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-provisioning-policy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**usageType** | [**UsageType**](../models/) | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to &#39;Create Account Profile&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to &#39;Update Account Profile&#39;, the provisioning template for the &#39;Update&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to &#39;Enable Account Profile&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner&#39;s account is created.  DISABLE - This usage type relates to &#39;Disable Account Profile&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutProvisioningPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **provisioningPolicyDto** | [**ProvisioningPolicyDto**](../models/provisioning-policy-dto) |  | 

### Return type

[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    usageType := CREATE // UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
    provisioningpolicydto := []byte(`{
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
        }`) // ProvisioningPolicyDto | 

  
   var provisioningPolicyDto v2024.ProvisioningPolicyDto
   if err := json.Unmarshal(provisioningpolicydto, &provisioningPolicyDto); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.PutProvisioningPolicy(context.Background(), sourceId, usageType).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.PutProvisioningPolicy(context.Background(), sourceId, usageType).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutProvisioningPolicy``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutProvisioningPolicy`: ProvisioningPolicyDto
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutProvisioningPolicy`: %v\n", resp)
}
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **source** | [**Source**](../models/source) |  | 

### Return type

[**Source**](../models/source)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    source := []byte(`{
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
        }`) // Source | 

  
   var source v2024.Source
   if err := json.Unmarshal(source, &source); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.PutSource(context.Background(), id).Source(source).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.PutSource(context.Background(), id).Source(source).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutSource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutSource`: Source
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutSource`: %v\n", resp)
}
```

[[Back to top]](#)

## put-source-attr-sync-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update Attribute Sync Config
Replaces the attribute synchronization configuration for the source specified by the given ID with the configuration provided in the request body. Only the "enabled" field of the values in the "attributes" array is mutable. Attempting to change other attributes or add new values to the "attributes" array will result in an error.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-source-attr-sync-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSourceAttrSyncConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **attrSyncSourceConfig** | [**AttrSyncSourceConfig**](../models/attr-sync-source-config) |  | 

### Return type

[**AttrSyncSourceConfig**](../models/attr-sync-source-config)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    attrsyncsourceconfig := []byte(`{
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
        }`) // AttrSyncSourceConfig | 

  
   var attrSyncSourceConfig v2024.AttrSyncSourceConfig
   if err := json.Unmarshal(attrsyncsourceconfig, &attrSyncSourceConfig); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.PutSourceAttrSyncConfig(context.Background(), id).XSailPointExperimental(xSailPointExperimental).AttrSyncSourceConfig(attrSyncSourceConfig).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.PutSourceAttrSyncConfig(context.Background(), id).XSailPointExperimental(xSailPointExperimental).AttrSyncSourceConfig(attrSyncSourceConfig).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutSourceAttrSyncConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutSourceAttrSyncConfig`: AttrSyncSourceConfig
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutSourceAttrSyncConfig`: %v\n", resp)
}
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**schemaId** | **string** | The Schema id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSourceSchemaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **schema** | [**Schema**](../models/schema) |  | 

### Return type

[**Schema**](../models/schema)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    schemaId := `2c9180835d191a86015d28455b4a2329` // string | The Schema id. # string | The Schema id.
    schema := []byte(`{
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
        }`) // Schema | 

  
   var schema v2024.Schema
   if err := json.Unmarshal(schema, &schema); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.PutSourceSchema(context.Background(), sourceId, schemaId).Schema(schema).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.PutSourceSchema(context.Background(), sourceId, schemaId).Schema(schema).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutSourceSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutSourceSchema`: Schema
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutSourceSchema`: %v\n", resp)
}
```

[[Back to top]](#)

## search-resource-objects
Peek source connector's resource objects
Retrieves a sample of data returned from account and group aggregation requests.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/search-resource-objects)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the Source | 

### Other Parameters

Other parameters are passed through a pointer to a apiSearchResourceObjectsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **resourceObjectsRequest** | [**ResourceObjectsRequest**](../models/resource-objects-request) |  | 

### Return type

[**ResourceObjectsResponse**](../models/resource-objects-response)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `cef3ee201db947c5912551015ba0c679` // string | The ID of the Source # string | The ID of the Source
    resourceobjectsrequest := []byte(`{
          "maxCount" : 100,
          "objectType" : "group"
        }`) // ResourceObjectsRequest | 

  
   var resourceObjectsRequest v2024.ResourceObjectsRequest
   if err := json.Unmarshal(resourceobjectsrequest, &resourceObjectsRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.SearchResourceObjects(context.Background(), sourceId).ResourceObjectsRequest(resourceObjectsRequest).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.SearchResourceObjects(context.Background(), sourceId).ResourceObjectsRequest(resourceObjectsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.SearchResourceObjects``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchResourceObjects`: ResourceObjectsResponse
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.SearchResourceObjects`: %v\n", resp)
}
```

[[Back to top]](#)

## sync-attributes-for-source
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Synchronize single source attributes.
This end-point performs attribute synchronization for a selected source.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/sync-attributes-for-source)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiSyncAttributesForSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**SourceSyncJob**](../models/source-sync-job)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `id_example` // string | The Source id # string | The Source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.SyncAttributesForSource(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.SyncAttributesForSource(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.SyncAttributesForSource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SyncAttributesForSource`: SourceSyncJob
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.SyncAttributesForSource`: %v\n", resp)
}
```

[[Back to top]](#)

## test-source-configuration
Test configuration for source connector
This endpoint performs a more detailed validation of the source''s configuration that can take longer than the lighter weight credential validation performed by the checkConnection API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/test-source-configuration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the Source | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestSourceConfigurationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**StatusResponse**](../models/status-response)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `cef3ee201db947c5912551015ba0c679` // string | The ID of the Source # string | The ID of the Source

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.TestSourceConfiguration(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.TestSourceConfiguration(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.TestSourceConfiguration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TestSourceConfiguration`: StatusResponse
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.TestSourceConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## test-source-connection
Check connection for source connector.
This endpoint validates that the configured credentials are valid and will properly authenticate with the source identified by the sourceId path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/test-source-connection)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the Source. | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestSourceConnectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**StatusResponse**](../models/status-response)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `cef3ee201db947c5912551015ba0c679` // string | The ID of the Source. # string | The ID of the Source.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.TestSourceConnection(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.TestSourceConnection(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.TestSourceConnection``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TestSourceConnection`: StatusResponse
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.TestSourceConnection`: %v\n", resp)
}
```

[[Back to top]](#)

## update-password-policy-holders
Update Password Policy
This API can be used to set up or update Password Policy in IdentityNow for the specified Source.
Source must support PASSWORD feature.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-password-policy-holders)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePasswordPolicyHoldersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **passwordPolicyHoldersDtoInner** | [**[]PasswordPolicyHoldersDtoInner**](../models/password-policy-holders-dto-inner) |  | 

### Return type

[**[]PasswordPolicyHoldersDtoInner**](../models/password-policy-holders-dto-inner)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    passwordpolicyholdersdtoinner := []byte(``) // []PasswordPolicyHoldersDtoInner | 

  
   var passwordPolicyHoldersDtoInner v2024.[]PasswordPolicyHoldersDtoInner
   if err := json.Unmarshal(passwordpolicyholdersdtoinner, &passwordPolicyHoldersDtoInner); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.UpdatePasswordPolicyHolders(context.Background(), sourceId).PasswordPolicyHoldersDtoInner(passwordPolicyHoldersDtoInner).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.UpdatePasswordPolicyHolders(context.Background(), sourceId).PasswordPolicyHoldersDtoInner(passwordPolicyHoldersDtoInner).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdatePasswordPolicyHolders``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdatePasswordPolicyHolders`: []PasswordPolicyHoldersDtoInner
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdatePasswordPolicyHolders`: %v\n", resp)
}
```

[[Back to top]](#)

## update-provisioning-policies-in-bulk
Bulk Update Provisioning Policies
This end-point updates a list of provisioning policies on the specified source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-provisioning-policies-in-bulk)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateProvisioningPoliciesInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **provisioningPolicyDto** | [**[]ProvisioningPolicyDto**](../models/provisioning-policy-dto) |  | 

### Return type

[**[]ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    provisioningpolicydto := []byte(``) // []ProvisioningPolicyDto | 

  
   var provisioningPolicyDto v2024.[]ProvisioningPolicyDto
   if err := json.Unmarshal(provisioningpolicydto, &provisioningPolicyDto); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.UpdateProvisioningPoliciesInBulk(context.Background(), sourceId).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.UpdateProvisioningPoliciesInBulk(context.Background(), sourceId).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateProvisioningPoliciesInBulk``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateProvisioningPoliciesInBulk`: []ProvisioningPolicyDto
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateProvisioningPoliciesInBulk`: %v\n", resp)
}
```

[[Back to top]](#)

## update-provisioning-policy
Partial update of Provisioning Policy
This API selectively updates an existing Provisioning Policy using a JSONPatch payload.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-provisioning-policy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**usageType** | [**UsageType**](../models/) | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to &#39;Create Account Profile&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to &#39;Update Account Profile&#39;, the provisioning template for the &#39;Update&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to &#39;Enable Account Profile&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner&#39;s account is created.  DISABLE - This usage type relates to &#39;Disable Account Profile&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateProvisioningPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The JSONPatch payload used to update the schema. | 

### Return type

[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    usageType := CREATE // UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
    jsonpatchoperation := []byte(`[{op=add, path=/fields/0, value={name=email, transform={type=identityAttribute, attributes={name=email}}, attributes={}, isRequired=false, type=string, isMultiValued=false}}]`) // []JsonPatchOperation | The JSONPatch payload used to update the schema.

  
   var jsonPatchOperation v2024.[]JsonPatchOperation
   if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.UpdateProvisioningPolicy(context.Background(), sourceId, usageType).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.UpdateProvisioningPolicy(context.Background(), sourceId, usageType).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateProvisioningPolicy``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateProvisioningPolicy`: ProvisioningPolicyDto
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateProvisioningPolicy`: %v\n", resp)
}
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC). | 

### Return type

[**Source**](../models/source)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    jsonpatchoperation := []byte(`[{op=replace, path=/description, value=new description}]`) // []JsonPatchOperation | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).

  
   var jsonPatchOperation v2024.[]JsonPatchOperation
   if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.UpdateSource(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.UpdateSource(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateSource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateSource`: Source
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateSource`: %v\n", resp)
}
```

[[Back to top]](#)

## update-source-entitlement-request-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update Source Entitlement Request Configuration
This API replaces the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-source-entitlement-request-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSourceEntitlementRequestConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sourceEntitlementRequestConfig** | [**SourceEntitlementRequestConfig**](../models/source-entitlement-request-config) |  | 

### Return type

[**SourceEntitlementRequestConfig**](../models/source-entitlement-request-config)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sourceentitlementrequestconfig := []byte(`{
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
        }`) // SourceEntitlementRequestConfig | 

  
   var sourceEntitlementRequestConfig v2024.SourceEntitlementRequestConfig
   if err := json.Unmarshal(sourceentitlementrequestconfig, &sourceEntitlementRequestConfig); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.UpdateSourceEntitlementRequestConfig(context.Background()).XSailPointExperimental(xSailPointExperimental).SourceEntitlementRequestConfig(sourceEntitlementRequestConfig).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.UpdateSourceEntitlementRequestConfig(context.Background()).XSailPointExperimental(xSailPointExperimental).SourceEntitlementRequestConfig(sourceEntitlementRequestConfig).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateSourceEntitlementRequestConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateSourceEntitlementRequestConfig`: SourceEntitlementRequestConfig
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateSourceEntitlementRequestConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## update-source-schedule
Update Source Schedule (Partial)
Use this API to selectively update an existing Schedule using a JSONPatch payload. 

The following schedule fields are immutable and cannot be updated:

- type


[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-source-schedule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**scheduleType** | **string** | The Schedule type. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSourceScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The JSONPatch payload used to update the schedule. | 

### Return type

[**Schedule1**](../models/schedule1)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    scheduleType := `ACCOUNT_AGGREGATION` // string | The Schedule type. # string | The Schedule type.
    jsonpatchoperation := []byte(`[{op=replace, path=/cronExpression, value=0 0 6 * * ?}]`) // []JsonPatchOperation | The JSONPatch payload used to update the schedule.

  
   var jsonPatchOperation v2024.[]JsonPatchOperation
   if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.UpdateSourceSchedule(context.Background(), sourceId, scheduleType).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.UpdateSourceSchedule(context.Background(), sourceId, scheduleType).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateSourceSchedule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateSourceSchedule`: Schedule1
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateSourceSchedule`: %v\n", resp)
}
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**schemaId** | **string** | The Schema id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSourceSchemaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The JSONPatch payload used to update the schema. | 

### Return type

[**Schema**](../models/schema)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    schemaId := `2c9180835d191a86015d28455b4a2329` // string | The Schema id. # string | The Schema id.
    jsonpatchoperation := []byte(`[{op=add, path=/attributes/-, value={name=location, type=STRING, schema=null, description=Employee location, isMulti=false, isEntitlement=false, isGroup=false}}]`) // []JsonPatchOperation | The JSONPatch payload used to update the schema.

  
   var jsonPatchOperation v2024.[]JsonPatchOperation
   if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SourcesAPI.UpdateSourceSchema(context.Background(), sourceId, schemaId).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V2024.SourcesAPI.UpdateSourceSchema(context.Background(), sourceId, schemaId).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateSourceSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateSourceSchema`: Schema
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateSourceSchema`: %v\n", resp)
}
```

[[Back to top]](#)

