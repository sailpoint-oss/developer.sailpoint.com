# CertificationTask

# CertificationTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the task | [required]
**TargetId** | **String** | ID of the item for which the task is targeting | [optional] 
**Type** |  **Enum** [  "CREATE_CAMPAIGN",    "SEARCH_CAMPAIGN",    "GENERATE_CAMPAIGN",    "ACTIVATE_CAMPAIGN",    "COMPLETE_CAMPAIGN",    "COMPLETE_CERTIFICATION",    "REASSIGN_SUBJECTS_AND_ITEMS",    "REASSIGN_CERTIFICATIONS",    "FINISH_CAMPAIGN",    "FINALIZE_ACTIVATE_CAMPAIGN",    "DELETE_CAMPAIGN",    "DELETE_CAMPAIGN_DATA",    "FINISH_CERTIFICATION" ] | Type of the task | [optional] 
**TargetType** |  **Enum** [  "CERTIFICATION",    "CAMPAIGN" ] | Type of the item being targeted by the task | [optional] 
**Status** |  **Enum** [  "QUEUED",    "IN_PROGRESS",    "SUCCESS",    "ERROR" ] | Status of the task | [optional] 
**Errors** | [**[]ErrorMessageDto**](error-message-dto) | Generic localized reason for error | [optional] 
**ReassignmentTrails** | [**[]ReassignmentTrail**](reassignment-trail) | Reassignment trails that lead to self certification during the reassignment | [optional] 
**Created** | **System.DateTime** | Created time of the task | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$CertificationTask = Initialize-CertificationTask  -Id ef38f94347e94562b5bb8424a56397d8 `
 -TargetId e2e48c27-721c-4eb8-8622-2d7b46d8a6e7 `
 -Type REASSIGN_CERTIFICATIONS `
 -TargetType CERTIFICATION `
 -Status SUCCESS `
 -Errors null `
 -ReassignmentTrails null `
 -Created 2020-03-03T22:15:13.611Z
```

- Convert the resource to JSON
```powershell
$CertificationTask | ConvertTo-JSON
```


[[Back to top]](#) 

