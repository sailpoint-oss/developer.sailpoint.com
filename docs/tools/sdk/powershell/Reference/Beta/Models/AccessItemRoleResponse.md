---
id: beta-access-item-role-response
title: AccessItemRoleResponse
pagination_label: AccessItemRoleResponse
sidebar_label: AccessItemRoleResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemRoleResponse', 'BetaAccessItemRoleResponse'] 
slug: /tools/sdk/powershell/beta/models/access-item-role-response
tags: ['SDK', 'Software Development Kit', 'AccessItemRoleResponse', 'BetaAccessItemRoleResponse']
---


# AccessItemRoleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the access item id | [optional] 
**AccessType** | **String** | the access item type. role in this case | [optional] 
**DisplayName** | **String** | the role display name | [optional] 
**SourceName** | **String** | the associated source name if it exists | [optional] 
**Description** | **String** | the description for the role | [optional] 
**RemoveDate** | **String** | the date the role is no longer assigned to the specified identity | [optional] 
**Revocable** | **Boolean** | indicates whether the role is revocable | [required]

## Examples

- Prepare the resource
```powershell
$AccessItemRoleResponse = Initialize-BetaAccessItemRoleResponse  -Id 2c918087763e69d901763e72e97f006f `
 -AccessType role `
 -DisplayName sample `
 -SourceName Source Name `
 -Description Role - Workday/Citizenship access `
 -RemoveDate 2024-07-01T06:00:00.00Z `
 -Revocable true
```

- Convert the resource to JSON
```powershell
$AccessItemRoleResponse | ConvertTo-JSON
```


[[Back to top]](#) 

