# ConnectorRuleCreateRequestSignature

# ConnectorRuleCreateRequestSignature

The rule's function signature. Describes the rule's input arguments and output (if any)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | [**[]Argument**](argument) |  | [required]
**output** | [**Argument**](argument) |  | [optional] 
\}

## Example

```python
from sailpoint.connector_rule_management.models.connector_rule_create_request_signature import ConnectorRuleCreateRequestSignature

connector_rule_create_request_signature = ConnectorRuleCreateRequestSignature(
input=[
                    sailpoint.connector_rule_management.models.argument.Argument(
                        name = 'firstName', 
                        description = 'the first name of the identity', 
                        type = 'String', )
                    ],
output=sailpoint.connector_rule_management.models.argument.Argument(
                    name = 'firstName', 
                    description = 'the first name of the identity', 
                    type = 'String', )
)

```
[[Back to top]](#) 

