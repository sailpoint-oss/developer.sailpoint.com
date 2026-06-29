---
id: assignmentcontextdto
title: Assignmentcontextdto
pagination_label: Assignmentcontextdto
sidebar_label: Assignmentcontextdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Assignmentcontextdto', 'Assignmentcontextdto'] 
slug: /tools/sdk/powershell/identities/models/assignmentcontextdto
tags: ['SDK', 'Software Development Kit', 'Assignmentcontextdto', 'Assignmentcontextdto']
---


# Assignmentcontextdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requested** | [**Accessrequestcontext**](accessrequestcontext) |  | [optional] 
**Matched** | [**[]Rolematchdto**](rolematchdto) |  | [optional] 
**ComputedDate** | **String** | Date that the assignment will was evaluated | [optional] 

## Examples

- Prepare the resource
```powershell
$Assignmentcontextdto = Initialize-Assignmentcontextdto  -Requested null `
 -Matched null `
 -ComputedDate Wed Feb 14 10:58:42
```

- Convert the resource to JSON
```powershell
$Assignmentcontextdto | ConvertTo-JSON
```


[[Back to top]](#) 

