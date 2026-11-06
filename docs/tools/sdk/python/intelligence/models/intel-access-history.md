# IntelAccessHistory

# IntelAccessHistory

Access-history split into two independently paged categories. accessItems carries grant, remove, and account-status events. certifications carries identity-certified events. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_items** | [**IntelAccessHistoryAccessItemsSlice**](intel-access-history-access-items-slice) | First page of access-item history events for the identity. | [required]
**certifications** | [**IntelAccessHistoryCertificationsSlice**](intel-access-history-certifications-slice) | First page of certification history events for the identity. | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intel_access_history import IntelAccessHistory

intel_access_history = IntelAccessHistory(
access_items=sailpoint.intelligence.models.intel_access_history_access_items_slice.IntelAccessHistoryAccessItemsSlice(
                    items = [
                        { }
                        ], 
                    total_count = 128, 
                    next = 'https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/access-history/access-items?limit=10&offset=10&count=true', ),
certifications=sailpoint.intelligence.models.intel_access_history_certifications_slice.IntelAccessHistoryCertificationsSlice(
                    items = [
                        { }
                        ], 
                    total_count = 6, 
                    next = 'https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/access-history/certifications?limit=10&offset=10&count=true', )
)

```
[[Back to top]](#) 

