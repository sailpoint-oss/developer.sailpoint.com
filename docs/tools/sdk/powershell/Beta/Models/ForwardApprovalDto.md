---
id: forward-approval-dto
title: ForwardApprovalDto
pagination_label: ForwardApprovalDto
sidebar_label: ForwardApprovalDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ForwardApprovalDto'] 
slug: /tools/sdk/powershell/beta/models/forward-approval-dto
tags: ['SDK', 'Software Development Kit', 'ForwardApprovalDto']
---


# ForwardApprovalDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewOwnerId** |  **String** | The Id of the new owner | 
**Comment** |  **String** | The comment provided by the forwarder | 

## Examples

- Prepare the resource
```powershell
$ForwardApprovalDto = Initialize-PSSailpointBetaForwardApprovalDto  -NewOwnerId null `
 -Comment null
```

- Convert the resource to JSON
```powershell
$ForwardApprovalDto | ConvertTo-JSON
```


[[Back to top]](#) 

