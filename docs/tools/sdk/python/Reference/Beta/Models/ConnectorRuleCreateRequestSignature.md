---
id: beta-connector-rule-create-request-signature
title: ConnectorRuleCreateRequestSignature
pagination_label: ConnectorRuleCreateRequestSignature
sidebar_label: ConnectorRuleCreateRequestSignature
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConnectorRuleCreateRequestSignature', 'BetaConnectorRuleCreateRequestSignature'] 
slug: /tools/sdk/python/beta/models/connector-rule-create-request-signature
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleCreateRequestSignature', 'BetaConnectorRuleCreateRequestSignature']
---

# ConnectorRuleCreateRequestSignature

The rule's function signature. Describes the rule's input arguments and output (if any)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | [**[]Argument**](argument) |  | [required]
**output** | [**Argument**](argument) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.connector_rule_create_request_signature import ConnectorRuleCreateRequestSignature

connector_rule_create_request_signature = ConnectorRuleCreateRequestSignature(
input=[
                    sailpoint.beta.models.argument.Argument(
                        name = 'firstName', 
                        description = 'the first name of the identity', 
                        type = 'String', )
                    ],
output=sailpoint.beta.models.argument.Argument(
                    name = 'firstName', 
                    description = 'the first name of the identity', 
                    type = 'String', )
)

```
[[Back to top]](#) 

