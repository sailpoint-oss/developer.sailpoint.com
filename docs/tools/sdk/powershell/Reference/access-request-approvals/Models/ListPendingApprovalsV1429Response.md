---
id: list-pending-approvals-v1429-response
title: ListPendingApprovalsV1429Response
pagination_label: ListPendingApprovalsV1429Response
sidebar_label: ListPendingApprovalsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListPendingApprovalsV1429Response', 'ListPendingApprovalsV1429Response'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/list-pending-approvals-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListPendingApprovalsV1429Response', 'ListPendingApprovalsV1429Response']
---


# ListPendingApprovalsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListPendingApprovalsV1429Response = Initialize-ListPendingApprovalsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListPendingApprovalsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

