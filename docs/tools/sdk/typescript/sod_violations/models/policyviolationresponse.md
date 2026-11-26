# Policyviolationresponse

# Policyviolationresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The system-generated unique identifier of the policy violation. | [readonly] [default to undefined]
**name** | **(optional)** `string` | The display name of the policy violation. | [readonly] [default to undefined]
**created** | `string` | The date and time when the policy violation was created. | [readonly] [default to undefined]
**modified** | `string` | The date and time when the policy violation was last modified. | [readonly] [default to undefined]
**lastEvaluatedDate** | **(optional)** `string` | The date and time when the policy violation was last evaluated by the policy engine. | [readonly] [default to undefined]
**owner** | `Referenceresponse` |  | [default to undefined]
**conflictingCriteria** | `Array<AccessCriteria>` | List of conflicting criteria. Each conflicting item supports optional description and optional sourceRef (id, name, type, description); for ENTITLEMENT items, sourceRef may be populated from the entitlement\'s source on GET via hydration.  | [readonly] [default to undefined]
**appliedControls** | `Array<Appliedcontrol>` | List of compensating controls that have been applied to this policy violation. | [readonly] [default to undefined]
**expiration** | `string` | Expiration on the active applied compensating control row (latest applied_date, tie-break id). Always returned; null when there is no active control or that row has no expiration. | [readonly] [default to undefined]
**target** | `Referenceresponse` |  | [default to undefined]
**policy** | `Referenceresponse` |  | [default to undefined]
**status** | `Policyviolationstatus` |  | [default to undefined]
**level** | `Policyviolationrisklevel` |  | [default to undefined]

