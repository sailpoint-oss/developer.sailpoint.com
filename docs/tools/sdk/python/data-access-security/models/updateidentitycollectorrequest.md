# Updateidentitycollectorrequest

# Updateidentitycollectorrequest

Complete identity collector representation for [Replace Identity Collector](https://developer.sailpoint.com/docs/api/put-identity-collector-v-1). The server fully replaces the existing resource with this payload. Partial updates are not supported; `users` and `groups` must always be supplied and replace the current collection settings in their entirety.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The display name of the identity collector. Must be unique within the tenant. | [required]
**source_id** | **str** | The identifier of the associated source, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. This value cannot be modified for an existing identity collector and must match the current value. | [required]
**type** | **str** | The identity collector type. This value cannot be modified for an existing identity collector and must match the current value. | [required]
**users** | [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | [required]
**groups** | [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | [required]
\}

## Example

```python
from sailpoint.data_access_security.models.updateidentitycollectorrequest import Updateidentitycollectorrequest

updateidentitycollectorrequest = Updateidentitycollectorrequest(
name='Active Directory Identity Collector',
source_id='2c9180835d2e5168015d32f890ca1581',
type='Active Directory',
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

