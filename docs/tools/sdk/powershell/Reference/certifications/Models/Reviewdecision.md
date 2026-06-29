---
id: reviewdecision
title: Reviewdecision
pagination_label: Reviewdecision
sidebar_label: Reviewdecision
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reviewdecision', 'Reviewdecision'] 
slug: /tools/sdk/powershell/certifications/models/reviewdecision
tags: ['SDK', 'Software Development Kit', 'Reviewdecision', 'Reviewdecision']
---


# Reviewdecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id of the review decision | [required]
**Decision** | [**Certificationdecision**](certificationdecision) |  | [required]
**ProposedEndDate** | **System.DateTime** | The date at which a user's access should be taken away. Should only be set for `REVOKE` decisions. | [optional] 
**Bulk** | **Boolean** | Indicates whether decision should be marked as part of a larger bulk decision | [required]
**Recommendation** | [**Reviewrecommendation**](reviewrecommendation) |  | [optional] 
**Comments** | **String** | Comments recorded when the decision was made | [optional] 

## Examples

- Prepare the resource
```powershell
$Reviewdecision = Initialize-Reviewdecision  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Decision null `
 -ProposedEndDate 2017-07-11T18:45:37.098Z `
 -Bulk true `
 -Recommendation null `
 -Comments This user no longer needs access to this source
```

- Convert the resource to JSON
```powershell
$Reviewdecision | ConvertTo-JSON
```


[[Back to top]](#) 

