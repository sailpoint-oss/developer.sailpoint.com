---
id: connectorrulevalidationresponse
title: Connectorrulevalidationresponse
pagination_label: Connectorrulevalidationresponse
sidebar_label: Connectorrulevalidationresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connectorrulevalidationresponse', 'Connectorrulevalidationresponse'] 
slug: /tools/sdk/python/connector-rule-management/models/connectorrulevalidationresponse
tags: ['SDK', 'Software Development Kit', 'Connectorrulevalidationresponse', 'Connectorrulevalidationresponse']
---

# Connectorrulevalidationresponse

ConnectorRuleValidationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** |  **Enum** [  'OK',    'ERROR' ] |  | [required]
**details** | [**[]ConnectorrulevalidationresponseDetailsInner**](connectorrulevalidationresponse-details-inner) |  | [required]
}

## Example

```python
from sailpoint.connector_rule_management.models.connectorrulevalidationresponse import Connectorrulevalidationresponse

connectorrulevalidationresponse = Connectorrulevalidationresponse(
state='ERROR',
details=[
                    sailpoint.connector_rule_management.models.connectorrulevalidationresponse_details_inner.connectorrulevalidationresponse_details_inner(
                        line = 2, 
                        column = 5, 
                        messsage = 'Remove reference to .decrypt(', )
                    ]
)

```
[[Back to top]](#) 

