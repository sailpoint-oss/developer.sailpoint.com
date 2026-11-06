# ReassignmentTrailReviewer

# ReassignmentTrailReviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the Identity | [optional] 
**Name** | **String** | Human-readable display name of the Identity | [optional] 

## Examples

- Prepare the resource
```powershell
$ReassignmentTrailReviewer = Initialize-ReassignmentTrailReviewer  -Id 0fbe863c063c4c88a35fd7f17e8a3df5 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$ReassignmentTrailReviewer | ConvertTo-JSON
```


[[Back to top]](#) 

