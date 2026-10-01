# Intelblastradiussummary

# Intelblastradiussummary

Fast SOC view of impact across sources, accounts, and humans.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impacted_sources** | **[]str** | Source systems that may be impacted if compromised. | [required]
**impacted_accounts** | **int** | Linked machine accounts that may be impacted if compromised. | [required]
**impacted_humans** | **int** | Unique owners and authorized humans potentially impacted if compromised. | [required]
**has_entitlements** | **bool** | Whether this NHI holds entitlements included in summary. | [optional] [default to False]
**environments** | **[]str** | Environment labels for impacted access in this summary. | [optional] 
**access_types** | **[]str** | Access type labels for impacted access in this summary. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intelblastradiussummary import Intelblastradiussummary

intelblastradiussummary = Intelblastradiussummary(
impacted_sources=["Example AWS Source"],
impacted_accounts=1,
impacted_humans=1,
has_entitlements=True,
environments=["production"],
access_types=["entitlement"]
)

```
[[Back to top]](#) 

