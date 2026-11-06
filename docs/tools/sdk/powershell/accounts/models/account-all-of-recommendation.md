# AccountAllOfRecommendation

# AccountAllOfRecommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "HUMAN",    "MACHINE" ] | Recommended type of account. | [required]
**Method** |  **Enum** [  "DISCOVERY",    "SOURCE",    "CRITERIA" ] | Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria. | [required]

## Examples

- Prepare the resource
```powershell
$AccountAllOfRecommendation = Initialize-AccountAllOfRecommendation  -Type MACHINE `
 -Method DISCOVERY
```

- Convert the resource to JSON
```powershell
$AccountAllOfRecommendation | ConvertTo-JSON
```


[[Back to top]](#) 

