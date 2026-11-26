# HealthIndicatorCategory

# HealthIndicatorCategory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | [**[]HealthEvent**](health-event) | List of error events for this category | [optional] 
**Warnings** | [**[]HealthEvent**](health-event) | List of warning events for this category | [optional] 

## Examples

- Prepare the resource
```powershell
$HealthIndicatorCategory = Initialize-HealthIndicatorCategory  -Errors null `
 -Warnings null
```

- Convert the resource to JSON
```powershell
$HealthIndicatorCategory | ConvertTo-JSON
```


[[Back to top]](#) 

