---
id: get-account-deletion-requests-v1401-response
title: GetAccountDeletionRequestsV1401Response
pagination_label: GetAccountDeletionRequestsV1401Response
sidebar_label: GetAccountDeletionRequestsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAccountDeletionRequestsV1401Response', 'GetAccountDeletionRequestsV1401Response'] 
slug: /tools/sdk/powershell/accountdeletionrequests/models/get-account-deletion-requests-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetAccountDeletionRequestsV1401Response', 'GetAccountDeletionRequestsV1401Response']
---


# GetAccountDeletionRequestsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAccountDeletionRequestsV1401Response = Initialize-GetAccountDeletionRequestsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetAccountDeletionRequestsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

