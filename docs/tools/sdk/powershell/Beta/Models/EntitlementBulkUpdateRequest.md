---
id: entitlement-bulk-update-request
title: EntitlementBulkUpdateRequest
pagination_label: EntitlementBulkUpdateRequest
sidebar_label: EntitlementBulkUpdateRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'EntitlementBulkUpdateRequest'] 
slug: /tools/sdk/powershell/beta/models/entitlement-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'EntitlementBulkUpdateRequest']
---


# EntitlementBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementIds** |  **[]String** | List of entitlement ids to update | 
**JsonPatch** |  [**[]JsonPatchOperation**](json-patch-operation) |  | 

## Examples

- Prepare the resource
```powershell
$EntitlementBulkUpdateRequest = Initialize-BetaEntitlementBulkUpdateRequest  -EntitlementIds [2c91808a7624751a01762f19d665220d, 2c91808a7624751a01762f19d67c220e, 2c91808a7624751a01762f19d692220f] `
 -JsonPatch [{op=replace, path=/privileged, value=false}, {op=replace, path=/requestable, value=false}]
```

- Convert the resource to JSON
```powershell
$EntitlementBulkUpdateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

