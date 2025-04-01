---
id: v2025-campaign-all-of-machine-account-campaign-info
title: CampaignAllOfMachineAccountCampaignInfo
pagination_label: CampaignAllOfMachineAccountCampaignInfo
sidebar_label: CampaignAllOfMachineAccountCampaignInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAllOfMachineAccountCampaignInfo', 'V2025CampaignAllOfMachineAccountCampaignInfo'] 
slug: /tools/sdk/powershell/v2025/models/campaign-all-of-machine-account-campaign-info
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfMachineAccountCampaignInfo', 'V2025CampaignAllOfMachineAccountCampaignInfo']
---


# CampaignAllOfMachineAccountCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceIds** | **[]String** | The list of sources to be included in the campaign. | [optional] 
**ReviewerType** |  **Enum** [  "ACCOUNT_OWNER" ] | The reviewer's type. | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignAllOfMachineAccountCampaignInfo = Initialize-PSSailpoint.V2025CampaignAllOfMachineAccountCampaignInfo  -SourceIds [0fbe863c063c4c88a35fd7f17e8a3df5] `
 -ReviewerType ACCOUNT_OWNER
```

- Convert the resource to JSON
```powershell
$CampaignAllOfMachineAccountCampaignInfo | ConvertTo-JSON
```


[[Back to top]](#) 

