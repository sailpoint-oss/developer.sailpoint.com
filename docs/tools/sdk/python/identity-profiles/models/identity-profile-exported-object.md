# IdentityProfileExportedObject

# IdentityProfileExportedObject

Identity profile exported object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **int** | Version or object from the target service. | [optional] 
**var_self** | [**IdentityProfileExportedObjectSelf**](identity-profile-exported-object-self) |  | [optional] 
**object** | [**IdentityProfile**](identity-profile) |  | [optional] 
\}

## Example

```python
from sailpoint.identity_profiles.models.identity_profile_exported_object import IdentityProfileExportedObject

identity_profile_exported_object = IdentityProfileExportedObject(
version=1,
var_self=sailpoint.identity_profiles.models.identity_profile_exported_object_self.IdentityProfileExportedObject_self(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
object=
)

```
[[Back to top]](#) 

