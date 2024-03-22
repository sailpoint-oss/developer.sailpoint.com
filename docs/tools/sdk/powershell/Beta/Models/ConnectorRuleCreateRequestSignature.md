---
id: connector-rule-create-request-signature
title: ConnectorRuleCreateRequestSignature
pagination_label: ConnectorRuleCreateRequestSignature
sidebar_label: ConnectorRuleCreateRequestSignature
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ConnectorRuleCreateRequestSignature'] 
slug: /tools/sdk/powershell/beta/models/connector-rule-create-request-signature
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleCreateRequestSignature']
---


# ConnectorRuleCreateRequestSignature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** |  [**[]Argument**](argument) |  | 
**Output** |  Pointer to [**Argument**](argument) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorRuleCreateRequestSignature = Initialize-PSSailpointBetaConnectorRuleCreateRequestSignature  -VarInput null `
 -Output null
```

- Convert the resource to JSON
```powershell
$ConnectorRuleCreateRequestSignature | ConvertTo-JSON
```


[[Back to top]](#) 

