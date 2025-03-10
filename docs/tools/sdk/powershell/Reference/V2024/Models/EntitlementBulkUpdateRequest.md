---
id: v2024-entitlement-bulk-update-request
title: EntitlementBulkUpdateRequest
pagination_label: EntitlementBulkUpdateRequest
sidebar_label: EntitlementBulkUpdateRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementBulkUpdateRequest', 'V2024EntitlementBulkUpdateRequest'] 
slug: /tools/sdk/powershell/v2024/models/entitlement-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'EntitlementBulkUpdateRequest', 'V2024EntitlementBulkUpdateRequest']
---


# EntitlementBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementIds** | **[]String** | List of entitlement ids to update | [required]
**JsonPatch** | [**[]JsonPatchOperation**](json-patch-operation) |  | [required]

## Examples

- Prepare the resource
```powershell
$EntitlementBulkUpdateRequest = Initialize-PSSailpoint.V2024EntitlementBulkUpdateRequest  -EntitlementIds [2c91808a7624751a01762f19d665220d, 2c91808a7624751a01762f19d67c220e, 2c91808a7624751a01762f19d692220f] `
 -JsonPatch [{op=replace, path=/privileged, value=false}, {op=replace, path=/requestable, value=false}]
```

- Convert the resource to JSON
```powershell
$EntitlementBulkUpdateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

