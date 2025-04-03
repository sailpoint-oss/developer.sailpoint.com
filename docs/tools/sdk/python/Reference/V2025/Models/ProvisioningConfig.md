---
id: v2025-provisioning-config
title: ProvisioningConfig
pagination_label: ProvisioningConfig
sidebar_label: ProvisioningConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningConfig', 'V2025ProvisioningConfig'] 
slug: /tools/sdk/python/v2025/models/provisioning-config
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfig', 'V2025ProvisioningConfig']
---

# ProvisioningConfig

Specification of a Service Desk integration provisioning configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**universal_manager** | **bool** | Specifies whether this configuration is used to manage provisioning requests for all sources from the org.  If true, no managedResourceRefs are allowed. | [optional] [readonly] [default to False]
**managed_resource_refs** | [**[]ServiceDeskSource**](service-desk-source) | References to sources for the Service Desk integration template.  May only be specified if universalManager is false. | [optional] 
**plan_initializer_script** | [**ProvisioningConfigPlanInitializerScript**](provisioning-config-plan-initializer-script) |  | [optional] 
**no_provisioning_requests** | **bool** | Name of an attribute that when true disables the saving of ProvisioningRequest objects whenever plans are sent through this integration. | [optional] [default to False]
**provisioning_request_expiration** | **int** | When saving pending requests is enabled, this defines the number of hours the request is allowed to live before it is considered expired and no longer affects plan compilation. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.provisioning_config import ProvisioningConfig

provisioning_config = ProvisioningConfig(
universal_manager=True,
managed_resource_refs=[{type=SOURCE, id=2c9180855d191c59015d291ceb051111, name=My Source 1}, {type=SOURCE, id=2c9180855d191c59015d291ceb052222, name=My Source 2}],
plan_initializer_script=sailpoint.v2025.models.provisioning_config_plan_initializer_script.ProvisioningConfig_planInitializerScript(
                    source = '<?xml version='1.0' encoding='UTF-8'?>\r\n<!DOCTYPE Rule PUBLIC \"sailpoint.dtd\" \"sailpoint.dtd\">\r\n<Rule name=\"Example Rule\" type=\"BeforeProvisioning\">\r\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\r\n  <Source><![CDATA[\r\nimport sailpoint.object.*;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\r\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\r\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\r\nimport sailpoint.object.ProvisioningPlan;\r\nimport sailpoint.object.ProvisioningPlan.Operation;\r\n\r\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\r\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\r\n  }\r\n}\r\n\r\n  ]]></Source>
', ),
no_provisioning_requests=True,
provisioning_request_expiration=7
)

```
[[Back to top]](#) 

