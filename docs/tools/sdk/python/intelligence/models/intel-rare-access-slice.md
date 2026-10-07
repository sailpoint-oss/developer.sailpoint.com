# IntelRareAccessSlice

# IntelRareAccessSlice

Rare access slice embedded in the aggregate identity response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[]IntelOutlierAccessItem**](intel-outlier-access-item) | First page of rare access items for the identity. | [required]
**total_count** | **int** | Total number of rare-access items for the resolved outlier; omitted when `items` is empty. | [optional] 
**next** | **str** | Absolute URL to the next rareAccess page; present when totalCount exceeds the items returned on this page. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intel_rare_access_slice import IntelRareAccessSlice

intel_rare_access_slice = IntelRareAccessSlice(
items=[
                    sailpoint.intelligence.models.intel_outlier_access_item.IntelOutlierAccessItem(
                        id = 'outlier-access-001', 
                        display_name = 'Example_Admin_Access', 
                        description = '', 
                        access_type = 'ENTITLEMENT', 
                        source_name = 'Example SaaS Source', 
                        extremely_rare = False, )
                    ],
total_count=15,
next='https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/outliers/rare-access?limit=10&offset=10&count=true'
)

```
[[Back to top]](#) 

