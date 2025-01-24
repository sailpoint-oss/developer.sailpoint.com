---
id: load-uncorrelated-accounts-task-task-attributes
title: LoadUncorrelatedAccountsTaskTaskAttributes
pagination_label: LoadUncorrelatedAccountsTaskTaskAttributes
sidebar_label: LoadUncorrelatedAccountsTaskTaskAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadUncorrelatedAccountsTaskTaskAttributes'] 
slug: /tools/sdk/powershell/v2024/models/load-uncorrelated-accounts-task-task-attributes
tags: ['SDK', 'Software Development Kit', 'LoadUncorrelatedAccountsTaskTaskAttributes']
---


# LoadUncorrelatedAccountsTaskTaskAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QpocJobId** |  Pointer to **String** | The id of qpoc job | [optional] 
**TaskStartDelay** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | the task start delay value | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadUncorrelatedAccountsTaskTaskAttributes = Initialize-PSSailpoint.V2024LoadUncorrelatedAccountsTaskTaskAttributes  -QpocJobId 5d303d46-fc51-48cd-9c6d-4e211e3ab63c `
 -TaskStartDelay 
```

- Convert the resource to JSON
```powershell
$LoadUncorrelatedAccountsTaskTaskAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

