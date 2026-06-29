---
id: roleassignmentdto-assignment-context
title: RoleassignmentdtoAssignmentContext
pagination_label: RoleassignmentdtoAssignmentContext
sidebar_label: RoleassignmentdtoAssignmentContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleassignmentdtoAssignmentContext', 'RoleassignmentdtoAssignmentContext'] 
slug: /tools/sdk/powershell/identities/models/roleassignmentdto-assignment-context
tags: ['SDK', 'Software Development Kit', 'RoleassignmentdtoAssignmentContext', 'RoleassignmentdtoAssignmentContext']
---


# RoleassignmentdtoAssignmentContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requested** | [**Accessrequestcontext**](accessrequestcontext) |  | [optional] 
**Matched** | [**[]Rolematchdto**](rolematchdto) |  | [optional] 
**ComputedDate** | **String** | Date that the assignment will was evaluated | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleassignmentdtoAssignmentContext = Initialize-RoleassignmentdtoAssignmentContext  -Requested null `
 -Matched null `
 -ComputedDate Wed Feb 14 10:58:42
```

- Convert the resource to JSON
```powershell
$RoleassignmentdtoAssignmentContext | ConvertTo-JSON
```


[[Back to top]](#) 

