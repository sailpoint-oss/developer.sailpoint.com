# MachineAccountCreateEntitlement

# MachineAccountCreateEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Entitlement id to provision. Not required to be a UUID. | [default to undefined]
**comment** | **(optional)** `string` | Justification stored with the entitlement request. | [default to '']
**startDate** | **(optional)** `string` | When access starts. Must be in the future and before `removeDate` when both are set. | [default to undefined]
**removeDate** | **(optional)** `string` | When access ends. Must be in the future and after `startDate` when both are set. | [default to undefined]

