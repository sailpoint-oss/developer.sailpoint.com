---
id: beta-access-item-app-response
title: AccessItemAppResponse
pagination_label: AccessItemAppResponse
sidebar_label: AccessItemAppResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemAppResponse', 'BetaAccessItemAppResponse'] 
slug: /tools/sdk/powershell/beta/models/access-item-app-response
tags: ['SDK', 'Software Development Kit', 'AccessItemAppResponse', 'BetaAccessItemAppResponse']
---


# AccessItemAppResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** | **String** | the access item type. entitlement in this case | [optional] 
**Id** | **String** | the access item id | [optional] 
**DisplayName** | **String** | the access item display name | [optional] 
**SourceName** | **String** | the associated source name if it exists | [optional] 
**AppRoleId** | **String** | the app role id | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemAppResponse = Initialize-PSSailpoint.BetaAccessItemAppResponse  -AccessType app `
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

