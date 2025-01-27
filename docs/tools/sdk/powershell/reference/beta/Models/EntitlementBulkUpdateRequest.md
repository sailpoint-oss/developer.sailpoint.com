---
id: entitlement-bulk-update-request
title: EntitlementBulkUpdateRequest
pagination_label: EntitlementBulkUpdateRequest
sidebar_label: EntitlementBulkUpdateRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementBulkUpdateRequest'] 
slug: /tools/sdk/powershell/beta/models/entitlement-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'EntitlementBulkUpdateRequest']
---


# EntitlementBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementIds** |  **[]String** | List of entitlement ids to update | [required]
**JsonPatch** |  [**[]JsonPatchOperation**](json-patch-operation) |  | [required]

## Examples

- Prepare the resource
```powershell
$EntitlementBulkUpdateRequest = Initialize-PSSailpoint.BetaEntitlementBulkUpdateRequest  -EntitlementIds [2c91808a7624751a01762f19d665220d, 2c91808a7624751a01762f19d67c220e, 2c91808a7624751a01762f19d692220f] `
 -JsonPatch [{op&#x3D;replace, path&#x3D;/privileged, value&#x3D;false}, {op&#x3D;replace, path&#x3D;/requestable, value&#x3D;false}]
```

- Convert the resource to JSON
```powershell
$EntitlementBulkUpdateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

