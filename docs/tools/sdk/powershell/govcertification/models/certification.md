# Certification

# Certification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CampaignRef** | [**CampaignReference**](campaign-reference) |  | [required]
**Phase** | **CertificationPhase** |  | [required]
**ReviewProgress** | **CertificationReviewProgress** |  | [optional] 
**DueDate** | **System.DateTime** | The due date of the certification. | [required]
**DateSigned** | **System.DateTime** | The date the reviewer signed off on the certification. Omitted until the certification is signed off. | [optional] 
**DateFinished** | **System.DateTime** | The date the certification was finished. | [optional] 
**Reviewer** | [**CertificationReviewer**](certification-reviewer) |  | [required]
**Reassignment** | [**Reassignment**](reassignment) |  | [optional] 
**Completed** | **Boolean** | Indicates if all certification decisions have been made. | [required]
**DecisionsMade** | **Int32** | The number of approve/revoke/acknowledge decisions that have been made by the reviewer. | [required]
**DecisionsTotal** | **Int32** | The total number of approve/revoke/acknowledge decisions for the certification. | [required]
**CompletedSubjects** | **Int32** | The number of subjects (identities, access profiles, roles, etc.) for which all decisions have been made and are complete. | [required]
**TotalSubjects** | **Int32** | The total number of subjects (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | [required]
**Id** | **String** | The certificationId | [optional] 
**Name** | **String** | The name of the certification | [optional] 
**Created** | **System.DateTime** | The date the certification was created | [optional] 
**Modified** | **System.DateTime** | The date the certification was last modified | [optional] 
**ReauthRequired** | **Boolean** | Indicates whether any review items within this certification requires reauthentication before sign-off or completion | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Certification = Initialize-Certification  -CampaignRef null `
 -Phase null `
 -ReviewProgress null `
 -DueDate 2018-10-19T13:49:37.385Z `
 -DateSigned 2018-10-19T13:49:37.385Z `
 -DateFinished 2018-10-19T14:49:37.385Z `
 -Reviewer null `
 -Reassignment null `
 -Completed false `
 -DecisionsMade 20 `
 -DecisionsTotal 40 `
 -CompletedSubjects 5 `
 -TotalSubjects 10 `
 -Id ef38f943-47e9-4562-b5bb-8424a56397d8 `
 -Name Quarterly Access Review - Q4 2018 `
 -Created 2018-10-18T13:49:37.385Z `
 -Modified 2018-10-19T12:49:37.385Z `
 -ReauthRequired false
```

- Convert the resource to JSON
```powershell
$Certification | ConvertTo-JSON
```


[[Back to top]](#) 

