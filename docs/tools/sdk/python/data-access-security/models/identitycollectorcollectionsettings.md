# Identitycollectorcollectionsettings

# Identitycollectorcollectionsettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **[]str** | Source attribute names to register as datasource columns for this collection. These names must match the attributes sent by Identity Security Cloud. Use an empty array when no custom attributes are required. | [required]
**field_mappings** | [**[]Identitycollectorfieldmapping**](identitycollectorfieldmapping) | Maps source attributes to data dictionary fields and DAS custom field slots. Each `sourceAttributeName` must be either a built-in attribute for the identity collector type or listed in `properties`. Use an empty array when no dynamic field mappings are configured. | [required]
\}

## Example

```python
from sailpoint.data_access_security.models.identitycollectorcollectionsettings import Identitycollectorcollectionsettings

identitycollectorcollectionsettings = Identitycollectorcollectionsettings(
properties=["UserAddress","department"],
field_mappings=[
                    sailpoint.data_access_security.models.identitycollectorfieldmapping.Identitycollectorfieldmapping(
                        field_dictionary_name = 'UPTF-1', 
                        source_attribute_name = 'department', )
                    ]
)

```
[[Back to top]](#) 

