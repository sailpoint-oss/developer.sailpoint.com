# SodPolicy

# SodPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Policy id | [readonly] [default to undefined]
**name** | **(optional)** `string` | Policy Business Name | [default to undefined]
**created** | **(optional)** `string` | The time when this SOD policy is created. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | The time when this SOD policy is modified. | [readonly] [default to undefined]
**description** | **(optional)** `string` | Optional description of the SOD policy | [default to undefined]
**ownerRef** | **(optional)** `SodPolicyOwnerRef` |  | [default to undefined]
**secondaryOwnerRefs** | **(optional)** `Array<SodPolicySecondaryOwnerRefsInner>` | Additional owners of the SOD policy.(Max 10). Applicable only to Conflicting Access Based policies. | [default to undefined]
**allowedControls** | **(optional)** `Array<SodPolicyAllowedControlsInner>` | Compensating or other controls allowed for this policy.(Max 10). Applicable only to Conflicting Access Based policies. | [default to undefined]
**level** | **(optional)** `string` | Policy severity or priority level. Applicable only to Conflicting Access Based policies. If not specified, default will be HIGH. | [default to undefined]
**externalPolicyReference** | **(optional)** `string` | Optional External Policy Reference | [default to undefined]
**policyQuery** | **(optional)** `string` | Search query of the SOD policy | [default to undefined]
**compensatingControls** | **(optional)** `string` | Optional compensating controls(Mitigating Controls) | [default to undefined]
**correctionAdvice** | **(optional)** `string` | Optional correction advice | [default to undefined]
**state** | **(optional)** `string` | whether the policy is enforced or not | [default to undefined]
**tags** | **(optional)** `Array<string>` | tags for this policy object | [default to undefined]
**creatorId** | **(optional)** `string` | Policy\'s creator ID | [readonly] [default to undefined]
**modifierId** | **(optional)** `string` | Policy\'s modifier ID | [readonly] [default to undefined]
**violationOwnerAssignmentConfig** | **(optional)** `ViolationOwnerAssignmentConfig` |  | [default to undefined]
**scheduled** | **(optional)** `boolean` | defines whether a policy has been scheduled or not | [default to false]
**type** | **(optional)** `string` | whether a policy is query based or conflicting access based | [default to TypeEnum_General]
**conflictingAccessCriteria** | **(optional)** `SodPolicyConflictingAccessCriteria` |  | [default to undefined]

