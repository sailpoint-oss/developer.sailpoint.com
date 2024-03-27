---
id: bucket-aggregation
title: BucketAggregation
pagination_label: BucketAggregation
sidebar_label: BucketAggregation
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'BucketAggregation'] 
slug: /tools/sdk/powershell/v3/models/bucket-aggregation
tags: ['SDK', 'Software Development Kit', 'BucketAggregation']
---


# BucketAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | The name of the bucket aggregate to be included in the result. | 
**Type** |  Pointer to [**BucketType**](bucket-type) |  | [optional] 
**Field** |  **String** | The field to bucket on. Prefix the field name with &#39;@&#39; to reference a nested object. | 
**Size** |  Pointer to **Int32** | Maximum number of buckets to include. | [optional] 
**MinDocCount** |  Pointer to **Int32** | Minimum number of documents a bucket should have. | [optional] 

## Examples

- Prepare the resource
```powershell
$BucketAggregation = Initialize-PSSailpointBucketAggregation  -Name Identity Locations `
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

