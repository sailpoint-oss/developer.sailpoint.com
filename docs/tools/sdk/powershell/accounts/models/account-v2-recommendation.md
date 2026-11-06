# AccountV2Recommendation

# AccountV2Recommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "HUMAN",    "MACHINE" ] | Recommended type of account. | [optional] 
**Method** |  **Enum** [  "DISCOVERY",    "SOURCE",    "CRITERIA" ] | Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria. | [optional] 
**MachineLikelihood** | **Int32** | Ranked likelihood that this account is a machine account. Present when machine-account recommendation enrichment is available for the tenant. | [optional] 
**Explanation** | **[]String** | Reasons supporting the machine-account recommendation. Never null; an empty array when no explanation is available. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountV2Recommendation = Initialize-AccountV2Recommendation  -Type MACHINE `
 -Method DISCOVERY `
 -MachineLikelihood 3 `
 -Explanation ["AD_GMSA"]
```

- Convert the resource to JSON
```powershell
$AccountV2Recommendation | ConvertTo-JSON
```


[[Back to top]](#) 

