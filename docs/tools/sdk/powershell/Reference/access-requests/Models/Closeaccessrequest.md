---
id: closeaccessrequest
title: Closeaccessrequest
pagination_label: Closeaccessrequest
sidebar_label: Closeaccessrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Closeaccessrequest', 'Closeaccessrequest'] 
slug: /tools/sdk/powershell/accessrequests/models/closeaccessrequest
tags: ['SDK', 'Software Development Kit', 'Closeaccessrequest', 'Closeaccessrequest']
---


# Closeaccessrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestIds** | **[]String** | Access Request IDs for the requests to be closed. Accepts 1-500 Identity Request IDs per request. | [required]
**Message** | **String** | Reason for closing the access request. Displayed under Warnings in IdentityNow. | [optional] [default to "The IdentityNow Administrator manually closed this request."]
**ExecutionStatus** |  **Enum** [  "Terminated",    "Completed" ] | The request's provisioning status. Displayed as Stage in IdentityNow. | [optional] [default to "Terminated"]
**CompletionStatus** |  **Enum** [  "Success",    "Incomplete",    "Failure" ] | The request's overall status. Displayed as Status in IdentityNow. | [optional] [default to "Failure"]

## Examples

- Prepare the resource
```powershell
$Closeaccessrequest = Initialize-Closeaccessrequest  -AccessRequestIds ["2c90ad2a70ace7d50170acf22ca90010"] `
 -Message The IdentityNow Administrator manually closed this request. `
 -ExecutionStatus Terminated `
 -CompletionStatus Failure
```

- Convert the resource to JSON
```powershell
$Closeaccessrequest | ConvertTo-JSON
```


[[Back to top]](#) 

