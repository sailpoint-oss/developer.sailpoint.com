---
id: campaign2-all-of-sources-with-orphan-entitlements
title: Campaign2AllOfSourcesWithOrphanEntitlements
pagination_label: Campaign2AllOfSourcesWithOrphanEntitlements
sidebar_label: Campaign2AllOfSourcesWithOrphanEntitlements
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Campaign2AllOfSourcesWithOrphanEntitlements', 'Campaign2AllOfSourcesWithOrphanEntitlements'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/campaign2-all-of-sources-with-orphan-entitlements
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfSourcesWithOrphanEntitlements', 'Campaign2AllOfSourcesWithOrphanEntitlements']
---


# Campaign2AllOfSourcesWithOrphanEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the source | [optional] 
**Type** |  **Enum** [  "SOURCE" ] | Type | [optional] 
**Name** | **String** | Name of the source | [optional] 

## Examples

- Prepare the resource
```powershell
$Campaign2AllOfSourcesWithOrphanEntitlements = Initialize-Campaign2AllOfSourcesWithOrphanEntitlements  -Id 2c90ad2a70ace7d50170acf22ca90010 `
 -Type SOURCE `
 -Name Source with orphan entitlements
```

- Convert the resource to JSON
```powershell
$Campaign2AllOfSourcesWithOrphanEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

