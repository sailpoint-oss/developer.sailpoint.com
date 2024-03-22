---
id: source
title: Source
pagination_label: Source
sidebar_label: Source
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Source'] 
slug: /tools/sdk/powershell/v3/models/source
tags: ['SDK', 'Software Development Kit', 'Source']
---


# Source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | the id of the Source | [optional] [readonly] 
**Name** |  **String** | Human-readable name of the source | 
**Description** |  Pointer to **String** | Human-readable description of the source | [optional] 
**Owner** |  [**SourceOwner**](source-owner) |  | 
**Cluster** |  Pointer to [**SourceCluster**](source-cluster) |  | [optional] 
**AccountCorrelationConfig** |  Pointer to [**SourceAccountCorrelationConfig**](source-account-correlation-config) |  | [optional] 
**AccountCorrelationRule** |  Pointer to [**SourceAccountCorrelationRule**](source-account-correlation-rule) |  | [optional] 
**ManagerCorrelationMapping** |  Pointer to [**SourceManagerCorrelationMapping**](source-manager-correlation-mapping) |  | [optional] 
**ManagerCorrelationRule** |  Pointer to [**SourceManagerCorrelationRule**](source-manager-correlation-rule) |  | [optional] 
**BeforeProvisioningRule** |  Pointer to [**SourceBeforeProvisioningRule**](source-before-provisioning-rule) |  | [optional] 
**Schemas** |  Pointer to [**[]SourceSchemasInner**](source-schemas-inner) | List of references to Schema objects | [optional] 
**PasswordPolicies** |  Pointer to [**[]SourcePasswordPoliciesInner**](source-password-policies-inner) | List of references to the associated PasswordPolicy objects. | [optional] 
**Features** |  Pointer to [**[]SourceFeature**](source-feature) | Optional features that can be supported by a source. | [optional] 
**Type** |  Pointer to **String** | Specifies the type of system being managed e.g. Active Directory, Workday, etc.. If you are creating a Delimited File source, you must set the &#x60;provisionasCsv&#x60; query parameter to &#x60;true&#x60;.  | [optional] 
**Connector** |  **String** | Connector script name. | 
**ConnectorClass** |  Pointer to **String** | The fully qualified name of the Java class that implements the connector interface. | [optional] 
**ConnectorAttributes** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | Connector specific configuration; will differ from type to type. | [optional] 
**DeleteThreshold** |  Pointer to **Int32** | Number from 0 to 100 that specifies when to skip the delete phase. | [optional] 
**Authoritative** |  Pointer to **Boolean** | When true indicates the source is referenced by an IdentityProfile. | [optional] [default to $false]
**ManagementWorkgroup** |  Pointer to [**SourceManagementWorkgroup**](source-management-workgroup) |  | [optional] 
**Healthy** |  Pointer to **Boolean** | When true indicates a healthy source | [optional] [default to $false]
**Status** |  Pointer to **String** | A status identifier, giving specific information on why a source is healthy or not | [optional] 
**Since** |  Pointer to **String** | Timestamp showing when a source health check was last performed | [optional] 
**ConnectorId** |  Pointer to **String** | The id of connector | [optional] 
**ConnectorName** |  Pointer to **String** | The name of the connector that was chosen on source creation | [optional] 
**ConnectionType** |  Pointer to **String** | The type of connection (direct or file) | [optional] 
**ConnectorImplementationId** |  Pointer to **String** | The connector implementation id | [optional] 
**Created** |  Pointer to **System.DateTime** | The date-time when the source was created | [optional] 
**Modified** |  Pointer to **System.DateTime** | The date-time when the source was last modified | [optional] 

## Examples

- Prepare the resource
```powershell
$Source = Initialize-PSSailpointSource  -Id 2c91808568c529c60168cca6f90c1324 `
 -Name My Source `
 -Description This is the corporate directory. `
 -Owner null `
 -Cluster null `
 -AccountCorrelationConfig null `
 -AccountCorrelationRule null `
 -ManagerCorrelationMapping null `
 -ManagerCorrelationRule null `
 -BeforeProvisioningRule null `
 -Schemas [{type&#x3D;CONNECTOR_SCHEMA, id&#x3D;2c9180835d191a86015d28455b4b232a, name&#x3D;account}, {type&#x3D;CONNECTOR_SCHEMA, id&#x3D;2c9180835d191a86015d28455b4b232b, name&#x3D;group}] `
 -PasswordPolicies [{type&#x3D;PASSWORD_POLICY, id&#x3D;2c9180855d191c59015d291ceb053980, name&#x3D;Corporate Password Policy}, {type&#x3D;PASSWORD_POLICY, id&#x3D;2c9180855d191c59015d291ceb057777, name&#x3D;Vendor Password Policy}] `
 -Features [SYNC_PROVISIONING, MANAGER_LOOKUP, SEARCH, PROVISIONING, AUTHENTICATE, GROUP_PROVISIONING, PASSWORD] `
 -Type OpenLDAP - Direct `
 -Connector active-directory `
 -ConnectorClass sailpoint.connector.LDAPConnector `
 -ConnectorAttributes {healthCheckTimeout&#x3D;30, authSearchAttributes&#x3D;[cn, uid, mail]} `
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
 -Modified 2024-01-23T18:08:50.897Z
```

- Convert the resource to JSON
```powershell
$Source | ConvertTo-JSON
```


[[Back to top]](#) 

