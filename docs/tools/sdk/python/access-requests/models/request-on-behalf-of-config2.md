# RequestOnBehalfOfConfig2

# RequestOnBehalfOfConfig2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_request_on_behalf_of_anyone_by_anyone** | **bool** | If this is true, anyone can request access for anyone. | [optional] [default to False]
**allow_request_on_behalf_of_employee_by_manager** | **bool** | If this is true, a manager can request access for his or her direct reports. | [optional] [default to False]
**allow_request_on_behalf_of_for_machine_identity** | **bool** | If this is true, anyone can request access on behalf of machine identities. Machine access request authorization is evaluated as follows: 1. If this flag is true, any requester is allowed. 2. Else if `allowRequestForMachineByOwner` is true, the requester must be an admin or a primary/secondary owner of every requested machine identity. 3. Else admins are still allowed; non-admins receive 403.  | [optional] [default to True]
**allow_request_for_machine_by_owner** | **bool** | When `allowRequestOnBehalfOfForMachineIdentity` is false and this flag is true, only admins and primary/secondary owners of the requested machine identities may submit machine access requests. Defaults to false (opt-in).  | [optional] [default to False]
\}

## Example

```python
from sailpoint.access_requests.models.request_on_behalf_of_config2 import RequestOnBehalfOfConfig2

request_on_behalf_of_config2 = RequestOnBehalfOfConfig2(
allow_request_on_behalf_of_anyone_by_anyone=True,
allow_request_on_behalf_of_employee_by_manager=True,
allow_request_on_behalf_of_for_machine_identity=True,
allow_request_for_machine_by_owner=False
)

```
[[Back to top]](#) 

