# RoleAssignmentRef

# RoleAssignmentRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Assignment Id | [optional] 
**role** | [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**added_date** | **datetime** | Date that the assignment was added | [optional] 
**start_date** | **datetime** | Date when assignment will be active, if requested with a future date. If null, assignment is active immediately | [optional] 
**remove_date** | **datetime** | Date that the assignment will be removed | [optional] 
\}

## Example

```python
from sailpoint.identities.models.role_assignment_ref import RoleAssignmentRef

role_assignment_ref = RoleAssignmentRef(
id='1cbb0705b38c4226b1334eadd8874086',
role=sailpoint.identities.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
added_date='2025-07-11T18:45:37.098Z',
start_date='2026-01-22T19:15Z',
remove_date='2026-01-23T19:15Z'
)

```
[[Back to top]](#) 

