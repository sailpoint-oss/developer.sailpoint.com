# SubtypeTargetSummary

# SubtypeTargetSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** | **SubtypeTargetType** |  | [optional] 
**TargetId** | **String** | Scope key. Connector type for `CONNECTOR`. Source id for `SOURCE`. | [optional] 
**TargetName** | **String** | Display label. Never null; falls back to `targetId`. | [optional] 
**SubtypeCount** | **Int32** | Number of subtypes in this target group. | [optional] 
**SourceCount** | **Int32** | Number of sources of this connector type for a `CONNECTOR` row. `1` on a `SOURCE` row. Sortable. Not filterable. | [optional] 
**LastModified** | **System.DateTime** | Latest `modified` timestamp in the `targetId` group for `CONNECTOR`, or that subtype row's `modified` for `SOURCE`. Not filterable or sortable. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$SubtypeTargetSummary = Initialize-SubtypeTargetSummary  -TargetType null `
 -TargetId JDBC `
 -TargetName JDBC `
 -SubtypeCount 3 `
 -SourceCount 12 `
 -LastModified 2026-08-18T12:00Z
```

- Convert the resource to JSON
```powershell
$SubtypeTargetSummary | ConvertTo-JSON
```


[[Back to top]](#) 

