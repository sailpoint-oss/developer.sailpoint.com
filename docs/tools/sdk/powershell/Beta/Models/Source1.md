---
id: source1
title: Source1
pagination_label: Source1
sidebar_label: Source1
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Source1'] 
slug: /tools/sdk/powershell/beta/models/source1
tags: ['SDK', 'Software Development Kit', 'Source1']
---


# Source1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **String** | The type of the source | [optional] 
**Properties** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | The source properties | [optional] 

## Examples

- Prepare the resource
```powershell
$Source1 = Initialize-PSSailpointBetaSource1  -Type rule `
 -Properties {attribute&#x3D;null, sourceName&#x3D;Employees}
```

- Convert the resource to JSON
```powershell
$Source1 | ConvertTo-JSON
```


[[Back to top]](#) 

