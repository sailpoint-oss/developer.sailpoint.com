---
id: beta-connector-rule-create-request-signature
title: ConnectorRuleCreateRequestSignature
pagination_label: ConnectorRuleCreateRequestSignature
sidebar_label: ConnectorRuleCreateRequestSignature
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorRuleCreateRequestSignature', 'BetaConnectorRuleCreateRequestSignature'] 
slug: /tools/sdk/powershell/beta/models/connector-rule-create-request-signature
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleCreateRequestSignature', 'BetaConnectorRuleCreateRequestSignature']
---


# ConnectorRuleCreateRequestSignature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | [**[]Argument**](argument) |  | [required]
**Output** | [**Argument**](argument) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorRuleCreateRequestSignature = Initialize-PSSailpoint.BetaConnectorRuleCreateRequestSignature  -VarInput null `
 -Output null
```

- Convert the resource to JSON
```powershell
$ConnectorRuleCreateRequestSignature | ConvertTo-JSON
```


[[Back to top]](#) 

