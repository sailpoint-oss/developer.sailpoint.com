---
id: account-attributes-changed-source
title: AccountAttributesChangedSource
pagination_label: AccountAttributesChangedSource
sidebar_label: AccountAttributesChangedSource
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountAttributesChangedSource'] 
slug: /tools/sdk/powershell/beta/models/account-attributes-changed-source
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChangedSource']
---


# AccountAttributesChangedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | ID of the object to which this reference applies | 
**Type** |   **Enum** [  "SOURCE" ] | The type of object that is referenced | 
**Name** |  **String** | Human-readable display name of the object to which this reference applies | 

## Examples

- Prepare the resource
```powershell
$AccountAttributesChangedSource = Initialize-PSSailpointBetaAccountAttributesChangedSource  -Id 4e4d982dddff4267ab12f0f1e72b5a6d `
 -Type SOURCE `
 -Name Corporate Active Directory
```

- Convert the resource to JSON
```powershell
$AccountAttributesChangedSource | ConvertTo-JSON
```


[[Back to top]](#) 

