# AdminReviewReassignReassignTo

# AdminReviewReassignReassignTo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The identity ID to which the review is being assigned. | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | The type of the ID provided. | [optional] 

## Examples

- Prepare the resource
```powershell
$AdminReviewReassignReassignTo = Initialize-AdminReviewReassignReassignTo  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$AdminReviewReassignReassignTo | ConvertTo-JSON
```


[[Back to top]](#) 

