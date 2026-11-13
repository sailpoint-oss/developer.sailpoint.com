# SourceServiceDeskIntegrationDto

# SourceServiceDeskIntegrationDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | ID of the Service Desk Integration. | [default to undefined]
**name** | `string` | Name of the Service Desk Integration, as given by the administrator who created it. Use this to find the integration in the Service Desk Integrations list. | [default to undefined]
**type** | `string` | Type of the Service Desk Integration, matching the connector it was created from. This is the same value the Service Desk Integration APIs report as `type`, for example: - ServiceNowSDIM - ServiceNow  The supported types are not fixed, so use [List service desk integration types](https://developer.sailpoint.com/docs/api/get-service-desk-integration-types-v-1) for the current set rather than hard coding them. | [default to undefined]

