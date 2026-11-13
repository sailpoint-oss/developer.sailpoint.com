# SODViolationClosedPayload

# SODViolationClosedPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | **System.DateTime** | When the violation record was created. | [optional] 
**Modified** | **System.DateTime** | When the violation was last modified. | [optional] 
**Id** | **String** | Violation ID. | [optional] 
**LastEvaluatedDate** | **System.DateTime** | When the violation was last evaluated. | [optional] 
**Level** | **String** | Violation severity level. | [optional] 
**Name** | **String** | Human-readable violation name. | [optional] 
**Owner** | [**SODViolationClosedPayloadOwner**](sod-violation-closed-payload-owner) |  | [optional] 
**Policy** | [**SODViolationClosedPayloadPolicy**](sod-violation-closed-payload-policy) |  | [optional] 
**PreviousStatus** |  **Enum** [  "Open",    "Mitigated" ] | Violation status before closure (**Open** or **Mitigated**). | [optional] 
**CurrentStatus** |  **Enum** [  "Closed" ] | Violation status after the event (always **Closed** for this webhook). | [optional] 
**Target** | [**SODViolationClosedPayloadTarget**](sod-violation-closed-payload-target) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SODViolationClosedPayload = Initialize-SODViolationClosedPayload  -Created 2026-03-04T22:51:24.535433Z `
 -Modified 2026-03-04T22:51:24.535433Z `
 -Id 230bb065e18641f9bd6985ea9cf2e1a4 `
 -LastEvaluatedDate 2026-03-04T22:51:22.158Z `
 -Level High `
 -Name Violation for 01ea1d94-5db1-4444-a235-6f71c22b3449 - Target 2c9180888380236101838062022f00ea `
 -Owner null `
 -Policy null `
 -PreviousStatus Mitigated `
 -CurrentStatus Closed `
 -Target null
```

- Convert the resource to JSON
```powershell
$SODViolationClosedPayload | ConvertTo-JSON
```


[[Back to top]](#) 

