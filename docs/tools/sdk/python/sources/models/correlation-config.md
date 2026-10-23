# CorrelationConfig

# CorrelationConfig

Source configuration information that is used by correlation process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the correlation configuration. | [optional] 
**name** | **str** | The name of the correlation configuration. | [optional] 
**attribute_assignments** | [**[]CorrelationConfigAttributeAssignmentsInner**](correlation-config-attribute-assignments-inner) | The list of attribute assignments of the correlation configuration. | [optional] 
\}

## Example

```python
from sailpoint.sources.models.correlation_config import CorrelationConfig

correlation_config = CorrelationConfig(
id='2c9180835d191a86015d28455b4a2329',
name='Source [source] Account Correlation',
attribute_assignments=[
                    sailpoint.sources.models.correlation_config_attribute_assignments_inner.CorrelationConfig_attributeAssignments_inner(
                        property = 'first_name', 
                        value = 'firstName', 
                        operation = 'EQ', 
                        complex = False, 
                        ignore_case = False, 
                        match_mode = 'ANYWHERE', 
                        filter_string = 'first_name == "John"', )
                    ]
)

```
[[Back to top]](#) 

