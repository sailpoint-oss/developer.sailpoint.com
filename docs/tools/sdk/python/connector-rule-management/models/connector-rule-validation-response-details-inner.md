# ConnectorRuleValidationResponseDetailsInner

# ConnectorRuleValidationResponseDetailsInner

CodeErrorDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line** | **int** | The line number where the issue occurred | [required]
**column** | **int** | the column number where the issue occurred | [required]
**messsage** | **str** | a description of the issue in the code | [optional] 
\}

## Example

```python
from sailpoint.connector_rule_management.models.connector_rule_validation_response_details_inner import ConnectorRuleValidationResponseDetailsInner

connector_rule_validation_response_details_inner = ConnectorRuleValidationResponseDetailsInner(
line=2,
column=5,
messsage='Remove reference to .decrypt('
)

```
[[Back to top]](#) 

