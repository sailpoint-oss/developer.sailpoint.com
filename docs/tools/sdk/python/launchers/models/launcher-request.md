# LauncherRequest

# LauncherRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the Launcher, limited to 255 characters | [required]
**description** | **str** | Description of the Launcher, limited to 2000 characters | [required]
**type** |  **Enum** [  'INTERACTIVE_PROCESS' ] | Launcher type | [required]
**disabled** | **bool** | State of the Launcher | [required]
**reference** | [**LauncherRequestReference**](launcher-request-reference) |  | [optional] 
**config** | **str** | JSON configuration associated with this Launcher, restricted to a max size of 4KB  | [required]
\}

## Example

```python
from sailpoint.launchers.models.launcher_request import LauncherRequest

launcher_request = LauncherRequest(
name='Group Create',
description='Create a new Active Directory Group',
type='INTERACTIVE_PROCESS',
disabled=False,
reference=sailpoint.launchers.models.launcher_request_reference.LauncherRequest_reference(
                    type = 'WORKFLOW', 
                    id = '2fd6ff94-2081-4d29-acbc-83a0a2f744a5', ),
config='{"workflowId" : "6b42d9be-61b6-46af-827e-ea29ba8aa3d9"}'
)

```
[[Back to top]](#) 

