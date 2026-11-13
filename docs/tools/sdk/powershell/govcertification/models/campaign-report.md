# CampaignReport

# CampaignReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the campaign report. | [required]
**Name** | **String** | The human readable report name | [required]
**CampaignId** | **String** | The unique ID of the campaign. | [required]
**Type** | **CampaignReportType** |  | [required]
**Format** | **CampaignReportFormat** |  | [required]
**Created** | **System.DateTime** | The date the report was created. | [required]
**Modified** | **System.DateTime** | The date the report was modified. | [optional] 
**Status** | **CampaignReportStatus** |  | [required]

## Examples

- Prepare the resource
```powershell
$CampaignReport = Initialize-CampaignReport  -Id e1aeb0b6-0021-4f40-8bc7-5c56533214b3 `
 -Name ABC Campaign - Sign Off Report 2024-10-16_13:18UTC `
 -CampaignId 4e1aeef7-3742-40ea-920b-deeb8d20d7ee `
 -Type null `
 -Format null `
 -Created 2018-10-19T13:49:37.385Z `
 -Modified 2018-10-19T13:49:37.385Z `
 -Status null
```

- Convert the resource to JSON
```powershell
$CampaignReport | ConvertTo-JSON
```


[[Back to top]](#) 

