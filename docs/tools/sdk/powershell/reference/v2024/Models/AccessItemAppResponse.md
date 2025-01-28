---
id: v2024-access-item-app-response
title: AccessItemAppResponse
pagination_label: AccessItemAppResponse
sidebar_label: AccessItemAppResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemAppResponse'] 
slug: /tools/sdk/powershell/v2024/models/access-item-app-response
tags: ['SDK', 'Software Development Kit', 'AccessItemAppResponse']
---


# AccessItemAppResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** |  Pointer to **String** | the access item type. entitlement in this case | [optional] 
**Id** |  Pointer to **String** | the access item id | [optional] 
**DisplayName** |  Pointer to **String** | the access item display name | [optional] 
**SourceName** |  Pointer to **String** | the associated source name if it exists | [optional] 
**AppRoleId** |  Pointer to **String** | the app role id | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemAppResponse = Initialize-PSSailpoint.V2024AccessItemAppResponse  -AccessType app `
 -Id 2c918087763e69d901763e72e97f006f `
 -DisplayName Display Name `
 -SourceName appName `
 -AppRoleId 2c918087763e69d901763e72e97f006f
```

- Convert the resource to JSON
```powershell
$AccessItemAppResponse | ConvertTo-JSON
```


[[Back to top]](#) 

