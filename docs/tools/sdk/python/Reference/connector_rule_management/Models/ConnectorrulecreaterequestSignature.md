---
id: connectorrulecreaterequest-signature
title: ConnectorrulecreaterequestSignature
pagination_label: ConnectorrulecreaterequestSignature
sidebar_label: ConnectorrulecreaterequestSignature
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConnectorrulecreaterequestSignature', 'ConnectorrulecreaterequestSignature'] 
slug: /tools/sdk/python/connector-rule-management/models/connectorrulecreaterequest-signature
tags: ['SDK', 'Software Development Kit', 'ConnectorrulecreaterequestSignature', 'ConnectorrulecreaterequestSignature']
---

# ConnectorrulecreaterequestSignature

The rule's function signature. Describes the rule's input arguments and output (if any)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | [**[]Argument**](argument) |  | [required]
**output** | [**Argument**](argument) |  | [optional] 
}

## Example

```python
from sailpoint.connector_rule_management.models.connectorrulecreaterequest_signature import ConnectorrulecreaterequestSignature

connectorrulecreaterequest_signature = ConnectorrulecreaterequestSignature(
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

