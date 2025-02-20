---
id: beta-sim-integration-details
title: SimIntegrationDetails
pagination_label: SimIntegrationDetails
sidebar_label: SimIntegrationDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SimIntegrationDetails', 'BetaSimIntegrationDetails'] 
slug: /tools/sdk/python/beta/models/sim-integration-details
tags: ['SDK', 'Software Development Kit', 'SimIntegrationDetails', 'BetaSimIntegrationDetails']
---

# SimIntegrationDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**description** | **str** | The description of the integration | [optional] 
**type** | **str** | The integration type | [optional] 
**attributes** | **object** | The attributes map containing the credentials used to configure the integration. | [optional] 
**sources** | **[]str** | The list of sources (managed resources) | [optional] 
**cluster** | **str** | The cluster/proxy | [optional] 
**status_map** | **object** | Custom mapping between the integration result and the provisioning result | [optional] 
**request** | **object** | Request data to customize desc and body of the created ticket | [optional] 
**before_provisioning_rule** | [**SimIntegrationDetailsAllOfBeforeProvisioningRule**](sim-integration-details-all-of-before-provisioning-rule) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.sim_integration_details import SimIntegrationDetails

sim_integration_details = SimIntegrationDetails(
id='id12345',
name='aName',
created='2023-01-03T21:16:22.432Z',
modified='2023-01-03T21:16:22.432Z',
description='Integration description',
type='ServiceNow Service Desk',
attributes={"uid":"Walter White","firstname":"walter","cloudStatus":"UNREGISTERED","displayName":"Walter White","identificationNumber":"942","lastSyncDate":1470348809380,"email":"walter@gmail.com","lastname":"white"},
sources=[2c9180835d191a86015d28455b4a2329, 2c5680835d191a85765d28455b4a9823],
cluster='xyzzy999',
status_map={closed_cancelled=Failed, closed_complete=Committed, closed_incomplete=Failed, closed_rejected=Failed, in_process=Queued, requested=Queued},
request={description=SailPoint Access Request,, req_description=The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,, req_short_description=SailPoint New Access Request Created from IdentityNow,, short_description=SailPoint Access Request $!plan.arguments.identityRequestId},
before_provisioning_rule=sailpoint.beta.models.sim_integration_details_all_of_before_provisioning_rule.SimIntegrationDetails_allOf_beforeProvisioningRule(
                    type = 'IDENTITY', 
                    id = '2c918085708c274401708c2a8a760001', 
                    name = 'Example Rule', )
)

```
[[Back to top]](#) 

