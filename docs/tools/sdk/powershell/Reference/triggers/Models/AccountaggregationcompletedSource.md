---
id: accountaggregationcompleted-source
title: AccountaggregationcompletedSource
pagination_label: AccountaggregationcompletedSource
sidebar_label: AccountaggregationcompletedSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountaggregationcompletedSource', 'AccountaggregationcompletedSource'] 
slug: /tools/sdk/powershell/triggers/models/accountaggregationcompleted-source
tags: ['SDK', 'Software Development Kit', 'AccountaggregationcompletedSource', 'AccountaggregationcompletedSource']
---


# AccountaggregationcompletedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | The DTO type of the source the accounts are being aggregated from. | [required]
**Id** | **String** | The ID of the source the accounts are being aggregated from. | [required]
**Name** | **String** | Display name of the source the accounts are being aggregated from. | [required]

## Examples

- Prepare the resource
```powershell
$AccountaggregationcompletedSource = Initialize-AccountaggregationcompletedSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$AccountaggregationcompletedSource | ConvertTo-JSON
```


[[Back to top]](#) 

