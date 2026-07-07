---
id: accountattributeschanged-source
title: AccountattributeschangedSource
pagination_label: AccountattributeschangedSource
sidebar_label: AccountattributeschangedSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountattributeschangedSource', 'AccountattributeschangedSource'] 
slug: /tools/sdk/powershell/triggers/models/accountattributeschanged-source
tags: ['SDK', 'Software Development Kit', 'AccountattributeschangedSource', 'AccountattributeschangedSource']
---


# AccountattributeschangedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the object to which this reference applies | [required]
**Type** |  **Enum** [  "SOURCE" ] | The type of object that is referenced | [required]
**Name** | **String** | Human-readable display name of the object to which this reference applies | [required]

## Examples

- Prepare the resource
```powershell
$AccountattributeschangedSource = Initialize-AccountattributeschangedSource  -Id 4e4d982dddff4267ab12f0f1e72b5a6d `
 -Type SOURCE `
 -Name Corporate Active Directory
```

- Convert the resource to JSON
```powershell
$AccountattributeschangedSource | ConvertTo-JSON
```


[[Back to top]](#) 

