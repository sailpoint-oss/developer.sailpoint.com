# SourceEntitlementAccessRequestConfigMaxPermittedAccessDuration

# SourceEntitlementAccessRequestConfigMaxPermittedAccessDuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **Int32** | The numeric value of the duration. | [optional] 
**TimeUnit** |  **Enum** [  "HOURS",    "DAYS",    "WEEKS",    "MONTHS" ] | The time unit for the duration. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceEntitlementAccessRequestConfigMaxPermittedAccessDuration = Initialize-SourceEntitlementAccessRequestConfigMaxPermittedAccessDuration  -Value 5 `
 -TimeUnit DAYS
```

- Convert the resource to JSON
```powershell
$SourceEntitlementAccessRequestConfigMaxPermittedAccessDuration | ConvertTo-JSON
```


[[Back to top]](#) 

