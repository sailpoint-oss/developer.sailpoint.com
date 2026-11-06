# JitactivationhistorydocumentSummaryServiceNowTicket

# JitactivationhistorydocumentSummaryServiceNowTicket

ServiceNow ticket friction details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required** | **bool** | Whether a ServiceNow ticket was required for this activation. | [optional] [default to False]
**bypassed** | **bool** | Whether the ServiceNow ticket requirement was bypassed. | [optional] [default to False]
**ticket_reference** | **str** | ServiceNow ticket reference submitted by the user. | [optional] 
\}

## Example

```python
from sailpoint.jit_activations.models.jitactivationhistorydocument_summary_service_now_ticket import JitactivationhistorydocumentSummaryServiceNowTicket

jitactivationhistorydocument_summary_service_now_ticket = JitactivationhistorydocumentSummaryServiceNowTicket(
required=True,
bypassed=False,
ticket_reference='INC0012345'
)

```
[[Back to top]](#) 

