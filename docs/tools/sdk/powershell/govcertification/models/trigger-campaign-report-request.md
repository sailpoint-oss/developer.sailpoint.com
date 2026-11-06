# TriggerCampaignReportRequest

# TriggerCampaignReportRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **CampaignReportType** |  | [required]
**Format** | **CampaignReportFormat** |  | [required]
**Name** | **String** | The name of the report. The final name will include a timestamp and the appropriate extension based on the format value | [required]

## Examples

- Prepare the resource
```powershell
$TriggerCampaignReportRequest = Initialize-TriggerCampaignReportRequest  -Type null `
 -Format null `
 -Name My Campaign Report
```

- Convert the resource to JSON
```powershell
$TriggerCampaignReportRequest | ConvertTo-JSON
```


[[Back to top]](#) 

