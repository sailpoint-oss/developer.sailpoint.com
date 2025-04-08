---
id: v2025-bucket-aggregation
title: BucketAggregation
pagination_label: BucketAggregation
sidebar_label: BucketAggregation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BucketAggregation', 'V2025BucketAggregation'] 
slug: /tools/sdk/powershell/v2025/models/bucket-aggregation
tags: ['SDK', 'Software Development Kit', 'BucketAggregation', 'V2025BucketAggregation']
---


# BucketAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the bucket aggregate to be included in the result. | [required]
**Type** | [**BucketType**](bucket-type) |  | [optional] 
**Field** | **String** | The field to bucket on. Prefix the field name with '@' to reference a nested object. | [required]
**Size** | **Int32** | Maximum number of buckets to include. | [optional] 
**MinDocCount** | **Int32** | Minimum number of documents a bucket should have. | [optional] 

## Examples

- Prepare the resource
```powershell
$BucketAggregation = Initialize-PSSailpoint.V2025BucketAggregation  -Name Identity Locations `
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

