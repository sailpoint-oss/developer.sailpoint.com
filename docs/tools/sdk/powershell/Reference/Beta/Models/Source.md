---
id: beta-source
title: Source
pagination_label: Source
sidebar_label: Source
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Source', 'BetaSource'] 
slug: /tools/sdk/powershell/beta/models/source
tags: ['SDK', 'Software Development Kit', 'Source', 'BetaSource']
---


# Source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Source ID. | [optional] [readonly] 
**Name** | **String** | Source's human-readable name. | [required]
**Description** | **String** | Source's human-readable description. | [optional] 
**Owner** | [**MultiHostIntegrationsOwner**](multi-host-integrations-owner) |  | [required]
**Cluster** | [**MultiHostIntegrationsCluster**](multi-host-integrations-cluster) |  | [optional] 
**AccountCorrelationConfig** | [**MultiHostSourcesAccountCorrelationConfig**](multi-host-sources-account-correlation-config) |  | [optional] 
**AccountCorrelationRule** | [**MultiHostSourcesAccountCorrelationRule**](multi-host-sources-account-correlation-rule) |  | [optional] 
**ManagerCorrelationMapping** | [**ManagerCorrelationMapping**](manager-correlation-mapping) |  | [optional] 
**ManagerCorrelationRule** | [**MultiHostSourcesManagerCorrelationRule**](multi-host-sources-manager-correlation-rule) |  | [optional] 
**BeforeProvisioningRule** | [**MultiHostSourcesBeforeProvisioningRule**](multi-host-sources-before-provisioning-rule) |  | [optional] 
**Schemas** | [**[]MultiHostSourcesSchemasInner**](multi-host-sources-schemas-inner) | List of references to schema objects. | [optional] 
**PasswordPolicies** | [**[]MultiHostSourcesPasswordPoliciesInner**](multi-host-sources-password-policies-inner) | List of references to the associated PasswordPolicy objects. | [optional] 
**Features** | **[]String** | Optional features that can be supported by a source. Modifying the features array may cause source configuration errors that are unsupportable. It is recommended to not modify this array for SailPoint supported connectors. * AUTHENTICATE: The source supports pass-through authentication. * COMPOSITE: The source supports composite source creation. * DIRECT_PERMISSIONS: The source supports returning DirectPermissions. * DISCOVER_SCHEMA: The source supports discovering schemas for users and groups. * ENABLE The source supports reading if an account is enabled or disabled. * MANAGER_LOOKUP: The source supports looking up managers as they are encountered in a feed. This is the opposite of NO_RANDOM_ACCESS. * NO_RANDOM_ACCESS: The source does not support random access and the getObject() methods should not be called and expected to perform. * PROXY: The source can serve as a proxy for another source. When an source has a proxy, all connector calls made with that source are redirected through the connector for the proxy source. * SEARCH * TEMPLATE * UNLOCK: The source supports reading if an account is locked or unlocked. * UNSTRUCTURED_TARGETS: The source supports returning unstructured Targets. * SHAREPOINT_TARGET: The source supports returning unstructured Target data for SharePoint. It will be typically used by AD, LDAP sources. * PROVISIONING: The source can both read and write accounts. Having this feature implies that the provision() method is implemented. It also means that direct and target permissions can also be provisioned if they can be returned by aggregation. * GROUP_PROVISIONING: The source can both read and write groups. Having this feature implies that the provision() method is implemented. * SYNC_PROVISIONING: The source can provision accounts synchronously. * PASSWORD: The source can provision password changes. Since sources can never read passwords, this is should only be used in conjunction with the PROVISIONING feature. * CURRENT_PASSWORD: Some source types support verification of the current password * ACCOUNT_ONLY_REQUEST: The source supports requesting accounts without entitlements. * ADDITIONAL_ACCOUNT_REQUEST: The source supports requesting additional accounts. * NO_AGGREGATION: A source that does not support aggregation. * GROUPS_HAVE_MEMBERS: The source models group memberships with a member attribute on the group object rather than a groups attribute on the account object. This effects the implementation of delta account aggregation. * NO_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for accounts. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for accounts. * NO_GROUP_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for groups. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for groups. * NO_UNSTRUCTURED_TARGETS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * NO_DIRECT_PERMISSIONS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * USES_UUID: Connectivity 2.0 flag used to indicate that the connector supports a compound naming structure. * PREFER_UUID: Used in ISC Provisioning AND Aggregation to decide if it should prefer account.uuid to account.nativeIdentity when data is read in through aggregation OR pushed out through provisioning. * ARM_SECURITY_EXTRACT: Indicates the application supports Security extracts for ARM * ARM_UTILIZATION_EXTRACT: Indicates the application supports Utilization extracts for ARM * ARM_CHANGELOG_EXTRACT: Indicates the application supports Change-log extracts for ARM | [optional] 
**Type** | **String** | Specifies the type of system being managed e.g. Active Directory, Workday, etc.. If you are creating a delimited file source, you must set the `provisionasCsv` query parameter to `true`.  | [optional] 
**Connector** | **String** | Connector script name. | [required]
**ConnectorClass** | **String** | Fully qualified name of the Java class that implements the connector interface. | [optional] 
**ConnectorAttributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Connector specific configuration. This configuration will differ from type to type. | [optional] 
**DeleteThreshold** | **Int32** | Number from 0 to 100 that specifies when to skip the delete phase. | [optional] 
**Authoritative** | **Boolean** | When this is true, it indicates that the source is referenced by an identity profile. | [optional] [default to $false]
**ManagementWorkgroup** | [**MultiHostIntegrationsManagementWorkgroup**](multi-host-integrations-management-workgroup) |  | [optional] 
**Healthy** | **Boolean** | When this is true, it indicates that the source is healthy. | [optional] [default to $false]
**Status** |  **Enum** [  "SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT",    "SOURCE_STATE_ERROR_CLUSTER",    "SOURCE_STATE_ERROR_SOURCE",    "SOURCE_STATE_ERROR_VA",    "SOURCE_STATE_FAILURE_CLUSTER",    "SOURCE_STATE_FAILURE_SOURCE",    "SOURCE_STATE_HEALTHY",    "SOURCE_STATE_UNCHECKED_CLUSTER",    "SOURCE_STATE_UNCHECKED_CLUSTER_NO_SOURCES",    "SOURCE_STATE_UNCHECKED_SOURCE",    "SOURCE_STATE_UNCHECKED_SOURCE_NO_ACCOUNTS" ] | Status identifier that gives specific information about why a source is or isn't healthy.  | [optional] 
**Since** | **String** | Timestamp that shows when a source health check was last performed. | [optional] 
**ConnectorId** | **String** | Connector ID | [optional] 
**ConnectorName** | **String** | Name of the connector that was chosen during source creation. | [optional] 
**ConnectionType** | **String** | Type of connection (direct or file). | [optional] 
**ConnectorImplementationId** | **String** | Connector implementation ID. | [optional] 
**Created** | **System.DateTime** | Date-time when the source was created | [optional] 
**Modified** | **System.DateTime** | Date-time when the source was last modified. | [optional] 
**CredentialProviderEnabled** | **Boolean** | If this is true, it enables a credential provider for the source. If credentialProvider is turned on,  then the source can use credential provider(s) to fetch credentials. | [optional] [default to $false]
**Category** | **String** | Source category (e.g. null, CredentialProvider). | [optional] 

