---
id: bulkapproveentitlementrecommendationrequest
title: Bulkapproveentitlementrecommendationrequest
pagination_label: Bulkapproveentitlementrecommendationrequest
sidebar_label: Bulkapproveentitlementrecommendationrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Bulkapproveentitlementrecommendationrequest', 'Bulkapproveentitlementrecommendationrequest'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/bulkapproveentitlementrecommendationrequest
tags: ['SDK', 'Software Development Kit', 'Bulkapproveentitlementrecommendationrequest', 'Bulkapproveentitlementrecommendationrequest']
---


# Bulkapproveentitlementrecommendationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]Bulkapproveentitlementrecommendationitem**](bulkapproveentitlementrecommendationitem) | The list of recommendation items to approve. | [required]

## Examples

- Prepare the resource
```powershell
$Bulkapproveentitlementrecommendationrequest = Initialize-Bulkapproveentitlementrecommendationrequest  -Items [{"id":"79db50d4-723c-4aa0-a824-83c2205d82d1","recordType":"SED","description":"Provides access and permissions related to the Delinea Secret Server Cloud system."},{"id":"a1b2c3d4-e5f6-7890-abcd-ef1234567890","recordType":"privilege","privilegeLevel":"high"}]
```

- Convert the resource to JSON
```powershell
$Bulkapproveentitlementrecommendationrequest | ConvertTo-JSON
```


[[Back to top]](#) 

