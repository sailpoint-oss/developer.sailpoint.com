---
id: v2024-access-item-role-response
title: AccessItemRoleResponse
pagination_label: AccessItemRoleResponse
sidebar_label: AccessItemRoleResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemRoleResponse'] 
slug: /tools/sdk/powershell/v2024/models/access-item-role-response
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
**RemoveDate** |  Pointer to **String** | the date the role is no longer assigned to the specified identity | [optional] 
**Revocable** |  **Boolean** | indicates whether the role is revocable | [required]

## Examples

- Prepare the resource
```powershell
$AccessItemRoleResponse = Initialize-PSSailpoint.V2024AccessItemRoleResponse  -AccessType role `
 -Id 2c918087763e69d901763e72e97f006f `
 -DisplayName sample `
 -Description Role - Workday/Citizenship access `
 -SourceName Source Name `
 -RemoveDate 2024-07-01T06:00:00.00Z `
 -Revocable true
```

- Convert the resource to JSON
```powershell
$AccessItemRoleResponse | ConvertTo-JSON
```


[[Back to top]](#) 

