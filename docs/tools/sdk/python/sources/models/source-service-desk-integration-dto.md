# SourceServiceDeskIntegrationDto

# SourceServiceDeskIntegrationDto

A Service Desk Integration that carries out provisioning for a source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the Service Desk Integration. | [required]
**name** | **str** | Name of the Service Desk Integration, as given by the administrator who created it. Use this to find the integration in the Service Desk Integrations list. | [required]
**type** | **str** | Type of the Service Desk Integration, matching the connector it was created from. This is the same value the Service Desk Integration APIs report as `type`, for example: - ServiceNowSDIM - ServiceNow  The supported types are not fixed, so use [List service desk integration types](https://developer.sailpoint.com/docs/api/get-service-desk-integration-types-v-1) for the current set rather than hard coding them. | [required]
\}

## Example

```python
from sailpoint.sources.models.source_service_desk_integration_dto import SourceServiceDeskIntegrationDto

source_service_desk_integration_dto = SourceServiceDeskIntegrationDto(
id='2c9180835d191a86015d28455b4a2329',
name='ServiceNow Production',
type='ServiceNowSDIM'
)

```
[[Back to top]](#) 

