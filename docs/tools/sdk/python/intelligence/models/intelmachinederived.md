# Intelmachinederived

# Intelmachinederived

Derived SOC triage signals for non-human identity risk assessment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_orphaned** | **bool** | Flags NHIs without a valid active owner for prioritization. | [required]
**authorized_human_identities** | [**[]Intelmachineentityref**](intelmachineentityref) | Humans who can invoke or access this NHI agent. | [required]
**blast_radius_summary** | [**Intelblastradiussummary**](intelblastradiussummary) |  | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intelmachinederived import Intelmachinederived

intelmachinederived = Intelmachinederived(
is_orphaned=False,
authorized_human_identities=[{"type":"IDENTITY","id":"ef38f94347e94562b5bb8424a56397d8","name":"Example User","email":"user@example.com"}],
blast_radius_summary=sailpoint.intelligence.models.intelblastradiussummary.Intelblastradiussummary(
                    impacted_sources = ["Example AWS Source"], 
                    impacted_accounts = 1, 
                    impacted_humans = 1, 
                    has_entitlements = True, 
                    environments = ["production"], 
                    access_types = ["entitlement"], )
)

```
[[Back to top]](#) 

