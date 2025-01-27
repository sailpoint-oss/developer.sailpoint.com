---
id: beta-close-access-request
title: CloseAccessRequest
pagination_label: CloseAccessRequest
sidebar_label: CloseAccessRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CloseAccessRequest'] 
slug: /tools/sdk/powershell/beta/models/close-access-request
tags: ['SDK', 'Software Development Kit', 'CloseAccessRequest']
---


# CloseAccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestIds** |  **[]String** | Access Request IDs for the requests to be closed. Accepts 1-500 Identity Request IDs per request. | [required]
**Message** |  Pointer to **String** | Reason for closing the access request. Displayed under Warnings in IdentityNow. | [optional] [default to "The IdentityNow Administrator manually closed this request."]
**ExecutionStatus** |  Pointer to  **Enum** [  "Terminated",    "Completed" ] | The request's provisioning status. Displayed as Stage in IdentityNow. | [optional] [default to "Terminated"]
**CompletionStatus** |  Pointer to  **Enum** [  "Success",    "Incomplete",    "Failure" ] | The request's overall status. Displayed as Status in IdentityNow. | [optional] [default to "Failure"]

## Examples

- Prepare the resource
```powershell
$CloseAccessRequest = Initialize-PSSailpoint.BetaCloseAccessRequest  -AccessRequestIds [2c90ad2a70ace7d50170acf22ca90010] `
 -Message The IdentityNow Administrator manually closed this request. `
 -ExecutionStatus Terminated `
 -CompletionStatus Failure
```

- Convert the resource to JSON
```powershell
$CloseAccessRequest | ConvertTo-JSON
```


[[Back to top]](#) 

