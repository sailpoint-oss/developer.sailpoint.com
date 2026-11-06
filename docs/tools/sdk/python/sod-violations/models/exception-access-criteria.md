# ExceptionAccessCriteria

# ExceptionAccessCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**ExceptionCriteria**](exception-criteria) |  | [optional] 
**right_criteria** | [**ExceptionCriteria**](exception-criteria) |  | [optional] 
\}

## Example

```python
from sailpoint.sod_violations.models.exception_access_criteria import ExceptionAccessCriteria

exception_access_criteria = ExceptionAccessCriteria(
left_criteria=sailpoint.sod_violations.models.exception_criteria.ExceptionCriteria(
                    criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","existing":true},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","existing":false}], ),
right_criteria=sailpoint.sod_violations.models.exception_criteria.ExceptionCriteria(
                    criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","existing":true},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","existing":false}], )
)

```
[[Back to top]](#) 

