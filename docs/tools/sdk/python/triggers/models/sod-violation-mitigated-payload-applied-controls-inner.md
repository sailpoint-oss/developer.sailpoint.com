# SODViolationMitigatedPayloadAppliedControlsInner

# SODViolationMitigatedPayloadAppliedControlsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_date** | **datetime** | When the control was applied. | [optional] 
**applier** | [**SODViolationMitigatedPayloadAppliedControlsInnerApplier**](sod-violation-mitigated-payload-applied-controls-inner-applier) |  | [optional] 
**comments** | **str** | Optional comments from the applier. | [optional] 
**control** | [**SODViolationMitigatedPayloadAppliedControlsInnerControl**](sod-violation-mitigated-payload-applied-controls-inner-control) |  | [optional] 
**expiration** | **datetime** | When this application of the control expires. | [optional] 
**id** | **str** | ID of the control application record. | [optional] 
**status** | **ViolationAppliedControlStatus** |  | [optional] 
**violation** | **str** | ID of the violation this application belongs to. | [optional] 
**workflow_id** | **str** | Optional workflow correlation ID. | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.sod_violation_mitigated_payload_applied_controls_inner import SODViolationMitigatedPayloadAppliedControlsInner

sod_violation_mitigated_payload_applied_controls_inner = SODViolationMitigatedPayloadAppliedControlsInner(
applied_date='2026-03-05T22:51:24.535433Z',
applier=sailpoint.triggers.models.sod_violation_mitigated_payload_applied_controls_inner_applier.SODViolationMitigatedPayload_appliedControls_inner_applier(
                    id = '2c918088837fe14901838062029a04bf', 
                    type = 'IDENTITY', ),
comments='Applied compensating control to mitigate violation while awaiting access review.',
control=sailpoint.triggers.models.sod_violation_mitigated_payload_applied_controls_inner_control.SODViolationMitigatedPayload_appliedControls_inner_control(
                    id = '01ea1d945db14444a2356f71c22b3449', 
                    type = 'COMPENSATING_CONTROL', ),
expiration='2026-04-05T22:51:24.535433Z',
id='230bb065e18641f9bd6985ea9cf2e1a4',
status='Active',
violation='230bb065e18641f9bd6985ea9cf2e1a4',
workflow_id='2c918088837fe14901838062029a04bf'
)

```
[[Back to top]](#) 

