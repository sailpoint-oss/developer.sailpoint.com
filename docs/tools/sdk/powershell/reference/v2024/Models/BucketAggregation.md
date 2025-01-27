---
id: v2024-bucket-aggregation
title: BucketAggregation
pagination_label: BucketAggregation
sidebar_label: BucketAggregation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BucketAggregation'] 
slug: /tools/sdk/powershell/v2024/models/bucket-aggregation
tags: ['SDK', 'Software Development Kit', 'BucketAggregation']
---


# BucketAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | The name of the bucket aggregate to be included in the result. | [required]
**Type** |  Pointer to [**BucketType**](bucket-type) |  | [optional] 
**Field** |  **String** | The field to bucket on. Prefix the field name with '@' to reference a nested object. | [required]
**Size** |  Pointer to **Int32** | Maximum number of buckets to include. | [optional] 
**MinDocCount** |  Pointer to **Int32** | Minimum number of documents a bucket should have. | [optional] 

## Examples

- Prepare the resource
```powershell
$BucketAggregation = Initialize-PSSailpoint.V2024BucketAggregation  -Name Identity Locations `
 -Type null `
 -Field attributes.city `
 -Size 100 `
 -MinDocCount 2
```

- Convert the resource to JSON
```powershell
$BucketAggregation | ConvertTo-JSON
```


[[Back to top]](#) 

