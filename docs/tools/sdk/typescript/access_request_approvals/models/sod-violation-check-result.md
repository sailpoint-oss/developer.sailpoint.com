# SodViolationCheckResult

# SodViolationCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **(optional)** `ErrorMessageDto` |  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [default to undefined]
**violationContexts** | **(optional)** `Array<SodViolationContext>` |  | [default to undefined]
**violatedPolicies** | **(optional)** `Array<SodPolicyDto>` | A list of the SOD policies that were violated. | [default to undefined]

