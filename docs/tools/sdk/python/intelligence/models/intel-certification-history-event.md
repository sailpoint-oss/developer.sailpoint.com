# IntelCertificationHistoryEvent

# IntelCertificationHistoryEvent

Certification history event. Supported eventType is IdentityCertified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_type** |  **Enum** [  'IdentityCertified' ] | Type of certification history event. | [required]
**date_time** | **datetime** | Event timestamp. | [optional] 
**certification_id** | **str** | Identifier of the certification. | [optional] 
**certification_name** | **str** | Display name of the certification. | [optional] 
**signed_date** | **datetime** | Timestamp when the certification was signed. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intel_certification_history_event import IntelCertificationHistoryEvent

intel_certification_history_event = IntelCertificationHistoryEvent(
event_type='IdentityCertified',
date_time='2019-03-08T22:37:33.901Z',
certification_id='2c91808a77ff216301782327a50f09bf',
certification_name='Example certification',
signed_date='2019-03-08T22:37:33.901Z'
)

```
[[Back to top]](#) 

