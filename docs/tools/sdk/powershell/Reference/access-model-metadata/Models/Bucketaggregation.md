---
id: bucketaggregation
title: Bucketaggregation
pagination_label: Bucketaggregation
sidebar_label: Bucketaggregation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Bucketaggregation', 'Bucketaggregation'] 
slug: /tools/sdk/powershell/accessmodelmetadata/models/bucketaggregation
tags: ['SDK', 'Software Development Kit', 'Bucketaggregation', 'Bucketaggregation']
---


# Bucketaggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the bucket aggregate to be included in the result. | [required]
**Type** | [**Buckettype**](buckettype) |  | [optional] 
**Field** | **String** | The field to bucket on. Prefix the field name with '@' to reference a nested object. | [required]
**Size** | **Int32** | Maximum number of buckets to include. | [optional] 
**MinDocCount** | **Int32** | Minimum number of documents a bucket should have. | [optional] 

## Examples

- Prepare the resource
```powershell
$Bucketaggregation = Initialize-Bucketaggregation  -Name Identity Locations `
 -Type null `
 -Field attributes.city `
 -Size 100 `
 -MinDocCount 2
```

- Convert the resource to JSON
```powershell
$Bucketaggregation | ConvertTo-JSON
```


[[Back to top]](#) 

