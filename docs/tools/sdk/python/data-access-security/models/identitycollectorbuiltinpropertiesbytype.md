# Identitycollectorbuiltinpropertiesbytype

# Identitycollectorbuiltinpropertiesbytype


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Identity collector type display name. | [required]
**users** | **[]str** | Built-in user source attribute names that can be used in field mappings for the identity collector type. | [required]
**groups** | **[]str** | Built-in group source attribute names that can be used in field mappings for the identity collector type. | [required]
\}

## Example

```python
from sailpoint.data_access_security.models.identitycollectorbuiltinpropertiesbytype import Identitycollectorbuiltinpropertiesbytype

identitycollectorbuiltinpropertiesbytype = Identitycollectorbuiltinpropertiesbytype(
type='Azure Active Directory',
users=["userPrincipalName","displayName","department"],
groups=["displayName","mailEnabled","objectId"]
)

```
[[Back to top]](#) 

