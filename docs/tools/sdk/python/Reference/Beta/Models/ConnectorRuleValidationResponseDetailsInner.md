---
id: beta-connector-rule-validation-response-details-inner
title: ConnectorRuleValidationResponseDetailsInner
pagination_label: ConnectorRuleValidationResponseDetailsInner
sidebar_label: ConnectorRuleValidationResponseDetailsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConnectorRuleValidationResponseDetailsInner', 'BetaConnectorRuleValidationResponseDetailsInner'] 
slug: /tools/sdk/python/beta/models/connector-rule-validation-response-details-inner
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleValidationResponseDetailsInner', 'BetaConnectorRuleValidationResponseDetailsInner']
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
from sailpoint.beta.models.connector_rule_validation_response_details_inner import ConnectorRuleValidationResponseDetailsInner

connector_rule_validation_response_details_inner = ConnectorRuleValidationResponseDetailsInner(
line=2,
column=5,
messsage='Remove reference to .decrypt('
)

```
[[Back to top]](#) 

