# ConnectorRuleValidationResponse

# ConnectorRuleValidationResponse

ConnectorRuleValidationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** |  **Enum** [  'OK',    'ERROR' ] |  | [required]
**details** | [**[]ConnectorRuleValidationResponseDetailsInner**](connector-rule-validation-response-details-inner) |  | [required]
\}

## Example

```python
from sailpoint.connector_rule_management.models.connector_rule_validation_response import ConnectorRuleValidationResponse

connector_rule_validation_response = ConnectorRuleValidationResponse(
state='ERROR',
details=[
                    sailpoint.connector_rule_management.models.connector_rule_validation_response_details_inner.ConnectorRuleValidationResponse_details_inner(
                        line = 2, 
                        column = 5, 
                        messsage = 'Remove reference to .decrypt(', )
                    ]
)

```
[[Back to top]](#) 

