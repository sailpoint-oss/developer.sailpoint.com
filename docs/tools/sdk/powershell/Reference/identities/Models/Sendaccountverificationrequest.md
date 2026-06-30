---
id: sendaccountverificationrequest
title: Sendaccountverificationrequest
pagination_label: Sendaccountverificationrequest
sidebar_label: Sendaccountverificationrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sendaccountverificationrequest', 'Sendaccountverificationrequest'] 
slug: /tools/sdk/powershell/identities/models/sendaccountverificationrequest
tags: ['SDK', 'Software Development Kit', 'Sendaccountverificationrequest', 'Sendaccountverificationrequest']
---


# Sendaccountverificationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceName** | **String** | The source name where identity account password should be reset | [optional] 
**Via** |  **Enum** [  "EMAIL_WORK",    "EMAIL_PERSONAL",    "LINK_WORK",    "LINK_PERSONAL" ] | The method to send notification | [required]

## Examples

- Prepare the resource
```powershell
$Sendaccountverificationrequest = Initialize-Sendaccountverificationrequest  -SourceName Active Directory Source `
 -Via EMAIL_WORK
```

- Convert the resource to JSON
```powershell
$Sendaccountverificationrequest | ConvertTo-JSON
```


[[Back to top]](#) 

