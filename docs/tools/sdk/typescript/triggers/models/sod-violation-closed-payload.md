# SODViolationClosedPayload

# SODViolationClosedPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **(optional)** `string` | When the violation record was created. | [default to undefined]
**modified** | **(optional)** `string` | When the violation was last modified. | [default to undefined]
**id** | **(optional)** `string` | Violation ID. | [default to undefined]
**lastEvaluatedDate** | **(optional)** `string` | When the violation was last evaluated. | [default to undefined]
**level** | **(optional)** `string` | Violation severity level. | [default to undefined]
**name** | **(optional)** `string` | Human-readable violation name. | [default to undefined]
**owner** | **(optional)** `SODViolationClosedPayloadOwner` |  | [default to undefined]
**policy** | **(optional)** `SODViolationClosedPayloadPolicy` |  | [default to undefined]
**previousStatus** | **(optional)** `string` | Violation status before closure (**Open** or **Mitigated**). | [default to undefined]
**currentStatus** | **(optional)** `string` | Violation status after the event (always **Closed** for this webhook). | [default to undefined]
**target** | **(optional)** `SODViolationClosedPayloadTarget` |  | [default to undefined]

