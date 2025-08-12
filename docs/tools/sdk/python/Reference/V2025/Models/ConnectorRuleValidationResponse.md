---
id: v2025-connector-rule-validation-response
title: ConnectorRuleValidationResponse
pagination_label: ConnectorRuleValidationResponse
sidebar_label: ConnectorRuleValidationResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConnectorRuleValidationResponse', 'V2025ConnectorRuleValidationResponse'] 
slug: /tools/sdk/python/v2025/models/connector-rule-validation-response
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleValidationResponse', 'V2025ConnectorRuleValidationResponse']
---

# ConnectorRuleValidationResponse

ConnectorRuleValidationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** |  **Enum** [  'OK',    'ERROR' ] |  | [required]
**details** | [**[]ConnectorRuleValidationResponseDetailsInner**](connector-rule-validation-response-details-inner) |  | [required]
}

## Example

```python
from sailpoint.v2025.models.connector_rule_validation_response import ConnectorRuleValidationResponse

connector_rule_validation_response = ConnectorRuleValidationResponse(
state='ERROR',
details=[
                    sailpoint.v2025.models.connector_rule_validation_response_details_inner.ConnectorRuleValidationResponse_details_inner(
                        line = 2, 
                        column = 5, 
                        messsage = 'Remove reference to .decrypt(', )
                    ]
)

```
[[Back to top]](#) 

