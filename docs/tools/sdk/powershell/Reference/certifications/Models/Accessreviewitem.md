---
id: accessreviewitem
title: Accessreviewitem
pagination_label: Accessreviewitem
sidebar_label: Accessreviewitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessreviewitem', 'Accessreviewitem'] 
slug: /tools/sdk/powershell/certifications/models/accessreviewitem
tags: ['SDK', 'Software Development Kit', 'Accessreviewitem', 'Accessreviewitem']
---


# Accessreviewitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessSummary** | [**Accesssummary**](accesssummary) |  | [optional] 
**IdentitySummary** | [**Certificationidentitysummary**](certificationidentitysummary) |  | [optional] 
**Id** | **String** | The review item's id | [optional] 
**Completed** | **Boolean** | Whether the review item is complete | [optional] 
**NewAccess** | **Boolean** | Indicates whether the review item is for new access to a source | [optional] 
**Decision** | [**Certificationdecision**](certificationdecision) |  | [optional] 
**Comments** | **String** | Comments for this review item | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessreviewitem = Initialize-Accessreviewitem  -AccessSummary null `
 -IdentitySummary null `
 -Id ef38f94347e94562b5bb8424a56397d8 `
 -Completed false `
 -NewAccess false `
 -Decision null `
 -Comments This user still needs access to this source
```

- Convert the resource to JSON
```powershell
$Accessreviewitem | ConvertTo-JSON
```


[[Back to top]](#) 

