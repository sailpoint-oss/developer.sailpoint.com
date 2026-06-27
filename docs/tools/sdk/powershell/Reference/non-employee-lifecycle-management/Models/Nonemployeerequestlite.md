---
id: nonemployeerequestlite
title: Nonemployeerequestlite
pagination_label: Nonemployeerequestlite
sidebar_label: Nonemployeerequestlite
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nonemployeerequestlite', 'Nonemployeerequestlite'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/nonemployeerequestlite
tags: ['SDK', 'Software Development Kit', 'Nonemployeerequestlite', 'Nonemployeerequestlite']
---


# Nonemployeerequestlite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Non-Employee request id. | [optional] 
**Requester** | [**Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Nonemployeerequestlite = Initialize-Nonemployeerequestlite  -Id ac110005-7156-1150-8171-5b292e3e0084 `
 -Requester null
```

- Convert the resource to JSON
```powershell
$Nonemployeerequestlite | ConvertTo-JSON
```


[[Back to top]](#) 

