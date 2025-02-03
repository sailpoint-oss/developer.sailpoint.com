---
id: beta-identity-history-response
title: IdentityHistoryResponse
pagination_label: IdentityHistoryResponse
sidebar_label: IdentityHistoryResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityHistoryResponse', 'BetaIdentityHistoryResponse'] 
slug: /tools/sdk/powershell/beta/models/identity-history-response
tags: ['SDK', 'Software Development Kit', 'IdentityHistoryResponse', 'BetaIdentityHistoryResponse']
---


# IdentityHistoryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the identity ID | [optional] 
**DisplayName** | **String** | the display name of the identity | [optional] 
**Snapshot** | **String** | the date when the identity record was created | [optional] 
**DeletedDate** | **String** | the date when the identity was deleted | [optional] 
**AccessItemCount** | **map[string]Int32** | A map containing the count of each access item | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A map containing the identity attributes | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityHistoryResponse = Initialize-PSSailpoint.BetaIdentityHistoryResponse  -Id bc693f07e7b645539626c25954c58554 `
 -DisplayName Adam Zampa `
 -Snapshot 2007-03-01T13:00:00.000Z `
 -DeletedDate 2007-03-01T13:00:00.000Z `
 -AccessItemCount {app&#x3D;0, role&#x3D;2, entitlement&#x3D;4, accessProfile&#x3D;3, account&#x3D;1} `
 -Attributes {jobTitle&#x3D;HR Manager, location&#x3D;NYC, firstname&#x3D;Adam, lastname&#x3D;Zampa, department&#x3D;HR}
```

- Convert the resource to JSON
```powershell
$IdentityHistoryResponse | ConvertTo-JSON
```


[[Back to top]](#) 

