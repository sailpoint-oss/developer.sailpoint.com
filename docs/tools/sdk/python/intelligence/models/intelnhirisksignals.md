# Intelnhirisksignals

# Intelnhirisksignals

First page of risk factors for a non-human identity, strongest first. Either success fields (`items`, optional `totalCount` and `next`) or failure fields (`message`, `reason`), never both. Present on every NHI lookup. When `risk` is null, `items` may be an empty array. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[]Intelnhirisksignalwire**](intelnhirisksignalwire) | First page of risk factors. | [optional] 
**total_count** | **int** | Total number of risk factors. Omitted when `items` is empty. | [optional] 
**next** | **str** | URL for the next page of risk factors. Omitted when everything fits on this page. | [optional] 
**message** | **str** | Set when risk factors could not be loaded. `items`, `totalCount`, and `next` are omitted. | [optional] 
**reason** | **Intelenrichmentfailurereason** |  | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intelnhirisksignals import Intelnhirisksignals

intelnhirisksignals = Intelnhirisksignals(
items=[
                    sailpoint.intelligence.models.intelnhirisksignalwire.Intelnhirisksignalwire(
                        id = 'human_owner_confirmed', 
                        name = 'No human owner confirmed', 
                        description = 'No attributed owner means weak accountability for access and remediation.', 
                        severity_value = 'CRITICAL', 
                        last_received_at = '2026-10-10T16:45:29Z', 
                        status = 'active', )
                    ],
total_count=3,
next='https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/2c91808874ff91550175097daaec161e/risk-signals?limit=10&offset=10&count=true',
message='Data temporarily unavailable. Please try again later.',
reason='UPSTREAM_UNAVAILABLE'
)

```
[[Back to top]](#) 

