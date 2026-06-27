---
id: adminreviewreassign
title: Adminreviewreassign
pagination_label: Adminreviewreassign
sidebar_label: Adminreviewreassign
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Adminreviewreassign', 'Adminreviewreassign'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/adminreviewreassign
tags: ['SDK', 'Software Development Kit', 'Adminreviewreassign', 'Adminreviewreassign']
---


# Adminreviewreassign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationIds** | **[]String** | List of certification IDs to reassign | [optional] 
**ReassignTo** | [**AdminreviewreassignReassignTo**](adminreviewreassign-reassign-to) |  | [optional] 
**Reason** | **String** | Comment to explain why the certification was reassigned | [optional] 

## Examples

- Prepare the resource
```powershell
$Adminreviewreassign = Initialize-Adminreviewreassign  -CertificationIds ["af3859464779471211bb8424a563abc1","af3859464779471211bb8424a563abc2","af3859464779471211bb8424a563abc3"] `
 -ReassignTo null `
 -Reason reassigned for some reason
```

- Convert the resource to JSON
```powershell
$Adminreviewreassign | ConvertTo-JSON
```


[[Back to top]](#) 

