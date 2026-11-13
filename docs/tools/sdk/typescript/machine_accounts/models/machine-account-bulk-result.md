# MachineAccountBulkResult

# MachineAccountBulkResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the machine account this result applies to. | [default to undefined]
**status** | **(optional)** `number` | HTTP-style status code for this machine account. `200` means the operation succeeded or was queued. Other values, such as `400`, `404` or `500`, describe why it failed. | [default to undefined]
**message** | **(optional)** `string` | A message that describes the outcome for this machine account. | [default to undefined]

