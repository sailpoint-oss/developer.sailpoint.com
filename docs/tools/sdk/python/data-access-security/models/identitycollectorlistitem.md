# Identitycollectorlistitem

# Identitycollectorlistitem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the identity collector. | [optional] 
**name** | **str** | The display name of the identity collector. | [optional] 
**type** | **str** | The identity collector type, derived from its underlying source. | [optional] 
**source_id** | **str** | The identifier of the source the identity collector is associated with, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. | [optional] 
**users** | [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | [optional] 
**groups** | [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | [optional] 
\}

## Example

```python
from sailpoint.data_access_security.models.identitycollectorlistitem import Identitycollectorlistitem

identitycollectorlistitem = Identitycollectorlistitem(
id='12345',
name='Active Directory Identity Collector',
type='Active Directory',
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

