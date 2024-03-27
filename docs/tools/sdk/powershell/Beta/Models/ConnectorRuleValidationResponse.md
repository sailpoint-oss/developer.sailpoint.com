---
id: connector-rule-validation-response
title: ConnectorRuleValidationResponse
pagination_label: ConnectorRuleValidationResponse
sidebar_label: ConnectorRuleValidationResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ConnectorRuleValidationResponse'] 
slug: /tools/sdk/powershell/beta/models/connector-rule-validation-response
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleValidationResponse']
---


# ConnectorRuleValidationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |   **Enum** [  "OK",    "ERROR" ] |  | 
**Details** |  [**[]ConnectorRuleValidationResponseDetailsInner**](connector-rule-validation-response-details-inner) |  | 

## Examples

- Prepare the resource
```powershell
$ConnectorRuleValidationResponse = Initialize-PSSailpointBetaConnectorRuleValidationResponse  -State ERROR `
 -Details null
```

- Convert the resource to JSON
```powershell
$ConnectorRuleValidationResponse | ConvertTo-JSON
```


[[Back to top]](#) 

