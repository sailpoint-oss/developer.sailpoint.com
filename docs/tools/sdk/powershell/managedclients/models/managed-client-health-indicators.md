# ManagedClientHealthIndicators

# ManagedClientHealthIndicators

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | [**ManagedClientHealthIndicatorsBody**](managed-client-health-indicators-body) |  | [required]
**Status** |  **Enum** [  "NORMAL",    "UNDEFINED",    "WARNING",    "ERROR",    "FAILED" ] | Top-level status of the Managed Client | [required]
**Type** |  **Enum** [  "VA",    "CCG" ] | Type of the Managed Client | [required]
**Timestamp** | **System.DateTime** | Timestamp when this report was generated | [required]

## Examples

- Prepare the resource
```powershell
$ManagedClientHealthIndicators = Initialize-ManagedClientHealthIndicators  -Body null `
 -Status NORMAL `
 -Type VA `
 -Timestamp 2025-08-06T07:35:28.722300Z
```

- Convert the resource to JSON
```powershell
$ManagedClientHealthIndicators | ConvertTo-JSON
```


[[Back to top]](#) 

