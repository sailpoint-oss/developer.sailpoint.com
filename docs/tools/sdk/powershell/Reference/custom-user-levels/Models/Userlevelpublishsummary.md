---
id: userlevelpublishsummary
title: Userlevelpublishsummary
pagination_label: Userlevelpublishsummary
sidebar_label: Userlevelpublishsummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Userlevelpublishsummary', 'Userlevelpublishsummary'] 
slug: /tools/sdk/powershell/customuserlevels/models/userlevelpublishsummary
tags: ['SDK', 'Software Development Kit', 'Userlevelpublishsummary', 'Userlevelpublishsummary']
---


# Userlevelpublishsummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserLevelId** | **String** | The unique identifier of the UserLevel. | [optional] 
**Publish** | **Boolean** | Indicates whether the API call triggered a publish operation. | [optional] [default to $false]
**Status** | **String** | The status of the UserLevel publish operation. | [optional] 
**Modified** | **System.DateTime** | The last modification timestamp of the UserLevel. | [optional] 

## Examples

- Prepare the resource
```powershell
$Userlevelpublishsummary = Initialize-Userlevelpublishsummary  -UserLevelId 6e110911-5984-491b-be74-2707980a46a7 `
 -Publish true `
 -Status ACTIVE `
 -Modified 2023-01-02T12:00Z
```

- Convert the resource to JSON
```powershell
$Userlevelpublishsummary | ConvertTo-JSON
```


[[Back to top]](#) 

