# SegmentMembership

# SegmentMembership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Segments** | **[]String** | List of segment ids that the identity is associated with. | [optional] 
**AllAccessScopes** | **[]ScopeType** | They type of scopes that are assigned to the identity. | [optional] 
**RefreshBy** | **System.DateTime** | Date time string that lets you know when the membership data is going to be refreshed. | [optional] 

## Examples

- Prepare the resource
```powershell
$SegmentMembership = Initialize-SegmentMembership  -Segments null `
 -AllAccessScopes null `
 -RefreshBy 2020-01-01T00:00Z
```

- Convert the resource to JSON
```powershell
$SegmentMembership | ConvertTo-JSON
```


[[Back to top]](#) 

