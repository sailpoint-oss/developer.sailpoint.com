---
id: get-account-deletion-requests-v1429-response
title: GetAccountDeletionRequestsV1429Response
pagination_label: GetAccountDeletionRequestsV1429Response
sidebar_label: GetAccountDeletionRequestsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAccountDeletionRequestsV1429Response', 'GetAccountDeletionRequestsV1429Response'] 
slug: /tools/sdk/powershell/accountdeletionrequests/models/get-account-deletion-requests-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAccountDeletionRequestsV1429Response', 'GetAccountDeletionRequestsV1429Response']
---


# GetAccountDeletionRequestsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAccountDeletionRequestsV1429Response = Initialize-GetAccountDeletionRequestsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetAccountDeletionRequestsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

