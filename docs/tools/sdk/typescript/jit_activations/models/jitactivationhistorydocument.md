# Jitactivationhistorydocument

# Jitactivationhistorydocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique identifier of the activation record. | [default to undefined]
**tenantId** | **(optional)** `string` | Tenant (pod/org) identifier. | [default to undefined]
**identityId** | **(optional)** `string` | Identifier of the identity that requested activation. | [default to undefined]
**accountId** | **(optional)** `string` | Identifier of the account on which the entitlement was provisioned. | [default to undefined]
**entitlementId** | **(optional)** `string` | Identifier of the entitlement that was activated. | [default to undefined]
**sourceId** | **(optional)** `string` | Identifier of the source that owns the entitlement. | [default to undefined]
**connectionId** | **(optional)** `string` | Identifier of the entitlement connection used for this activation. | [default to undefined]
**identityName** | **(optional)** `string` | Display name of the identity. | [default to undefined]
**entitlementName** | **(optional)** `string` | Display name of the entitlement. | [default to undefined]
**sourceDisplayName** | **(optional)** `string` | Display name of the source. | [default to undefined]
**policyDisplayNames** | **(optional)** `Array<string>` | Display names of the JIT policies that matched this activation. | [default to undefined]
**status** | **(optional)** `string` | Current or final status of the activation workflow. Possible values: ACTIVATING, AWAITING_FRICTIONS, PROVISIONING, PROVISIONED, DEPROVISIONING, COMPLETE, CANCELLED, ERROR, TIMED_OUT, REVOKED. | [default to undefined]
**error** | **(optional)** `string` | Error message if the activation ended in an ERROR state. | [default to undefined]
**policyFrictionOutcome** | **(optional)** `string` | Outcome of policy friction evaluation (e.g. SUCCESS_ENFORCED, BYPASSED). | [default to undefined]
**policyMatchDetails** | **(optional)** `Array<string>` | UUIDs of the policy records that matched this activation. | [default to undefined]
**activationInitiated** | **(optional)** `string` | Timestamp when the activation was initiated. | [default to undefined]
**provisionStart** | **(optional)** `string` | Timestamp when provisioning started. | [default to undefined]
**provisionCompleted** | **(optional)** `string` | Timestamp when provisioning completed. | [default to undefined]
**deprovisionStart** | **(optional)** `string` | Timestamp when deprovisioning started. | [default to undefined]
**deprovisionComplete** | **(optional)** `string` | Timestamp when deprovisioning completed. | [default to undefined]
**provisionDurationMins** | **(optional)** `number` | Duration of the provisioning phase in minutes. | [default to undefined]
**deprovisionDurationMins** | **(optional)** `number` | Duration of the deprovisioning phase in minutes. | [default to undefined]
**summary** | **(optional)** `JitactivationhistorydocumentSummary` |  | [default to undefined]
**frictions** | **(optional)** `Array<JitactivationhistorydocumentFrictionsInner>` | Individual friction items presented to the user during activation (e.g. TICKET, JUSTIFICATION, REAUTH). Null when no friction was evaluated. | [default to undefined]
**activationDetails** | **(optional)**  | Additional structured metadata about the activation. Shape is subject to change. | [default to undefined]
**activationDuration** | **(optional)**  | Duration breakdown of the full activation lifecycle. Shape is subject to change. | [default to undefined]
**provisioningDetails** | **(optional)**  | Low-level provisioning operation detail. Shape is subject to change. | [default to undefined]

