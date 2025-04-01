---
id: v2025-connector-rule-validation-response-details-inner
title: ConnectorRuleValidationResponseDetailsInner
pagination_label: ConnectorRuleValidationResponseDetailsInner
sidebar_label: ConnectorRuleValidationResponseDetailsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConnectorRuleValidationResponseDetailsInner', 'V2025ConnectorRuleValidationResponseDetailsInner'] 
slug: /tools/sdk/python/v2025/models/connector-rule-validation-response-details-inner
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleValidationResponseDetailsInner', 'V2025ConnectorRuleValidationResponseDetailsInner']
---

# ConnectorRuleValidationResponseDetailsInner

CodeErrorDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line** | **int** | The line number where the issue occurred | [required]
**column** | **int** | the column number where the issue occurred | [required]
**messsage** | **str** | a description of the issue in the code | [optional] 
}

## Example

```python
from sailpoint.v2025.models.connector_rule_validation_response_details_inner import ConnectorRuleValidationResponseDetailsInner

connector_rule_validation_response_details_inner = ConnectorRuleValidationResponseDetailsInner(
line=2,
column=5,
messsage='Remove reference to .decrypt('
)

```
[[Back to top]](#) 

