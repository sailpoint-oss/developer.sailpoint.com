---
id: v1-templatevariable-v1
title: TemplatevariableV1
pagination_label: TemplatevariableV1
sidebar_label: TemplatevariableV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TemplatevariableV1', 'v1TemplatevariableV1']
slug: /tools/sdk/typescript/notifications/models/templatevariable-v1
tags: ['SDK', 'Software Development Kit', 'TemplatevariableV1', 'v1TemplatevariableV1']
---

# TemplatevariableV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | The variable name as used when rendering context in templates. | [default to undefined]
**type** | **(optional)** `string` | The data type for this variable. Use JSON Schema-like names for values (string, boolean, number, object, array) or \"function\" for template utility/helper functions (e.g. __dateTool.format(), __esc.html()).  | [default to undefined]
**description** | **(optional)** `string` | Human-readable description explaining what this variable represents. | [default to undefined]
**example** | **(optional)** `any` | Example value demonstrating the format and usage. For type \"function\", often a Velocity-style call (e.g. $__esc.html($value)). Can be a string, number, boolean, object, array, or null when no example is defined.  | [default to undefined]

