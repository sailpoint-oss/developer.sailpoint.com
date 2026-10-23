# AccessProfile2

# AccessProfile2

Access Profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the Access Profile | [optional] 
**name** | **str** | Name of the Access Profile | [optional] 
**description** | **str** | Information about the Access Profile | [optional] 
**created** | **datetime** | Date the Access Profile was created | [optional] 
**modified** | **datetime** | Date the Access Profile was last modified. | [optional] 
**enabled** | **bool** | Whether the Access Profile is enabled. If the Access Profile is enabled then you must include at least one Entitlement. | [optional] [default to True]
**owner** | [**OwnerReferenceDTO**](owner-reference-dto) |  | [optional] 
**source** | [**SourceReferenceDTO**](source-reference-dto) |  | [optional] 
**entitlements** | [**[]EntitlementRef**](entitlement-ref) | A list of entitlements associated with the Access Profile. If enabled is false this is allowed to be empty otherwise it needs to contain at least one Entitlement. | [optional] 
**requestable** | **bool** | Whether the Access Profile is requestable via access request. Currently, making an Access Profile non-requestable is only supported for customers enabled with the new Request Center. Otherwise, attempting to create an Access Profile with a value **false** in this field results in a 400 error. | [optional] [default to True]
**access_request_config** | [**Requestability**](requestability) |  | [optional] 
**revocation_request_config** | [**Revocability**](revocability) |  | [optional] 
**segments** | **[]str** | List of IDs of segments, if any, to which this Access Profile is assigned. | [optional] 
**provisioning_criteria** | [**ProvisioningCriteriaLevel**](provisioning-criteria-level) |  | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.access_profile2 import AccessProfile2

access_profile2 = AccessProfile2(
id='2c91808a7190d06e01719938fcd20792',
name='Employee-database-read-write',
description='Collection of entitlements to read/write the employee database',
created='2021-03-01T22:32:58.104Z',
modified='2021-03-02T20:22:28.104Z',
enabled=True,
owner=sailpoint.gov_certification.models.owner_reference_dto.OwnerReferenceDTO(
                    id = '2a2fdacca5e345f18bf7970cfbb8fec2', 
                    name = 'identity 1', 
                    type = 'IDENTITY', ),
source=sailpoint.gov_certification.models.source_reference_dto.SourceReferenceDTO(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'SOURCE', 
                    name = 'ODS-AD-Source', ),
entitlements=[
                    sailpoint.gov_certification.models.entitlement_ref.EntitlementRef(
                        type = 'ENTITLEMENT', 
                        id = '2c91809773dee32014e13e122092014e', 
                        name = 'CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local', )
                    ],
requestable=True,
access_request_config=sailpoint.gov_certification.models.requestability.Requestability(
                    comments_required = True, 
                    denial_comments_required = True, 
                    approval_schemes = [
                        sailpoint.gov_certification.models.access_profile_approval_scheme.AccessProfileApprovalScheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                        ], ),
revocation_request_config=sailpoint.gov_certification.models.revocability.Revocability(
                    approval_schemes = [
                        sailpoint.gov_certification.models.access_profile_approval_scheme.AccessProfileApprovalScheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                        ], ),
segments=["f7b1b8a3-5fed-4fd4-ad29-82014e137e19","29cb6c06-1da8-43ea-8be4-b3125f248f2a"],
provisioning_criteria=sailpoint.gov_certification.models.provisioning_criteria_level.ProvisioningCriteriaLevel(
                    operation = 'EQUALS', 
                    attribute = 'email', 
                    value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                    children = [{"operation":"EQUALS","attribute":"department","value":"Engineering"}], )
)

```
[[Back to top]](#) 

