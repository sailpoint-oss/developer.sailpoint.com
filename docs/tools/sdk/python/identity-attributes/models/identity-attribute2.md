# IdentityAttribute2

# IdentityAttribute2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Identity attribute's technical name. | [required]
**display_name** | **str** | Identity attribute's business-friendly name. | [optional] 
**standard** | **bool** | Indicates whether the attribute is 'standard' or 'default'. | [optional] [default to False]
**type** | **str** | Identity attribute's type. | [optional] 
**multi** | **bool** | Indicates whether the identity attribute is multi-valued. | [optional] [default to False]
**searchable** | **bool** | Indicates whether the identity attribute is searchable. | [optional] [default to False]
**system** | **bool** | Indicates whether the identity attribute is 'system', meaning that it doesn't have a source and isn't configurable. | [optional] [default to False]
**sources** | [**[]Source2**](source2) | Identity attribute's list of sources - this specifies how the rule's value is derived. | [optional] 
\}

## Example

```python
from sailpoint.identity_attributes.models.identity_attribute2 import IdentityAttribute2

identity_attribute2 = IdentityAttribute2(
name='costCenter',
display_name='Cost Center',
standard=False,
type='string',
multi=False,
searchable=False,
system=False,
sources=[
                    sailpoint.identity_attributes.models.source_2.Source_2(
                        type = 'rule', 
                        properties = {"ruleType":"IdentityAttribute","ruleName":"Cloud Promote Identity Attribute"}, )
                    ]
)

```
[[Back to top]](#) 

