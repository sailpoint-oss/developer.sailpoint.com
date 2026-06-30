---
id: list-deploys-v1200-response
title: ListDeploysV1200Response
pagination_label: ListDeploysV1200Response
sidebar_label: ListDeploysV1200Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ListDeploysV1200Response', 'ListDeploysV1200Response'] 
slug: /tools/sdk/python/configuration-hub/models/list-deploys-v1200-response
tags: ['SDK', 'Software Development Kit', 'ListDeploysV1200Response', 'ListDeploysV1200Response']
---

# ListDeploysV1200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[]Deployresponse**](deployresponse) | list of deployments | [optional] 
}

## Example

```python
from sailpoint.configuration_hub.models.list_deploys_v1200_response import ListDeploysV1200Response

list_deploys_v1200_response = ListDeploysV1200Response(
items=[
                    sailpoint.configuration_hub.models.deployresponse.deployresponse(
                        job_id = '07659d7d-2cce-47c0-9e49-185787ee565a', 
                        status = 'COMPLETE', 
                        type = 'CONFIG_DEPLOY_DRAFT', 
                        message = 'Deploy creation message', 
                        requester_name = 'requester.name', 
                        file_exists = True, 
                        created = '2021-05-11T22:23:16Z', 
                        modified = '2021-05-11T22:23:16Z', 
                        completed = '2021-05-11T22:23:16Z', 
                        draft_id = '07659d7d-2cce-47c0-9e49-185787ee565a', 
                        draft_name = 'Draft Name', 
                        cloud_storage_status = 'SYNCED', )
                    ]
)

```
[[Back to top]](#) 

