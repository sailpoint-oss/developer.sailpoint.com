# SourceServiceDeskIntegrationDto

# SourceServiceDeskIntegrationDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the Service Desk Integration. | [required]
**Name** | **String** | Name of the Service Desk Integration, as given by the administrator who created it. Use this to find the integration in the Service Desk Integrations list. | [required]
**Type** | **String** | Type of the Service Desk Integration, matching the connector it was created from. This is the same value the Service Desk Integration APIs report as `type`, for example: - ServiceNowSDIM - ServiceNow  The supported types are not fixed, so use [List service desk integration types](https://developer.sailpoint.com/docs/api/get-service-desk-integration-types-v-1) for the current set rather than hard coding them. | [required]

## Examples

- Prepare the resource
```powershell
$SourceServiceDeskIntegrationDto = Initialize-SourceServiceDeskIntegrationDto  -Id 2c9180835d191a86015d28455b4a2329 `
 -Name ServiceNow Production `
 -Type ServiceNowSDIM
```

- Convert the resource to JSON
```powershell
$SourceServiceDeskIntegrationDto | ConvertTo-JSON
```


[[Back to top]](#) 

