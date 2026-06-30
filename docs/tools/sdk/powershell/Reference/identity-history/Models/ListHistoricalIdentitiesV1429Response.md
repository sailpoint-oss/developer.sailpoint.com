---
id: list-historical-identities-v1429-response
title: ListHistoricalIdentitiesV1429Response
pagination_label: ListHistoricalIdentitiesV1429Response
sidebar_label: ListHistoricalIdentitiesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListHistoricalIdentitiesV1429Response', 'ListHistoricalIdentitiesV1429Response'] 
slug: /tools/sdk/powershell/identityhistory/models/list-historical-identities-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListHistoricalIdentitiesV1429Response', 'ListHistoricalIdentitiesV1429Response']
---


# ListHistoricalIdentitiesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListHistoricalIdentitiesV1429Response = Initialize-ListHistoricalIdentitiesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListHistoricalIdentitiesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

