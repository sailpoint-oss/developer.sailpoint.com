---
id: sourcecode
title: Sourcecode
pagination_label: Sourcecode
sidebar_label: Sourcecode
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourcecode', 'Sourcecode'] 
slug: /tools/sdk/python/connector-rule-management/models/sourcecode
tags: ['SDK', 'Software Development Kit', 'Sourcecode', 'Sourcecode']
---

# Sourcecode

SourceCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | the version of the code | [required]
**script** | **str** | The code | [required]
}

## Example

```python
from sailpoint.connector_rule_management.models.sourcecode import Sourcecode

sourcecode = Sourcecode(
version='1.0',
script='return "Mr. " + firstName;'
)

```
[[Back to top]](#) 

