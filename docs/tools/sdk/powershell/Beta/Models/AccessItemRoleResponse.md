---
id: access-item-role-response
title: AccessItemRoleResponse
pagination_label: AccessItemRoleResponse
sidebar_label: AccessItemRoleResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessItemRoleResponse'] 
slug: /tools/sdk/powershell/beta/models/access-item-role-response
tags: ['SDK', 'Software Development Kit', 'AccessItemRoleResponse']
---


# AccessItemRoleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** |  Pointer to **String** | the access item type. role in this case | [optional] 
**Id** |  Pointer to **String** | the access item id | [optional] 
**DisplayName** |  Pointer to **String** | the role display name | [optional] 
**Description** |  Pointer to **String** | the description for the role | [optional] 
**SourceName** |  Pointer to **String** | the associated source name if it exists | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemRoleResponse = Initialize-PSSailpointBetaAccessItemRoleResponse  -AccessType role `
 -Id 2c918087763e69d901763e72e97f006f `
 -DisplayName sample `
 -Description Role - Workday/Citizenship access `
 -SourceName Source Name
```

- Convert the resource to JSON
```powershell
$AccessItemRoleResponse | ConvertTo-JSON
```


[[Back to top]](#) 

