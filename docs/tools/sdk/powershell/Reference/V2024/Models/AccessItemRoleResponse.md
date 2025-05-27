---
id: v2024-access-item-role-response
title: AccessItemRoleResponse
pagination_label: AccessItemRoleResponse
sidebar_label: AccessItemRoleResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemRoleResponse', 'V2024AccessItemRoleResponse'] 
slug: /tools/sdk/powershell/v2024/models/access-item-role-response
tags: ['SDK', 'Software Development Kit', 'AccessItemRoleResponse', 'V2024AccessItemRoleResponse']
---


# AccessItemRoleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** | **String** | the access item type. role in this case | [optional] 
**Id** | **String** | the access item id | [optional] 
**DisplayName** | **String** | the role display name | [optional] 
**Description** | **String** | the description for the role | [optional] 
**SourceName** | **String** | the associated source name if it exists | [optional] 
**RemoveDate** | **String** | the date the role is no longer assigned to the specified identity | [optional] 
**Revocable** | **Boolean** | indicates whether the role is revocable | [required]

## Examples

- Prepare the resource
```powershell
$AccessItemRoleResponse = Initialize-V2024AccessItemRoleResponse  -AccessType role `
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

