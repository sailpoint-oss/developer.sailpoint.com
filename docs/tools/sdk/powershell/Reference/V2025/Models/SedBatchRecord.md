---
id: v2025-sed-batch-record
title: SedBatchRecord
pagination_label: SedBatchRecord
sidebar_label: SedBatchRecord
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedBatchRecord', 'V2025SedBatchRecord'] 
slug: /tools/sdk/powershell/v2025/models/sed-batch-record
tags: ['SDK', 'Software Development Kit', 'SedBatchRecord', 'V2025SedBatchRecord']
---


# SedBatchRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TenantId** | **String** | The tenant ID associated with the batch. | [optional] 
**BatchId** | **String** | The unique ID of the batch. | [optional] 
**Name** | **String** | The name of the batch. | [optional] 
**ProcessedState** | **String** | The current state of the batch (e.g., submitted, materialized, completed). | [optional] 
**RequestedBy** | **String** | The ID of the user who requested the batch. | [optional] 
**MaterializedCount** | **Int32** | The number of items materialized in the batch. | [optional] 
**ProcessedCount** | **Int32** | The number of items processed in the batch. | [optional] 
**CreatedAt** | **System.DateTime** | The timestamp when the batch was created. | [optional] 
**UpdatedAt** | **System.DateTime** | The timestamp when the batch was last updated. | [optional] 

## Examples

- Prepare the resource
```powershell
$SedBatchRecord = Initialize-V2025SedBatchRecord  -TenantId 123e4567-e89b-12d3-a456-426614174000 `
 -BatchId 016629d1-1d25-463f-97f3-0c6686846650 `
 -Name Example Batch Name `
 -ProcessedState submitted | materialized | completed | failed `
 -RequestedBy 987e6543-e21b-45d3-b123-123456789abc `
 -MaterializedCount 50 `
 -ProcessedCount 45 `
 -CreatedAt 2023-10-01T12:00Z `
 -UpdatedAt 2023-10-02T15:30Z
```

- Convert the resource to JSON
```powershell
$SedBatchRecord | ConvertTo-JSON
```


[[Back to top]](#) 

