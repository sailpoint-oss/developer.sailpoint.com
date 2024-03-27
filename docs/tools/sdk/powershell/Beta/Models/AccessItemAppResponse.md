---
id: access-item-app-response
title: AccessItemAppResponse
pagination_label: AccessItemAppResponse
sidebar_label: AccessItemAppResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessItemAppResponse'] 
slug: /tools/sdk/powershell/beta/models/access-item-app-response
tags: ['SDK', 'Software Development Kit', 'AccessItemAppResponse']
---


# AccessItemAppResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** |  Pointer to **String** | the access item type. entitlement in this case | [optional] 
**Id** |  Pointer to **String** | the access item id | [optional] 
**DisplayName** |  Pointer to **String** | the access profile display name | [optional] 
**SourceName** |  Pointer to **String** | the associated source name if it exists | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemAppResponse = Initialize-PSSailpointBetaAccessItemAppResponse  -AccessType app `
 -Id 2c918087763e69d901763e72e97f006f `
 -DisplayName Display Name `
 -SourceName appName
```

- Convert the resource to JSON
```powershell
$AccessItemAppResponse | ConvertTo-JSON
```


[[Back to top]](#) 

