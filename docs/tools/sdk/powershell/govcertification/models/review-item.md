# ReviewItem

# ReviewItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The review item's ID | [optional] 
**Type** | **CertificationItemType** |  | [optional] 
**Completed** | **Boolean** | Indicates whether the review item is complete | [optional] [default to $false]
**NewAccess** | **Boolean** | Indicates whether the review item is for new access to a source | [optional] [default to $false]
**Decision** | **CertificationDecision** |  | [optional] 
**ProposedEndDate** | **System.DateTime** | The end date proposed as part of decision to sunset a user's access | [optional] 
**Comments** | **String** | Comments for this review item | [optional] 
**ReviewData** | [**ReviewData**](review-data) |  | [optional] 
**CertificationSubjectSummary** | [**CertificationSubjectSummary**](certification-subject-summary) |  | [optional] 
**Actor** | [**IdentityReference**](identity-reference) |  | [optional] 
**AccountName** | **String** | The name of the account to which this access profile belongs | [optional] 
**SourceName** | **String** | The name of the source for which this access profile belongs | [optional] 
**ReauthRequired** | **Boolean** | Indicates whether the review item requires a reauthentication for the approver | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ReviewItem = Initialize-ReviewItem  -Id ef38f943-47e9-4562-b5bb-8424a56397d8 `
 -Type null `
 -Completed false `
 -NewAccess false `
 -Decision null `
 -ProposedEndDate 2021-12-25T00:00Z `
 -Comments This user is still fulfulling this role `
 -ReviewData null `
 -CertificationSubjectSummary null `
 -Actor null `
 -AccountName Alison Ferguson `
 -SourceName ODS-AD-Source `
 -ReauthRequired false
```

- Convert the resource to JSON
```powershell
$ReviewItem | ConvertTo-JSON
```


[[Back to top]](#) 

