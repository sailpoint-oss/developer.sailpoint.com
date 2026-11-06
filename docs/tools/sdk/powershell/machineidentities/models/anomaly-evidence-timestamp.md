# AnomalyEvidenceTimestamp

# AnomalyEvidenceTimestamp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**At** | **System.DateTime** | Point-in-time the evidence was captured. | [optional] 
**VarFrom** | **System.DateTime** | Start of the aggregation window for time-window detections (SIEM); null for point-in-time detections (SENTINEL). | [optional] 

## Examples

- Prepare the resource
```powershell
$AnomalyEvidenceTimestamp = Initialize-AnomalyEvidenceTimestamp  -At 2026-07-13T10:14Z `
 -VarFrom 2026-07-13T09:00Z
```

- Convert the resource to JSON
```powershell
$AnomalyEvidenceTimestamp | ConvertTo-JSON
```


[[Back to top]](#) 

