# Policyviolationresponse

# Policyviolationresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The system-generated unique identifier of the policy violation. | [required][readonly] 
**Name** | **String** | The display name of the policy violation. | [optional] [readonly] 
**Created** | **System.DateTime** | The date and time when the policy violation was created. | [required][readonly] 
**Modified** | **System.DateTime** | The date and time when the policy violation was last modified. | [required][readonly] 
**LastEvaluatedDate** | **System.DateTime** | The date and time when the policy violation was last evaluated by the policy engine. | [optional] [readonly] 
**Owner** | [**Referenceresponse**](referenceresponse) |  | [required]
**ConflictingCriteria** | [**[]AccessCriteria**](access-criteria) | List of conflicting criteria. Each conflicting item supports optional description and optional sourceRef (id, name, type, description); for ENTITLEMENT items, sourceRef may be populated from the entitlement's source on GET via hydration.  | [required][readonly] 
**AppliedControls** | [**[]Appliedcontrol**](appliedcontrol) | List of compensating controls that have been applied to this policy violation. | [required][readonly] 
**Expiration** | **System.DateTime** | Expiration on the active applied compensating control row (latest applied_date, tie-break id). Always returned; null when there is no active control or that row has no expiration. | [required][readonly] 
**Target** | [**Referenceresponse**](referenceresponse) |  | [required]
**Policy** | [**Referenceresponse**](referenceresponse) |  | [required]
**Status** | **Policyviolationstatus** |  | [required]
**Level** | **Policyviolationrisklevel** |  | [required]

## Examples

- Prepare the resource
```powershell
$Policyviolationresponse = Initialize-Policyviolationresponse  -Id 3e078865-55ed-43cf-b83c-85c58d2016e6 `
 -Name Policy Violation 123 `
 -Created 2025-01-01T00:00-05:00 `
 -Modified 2025-01-01T02:00-05:00 `
 -LastEvaluatedDate 2025-01-01T01:00-05:00 `
 -Owner null `
 -ConflictingCriteria [{"name":"money-in","conflictingItems":[{"id":"2c9180866166b5b0016167c32ef31a66","name":"Administrator","type":"ENTITLEMENT"}]}] `
 -AppliedControls [{"id":"3e07886555ed43cfb83c85c58d2016e6","violation":"99fbef9738c146e9b526b6147f57a0e2","status":"Active"}] `
 -Expiration 2026-01-01T02:00-05:00 `
 -Target null `
 -Policy null `
 -Status null `
 -Level null
```

- Convert the resource to JSON
```powershell
$Policyviolationresponse | ConvertTo-JSON
```


[[Back to top]](#) 

