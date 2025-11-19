---
id: v2024-service-desk-integration-template-dto
title: ServiceDeskIntegrationTemplateDto
pagination_label: ServiceDeskIntegrationTemplateDto
sidebar_label: ServiceDeskIntegrationTemplateDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ServiceDeskIntegrationTemplateDto', 'V2024ServiceDeskIntegrationTemplateDto'] 
slug: /tools/sdk/python/v2024/models/service-desk-integration-template-dto
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationTemplateDto', 'V2024ServiceDeskIntegrationTemplateDto']
---

# ServiceDeskIntegrationTemplateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**type** | **str** | The 'type' property specifies the type of the Service Desk integration template. | [required][default to 'Web Service SDIM']
**attributes** | **map[string]object** | The 'attributes' property value is a map of attributes available for integrations using this Service Desk integration template. | [required]
**provisioning_config** | [**ProvisioningConfig**](provisioning-config) |  | [required]
}

## Example

```python
from sailpoint.v2024.models.service_desk_integration_template_dto import ServiceDeskIntegrationTemplateDto

service_desk_integration_template_dto = ServiceDeskIntegrationTemplateDto(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
type='Web Service SDIM',
attributes={property=value, key=value},
provisioning_config=sailpoint.v2024.models.provisioning_config.Provisioning Config(
                    universal_manager = True, 
                    managed_resource_refs = [{type=SOURCE, id=2c9180855d191c59015d291ceb051111, name=My Source 1}, {type=SOURCE, id=2c9180855d191c59015d291ceb052222, name=My Source 2}], 
                    plan_initializer_script = sailpoint.v2024.models.provisioning_config_plan_initializer_script.ProvisioningConfig_planInitializerScript(
                        source = '<?xml version='1.0' encoding='UTF-8'?>\r\n<!DOCTYPE Rule PUBLIC \"sailpoint.dtd\" \"sailpoint.dtd\">\r\n<Rule name=\"Example Rule\" type=\"BeforeProvisioning\">\r\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\r\n  <Source><![CDATA[\r\nimport sailpoint.object.*;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\r\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\r\nimport sailpoint.object.ProvisioningPlan;\r\nimport sailpoint.object.ProvisioningPlan.Operation;\r\n\r\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n}\r\n\r\n  ]]></Source>
', ), 
                    no_provisioning_requests = True, 
                    provisioning_request_expiration = 7, )
)

```
[[Back to top]](#) 

