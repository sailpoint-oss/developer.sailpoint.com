---
id: processingdetails
title: Processingdetails
pagination_label: Processingdetails
sidebar_label: Processingdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Processingdetails', 'Processingdetails'] 
slug: /tools/sdk/powershell/search/models/processingdetails
tags: ['SDK', 'Software Development Kit', 'Processingdetails', 'Processingdetails']
---


# Processingdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**Stage** | **String** |  | [optional] 
**RetryCount** | **Int32** |  | [optional] 
**VarStackTrace** | **String** |  | [optional] 
**Message** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Processingdetails = Initialize-Processingdetails  -Date 2018-06-25T20:22:28.104Z `
 -Stage In Process `
 -RetryCount 0 `
 -VarStackTrace <stack trace> `
 -Message <message>
```

- Convert the resource to JSON
```powershell
$Processingdetails | ConvertTo-JSON
```


[[Back to top]](#) 

