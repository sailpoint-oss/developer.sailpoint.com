# BucketAggregation

# BucketAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the bucket aggregate to be included in the result. | [required]
**Type** | **BucketType** |  | [optional] 
**Field** | **String** | The field to bucket on. Prefix the field name with '@' to reference a nested object. | [required]
**Size** | **Int32** | Maximum number of buckets to include. | [optional] 
**MinDocCount** | **Int32** | Minimum number of documents a bucket should have. | [optional] 

## Examples

- Prepare the resource
```powershell
$BucketAggregation = Initialize-BucketAggregation  -Name Identity Locations `
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

