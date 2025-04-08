---
id: v2025-source1
title: Source1
pagination_label: Source1
sidebar_label: Source1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Source1', 'V2025Source1'] 
slug: /tools/sdk/powershell/v2025/models/source1
tags: ['SDK', 'Software Development Kit', 'Source1', 'V2025Source1']
---


# Source1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Attribute mapping type. | [optional] 
**Properties** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Attribute mapping properties. | [optional] 

## Examples

- Prepare the resource
```powershell
$Source1 = Initialize-PSSailpoint.V2025Source1  -Type rule `
 -Properties {ruleType=IdentityAttribute, ruleName=Cloud Promote Identity Attribute}
```

- Convert the resource to JSON
```powershell
$Source1 | ConvertTo-JSON
```


[[Back to top]](#) 

