---
id: templatevariablesdto
title: Templatevariablesdto
pagination_label: Templatevariablesdto
sidebar_label: Templatevariablesdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Templatevariablesdto', 'Templatevariablesdto'] 
slug: /tools/sdk/powershell/notifications/models/templatevariablesdto
tags: ['SDK', 'Software Development Kit', 'Templatevariablesdto', 'Templatevariablesdto']
---


# Templatevariablesdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The notification template key. | [optional] 
**Medium** | [**Templatemediumdto**](templatemediumdto) |  | [optional] 
**GlobalVariables** | [**[]Templatevariable**](templatevariable) | Global variables available to all templates for this tenant (e.g. __global.*, __recipient, __util.*, __dateTool.*, __esc.*). Includes both data variables and function-type helpers.  | [optional] 
**TemplateVariables** | [**[]Templatevariable**](templatevariable) | Template-specific variables for the given key and medium (e.g. approverPath, requester, attributes). | [optional] 

## Examples

- Prepare the resource
```powershell
$Templatevariablesdto = Initialize-Templatevariablesdto  -Key approval_request_notification `
 -Medium null `
 -GlobalVariables [{"key":"__global.productName","type":"string","description":"The human-readable name of the product or application.","example":"SailPoint Identity Security Cloud"},{"key":"__esc.html()","type":"function","description":"Escapes the characters in a string using HTML entities (e.g. &quot;, &amp;).","example":"$__esc.html($value)"},{"key":"__global.standardLogoURL","type":"string","description":"URL for the standard size logo displayed on various pages.","example":null}] `
 -TemplateVariables [{"key":"approvalName","type":"string","description":"Display name of the approval request","example":"Request for Access to Sales Application"},{"key":"requester","type":"object","description":"Identity who submitted the approval request","example":{"identityID":"4701645331ee4e578ca7884da99452fc","type":"IDENTITY","name":"Rebecca Requester","email":"rebecca@testmail.identitysoon.com"}}]
```

- Convert the resource to JSON
```powershell
$Templatevariablesdto | ConvertTo-JSON
```


[[Back to top]](#) 

