# IdentitySnapshotSummaryResponse

# IdentitySnapshotSummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Snapshot** | **String** | the date when the identity record was created | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentitySnapshotSummaryResponse = Initialize-IdentitySnapshotSummaryResponse  -Snapshot 2007-03-01T13:00:00.000Z
```

- Convert the resource to JSON
```powershell
$IdentitySnapshotSummaryResponse | ConvertTo-JSON
```


[[Back to top]](#) 

