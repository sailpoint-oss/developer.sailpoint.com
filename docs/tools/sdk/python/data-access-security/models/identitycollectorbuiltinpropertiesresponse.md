# Identitycollectorbuiltinpropertiesresponse

# Identitycollectorbuiltinpropertiesresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**types** | [**[]Identitycollectorbuiltinpropertiesbytype**](identitycollectorbuiltinpropertiesbytype) | Built-in source attribute names grouped by identity collector type. | [required]
\}

## Example

```python
from sailpoint.data_access_security.models.identitycollectorbuiltinpropertiesresponse import Identitycollectorbuiltinpropertiesresponse

identitycollectorbuiltinpropertiesresponse = Identitycollectorbuiltinpropertiesresponse(
types=[
                    sailpoint.data_access_security.models.identitycollectorbuiltinpropertiesbytype.Identitycollectorbuiltinpropertiesbytype(
                        type = 'Azure Active Directory', 
                        users = ["userPrincipalName","displayName","department"], 
                        groups = ["displayName","mailEnabled","objectId"], )
                    ]
)

```
[[Back to top]](#) 

