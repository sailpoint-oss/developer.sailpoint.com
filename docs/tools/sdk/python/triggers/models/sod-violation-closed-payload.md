# SODViolationClosedPayload

# SODViolationClosedPayload

JSON body delivered for the **SODViolationClosed** webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | When the violation record was created. | [optional] 
**modified** | **datetime** | When the violation was last modified. | [optional] 
**id** | **str** | Violation ID. | [optional] 
**last_evaluated_date** | **datetime** | When the violation was last evaluated. | [optional] 
**level** | **str** | Violation severity level. | [optional] 
**name** | **str** | Human-readable violation name. | [optional] 
**owner** | [**SODViolationClosedPayloadOwner**](sod-violation-closed-payload-owner) |  | [optional] 
**policy** | [**SODViolationClosedPayloadPolicy**](sod-violation-closed-payload-policy) |  | [optional] 
**previous_status** |  **Enum** [  'Open',    'Mitigated' ] | Violation status before closure (**Open** or **Mitigated**). | [optional] 
**current_status** |  **Enum** [  'Closed' ] | Violation status after the event (always **Closed** for this webhook). | [optional] 
**target** | [**SODViolationClosedPayloadTarget**](sod-violation-closed-payload-target) |  | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.sod_violation_closed_payload import SODViolationClosedPayload

sod_violation_closed_payload = SODViolationClosedPayload(
created='2026-03-04T22:51:24.535433Z',
modified='2026-03-04T22:51:24.535433Z',
id='230bb065e18641f9bd6985ea9cf2e1a4',
last_evaluated_date='2026-03-04T22:51:22.158Z',
level='High',
name='Violation for 01ea1d94-5db1-4444-a235-6f71c22b3449 - Target 2c9180888380236101838062022f00ea',
owner=sailpoint.triggers.models.sod_violation_closed_payload_owner.SODViolationClosedPayload_owner(
                    id = '2c918088837fe14901838062029a04bf', 
                    type = 'IDENTITY', ),
policy=sailpoint.triggers.models.sod_violation_closed_payload_policy.SODViolationClosedPayload_policy(
                    id = '01ea1d945db14444a2356f71c22b3449', 
                    type = 'SOD', ),
previous_status='Mitigated',
current_status='Closed',
target=sailpoint.triggers.models.sod_violation_closed_payload_target.SODViolationClosedPayload_target(
                    id = '2c9180888380236101838062022f00ea', 
                    type = 'IDENTITY', )
)

```
[[Back to top]](#) 

