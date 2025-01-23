---
id: schema
title: Schema
pagination_label: Schema
sidebar_label: Schema
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schema'] 
slug: /tools/sdk/powershell/beta/models/schema
tags: ['SDK', 'Software Development Kit', 'Schema']
---


# Schema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The id of the Schema. | [optional] 
**Name** |  Pointer to **String** | The name of the Schema. | [optional] 
**NativeObjectType** |  Pointer to **String** | The name of the object type on the native system that the schema represents. | [optional] 
**IdentityAttribute** |  Pointer to **String** | The name of the attribute used to calculate the unique identifier for an object in the schema. | [optional] 
**DisplayAttribute** |  Pointer to **String** | The name of the attribute used to calculate the display value for an object in the schema. | [optional] 
**HierarchyAttribute** |  Pointer to **String** | The name of the attribute whose values represent other objects in a hierarchy. Only relevant to group schemas. | [optional] 
**IncludePermissions** |  Pointer to **Boolean** | Flag indicating whether or not the include permissions with the object data when aggregating the schema. | [optional] 
**Features** |  Pointer to **[]String** | Optional features that can be supported by a source. Modifying the features array may cause source configuration errors that are unsupportable. It is recommended to not modify this array for SailPoint supported connectors. * AUTHENTICATE: The source supports pass-through authentication. * COMPOSITE: The source supports composite source creation. * DIRECT_PERMISSIONS: The source supports returning DirectPermissions. * DISCOVER_SCHEMA: The source supports discovering schemas for users and groups. * ENABLE The source supports reading if an account is enabled or disabled. * MANAGER_LOOKUP: The source supports looking up managers as they are encountered in a feed. This is the opposite of NO_RANDOM_ACCESS. * NO_RANDOM_ACCESS: The source does not support random access and the getObject() methods should not be called and expected to perform. * PROXY: The source can serve as a proxy for another source. When an source has a proxy, all connector calls made with that source are redirected through the connector for the proxy source. * SEARCH * TEMPLATE * UNLOCK: The source supports reading if an account is locked or unlocked. * UNSTRUCTURED_TARGETS: The source supports returning unstructured Targets. * SHAREPOINT_TARGET: The source supports returning unstructured Target data for SharePoint. It will be typically used by AD, LDAP sources. * PROVISIONING: The source can both read and write accounts. Having this feature implies that the provision() method is implemented. It also means that direct and target permissions can also be provisioned if they can be returned by aggregation. * GROUP_PROVISIONING: The source can both read and write groups. Having this feature implies that the provision() method is implemented. * SYNC_PROVISIONING: The source can provision accounts synchronously. * PASSWORD: The source can provision password changes. Since sources can never read passwords, this is should only be used in conjunction with the PROVISIONING feature. * CURRENT_PASSWORD: Some source types support verification of the current password * ACCOUNT_ONLY_REQUEST: The source supports requesting accounts without entitlements. * ADDITIONAL_ACCOUNT_REQUEST: The source supports requesting additional accounts. * NO_AGGREGATION: A source that does not support aggregation. * GROUPS_HAVE_MEMBERS: The source models group memberships with a member attribute on the group object rather than a groups attribute on the account object. This effects the implementation of delta account aggregation. * NO_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for accounts. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for accounts. * NO_GROUP_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for groups. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for groups. * NO_UNSTRUCTURED_TARGETS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * NO_DIRECT_PERMISSIONS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * USES_UUID: Connectivity 2.0 flag used to indicate that the connector supports a compound naming structure. * PREFER_UUID: Used in ISC Provisioning AND Aggregation to decide if it should prefer account.uuid to account.nativeIdentity when data is read in through aggregation OR pushed out through provisioning. * ARM_SECURITY_EXTRACT: Indicates the application supports Security extracts for ARM * ARM_UTILIZATION_EXTRACT: Indicates the application supports Utilization extracts for ARM * ARM_CHANGELOG_EXTRACT: Indicates the application supports Change-log extracts for ARM | [optional] 
**Configuration** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Holds any extra configuration data that the schema may require. | [optional] 
**Attributes** |  Pointer to [**[]AttributeDefinition**](attribute-definition) | The attribute definitions which form the schema. | [optional] 
**Created** |  Pointer to **System.DateTime** | The date the Schema was created. | [optional] 
**Modified** |  Pointer to **System.DateTime** | The date the Schema was last modified. | [optional] 

## Examples

- Prepare the resource
```powershell
$Schema = Initialize-PSSailpoint.BetaSchema  -Id 2c9180835d191a86015d28455b4a2329 `
 -Name account `
 -NativeObjectType User `
 -IdentityAttribute sAMAccountName `
 -DisplayAttribute distinguishedName `
 -HierarchyAttribute memberOf `
 -IncludePermissions false `
 -Features [PROVISIONING, NO_PERMISSIONS_PROVISIONING, GROUPS_HAVE_MEMBERS] `
 -Configuration {groupMemberAttribute&#x3D;member} `
 -Attributes [{name&#x3D;sAMAccountName, type&#x3D;STRING, isMultiValued&#x3D;false, isEntitlement&#x3D;false, isGroup&#x3D;false}, {name&#x3D;memberOf, type&#x3D;STRING, schema&#x3D;{type&#x3D;CONNECTOR_SCHEMA, id&#x3D;2c9180887671ff8c01767b4671fc7d60, name&#x3D;group}, description&#x3D;Group membership, isMultiValued&#x3D;true, isEntitlement&#x3D;true, isGroup&#x3D;true}] `
 -Created 2019-12-24T22:32:58.104Z `
 -Modified 2019-12-31T20:22:28.104Z
```

- Convert the resource to JSON
```powershell
$Schema | ConvertTo-JSON
```


[[Back to top]](#) 

