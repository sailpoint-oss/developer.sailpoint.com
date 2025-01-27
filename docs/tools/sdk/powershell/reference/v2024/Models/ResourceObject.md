---
id: v2024-resource-object
title: ResourceObject
pagination_label: ResourceObject
sidebar_label: ResourceObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ResourceObject'] 
slug: /tools/sdk/powershell/v2024/models/resource-object
tags: ['SDK', 'Software Development Kit', 'ResourceObject']
---


# ResourceObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Instance** |  Pointer to **String** | Identifier of the specific instance where this object resides. | [optional] [readonly] 
**Identity** |  Pointer to **String** | Native identity of the object in the Source. | [optional] [readonly] 
**Uuid** |  Pointer to **String** | Universal unique identifier of the object in the Source. | [optional] [readonly] 
**PreviousIdentity** |  Pointer to **String** | Native identity that the object has previously. | [optional] [readonly] 
**Name** |  Pointer to **String** | Display name for this object. | [optional] [readonly] 
**ObjectType** |  Pointer to **String** | Type of object. | [optional] [readonly] 
**Incomplete** |  Pointer to **Boolean** | A flag indicating that this is an incomplete object. Used in special cases where the connector has to return account information in several phases and the objects might not have a complete set of all account attributes. The attributes in this object will replace the corresponding attributes in the Link, but no other Link attributes will be changed. | [optional] [readonly] 
**Incremental** |  Pointer to **Boolean** | A flag indicating that this is an incremental change object. This is similar to incomplete but it also means that the values of any multi-valued attributes in this object should be merged with the existing values in the Link rather than replacing the existing Link value. | [optional] [readonly] 
**Delete** |  Pointer to **Boolean** | A flag indicating that this object has been deleted. This is set only when doing delta aggregation and the connector supports detection of native deletes. | [optional] [readonly] 
**Remove** |  Pointer to **Boolean** | A flag set indicating that the values in the attributes represent things to remove rather than things to add. Setting this implies incremental. The values which are always for multi-valued attributes are removed from the current values. | [optional] [readonly] 
**Missing** |  Pointer to **[]String** | A list of attribute names that are not included in this object. This is only used with SMConnector and will only contain ""groups"". | [optional] [readonly] 
**Attributes** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Attributes of this ResourceObject. | [optional] [readonly] 
**FinalUpdate** |  Pointer to **Boolean** | In Aggregation, for sparse object the count for total accounts scanned identities updated is not incremented. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$ResourceObject = Initialize-PSSailpoint.V2024ResourceObject  -Instance null `
 -Identity CN&#x3D;Aaron Carr,OU&#x3D;test1,DC&#x3D;test2,DC&#x3D;test `
 -Uuid {abf7bd9b-68b4-4d21-9b70-870c58ebf844} `
 -PreviousIdentity null `
 -Name Aaron Carr `
 -ObjectType account `
 -Incomplete false `
 -Incremental false `
 -Delete false `
 -Remove false `
 -Missing [missFieldOne, missFieldTwo] `
 -Attributes {telephoneNumber&#x3D;12-(345)678-9012, mail&#x3D;example@test.com, displayName&#x3D;Aaron Carr} `
 -FinalUpdate false
```

- Convert the resource to JSON
```powershell
$ResourceObject | ConvertTo-JSON
```


[[Back to top]](#) 

