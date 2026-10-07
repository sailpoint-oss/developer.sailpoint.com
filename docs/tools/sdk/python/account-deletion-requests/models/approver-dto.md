# ApproverDto

# ApproverDto

Contains detailed information about the approver, including their identity, contact details, type, and references to related identities such as owners, actioned identities, and members.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | Identity ID and it cannot be null. | [optional] 
**id** | **str** | Optional id | [optional] 
**name** | **str** | Identity display name | [optional] 
**email** | **str** | Email address of identity | [optional] 
**type** | **str** | Used to mention type of data transfer object in this case it is used to transfer IDENTITY data. | [optional] 
**owner_of** | [**[]ApproverReference**](approver-reference) | List of reference of identity type dto for account owner identities | [optional] 
**actioned_as** | [**[]ApproverReference**](approver-reference) | List of reference of identity type dto who acted on behalf of other identities. | [optional] 
**members** | [**[]ApproverReference**](approver-reference) | List of reference of identity type dto for member identities. | [optional] 
\}

## Example

```python
from sailpoint.account_deletion_requests.models.approver_dto import ApproverDto

approver_dto = ApproverDto(
identity_id='22efd140d88a4ceeab32c8829973244c',
id='',
name='SailPoint Support',
email='support@testmail.identitysoon.com',
type='IDENTITY',
owner_of=[
                    sailpoint.account_deletion_requests.models.approver_reference.ApproverReference(
                        id = '85131bd73fdc423599e57f40b29f01fe', 
                        type = 'IDENTITY', 
                        name = 'SailPoint Support', )
                    ],
actioned_as=[
                    sailpoint.account_deletion_requests.models.approver_reference.ApproverReference(
                        id = '85131bd73fdc423599e57f40b29f01fe', 
                        type = 'IDENTITY', 
                        name = 'SailPoint Support', )
                    ],
members=[
                    sailpoint.account_deletion_requests.models.approver_reference.ApproverReference(
                        id = '85131bd73fdc423599e57f40b29f01fe', 
                        type = 'IDENTITY', 
                        name = 'SailPoint Support', )
                    ]
)

```
[[Back to top]](#) 

