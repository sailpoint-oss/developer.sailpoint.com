# Createidentitycollectorrequest

# Createidentitycollectorrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The display name for the new identity collector. Must be unique within the tenant. | [required]
**source_id** | **str** | The identifier of the source to create the identity collector for, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. The identity collector type is derived from this source. | [required]
**users** | [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | [optional] 
**groups** | [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | [optional] 
\}

## Example

```python
from sailpoint.data_access_security.models.createidentitycollectorrequest import Createidentitycollectorrequest

createidentitycollectorrequest = Createidentitycollectorrequest(
name='Active Directory Identity Collector',
source_id='2c9180835d2e5168015d32f890ca1581',
users=sailpoint.data_access_security.models.identitycollectorcollectionsettings.Identitycollectorcollectionsettings(
                    properties = ["UserAddress","department"], 
                    field_mappings = [
                        sailpoint.data_access_security.models.identitycollectorfieldmapping.Identitycollectorfieldmapping(
                            field_dictionary_name = 'UPTF-1', 
                            source_attribute_name = 'department', )
                        ], ),
groups=sailpoint.data_access_security.models.identitycollectorcollectionsettings.Identitycollectorcollectionsettings(
                    properties = ["UserAddress","department"], 
                    field_mappings = [
                        sailpoint.data_access_security.models.identitycollectorfieldmapping.Identitycollectorfieldmapping(
                            field_dictionary_name = 'UPTF-1', 
                            source_attribute_name = 'department', )
                        ], )
)

```
[[Back to top]](#) 

