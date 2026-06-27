---
id: commonaccessitemrequest
title: Commonaccessitemrequest
pagination_label: Commonaccessitemrequest
sidebar_label: Commonaccessitemrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Commonaccessitemrequest', 'Commonaccessitemrequest'] 
slug: /tools/sdk/powershell/iaicommonaccess/models/commonaccessitemrequest
tags: ['SDK', 'Software Development Kit', 'Commonaccessitemrequest', 'Commonaccessitemrequest']
---


# Commonaccessitemrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Access** | [**Commonaccessitemaccess**](commonaccessitemaccess) |  | [optional] 
**Status** | [**Commonaccessitemstate**](commonaccessitemstate) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Commonaccessitemrequest = Initialize-Commonaccessitemrequest  -Access null `
 -Status null
```

- Convert the resource to JSON
```powershell
$Commonaccessitemrequest | ConvertTo-JSON
```


[[Back to top]](#) 

