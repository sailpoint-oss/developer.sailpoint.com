# IntelOutliersSlice

# IntelOutliersSlice

Outlier slices embedded in the aggregate identity response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rare_access** | [**IntelRareAccessSlice**](intel-rare-access-slice) | First page of rare access items for the identity. | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intel_outliers_slice import IntelOutliersSlice

intel_outliers_slice = IntelOutliersSlice(
rare_access=sailpoint.intelligence.models.intel_rare_access_slice.IntelRareAccessSlice(
                    items = [
                        sailpoint.intelligence.models.intel_outlier_access_item.IntelOutlierAccessItem(
                            id = 'outlier-access-001', 
                            display_name = 'Example_Admin_Access', 
                            description = '', 
                            access_type = 'ENTITLEMENT', 
                            source_name = 'Example SaaS Source', 
                            extremely_rare = False, )
                        ], 
                    total_count = 15, 
                    next = 'https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/outliers/rare-access?limit=10&offset=10&count=true', )
)

```
[[Back to top]](#) 

