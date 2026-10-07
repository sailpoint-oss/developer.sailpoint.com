# ApprovalComment

# ApprovalComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment provided either by the approval requester or the approver. | [required]
**Timestamp** | **System.DateTime** | The time when this comment was provided. | [required]
**User** | **String** | Name of the user that provided this comment. | [required]
**Id** | **String** | Id of the user that provided this comment. | [required]
**ChangedToStatus** |  **Enum** [  "PENDING_APPROVAL",    "APPROVED",    "REJECTED" ] | Status transition of the draft. | [required]

## Examples

- Prepare the resource
```powershell
$ApprovalComment = Initialize-ApprovalComment  -Comment Approval comment `
 -Timestamp 2021-05-11T22:23:16Z `
 -User user.name `
 -Id 549bf881-1ac4-4a64-9acf-6014e8a3a887 `
 -ChangedToStatus PENDING_APPROVAL
```

- Convert the resource to JSON
```powershell
$ApprovalComment | ConvertTo-JSON
```


[[Back to top]](#) 

