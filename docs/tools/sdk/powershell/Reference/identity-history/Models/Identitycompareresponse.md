---
id: identitycompareresponse
title: Identitycompareresponse
pagination_label: Identitycompareresponse
sidebar_label: Identitycompareresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identitycompareresponse', 'Identitycompareresponse'] 
slug: /tools/sdk/powershell/identityhistory/models/identitycompareresponse
tags: ['SDK', 'Software Development Kit', 'Identitycompareresponse', 'Identitycompareresponse']
---


# Identitycompareresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItemDiff** | [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 

## Examples

- Prepare the resource
```powershell
$Identitycompareresponse = Initialize-Identitycompareresponse  -AccessItemDiff null
```

- Convert the resource to JSON
```powershell
$Identitycompareresponse | ConvertTo-JSON
```


[[Back to top]](#) 

