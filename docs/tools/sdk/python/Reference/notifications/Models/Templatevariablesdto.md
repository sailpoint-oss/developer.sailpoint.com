---
id: templatevariablesdto
title: Templatevariablesdto
pagination_label: Templatevariablesdto
sidebar_label: Templatevariablesdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Templatevariablesdto', 'Templatevariablesdto'] 
slug: /tools/sdk/python/notifications/models/templatevariablesdto
tags: ['SDK', 'Software Development Kit', 'Templatevariablesdto', 'Templatevariablesdto']
---

# Templatevariablesdto

Variables available for use in a notification template. Variables can be template-specific (from domain events) or global (available to all templates like __recipient, __global, __util). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The notification template key. | [optional] 
**medium** | [**Templatemediumdto**](templatemediumdto) |  | [optional] 
**global_variables** | [**[]Templatevariable**](templatevariable) | Global variables available to all templates for this tenant (e.g. __global.*, __recipient, __util.*, __dateTool.*, __esc.*). Includes both data variables and function-type helpers.  | [optional] 
**template_variables** | [**[]Templatevariable**](templatevariable) | Template-specific variables for the given key and medium (e.g. approverPath, requester, attributes). | [optional] 
}

## Example

```python
from sailpoint.notifications.models.templatevariablesdto import Templatevariablesdto

templatevariablesdto = Templatevariablesdto(
key='approval_request_notification',
medium='EMAIL',
global_variables=[{"key":"__global.productName","type":"string","description":"The human-readable name of the product or application.","example":"SailPoint Identity Security Cloud"},{"key":"__esc.html()","type":"function","description":"Escapes the characters in a string using HTML entities (e.g. &quot;, &amp;).","example":"$__esc.html($value)"},{"key":"__global.standardLogoURL","type":"string","description":"URL for the standard size logo displayed on various pages.","example":null}],
template_variables=[{"key":"approvalName","type":"string","description":"Display name of the approval request","example":"Request for Access to Sales Application"},{"key":"requester","type":"object","description":"Identity who submitted the approval request","example":{"identityID":"4701645331ee4e578ca7884da99452fc","type":"IDENTITY","name":"Rebecca Requester","email":"rebecca@testmail.identitysoon.com"}}]
)

```
[[Back to top]](#) 

