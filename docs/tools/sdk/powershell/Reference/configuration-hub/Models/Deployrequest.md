---
id: deployrequest
title: Deployrequest
pagination_label: Deployrequest
sidebar_label: Deployrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Deployrequest', 'Deployrequest'] 
slug: /tools/sdk/powershell/configurationhub/models/deployrequest
tags: ['SDK', 'Software Development Kit', 'Deployrequest', 'Deployrequest']
---


# Deployrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DraftId** | **String** | The id of the draft to be used by this deploy. | [required]

## Examples

- Prepare the resource
```powershell
$Deployrequest = Initialize-Deployrequest  -DraftId 3d0fe04b-57df-4a46-a83b-8f04b0f9d10b
```

- Convert the resource to JSON
```powershell
$Deployrequest | ConvertTo-JSON
```


[[Back to top]](#) 

