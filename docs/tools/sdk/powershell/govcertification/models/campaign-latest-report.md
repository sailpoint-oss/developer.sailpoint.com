# CampaignLatestReport

# CampaignLatestReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the campaign report. | [optional] 
**Name** | **String** | The human readable report name | [optional] 
**Created** | **System.DateTime** | The date the report was created. | [optional] 
**Status** | **CampaignReportStatus** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignLatestReport = Initialize-CampaignLatestReport  -Id e1aeb0b6-0021-4f40-8bc7-5c56533214b3 `
 -Name ABC Campaign - Sign Off Report 2024-10-16_13_18UTC.pdf `
 -Created 2018-10-19T13:49:37.385Z `
 -Status null
```

- Convert the resource to JSON
```powershell
$CampaignLatestReport | ConvertTo-JSON
```


[[Back to top]](#) 

