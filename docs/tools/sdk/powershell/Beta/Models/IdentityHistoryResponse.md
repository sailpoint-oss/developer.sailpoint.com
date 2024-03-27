---
id: identity-history-response
title: IdentityHistoryResponse
pagination_label: IdentityHistoryResponse
sidebar_label: IdentityHistoryResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityHistoryResponse'] 
slug: /tools/sdk/powershell/beta/models/identity-history-response
tags: ['SDK', 'Software Development Kit', 'IdentityHistoryResponse']
---


# IdentityHistoryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | the identity ID | [optional] 
**DisplayName** |  Pointer to **String** | the display name of the identity | [optional] 
**Snapshot** |  Pointer to **String** | the date when the identity record was created | [optional] 
**DeletedDate** |  Pointer to **String** | the date when the identity was deleted | [optional] 
**AccessItemCount** |  Pointer to **map[string]String** | A map containing the count of each access item | [optional] 
**Attributes** |  Pointer to **map[string]String** | A map containing the identity attributes | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityHistoryResponse = Initialize-PSSailpointBetaIdentityHistoryResponse  -Id bc693f07e7b645539626c25954c58554 `
 -DisplayName Adam Zampa `
 -Snapshot 2007-03-01T13:00:00.000Z `
 -DeletedDate 2007-03-01T13:00:00.000Z `
 -AccessItemCount null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$IdentityHistoryResponse | ConvertTo-JSON
```


[[Back to top]](#) 

