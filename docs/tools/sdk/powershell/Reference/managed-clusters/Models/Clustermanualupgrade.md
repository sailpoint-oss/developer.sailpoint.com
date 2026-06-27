---
id: clustermanualupgrade
title: Clustermanualupgrade
pagination_label: Clustermanualupgrade
sidebar_label: Clustermanualupgrade
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Clustermanualupgrade', 'Clustermanualupgrade'] 
slug: /tools/sdk/powershell/managedclusters/models/clustermanualupgrade
tags: ['SDK', 'Software Development Kit', 'Clustermanualupgrade', 'Clustermanualupgrade']
---


# Clustermanualupgrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Jobs** | [**[]ClustermanualupgradeJobsInner**](clustermanualupgrade-jobs-inner) | List of job objects for the upgrade request. | [optional] 

## Examples

- Prepare the resource
```powershell
$Clustermanualupgrade = Initialize-Clustermanualupgrade  -Jobs null
```

- Convert the resource to JSON
```powershell
$Clustermanualupgrade | ConvertTo-JSON
```


[[Back to top]](#) 

