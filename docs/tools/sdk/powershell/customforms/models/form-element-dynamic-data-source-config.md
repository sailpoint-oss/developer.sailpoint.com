# FormElementDynamicDataSourceConfig

# FormElementDynamicDataSourceConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AggregationBucketField** | **String** | AggregationBucketField is the aggregation bucket field name | [optional] 
**Indices** | **[]String** | Indices is a list of indices to use | [optional] 
**ObjectType** |  **Enum** [  "IDENTITY",    "ACCESS_PROFILE",    "SOURCES",    "ROLE",    "ENTITLEMENT" ] | ObjectType is a PreDefinedSelectOption value IDENTITY PreDefinedSelectOptionIdentity ACCESS_PROFILE PreDefinedSelectOptionAccessProfile SOURCES PreDefinedSelectOptionSources ROLE PreDefinedSelectOptionRole ENTITLEMENT PreDefinedSelectOptionEntitlement | [optional] 
**Query** | **String** | Query is a text | [optional] 

## Examples

- Prepare the resource
```powershell
$FormElementDynamicDataSourceConfig = Initialize-FormElementDynamicDataSourceConfig  -AggregationBucketField attributes.cloudStatus.exact `
 -Indices ["identities"] `
 -ObjectType IDENTITY `
 -Query *
```

- Convert the resource to JSON
```powershell
$FormElementDynamicDataSourceConfig | ConvertTo-JSON
```


[[Back to top]](#) 

