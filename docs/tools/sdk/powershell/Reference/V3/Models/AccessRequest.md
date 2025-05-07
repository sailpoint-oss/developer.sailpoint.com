---
id: access-request
title: AccessRequest
pagination_label: AccessRequest
sidebar_label: AccessRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequest', 'AccessRequest'] 
slug: /tools/sdk/powershell/v3/models/access-request
tags: ['SDK', 'Software Development Kit', 'AccessRequest', 'AccessRequest']
---


# AccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | **[]String** | A list of Identity IDs for whom the Access is requested. If it's a Revoke request, there can only be one Identity ID. | [required]
**RequestType** | [**AccessRequestType**](access-request-type) |  | [optional] 
**RequestedItems** | [**[]AccessRequestItem**](access-request-item) |  | [required]
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [optional] 
**RequestedForWithRequestedItems** | [**[]RequestedForDtoRef**](requested-for-dto-ref) | Additional submit data structure with requestedFor containing requestedItems allowing distinction for each request item and Identity. * Can only be used when 'requestedFor' and 'requestedItems' are not separately provided * Adds ability to specify which account the user wants the access on, in case they have multiple accounts on a source * Allows the ability to request items with different remove dates * Also allows different combinations of request items and identities in the same request  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequest = Initialize-AccessRequest  -RequestedFor 2c918084660f45d6016617daa9210584 `
 -RequestType null `
 -RequestedItems null `
 -ClientMetadata {requestedAppId=2c91808f7892918f0178b78da4a305a1, requestedAppName=test-app} `
 -RequestedForWithRequestedItems null
```

- Convert the resource to JSON
```powershell
$AccessRequest | ConvertTo-JSON
```


[[Back to top]](#) 

