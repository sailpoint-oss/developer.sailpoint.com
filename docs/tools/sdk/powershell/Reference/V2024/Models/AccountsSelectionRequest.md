---
id: v2024-accounts-selection-request
title: AccountsSelectionRequest
pagination_label: AccountsSelectionRequest
sidebar_label: AccountsSelectionRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountsSelectionRequest', 'V2024AccountsSelectionRequest'] 
slug: /tools/sdk/powershell/v2024/models/accounts-selection-request
tags: ['SDK', 'Software Development Kit', 'AccountsSelectionRequest', 'V2024AccountsSelectionRequest']
---


# AccountsSelectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | **[]String** | A list of Identity IDs for whom the Access is requested. | [required]
**RequestType** | [**AccessRequestType**](access-request-type) |  | [optional] 
**RequestedItems** | [**[]AccessRequestItem**](access-request-item) |  | [required]
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities.   | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountsSelectionRequest = Initialize-V2024AccountsSelectionRequest  -RequestedFor 2c918084660f45d6016617daa9210584 `
 -RequestType null `
 -RequestedItems null `
 -ClientMetadata {requestedAppId=2c91808f7892918f0178b78da4a305a1, requestedAppName=test-app}
```

- Convert the resource to JSON
```powershell
$AccountsSelectionRequest | ConvertTo-JSON
```


[[Back to top]](#) 

