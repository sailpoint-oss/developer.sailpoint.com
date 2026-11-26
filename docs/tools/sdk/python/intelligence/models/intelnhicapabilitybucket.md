# Intelnhicapabilitybucket

# Intelnhicapabilitybucket

First page of one capability kind on the non-human identity lookup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[]Intelnhicapabilitywire**](intelnhicapabilitywire) | Capabilities of this kind linked to the identity. | [required]
**total_count** | **int** | Total count for this kind. Omitted when items is empty. | [optional] 
**next** | **str** | URL for the next page of this kind. Omitted when all rows fit on this page. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intelnhicapabilitybucket import Intelnhicapabilitybucket

intelnhicapabilitybucket = Intelnhicapabilitybucket(
items=[
                    sailpoint.intelligence.models.intelnhicapabilitywire.Intelnhicapabilitywire(
                        id = '7c2a9e14-6b3f-4d18-9a27-0e5f8c1b4d63', 
                        name = 'example inventory tool', 
                        type = 'TOOL', 
                        source_name = 'Example Source', )
                    ],
total_count=2,
next='https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/2c91808874ff91550175097daaec161e/capabilities?type=tool&limit=10&offset=10&count=true'
)

```
[[Back to top]](#) 

