# SodPolicy

# SodPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Policy id | [optional] [readonly] 
**Name** | **String** | Policy Business Name | [optional] 
**Created** | **System.DateTime** | The time when this SOD policy is created. | [optional] [readonly] 
**Modified** | **System.DateTime** | The time when this SOD policy is modified. | [optional] [readonly] 
**Description** | **String** | Optional description of the SOD policy | [optional] 
**OwnerRef** | [**SodPolicyOwnerRef**](sod-policy-owner-ref) |  | [optional] 
**SecondaryOwnerRefs** | [**[]SodPolicySecondaryOwnerRefsInner**](sod-policy-secondary-owner-refs-inner) | Additional owners of the SOD policy.(Max 10). Applicable only to Conflicting Access Based policies. | [optional] 
**AllowedControls** | [**[]SodPolicyAllowedControlsInner**](sod-policy-allowed-controls-inner) | Compensating or other controls allowed for this policy.(Max 10). Applicable only to Conflicting Access Based policies. | [optional] 
**Level** |  **Enum** [  "CRITICAL",    "HIGH",    "MEDIUM",    "LOW" ] | Policy severity or priority level. Applicable only to Conflicting Access Based policies. If not specified, default will be HIGH. | [optional] 
**ExternalPolicyReference** | **String** | Optional External Policy Reference | [optional] 
**PolicyQuery** | **String** | Search query of the SOD policy | [optional] 
**CompensatingControls** | **String** | Optional compensating controls(Mitigating Controls) | [optional] 
**CorrectionAdvice** | **String** | Optional correction advice | [optional] 
**State** |  **Enum** [  "ENFORCED",    "NOT_ENFORCED" ] | whether the policy is enforced or not | [optional] 
**Tags** | **[]String** | tags for this policy object | [optional] 
**CreatorId** | **String** | Policy's creator ID | [optional] [readonly] 
**ModifierId** | **String** | Policy's modifier ID | [optional] [readonly] 
**ViolationOwnerAssignmentConfig** | [**ViolationOwnerAssignmentConfig**](violation-owner-assignment-config) |  | [optional] 
**Scheduled** | **Boolean** | defines whether a policy has been scheduled or not | [optional] [default to $false]
**Type** |  **Enum** [  "GENERAL",    "CONFLICTING_ACCESS_BASED" ] | whether a policy is query based or conflicting access based | [optional] [default to "GENERAL"]
**ConflictingAccessCriteria** | [**SodPolicyConflictingAccessCriteria**](sod-policy-conflicting-access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicy = Initialize-SodPolicy  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name policy-xyz `
 -Created 2020-01-01T00:00Z `
 -Modified 2020-01-01T00:00Z `
 -Description This policy ensures compliance of xyz `
 -OwnerRef null `
 -SecondaryOwnerRefs [{"type":"IDENTITY","id":"2c9180a46faadee4016fb4e018c20639","name":"Support"}] `
 -AllowedControls [{"type":"COMPENSATING_CONTROL","id":"2c9180a46faadee4016fb4e018c20639","name":"Mitigating Control 1"}] `
 -Level HIGH `
 -ExternalPolicyReference XYZ policy `
 -PolicyQuery @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf) `
 -CompensatingControls Have a manager review the transaction decisions for their "out of compliance" employee `
 -CorrectionAdvice Based on the role of the employee, managers should remove access that is not required for their job function. `
 -State ENFORCED `
 -Tags ["TAG1","TAG2"] `
 -CreatorId 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -ModifierId 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -ViolationOwnerAssignmentConfig null `
 -Scheduled true `
 -Type GENERAL `
 -ConflictingAccessCriteria null
```

- Convert the resource to JSON
```powershell
$SodPolicy | ConvertTo-JSON
```


[[Back to top]](#) 

