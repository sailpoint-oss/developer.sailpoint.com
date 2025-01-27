---
id: connector-rule-create-request-signature
title: ConnectorRuleCreateRequestSignature
pagination_label: ConnectorRuleCreateRequestSignature
sidebar_label: ConnectorRuleCreateRequestSignature
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorRuleCreateRequestSignature'] 
slug: /tools/sdk/powershell/v2024/models/connector-rule-create-request-signature
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleCreateRequestSignature']
---


# ConnectorRuleCreateRequestSignature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** |  [**[]Argument**](argument) |  | [required]
**Output** |  Pointer to [**Argument**](argument) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorRuleCreateRequestSignature = Initialize-PSSailpoint.V2024ConnectorRuleCreateRequestSignature  -VarInput null `
 -Output null
```

- Convert the resource to JSON
```powershell
$ConnectorRuleCreateRequestSignature | ConvertTo-JSON
```


[[Back to top]](#) 

