---
id: identityentitlementdetails
title: Identityentitlementdetails
pagination_label: Identityentitlementdetails
sidebar_label: Identityentitlementdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityentitlementdetails', 'Identityentitlementdetails'] 
slug: /tools/sdk/python/access-requests/models/identityentitlementdetails
tags: ['SDK', 'Software Development Kit', 'Identityentitlementdetails', 'Identityentitlementdetails']
---

# Identityentitlementdetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | Id of Identity | [optional] 
**entitlement** | [**Identityentitlementdetailsentitlementdto**](identityentitlementdetailsentitlementdto) |  | [optional] 
**source_id** | **str** | Id of Source | [optional] 
**account_targets** | [**[]Identityentitlementdetailsaccounttarget**](identityentitlementdetailsaccounttarget) | A list of account targets on the identity provisioned with the requested entitlement. | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.identityentitlementdetails import Identityentitlementdetails

identityentitlementdetails = Identityentitlementdetails(
identity_id='5928c61f-3f2e-417a-8d65-f76451e2050a',
entitlement=sailpoint.access_requests.models.identity_entitlement_details_entitlement_dto.Identity Entitlement Details Entitlement Dto(
                    id = '2c91808874ff91550175097daaec161c', 
                    name = 'LauncherTest2', 
                    created = '2020-10-08T18:33:52.029Z', 
                    modified = '2020-10-08T18:33:52.029Z', 
                    description = 'CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local', 
                    type = 'ENTITLEMENT', 
                    source_id = '2c9180827ca885d7017ca8ce28a000eb', 
                    source_name = 'ODS-AD-Source', 
                    owner = sailpoint.access_requests.models.owner_dto.Owner Dto(
                        type = 'IDENTITY', 
                        id = '2c9180a46faadee4016fb4e018c20639', 
                        name = 'Support', ), 
                    value = 'CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local', 
                    flags = ["privileged"], ),
source_id='b56728da-a24d-4177-a207-2bc4d42cba27',
account_targets=[{"accountId":"e7ef11cee24542b78618ce017117699f","accountName":"Adalberto.XYZ","accountUUID":null,"sourceId":"0108906b66634d9ab7819a03eb263a88","sourceName":"ODS-AD-FF-Source [source-XYZ]","removeDate":null,"assignmentId":null,"revocable":true}]
)

```
[[Back to top]](#) 

