# Sources

# SourcesAPI
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
[**create-provisioning-policy-v1**](#create-provisioning-policy-v1) | **Post** `/sources/v1/{sourceId}/provisioning-policies` | Create provisioning policy
[**create-provisioning-policy-v2**](#create-provisioning-policy-v2) | **Post** `/sources/v2/{sourceId}/provisioning-policies` | Create provisioning policy
[**create-source-dataset-v1**](#create-source-dataset-v1) | **Post** `/sources/v1/{sourceId}/datasets` | Create dataset on source
[**create-source-resource-v1**](#create-source-resource-v1) | **Post** `/sources/v1/{sourceId}/resources` | Create resource on source
[**create-source-schedule-v1**](#create-source-schedule-v1) | **Post** `/sources/v1/{sourceId}/schedules` | Create schedule on source
[**create-source-schema-v1**](#create-source-schema-v1) | **Post** `/sources/v1/{sourceId}/schemas` | Create schema on source
[**create-source-v1**](#create-source-v1) | **Post** `/sources/v1` | Create source
[**delete-accounts-async-v1**](#delete-accounts-async-v1) | **Post** `/sources/v1/{id}/remove-accounts` | Remove all accounts in source
[**delete-native-change-detection-config-v1**](#delete-native-change-detection-config-v1) | **Delete** `/sources/v1/{sourceId}/native-change-detection-config` | Delete native change detection configuration
[**delete-provisioning-policy-v1**](#delete-provisioning-policy-v1) | **Delete** `/sources/v1/{sourceId}/provisioning-policies/{usageType}` | Delete provisioning policy by usagetype
[**delete-provisioning-policy-v2**](#delete-provisioning-policy-v2) | **Delete** `/sources/v2/{sourceId}/provisioning-policies/{id}` | Delete provisioning policy by ID
[**delete-source-dataset-objects-v1**](#delete-source-dataset-objects-v1) | **Post** `/sources/v1/{sourceId}/datasets/{datasetId}/delete-objects` | Delete objects for source dataset
[**delete-source-dataset-v1**](#delete-source-dataset-v1) | **Delete** `/sources/v1/{sourceId}/datasets/{datasetId}` | Delete source dataset by id
[**delete-source-resource-v1**](#delete-source-resource-v1) | **Delete** `/sources/v1/{sourceId}/resources/{resourceId}` | Delete source resource by id
[**delete-source-schedule-v1**](#delete-source-schedule-v1) | **Delete** `/sources/v1/{sourceId}/schedules/{scheduleType}` | Delete source schedule by type.
[**delete-source-schema-v1**](#delete-source-schema-v1) | **Delete** `/sources/v1/{sourceId}/schemas/{schemaId}` | Delete source schema by id
[**delete-source-v1**](#delete-source-v1) | **Delete** `/sources/v1/{id}` | Delete source by id
[**get-account-delete-approval-config-v1**](#get-account-delete-approval-config-v1) | **Get** `/sources/v1/{sourceId}/approval-config/account-delete` | Human Account Deletion Approval Config
[**get-accounts-schema-v1**](#get-accounts-schema-v1) | **Get** `/sources/v1/{id}/schemas/accounts` | Downloads source accounts schema template
[**get-correlation-config-v1**](#get-correlation-config-v1) | **Get** `/sources/v1/{id}/correlation-config` | Get source correlation configuration
[**get-entitlements-schema-v1**](#get-entitlements-schema-v1) | **Get** `/sources/v1/{id}/schemas/entitlements` | Downloads source entitlements schema template
[**get-machine-account-deletion-approval-config-by-source-v1**](#get-machine-account-deletion-approval-config-by-source-v1) | **Get** `/sources/v1/{sourceId}/approval-config/machine-account-delete` | Machine Account Deletion Approval Config
[**get-native-change-detection-config-v1**](#get-native-change-detection-config-v1) | **Get** `/sources/v1/{sourceId}/native-change-detection-config` | Native change detection configuration
[**get-provisioning-policy-v1**](#get-provisioning-policy-v1) | **Get** `/sources/v1/{sourceId}/provisioning-policies/{usageType}` | Get provisioning policy by usagetype
[**get-provisioning-policy-v2**](#get-provisioning-policy-v2) | **Get** `/sources/v2/{sourceId}/provisioning-policies/{id}` | Get provisioning policy by ID
[**get-source-attr-sync-config-v1**](#get-source-attr-sync-config-v1) | **Get** `/sources/v1/{id}/attribute-sync-config` | Attribute sync config
[**get-source-config-v1**](#get-source-config-v1) | **Get** `/sources/v1/{id}/connectors/source-config` | Gets source config with language-translations
[**get-source-connections-v1**](#get-source-connections-v1) | **Get** `/sources/v1/{sourceId}/connections` | Get source connections by id
[**get-source-dataset-v1**](#get-source-dataset-v1) | **Get** `/sources/v1/{sourceId}/datasets/{datasetId}` | Get source dataset by id
[**get-source-datasets-v1**](#get-source-datasets-v1) | **Get** `/sources/v1/{sourceId}/datasets` | List datasets on source
[**get-source-entitlement-request-config-v1**](#get-source-entitlement-request-config-v1) | **Get** `/sources/v1/{id}/entitlement-request-config` | Get source entitlement request configuration
[**get-source-health-v1**](#get-source-health-v1) | **Get** `/sources/v1/{sourceId}/source-health` | Fetches source health by id
[**get-source-resource-mappings-v1**](#get-source-resource-mappings-v1) | **Get** `/sources/v1/{sourceId}/resources/mappings` | Get source resource mappings
[**get-source-resource-v1**](#get-source-resource-v1) | **Get** `/sources/v1/{sourceId}/resources/{resourceId}` | Get source resource by id
[**get-source-resources-v1**](#get-source-resources-v1) | **Get** `/sources/v1/{sourceId}/resources` | List resources for a source
[**get-source-schedule-v1**](#get-source-schedule-v1) | **Get** `/sources/v1/{sourceId}/schedules/{scheduleType}` | Get source schedule by type
[**get-source-schedules-v1**](#get-source-schedules-v1) | **Get** `/sources/v1/{sourceId}/schedules` | List schedules on source
[**get-source-schema-v1**](#get-source-schema-v1) | **Get** `/sources/v1/{sourceId}/schemas/{schemaId}` | Get source schema by id
[**get-source-schemas-v1**](#get-source-schemas-v1) | **Get** `/sources/v1/{sourceId}/schemas` | List schemas on source
[**get-source-v1**](#get-source-v1) | **Get** `/sources/v1/{id}` | Get source by id
[**import-accounts-schema-v1**](#import-accounts-schema-v1) | **Post** `/sources/v1/{id}/schemas/accounts` | Uploads source accounts schema template
[**import-accounts-v1**](#import-accounts-v1) | **Post** `/sources/v1/{id}/load-accounts` | Account aggregation
[**import-connector-file-v1**](#import-connector-file-v1) | **Post** `/sources/v1/{sourceId}/upload-connector-file` | Upload connector file to source
[**import-entitlements-schema-v1**](#import-entitlements-schema-v1) | **Post** `/sources/v1/{id}/schemas/entitlements` | Uploads source entitlements schema template
[**import-entitlements-v1**](#import-entitlements-v1) | **Post** `/sources/v1/{sourceId}/load-entitlements` | Entitlement aggregation
[**import-source-dataset-v1**](#import-source-dataset-v1) | **Post** `/sources/v1/{sourceId}/datasets/{datasetId}/aggregate` | Aggregate source dataset
[**import-uncorrelated-accounts-v1**](#import-uncorrelated-accounts-v1) | **Post** `/sources/v1/{id}/load-uncorrelated-accounts` | Process uncorrelated accounts
[**list-password-policy-holders-on-source-v1**](#list-password-policy-holders-on-source-v1) | **Get** `/sources/v1/{sourceId}/password-policies` | Get Password Policy for source
[**list-provisioning-policies-v1**](#list-provisioning-policies-v1) | **Get** `/sources/v1/{sourceId}/provisioning-policies` | Lists provisioningpolicies
[**list-provisioning-policies-v2**](#list-provisioning-policies-v2) | **Get** `/sources/v2/{sourceId}/provisioning-policies` | Lists Provisioning Policies
[**list-sources-v1**](#list-sources-v1) | **Get** `/sources/v1` | List sources
[**ping-cluster-v1**](#ping-cluster-v1) | **Post** `/sources/v1/{sourceId}/connector/ping-cluster` | Ping cluster for source connector
[**put-correlation-config-v1**](#put-correlation-config-v1) | **Put** `/sources/v1/{id}/correlation-config` | Update source correlation configuration
[**put-native-change-detection-config-v1**](#put-native-change-detection-config-v1) | **Put** `/sources/v1/{sourceId}/native-change-detection-config` | Update native change detection configuration
[**put-provisioning-policy-v1**](#put-provisioning-policy-v1) | **Put** `/sources/v1/{sourceId}/provisioning-policies/{usageType}` | Update provisioning policy by usagetype
[**put-provisioning-policy-v2**](#put-provisioning-policy-v2) | **Put** `/sources/v2/{sourceId}/provisioning-policies/{id}` | Update provisioning policy by ID
[**put-source-attr-sync-config-v1**](#put-source-attr-sync-config-v1) | **Put** `/sources/v1/{id}/attribute-sync-config` | Update attribute sync config
[**put-source-dataset-v1**](#put-source-dataset-v1) | **Put** `/sources/v1/{sourceId}/datasets/{datasetId}` | Update source dataset (full)
[**put-source-resource-v1**](#put-source-resource-v1) | **Put** `/sources/v1/{sourceId}/resources/{resourceId}` | Update source resource (full)
[**put-source-schema-v1**](#put-source-schema-v1) | **Put** `/sources/v1/{sourceId}/schemas/{schemaId}` | Update source schema (full)
[**put-source-v1**](#put-source-v1) | **Put** `/sources/v1/{id}` | Update source (full)
[**search-resource-objects-v1**](#search-resource-objects-v1) | **Post** `/sources/v1/{sourceId}/connector/peek-resource-objects` | Peek source connector&#39;s resource objects
[**sync-attributes-for-source-v1**](#sync-attributes-for-source-v1) | **Post** `/sources/v1/{id}/synchronize-attributes` | Synchronize single source attributes.
[**test-source-configuration-v1**](#test-source-configuration-v1) | **Post** `/sources/v1/{sourceId}/connector/test-configuration` | Test configuration for source connector
[**test-source-connection-v1**](#test-source-connection-v1) | **Post** `/sources/v1/{sourceId}/connector/check-connection` | Check connection for source connector.
[**update-account-deletion-approval-config-v1**](#update-account-deletion-approval-config-v1) | **Patch** `/sources/v1/{sourceId}/approval-config/account-delete` | Human Account Deletion Approval Config
[**update-machine-account-deletion-approval-config-v1**](#update-machine-account-deletion-approval-config-v1) | **Patch** `/sources/v1/{sourceId}/approval-config/machine-account-delete` | Machine Account Deletion Approval Config
[**update-password-policy-holders-v1**](#update-password-policy-holders-v1) | **Patch** `/sources/v1/{sourceId}/password-policies` | Update password policy
[**update-provisioning-policies-in-bulk-v1**](#update-provisioning-policies-in-bulk-v1) | **Post** `/sources/v1/{sourceId}/provisioning-policies/bulk-update` | Bulk update provisioning policies
[**update-provisioning-policy-v1**](#update-provisioning-policy-v1) | **Patch** `/sources/v1/{sourceId}/provisioning-policies/{usageType}` | Partial update of provisioning policy
[**update-provisioning-policy-v2**](#update-provisioning-policy-v2) | **Patch** `/sources/v2/{sourceId}/provisioning-policies/{id}` | Partial update of provisioning policy
[**update-source-dataset-v1**](#update-source-dataset-v1) | **Patch** `/sources/v1/{sourceId}/datasets/{datasetId}` | Update source dataset (partial)
[**update-source-entitlement-request-config-v1**](#update-source-entitlement-request-config-v1) | **Put** `/sources/v1/{id}/entitlement-request-config` | Update source entitlement request configuration
[**update-source-resource-v1**](#update-source-resource-v1) | **Patch** `/sources/v1/{sourceId}/resources/{resourceId}` | Update source resource (partial)
[**update-source-schedule-v1**](#update-source-schedule-v1) | **Patch** `/sources/v1/{sourceId}/schedules/{scheduleType}` | Update source schedule (partial)
[**update-source-schema-v1**](#update-source-schema-v1) | **Patch** `/sources/v1/{sourceId}/schemas/{schemaId}` | Update source schema (partial)
[**update-source-v1**](#update-source-v1) | **Patch** `/sources/v1/{id}` | Update source (partial)


## create-provisioning-policy-v1
Create provisioning policy
This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/create-provisioning-policy-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateProvisioningPolicyV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id # string | The Source id
    provisioningpolicydtoJson := []byte(`{
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
              "template" : "{firstname}.{lastname}{uniqueCounter}",
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
              "template" : "{firstname}.{lastname}{uniqueCounter}",
              "cloudMaxUniqueChecks" : "50",
              "cloudMaxSize" : "20",
              "cloudRequired" : "true"
            },
            "type" : "string"
          } ],
          "usageType" : "CREATE"
        }`) // ProvisioningPolicyDto | 

    var provisioningPolicyDto sources.ProvisioningPolicyDto
    if err := json.Unmarshal(provisioningpolicydtoJson, &provisioningPolicyDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.CreateProvisioningPolicyV1(context.Background(), sourceId).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
	  //resp, r, err := apiClient.SourcesAPI.CreateProvisioningPolicyV1(context.Background(), sourceId).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.CreateProvisioningPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateProvisioningPolicyV1`: ProvisioningPolicyDto
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.CreateProvisioningPolicyV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-provisioning-policy-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create provisioning policy
This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
The V2 API allows you to use a unique identifier (id) for each provisioning policy instead of usageType. This enables read, update, and delete operations on policies using their id.
Note: The subtypeId field is required if usageType is CREATE_MACHINE_ACCOUNT.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/create-provisioning-policy-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateProvisioningPolicyV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **provisioningPolicyDtoV2** | [**ProvisioningPolicyDtoV2**](../models/provisioning-policy-dto-v2) |  | 
 **useDefaultFields** | **bool** | If passed as true, then it uses default fields from the connector template. | [default to false]

### Return type

[**ProvisioningPolicyDtoV2**](../models/provisioning-policy-dto-v2)

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id # string | The Source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    provisioningpolicydtov2Json := []byte(`{
          "name" : "example provisioning policy for inactive identities",
          "description" : "this provisioning policy creates access based on an identity going inactive",
          "id" : "d7ae9ea3-507f-4d00-9d4f-b4464b344b88",
          "subtypeId" : "d7ae9ea3-507f-4d00-9d4f-b4464b344b88",
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
              "template" : "firstname.lastname.uniqueCounter",
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
              "template" : "firstname.lastname.uniqueCounter",
              "cloudMaxUniqueChecks" : "50",
              "cloudMaxSize" : "20",
              "cloudRequired" : "true"
            },
            "type" : "string"
          } ],
          "usageType" : "CREATE"
        }`) // ProvisioningPolicyDtoV2 | 
    useDefaultFields := false // bool | If passed as true, then it uses default fields from the connector template. (optional) (default to false) # bool | If passed as true, then it uses default fields from the connector template. (optional) (default to false)

    var provisioningPolicyDtoV2 sources.ProvisioningPolicyDtoV2
    if err := json.Unmarshal(provisioningpolicydtov2Json, &provisioningPolicyDtoV2); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.CreateProvisioningPolicyV2(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).ProvisioningPolicyDtoV2(provisioningPolicyDtoV2).Execute()
	  //resp, r, err := apiClient.SourcesAPI.CreateProvisioningPolicyV2(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).ProvisioningPolicyDtoV2(provisioningPolicyDtoV2).UseDefaultFields(useDefaultFields).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.CreateProvisioningPolicyV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateProvisioningPolicyV2`: ProvisioningPolicyDtoV2
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.CreateProvisioningPolicyV2`: %v\n", resp)
}
```

[[Back to top]](#)

## create-source-dataset-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create dataset on source
Use this API to create a dataset on the specified source in Identity Security Cloud (ISC).


This operation requires a connector with the `supportDatasetCreation` label. `name` is required.
The dataset `id` is always server-generated from `name` as `customer:` plus a normalized form of
the name; any client-supplied `id` is ignored.


[API Spec](https://developer.sailpoint.com/docs/api/create-source-dataset-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceDatasetV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sourceDataset** | [**SourceDataset**](../models/source-dataset) |  | 

### Return type

[**SourceDataset**](../models/source-dataset)

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sourcedatasetJson := []byte(`{
          "name" : "Applications",
          "description" : "CMDB application records for this source.",
          "resources" : [ {
            "name" : "Role",
            "id" : "aws:iam-role",
            "type" : "std:resource"
          }, {
            "name" : "Role",
            "id" : "aws:iam-role",
            "type" : "std:resource"
          } ],
          "id" : "cmdb-servicenow:applications",
          "aggregationEnabled" : true
        }`) // SourceDataset | 

    var sourceDataset sources.SourceDataset
    if err := json.Unmarshal(sourcedatasetJson, &sourceDataset); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.CreateSourceDatasetV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).SourceDataset(sourceDataset).Execute()
	  //resp, r, err := apiClient.SourcesAPI.CreateSourceDatasetV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).SourceDataset(sourceDataset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.CreateSourceDatasetV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSourceDatasetV1`: SourceDataset
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.CreateSourceDatasetV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-source-resource-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create resource on source
Use this API to create a resource on the specified source in Identity Security Cloud (ISC).


This operation requires a connector with the `supportDatasetCreation` label. `name`, `type`,
`datasetId`, and `schema` are required. The `schema` must define at least one attribute plus
`identityAttribute` and `displayAttribute`. The resource `id` is always server-generated from
`name` as `customer:` plus a normalized form of the name; any client-supplied `id` is ignored.
After creation, schema attribute edits are made through the source schema APIs.


[API Spec](https://developer.sailpoint.com/docs/api/create-source-resource-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceResourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sourceDatasetResource** | [**SourceDatasetResource**](../models/source-dataset-resource) |  | 

### Return type

[**SourceDatasetResource**](../models/source-dataset-resource)

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sourcedatasetresourceJson := []byte(`{
          "schema" : {
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
          },
          "features" : [ "Create", "Delete" ],
          "name" : "Account",
          "datasetId" : "cmdb-servicenow:applications",
          "id" : "aws:iam-role",
          "type" : "std:resource"
        }`) // SourceDatasetResource | 

    var sourceDatasetResource sources.SourceDatasetResource
    if err := json.Unmarshal(sourcedatasetresourceJson, &sourceDatasetResource); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.CreateSourceResourceV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).SourceDatasetResource(sourceDatasetResource).Execute()
	  //resp, r, err := apiClient.SourcesAPI.CreateSourceResourceV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).SourceDatasetResource(sourceDatasetResource).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.CreateSourceResourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSourceResourceV1`: SourceDatasetResource
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.CreateSourceResourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-source-schedule-v1
Create schedule on source
Use this API to create a new schedule for a type on the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/create-source-schedule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceScheduleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **schedule3** | [**Schedule3**](../models/schedule3) |  | 

### Return type

[**Schedule3**](../models/schedule3)

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    schedule3Json := []byte(``) // Schedule3 | 

    var schedule3 sources.Schedule3
    if err := json.Unmarshal(schedule3Json, &schedule3); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.CreateSourceScheduleV1(context.Background(), sourceId).Schedule3(schedule3).Execute()
	  //resp, r, err := apiClient.SourcesAPI.CreateSourceScheduleV1(context.Background(), sourceId).Schedule3(schedule3).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.CreateSourceScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSourceScheduleV1`: Schedule3
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.CreateSourceScheduleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-source-schema-v1
Create schema on source
Use this API to create a new schema on the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/create-source-schema-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceSchemaV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    schemaJson := []byte(`{
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

    var schema sources.Schema
    if err := json.Unmarshal(schemaJson, &schema); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.CreateSourceSchemaV1(context.Background(), sourceId).Schema(schema).Execute()
	  //resp, r, err := apiClient.SourcesAPI.CreateSourceSchemaV1(context.Background(), sourceId).Schema(schema).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.CreateSourceSchemaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSourceSchemaV1`: Schema
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.CreateSourceSchemaV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-source-v1
Create source
This creates a specific source with a full source JSON representation. Any passwords are submitted as plain-text and encrypted upon receipt.

[API Spec](https://developer.sailpoint.com/docs/api/create-source-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | [**Source**](../models/source) |  | 
 **provisionAsCsv** | **bool** | If this parameter is &#x60;true&#x60;, it configures the source as a Delimited File (CSV) source. Setting this to &#x60;true&#x60; will automatically set the &#x60;type&#x60; of the source to &#x60;DelimitedFile&#x60;.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don&#39;t set this query parameter and you attempt to set the &#x60;type&#x60; attribute directly, the request won&#39;t correctly generate the source.   | [default to false]

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceJson := []byte(`{
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
    provisionAsCsv := false // bool | If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don't set this query parameter and you attempt to set the `type` attribute directly, the request won't correctly generate the source.   (optional) (default to false) # bool | If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don't set this query parameter and you attempt to set the `type` attribute directly, the request won't correctly generate the source.   (optional) (default to false)

    var source sources.Source
    if err := json.Unmarshal(sourceJson, &source); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.CreateSourceV1(context.Background()).Source(source).Execute()
	  //resp, r, err := apiClient.SourcesAPI.CreateSourceV1(context.Background()).Source(source).ProvisionAsCsv(provisionAsCsv).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.CreateSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSourceV1`: Source
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.CreateSourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-accounts-async-v1
Remove all accounts in source
Use this endpoint to remove all accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.

This endpoint is good for:
* Removing accounts that no longer exist on the source.
* Removing accounts that won't be aggregated following updates to the source configuration.
* Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.


[API Spec](https://developer.sailpoint.com/docs/api/delete-accounts-async-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccountsAsyncV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ebbf35756e1140699ce52b233121384a` // string | The source id # string | The source id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.DeleteAccountsAsyncV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SourcesAPI.DeleteAccountsAsyncV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteAccountsAsyncV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAccountsAsyncV1`: TaskResultDto
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.DeleteAccountsAsyncV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-native-change-detection-config-v1
Delete native change detection configuration
Deletes the native change detection configuration for the source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-native-change-detection-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNativeChangeDetectionConfigV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SourcesAPI.DeleteNativeChangeDetectionConfigV1(context.Background(), sourceId).Execute()
	  //r, err := apiClient.SourcesAPI.DeleteNativeChangeDetectionConfigV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteNativeChangeDetectionConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-provisioning-policy-v1
Delete provisioning policy by usagetype
Deletes the provisioning policy with the specified usage on an application.

[API Spec](https://developer.sailpoint.com/docs/api/delete-provisioning-policy-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**usageType** | [**UsageType**](../models/) | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to &#39;Create Account Profile&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to &#39;Update Account Profile&#39;, the provisioning template for the &#39;Update&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to &#39;Enable Account Profile&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner&#39;s account is created.  DISABLE - This usage type relates to &#39;Disable Account Profile&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteProvisioningPolicyV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    usageType := CREATE // UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SourcesAPI.DeleteProvisioningPolicyV1(context.Background(), sourceId, usageType).Execute()
	  //r, err := apiClient.SourcesAPI.DeleteProvisioningPolicyV1(context.Background(), sourceId, usageType).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteProvisioningPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-provisioning-policy-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete provisioning policy by ID
Deletes the provisioning policy with the specified ID on an application.

[API Spec](https://developer.sailpoint.com/docs/api/delete-provisioning-policy-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**id** | **string** | The provisioning policy ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteProvisioningPolicyV2Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    id := `f5dd23fe-3414-42b7-bb1c-869400ad7a10` // string | The provisioning policy ID. # string | The provisioning policy ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SourcesAPI.DeleteProvisioningPolicyV2(context.Background(), sourceId, id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.SourcesAPI.DeleteProvisioningPolicyV2(context.Background(), sourceId, id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteProvisioningPolicyV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-source-dataset-objects-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete objects for source dataset
Starts a task to delete aggregated objects for the specified dataset on the source in Identity
Security Cloud (ISC). Linked dataset and resource definitions are not deleted.


[API Spec](https://developer.sailpoint.com/docs/api/delete-source-dataset-objects-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 
**datasetId** | **string** | Dataset ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSourceDatasetObjectsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**TaskResultDetails**](../models/task-result-details)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    datasetId := `cmdb-servicenow:applications` // string | Dataset ID. # string | Dataset ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.DeleteSourceDatasetObjectsV1(context.Background(), sourceId, datasetId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SourcesAPI.DeleteSourceDatasetObjectsV1(context.Background(), sourceId, datasetId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteSourceDatasetObjectsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteSourceDatasetObjectsV1`: TaskResultDetails
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.DeleteSourceDatasetObjectsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-source-dataset-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete source dataset by id
Use this API to delete a dataset on the specified source in Identity Security Cloud (ISC).


This operation requires a connector with the `supportDatasetCreation` label. Linked resource
schemas are not deleted.


[API Spec](https://developer.sailpoint.com/docs/api/delete-source-dataset-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 
**datasetId** | **string** | Dataset ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSourceDatasetV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    datasetId := `cmdb-servicenow:applications` // string | Dataset ID. # string | Dataset ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SourcesAPI.DeleteSourceDatasetV1(context.Background(), sourceId, datasetId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.SourcesAPI.DeleteSourceDatasetV1(context.Background(), sourceId, datasetId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteSourceDatasetV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-source-resource-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete source resource by id
Use this API to delete a resource on the specified source in Identity Security Cloud (ISC).


The resource schema is deleted and the resource is unlinked from any dataset rows on the source.


[API Spec](https://developer.sailpoint.com/docs/api/delete-source-resource-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 
**resourceId** | **string** | Resource ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSourceResourceV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    resourceId := `account` // string | Resource ID. # string | Resource ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SourcesAPI.DeleteSourceResourceV1(context.Background(), sourceId, resourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.SourcesAPI.DeleteSourceResourceV1(context.Background(), sourceId, resourceId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteSourceResourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-source-schedule-v1
Delete source schedule by type.


[API Spec](https://developer.sailpoint.com/docs/api/delete-source-schedule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**scheduleType** | **string** | The Schedule type. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSourceScheduleV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    scheduleType := `ACCOUNT_AGGREGATION` // string | The Schedule type. # string | The Schedule type.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SourcesAPI.DeleteSourceScheduleV1(context.Background(), sourceId, scheduleType).Execute()
	  //r, err := apiClient.SourcesAPI.DeleteSourceScheduleV1(context.Background(), sourceId, scheduleType).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteSourceScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-source-schema-v1
Delete source schema by id


[API Spec](https://developer.sailpoint.com/docs/api/delete-source-schema-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**schemaId** | **string** | The Schema id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSourceSchemaV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    schemaId := `2c9180835d191a86015d28455b4a2329` // string | The Schema id. # string | The Schema id.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SourcesAPI.DeleteSourceSchemaV1(context.Background(), sourceId, schemaId).Execute()
	  //r, err := apiClient.SourcesAPI.DeleteSourceSchemaV1(context.Background(), sourceId, schemaId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteSourceSchemaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-source-v1
Delete source by id
Use this API to delete a specific source in Identity Security Cloud (ISC).
The API removes all the accounts on the source first, and then it deletes the source. You can retrieve the actual task execution status with this method: GET `/task-status/{id}`

[API Spec](https://developer.sailpoint.com/docs/api/delete-source-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeleteSourceV1202Response**](../models/delete-source-v1202-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.DeleteSourceV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SourcesAPI.DeleteSourceV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.DeleteSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteSourceV1`: DeleteSourceV1202Response
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.DeleteSourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-account-delete-approval-config-v1
Human Account Deletion Approval Config
The endpoint retrieves the approval configuration for deleting human accounts from a specified source. It returns details such as whether approval is required, who the approvers are, and any additional approval settings. This helps administrators understand and manage the approval workflow for human account deletions in their organization. The response is provided as an AccountDeleteConfigDto object.


[API Spec](https://developer.sailpoint.com/docs/api/get-account-delete-approval-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccountDeleteApprovalConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AccountDeleteConfigDto**](../models/account-delete-config-dto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `ha38f94347e94562b5bb8424a56498d8` // string | The Source id # string | The Source id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetAccountDeleteApprovalConfigV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetAccountDeleteApprovalConfigV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetAccountDeleteApprovalConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccountDeleteApprovalConfigV1`: AccountDeleteConfigDto
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetAccountDeleteApprovalConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-accounts-schema-v1
Downloads source accounts schema template
This API downloads the CSV schema that defines the account attributes on a source.
>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/get-accounts-schema-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccountsSchemaV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SourcesAPI.GetAccountsSchemaV1(context.Background(), id).Execute()
	  //r, err := apiClient.SourcesAPI.GetAccountsSchemaV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetAccountsSchemaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-correlation-config-v1
Get source correlation configuration
This API returns the existing correlation configuration for a source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-correlation-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCorrelationConfigV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetCorrelationConfigV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetCorrelationConfigV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetCorrelationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCorrelationConfigV1`: CorrelationConfig
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetCorrelationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-entitlements-schema-v1
Downloads source entitlements schema template
This API downloads the CSV schema that defines the entitlement attributes on a source.

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlements-schema-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementsSchemaV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    schemaName := `?schemaName=group` // string | Name of entitlement schema (optional) # string | Name of entitlement schema (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SourcesAPI.GetEntitlementsSchemaV1(context.Background(), id).Execute()
	  //r, err := apiClient.SourcesAPI.GetEntitlementsSchemaV1(context.Background(), id).SchemaName(schemaName).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetEntitlementsSchemaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-machine-account-deletion-approval-config-by-source-v1
Machine Account Deletion Approval Config
Retrieves the machine account deletion approval configuration for a specific source. This endpoint returns details about the approval requirements, approvers, and comment settings that govern the deletion of machine accounts associated with the given source ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-deletion-approval-config-by-source-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | source id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountDeletionApprovalConfigBySourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AccountDeleteConfigDto**](../models/account-delete-config-dto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `gt38f94347e94562b5bb8424a56498d8` // string | source id. # string | source id.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetMachineAccountDeletionApprovalConfigBySourceV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetMachineAccountDeletionApprovalConfigBySourceV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetMachineAccountDeletionApprovalConfigBySourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccountDeletionApprovalConfigBySourceV1`: AccountDeleteConfigDto
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetMachineAccountDeletionApprovalConfigBySourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-native-change-detection-config-v1
Native change detection configuration
This API returns the existing native change detection configuration for a source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-native-change-detection-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNativeChangeDetectionConfigV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetNativeChangeDetectionConfigV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetNativeChangeDetectionConfigV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetNativeChangeDetectionConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNativeChangeDetectionConfigV1`: NativeChangeDetectionConfig
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetNativeChangeDetectionConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-provisioning-policy-v1
Get provisioning policy by usagetype
This end-point retrieves the ProvisioningPolicy with the specified usage on the specified Source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/get-provisioning-policy-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**usageType** | [**UsageType**](../models/) | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to &#39;Create Account Profile&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to &#39;Update Account Profile&#39;, the provisioning template for the &#39;Update&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to &#39;Enable Account Profile&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner&#39;s account is created.  DISABLE - This usage type relates to &#39;Disable Account Profile&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProvisioningPolicyV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    usageType := CREATE // UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetProvisioningPolicyV1(context.Background(), sourceId, usageType).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetProvisioningPolicyV1(context.Background(), sourceId, usageType).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetProvisioningPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProvisioningPolicyV1`: ProvisioningPolicyDto
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetProvisioningPolicyV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-provisioning-policy-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get provisioning policy by ID
This end-point retrieves the ProvisioningPolicy with the specified ID on the specified Source in Identity Security Cloud.

[API Spec](https://developer.sailpoint.com/docs/api/get-provisioning-policy-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**id** | **string** | The provisioning policy ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProvisioningPolicyV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**ProvisioningPolicyDtoV2**](../models/provisioning-policy-dto-v2)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    id := `f5dd23fe-3414-42b7-bb1c-869400ad7a10` // string | The provisioning policy ID. # string | The provisioning policy ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetProvisioningPolicyV2(context.Background(), sourceId, id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetProvisioningPolicyV2(context.Background(), sourceId, id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetProvisioningPolicyV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProvisioningPolicyV2`: ProvisioningPolicyDtoV2
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetProvisioningPolicyV2`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-attr-sync-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Attribute sync config
This API returns the existing attribute synchronization configuration for a source specified by the given ID. The response contains all attributes, regardless of whether they enabled or not.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-attr-sync-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceAttrSyncConfigV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceAttrSyncConfigV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceAttrSyncConfigV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceAttrSyncConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceAttrSyncConfigV1`: AttrSyncSourceConfig
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceAttrSyncConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-config-v1
Gets source config with language-translations
Looks up and returns the source config for the requested source id after populating the source config values and applying language translations.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceConfigV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `cef3ee201db947c5912551015ba0c679` // string | The Source id # string | The Source id
    locale := `en` // string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceConfigV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceConfigV1(context.Background(), id).Locale(locale).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceConfigV1`: ConnectorDetail
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-connections-v1
Get source connections by id
Use this API to get all dependent Profiles, Attributes, Applications and Custom Transforms for a source by a specified ID in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/get-source-connections-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceConnectionsV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceConnectionsV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceConnectionsV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceConnectionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceConnectionsV1`: SourceConnectionsDto
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceConnectionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-dataset-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get source dataset by id
Use this API to get a dataset by id for the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/get-source-dataset-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 
**datasetId** | **string** | Dataset ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceDatasetV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**SourceDataset**](../models/source-dataset)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    datasetId := `cmdb-servicenow:applications` // string | Dataset ID. # string | Dataset ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceDatasetV1(context.Background(), sourceId, datasetId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceDatasetV1(context.Background(), sourceId, datasetId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceDatasetV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceDatasetV1`: SourceDataset
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceDatasetV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-datasets-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List datasets on source
Use this API to list datasets for the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/get-source-datasets-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceDatasetsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]SourceDataset**](../models/source-dataset)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceDatasetsV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceDatasetsV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceDatasetsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceDatasetsV1`: []SourceDataset
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceDatasetsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-entitlement-request-config-v1
Get source entitlement request configuration
This API gets the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

The `WORKFLOW` approver type is not supported in source-level configuration. To use a workflow as an approver, configure it on the entitlement with [Replace entitlement request config](https://developer.sailpoint.com/docs/api/put-entitlement-request-config-v-1). A source-level request that contains `WORKFLOW` fails with a 400.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-entitlement-request-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceEntitlementRequestConfigV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceEntitlementRequestConfigV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceEntitlementRequestConfigV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceEntitlementRequestConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceEntitlementRequestConfigV1`: SourceEntitlementRequestConfig
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceEntitlementRequestConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-health-v1
Fetches source health by id
This endpoint fetches source health by source's id

[API Spec](https://developer.sailpoint.com/docs/api/get-source-health-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceHealthV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceHealthV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceHealthV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceHealthV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceHealthV1`: SourceHealthDto
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceHealthV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-resource-mappings-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get source resource mappings
Use this API to get aggregation metadata for resources on the specified source in Identity
Security Cloud (ISC). The response is keyed by resource id. Each value includes the linked
dataset id, resource type, and connector object type. Resources without a matching schema are
omitted.


[API Spec](https://developer.sailpoint.com/docs/api/get-source-resource-mappings-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceResourceMappingsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**map[string]SourceResourceMappingValue**](../models/source-resource-mapping-value)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceResourceMappingsV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceResourceMappingsV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceResourceMappingsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceResourceMappingsV1`: map[string]SourceResourceMappingValue
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceResourceMappingsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-resource-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get source resource by id
Use this API to get a resource by id on the specified source in Identity Security Cloud (ISC).
The response includes the full CIS schema for the resource.


[API Spec](https://developer.sailpoint.com/docs/api/get-source-resource-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 
**resourceId** | **string** | Resource ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceResourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**SourceDatasetResource**](../models/source-dataset-resource)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    resourceId := `account` // string | Resource ID. # string | Resource ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceResourceV1(context.Background(), sourceId, resourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceResourceV1(context.Background(), sourceId, resourceId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceResourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceResourceV1`: SourceDatasetResource
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceResourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-resources-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List resources for a source
Use this API to list resources defined on the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/get-source-resources-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceResourcesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]SourceDatasetResource**](../models/source-dataset-resource)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceResourcesV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceResourcesV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceResourcesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceResourcesV1`: []SourceDatasetResource
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceResourcesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-schedule-v1
Get source schedule by type
Get the source schedule by type in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/get-source-schedule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**scheduleType** | **string** | The Schedule type. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceScheduleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Schedule3**](../models/schedule3)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    scheduleType := `ACCOUNT_AGGREGATION` // string | The Schedule type. # string | The Schedule type.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceScheduleV1(context.Background(), sourceId, scheduleType).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceScheduleV1(context.Background(), sourceId, scheduleType).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceScheduleV1`: Schedule3
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceScheduleV1`: %v\n", resp)
}
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


[API Spec](https://developer.sailpoint.com/docs/api/get-source-schedules-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceSchedulesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]Schedule3**](../models/schedule3)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceSchedulesV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceSchedulesV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceSchedulesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceSchedulesV1`: []Schedule3
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceSchedulesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-schema-v1
Get source schema by id
Get the Source Schema by ID in IdentityNow.


[API Spec](https://developer.sailpoint.com/docs/api/get-source-schema-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**schemaId** | **string** | The Schema id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceSchemaV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    schemaId := `2c9180835d191a86015d28455b4a2329` // string | The Schema id. # string | The Schema id.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceSchemaV1(context.Background(), sourceId, schemaId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceSchemaV1(context.Background(), sourceId, schemaId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceSchemaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceSchemaV1`: Schema
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceSchemaV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-schemas-v1
List schemas on source
Use this API to list the schemas that exist on the specified source in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/get-source-schemas-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceSchemasV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    includeTypes := `group` // string | If set to 'group', then the account schema is filtered and only group schemas are returned. Only a value of 'group' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. (optional) # string | If set to 'group', then the account schema is filtered and only group schemas are returned. Only a value of 'group' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. (optional)
    includeNames := `account` // string | A comma-separated list of schema names to filter result. (optional) # string | A comma-separated list of schema names to filter result. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceSchemasV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceSchemasV1(context.Background(), sourceId).IncludeTypes(includeTypes).IncludeNames(includeNames).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceSchemasV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceSchemasV1`: []Schema
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceSchemasV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-v1
Get source by id
Use this API to get a source by a specified ID in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/get-source-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.GetSourceV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SourcesAPI.GetSourceV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.GetSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceV1`: Source
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.GetSourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## import-accounts-schema-v1
Uploads source accounts schema template
This API uploads a source schema template file to configure a source's account attributes.

To retrieve the file to modify and upload, log into Identity Now. 

Click **Admin** -> **Connections** -> **Sources** -> **`{SourceName}`** -> **Import Data** -> **Account Schema** -> **Options** -> **Download Schema**

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/import-accounts-schema-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportAccountsSchemaV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    file := BINARY_DATA_HERE // *os.File |  (optional) # *os.File |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.ImportAccountsSchemaV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SourcesAPI.ImportAccountsSchemaV1(context.Background(), id).File(file).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportAccountsSchemaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportAccountsSchemaV1`: Schema
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportAccountsSchemaV1`: %v\n", resp)
}
```

[[Back to top]](#)

## import-accounts-v1
Account aggregation
Starts an account aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body.
You will also need to set the Content-Type header to `multipart/form-data`.

[API Spec](https://developer.sailpoint.com/docs/api/import-accounts-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportAccountsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source Id # string | Source Id
    file := BINARY_DATA_HERE // *os.File | The CSV file containing the source accounts to aggregate. (optional) # *os.File | The CSV file containing the source accounts to aggregate. (optional)
    disableOptimization := `disableOptimization_example` // string | Use this flag to reprocess every account whether or not the data has changed. (optional) # string | Use this flag to reprocess every account whether or not the data has changed. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.ImportAccountsV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SourcesAPI.ImportAccountsV1(context.Background(), id).File(file).DisableOptimization(disableOptimization).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportAccountsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportAccountsV1`: LoadAccountsTask
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportAccountsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## import-connector-file-v1
Upload connector file to source
This uploads a supplemental source connector file (like jdbc driver jars) to a source's S3 bucket. This also sends ETS and Audit events.

[API Spec](https://developer.sailpoint.com/docs/api/import-connector-file-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportConnectorFileV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    file := BINARY_DATA_HERE // *os.File |  (optional) # *os.File |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.ImportConnectorFileV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.ImportConnectorFileV1(context.Background(), sourceId).File(file).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportConnectorFileV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportConnectorFileV1`: Source
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportConnectorFileV1`: %v\n", resp)
}
```

[[Back to top]](#)

## import-entitlements-schema-v1
Uploads source entitlements schema template
This API uploads a source schema template file to configure a source's entitlement attributes.

To retrieve the file to modify and upload, log into Identity Now. 

Click **Admin** -> **Connections** -> **Sources** -> **`{SourceName}`** -> **Import Data** -> **Import Entitlements** -> **Download**

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/import-entitlements-schema-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportEntitlementsSchemaV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    schemaName := `?schemaName=group` // string | Name of entitlement schema (optional) # string | Name of entitlement schema (optional)
    file := BINARY_DATA_HERE // *os.File |  (optional) # *os.File |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.ImportEntitlementsSchemaV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SourcesAPI.ImportEntitlementsSchemaV1(context.Background(), id).SchemaName(schemaName).File(file).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportEntitlementsSchemaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportEntitlementsSchemaV1`: Schema
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportEntitlementsSchemaV1`: %v\n", resp)
}
```

[[Back to top]](#)

## import-entitlements-v1
Entitlement aggregation
Starts an entitlement aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body. 
You will also need to set the Content-Type header to `multipart/form-data`.
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/import-entitlements-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportEntitlementsV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source Id # string | Source Id
    file := BINARY_DATA_HERE // *os.File | The CSV file containing the source entitlements to aggregate. (optional) # *os.File | The CSV file containing the source entitlements to aggregate. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.ImportEntitlementsV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.ImportEntitlementsV1(context.Background(), sourceId).File(file).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportEntitlementsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportEntitlementsV1`: LoadEntitlementTask
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportEntitlementsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## import-source-dataset-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Aggregate source dataset
Starts an aggregation for the specified dataset on the source in Identity Security Cloud (ISC).
An optional `config` object can be supplied for connector-specific aggregation settings.


[API Spec](https://developer.sailpoint.com/docs/api/import-source-dataset-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 
**datasetId** | **string** | Dataset ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportSourceDatasetV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **datasetAggregationRequest** | [**DatasetAggregationRequest**](../models/dataset-aggregation-request) |  | 

### Return type

[**TaskResultDetails**](../models/task-result-details)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    datasetId := `cmdb-servicenow:applications` // string | Dataset ID. # string | Dataset ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    datasetaggregationrequestJson := []byte(`{
          "config" : {
            "region" : "us-east-1"
          }
        }`) // DatasetAggregationRequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.ImportSourceDatasetV1(context.Background(), sourceId, datasetId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SourcesAPI.ImportSourceDatasetV1(context.Background(), sourceId, datasetId).XSailPointExperimental(xSailPointExperimental).DatasetAggregationRequest(datasetAggregationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportSourceDatasetV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportSourceDatasetV1`: TaskResultDetails
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportSourceDatasetV1`: %v\n", resp)
}
```

[[Back to top]](#)

## import-uncorrelated-accounts-v1
Process uncorrelated accounts
File is required for upload. You will also need to set the Content-Type header to `multipart/form-data`

[API Spec](https://developer.sailpoint.com/docs/api/import-uncorrelated-accounts-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportUncorrelatedAccountsV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `75dbec1ebe154d5785da27b95e1dd5d7` // string | Source Id # string | Source Id
    file := BINARY_DATA_HERE // *os.File |  (optional) # *os.File |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.ImportUncorrelatedAccountsV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SourcesAPI.ImportUncorrelatedAccountsV1(context.Background(), id).File(file).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ImportUncorrelatedAccountsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportUncorrelatedAccountsV1`: LoadUncorrelatedAccountsTask
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ImportUncorrelatedAccountsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-password-policy-holders-on-source-v1
Get Password Policy for source
This API can be used to get Password Policy in IdentityNow for the specified Source.
Source must support PASSWORD feature.


[API Spec](https://developer.sailpoint.com/docs/api/list-password-policy-holders-on-source-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiListPasswordPolicyHoldersOnSourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]PasswordPolicyHoldersDtoInner**](../models/password-policy-holders-dto-inner)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.ListPasswordPolicyHoldersOnSourceV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.ListPasswordPolicyHoldersOnSourceV1(context.Background(), sourceId).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ListPasswordPolicyHoldersOnSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPasswordPolicyHoldersOnSourceV1`: []PasswordPolicyHoldersDtoInner
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ListPasswordPolicyHoldersOnSourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-provisioning-policies-v1
Lists provisioningpolicies
This end-point lists all the ProvisioningPolicies in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/list-provisioning-policies-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiListProvisioningPoliciesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **int64** | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [default to 0]
 **limit** | **int64** | Limit        Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id # string | The Source id
    offset := 0 // int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit := 250 // int64 | Limit        Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit        Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.ListProvisioningPoliciesV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.ListProvisioningPoliciesV1(context.Background(), sourceId).Offset(offset).Limit(limit).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ListProvisioningPoliciesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListProvisioningPoliciesV1`: []ProvisioningPolicyDto
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ListProvisioningPoliciesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-provisioning-policies-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Lists Provisioning Policies
This end-point lists all the ProvisioningPolicies in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/list-provisioning-policies-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiListProvisioningPoliciesV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **subtypeId**: *eq*  **usageType**: *eq* | 
 **offset** | **int64** | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [default to 0]
 **limit** | **int64** | Limit Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [default to 250]

### Return type

[**[]ProvisioningPolicyDtoV2**](../models/provisioning-policy-dto-v2)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id # string | The Source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `subtypeId eq "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **subtypeId**: *eq*  **usageType**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **subtypeId**: *eq*  **usageType**: *eq* (optional)
    offset := 0 // int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int64 | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit := 250 // int64 | Limit Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int64 | Limit Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.ListProvisioningPoliciesV2(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SourcesAPI.ListProvisioningPoliciesV2(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Filters(filters).Offset(offset).Limit(limit).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ListProvisioningPoliciesV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListProvisioningPoliciesV2`: []ProvisioningPolicyDtoV2
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ListProvisioningPoliciesV2`: %v\n", resp)
}
```

[[Back to top]](#)

## list-sources-v1
List sources
This end-point lists all the sources.

[API Spec](https://developer.sailpoint.com/docs/api/list-sources-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSourcesV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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
    resp, r, err := apiClient.SourcesAPI.ListSourcesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SourcesAPI.ListSourcesV1(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).ForSubadmin(forSubadmin).IncludeIDNSource(includeIDNSource).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.ListSourcesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSourcesV1`: []Source
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.ListSourcesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## ping-cluster-v1
Ping cluster for source connector
This endpoint validates that the cluster being used by the source is reachable from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/ping-cluster-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the Source | 

### Other Parameters

Other parameters are passed through a pointer to a apiPingClusterV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `cef3ee201db947c5912551015ba0c679` // string | The ID of the Source # string | The ID of the Source

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.PingClusterV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.PingClusterV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PingClusterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PingClusterV1`: StatusResponse
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PingClusterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-correlation-config-v1
Update source correlation configuration
Replaces the correlation configuration for the source specified by the given ID with the configuration provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/put-correlation-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCorrelationConfigV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id
    correlationconfigJson := []byte(`{
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

    var correlationConfig sources.CorrelationConfig
    if err := json.Unmarshal(correlationconfigJson, &correlationConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.PutCorrelationConfigV1(context.Background(), id).CorrelationConfig(correlationConfig).Execute()
	  //resp, r, err := apiClient.SourcesAPI.PutCorrelationConfigV1(context.Background(), id).CorrelationConfig(correlationConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutCorrelationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCorrelationConfigV1`: CorrelationConfig
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutCorrelationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-native-change-detection-config-v1
Update native change detection configuration
Replaces the native change detection configuration for the source specified by the given ID with the configuration provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/put-native-change-detection-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutNativeChangeDetectionConfigV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id
    nativechangedetectionconfigJson := []byte(`{
          "selectedEntitlements" : [ "memberOf", "memberOfSharedMailbox" ],
          "operations" : [ "ACCOUNT_UPDATED", "ACCOUNT_DELETED" ],
          "selectedNonEntitlementAttributes" : [ "lastName", "phoneNumber", "objectType", "servicePrincipalName" ],
          "allNonEntitlementAttributes" : false,
          "allEntitlements" : false,
          "enabled" : true
        }`) // NativeChangeDetectionConfig | 

    var nativeChangeDetectionConfig sources.NativeChangeDetectionConfig
    if err := json.Unmarshal(nativechangedetectionconfigJson, &nativeChangeDetectionConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.PutNativeChangeDetectionConfigV1(context.Background(), sourceId).NativeChangeDetectionConfig(nativeChangeDetectionConfig).Execute()
	  //resp, r, err := apiClient.SourcesAPI.PutNativeChangeDetectionConfigV1(context.Background(), sourceId).NativeChangeDetectionConfig(nativeChangeDetectionConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutNativeChangeDetectionConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutNativeChangeDetectionConfigV1`: NativeChangeDetectionConfig
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutNativeChangeDetectionConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-provisioning-policy-v1
Update provisioning policy by usagetype
This end-point updates the provisioning policy with the specified usage on the specified source in IdentityNow.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/put-provisioning-policy-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**usageType** | [**UsageType**](../models/) | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to &#39;Create Account Profile&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to &#39;Update Account Profile&#39;, the provisioning template for the &#39;Update&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to &#39;Enable Account Profile&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner&#39;s account is created.  DISABLE - This usage type relates to &#39;Disable Account Profile&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutProvisioningPolicyV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    usageType := CREATE // UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.
    provisioningpolicydtoJson := []byte(`{
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
              "template" : "{firstname}.{lastname}{uniqueCounter}",
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
              "template" : "{firstname}.{lastname}{uniqueCounter}",
              "cloudMaxUniqueChecks" : "50",
              "cloudMaxSize" : "20",
              "cloudRequired" : "true"
            },
            "type" : "string"
          } ],
          "usageType" : "CREATE"
        }`) // ProvisioningPolicyDto | 

    var provisioningPolicyDto sources.ProvisioningPolicyDto
    if err := json.Unmarshal(provisioningpolicydtoJson, &provisioningPolicyDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.PutProvisioningPolicyV1(context.Background(), sourceId, usageType).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
	  //resp, r, err := apiClient.SourcesAPI.PutProvisioningPolicyV1(context.Background(), sourceId, usageType).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutProvisioningPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutProvisioningPolicyV1`: ProvisioningPolicyDto
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutProvisioningPolicyV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-provisioning-policy-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update provisioning policy by ID
This end-point updates the provisioning policy with the specified ID on the specified source in Identity Security Cloud.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/put-provisioning-policy-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**id** | **string** | The provisioning policy ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutProvisioningPolicyV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **provisioningPolicyDtoV2** | [**ProvisioningPolicyDtoV2**](../models/provisioning-policy-dto-v2) |  | 

### Return type

[**ProvisioningPolicyDtoV2**](../models/provisioning-policy-dto-v2)

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    id := `f5dd23fe-3414-42b7-bb1c-869400ad7a10` // string | The provisioning policy ID. # string | The provisioning policy ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    provisioningpolicydtov2Json := []byte(`{
          "name" : "example provisioning policy for inactive identities",
          "description" : "this provisioning policy creates access based on an identity going inactive",
          "id" : "d7ae9ea3-507f-4d00-9d4f-b4464b344b88",
          "subtypeId" : "d7ae9ea3-507f-4d00-9d4f-b4464b344b88",
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
              "template" : "firstname.lastname.uniqueCounter",
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
              "template" : "firstname.lastname.uniqueCounter",
              "cloudMaxUniqueChecks" : "50",
              "cloudMaxSize" : "20",
              "cloudRequired" : "true"
            },
            "type" : "string"
          } ],
          "usageType" : "CREATE"
        }`) // ProvisioningPolicyDtoV2 | 

    var provisioningPolicyDtoV2 sources.ProvisioningPolicyDtoV2
    if err := json.Unmarshal(provisioningpolicydtov2Json, &provisioningPolicyDtoV2); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.PutProvisioningPolicyV2(context.Background(), sourceId, id).XSailPointExperimental(xSailPointExperimental).ProvisioningPolicyDtoV2(provisioningPolicyDtoV2).Execute()
	  //resp, r, err := apiClient.SourcesAPI.PutProvisioningPolicyV2(context.Background(), sourceId, id).XSailPointExperimental(xSailPointExperimental).ProvisioningPolicyDtoV2(provisioningPolicyDtoV2).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutProvisioningPolicyV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutProvisioningPolicyV2`: ProvisioningPolicyDtoV2
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutProvisioningPolicyV2`: %v\n", resp)
}
```

[[Back to top]](#)

## put-source-attr-sync-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update attribute sync config
Replaces the attribute synchronization configuration for the source specified by the given ID with the configuration provided in the request body. Only the "enabled" field of the values in the "attributes" array is mutable. Attempting to change other attributes or add new values to the "attributes" array will result in an error.


[API Spec](https://developer.sailpoint.com/docs/api/put-source-attr-sync-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSourceAttrSyncConfigV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | The source id # string | The source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    attrsyncsourceconfigJson := []byte(`{
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

    var attrSyncSourceConfig sources.AttrSyncSourceConfig
    if err := json.Unmarshal(attrsyncsourceconfigJson, &attrSyncSourceConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.PutSourceAttrSyncConfigV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).AttrSyncSourceConfig(attrSyncSourceConfig).Execute()
	  //resp, r, err := apiClient.SourcesAPI.PutSourceAttrSyncConfigV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).AttrSyncSourceConfig(attrSyncSourceConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutSourceAttrSyncConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSourceAttrSyncConfigV1`: AttrSyncSourceConfig
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutSourceAttrSyncConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-source-dataset-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update source dataset (full)
Use this API to replace a dataset on the specified source in Identity Security Cloud (ISC).


Callers should round-trip the GET representation. `id` is required in the request body and must
match the path. `aggregationEnabled` may always be updated. `name`, `description`, and `resources`
can be changed only when the connector has the `supportDatasetCreation` label.


[API Spec](https://developer.sailpoint.com/docs/api/put-source-dataset-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 
**datasetId** | **string** | Dataset ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSourceDatasetV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sourceDataset** | [**SourceDataset**](../models/source-dataset) |  | 

### Return type

[**SourceDataset**](../models/source-dataset)

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    datasetId := `cmdb-servicenow:applications` // string | Dataset ID. # string | Dataset ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sourcedatasetJson := []byte(`{
          "name" : "Applications",
          "description" : "CMDB application records for this source.",
          "resources" : [ {
            "name" : "Role",
            "id" : "aws:iam-role",
            "type" : "std:resource"
          }, {
            "name" : "Role",
            "id" : "aws:iam-role",
            "type" : "std:resource"
          } ],
          "id" : "cmdb-servicenow:applications",
          "aggregationEnabled" : true
        }`) // SourceDataset | 

    var sourceDataset sources.SourceDataset
    if err := json.Unmarshal(sourcedatasetJson, &sourceDataset); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.PutSourceDatasetV1(context.Background(), sourceId, datasetId).XSailPointExperimental(xSailPointExperimental).SourceDataset(sourceDataset).Execute()
	  //resp, r, err := apiClient.SourcesAPI.PutSourceDatasetV1(context.Background(), sourceId, datasetId).XSailPointExperimental(xSailPointExperimental).SourceDataset(sourceDataset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutSourceDatasetV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSourceDatasetV1`: SourceDataset
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutSourceDatasetV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-source-resource-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update source resource (full)
Use this API to replace a resource on the specified source in Identity Security Cloud (ISC).


After creation, schema attribute edits should be made through the source schema APIs. Connectors
with the `supportDatasetCreation` label can update additional resource fields.


[API Spec](https://developer.sailpoint.com/docs/api/put-source-resource-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 
**resourceId** | **string** | Resource ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSourceResourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sourceDatasetResource** | [**SourceDatasetResource**](../models/source-dataset-resource) |  | 

### Return type

[**SourceDatasetResource**](../models/source-dataset-resource)

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    resourceId := `account` // string | Resource ID. # string | Resource ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sourcedatasetresourceJson := []byte(`{
          "schema" : {
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
          },
          "features" : [ "Create", "Delete" ],
          "name" : "Account",
          "datasetId" : "cmdb-servicenow:applications",
          "id" : "aws:iam-role",
          "type" : "std:resource"
        }`) // SourceDatasetResource | 

    var sourceDatasetResource sources.SourceDatasetResource
    if err := json.Unmarshal(sourcedatasetresourceJson, &sourceDatasetResource); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.PutSourceResourceV1(context.Background(), sourceId, resourceId).XSailPointExperimental(xSailPointExperimental).SourceDatasetResource(sourceDatasetResource).Execute()
	  //resp, r, err := apiClient.SourcesAPI.PutSourceResourceV1(context.Background(), sourceId, resourceId).XSailPointExperimental(xSailPointExperimental).SourceDatasetResource(sourceDatasetResource).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutSourceResourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSourceResourceV1`: SourceDatasetResource
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutSourceResourceV1`: %v\n", resp)
}
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


[API Spec](https://developer.sailpoint.com/docs/api/put-source-schema-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**schemaId** | **string** | The Schema id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSourceSchemaV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    schemaId := `2c9180835d191a86015d28455b4a2329` // string | The Schema id. # string | The Schema id.
    schemaJson := []byte(`{
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

    var schema sources.Schema
    if err := json.Unmarshal(schemaJson, &schema); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.PutSourceSchemaV1(context.Background(), sourceId, schemaId).Schema(schema).Execute()
	  //resp, r, err := apiClient.SourcesAPI.PutSourceSchemaV1(context.Background(), sourceId, schemaId).Schema(schema).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutSourceSchemaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSourceSchemaV1`: Schema
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutSourceSchemaV1`: %v\n", resp)
}
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


[API Spec](https://developer.sailpoint.com/docs/api/put-source-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSourceV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    sourceJson := []byte(`{
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

    var source sources.Source
    if err := json.Unmarshal(sourceJson, &source); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.PutSourceV1(context.Background(), id).Source(source).Execute()
	  //resp, r, err := apiClient.SourcesAPI.PutSourceV1(context.Background(), id).Source(source).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.PutSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSourceV1`: Source
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.PutSourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## search-resource-objects-v1
Peek source connector's resource objects
Retrieves a sample of data returned from account and group aggregation requests.

[API Spec](https://developer.sailpoint.com/docs/api/search-resource-objects-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the Source | 

### Other Parameters

Other parameters are passed through a pointer to a apiSearchResourceObjectsV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `cef3ee201db947c5912551015ba0c679` // string | The ID of the Source # string | The ID of the Source
    resourceobjectsrequestJson := []byte(`{
          "maxCount" : 100,
          "objectType" : "group"
        }`) // ResourceObjectsRequest | 

    var resourceObjectsRequest sources.ResourceObjectsRequest
    if err := json.Unmarshal(resourceobjectsrequestJson, &resourceObjectsRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.SearchResourceObjectsV1(context.Background(), sourceId).ResourceObjectsRequest(resourceObjectsRequest).Execute()
	  //resp, r, err := apiClient.SourcesAPI.SearchResourceObjectsV1(context.Background(), sourceId).ResourceObjectsRequest(resourceObjectsRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.SearchResourceObjectsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchResourceObjectsV1`: ResourceObjectsResponse
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.SearchResourceObjectsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## sync-attributes-for-source-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Synchronize single source attributes.
This end-point performs attribute synchronization for a selected source.

[API Spec](https://developer.sailpoint.com/docs/api/sync-attributes-for-source-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiSyncAttributesForSourceV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `id_example` // string | The Source id # string | The Source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.SyncAttributesForSourceV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SourcesAPI.SyncAttributesForSourceV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.SyncAttributesForSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SyncAttributesForSourceV1`: SourceSyncJob
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.SyncAttributesForSourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## test-source-configuration-v1
Test configuration for source connector
This endpoint performs a more detailed validation of the source''s configuration that can take longer than the lighter weight credential validation performed by the checkConnection API.

[API Spec](https://developer.sailpoint.com/docs/api/test-source-configuration-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the Source | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestSourceConfigurationV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `cef3ee201db947c5912551015ba0c679` // string | The ID of the Source # string | The ID of the Source

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.TestSourceConfigurationV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.TestSourceConfigurationV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.TestSourceConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TestSourceConfigurationV1`: StatusResponse
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.TestSourceConfigurationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## test-source-connection-v1
Check connection for source connector.
This endpoint validates that the configured credentials are valid and will properly authenticate with the source identified by the sourceId path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/test-source-connection-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The ID of the Source. | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestSourceConnectionV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `cef3ee201db947c5912551015ba0c679` // string | The ID of the Source. # string | The ID of the Source.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.TestSourceConnectionV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.SourcesAPI.TestSourceConnectionV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.TestSourceConnectionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TestSourceConnectionV1`: StatusResponse
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.TestSourceConnectionV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-account-deletion-approval-config-v1
Human Account Deletion Approval Config
Updates the approval configuration for deleting human accounts for a specific source, identified by source ID. This endpoint allows administrators to modify settings such as whether approval is required, who the approvers are, and other approval-related options. The update is performed using a JSON Patch payload, and the response returns the updated AccountDeleteConfigDto object reflecting the new approval workflow configuration.


[API Spec](https://developer.sailpoint.com/docs/api/update-account-deletion-approval-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Human account source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccountDeletionApprovalConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The JSONPatch payload used to update the object. | 

### Return type

[**AccountDeleteConfigDto**](../models/account-delete-config-dto)

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `00eebcf881994e419d72e757fd30dc0e` // string | Human account source ID. # string | Human account source ID.
    jsonpatchoperationJson := []byte(``) // []JsonPatchOperation | The JSONPatch payload used to update the object.

    var jsonPatchOperation []sources.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.UpdateAccountDeletionApprovalConfigV1(context.Background(), sourceId).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.SourcesAPI.UpdateAccountDeletionApprovalConfigV1(context.Background(), sourceId).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateAccountDeletionApprovalConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccountDeletionApprovalConfigV1`: AccountDeleteConfigDto
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateAccountDeletionApprovalConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-machine-account-deletion-approval-config-v1
Machine Account Deletion Approval Config
Use this endpoint to update the machine account deletion approval configuration for a specific source.
The update is performed using a JSON Patch payload, which allows partial modifications to the approval config.
This operation is typically used to change approval requirements, approvers, or comments settings for machine account deletion.
The endpoint expects the source ID as a path parameter and a valid JSON Patch array in the request body.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-account-deletion-approval-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | machine account source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMachineAccountDeletionApprovalConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The JSONPatch payload used to update the object. | 

### Return type

[**AccountDeleteConfigDto**](../models/account-delete-config-dto)

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `00eebcf881994e419d72e757fd30dc0e` // string | machine account source ID. # string | machine account source ID.
    jsonpatchoperationJson := []byte(``) // []JsonPatchOperation | The JSONPatch payload used to update the object.

    var jsonPatchOperation []sources.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.UpdateMachineAccountDeletionApprovalConfigV1(context.Background(), sourceId).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.SourcesAPI.UpdateMachineAccountDeletionApprovalConfigV1(context.Background(), sourceId).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateMachineAccountDeletionApprovalConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateMachineAccountDeletionApprovalConfigV1`: AccountDeleteConfigDto
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateMachineAccountDeletionApprovalConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-password-policy-holders-v1
Update password policy
This API can be used to set up or update Password Policy in IdentityNow for the specified Source.
Source must support PASSWORD feature.


[API Spec](https://developer.sailpoint.com/docs/api/update-password-policy-holders-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePasswordPolicyHoldersV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    passwordpolicyholdersdtoinnerJson := []byte(``) // []PasswordPolicyHoldersDtoInner | 

    var passwordPolicyHoldersDtoInner []sources.PasswordPolicyHoldersDtoInner
    if err := json.Unmarshal(passwordpolicyholdersdtoinnerJson, &passwordPolicyHoldersDtoInner); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.UpdatePasswordPolicyHoldersV1(context.Background(), sourceId).PasswordPolicyHoldersDtoInner(passwordPolicyHoldersDtoInner).Execute()
	  //resp, r, err := apiClient.SourcesAPI.UpdatePasswordPolicyHoldersV1(context.Background(), sourceId).PasswordPolicyHoldersDtoInner(passwordPolicyHoldersDtoInner).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdatePasswordPolicyHoldersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdatePasswordPolicyHoldersV1`: []PasswordPolicyHoldersDtoInner
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdatePasswordPolicyHoldersV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-provisioning-policies-in-bulk-v1
Bulk update provisioning policies
This end-point updates a list of provisioning policies on the specified source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/update-provisioning-policies-in-bulk-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateProvisioningPoliciesInBulkV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    provisioningpolicydtoJson := []byte(``) // []ProvisioningPolicyDto | 

    var provisioningPolicyDto []sources.ProvisioningPolicyDto
    if err := json.Unmarshal(provisioningpolicydtoJson, &provisioningPolicyDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.UpdateProvisioningPoliciesInBulkV1(context.Background(), sourceId).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
	  //resp, r, err := apiClient.SourcesAPI.UpdateProvisioningPoliciesInBulkV1(context.Background(), sourceId).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateProvisioningPoliciesInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateProvisioningPoliciesInBulkV1`: []ProvisioningPolicyDto
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateProvisioningPoliciesInBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-provisioning-policy-v1
Partial update of provisioning policy
This API selectively updates an existing Provisioning Policy using a JSONPatch payload.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/update-provisioning-policy-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**usageType** | [**UsageType**](../models/) | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to &#39;Create Account Profile&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to &#39;Update Account Profile&#39;, the provisioning template for the &#39;Update&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to &#39;Enable Account Profile&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner&#39;s account is created.  DISABLE - This usage type relates to &#39;Disable Account Profile&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateProvisioningPolicyV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    usageType := CREATE // UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. # UsageType | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.
    jsonpatchoperationJson := []byte(`[{"op":"add","path":"/fields/0","value":{"name":"email","transform":{"type":"identityAttribute","attributes":{"name":"email"}},"attributes":{},"isRequired":false,"type":"string","isMultiValued":false}}]`) // []JsonPatchOperation | The JSONPatch payload used to update the schema.

    var jsonPatchOperation []sources.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.UpdateProvisioningPolicyV1(context.Background(), sourceId, usageType).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.SourcesAPI.UpdateProvisioningPolicyV1(context.Background(), sourceId, usageType).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateProvisioningPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateProvisioningPolicyV1`: ProvisioningPolicyDto
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateProvisioningPolicyV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-provisioning-policy-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Partial update of provisioning policy
This API selectively updates an existing Provisioning Policy using a JSONPatch payload.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/update-provisioning-policy-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**id** | **string** | The provisioning policy ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateProvisioningPolicyV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The JSONPatch payload used to update the schema. | 

### Return type

[**ProvisioningPolicyDtoV2**](../models/provisioning-policy-dto-v2)

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    id := `f5dd23fe-3414-42b7-bb1c-869400ad7a10` // string | The provisioning policy ID. # string | The provisioning policy ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationJson := []byte(`[{"op":"add","path":"/fields/0","value":{"name":"email","transform":{"type":"identityAttribute","attributes":{"name":"email"}},"attributes":{},"isRequired":false,"type":"string","isMultiValued":false}}]`) // []JsonPatchOperation | The JSONPatch payload used to update the schema.

    var jsonPatchOperation []sources.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.UpdateProvisioningPolicyV2(context.Background(), sourceId, id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.SourcesAPI.UpdateProvisioningPolicyV2(context.Background(), sourceId, id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateProvisioningPolicyV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateProvisioningPolicyV2`: ProvisioningPolicyDtoV2
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateProvisioningPolicyV2`: %v\n", resp)
}
```

[[Back to top]](#)

## update-source-dataset-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update source dataset (partial)
Use this API to selectively update an existing dataset using a JSONPatch payload.


`aggregationEnabled` may always be updated. `name`, `description`, and `resources` can be changed
only when the connector has the `supportDatasetCreation` label. `id` is immutable.


[API Spec](https://developer.sailpoint.com/docs/api/update-source-dataset-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 
**datasetId** | **string** | Dataset ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSourceDatasetV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The JSONPatch payload used to update the dataset. | 

### Return type

[**SourceDataset**](../models/source-dataset)

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    datasetId := `cmdb-servicenow:applications` // string | Dataset ID. # string | Dataset ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/aggregationEnabled","value":true}]`) // []JsonPatchOperation | The JSONPatch payload used to update the dataset.

    var jsonPatchOperation []sources.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.UpdateSourceDatasetV1(context.Background(), sourceId, datasetId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.SourcesAPI.UpdateSourceDatasetV1(context.Background(), sourceId, datasetId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateSourceDatasetV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateSourceDatasetV1`: SourceDataset
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateSourceDatasetV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-source-entitlement-request-config-v1
Update source entitlement request configuration
This API replaces the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
- During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
- However, the entitlement-level configuration (if defined) overrides this source-level configuration.

The `WORKFLOW` approver type is not supported in source-level configuration. To use a workflow as an approver, configure it on the entitlement with [Replace entitlement request config](https://developer.sailpoint.com/docs/api/put-entitlement-request-config-v-1). A source-level request that contains `WORKFLOW` fails with a 400.

[API Spec](https://developer.sailpoint.com/docs/api/update-source-entitlement-request-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSourceEntitlementRequestConfigV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The Source id # string | The Source id
    sourceentitlementrequestconfigJson := []byte(`{
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
            "formDefinitionId" : "78258e80-e9e2-4e1a-a11f-ce0b7c62f25d",
            "requestCommentRequired" : true,
            "requireEndDate" : true,
            "maxPermittedAccessDuration" : {
              "value" : 5,
              "timeUnit" : "DAYS"
            }
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
        }`) // SourceEntitlementRequestConfig | 

    var sourceEntitlementRequestConfig sources.SourceEntitlementRequestConfig
    if err := json.Unmarshal(sourceentitlementrequestconfigJson, &sourceEntitlementRequestConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.UpdateSourceEntitlementRequestConfigV1(context.Background(), id).SourceEntitlementRequestConfig(sourceEntitlementRequestConfig).Execute()
	  //resp, r, err := apiClient.SourcesAPI.UpdateSourceEntitlementRequestConfigV1(context.Background(), id).SourceEntitlementRequestConfig(sourceEntitlementRequestConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateSourceEntitlementRequestConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateSourceEntitlementRequestConfigV1`: SourceEntitlementRequestConfig
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateSourceEntitlementRequestConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-source-resource-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update source resource (partial)
Use this API to selectively update an existing resource using a JSONPatch payload.


After creation, schema attribute edits should be made through the source schema APIs. Connectors
with the `supportDatasetCreation` label can update additional resource fields.


[API Spec](https://developer.sailpoint.com/docs/api/update-source-resource-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 
**resourceId** | **string** | Resource ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSourceResourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The JSONPatch payload used to update the resource. | 

### Return type

[**SourceDatasetResource**](../models/source-dataset-resource)

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    resourceId := `account` // string | Resource ID. # string | Resource ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/features","value":["Create","Delete"]}]`) // []JsonPatchOperation | The JSONPatch payload used to update the resource.

    var jsonPatchOperation []sources.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.UpdateSourceResourceV1(context.Background(), sourceId, resourceId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.SourcesAPI.UpdateSourceResourceV1(context.Background(), sourceId, resourceId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateSourceResourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateSourceResourceV1`: SourceDatasetResource
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateSourceResourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-source-schedule-v1
Update source schedule (partial)
Use this API to selectively update an existing Schedule using a JSONPatch payload. 

The following schedule fields are immutable and cannot be updated:

- type


[API Spec](https://developer.sailpoint.com/docs/api/update-source-schedule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**scheduleType** | **string** | The Schedule type. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSourceScheduleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The JSONPatch payload used to update the schedule. | 

### Return type

[**Schedule3**](../models/schedule3)

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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    scheduleType := `ACCOUNT_AGGREGATION` // string | The Schedule type. # string | The Schedule type.
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/cronExpression","value":"0 0 6 * * ?"}]`) // []JsonPatchOperation | The JSONPatch payload used to update the schedule.

    var jsonPatchOperation []sources.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.UpdateSourceScheduleV1(context.Background(), sourceId, scheduleType).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.SourcesAPI.UpdateSourceScheduleV1(context.Background(), sourceId, scheduleType).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateSourceScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateSourceScheduleV1`: Schedule3
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateSourceScheduleV1`: %v\n", resp)
}
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
- Must define a schema for the group and [add it to the source](https://developer.sailpoint.com/docs/api/create-source-schema-v-1) before updating the `isGroup` flag.  For example, here is the `group` account attribute referencing a schema that defines the group:
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


[API Spec](https://developer.sailpoint.com/docs/api/update-source-schema-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id. | 
**schemaId** | **string** | The Schema id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSourceSchemaV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source id. # string | The Source id.
    schemaId := `2c9180835d191a86015d28455b4a2329` // string | The Schema id. # string | The Schema id.
    jsonpatchoperationJson := []byte(`[{"op":"add","path":"/attributes/-","value":{"name":"location","type":"STRING","schema":null,"description":"Employee location","isMulti":false,"isEntitlement":false,"isGroup":false}}]`) // []JsonPatchOperation | The JSONPatch payload used to update the schema.

    var jsonPatchOperation []sources.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.UpdateSourceSchemaV1(context.Background(), sourceId, schemaId).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.SourcesAPI.UpdateSourceSchemaV1(context.Background(), sourceId, schemaId).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateSourceSchemaV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateSourceSchemaV1`: Schema
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateSourceSchemaV1`: %v\n", resp)
}
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


[API Spec](https://developer.sailpoint.com/docs/api/update-source-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSourceV1Request struct via the builder pattern


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
    sources "github.com/sailpoint-oss/golang-sdk/v3/sources"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | Source ID. # string | Source ID.
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/description","value":"new description"}]`) // []JsonPatchOperation | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).

    var jsonPatchOperation []sources.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SourcesAPI.UpdateSourceV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.SourcesAPI.UpdateSourceV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SourcesAPI.UpdateSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateSourceV1`: Source
    fmt.Fprintf(os.Stdout, "Response from `SourcesAPI.UpdateSourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

