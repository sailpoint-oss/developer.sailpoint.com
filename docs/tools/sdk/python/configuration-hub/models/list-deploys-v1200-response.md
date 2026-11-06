# ListDeploysV1200Response

# ListDeploysV1200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[]DeployResponse**](deploy-response) | list of deployments | [optional] 
\}

## Example

```python
from sailpoint.configuration_hub.models.list_deploys_v1200_response import ListDeploysV1200Response

list_deploys_v1200_response = ListDeploysV1200Response(
items=[
                    sailpoint.configuration_hub.models.deploy_response.DeployResponse(
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

