# SourceDataset

# SourceDataset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Dataset identifier. Server-generated on create. | [optional] [readonly] 
**Name** | **String** | Display name of the dataset. Required on create. | [optional] 
**Description** | **String** | Description of the dataset. | [optional] 
**AggregationEnabled** | **Boolean** | Whether aggregation is enabled for this dataset on the source. | [optional] [default to $false]
**Resources** | [**[]SourceDatasetResourceReference**](source-dataset-resource-reference) | Simplified resource references associated with this dataset. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceDataset = Initialize-SourceDataset  -Id cmdb-servicenow:applications `
 -Name Applications `
 -Description CMDB application records for this source. `
 -AggregationEnabled true `
 -Resources null
```

- Convert the resource to JSON
```powershell
$SourceDataset | ConvertTo-JSON
```


[[Back to top]](#) 

