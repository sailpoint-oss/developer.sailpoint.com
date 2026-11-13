# SODViolationReopenedPayload

# SODViolationReopenedPayload

JSON body delivered for the **SODViolationReopened** webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | When the violation record was created. | [optional] 
**modified** | **datetime** | When the violation was last modified. | [optional] 
**id** | **str** | Violation ID. | [optional] 
**last_evaluated_date** | **datetime** | When the violation was last evaluated. | [optional] 
**level** | **str** | Violation severity level. | [optional] 
**name** | **str** | Human-readable violation name. | [optional] 
**owner** | [**SODViolationCreatedPayloadOwner**](sod-violation-created-payload-owner) |  | [optional] 
**policy** | [**SODViolationCreatedPayloadPolicy**](sod-violation-created-payload-policy) |  | [optional] 
**previous_status** | **str** | Violation status before the reopen. | [optional] 
**current_status** | **str** | Violation status after the reopen. | [optional] 
**target** | [**SODViolationCreatedPayloadTarget**](sod-violation-created-payload-target) |  | [optional] 
**reason** |  **Enum** [  'Conflicting Criteria Updated',    'Applied Control Expired' ] | Why the violation was reopened. | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.sod_violation_reopened_payload import SODViolationReopenedPayload

sod_violation_reopened_payload = SODViolationReopenedPayload(
created='2026-03-04T22:51:24.535433Z',
modified='2026-03-05T22:51:24.535433Z',
id='230bb065e18641f9bd6985ea9cf2e1a4',
last_evaluated_date='2026-03-05T22:51:22.158Z',
level='High',
name='Violation for 01ea1d94-5db1-4444-a235-6f71c22b3449 - Target 2c9180888380236101838062022f00ea',
owner=sailpoint.triggers.models.sod_violation_created_payload_owner.SODViolationCreatedPayload_owner(
                    id = '2c918088837fe14901838062029a04bf', 
                    type = 'IDENTITY', ),
policy=sailpoint.triggers.models.sod_violation_created_payload_policy.SODViolationCreatedPayload_policy(
                    id = '01ea1d94-5db1-4444-a235-6f71c22b3449', 
                    type = 'SOD', ),
previous_status='Mitigated',
current_status='Open',
target=sailpoint.triggers.models.sod_violation_created_payload_target.SODViolationCreatedPayload_target(
                    id = '2c9180888380236101838062022f00ea', 
                    type = 'IDENTITY', ),
reason='Conflicting Criteria Updated'
)

```
[[Back to top]](#) 

