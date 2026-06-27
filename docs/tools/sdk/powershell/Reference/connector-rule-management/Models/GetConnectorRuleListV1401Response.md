---
id: get-connector-rule-list-v1401-response
title: GetConnectorRuleListV1401Response
pagination_label: GetConnectorRuleListV1401Response
sidebar_label: GetConnectorRuleListV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetConnectorRuleListV1401Response', 'GetConnectorRuleListV1401Response'] 
slug: /tools/sdk/powershell/connectorrulemanagement/models/get-connector-rule-list-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetConnectorRuleListV1401Response', 'GetConnectorRuleListV1401Response']
---


# GetConnectorRuleListV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetConnectorRuleListV1401Response = Initialize-GetConnectorRuleListV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetConnectorRuleListV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

