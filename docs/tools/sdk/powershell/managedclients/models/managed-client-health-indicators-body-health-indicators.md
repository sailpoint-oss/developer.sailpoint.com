# ManagedClientHealthIndicatorsBodyHealthIndicators

# ManagedClientHealthIndicatorsBodyHealthIndicators

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Container** | [**HealthIndicatorCategory**](health-indicator-category) |  | [optional] 
**Memory** | [**HealthIndicatorCategory**](health-indicator-category) |  | [optional] 
**Cpu** | [**HealthIndicatorCategory**](health-indicator-category) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClientHealthIndicatorsBodyHealthIndicators = Initialize-ManagedClientHealthIndicatorsBodyHealthIndicators  -Container null `
 -Memory null `
 -Cpu null
```

- Convert the resource to JSON
```powershell
$ManagedClientHealthIndicatorsBodyHealthIndicators | ConvertTo-JSON
```


[[Back to top]](#) 

