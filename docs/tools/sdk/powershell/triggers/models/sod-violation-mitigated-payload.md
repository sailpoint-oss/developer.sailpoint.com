# SODViolationMitigatedPayload

# SODViolationMitigatedPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppliedControls** | [**[]SODViolationMitigatedPayloadAppliedControlsInner**](sod-violation-mitigated-payload-applied-controls-inner) | Controls applied to mitigate the violation. For now this lists the currently active application(s). | [optional] 
**Created** | **System.DateTime** | When the violation record was created. | [optional] 
**Expiration** | **System.DateTime** | Violation-level expiration (may be a sentinel when not set). | [optional] 
**Id** | **String** | Violation ID. | [optional] 
**LastEvaluatedDate** | **System.DateTime** | When the violation was last evaluated. | [optional] 
**Level** | **String** | Violation severity level. | [optional] 
**Modified** | **System.DateTime** | When the violation was last modified. | [optional] 
**Name** | **String** | Human-readable violation name. | [optional] 
**Owner** | [**SODViolationMitigatedPayloadOwner**](sod-violation-mitigated-payload-owner) |  | [optional] 
**Policy** | [**SODViolationCreatedPayloadPolicy**](sod-violation-created-payload-policy) |  | [optional] 
**Status** | **String** | Violation lifecycle status after mitigation. | [optional] 
**Target** | [**SODViolationCreatedPayloadTarget**](sod-violation-created-payload-target) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SODViolationMitigatedPayload = Initialize-SODViolationMitigatedPayload  -AppliedControls null `
 -Created 2026-03-04T22:51:24.535433Z `
 -Expiration 2026-04-04T22:51:24.535433Z `
 -Id 230bb065e18641f9bd6985ea9cf2e1a4 `
 -LastEvaluatedDate 2026-03-05T22:51:22.158Z `
 -Level High `
 -Modified 2026-03-05T22:51:24.535433Z `
 -Name Violation for 01ea1d94-5db1-4444-a235-6f71c22b3449 - Target 2c9180888380236101838062022f00ea `
 -Owner null `
 -Policy null `
 -Status Mitigated `
 -Target null
```

- Convert the resource to JSON
```powershell
$SODViolationMitigatedPayload | ConvertTo-JSON
```


[[Back to top]](#) 

