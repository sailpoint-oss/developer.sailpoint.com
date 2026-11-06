# JitactivationhistorydocumentSummaryPolicyMatchesInner

# JitactivationhistorydocumentSummaryPolicyMatchesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PolicyId** | **String** | UUID of the matched policy. | [optional] 
**PolicyName** | **String** | Display name of the matched policy. | [optional] 

## Examples

- Prepare the resource
```powershell
$JitactivationhistorydocumentSummaryPolicyMatchesInner = Initialize-JitactivationhistorydocumentSummaryPolicyMatchesInner  -PolicyId 4d79eca9-8a77-4d06-8297-9be9868906f1 `
 -PolicyName Austin Engineering Policy
```

- Convert the resource to JSON
```powershell
$JitactivationhistorydocumentSummaryPolicyMatchesInner | ConvertTo-JSON
```


[[Back to top]](#) 

