---
id: commonaccessidstatus
title: Commonaccessidstatus
pagination_label: Commonaccessidstatus
sidebar_label: Commonaccessidstatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Commonaccessidstatus', 'Commonaccessidstatus'] 
slug: /tools/sdk/powershell/iaicommonaccess/models/commonaccessidstatus
tags: ['SDK', 'Software Development Kit', 'Commonaccessidstatus', 'Commonaccessidstatus']
---


# Commonaccessidstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfirmedIds** | **[]String** | List of confirmed common access ids. | [optional] 
**DeniedIds** | **[]String** | List of denied common access ids. | [optional] 

## Examples

- Prepare the resource
```powershell
$Commonaccessidstatus = Initialize-Commonaccessidstatus  -ConfirmedIds null `
 -DeniedIds null
```

- Convert the resource to JSON
```powershell
$Commonaccessidstatus | ConvertTo-JSON
```


[[Back to top]](#) 

