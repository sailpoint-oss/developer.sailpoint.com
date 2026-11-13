# JitactivationhistorydocumentSummary

# JitactivationhistorydocumentSummary

High-level friction summary for the activation, including policy matches, reauthentication, justification, and ticket details. Null when no policy was matched or frictions were not evaluated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_matches** | [**[]JitactivationhistorydocumentSummaryPolicyMatchesInner**](jitactivationhistorydocument-summary-policy-matches-inner) | List of policies that matched during activation evaluation. | [optional] 
**reauthentication** | [**JitactivationhistorydocumentSummaryReauthentication**](jitactivationhistorydocument-summary-reauthentication) |  | [optional] 
**justification** | [**JitactivationhistorydocumentSummaryJustification**](jitactivationhistorydocument-summary-justification) |  | [optional] 
**service_now_ticket** | [**JitactivationhistorydocumentSummaryServiceNowTicket**](jitactivationhistorydocument-summary-service-now-ticket) |  | [optional] 
\}

## Example

```python
from sailpoint.jit_activations.models.jitactivationhistorydocument_summary import JitactivationhistorydocumentSummary

jitactivationhistorydocument_summary = JitactivationhistorydocumentSummary(
policy_matches=[
                    sailpoint.jit_activations.models.jitactivationhistorydocument_summary_policy_matches_inner.Jitactivationhistorydocument_summary_policyMatches_inner(
                        policy_id = '4d79eca9-8a77-4d06-8297-9be9868906f1', 
                        policy_name = 'Austin Engineering Policy', )
                    ],
reauthentication=sailpoint.jit_activations.models.jitactivationhistorydocument_summary_reauthentication.Jitactivationhistorydocument_summary_reauthentication(
                    required = True, 
                    bypassed = False, ),
justification=sailpoint.jit_activations.models.jitactivationhistorydocument_summary_justification.Jitactivationhistorydocument_summary_justification(
                    required = True, 
                    bypassed = False, ),
service_now_ticket=sailpoint.jit_activations.models.jitactivationhistorydocument_summary_service_now_ticket.Jitactivationhistorydocument_summary_serviceNowTicket(
                    required = True, 
                    bypassed = False, 
                    ticket_reference = 'INC0012345', )
)

```
[[Back to top]](#) 

