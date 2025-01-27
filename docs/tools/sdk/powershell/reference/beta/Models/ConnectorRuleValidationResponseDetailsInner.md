---
id: beta-connector-rule-validation-response-details-inner
title: ConnectorRuleValidationResponseDetailsInner
pagination_label: ConnectorRuleValidationResponseDetailsInner
sidebar_label: ConnectorRuleValidationResponseDetailsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorRuleValidationResponseDetailsInner'] 
slug: /tools/sdk/powershell/beta/models/connector-rule-validation-response-details-inner
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleValidationResponseDetailsInner']
---


# ConnectorRuleValidationResponseDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Line** |  **Int32** | The line number where the issue occurred | [required]
**Column** |  **Int32** | the column number where the issue occurred | [required]
**Messsage** |  Pointer to **String** | a description of the issue in the code | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorRuleValidationResponseDetailsInner = Initialize-PSSailpoint.BetaConnectorRuleValidationResponseDetailsInner  -Line 2 `
 -Column 5 `
 -Messsage Remove reference to .decrypt(
```

- Convert the resource to JSON
```powershell
$ConnectorRuleValidationResponseDetailsInner | ConvertTo-JSON
```


[[Back to top]](#) 

