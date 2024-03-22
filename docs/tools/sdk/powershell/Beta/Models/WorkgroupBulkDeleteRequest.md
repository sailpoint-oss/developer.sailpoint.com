---
id: workgroup-bulk-delete-request
title: WorkgroupBulkDeleteRequest
pagination_label: WorkgroupBulkDeleteRequest
sidebar_label: WorkgroupBulkDeleteRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkgroupBulkDeleteRequest'] 
slug: /tools/sdk/powershell/beta/models/workgroup-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'WorkgroupBulkDeleteRequest']
---


# WorkgroupBulkDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** |  Pointer to **[]String** | List of IDs of Governance Groups to be deleted. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkgroupBulkDeleteRequest = Initialize-PSSailpointBetaWorkgroupBulkDeleteRequest  -Ids [567a697e-885b-495a-afc5-d55e1c23a302, c7b0f7b2-1e78-4063-b294-a555333dacd2]
```

- Convert the resource to JSON
```powershell
$WorkgroupBulkDeleteRequest | ConvertTo-JSON
```


[[Back to top]](#) 

