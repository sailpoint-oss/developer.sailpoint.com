# Sources

# SourcesApi
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
[**create-provisioning-policy-v2**](#create-provisioning-policy-v2) | **POST** `/sources/v2/{sourceId}/provisioning-policies` | Create provisioning policy
[**create-source-dataset-v1**](#create-source-dataset-v1) | **POST** `/sources/v1/{sourceId}/datasets` | Create dataset on source
[**create-source-resource-v1**](#create-source-resource-v1) | **POST** `/sources/v1/{sourceId}/resources` | Create resource on source
[**create-source-schedule-v1**](#create-source-schedule-v1) | **POST** `/sources/v1/{sourceId}/schedules` | Create schedule on source
[**create-source-schema-v1**](#create-source-schema-v1) | **POST** `/sources/v1/{sourceId}/schemas` | Create schema on source
[**create-source-v1**](#create-source-v1) | **POST** `/sources/v1` | Create source
[**delete-accounts-async-v1**](#delete-accounts-async-v1) | **POST** `/sources/v1/{id}/remove-accounts` | Remove all accounts in source
[**delete-native-change-detection-config-v1**](#delete-native-change-detection-config-v1) | **DELETE** `/sources/v1/{sourceId}/native-change-detection-config` | Delete native change detection configuration
[**delete-provisioning-policy-v1**](#delete-provisioning-policy-v1) | **DELETE** `/sources/v1/{sourceId}/provisioning-policies/{usageType}` | Delete provisioning policy by usagetype
[**delete-provisioning-policy-v2**](#delete-provisioning-policy-v2) | **DELETE** `/sources/v2/{sourceId}/provisioning-policies/{id}` | Delete provisioning policy by ID
[**delete-source-dataset-objects-v1**](#delete-source-dataset-objects-v1) | **POST** `/sources/v1/{sourceId}/datasets/{datasetId}/delete-objects` | Delete objects for source dataset
[**delete-source-dataset-v1**](#delete-source-dataset-v1) | **DELETE** `/sources/v1/{sourceId}/datasets/{datasetId}` | Delete source dataset by id
[**delete-source-resource-v1**](#delete-source-resource-v1) | **DELETE** `/sources/v1/{sourceId}/resources/{resourceId}` | Delete source resource by id
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
[**get-provisioning-policy-v2**](#get-provisioning-policy-v2) | **GET** `/sources/v2/{sourceId}/provisioning-policies/{id}` | Get provisioning policy by ID
[**get-source-attr-sync-config-v1**](#get-source-attr-sync-config-v1) | **GET** `/sources/v1/{id}/attribute-sync-config` | Attribute sync config
[**get-source-config-v1**](#get-source-config-v1) | **GET** `/sources/v1/{id}/connectors/source-config` | Gets source config with language-translations
[**get-source-connections-v1**](#get-source-connections-v1) | **GET** `/sources/v1/{sourceId}/connections` | Get source connections by id
[**get-source-dataset-v1**](#get-source-dataset-v1) | **GET** `/sources/v1/{sourceId}/datasets/{datasetId}` | Get source dataset by id
[**get-source-datasets-v1**](#get-source-datasets-v1) | **GET** `/sources/v1/{sourceId}/datasets` | List datasets on source
[**get-source-entitlement-request-config-v1**](#get-source-entitlement-request-config-v1) | **GET** `/sources/v1/{id}/entitlement-request-config` | Get source entitlement request configuration
[**get-source-health-v1**](#get-source-health-v1) | **GET** `/sources/v1/{sourceId}/source-health` | Fetches source health by id
[**get-source-resource-mappings-v1**](#get-source-resource-mappings-v1) | **GET** `/sources/v1/{sourceId}/resources/mappings` | Get source resource mappings
[**get-source-resource-v1**](#get-source-resource-v1) | **GET** `/sources/v1/{sourceId}/resources/{resourceId}` | Get source resource by id
[**get-source-resources-v1**](#get-source-resources-v1) | **GET** `/sources/v1/{sourceId}/resources` | List resources for a source
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
[**import-source-dataset-v1**](#import-source-dataset-v1) | **POST** `/sources/v1/{sourceId}/datasets/{datasetId}/aggregate` | Aggregate source dataset
[**import-uncorrelated-accounts-v1**](#import-uncorrelated-accounts-v1) | **POST** `/sources/v1/{id}/load-uncorrelated-accounts` | Process uncorrelated accounts
[**list-password-policy-holders-on-source-v1**](#list-password-policy-holders-on-source-v1) | **GET** `/sources/v1/{sourceId}/password-policies` | Get Password Policy for source
[**list-provisioning-policies-v1**](#list-provisioning-policies-v1) | **GET** `/sources/v1/{sourceId}/provisioning-policies` | Lists provisioningpolicies
[**list-provisioning-policies-v2**](#list-provisioning-policies-v2) | **GET** `/sources/v2/{sourceId}/provisioning-policies` | Lists Provisioning Policies
[**list-sources-v1**](#list-sources-v1) | **GET** `/sources/v1` | List sources
[**ping-cluster-v1**](#ping-cluster-v1) | **POST** `/sources/v1/{sourceId}/connector/ping-cluster` | Ping cluster for source connector
[**put-correlation-config-v1**](#put-correlation-config-v1) | **PUT** `/sources/v1/{id}/correlation-config` | Update source correlation configuration
[**put-native-change-detection-config-v1**](#put-native-change-detection-config-v1) | **PUT** `/sources/v1/{sourceId}/native-change-detection-config` | Update native change detection configuration
[**put-provisioning-policy-v1**](#put-provisioning-policy-v1) | **PUT** `/sources/v1/{sourceId}/provisioning-policies/{usageType}` | Update provisioning policy by usagetype
[**put-provisioning-policy-v2**](#put-provisioning-policy-v2) | **PUT** `/sources/v2/{sourceId}/provisioning-policies/{id}` | Update provisioning policy by ID
[**put-source-attr-sync-config-v1**](#put-source-attr-sync-config-v1) | **PUT** `/sources/v1/{id}/attribute-sync-config` | Update attribute sync config
[**put-source-dataset-v1**](#put-source-dataset-v1) | **PUT** `/sources/v1/{sourceId}/datasets/{datasetId}` | Update source dataset (full)
[**put-source-resource-v1**](#put-source-resource-v1) | **PUT** `/sources/v1/{sourceId}/resources/{resourceId}` | Update source resource (full)
[**put-source-schema-v1**](#put-source-schema-v1) | **PUT** `/sources/v1/{sourceId}/schemas/{schemaId}` | Update source schema (full)
[**put-source-v1**](#put-source-v1) | **PUT** `/sources/v1/{id}` | Update source (full)
[**search-resource-objects-v1**](#search-resource-objects-v1) | **POST** `/sources/v1/{sourceId}/connector/peek-resource-objects` | Peek source connector\&#39;s resource objects
[**sync-attributes-for-source-v1**](#sync-attributes-for-source-v1) | **POST** `/sources/v1/{id}/synchronize-attributes` | Synchronize single source attributes.
[**test-source-configuration-v1**](#test-source-configuration-v1) | **POST** `/sources/v1/{sourceId}/connector/test-configuration` | Test configuration for source connector
[**test-source-connection-v1**](#test-source-connection-v1) | **POST** `/sources/v1/{sourceId}/connector/check-connection` | Check connection for source connector.
[**update-account-deletion-approval-config-v1**](#update-account-deletion-approval-config-v1) | **PATCH** `/sources/v1/{sourceId}/approval-config/account-delete` | Human Account Deletion Approval Config
[**update-machine-account-deletion-approval-config-v1**](#update-machine-account-deletion-approval-config-v1) | **PATCH** `/sources/v1/{sourceId}/approval-config/machine-account-delete` | Machine Account Deletion Approval Config
[**update-password-policy-holders-v1**](#update-password-policy-holders-v1) | **PATCH** `/sources/v1/{sourceId}/password-policies` | Update password policy
[**update-provisioning-policies-in-bulk-v1**](#update-provisioning-policies-in-bulk-v1) | **POST** `/sources/v1/{sourceId}/provisioning-policies/bulk-update` | Bulk update provisioning policies
[**update-provisioning-policy-v1**](#update-provisioning-policy-v1) | **PATCH** `/sources/v1/{sourceId}/provisioning-policies/{usageType}` | Partial update of provisioning policy
[**update-provisioning-policy-v2**](#update-provisioning-policy-v2) | **PATCH** `/sources/v2/{sourceId}/provisioning-policies/{id}` | Partial update of provisioning policy
[**update-source-dataset-v1**](#update-source-dataset-v1) | **PATCH** `/sources/v1/{sourceId}/datasets/{datasetId}` | Update source dataset (partial)
[**update-source-entitlement-request-config-v1**](#update-source-entitlement-request-config-v1) | **PUT** `/sources/v1/{id}/entitlement-request-config` | Update source entitlement request configuration
[**update-source-resource-v1**](#update-source-resource-v1) | **PATCH** `/sources/v1/{sourceId}/resources/{resourceId}` | Update source resource (partial)
[**update-source-schedule-v1**](#update-source-schedule-v1) | **PATCH** `/sources/v1/{sourceId}/schedules/{scheduleType}` | Update source schedule (partial)
[**update-source-schema-v1**](#update-source-schema-v1) | **PATCH** `/sources/v1/{sourceId}/schemas/{schemaId}` | Update source schema (partial)
[**update-source-v1**](#update-source-v1) | **PATCH** `/sources/v1/{id}` | Update source (partial)


## create-provisioning-policy-v1
Create provisioning policy
This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/create-provisioning-policy-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id |  [default to undefined]
**provisioningPolicyDto** | `ProvisioningPolicyDto` |  | 

### Return type

`ProvisioningPolicyDto`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ProvisioningPolicyDto } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id
const provisioningPolicyDto: ProvisioningPolicyDto = {
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
}; // 
const result = await apiInstance.createProvisioningPolicyV1({ sourceId: sourceId, provisioningPolicyDto: provisioningPolicyDto });
console.log(result);
```

[[Back to top]](#)

## create-provisioning-policy-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create provisioning policy
This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
The V2 API allows you to use a unique identifier (id) for each provisioning policy instead of usageType. This enables read, update, and delete operations on policies using their id.
Note: The subtypeId field is required if usageType is CREATE_MACHINE_ACCOUNT.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/create-provisioning-policy-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id |  [default to undefined]
**provisioningPolicyDtoV2** | `ProvisioningPolicyDtoV2` |  | 
**useDefaultFields** | `boolean` | If passed as true, then it uses default fields from the connector template. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ProvisioningPolicyDtoV2`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ProvisioningPolicyDtoV2 } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id
const provisioningPolicyDtoV2: ProvisioningPolicyDtoV2 = {
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
}; // 
const useDefaultFields: boolean = false; // If passed as true, then it uses default fields from the connector template. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createProvisioningPolicyV2({ sourceId: sourceId, provisioningPolicyDtoV2: provisioningPolicyDtoV2 });
console.log(result);
```

[[Back to top]](#)

## create-source-dataset-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create dataset on source
Use this API to create a dataset on the specified source in Identity Security Cloud (ISC).


This operation requires a connector with the `supportDatasetCreation` label. `name` is required.
The dataset `id` is always server-generated from `name` as `customer:` plus a normalized form of
the name; any client-supplied `id` is ignored.


[API Spec](https://developer.sailpoint.com/docs/api/create-source-dataset-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**sourceDataset** | `SourceDataset` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceDataset`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SourceDataset } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const sourceDataset: SourceDataset = {
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
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createSourceDatasetV1({ sourceId: sourceId, sourceDataset: sourceDataset });
console.log(result);
```

[[Back to top]](#)

## create-source-resource-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create resource on source
Use this API to create a resource on the specified source in Identity Security Cloud (ISC).


This operation requires a connector with the `supportDatasetCreation` label. `name`, `type`,
`datasetId`, and `schema` are required. The `schema` must define at least one attribute plus
`identityAttribute` and `displayAttribute`. The resource `id` is always server-generated from
`name` as `customer:` plus a normalized form of the name; any client-supplied `id` is ignored.
After creation, schema attribute edits are made through the source schema APIs.


[API Spec](https://developer.sailpoint.com/docs/api/create-source-resource-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**sourceDatasetResource** | `SourceDatasetResource` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceDatasetResource`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SourceDatasetResource } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const sourceDatasetResource: SourceDatasetResource = {
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
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createSourceResourceV1({ sourceId: sourceId, sourceDatasetResource: sourceDatasetResource });
console.log(result);
```

[[Back to top]](#)

## create-source-schedule-v1
Create schedule on source
Use this API to create a new schedule for a type on the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/create-source-schedule-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**schedule3** | `Schedule3` |  | 

### Return type

`Schedule3`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Schedule3 } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const schedule3: Schedule3 = ; // 
const result = await apiInstance.createSourceScheduleV1({ sourceId: sourceId, schedule3: schedule3 });
console.log(result);
```

[[Back to top]](#)

## create-source-schema-v1
Create schema on source
Use this API to create a new schema on the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/create-source-schema-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**schema** | `Schema` |  | 

### Return type

`Schema`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Schema } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const schema: Schema = {
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
}; // 
const result = await apiInstance.createSourceSchemaV1({ sourceId: sourceId, schema: schema });
console.log(result);
```

[[Back to top]](#)

## create-source-v1
Create source
This creates a specific source with a full source JSON representation. Any passwords are submitted as plain-text and encrypted upon receipt.

[API Spec](https://developer.sailpoint.com/docs/api/create-source-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**source** | `Source` |  | 
**provisionAsCsv** | `boolean` | If this parameter is &#x60;true&#x60;, it configures the source as a Delimited File (CSV) source. Setting this to &#x60;true&#x60; will automatically set the &#x60;type&#x60; of the source to &#x60;DelimitedFile&#x60;.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don\&#39;t set this query parameter and you attempt to set the &#x60;type&#x60; attribute directly, the request won\&#39;t correctly generate the source.   | [optional] [default to false]

### Return type

`Source`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Source } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const source: Source = {
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
}; // 
const provisionAsCsv: boolean = false; // If this parameter is &#x60;true&#x60;, it configures the source as a Delimited File (CSV) source. Setting this to &#x60;true&#x60; will automatically set the &#x60;type&#x60; of the source to &#x60;DelimitedFile&#x60;.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don\&#39;t set this query parameter and you attempt to set the &#x60;type&#x60; attribute directly, the request won\&#39;t correctly generate the source.   (optional)
const result = await apiInstance.createSourceV1({ source: source });
console.log(result);
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The source id |  [default to undefined]

### Return type

`TaskResultDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = ebbf35756e1140699ce52b233121384a; // The source id
const result = await apiInstance.deleteAccountsAsyncV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-native-change-detection-config-v1
Delete native change detection configuration
Deletes the native change detection configuration for the source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-native-change-detection-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The source id |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The source id
const result = await apiInstance.deleteNativeChangeDetectionConfigV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## delete-provisioning-policy-v1
Delete provisioning policy by usagetype
Deletes the provisioning policy with the specified usage on an application.

[API Spec](https://developer.sailpoint.com/docs/api/delete-provisioning-policy-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**usageType** | `UsageType` | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \&#39;Create Account Profile\&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \&#39;Update Account Profile\&#39;, the provisioning template for the \&#39;Update\&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \&#39;Enable Account Profile\&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\&#39;s account is created.  DISABLE - This usage type relates to \&#39;Disable Account Profile\&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source ID.
const usageType: UsageType = CREATE; // The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \&#39;Create Account Profile\&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \&#39;Update Account Profile\&#39;, the provisioning template for the \&#39;Update\&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \&#39;Enable Account Profile\&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\&#39;s account is created.  DISABLE - This usage type relates to \&#39;Disable Account Profile\&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.
const result = await apiInstance.deleteProvisioningPolicyV1({ sourceId: sourceId, usageType: usageType });
console.log(result);
```

[[Back to top]](#)

## delete-provisioning-policy-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete provisioning policy by ID
Deletes the provisioning policy with the specified ID on an application.

[API Spec](https://developer.sailpoint.com/docs/api/delete-provisioning-policy-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**id** | `string` | The provisioning policy ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source ID.
const id: string = f5dd23fe-3414-42b7-bb1c-869400ad7a10; // The provisioning policy ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteProvisioningPolicyV2({ sourceId: sourceId, id: id });
console.log(result);
```

[[Back to top]](#)

## delete-source-dataset-objects-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete objects for source dataset
Starts a task to delete aggregated objects for the specified dataset on the source in Identity
Security Cloud (ISC). Linked dataset and resource definitions are not deleted.


[API Spec](https://developer.sailpoint.com/docs/api/delete-source-dataset-objects-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**datasetId** | `string` | Dataset ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`TaskResultDetails`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const datasetId: string = cmdb-servicenow:applications; // Dataset ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteSourceDatasetObjectsV1({ sourceId: sourceId, datasetId: datasetId });
console.log(result);
```

[[Back to top]](#)

## delete-source-dataset-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete source dataset by id
Use this API to delete a dataset on the specified source in Identity Security Cloud (ISC).


This operation requires a connector with the `supportDatasetCreation` label. Linked resource
schemas are not deleted.


[API Spec](https://developer.sailpoint.com/docs/api/delete-source-dataset-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**datasetId** | `string` | Dataset ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const datasetId: string = cmdb-servicenow:applications; // Dataset ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteSourceDatasetV1({ sourceId: sourceId, datasetId: datasetId });
console.log(result);
```

[[Back to top]](#)

## delete-source-resource-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete source resource by id
Use this API to delete a resource on the specified source in Identity Security Cloud (ISC).


The resource schema is deleted and the resource is unlinked from any dataset rows on the source.


[API Spec](https://developer.sailpoint.com/docs/api/delete-source-resource-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**resourceId** | `string` | Resource ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const resourceId: string = account; // Resource ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteSourceResourceV1({ sourceId: sourceId, resourceId: resourceId });
console.log(result);
```

[[Back to top]](#)

## delete-source-schedule-v1
Delete source schedule by type.


[API Spec](https://developer.sailpoint.com/docs/api/delete-source-schedule-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id. |  [default to undefined]
**scheduleType** | `'ACCOUNT_AGGREGATION' | 'GROUP_AGGREGATION'` | The Schedule type. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id.
const scheduleType: string = ACCOUNT_AGGREGATION; // The Schedule type.
const result = await apiInstance.deleteSourceScheduleV1({ sourceId: sourceId, scheduleType: scheduleType });
console.log(result);
```

[[Back to top]](#)

## delete-source-schema-v1
Delete source schema by id


[API Spec](https://developer.sailpoint.com/docs/api/delete-source-schema-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id. |  [default to undefined]
**schemaId** | `string` | The Schema id. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id.
const schemaId: string = 2c9180835d191a86015d28455b4a2329; // The Schema id.
const result = await apiInstance.deleteSourceSchemaV1({ sourceId: sourceId, schemaId: schemaId });
console.log(result);
```

[[Back to top]](#)

## delete-source-v1
Delete source by id
Use this API to delete a specific source in Identity Security Cloud (ISC).
The API removes all the accounts on the source first, and then it deletes the source. You can retrieve the actual task execution status with this method: GET `/task-status/{id}`

[API Spec](https://developer.sailpoint.com/docs/api/delete-source-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Source ID. |  [default to undefined]

### Return type

`DeleteSourceV1202Response`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const result = await apiInstance.deleteSourceV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-account-delete-approval-config-v1
Human Account Deletion Approval Config
The endpoint retrieves the approval configuration for deleting human accounts from a specified source. It returns details such as whether approval is required, who the approvers are, and any additional approval settings. This helps administrators understand and manage the approval workflow for human account deletions in their organization. The response is provided as an AccountDeleteConfigDto object.


[API Spec](https://developer.sailpoint.com/docs/api/get-account-delete-approval-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id |  [default to undefined]

### Return type

`AccountDeleteConfigDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = ha38f94347e94562b5bb8424a56498d8; // The Source id
const result = await apiInstance.getAccountDeleteApprovalConfigV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-accounts-schema-v1
Downloads source accounts schema template
This API downloads the CSV schema that defines the account attributes on a source.
>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/get-accounts-schema-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Source id |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The Source id
const result = await apiInstance.getAccountsSchemaV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-correlation-config-v1
Get source correlation configuration
This API returns the existing correlation configuration for a source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-correlation-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The source id |  [default to undefined]

### Return type

`CorrelationConfig`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 2c9180835d191a86015d28455b4a2329; // The source id
const result = await apiInstance.getCorrelationConfigV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-entitlements-schema-v1
Downloads source entitlements schema template
This API downloads the CSV schema that defines the entitlement attributes on a source.

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlements-schema-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Source id |  [default to undefined]
**schemaName** | `string` | Name of entitlement schema | [optional] [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The Source id
const schemaName: string = ?schemaName=group; // Name of entitlement schema (optional)
const result = await apiInstance.getEntitlementsSchemaV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-machine-account-deletion-approval-config-by-source-v1
Machine Account Deletion Approval Config
Retrieves the machine account deletion approval configuration for a specific source. This endpoint returns details about the approval requirements, approvers, and comment settings that govern the deletion of machine accounts associated with the given source ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-deletion-approval-config-by-source-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | source id. |  [default to undefined]

### Return type

`AccountDeleteConfigDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = gt38f94347e94562b5bb8424a56498d8; // source id.
const result = await apiInstance.getMachineAccountDeletionApprovalConfigBySourceV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-native-change-detection-config-v1
Native change detection configuration
This API returns the existing native change detection configuration for a source specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-native-change-detection-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The source id |  [default to undefined]

### Return type

`NativeChangeDetectionConfig`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The source id
const result = await apiInstance.getNativeChangeDetectionConfigV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-provisioning-policy-v1
Get provisioning policy by usagetype
This end-point retrieves the ProvisioningPolicy with the specified usage on the specified Source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/get-provisioning-policy-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**usageType** | `UsageType` | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \&#39;Create Account Profile\&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \&#39;Update Account Profile\&#39;, the provisioning template for the \&#39;Update\&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \&#39;Enable Account Profile\&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\&#39;s account is created.  DISABLE - This usage type relates to \&#39;Disable Account Profile\&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. |  [default to undefined]

### Return type

`ProvisioningPolicyDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source ID.
const usageType: UsageType = CREATE; // The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \&#39;Create Account Profile\&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \&#39;Update Account Profile\&#39;, the provisioning template for the \&#39;Update\&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \&#39;Enable Account Profile\&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\&#39;s account is created.  DISABLE - This usage type relates to \&#39;Disable Account Profile\&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.
const result = await apiInstance.getProvisioningPolicyV1({ sourceId: sourceId, usageType: usageType });
console.log(result);
```

[[Back to top]](#)

## get-provisioning-policy-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get provisioning policy by ID
This end-point retrieves the ProvisioningPolicy with the specified ID on the specified Source in Identity Security Cloud.

[API Spec](https://developer.sailpoint.com/docs/api/get-provisioning-policy-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**id** | `string` | The provisioning policy ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ProvisioningPolicyDtoV2`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source ID.
const id: string = f5dd23fe-3414-42b7-bb1c-869400ad7a10; // The provisioning policy ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getProvisioningPolicyV2({ sourceId: sourceId, id: id });
console.log(result);
```

[[Back to top]](#)

## get-source-attr-sync-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Attribute sync config
This API returns the existing attribute synchronization configuration for a source specified by the given ID. The response contains all attributes, regardless of whether they enabled or not.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-attr-sync-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The source id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`AttrSyncSourceConfig`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 2c9180835d191a86015d28455b4a2329; // The source id
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getSourceAttrSyncConfigV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-source-config-v1
Gets source config with language-translations
Looks up and returns the source config for the requested source id after populating the source config values and applying language translations.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Source id |  [default to undefined]
**locale** | `'de' | 'false' | 'fi' | 'sv' | 'ru' | 'pt' | 'ko' | 'zh-TW' | 'en' | 'it' | 'fr' | 'zh-CN' | 'hu' | 'es' | 'cs' | 'ja' | 'pl' | 'da' | 'nl'` | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | [optional] [default to undefined]

### Return type

`ConnectorDetail`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = cef3ee201db947c5912551015ba0c679; // The Source id
const locale: string = en; // The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; (optional)
const result = await apiInstance.getSourceConfigV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-source-connections-v1
Get source connections by id
Use this API to get all dependent Profiles, Attributes, Applications and Custom Transforms for a source by a specified ID in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/get-source-connections-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]

### Return type

`SourceConnectionsDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const result = await apiInstance.getSourceConnectionsV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-source-dataset-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get source dataset by id
Use this API to get a dataset by id for the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/get-source-dataset-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**datasetId** | `string` | Dataset ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceDataset`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const datasetId: string = cmdb-servicenow:applications; // Dataset ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getSourceDatasetV1({ sourceId: sourceId, datasetId: datasetId });
console.log(result);
```

[[Back to top]](#)

## get-source-datasets-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List datasets on source
Use this API to list datasets for the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/get-source-datasets-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<SourceDataset>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getSourceDatasetsV1({ sourceId: sourceId });
console.log(result);
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Source id |  [default to undefined]

### Return type

`SourceEntitlementRequestConfig`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The Source id
const result = await apiInstance.getSourceEntitlementRequestConfigV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-source-health-v1
Fetches source health by id
This endpoint fetches source health by source's id

[API Spec](https://developer.sailpoint.com/docs/api/get-source-health-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id. |  [default to undefined]

### Return type

`SourceHealthDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id.
const result = await apiInstance.getSourceHealthV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-source-resource-mappings-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get source resource mappings
Use this API to get aggregation metadata for resources on the specified source in Identity
Security Cloud (ISC). The response is keyed by resource id. Each value includes the linked
dataset id, resource type, and connector object type. Resources without a matching schema are
omitted.


[API Spec](https://developer.sailpoint.com/docs/api/get-source-resource-mappings-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`{ [key: string]: SourceResourceMappingValue; }`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getSourceResourceMappingsV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-source-resource-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get source resource by id
Use this API to get a resource by id on the specified source in Identity Security Cloud (ISC).
The response includes the full CIS schema for the resource.


[API Spec](https://developer.sailpoint.com/docs/api/get-source-resource-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**resourceId** | `string` | Resource ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceDatasetResource`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const resourceId: string = account; // Resource ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getSourceResourceV1({ sourceId: sourceId, resourceId: resourceId });
console.log(result);
```

[[Back to top]](#)

## get-source-resources-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List resources for a source
Use this API to list resources defined on the specified source in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/get-source-resources-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<SourceDatasetResource>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getSourceResourcesV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-source-schedule-v1
Get source schedule by type
Get the source schedule by type in Identity Security Cloud (ISC).


[API Spec](https://developer.sailpoint.com/docs/api/get-source-schedule-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id. |  [default to undefined]
**scheduleType** | `'ACCOUNT_AGGREGATION' | 'GROUP_AGGREGATION'` | The Schedule type. |  [default to undefined]

### Return type

`Schedule3`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id.
const scheduleType: string = ACCOUNT_AGGREGATION; // The Schedule type.
const result = await apiInstance.getSourceScheduleV1({ sourceId: sourceId, scheduleType: scheduleType });
console.log(result);
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]

### Return type

`Array<Schedule3>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const result = await apiInstance.getSourceSchedulesV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-source-schema-v1
Get source schema by id
Get the Source Schema by ID in IdentityNow.


[API Spec](https://developer.sailpoint.com/docs/api/get-source-schema-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id. |  [default to undefined]
**schemaId** | `string` | The Schema id. |  [default to undefined]

### Return type

`Schema`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id.
const schemaId: string = 2c9180835d191a86015d28455b4a2329; // The Schema id.
const result = await apiInstance.getSourceSchemaV1({ sourceId: sourceId, schemaId: schemaId });
console.log(result);
```

[[Back to top]](#)

## get-source-schemas-v1
List schemas on source
Use this API to list the schemas that exist on the specified source in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/get-source-schemas-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**includeTypes** | `'group' | 'user'` | If set to \&#39;group\&#39;, then the account schema is filtered and only group schemas are returned. Only a value of \&#39;group\&#39; is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. | [optional] [default to undefined]
**includeNames** | `string` | A comma-separated list of schema names to filter result. | [optional] [default to undefined]

### Return type

`Array<Schema>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const includeTypes: string = group; // If set to \&#39;group\&#39;, then the account schema is filtered and only group schemas are returned. Only a value of \&#39;group\&#39; is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. (optional)
const includeNames: string = account; // A comma-separated list of schema names to filter result. (optional)
const result = await apiInstance.getSourceSchemasV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-source-v1
Get source by id
Use this API to get a source by a specified ID in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/get-source-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Source ID. |  [default to undefined]

### Return type

`Source`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const result = await apiInstance.getSourceV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## import-accounts-schema-v1
Uploads source accounts schema template
This API uploads a source schema template file to configure a source's account attributes.

To retrieve the file to modify and upload, log into Identity Now. 

Click **Admin** -> **Connections** -> **Sources** -> **`{SourceName}`** -> **Import Data** -> **Account Schema** -> **Options** -> **Download Schema**

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/import-accounts-schema-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Source id |  [default to undefined]
**file** | `File` |  | [optional] [default to undefined]

### Return type

`Schema`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The Source id
const file: File = BINARY_DATA_HERE; //  (optional)
const result = await apiInstance.importAccountsSchemaV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## import-accounts-v1
Account aggregation
Starts an account aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body.
You will also need to set the Content-Type header to `multipart/form-data`.

[API Spec](https://developer.sailpoint.com/docs/api/import-accounts-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Source Id |  [default to undefined]
**file** | `File` | The CSV file containing the source accounts to aggregate. | [optional] [default to undefined]
**disableOptimization** | `string` | Use this flag to reprocess every account whether or not the data has changed. | [optional] [default to undefined]

### Return type

`LoadAccountsTask`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Source Id
const file: File = BINARY_DATA_HERE; // The CSV file containing the source accounts to aggregate. (optional)
const disableOptimization: string = disableOptimization_example; // Use this flag to reprocess every account whether or not the data has changed. (optional)
const result = await apiInstance.importAccountsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## import-connector-file-v1
Upload connector file to source
This uploads a supplemental source connector file (like jdbc driver jars) to a source's S3 bucket. This also sends ETS and Audit events.

[API Spec](https://developer.sailpoint.com/docs/api/import-connector-file-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id. |  [default to undefined]
**file** | `File` |  | [optional] [default to undefined]

### Return type

`Source`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id.
const file: File = BINARY_DATA_HERE; //  (optional)
const result = await apiInstance.importConnectorFileV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## import-entitlements-schema-v1
Uploads source entitlements schema template
This API uploads a source schema template file to configure a source's entitlement attributes.

To retrieve the file to modify and upload, log into Identity Now. 

Click **Admin** -> **Connections** -> **Sources** -> **`{SourceName}`** -> **Import Data** -> **Import Entitlements** -> **Download**

>**NOTE: This API is designated only for Delimited File sources.**

[API Spec](https://developer.sailpoint.com/docs/api/import-entitlements-schema-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Source id |  [default to undefined]
**schemaName** | `string` | Name of entitlement schema | [optional] [default to undefined]
**file** | `File` |  | [optional] [default to undefined]

### Return type

`Schema`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The Source id
const schemaName: string = ?schemaName=group; // Name of entitlement schema (optional)
const file: File = BINARY_DATA_HERE; //  (optional)
const result = await apiInstance.importEntitlementsSchemaV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## import-entitlements-v1
Entitlement aggregation
Starts an entitlement aggregation on the specified source. 
If the target source is a delimited file source, then the CSV file needs to be included in the request body. 
You will also need to set the Content-Type header to `multipart/form-data`.
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/import-entitlements-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source Id |  [default to undefined]
**file** | `File` | The CSV file containing the source entitlements to aggregate. | [optional] [default to undefined]

### Return type

`LoadEntitlementTask`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source Id
const file: File = BINARY_DATA_HERE; // The CSV file containing the source entitlements to aggregate. (optional)
const result = await apiInstance.importEntitlementsV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## import-source-dataset-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Aggregate source dataset
Starts an aggregation for the specified dataset on the source in Identity Security Cloud (ISC).
An optional `config` object can be supplied for connector-specific aggregation settings.


[API Spec](https://developer.sailpoint.com/docs/api/import-source-dataset-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**datasetId** | `string` | Dataset ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**datasetAggregationRequest** | `DatasetAggregationRequest` |  | [optional]

### Return type

`TaskResultDetails`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { DatasetAggregationRequest } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const datasetId: string = cmdb-servicenow:applications; // Dataset ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const datasetAggregationRequest: DatasetAggregationRequest = {
  "config" : {
    "region" : "us-east-1"
  }
}; //  (optional)
const result = await apiInstance.importSourceDatasetV1({ sourceId: sourceId, datasetId: datasetId });
console.log(result);
```

[[Back to top]](#)

## import-uncorrelated-accounts-v1
Process uncorrelated accounts
File is required for upload. You will also need to set the Content-Type header to `multipart/form-data`

[API Spec](https://developer.sailpoint.com/docs/api/import-uncorrelated-accounts-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Source Id |  [default to undefined]
**file** | `File` |  | [optional] [default to undefined]

### Return type

`LoadUncorrelatedAccountsTask`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 75dbec1ebe154d5785da27b95e1dd5d7; // Source Id
const file: File = BINARY_DATA_HERE; //  (optional)
const result = await apiInstance.importUncorrelatedAccountsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-password-policy-holders-on-source-v1
Get Password Policy for source
This API can be used to get Password Policy in IdentityNow for the specified Source.
Source must support PASSWORD feature.


[API Spec](https://developer.sailpoint.com/docs/api/list-password-policy-holders-on-source-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id |  [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<PasswordPolicyHoldersDtoInner>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The Source id
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listPasswordPolicyHoldersOnSourceV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## list-provisioning-policies-v1
Lists provisioningpolicies
This end-point lists all the ProvisioningPolicies in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/list-provisioning-policies-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id |  [default to undefined]
**offset** | `number` | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [optional] [default to 0]
**limit** | `number` | Limit        Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to 250]

### Return type

`Array<ProvisioningPolicyDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id
const offset: number = 0; // Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional)
const limit: number = 250; // Limit        Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional)
const result = await apiInstance.listProvisioningPoliciesV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## list-provisioning-policies-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Lists Provisioning Policies
This end-point lists all the ProvisioningPolicies in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/list-provisioning-policies-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id |  [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **subtypeId**: *eq*  **usageType**: *eq* | [optional] [default to undefined]
**offset** | `number` | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [optional] [default to 0]
**limit** | `number` | Limit Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to 250]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<ProvisioningPolicyDtoV2>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id
const filters: string = subtypeId eq "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **subtypeId**: *eq*  **usageType**: *eq* (optional)
const offset: number = 0; // Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional)
const limit: number = 250; // Limit Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listProvisioningPoliciesV2({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## list-sources-v1
List sources
This end-point lists all the sources.

[API Spec](https://developer.sailpoint.com/docs/api/list-sources-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **modified**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** | [optional] [default to undefined]
**forSubadmin** | `string` | Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. | [optional] [default to undefined]
**includeIDNSource** | `boolean` | Include the IdentityNow source in the response. | [optional] [default to false]

### Return type

`Array<Source>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = name eq "Employees"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **modified**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* (optional)
const sorters: string = name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** (optional)
const forSubadmin: string = name; // Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. (optional)
const includeIDNSource: boolean = true; // Include the IdentityNow source in the response. (optional)
const result = await apiInstance.listSourcesV1({  });
console.log(result);
```

[[Back to top]](#)

## ping-cluster-v1
Ping cluster for source connector
This endpoint validates that the cluster being used by the source is reachable from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/ping-cluster-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The ID of the Source |  [default to undefined]

### Return type

`StatusResponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = cef3ee201db947c5912551015ba0c679; // The ID of the Source
const result = await apiInstance.pingClusterV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## put-correlation-config-v1
Update source correlation configuration
Replaces the correlation configuration for the source specified by the given ID with the configuration provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/put-correlation-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The source id |  [default to undefined]
**correlationConfig** | `CorrelationConfig` |  | 

### Return type

`CorrelationConfig`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { CorrelationConfig } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 2c9180835d191a86015d28455b4a2329; // The source id
const correlationConfig: CorrelationConfig = {
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
}; // 
const result = await apiInstance.putCorrelationConfigV1({ id: id, correlationConfig: correlationConfig });
console.log(result);
```

[[Back to top]](#)

## put-native-change-detection-config-v1
Update native change detection configuration
Replaces the native change detection configuration for the source specified by the given ID with the configuration provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/put-native-change-detection-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The source id |  [default to undefined]
**nativeChangeDetectionConfig** | `NativeChangeDetectionConfig` |  | 

### Return type

`NativeChangeDetectionConfig`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { NativeChangeDetectionConfig } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The source id
const nativeChangeDetectionConfig: NativeChangeDetectionConfig = {
  "selectedEntitlements" : [ "memberOf", "memberOfSharedMailbox" ],
  "operations" : [ "ACCOUNT_UPDATED", "ACCOUNT_DELETED" ],
  "selectedNonEntitlementAttributes" : [ "lastName", "phoneNumber", "objectType", "servicePrincipalName" ],
  "allNonEntitlementAttributes" : false,
  "allEntitlements" : false,
  "enabled" : true
}; // 
const result = await apiInstance.putNativeChangeDetectionConfigV1({ sourceId: sourceId, nativeChangeDetectionConfig: nativeChangeDetectionConfig });
console.log(result);
```

[[Back to top]](#)

## put-provisioning-policy-v1
Update provisioning policy by usagetype
This end-point updates the provisioning policy with the specified usage on the specified source in IdentityNow.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/put-provisioning-policy-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**usageType** | `UsageType` | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \&#39;Create Account Profile\&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \&#39;Update Account Profile\&#39;, the provisioning template for the \&#39;Update\&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \&#39;Enable Account Profile\&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\&#39;s account is created.  DISABLE - This usage type relates to \&#39;Disable Account Profile\&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. |  [default to undefined]
**provisioningPolicyDto** | `ProvisioningPolicyDto` |  | 

### Return type

`ProvisioningPolicyDto`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ProvisioningPolicyDto } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source ID.
const usageType: UsageType = CREATE; // The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \&#39;Create Account Profile\&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \&#39;Update Account Profile\&#39;, the provisioning template for the \&#39;Update\&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \&#39;Enable Account Profile\&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\&#39;s account is created.  DISABLE - This usage type relates to \&#39;Disable Account Profile\&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.
const provisioningPolicyDto: ProvisioningPolicyDto = {
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
}; // 
const result = await apiInstance.putProvisioningPolicyV1({ sourceId: sourceId, usageType: usageType, provisioningPolicyDto: provisioningPolicyDto });
console.log(result);
```

[[Back to top]](#)

## put-provisioning-policy-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update provisioning policy by ID
This end-point updates the provisioning policy with the specified ID on the specified source in Identity Security Cloud.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/put-provisioning-policy-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**id** | `string` | The provisioning policy ID. |  [default to undefined]
**provisioningPolicyDtoV2** | `ProvisioningPolicyDtoV2` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ProvisioningPolicyDtoV2`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ProvisioningPolicyDtoV2 } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source ID.
const id: string = f5dd23fe-3414-42b7-bb1c-869400ad7a10; // The provisioning policy ID.
const provisioningPolicyDtoV2: ProvisioningPolicyDtoV2 = {
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
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.putProvisioningPolicyV2({ sourceId: sourceId, id: id, provisioningPolicyDtoV2: provisioningPolicyDtoV2 });
console.log(result);
```

[[Back to top]](#)

## put-source-attr-sync-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update attribute sync config
Replaces the attribute synchronization configuration for the source specified by the given ID with the configuration provided in the request body. Only the "enabled" field of the values in the "attributes" array is mutable. Attempting to change other attributes or add new values to the "attributes" array will result in an error.


[API Spec](https://developer.sailpoint.com/docs/api/put-source-attr-sync-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The source id |  [default to undefined]
**attrSyncSourceConfig** | `AttrSyncSourceConfig` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`AttrSyncSourceConfig`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { AttrSyncSourceConfig } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 2c9180835d191a86015d28455b4a2329; // The source id
const attrSyncSourceConfig: AttrSyncSourceConfig = {
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
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.putSourceAttrSyncConfigV1({ id: id, attrSyncSourceConfig: attrSyncSourceConfig });
console.log(result);
```

[[Back to top]](#)

## put-source-dataset-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update source dataset (full)
Use this API to replace a dataset on the specified source in Identity Security Cloud (ISC).


Callers should round-trip the GET representation. `id` is required in the request body and must
match the path. `aggregationEnabled` may always be updated. `name`, `description`, and `resources`
can be changed only when the connector has the `supportDatasetCreation` label.


[API Spec](https://developer.sailpoint.com/docs/api/put-source-dataset-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**datasetId** | `string` | Dataset ID. |  [default to undefined]
**sourceDataset** | `SourceDataset` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceDataset`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SourceDataset } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const datasetId: string = cmdb-servicenow:applications; // Dataset ID.
const sourceDataset: SourceDataset = {
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
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.putSourceDatasetV1({ sourceId: sourceId, datasetId: datasetId, sourceDataset: sourceDataset });
console.log(result);
```

[[Back to top]](#)

## put-source-resource-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update source resource (full)
Use this API to replace a resource on the specified source in Identity Security Cloud (ISC).


After creation, schema attribute edits should be made through the source schema APIs. Connectors
with the `supportDatasetCreation` label can update additional resource fields.


[API Spec](https://developer.sailpoint.com/docs/api/put-source-resource-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**resourceId** | `string` | Resource ID. |  [default to undefined]
**sourceDatasetResource** | `SourceDatasetResource` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceDatasetResource`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SourceDatasetResource } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const resourceId: string = account; // Resource ID.
const sourceDatasetResource: SourceDatasetResource = {
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
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.putSourceResourceV1({ sourceId: sourceId, resourceId: resourceId, sourceDatasetResource: sourceDatasetResource });
console.log(result);
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id. |  [default to undefined]
**schemaId** | `string` | The Schema id. |  [default to undefined]
**schema** | `Schema` |  | 

### Return type

`Schema`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Schema } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id.
const schemaId: string = 2c9180835d191a86015d28455b4a2329; // The Schema id.
const schema: Schema = {
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
}; // 
const result = await apiInstance.putSourceSchemaV1({ sourceId: sourceId, schemaId: schemaId, schema: schema });
console.log(result);
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Source ID. |  [default to undefined]
**source** | `Source` |  | 

### Return type

`Source`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Source } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const source: Source = {
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
}; // 
const result = await apiInstance.putSourceV1({ id: id, source: source });
console.log(result);
```

[[Back to top]](#)

## search-resource-objects-v1
Peek source connector\'s resource objects
Retrieves a sample of data returned from account and group aggregation requests.

[API Spec](https://developer.sailpoint.com/docs/api/search-resource-objects-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The ID of the Source |  [default to undefined]
**resourceObjectsRequest** | `ResourceObjectsRequest` |  | 

### Return type

`ResourceObjectsResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ResourceObjectsRequest } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = cef3ee201db947c5912551015ba0c679; // The ID of the Source
const resourceObjectsRequest: ResourceObjectsRequest = {
  "maxCount" : 100,
  "objectType" : "group"
}; // 
const result = await apiInstance.searchResourceObjectsV1({ sourceId: sourceId, resourceObjectsRequest: resourceObjectsRequest });
console.log(result);
```

[[Back to top]](#)

## sync-attributes-for-source-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Synchronize single source attributes.
This end-point performs attribute synchronization for a selected source.

[API Spec](https://developer.sailpoint.com/docs/api/sync-attributes-for-source-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Source id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceSyncJob`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = id_example; // The Source id
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.syncAttributesForSourceV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## test-source-configuration-v1
Test configuration for source connector
This endpoint performs a more detailed validation of the source''s configuration that can take longer than the lighter weight credential validation performed by the checkConnection API.

[API Spec](https://developer.sailpoint.com/docs/api/test-source-configuration-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The ID of the Source |  [default to undefined]

### Return type

`StatusResponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = cef3ee201db947c5912551015ba0c679; // The ID of the Source
const result = await apiInstance.testSourceConfigurationV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## test-source-connection-v1
Check connection for source connector.
This endpoint validates that the configured credentials are valid and will properly authenticate with the source identified by the sourceId path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/test-source-connection-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The ID of the Source. |  [default to undefined]

### Return type

`StatusResponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = cef3ee201db947c5912551015ba0c679; // The ID of the Source.
const result = await apiInstance.testSourceConnectionV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## update-account-deletion-approval-config-v1
Human Account Deletion Approval Config
Updates the approval configuration for deleting human accounts for a specific source, identified by source ID. This endpoint allows administrators to modify settings such as whether approval is required, who the approvers are, and other approval-related options. The update is performed using a JSON Patch payload, and the response returns the updated AccountDeleteConfigDto object reflecting the new approval workflow configuration.


[API Spec](https://developer.sailpoint.com/docs/api/update-account-deletion-approval-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Human account source ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | The JSONPatch payload used to update the object. | 

### Return type

`AccountDeleteConfigDto`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 00eebcf881994e419d72e757fd30dc0e; // Human account source ID.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // The JSONPatch payload used to update the object.
const result = await apiInstance.updateAccountDeletionApprovalConfigV1({ sourceId: sourceId, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

## update-machine-account-deletion-approval-config-v1
Machine Account Deletion Approval Config
Use this endpoint to update the machine account deletion approval configuration for a specific source.
The update is performed using a JSON Patch payload, which allows partial modifications to the approval config.
This operation is typically used to change approval requirements, approvers, or comments settings for machine account deletion.
The endpoint expects the source ID as a path parameter and a valid JSON Patch array in the request body.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-account-deletion-approval-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | machine account source ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | The JSONPatch payload used to update the object. | 

### Return type

`AccountDeleteConfigDto`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 00eebcf881994e419d72e757fd30dc0e; // machine account source ID.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // The JSONPatch payload used to update the object.
const result = await apiInstance.updateMachineAccountDeletionApprovalConfigV1({ sourceId: sourceId, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

## update-password-policy-holders-v1
Update password policy
This API can be used to set up or update Password Policy in IdentityNow for the specified Source.
Source must support PASSWORD feature.


[API Spec](https://developer.sailpoint.com/docs/api/update-password-policy-holders-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id |  [default to undefined]
**passwordPolicyHoldersDtoInner** | `Array<PasswordPolicyHoldersDtoInner>` |  | 

### Return type

`Array<PasswordPolicyHoldersDtoInner>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { PasswordPolicyHoldersDtoInner } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The Source id
const passwordPolicyHoldersDtoInner: Array<PasswordPolicyHoldersDtoInner> = ; // 
const result = await apiInstance.updatePasswordPolicyHoldersV1({ sourceId: sourceId, passwordPolicyHoldersDtoInner: passwordPolicyHoldersDtoInner });
console.log(result);
```

[[Back to top]](#)

## update-provisioning-policies-in-bulk-v1
Bulk update provisioning policies
This end-point updates a list of provisioning policies on the specified source in IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/update-provisioning-policies-in-bulk-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id. |  [default to undefined]
**provisioningPolicyDto** | `Array<ProvisioningPolicyDto>` |  | 

### Return type

`Array<ProvisioningPolicyDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ProvisioningPolicyDto } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id.
const provisioningPolicyDto: Array<ProvisioningPolicyDto> = {
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
}; // 
const result = await apiInstance.updateProvisioningPoliciesInBulkV1({ sourceId: sourceId, provisioningPolicyDto: provisioningPolicyDto });
console.log(result);
```

[[Back to top]](#)

## update-provisioning-policy-v1
Partial update of provisioning policy
This API selectively updates an existing Provisioning Policy using a JSONPatch payload.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/update-provisioning-policy-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id. |  [default to undefined]
**usageType** | `UsageType` | The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \&#39;Create Account Profile\&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \&#39;Update Account Profile\&#39;, the provisioning template for the \&#39;Update\&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \&#39;Enable Account Profile\&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\&#39;s account is created.  DISABLE - This usage type relates to \&#39;Disable Account Profile\&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | The JSONPatch payload used to update the schema. | 

### Return type

`ProvisioningPolicyDto`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id.
const usageType: UsageType = CREATE; // The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \&#39;Create Account Profile\&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \&#39;Update Account Profile\&#39;, the provisioning template for the \&#39;Update\&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \&#39;Enable Account Profile\&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\&#39;s account is created.  DISABLE - This usage type relates to \&#39;Disable Account Profile\&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // The JSONPatch payload used to update the schema.
const result = await apiInstance.updateProvisioningPolicyV1({ sourceId: sourceId, usageType: usageType, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

## update-provisioning-policy-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Partial update of provisioning policy
This API selectively updates an existing Provisioning Policy using a JSONPatch payload.
Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.

[API Spec](https://developer.sailpoint.com/docs/api/update-provisioning-policy-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id. |  [default to undefined]
**id** | `string` | The provisioning policy ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | The JSONPatch payload used to update the schema. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ProvisioningPolicyDtoV2`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id.
const id: string = f5dd23fe-3414-42b7-bb1c-869400ad7a10; // The provisioning policy ID.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // The JSONPatch payload used to update the schema.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.updateProvisioningPolicyV2({ sourceId: sourceId, id: id, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

## update-source-dataset-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update source dataset (partial)
Use this API to selectively update an existing dataset using a JSONPatch payload.


`aggregationEnabled` may always be updated. `name`, `description`, and `resources` can be changed
only when the connector has the `supportDatasetCreation` label. `id` is immutable.


[API Spec](https://developer.sailpoint.com/docs/api/update-source-dataset-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**datasetId** | `string` | Dataset ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | The JSONPatch payload used to update the dataset. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceDataset`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const datasetId: string = cmdb-servicenow:applications; // Dataset ID.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // The JSONPatch payload used to update the dataset.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.updateSourceDatasetV1({ sourceId: sourceId, datasetId: datasetId, jsonPatchOperation: jsonPatchOperation });
console.log(result);
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Source id |  [default to undefined]
**sourceEntitlementRequestConfig** | `SourceEntitlementRequestConfig` |  | 

### Return type

`SourceEntitlementRequestConfig`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SourceEntitlementRequestConfig } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The Source id
const sourceEntitlementRequestConfig: SourceEntitlementRequestConfig = {
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
}; // 
const result = await apiInstance.updateSourceEntitlementRequestConfigV1({ id: id, sourceEntitlementRequestConfig: sourceEntitlementRequestConfig });
console.log(result);
```

[[Back to top]](#)

## update-source-resource-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update source resource (partial)
Use this API to selectively update an existing resource using a JSONPatch payload.


After creation, schema attribute edits should be made through the source schema APIs. Connectors
with the `supportDatasetCreation` label can update additional resource fields.


[API Spec](https://developer.sailpoint.com/docs/api/update-source-resource-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**resourceId** | `string` | Resource ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | The JSONPatch payload used to update the resource. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceDatasetResource`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const resourceId: string = account; // Resource ID.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // The JSONPatch payload used to update the resource.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.updateSourceResourceV1({ sourceId: sourceId, resourceId: resourceId, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

## update-source-schedule-v1
Update source schedule (partial)
Use this API to selectively update an existing Schedule using a JSONPatch payload. 

The following schedule fields are immutable and cannot be updated:

- type


[API Spec](https://developer.sailpoint.com/docs/api/update-source-schedule-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id. |  [default to undefined]
**scheduleType** | `'ACCOUNT_AGGREGATION' | 'GROUP_AGGREGATION'` | The Schedule type. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | The JSONPatch payload used to update the schedule. | 

### Return type

`Schedule3`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id.
const scheduleType: string = ACCOUNT_AGGREGATION; // The Schedule type.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // The JSONPatch payload used to update the schedule.
const result = await apiInstance.updateSourceScheduleV1({ sourceId: sourceId, scheduleType: scheduleType, jsonPatchOperation: jsonPatchOperation });
console.log(result);
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id. |  [default to undefined]
**schemaId** | `string` | The Schema id. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | The JSONPatch payload used to update the schema. | 

### Return type

`Schema`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source id.
const schemaId: string = 2c9180835d191a86015d28455b4a2329; // The Schema id.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // The JSONPatch payload used to update the schema.
const result = await apiInstance.updateSourceSchemaV1({ sourceId: sourceId, schemaId: schemaId, jsonPatchOperation: jsonPatchOperation });
console.log(result);
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Source ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC). | 

### Return type

`Source`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SourcesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/sources/api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);
const id: string = 2c9180835d191a86015d28455b4a2329; // Source ID.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).
const result = await apiInstance.updateSourceV1({ id: id, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

