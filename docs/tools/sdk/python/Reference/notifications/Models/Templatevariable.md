---
id: templatevariable
title: Templatevariable
pagination_label: Templatevariable
sidebar_label: Templatevariable
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Templatevariable', 'Templatevariable'] 
slug: /tools/sdk/python/notifications/models/templatevariable
tags: ['SDK', 'Software Development Kit', 'Templatevariable', 'Templatevariable']
---

# Templatevariable

A variable available for use in a notification template. Variables can be template-specific (from domain events) or global (available to all templates like __recipient, __global, __util). Template variables provide self-documenting metadata about what variables are available when customizing notification templates. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The variable name as used when rendering context in templates. | [optional] 
**type** |  **Enum** [  'string',    'boolean',    'number',    'object',    'array',    'function' ] | The data type for this variable. Use JSON Schema-like names for values (string, boolean, number, object, array) or \"function\" for template utility/helper functions (e.g. __dateTool.format(), __esc.html()).  | [optional] 
**description** | **str** | Human-readable description explaining what this variable represents. | [optional] 
**example** | **object** | Example value demonstrating the format and usage. For type \"function\", often a Velocity-style call (e.g. $__esc.html($value)). Can be a string, number, boolean, object, array, or null when no example is defined.  | [optional] 
}

## Example

```python
from sailpoint.notifications.models.templatevariable import Templatevariable

templatevariable = Templatevariable(
key='recipientDisplayName',
type='string',
description='Display name of the notification recipient',
example=John Doe
)

```
[[Back to top]](#) 

