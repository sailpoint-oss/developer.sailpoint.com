---
id: accountdeleterequestinput
title: Accountdeleterequestinput
pagination_label: Accountdeleterequestinput
sidebar_label: Accountdeleterequestinput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountdeleterequestinput', 'Accountdeleterequestinput'] 
slug: /tools/sdk/powershell/accountdeletionrequests/models/accountdeleterequestinput
tags: ['SDK', 'Software Development Kit', 'Accountdeleterequestinput', 'Accountdeleterequestinput']
---


# Accountdeleterequestinput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** | **String** | Reason for deleting the account. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountdeleterequestinput = Initialize-Accountdeleterequestinput  -Comments Requesting account deletion request
```

- Convert the resource to JSON
```powershell
$Accountdeleterequestinput | ConvertTo-JSON
```


[[Back to top]](#) 

