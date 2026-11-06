# SODViolationMitigatedPayload

# SODViolationMitigatedPayload

JSON body delivered for the **SODViolationMitigated** webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_controls** | [**[]SODViolationMitigatedPayloadAppliedControlsInner**](sod-violation-mitigated-payload-applied-controls-inner) | Controls applied to mitigate the violation. For now this lists the currently active application(s). | [optional] 
**created** | **datetime** | When the violation record was created. | [optional] 
**expiration** | **datetime** | Violation-level expiration (may be a sentinel when not set). | [optional] 
**id** | **str** | Violation ID. | [optional] 
**last_evaluated_date** | **datetime** | When the violation was last evaluated. | [optional] 
**level** | **str** | Violation severity level. | [optional] 
**modified** | **datetime** | When the violation was last modified. | [optional] 
**name** | **str** | Human-readable violation name. | [optional] 
**owner** | [**SODViolationMitigatedPayloadOwner**](sod-violation-mitigated-payload-owner) |  | [optional] 
**policy** | [**SODViolationCreatedPayloadPolicy**](sod-violation-created-payload-policy) |  | [optional] 
**status** | **str** | Violation lifecycle status after mitigation. | [optional] 
**target** | [**SODViolationCreatedPayloadTarget**](sod-violation-created-payload-target) |  | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.sod_violation_mitigated_payload import SODViolationMitigatedPayload

sod_violation_mitigated_payload = SODViolationMitigatedPayload(
applied_controls=[
                    sailpoint.triggers.models.sod_violation_mitigated_payload_applied_controls_inner.SODViolationMitigatedPayload_appliedControls_inner(
                        applied_date = '2026-03-05T22:51:24.535433Z', 
                        applier = sailpoint.triggers.models.sod_violation_mitigated_payload_applied_controls_inner_applier.SODViolationMitigatedPayload_appliedControls_inner_applier(
                            id = '2c918088837fe14901838062029a04bf', 
                            type = 'IDENTITY', ), 
                        comments = 'Applied compensating control to mitigate violation while awaiting access review.', 
                        control = sailpoint.triggers.models.sod_violation_mitigated_payload_applied_controls_inner_control.SODViolationMitigatedPayload_appliedControls_inner_control(
                            id = '01ea1d945db14444a2356f71c22b3449', 
                            type = 'COMPENSATING_CONTROL', ), 
                        expiration = '2026-04-05T22:51:24.535433Z', 
                        id = '230bb065e18641f9bd6985ea9cf2e1a4', 
                        status = 'Active', 
                        violation = '230bb065e18641f9bd6985ea9cf2e1a4', 
                        workflow_id = '2c918088837fe14901838062029a04bf', )
                    ],
created='2026-03-04T22:51:24.535433Z',
expiration='2026-04-04T22:51:24.535433Z',
id='230bb065e18641f9bd6985ea9cf2e1a4',
last_evaluated_date='2026-03-05T22:51:22.158Z',
level='High',
modified='2026-03-05T22:51:24.535433Z',
name='Violation for 01ea1d94-5db1-4444-a235-6f71c22b3449 - Target 2c9180888380236101838062022f00ea',
owner=sailpoint.triggers.models.sod_violation_mitigated_payload_owner.SODViolationMitigatedPayload_owner(
                    id = '2c918088837fe14901838062029a04bf', 
                    type = 'IDENTITY', ),
policy=sailpoint.triggers.models.sod_violation_created_payload_policy.SODViolationCreatedPayload_policy(
                    id = '01ea1d94-5db1-4444-a235-6f71c22b3449', 
                    type = 'SOD', ),
status='Mitigated',
target=sailpoint.triggers.models.sod_violation_created_payload_target.SODViolationCreatedPayload_target(
                    id = '2c9180888380236101838062022f00ea', 
                    type = 'IDENTITY', )
)

```
[[Back to top]](#) 

