---
id: list-pending-approvals-v1401-response
title: ListPendingApprovalsV1401Response
pagination_label: ListPendingApprovalsV1401Response
sidebar_label: ListPendingApprovalsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListPendingApprovalsV1401Response', 'ListPendingApprovalsV1401Response'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/list-pending-approvals-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListPendingApprovalsV1401Response', 'ListPendingApprovalsV1401Response']
---


# ListPendingApprovalsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListPendingApprovalsV1401Response = Initialize-ListPendingApprovalsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListPendingApprovalsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

