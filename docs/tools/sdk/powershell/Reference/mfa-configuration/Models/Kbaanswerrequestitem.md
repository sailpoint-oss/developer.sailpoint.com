---
id: kbaanswerrequestitem
title: Kbaanswerrequestitem
pagination_label: Kbaanswerrequestitem
sidebar_label: Kbaanswerrequestitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Kbaanswerrequestitem', 'Kbaanswerrequestitem'] 
slug: /tools/sdk/powershell/mfaconfiguration/models/kbaanswerrequestitem
tags: ['SDK', 'Software Development Kit', 'Kbaanswerrequestitem', 'Kbaanswerrequestitem']
---


# Kbaanswerrequestitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Question Id | [required]
**Answer** | **String** | An answer for the KBA question | [required]

## Examples

- Prepare the resource
```powershell
$Kbaanswerrequestitem = Initialize-Kbaanswerrequestitem  -Id c54fee53-2d63-4fc5-9259-3e93b9994135 `
 -Answer Your answer
```

- Convert the resource to JSON
```powershell
$Kbaanswerrequestitem | ConvertTo-JSON
```


[[Back to top]](#) 

