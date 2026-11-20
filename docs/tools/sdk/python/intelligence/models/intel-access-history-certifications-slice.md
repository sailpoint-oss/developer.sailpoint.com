# IntelAccessHistoryCertificationsSlice

# IntelAccessHistoryCertificationsSlice

Certification history slice embedded in the aggregate identity response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | **[]IntelCertificationHistoryEvent** | First page of certification history events for the identity. | [required]
**total_count** | **int** | Total number of events in this category; omitted when `items` is empty. | [optional] 
**next** | **str** | Absolute URL to the next certifications page; present when totalCount exceeds the items returned on this page. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intel_access_history_certifications_slice import IntelAccessHistoryCertificationsSlice

intel_access_history_certifications_slice = IntelAccessHistoryCertificationsSlice(
items=[
                    { }
                    ],
total_count=6,
next='https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/access-history/certifications?limit=10&offset=10&count=true'
)

```
[[Back to top]](#) 

