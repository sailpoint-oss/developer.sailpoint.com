---
id: servicedeskintegrationdto
title: Servicedeskintegrationdto
pagination_label: Servicedeskintegrationdto
sidebar_label: Servicedeskintegrationdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Servicedeskintegrationdto', 'Servicedeskintegrationdto'] 
slug: /tools/sdk/python/service-desk-integration/models/servicedeskintegrationdto
tags: ['SDK', 'Software Development Kit', 'Servicedeskintegrationdto', 'Servicedeskintegrationdto']
---

# Servicedeskintegrationdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the Service Desk integration | [optional] 
**name** | **str** | Service Desk integration's name. The name must be unique. | [required]
**created** | **datetime** | The date and time the Service Desk integration was created | [optional] 
**modified** | **datetime** | The date and time the Service Desk integration was last modified | [optional] 
**description** | **str** | Service Desk integration's description. | [required]
**type** | **str** | Service Desk integration types:  - ServiceNowSDIM - ServiceNow  | [required][default to 'ServiceNowSDIM']
**owner_ref** | [**Ownerdto**](ownerdto) |  | [optional] 
**cluster_ref** | [**Sourceclusterdto**](sourceclusterdto) |  | [optional] 
**cluster** | **str** | Cluster ID for the Service Desk integration (replaced by clusterRef, retained for backward compatibility). | [optional] 
**managed_sources** | **[]str** | Source IDs for the Service Desk integration (replaced by provisioningConfig.managedSResourceRefs, but retained here for backward compatibility). | [optional] 
**provisioning_config** | [**Provisioningconfig**](provisioningconfig) |  | [optional] 
**attributes** | **map[string]object** | Service Desk integration's attributes. Validation constraints enforced by the implementation. | [required]
**before_provisioning_rule** | [**Beforeprovisioningruledto**](beforeprovisioningruledto) |  | [optional] 
}

## Example

```python
from sailpoint.service_desk_integration.models.servicedeskintegrationdto import Servicedeskintegrationdto

servicedeskintegrationdto = Servicedeskintegrationdto(
id='62945a496ef440189b1f03e3623411c8',
name='Service Desk Integration Name',
created='2024-01-17T18:45:25.994Z',
modified='2024-02-18T18:45:25.994Z',
description='A very nice Service Desk integration',
type='ServiceNowSDIM',
owner_ref=sailpoint.service_desk_integration.models.owner_dto.Owner Dto(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
cluster_ref=sailpoint.service_desk_integration.models.source_cluster_dto.Source Cluster Dto(
                    type = 'CLUSTER', 
                    id = '2c9180847a7fccdd017aa5896f9f4f6f', 
                    name = 'Training VA', ),
cluster='xyzzy999',
managed_sources=["2c9180835d191a86015d28455b4a2329","2c5680835d191a85765d28455b4a9823"],
provisioning_config=sailpoint.service_desk_integration.models.provisioning_config.Provisioning Config(
                    universal_manager = True, 
                    managed_resource_refs = [{"type":"SOURCE","id":"2c9180855d191c59015d291ceb051111","name":"My Source 1"},{"type":"SOURCE","id":"2c9180855d191c59015d291ceb052222","name":"My Source 2"}], 
                    plan_initializer_script = sailpoint.service_desk_integration.models.provisioningconfig_plan_initializer_script.provisioningconfig_planInitializerScript(
                        source = '<?xml version='1.0' encoding='UTF-8'?>\r\n<!DOCTYPE Rule PUBLIC \"sailpoint.dtd\" \"sailpoint.dtd\">\r\n<Rule name=\"Example Rule\" type=\"BeforeProvisioning\">\r\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\r\n  <Source><![CDATA[\r\nimport sailpoint.object.*;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\r\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\r\nimport sailpoint.object.ProvisioningPlan;\r\nimport sailpoint.object.ProvisioningPlan.Operation;\r\n\r\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n}\r\n\r\n  ]]></Source>
', ), 
                    no_provisioning_requests = True, 
                    provisioning_request_expiration = 7, ),
attributes={"property":"value","key":"value"},
before_provisioning_rule=sailpoint.service_desk_integration.models.before_provisioning_rule_dto.Before Provisioning Rule Dto(
                    type = 'RULE', 
                    id = '048eb3d55c5a4758bd07dccb87741c78', 
                    name = 'Before Provisioning Airtable Rule', )
)

```
[[Back to top]](#) 

