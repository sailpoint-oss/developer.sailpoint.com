# ReassignmentTrail

# ReassignmentTrail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousReviewer** | [**ReassignmentTrailReviewer**](reassignment-trail-reviewer) |  | [optional] 
**NewReviewer** | [**ReassignmentTrailReviewer**](reassignment-trail-reviewer) |  | [optional] 
**ReassignmentType** |  **Enum** [  "AUTOMATIC_REASSIGNMENT",    "MANUAL_REASSIGNMENT",    "SELF_REVIEW_DELEGATION" ] | The type of reassignment. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReassignmentTrail = Initialize-ReassignmentTrail  -PreviousReviewer null `
 -NewReviewer null `
 -ReassignmentType AUTOMATIC_REASSIGNMENT
```

- Convert the resource to JSON
```powershell
$ReassignmentTrail | ConvertTo-JSON
```


[[Back to top]](#) 

