---
id: v2024-list-deploys200-response
title: ListDeploys200Response
pagination_label: ListDeploys200Response
sidebar_label: ListDeploys200Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ListDeploys200Response', 'V2024ListDeploys200Response'] 
slug: /tools/sdk/python/v2024/models/list-deploys200-response
tags: ['SDK', 'Software Development Kit', 'ListDeploys200Response', 'V2024ListDeploys200Response']
---

# ListDeploys200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[]DeployResponse**](deploy-response) | list of deployments | [optional] 
}

## Example

```python
from sailpoint.v2024.models.list_deploys200_response import ListDeploys200Response

list_deploys200_response = ListDeploys200Response(
items=[
                    sailpoint.v2024.models.deploy_response.DeployResponse(
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

