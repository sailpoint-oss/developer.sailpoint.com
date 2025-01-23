---
id: access-request
title: AccessRequest
pagination_label: AccessRequest
sidebar_label: AccessRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequest'] 
slug: /tools/sdk/powershell/v2024/models/access-request
tags: ['SDK', 'Software Development Kit', 'AccessRequest']
---


# AccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** |  **[]String** | A list of Identity IDs for whom the Access is requested. If it's a Revoke request, there can only be one Identity ID. | [required]
**RequestType** |  Pointer to [**AccessRequestType**](access-request-type) |  | [optional] 
**RequestedItems** |  [**[]AccessRequestItem**](access-request-item) |  | [required]
**ClientMetadata** |  Pointer to **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequest = Initialize-PSSailpoint.V2024AccessRequest  -RequestedFor null `
 -RequestType null `
 -RequestedItems null `
 -ClientMetadata {requestedAppId&#x3D;2c91808f7892918f0178b78da4a305a1, requestedAppName&#x3D;test-app}
```

- Convert the resource to JSON
```powershell
$AccessRequest | ConvertTo-JSON
```


[[Back to top]](#) 

