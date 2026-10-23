# IdentityCompareResponse

# IdentityCompareResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_item_diff** | **map[string]object** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
\}

## Example

```python
from sailpoint.identity_history.models.identity_compare_response import IdentityCompareResponse

identity_compare_response = IdentityCompareResponse(
access_item_diff={
                    'key' : None
                    }
)

```
[[Back to top]](#) 

