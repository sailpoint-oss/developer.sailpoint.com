# PermissionDTO

# PermissionDTO

Simplified DTO for the Permission objects stored in SailPoint's database. The data is aggregated from customer systems and is free-form, so its appearance can vary largely between different clients/customers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rights** | **[]str** | All the rights (e.g. actions) that this permission allows on the target | [optional] [readonly] 
**target** | **str** | The target the permission would grants rights on. | [optional] [readonly] 
\}

## Example

```python
from sailpoint.certifications.models.permission_dto import PermissionDTO

permission_dto = PermissionDTO(
rights=HereIsRight1,
target='SYS.GV_$TRANSACTION'
)

```
[[Back to top]](#) 

