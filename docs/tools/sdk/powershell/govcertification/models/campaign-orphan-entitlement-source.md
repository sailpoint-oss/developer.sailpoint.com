# CampaignOrphanEntitlementSource

# CampaignOrphanEntitlementSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | Kind of reference; currently only SOURCE is used. | [required]
**Id** | **String** | Identifier of the source. | [required]
**Name** | **String** | Display name of the source. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignOrphanEntitlementSource = Initialize-CampaignOrphanEntitlementSource  -Type SOURCE `
 -Id 30e6435e60bf47b0bc11622c31dfdbfd `
 -Name Active Directory
```

- Convert the resource to JSON
```powershell
$CampaignOrphanEntitlementSource | ConvertTo-JSON
```


[[Back to top]](#) 

