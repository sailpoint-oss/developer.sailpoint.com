# ReviewDecision

# ReviewDecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id of the Certification Item being decided on | [required]
**Decision** | **CertificationDecision** |  | [required]
**ProposedEndDate** | **System.DateTime** | The date at which a user's access should be taken away. Should only be set for `REVOKE` decisions. | [optional] 
**Recommendation** | [**ReviewRecommendation**](review-recommendation) |  | [optional] 
**Comments** | **String** | Comments recorded when the decision was made | [optional] 

## Examples

- Prepare the resource
```powershell
$ReviewDecision = Initialize-ReviewDecision  -Id ef38f943-47e9-4562-b5bb-8424a56397d8 `
 -Decision null `
 -ProposedEndDate 2017-07-11T18:45:37.098Z `
 -Recommendation null `
 -Comments This user no longer needs access to this source
```

- Convert the resource to JSON
```powershell
$ReviewDecision | ConvertTo-JSON
```


[[Back to top]](#) 

