---
id: beta-load-uncorrelated-accounts-task-task-attributes
title: LoadUncorrelatedAccountsTaskTaskAttributes
pagination_label: LoadUncorrelatedAccountsTaskTaskAttributes
sidebar_label: LoadUncorrelatedAccountsTaskTaskAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadUncorrelatedAccountsTaskTaskAttributes', 'BetaLoadUncorrelatedAccountsTaskTaskAttributes'] 
slug: /tools/sdk/powershell/beta/models/load-uncorrelated-accounts-task-task-attributes
tags: ['SDK', 'Software Development Kit', 'LoadUncorrelatedAccountsTaskTaskAttributes', 'BetaLoadUncorrelatedAccountsTaskTaskAttributes']
---


# LoadUncorrelatedAccountsTaskTaskAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QpocJobId** | **String** | The id of qpoc job | [optional] 
**TaskStartDelay** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | the task start delay value | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadUncorrelatedAccountsTaskTaskAttributes = Initialize-PSSailpoint.BetaLoadUncorrelatedAccountsTaskTaskAttributes  -QpocJobId 5d303d46-fc51-48cd-9c6d-4e211e3ab63c `
 -TaskStartDelay 
```

- Convert the resource to JSON
```powershell
$LoadUncorrelatedAccountsTaskTaskAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

