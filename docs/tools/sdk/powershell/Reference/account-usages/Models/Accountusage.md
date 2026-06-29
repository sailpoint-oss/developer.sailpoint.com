---
id: accountusage
title: Accountusage
pagination_label: Accountusage
sidebar_label: Accountusage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountusage', 'Accountusage'] 
slug: /tools/sdk/powershell/accountusages/models/accountusage
tags: ['SDK', 'Software Development Kit', 'Accountusage', 'Accountusage']
---


# Accountusage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | **System.DateTime** | The first day of the month for which activity is aggregated. | [optional] 
**Count** | **Int64** | The number of days within the month that the account was active in a source. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountusage = Initialize-Accountusage  -Date Thu Apr 20 20:00:00 EDT 2023 `
 -Count 10
```

- Convert the resource to JSON
```powershell
$Accountusage | ConvertTo-JSON
```


[[Back to top]](#) 

