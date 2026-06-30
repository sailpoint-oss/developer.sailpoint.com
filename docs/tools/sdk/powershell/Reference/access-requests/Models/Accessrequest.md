---
id: accessrequest
title: Accessrequest
pagination_label: Accessrequest
sidebar_label: Accessrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequest', 'Accessrequest'] 
slug: /tools/sdk/powershell/accessrequests/models/accessrequest
tags: ['SDK', 'Software Development Kit', 'Accessrequest', 'Accessrequest']
---


# Accessrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | **[]String** | A list of Identity IDs for whom the Access is requested. If it's a Revoke request, there can only be one Identity ID. | [required]
**RequestType** | [**Accessrequesttype**](accessrequesttype) |  | [optional] 
**RequestedItems** | [**[]Accessrequestitem**](accessrequestitem) |  | [required]
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [optional] 
**RequestedForWithRequestedItems** | [**[]Requestedfordtoref**](requestedfordtoref) | Additional submit data structure with requestedFor containing requestedItems allowing distinction for each request item and Identity. * Can only be used when 'requestedFor' and 'requestedItems' are not separately provided * Adds ability to specify which account the user wants the access on, in case they have multiple accounts on a source * Allows the ability to request items with different start dates * Allows the ability to request items with different remove dates * Also allows different combinations of request items and identities in the same request * Only for use in GRANT_ACCESS type requests  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrequest = Initialize-Accessrequest  -RequestedFor 2c918084660f45d6016617daa9210584 `
 -RequestType null `
 -RequestedItems null `
 -ClientMetadata {"requestedAppId":"2c91808f7892918f0178b78da4a305a1","requestedAppName":"test-app"} `
 -RequestedForWithRequestedItems null
```

- Convert the resource to JSON
```powershell
$Accessrequest | ConvertTo-JSON
```


[[Back to top]](#) 

