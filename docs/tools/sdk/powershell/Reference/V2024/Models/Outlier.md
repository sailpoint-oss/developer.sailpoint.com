---
id: v2024-outlier
title: Outlier
pagination_label: Outlier
sidebar_label: Outlier
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Outlier', 'V2024Outlier'] 
slug: /tools/sdk/powershell/v2024/models/outlier
tags: ['SDK', 'Software Development Kit', 'Outlier', 'V2024Outlier']
---


# Outlier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The identity's unique identifier for the outlier record | [optional] 
**IdentityId** | **String** | The ID of the identity that is detected as an outlier | [optional] 
**Type** |  **Enum** [  "LOW_SIMILARITY",    "STRUCTURAL" ] | The type of outlier summary | [optional] 
**FirstDetectionDate** | **System.DateTime** | The first date the outlier was detected | [optional] 
**LatestDetectionDate** | **System.DateTime** | The most recent date the outlier was detected | [optional] 
**Ignored** | **Boolean** | Flag whether or not the outlier has been ignored | [optional] 
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Object containing mapped identity attributes | [optional] 
**Score** | **Double** | The outlier score determined by the detection engine ranging from 0..1 | [optional] 
**UnignoreType** |  **Enum** [  "MANUAL",    "AUTOMATIC" ] | Enum value of if the outlier manually or automatically un-ignored. Will be NULL if outlier is not ignored | [optional] 
**UnignoreDate** | **System.DateTime** | shows date when last time has been unignored outlier | [optional] 
**IgnoreDate** | **System.DateTime** | shows date when last time has been ignored outlier | [optional] 

## Examples

- Prepare the resource
```powershell
$Outlier = Initialize-V2024Outlier  -Id 5be33d3e-c54d-4ed7-af73-2380543e8283 `
 -IdentityId 5be33d3e-c54d-4ed7-af73-2380543e8283 `
 -Type LOW_SIMILARITY `
 -FirstDetectionDate 2021-05-01T18:40:35.772Z `
 -LatestDetectionDate 2021-05-03T18:40:35.772Z `
 -Ignored false `
 -Attributes {displayName=John Smith, jobTitle=Software Engineer, department=Engineering} `
 -Score 0.92 `
 -UnignoreType MANUAL `
 -UnignoreDate 2021-06-01T18:40:35.772Z `
 -IgnoreDate 2021-06-01T18:40:35.772Z
```

- Convert the resource to JSON
```powershell
$Outlier | ConvertTo-JSON
```


[[Back to top]](#) 

