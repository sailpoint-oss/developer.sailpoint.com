# ReassignmentTrailDTO

# ReassignmentTrailDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousOwner** | **String** | The ID of previous owner identity. | [optional] 
**NewOwner** | **String** | The ID of new owner identity. | [optional] 
**ReassignmentType** | **String** | The type of reassignment. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReassignmentTrailDTO = Initialize-ReassignmentTrailDTO  -PreviousOwner ef38f94347e94562b5bb8424a56397d8 `
 -NewOwner ef38f94347e94562b5bb8424a56397a3 `
 -ReassignmentType AUTOMATIC_REASSIGNMENT
```

- Convert the resource to JSON
```powershell
$ReassignmentTrailDTO | ConvertTo-JSON
```


[[Back to top]](#) 

