---
id: access-request-context
title: AccessRequestContext
pagination_label: AccessRequestContext
sidebar_label: AccessRequestContext
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestContext'] 
slug: /tools/sdk/powershell/beta/models/access-request-context
tags: ['SDK', 'Software Development Kit', 'AccessRequestContext']
---


# AccessRequestContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedContext** |  Pointer to [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 
**AssignedContext** |  Pointer to [**[]RoleMatchDto**](role-match-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestContext = Initialize-PSSailpointBetaAccessRequestContext  -RequestedContext null `
 -AssignedContext null
```

- Convert the resource to JSON
```powershell
$AccessRequestContext | ConvertTo-JSON
```


[[Back to top]](#) 

