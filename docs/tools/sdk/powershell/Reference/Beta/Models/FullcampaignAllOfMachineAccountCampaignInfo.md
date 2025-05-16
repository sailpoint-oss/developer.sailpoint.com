---
id: beta-fullcampaign-all-of-machine-account-campaign-info
title: FullcampaignAllOfMachineAccountCampaignInfo
pagination_label: FullcampaignAllOfMachineAccountCampaignInfo
sidebar_label: FullcampaignAllOfMachineAccountCampaignInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FullcampaignAllOfMachineAccountCampaignInfo', 'BetaFullcampaignAllOfMachineAccountCampaignInfo'] 
slug: /tools/sdk/powershell/beta/models/fullcampaign-all-of-machine-account-campaign-info
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfMachineAccountCampaignInfo', 'BetaFullcampaignAllOfMachineAccountCampaignInfo']
---


# FullcampaignAllOfMachineAccountCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceIds** | **[]String** | The list of sources to be included in the campaign. | [optional] 
**ReviewerType** |  **Enum** [  "ACCOUNT_OWNER" ] | The reviewer's type. | [optional] 

## Examples

- Prepare the resource
```powershell
$FullcampaignAllOfMachineAccountCampaignInfo = Initialize-BetaFullcampaignAllOfMachineAccountCampaignInfo  -SourceIds [0fbe863c063c4c88a35fd7f17e8a3df5] `
 -ReviewerType ACCOUNT_OWNER
```

- Convert the resource to JSON
```powershell
$FullcampaignAllOfMachineAccountCampaignInfo | ConvertTo-JSON
```


[[Back to top]](#) 

