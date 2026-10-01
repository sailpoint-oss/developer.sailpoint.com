# NonEmployeeRequestLite

# NonEmployeeRequestLite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee request id. | [optional] 
**requester** | [**NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) |  | [optional] 
\}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.non_employee_request_lite import NonEmployeeRequestLite

non_employee_request_lite = NonEmployeeRequestLite(
id='ac110005-7156-1150-8171-5b292e3e0084',
requester=sailpoint.non_employee_lifecycle_management.models.non_employee_identity_reference_with_id.NonEmployeeIdentityReferenceWithId(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', )
)

```
[[Back to top]](#) 

