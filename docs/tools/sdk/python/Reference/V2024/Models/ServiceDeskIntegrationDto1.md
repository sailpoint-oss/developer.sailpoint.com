---
id: v2024-service-desk-integration-dto1
title: ServiceDeskIntegrationDto1
pagination_label: ServiceDeskIntegrationDto1
sidebar_label: ServiceDeskIntegrationDto1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ServiceDeskIntegrationDto1', 'V2024ServiceDeskIntegrationDto1'] 
slug: /tools/sdk/python/v2024/models/service-desk-integration-dto1
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationDto1', 'V2024ServiceDeskIntegrationDto1']
---

# ServiceDeskIntegrationDto1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Service Desk integration's name. The name must be unique. | [required]
**description** | **str** | Service Desk integration's description. | [required]
**type** | **str** | Service Desk integration types:  - ServiceNowSDIM - ServiceNow  | [required][default to 'ServiceNowSDIM']
**owner_ref** | [**OwnerDto**](owner-dto) |  | [optional] 
**cluster_ref** | [**SourceClusterDto**](source-cluster-dto) |  | [optional] 
**cluster** | **str** | Cluster ID for the Service Desk integration (replaced by clusterRef, retained for backward compatibility). | [optional] 
**managed_sources** | **[]str** | Source IDs for the Service Desk integration (replaced by provisioningConfig.managedSResourceRefs, but retained here for backward compatibility). | [optional] 
**provisioning_config** | [**ProvisioningConfig1**](provisioning-config1) |  | [optional] 
**attributes** | **map[string]object** | Service Desk integration's attributes. Validation constraints enforced by the implementation. | [required]
**before_provisioning_rule** | [**BeforeProvisioningRuleDto**](before-provisioning-rule-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.service_desk_integration_dto1 import ServiceDeskIntegrationDto1

service_desk_integration_dto1 = ServiceDeskIntegrationDto1(
name='Service Desk Integration Name',
description='A very nice Service Desk integration',
type='ServiceNowSDIM',
owner_ref=sailpoint.v2024.models.owner_dto.OwnerDto(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
cluster_ref=sailpoint.v2024.models.source_cluster_dto.SourceClusterDto(
                    type = 'CLUSTER', 
                    id = '2c9180847a7fccdd017aa5896f9f4f6f', 
                    name = 'Training VA', ),
cluster='xyzzy999',
managed_sources=[2c9180835d191a86015d28455b4a2329, 2c5680835d191a85765d28455b4a9823],
provisioning_config=sailpoint.v2024.models.provisioning_config_1.ProvisioningConfig_1(
                    universal_manager = True, 
                    managed_resource_refs = [{type=SOURCE, id=2c9180855d191c59015d291ceb051111, name=My Source 1}, {type=SOURCE, id=2c9180855d191c59015d291ceb052222, name=My Source 2}], 
                    plan_initializer_script = sailpoint.v2024.models.provisioning_config_1_plan_initializer_script.ProvisioningConfig_1_planInitializerScript(
                        source = '<?xml version='1.0' encoding='UTF-8'?>\r\n<!DOCTYPE Rule PUBLIC \"sailpoint.dtd\" \"sailpoint.dtd\">\r\n<Rule name=\"Example Rule\" type=\"BeforeProvisioning\">\r\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\r\n  <Source><![CDATA[\r\nimport sailpoint.object.*;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\r\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\r\nimport sailpoint.object.ProvisioningPlan;\r\nimport sailpoint.object.ProvisioningPlan.Operation;\r\n\r\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n}\r\n\r\n  ]]></Source>
', ), 
                    no_provisioning_requests = True, 
                    provisioning_request_expiration = 7, ),
attributes={property=value, key=value},
before_provisioning_rule=sailpoint.v2024.models.before_provisioning_rule_dto.BeforeProvisioningRuleDto(
                    type = 'RULE', 
                    id = '048eb3d55c5a4758bd07dccb87741c78', 
                    name = 'Before Provisioning Airtable Rule', )
)

```
[[Back to top]](#) 

