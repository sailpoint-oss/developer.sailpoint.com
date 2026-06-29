---
id: accountsselectionresponse
title: Accountsselectionresponse
pagination_label: Accountsselectionresponse
sidebar_label: Accountsselectionresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountsselectionresponse', 'Accountsselectionresponse'] 
slug: /tools/sdk/powershell/accessrequests/models/accountsselectionresponse
tags: ['SDK', 'Software Development Kit', 'Accountsselectionresponse', 'Accountsselectionresponse']
---


# Accountsselectionresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identities** | [**[]Identityaccountselections**](identityaccountselections) | A list of available account selections per identity in the request, for all the requested items | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountsselectionresponse = Initialize-Accountsselectionresponse  -Identities null
```

- Convert the resource to JSON
```powershell
$Accountsselectionresponse | ConvertTo-JSON
```


[[Back to top]](#) 

