# PassThroughEntitlement

# PassThroughEntitlement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id for the entitlement | [optional] 
**name** | **str** | The name of the entitlement | [optional] 
**created** | **datetime** | Time when the entitlement was created | [optional] 
**modified** | **datetime** | Time when the entitlement was last modified | [optional] 
**attribute** | **str** | The entitlement attribute name | [optional] 
**value** | **str** | The value of the entitlement | [optional] 
**source_schema_object_type** | **str** | The schema object type on the source used to represent the entitlement and its attributes | [optional] 
**privileged** | **bool** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the entitlement is a privileged entitlement. Retained for backward compatibility. | [optional] [default to False]
**cloud_governed** | **bool** | Indicates if the entitlement is cloud governed | [optional] [default to False]
**description** | **str** | Information about the entitlement | [optional] 
**requestable** | **bool** | Indicates if the entitlement is requestable | [optional] [default to False]
**attributes** | **map[string]object** | A map of free-form key-value pairs from the source system | [optional] 
**source** | [**SourceReferenceDTO**](source-reference-dto) |  | [optional] 
**owner** | [**OwnerReferenceDTO**](owner-reference-dto) |  | [optional] 
**direct_permissions** | [**[]PermissionDTO**](permission-dto) |  | [optional] 
**segments** | **[]str** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**manually_updated_fields** | [**ManuallyUpdatedFieldsDTO**](manually-updated-fields-dto) |  | [optional] 
**contains_data_access** | **bool** | True if the entitlement has DAS data | [optional] [default to False]
**data_access** | [**DataAccess2**](data-access2) |  | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.pass_through_entitlement import PassThroughEntitlement

pass_through_entitlement = PassThroughEntitlement(
id='2c918085718230600171993742c63558',
name='CN=entitlement.bbb7c650',
created='2020-10-08T18:33:52.029Z',
modified='2020-10-08T18:33:52.029Z',
attribute='memberOf',
value='CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local',
source_schema_object_type='groups',
privileged=False,
cloud_governed=True,
description='Gives read/write access to the company database',
requestable=False,
attributes={"fieldName":"fieldValue"},
source=sailpoint.gov_certification.models.source_reference_dto.SourceReferenceDTO(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'SOURCE', 
                    name = 'ODS-AD-Source', ),
owner=sailpoint.gov_certification.models.owner_reference_dto.OwnerReferenceDTO(
                    id = '2a2fdacca5e345f18bf7970cfbb8fec2', 
                    name = 'identity 1', 
                    type = 'IDENTITY', ),
direct_permissions=[
                    sailpoint.gov_certification.models.permission_dto.PermissionDTO(
                        rights = [
                            'SELECT'
                            ], 
                        target = 'SYS.GV_$TRANSACTION', )
                    ],
segments=["f7b1b8a3-5fed-4fd4-ad29-82014e137e19","29cb6c06-1da8-43ea-8be4-b3125f248f2a"],
manually_updated_fields=sailpoint.gov_certification.models.manually_updated_fields_dto.ManuallyUpdatedFieldsDTO(
                    display_name = True, 
                    description = True, ),
contains_data_access=True,
data_access=sailpoint.gov_certification.models.data_access_2.DataAccess-2(
                    policies = [
                        sailpoint.gov_certification.models.data_access_policies_inner.DataAccess_policies_inner(
                            value = 'GDPR-20', )
                        ], 
                    categories = [
                        sailpoint.gov_certification.models.data_access_categories_inner.DataAccess_categories_inner(
                            value = 'SSN', 
                            match_count = 10, )
                        ], 
                    impact_score = sailpoint.gov_certification.models.data_access_impact_score.DataAccess_impactScore(
                        value = 'Medium', ), 
                    modified = '2023-10-11T18:33:52.029Z', )
)

```
[[Back to top]](#) 

