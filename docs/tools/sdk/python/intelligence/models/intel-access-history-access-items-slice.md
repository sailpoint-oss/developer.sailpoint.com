# IntelAccessHistoryAccessItemsSlice

# IntelAccessHistoryAccessItemsSlice

Access-item history slice embedded in the aggregate identity response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | **[]IntelAccessItemHistoryEvent** | First page of access-item history events for the identity. | [required]
**total_count** | **int** | Total number of events in this category; omitted when `items` is empty. | [optional] 
**next** | **str** | Absolute URL to the next access-items page; present when totalCount exceeds the items returned on this page. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intel_access_history_access_items_slice import IntelAccessHistoryAccessItemsSlice

intel_access_history_access_items_slice = IntelAccessHistoryAccessItemsSlice(
items=[
                    { }
                    ],
total_count=128,
next='https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/access-history/access-items?limit=10&offset=10&count=true'
)

```
[[Back to top]](#) 

