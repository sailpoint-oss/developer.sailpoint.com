---
id: beta-sources
title: Sources
pagination_label: Sources
sidebar_label: Sources
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sources', 'BetaSources'] 
slug: /tools/sdk/go/beta/methods/sources
tags: ['SDK', 'Software Development Kit', 'Sources', 'BetaSources']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-provisioning-policy**](#create-provisioning-policy) | **Post** `/sources/{sourceId}/provisioning-policies` | Create Provisioning Policy
[**create-source**](#create-source) | **Post** `/sources` | Creates a source in IdentityNow.
[**create-source-schema**](#create-source-schema) | **Post** `/sources/{sourceId}/schemas` | Create Schema on Source
[**delete**](#delete) | **Delete** `/sources/{id}` | Delete Source by ID
[**delete-accounts-async**](#delete-accounts-async) | **Post** `/sources/{sourceId}/remove-accounts` | Remove All Accounts in a Source
[**delete-native-change-detection-config**](#delete-native-change-detection-config) | **Delete** `/sources/{sourceId}/native-change-detection-config` | Delete Native Change Detection Configuration
[**delete-provisioning-policy**](#delete-provisioning-policy) | **Delete** `/sources/{sourceId}/provisioning-policies/{usageType}` | Delete Provisioning Policy by UsageType
[**delete-source-schema**](#delete-source-schema) | **Delete** `/sources/{sourceId}/schemas/{schemaId}` | Delete Source Schema by ID
[**get-correlation-config**](#get-correlation-config) | **Get** `/sources/{sourceId}/correlation-config` | Get Source Correlation Configuration
[**get-native-change-detection-config**](#get-native-change-detection-config) | **Get** `/sources/{sourceId}/native-change-detection-config` | Native Change Detection Configuration
[**get-provisioning-policy**](#get-provisioning-policy) | **Get** `/sources/{sourceId}/provisioning-policies/{usageType}` | Get Provisioning Policy by UsageType
[**get-source**](#get-source) | **Get** `/sources/{id}` | Get Source by ID
[**get-source-accounts-schema**](#get-source-accounts-schema) | **Get** `/sources/{sourceId}/schemas/accounts` | Downloads source accounts schema template
[**get-source-attr-sync-config**](#get-source-attr-sync-config) | **Get** `/sources/{id}/attribute-sync-config` | Attribute Sync Config
[**get-source-config**](#get-source-config) | **Get** `/sources/{id}/connectors/source-config` | Gets source config with language translations
[**get-source-entitlement-request-config**](#get-source-entitlement-request-config) | **Get** `/sources/{sourceId}/entitlement-request-config` | Get Source Entitlement Request Configuration
[**get-source-entitlements-schema**](#get-source-entitlements-schema) | **Get** `/sources/{sourceId}/schemas/entitlements` | Downloads source entitlements schema template
[**get-source-schema**](#get-source-schema) | **Get** `/sources/{sourceId}/schemas/{schemaId}` | Get Source Schema by ID
[**get-source-schemas**](#get-source-schemas) | **Get** `/sources/{sourceId}/schemas` | List Schemas on Source
[**import-accounts**](#import-accounts) | **Post** `/sources/{sourceId}/load-accounts` | Account Aggregation
[**import-entitlements**](#import-entitlements) | **Post** `/sources/{sourceId}/load-entitlements` | Entitlement Aggregation
[**import-source-accounts-schema**](#import-source-accounts-schema) | **Post** `/sources/{sourceId}/schemas/accounts` | Uploads source accounts schema template
[**import-source-connector-file**](#import-source-connector-file) | **Post** `/sources/{sourceId}/upload-connector-file` | Upload connector file to source
[**import-source-entitlements-schema**](#import-source-entitlements-schema) | **Post** `/sources/{sourceId}/schemas/entitlements` | Uploads source entitlements schema template
[**import-uncorrelated-accounts**](#import-uncorrelated-accounts) | **Post** `/sources/{sourceId}/load-uncorrelated-accounts` | Process Uncorrelated Accounts
[**list-provisioning-policies**](#list-provisioning-policies) | **Get** `/sources/{sourceId}/provisioning-policies` | Lists ProvisioningPolicies
[**list-sources**](#list-sources) | **Get** `/sources` | Lists all sources in IdentityNow.
[**peek-resource-objects**](#peek-resource-objects) | **Post** `/sources/{sourceId}/connector/peek-resource-objects` | Peek source connector&#39;s resource objects
[**ping-cluster**](#ping-cluster) | **Post** `/sources/{sourceId}/connector/ping-cluster` | Ping cluster for source connector
[**put-correlation-config**](#put-correlation-config) | **Put** `/sources/{sourceId}/correlation-config` | Update Source Correlation Configuration
[**put-native-change-detection-config**](#put-native-change-detection-config) | **Put** `/sources/{sourceId}/native-change-detection-config` | Update Native Change Detection Configuration
[**put-provisioning-policy**](#put-provisioning-policy) | **Put** `/sources/{sourceId}/provisioning-policies/{usageType}` | Update Provisioning Policy by UsageType
[**put-source**](#put-source) | **Put** `/sources/{id}` | Update Source (Full)
[**put-source-attr-sync-config**](#put-source-attr-sync-config) | **Put** `/sources/{id}/attribute-sync-config` | Update Attribute Sync Config
[**put-source-schema**](#put-source-schema) | **Put** `/sources/{sourceId}/schemas/{schemaId}` | Update Source Schema (Full)
[**sync-attributes-for-source**](#sync-attributes-for-source) | **Post** `/sources/{sourceId}/synchronize-attributes` | Synchronize single source attributes.
[**test-source-configuration**](#test-source-configuration) | **Post** `/sources/{sourceId}/connector/test-configuration` | Test configuration for source connector
[**test-source-connection**](#test-source-connection) | **Post** `/sources/{sourceId}/connector/check-connection` | Check connection for source connector.
[**update-provisioning-policies-in-bulk**](#update-provisioning-policies-in-bulk) | **Post** `/sources/{sourceId}/provisioning-policies/bulk-update` | Bulk Update Provisioning Policies
[**update-provisioning-policy**](#update-provisioning-policy) | **Patch** `/sources/{sourceId}/provisioning-policies/{usageType}` | Partial update of Provisioning Policy
[**update-source**](#update-source) | **Patch** `/sources/{id}` | Update Source (Partial)
[**update-source-entitlement-request-config**](#update-source-entitlement-request-config) | **Put** `/sources/{sourceId}/entitlement-request-config` | Update Source Entitlement Request Configuration
[**update-source-schema**](#update-source-schema) | **Patch** `/sources/{sourceId}/schemas/{schemaId}` | Update Source Schema (Partial)


## create-provisioning-policy
Create Provisioning Policy
This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-provisioning-policy)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id # string | The Source id
    data := []byte(`{
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

  
   var provisioningPolicyDto beta.ProvisioningPolicyDto
   if err := json.Unmarshal(data, &provisioningPolicyDto); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.CreateProvisioningPolicy(context.Background(), sourceId).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.CreateProvisioningPolicy(context.Background(), sourceId).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
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
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-source)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    data := []byte(`{
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

  
   var source beta.Source
   if err := json.Unmarshal(data, &source); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.CreateSource(context.Background()).Source(source).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.CreateSource(context.Background()).Source(source).ProvisionAsCsv(provisionAsCsv).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.CreateSource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateSource`: Source
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.CreateSource`: %v\n", resp)
}
```

[[Back to top]](#)

## create-source-schema
Create Schema on Source
Use this API to create a new schema on the specified source in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-source-schema)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    data := []byte(`{
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

  
   var schema beta.Schema
   if err := json.Unmarshal(data, &schema); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.CreateSourceSchema(context.Background(), sourceId).Schema(schema).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.CreateSourceSchema(context.Background(), sourceId).Schema(schema).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.CreateSourceSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateSourceSchema`: Schema
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.CreateSourceSchema`: %v\n", resp)
}
```

[[Back to top]](#)

## delete
Delete Source by ID
Use this API to delete a specific source in Identity Security Cloud (ISC).
The API removes all the accounts on the source first, and then it deletes the source. You can retrieve the actual task execution status with this method: GET `/task-status/{id}`
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Delete202Response**](../models/delete202-response)

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
    resp, r, err := apiClient.Beta.SourcesAPI.Delete(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.Delete(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.Delete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `Delete`: Delete202Response
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.Delete`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-accounts-async
Remove All Accounts in a Source
Use this endpoint to remove all accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.

This endpoint is good for:
* Removing accounts that no longer exist on the source.
* Removing accounts that won't be aggregated following updates to the source configuration.
* Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.


[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-accounts-async)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccountsAsyncRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
    sourceId := `ebbf35756e1140699ce52b233121384a` // string | The source id # string | The source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.DeleteAccountsAsync(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.DeleteAccountsAsync(context.Background(), sourceId).Execute()
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
Delete Native Change Detection Configuration
Deletes the native change detection configuration for the source specified by the given ID.
A token with API, or ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-native-change-detection-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNativeChangeDetectionConfigRequest struct via the builder pattern


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
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.SourcesAPI.DeleteNativeChangeDetectionConfig(context.Background(), sourceId).Execute()
	//r, err := apiClient.Beta.SourcesAPI.DeleteNativeChangeDetectionConfig(context.Background(), sourceId).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-provisioning-policy)

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
    r, err := apiClient.Beta.SourcesAPI.DeleteProvisioningPolicy(context.Background(), sourceId, usageType).Execute()
	//r, err := apiClient.Beta.SourcesAPI.DeleteProvisioningPolicy(context.Background(), sourceId, usageType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteProvisioningPolicy``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-source-schema
Delete Source Schema by ID


[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-source-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**schemaId** | **string** | The Schema ID. | 

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
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    schemaId := `2c9180835d191a86015d28455b4a2329` // string | The Schema ID. # string | The Schema ID.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.SourcesAPI.DeleteSourceSchema(context.Background(), sourceId, schemaId).Execute()
	//r, err := apiClient.Beta.SourcesAPI.DeleteSourceSchema(context.Background(), sourceId, schemaId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteSourceSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-correlation-config
Get Source Correlation Configuration
This API returns the existing correlation configuration for a source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-correlation-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The source id | 

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
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.GetCorrelationConfig(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.GetCorrelationConfig(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetCorrelationConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCorrelationConfig`: CorrelationConfig
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetCorrelationConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-native-change-detection-config
Native Change Detection Configuration
This API returns the existing native change detection configuration for a source specified by the given ID.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-native-change-detection-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNativeChangeDetectionConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.GetNativeChangeDetectionConfig(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.GetNativeChangeDetectionConfig(context.Background(), sourceId).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-provisioning-policy)

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
    resp, r, err := apiClient.Beta.SourcesAPI.GetProvisioningPolicy(context.Background(), sourceId, usageType).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.GetProvisioningPolicy(context.Background(), sourceId, usageType).Execute()
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
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source)

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
    resp, r, err := apiClient.Beta.SourcesAPI.GetSource(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.GetSource(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSource`: Source
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSource`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-accounts-schema
Downloads source accounts schema template


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-accounts-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceAccountsSchemaRequest struct via the builder pattern


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
    sourceId := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.SourcesAPI.GetSourceAccountsSchema(context.Background(), sourceId).Execute()
	//r, err := apiClient.Beta.SourcesAPI.GetSourceAccountsSchema(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceAccountsSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-source-attr-sync-config
Attribute Sync Config
This API returns the existing attribute synchronization configuration for a source specified by the given ID. The response contains all attributes, regardless of whether they enabled or not.
A token with ORG_ADMIN or HELPDESK authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-attr-sync-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceAttrSyncConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.GetSourceAttrSyncConfig(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.GetSourceAttrSyncConfig(context.Background(), id).Execute()
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
Gets source config with language translations
Looks up and returns the source config for the requested source id after populating the source config values and applying language translations.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-config)

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
    id := `id_example` // string | The Source id # string | The Source id
    locale := `locale_example` // string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.GetSourceConfig(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.GetSourceConfig(context.Background(), id).Locale(locale).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSourceConfig`: ConnectorDetail
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-entitlement-request-config
Get Source Entitlement Request Configuration
This API gets the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-entitlement-request-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceEntitlementRequestConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
    sourceId := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.GetSourceEntitlementRequestConfig(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.GetSourceEntitlementRequestConfig(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceEntitlementRequestConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSourceEntitlementRequestConfig`: SourceEntitlementRequestConfig
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceEntitlementRequestConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-entitlements-schema
Downloads source entitlements schema template


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-entitlements-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceEntitlementsSchemaRequest struct via the builder pattern


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
    sourceId := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    schemaName := `?schemaName=group` // string | Name of entitlement schema (optional) # string | Name of entitlement schema (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.SourcesAPI.GetSourceEntitlementsSchema(context.Background(), sourceId).Execute()
	//r, err := apiClient.Beta.SourcesAPI.GetSourceEntitlementsSchema(context.Background(), sourceId).SchemaName(schemaName).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceEntitlementsSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-source-schema
Get Source Schema by ID
Get the Source Schema by ID in IdentityNow.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**schemaId** | **string** | The Schema ID. | 

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
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    schemaId := `2c9180835d191a86015d28455b4a2329` // string | The Schema ID. # string | The Schema ID.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.GetSourceSchema(context.Background(), sourceId, schemaId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.GetSourceSchema(context.Background(), sourceId, schemaId).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-source-schemas)

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
    resp, r, err := apiClient.Beta.SourcesAPI.GetSourceSchemas(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.GetSourceSchemas(context.Background(), sourceId).IncludeTypes(includeTypes).IncludeNames(includeNames).Execute()
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
Account Aggregation
Starts an account aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body.
You will also need to set the Content-Type header to `multipart/form-data`.
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-accounts)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportAccountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **file** | ***os.File** | The CSV file containing the source accounts to aggregate. | 
 **disableOptimization** | **string** | Use this flag to reprocess every account whether or not the data has changed. | 

### Return type

[**LoadAccountsTask**](../models/load-accounts-task)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
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
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source Id # string | Source Id
    file := BINARY_DATA_HERE // *os.File | The CSV file containing the source accounts to aggregate. (optional) # *os.File | The CSV file containing the source accounts to aggregate. (optional)
    disableOptimization := `disableOptimization_example` // string | Use this flag to reprocess every account whether or not the data has changed. (optional) # string | Use this flag to reprocess every account whether or not the data has changed. (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.ImportAccounts(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.ImportAccounts(context.Background(), sourceId).File(file).DisableOptimization(disableOptimization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportAccounts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportAccounts`: LoadAccountsTask
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportAccounts`: %v\n", resp)
}
```

[[Back to top]](#)

## import-entitlements
Entitlement Aggregation
Starts an entitlement aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body. 
You will also need to set the Content-Type header to `multipart/form-data`.
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-entitlements)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportEntitlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **file** | ***os.File** | The CSV file containing the source entitlements to aggregate. | 

### Return type

[**LoadEntitlementTask**](../models/load-entitlement-task)

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
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source Id # string | Source Id
    file := BINARY_DATA_HERE // *os.File | The CSV file containing the source entitlements to aggregate. (optional) # *os.File | The CSV file containing the source entitlements to aggregate. (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.ImportEntitlements(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.ImportEntitlements(context.Background(), sourceId).File(file).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportEntitlements``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportEntitlements`: LoadEntitlementTask
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportEntitlements`: %v\n", resp)
}
```

[[Back to top]](#)

## import-source-accounts-schema
Uploads source accounts schema template
This API uploads a source schema template file to configure a source's account attributes.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-source-accounts-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportSourceAccountsSchemaRequest struct via the builder pattern


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
    sourceId := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    file := BINARY_DATA_HERE // *os.File |  (optional) # *os.File |  (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.ImportSourceAccountsSchema(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.ImportSourceAccountsSchema(context.Background(), sourceId).File(file).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportSourceAccountsSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportSourceAccountsSchema`: Schema
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportSourceAccountsSchema`: %v\n", resp)
}
```

[[Back to top]](#)

## import-source-connector-file
Upload connector file to source
This uploads a supplemental source connector file (like jdbc driver jars) to a source's S3 bucket. This also sends ETS and Audit events.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-source-connector-file)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportSourceConnectorFileRequest struct via the builder pattern


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
    sourceId := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    file := BINARY_DATA_HERE // *os.File |  (optional) # *os.File |  (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.ImportSourceConnectorFile(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.ImportSourceConnectorFile(context.Background(), sourceId).File(file).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportSourceConnectorFile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportSourceConnectorFile`: Source
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportSourceConnectorFile`: %v\n", resp)
}
```

[[Back to top]](#)

## import-source-entitlements-schema
Uploads source entitlements schema template
This API uploads a source schema template file to configure a source's entitlement attributes.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-source-entitlements-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportSourceEntitlementsSchemaRequest struct via the builder pattern


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
    sourceId := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    schemaName := `?schemaName=group` // string | Name of entitlement schema (optional) # string | Name of entitlement schema (optional)
    file := BINARY_DATA_HERE // *os.File |  (optional) # *os.File |  (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.ImportSourceEntitlementsSchema(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.ImportSourceEntitlementsSchema(context.Background(), sourceId).SchemaName(schemaName).File(file).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportSourceEntitlementsSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportSourceEntitlementsSchema`: Schema
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportSourceEntitlementsSchema`: %v\n", resp)
}
```

[[Back to top]](#)

## import-uncorrelated-accounts
Process Uncorrelated Accounts
File is required for upload. You will also need to set the Content-Type header to `multipart/form-data`

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-uncorrelated-accounts)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportUncorrelatedAccountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
    sourceId := `75dbec1ebe154d5785da27b95e1dd5d7` // string | Source Id # string | Source Id
    file := BINARY_DATA_HERE // *os.File |  (optional) # *os.File |  (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.ImportUncorrelatedAccounts(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.ImportUncorrelatedAccounts(context.Background(), sourceId).File(file).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-provisioning-policies)

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
    resp, r, err := apiClient.Beta.SourcesAPI.ListProvisioningPolicies(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.ListProvisioningPolicies(context.Background(), sourceId).Execute()
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

A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-sources)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq*  **modified**: *eq*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* | 
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
    filters := `name eq "Employees"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq*  **modified**: *eq*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq*  **modified**: *eq*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** (optional)
    forSubadmin := `name` // string | Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. (optional) # string | Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. (optional)
    includeIDNSource := true // bool | Include the IdentityNow source in the response. (optional) (default to false) # bool | Include the IdentityNow source in the response. (optional) (default to false)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.ListSources(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.ListSources(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).ForSubadmin(forSubadmin).IncludeIDNSource(includeIDNSource).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ListSources``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListSources`: []Source
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ListSources`: %v\n", resp)
}
```

[[Back to top]](#)

## peek-resource-objects
Peek source connector's resource objects
Retrieves a sample of data returned from account and group aggregation requests.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/peek-resource-objects)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the Source | 

### Other Parameters

Other parameters are passed through a pointer to a apiPeekResourceObjectsRequest struct via the builder pattern


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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `cef3ee201db947c5912551015ba0c679` // string | The ID of the Source # string | The ID of the Source
    data := []byte(`{
          "maxCount" : 100,
          "objectType" : "group"
        }`) // ResourceObjectsRequest | 

  
   var resourceObjectsRequest beta.ResourceObjectsRequest
   if err := json.Unmarshal(data, &resourceObjectsRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.PeekResourceObjects(context.Background(), sourceId).ResourceObjectsRequest(resourceObjectsRequest).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.PeekResourceObjects(context.Background(), sourceId).ResourceObjectsRequest(resourceObjectsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PeekResourceObjects``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PeekResourceObjects`: ResourceObjectsResponse
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PeekResourceObjects`: %v\n", resp)
}
```

[[Back to top]](#)

## ping-cluster
Ping cluster for source connector
This endpoint validates that the cluster being used by the source is reachable from IdentityNow.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/ping-cluster)

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
    resp, r, err := apiClient.Beta.SourcesAPI.PingCluster(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.PingCluster(context.Background(), sourceId).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-correlation-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The source id | 

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id
    data := []byte(`{
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

  
   var correlationConfig beta.CorrelationConfig
   if err := json.Unmarshal(data, &correlationConfig); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.PutCorrelationConfig(context.Background(), sourceId).CorrelationConfig(correlationConfig).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.PutCorrelationConfig(context.Background(), sourceId).CorrelationConfig(correlationConfig).Execute()
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
Update Native Change Detection Configuration
Replaces the native change detection configuration for the source specified by the given ID with the configuration provided in the request body.
    
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-native-change-detection-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutNativeChangeDetectionConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id
    data := []byte(`{
          "selectedEntitlements" : [ "memberOf", "memberOfSharedMailbox" ],
          "operations" : [ "ACCOUNT_UPDATED", "ACCOUNT_DELETED" ],
          "selectedNonEntitlementAttributes" : [ "lastName", "phoneNumber", "objectType", "servicePrincipalName" ],
          "allNonEntitlementAttributes" : false,
          "allEntitlements" : false,
          "enabled" : true
        }`) // NativeChangeDetectionConfig | 

  
   var nativeChangeDetectionConfig beta.NativeChangeDetectionConfig
   if err := json.Unmarshal(data, &nativeChangeDetectionConfig); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.PutNativeChangeDetectionConfig(context.Background(), sourceId).NativeChangeDetectionConfig(nativeChangeDetectionConfig).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.PutNativeChangeDetectionConfig(context.Background(), sourceId).NativeChangeDetectionConfig(nativeChangeDetectionConfig).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-provisioning-policy)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    usageType := CREATE // UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
    data := []byte(`{
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

  
   var provisioningPolicyDto beta.ProvisioningPolicyDto
   if err := json.Unmarshal(data, &provisioningPolicyDto); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.PutProvisioningPolicy(context.Background(), sourceId, usageType).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.PutProvisioningPolicy(context.Background(), sourceId, usageType).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
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

A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/put-source)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    data := []byte(`{
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

  
   var source beta.Source
   if err := json.Unmarshal(data, &source); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.PutSource(context.Background(), id).Source(source).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.PutSource(context.Background(), id).Source(source).Execute()
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
Update Attribute Sync Config
Replaces the attribute synchronization configuration for the source specified by the given ID with the configuration provided in the request body. Only the "enabled" field of the values in the "attributes" array is mutable. Attempting to change other attributes or add new values to the "attributes" array will result in an error.
    
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-source-attr-sync-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSourceAttrSyncConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id
    data := []byte(`{
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

  
   var attrSyncSourceConfig beta.AttrSyncSourceConfig
   if err := json.Unmarshal(data, &attrSyncSourceConfig); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.PutSourceAttrSyncConfig(context.Background(), id).AttrSyncSourceConfig(attrSyncSourceConfig).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.PutSourceAttrSyncConfig(context.Background(), id).AttrSyncSourceConfig(attrSyncSourceConfig).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-source-schema)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**schemaId** | **string** | The Schema ID. | 

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    schemaId := `2c9180835d191a86015d28455b4a2329` // string | The Schema ID. # string | The Schema ID.
    data := []byte(`{
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

  
   var schema beta.Schema
   if err := json.Unmarshal(data, &schema); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.PutSourceSchema(context.Background(), sourceId, schemaId).Schema(schema).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.PutSourceSchema(context.Background(), sourceId, schemaId).Schema(schema).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutSourceSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutSourceSchema`: Schema
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutSourceSchema`: %v\n", resp)
}
```

[[Back to top]](#)

## sync-attributes-for-source
Synchronize single source attributes.
This end-point performs attribute synchronization for a selected source.
A token with ORG_ADMIN or SOURCE_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/sync-attributes-for-source)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiSyncAttributesForSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
    sourceId := `sourceId_example` // string | The Source id # string | The Source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.SyncAttributesForSource(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.SyncAttributesForSource(context.Background(), sourceId).Execute()
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
This endpoint performs a more detailed validation of the source's configuration that can take longer than the lighter weight credential validation performed by the checkConnection API.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/test-source-configuration)

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
    resp, r, err := apiClient.Beta.SourcesAPI.TestSourceConfiguration(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.TestSourceConfiguration(context.Background(), sourceId).Execute()
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
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/test-source-connection)

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
    resp, r, err := apiClient.Beta.SourcesAPI.TestSourceConnection(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.TestSourceConnection(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.TestSourceConnection``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TestSourceConnection`: StatusResponse
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.TestSourceConnection`: %v\n", resp)
}
```

[[Back to top]](#)

## update-provisioning-policies-in-bulk
Bulk Update Provisioning Policies
This end-point updates a list of provisioning policies on the specified source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-provisioning-policies-in-bulk)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    provisioningPolicyDto := fmt.Sprintf(``) // []ProvisioningPolicyDto | 

  
   var provisioningPolicyDto beta.ProvisioningPolicyDto
   if err := json.Unmarshal(data, &provisioningPolicyDto); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.UpdateProvisioningPoliciesInBulk(context.Background(), sourceId).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.UpdateProvisioningPoliciesInBulk(context.Background(), sourceId).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-provisioning-policy)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    usageType := CREATE // UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 
    jsonPatchOperation := fmt.Sprintf(`[{op=add, path=/fields/0, value={name=email, transform={type=identityAttribute, attributes={name=email}}, attributes={}, isRequired=false, type=string, isMultiValued=false}}]`) // []JsonPatchOperation | The JSONPatch payload used to update the schema.

  
   var jsonPatchOperation beta.JsonPatchOperation
   if err := json.Unmarshal(data, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.UpdateProvisioningPolicy(context.Background(), sourceId, usageType).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.UpdateProvisioningPolicy(context.Background(), sourceId, usageType).JsonPatchOperation(jsonPatchOperation).Execute()
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

A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or API authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/update-source)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    jsonPatchOperation := fmt.Sprintf(`[{op=replace, path=/description, value=new description}]`) // []JsonPatchOperation | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).

  
   var jsonPatchOperation beta.JsonPatchOperation
   if err := json.Unmarshal(data, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.UpdateSource(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.UpdateSource(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
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
Update Source Entitlement Request Configuration
This API replaces the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-source-entitlement-request-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSourceEntitlementRequestConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    data := []byte(`{
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

  
   var sourceEntitlementRequestConfig beta.SourceEntitlementRequestConfig
   if err := json.Unmarshal(data, &sourceEntitlementRequestConfig); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.UpdateSourceEntitlementRequestConfig(context.Background(), sourceId).SourceEntitlementRequestConfig(sourceEntitlementRequestConfig).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.UpdateSourceEntitlementRequestConfig(context.Background(), sourceId).SourceEntitlementRequestConfig(sourceEntitlementRequestConfig).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateSourceEntitlementRequestConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateSourceEntitlementRequestConfig`: SourceEntitlementRequestConfig
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateSourceEntitlementRequestConfig`: %v\n", resp)
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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    schemaId := `2c9180835d191a86015d28455b4a2329` // string | The Schema id. # string | The Schema id.
    jsonPatchOperation := fmt.Sprintf(`[{op=replace, path=/displayAttribute, value={new-display-attribute=null}}]`) // []JsonPatchOperation | The JSONPatch payload used to update the schema.

  
   var jsonPatchOperation beta.JsonPatchOperation
   if err := json.Unmarshal(data, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SourcesAPI.UpdateSourceSchema(context.Background(), sourceId, schemaId).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.Beta.SourcesAPI.UpdateSourceSchema(context.Background(), sourceId, schemaId).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateSourceSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateSourceSchema`: Schema
	fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateSourceSchema`: %v\n", resp)
}
```

[[Back to top]](#)

