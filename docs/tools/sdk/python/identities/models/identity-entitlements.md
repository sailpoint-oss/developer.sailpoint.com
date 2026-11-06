# IdentityEntitlements

# IdentityEntitlements


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_ref** | [**TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**tags** | **[]str** | Labels to be applied to object. | [optional] 
\}

## Example

```python
from sailpoint.identities.models.identity_entitlements import IdentityEntitlements

identity_entitlements = IdentityEntitlements(
object_ref=sailpoint.identities.models.tagged_object_dto.Tagged Object Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
tags=["BU_FINANCE","PCI"]
)

```
[[Back to top]](#) 

