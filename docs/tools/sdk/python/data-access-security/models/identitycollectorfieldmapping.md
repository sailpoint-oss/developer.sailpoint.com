# Identitycollectorfieldmapping

# Identitycollectorfieldmapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_dictionary_name** | **str** | The name of the data dictionary field to map to. Dictionary fields of type Users apply to the users collection; dictionary fields of type Roles apply to the groups collection. | [required]
**source_attribute_name** | **str** | The source attribute name to read at runtime. This may be a built-in attribute for the identity collector type or a custom attribute listed in `properties` for the same collection. Built-in attributes can be discovered using the identity collector properties metadata endpoint. | [required]
\}

## Example

```python
from sailpoint.data_access_security.models.identitycollectorfieldmapping import Identitycollectorfieldmapping

identitycollectorfieldmapping = Identitycollectorfieldmapping(
field_dictionary_name='UPTF-1',
source_attribute_name='department'
)

```
[[Back to top]](#) 

