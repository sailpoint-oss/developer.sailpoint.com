# Jitactivationhistorydocument

# Jitactivationhistorydocument

A single JIT activation history record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of the activation record. | [optional] 
**tenant_id** | **str** | Tenant (pod/org) identifier. | [optional] 
**identity_id** | **str** | Identifier of the identity that requested activation. | [optional] 
**account_id** | **str** | Identifier of the account on which the entitlement was provisioned. | [optional] 
**entitlement_id** | **str** | Identifier of the entitlement that was activated. | [optional] 
**source_id** | **str** | Identifier of the source that owns the entitlement. | [optional] 
**connection_id** | **str** | Identifier of the entitlement connection used for this activation. | [optional] 
**identity_name** | **str** | Display name of the identity. | [optional] 
**entitlement_name** | **str** | Display name of the entitlement. | [optional] 
**source_display_name** | **str** | Display name of the source. | [optional] 
**policy_display_names** | **[]str** | Display names of the JIT policies that matched this activation. | [optional] 
**status** | **str** | Current or final status of the activation workflow. Possible values: ACTIVATING, AWAITING_FRICTIONS, PROVISIONING, PROVISIONED, DEPROVISIONING, COMPLETE, CANCELLED, ERROR, TIMED_OUT, REVOKED. | [optional] 
**error** | **str** | Error message if the activation ended in an ERROR state. | [optional] 
**policy_friction_outcome** | **str** | Outcome of policy friction evaluation (e.g. SUCCESS_ENFORCED, BYPASSED). | [optional] 
**policy_match_details** | **[]str** | UUIDs of the policy records that matched this activation. | [optional] 
**activation_initiated** | **datetime** | Timestamp when the activation was initiated. | [optional] 
**provision_start** | **datetime** | Timestamp when provisioning started. | [optional] 
**provision_completed** | **datetime** | Timestamp when provisioning completed. | [optional] 
**deprovision_start** | **datetime** | Timestamp when deprovisioning started. | [optional] 
**deprovision_complete** | **datetime** | Timestamp when deprovisioning completed. | [optional] 
**provision_duration_mins** | **float** | Duration of the provisioning phase in minutes. | [optional] 
**deprovision_duration_mins** | **float** | Duration of the deprovisioning phase in minutes. | [optional] 
**summary** | [**JitactivationhistorydocumentSummary**](jitactivationhistorydocument-summary) |  | [optional] 
**frictions** | [**[]JitactivationhistorydocumentFrictionsInner**](jitactivationhistorydocument-frictions-inner) | Individual friction items presented to the user during activation (e.g. TICKET, JUSTIFICATION, REAUTH). Null when no friction was evaluated. | [optional] 
**activation_details** | **map[string]object** | Additional structured metadata about the activation. Shape is subject to change. | [optional] 
**activation_duration** | **map[string]object** | Duration breakdown of the full activation lifecycle. Shape is subject to change. | [optional] 
**provisioning_details** | **map[string]object** | Low-level provisioning operation detail. Shape is subject to change. | [optional] 
\}

## Example

```python
from sailpoint.jit_activations.models.jitactivationhistorydocument import Jitactivationhistorydocument

jitactivationhistorydocument = Jitactivationhistorydocument(
id='2c9180867e20630b017e20be7c222499',
tenant_id='2c9180867e20630b017e20be7c222491',
identity_id='2c9180867e20630b017e20be7c222492',
account_id='2c9180867e20630b017e20be7c222493',
entitlement_id='ae735f40-4de9-4163-801d-4a1444e59d35',
source_id='2c9180867e20630b017e20be7c222494',
connection_id='667fb802-0025-4865-a519-91a56e4c5b7e',
identity_name='Jane Doe',
entitlement_name='Azure AD - Global Admin',
source_display_name='Azure Active Directory',
policy_display_names=["Privileged Access Policy"],
status='PROVISIONED',
error='Upstream provisioning failed after 3 retries (503)',
policy_friction_outcome='SUCCESS_ENFORCED',
policy_match_details=["4d79eca9-8a77-4d06-8297-9be9868906f1"],
activation_initiated='2026-04-01T10:00Z',
provision_start='2026-04-01T10:00:05Z',
provision_completed='2026-04-01T10:00:30Z',
deprovision_start='2026-04-01T11:00Z',
deprovision_complete='2026-04-01T11:00:20Z',
provision_duration_mins=0.42,
deprovision_duration_mins=0.33,
summary=sailpoint.jit_activations.models.jitactivationhistorydocument_summary.Jitactivationhistorydocument_summary(
                    policy_matches = [
                        sailpoint.jit_activations.models.jitactivationhistorydocument_summary_policy_matches_inner.Jitactivationhistorydocument_summary_policyMatches_inner(
                            policy_id = '4d79eca9-8a77-4d06-8297-9be9868906f1', 
                            policy_name = 'Austin Engineering Policy', )
                        ], 
                    reauthentication = sailpoint.jit_activations.models.jitactivationhistorydocument_summary_reauthentication.Jitactivationhistorydocument_summary_reauthentication(
                        required = True, 
                        bypassed = False, ), 
                    justification = sailpoint.jit_activations.models.jitactivationhistorydocument_summary_justification.Jitactivationhistorydocument_summary_justification(
                        required = True, 
                        bypassed = False, ), 
                    service_now_ticket = sailpoint.jit_activations.models.jitactivationhistorydocument_summary_service_now_ticket.Jitactivationhistorydocument_summary_serviceNowTicket(
                        required = True, 
                        bypassed = False, 
                        ticket_reference = 'INC0012345', ), ),
frictions=[{"type":"TICKET","bypassAllowed":false,"submittedData":"INC0012345","status":"COMPLETE"},{"type":"JUSTIFICATION","bypassAllowed":false,"submittedData":"Need access to deploy to production.","status":"COMPLETE"}],
activation_details={ },
activation_duration={ },
provisioning_details={ }
)

```
[[Back to top]](#) 