## Examples

- Prepare the resource
```powershell
$Source = Initialize-BetaSource  -Id 2c91808568c529c60168cca6f90c1324 `
 -Name My Source `
 -Description This is the corporate directory. `
 -Owner null `
 -Cluster null `
 -AccountCorrelationConfig null `
 -AccountCorrelationRule null `
 -ManagerCorrelationMapping null `
 -ManagerCorrelationRule null `
 -BeforeProvisioningRule null `
 -Schemas [{type=CONNECTOR_SCHEMA, id=2c9180835d191a86015d28455b4b232a, name=account}, {type=CONNECTOR_SCHEMA, id=2c9180835d191a86015d28455b4b232b, name=group}] `
 -PasswordPolicies [{type=PASSWORD_POLICY, id=2c9180855d191c59015d291ceb053980, name=Corporate Password Policy}, {type=PASSWORD_POLICY, id=2c9180855d191c59015d291ceb057777, name=Vendor Password Policy}] `
 -Features [PROVISIONING, NO_PERMISSIONS_PROVISIONING, GROUPS_HAVE_MEMBERS] `
 -Type OpenLDAP - Direct `
 -Connector active-directory `
 -ConnectorClass sailpoint.connector.LDAPConnector `
 -ConnectorAttributes {healthCheckTimeout=30, authSearchAttributes=[cn, uid, mail]} `
 -DeleteThreshold 10 `
 -Authoritative false `
 -ManagementWorkgroup null `
 -Healthy true `
 -Status SOURCE_STATE_HEALTHY `
 -Since 2021-09-28T15:48:29.3801666300Z `
 -ConnectorId active-directory `
 -ConnectorName Active Directory `
 -ConnectionType file `
 -ConnectorImplementationId delimited-file `
 -Created 2022-02-08T14:50:03.827Z `
 -Modified 2024-01-23T18:08:50.897Z `
 -CredentialProviderEnabled false `
 -Category CredentialProvider
```

- Convert the resource to JSON
```powershell
$Source | ConvertTo-JSON
```


[[Back to top]](#) 

