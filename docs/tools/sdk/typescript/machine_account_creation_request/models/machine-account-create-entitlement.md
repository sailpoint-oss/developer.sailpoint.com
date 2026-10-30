# MachineAccountCreateEntitlement

# MachineAccountCreateEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | ID of the entitlement to request. | [default to undefined]
**comment** | **(optional)** `string` | Comment to include with the entitlement request. | [default to undefined]
**startDate** | **(optional)** `string` | Date and time when access to the entitlement starts. Must be in the future and, when `removeDate` is also set, before `removeDate`. | [default to undefined]
**removeDate** | **(optional)** `string` | Date and time when access to the entitlement is removed. Must be in the future. | [default to undefined]

