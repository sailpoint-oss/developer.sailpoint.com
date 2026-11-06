# EntitlementV2

# EntitlementV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The entitlement id | [optional] 
**name** | **str** | The entitlement name | [optional] 
**attribute** | **str** | The entitlement attribute name | [optional] 
**value** | **str** | The value of the entitlement | [optional] 
**source_schema_object_type** | **str** | The object type of the entitlement from the source schema | [optional] 
**description** | **str** | The description of the entitlement | [optional] 
**privilege_level** | [**EntitlementV2PrivilegeLevel**](entitlement-v2-privilege-level) |  | [optional] 
**tags** | **[]str** | List of tags assigned to the entitlement | [optional] 
**cloud_governed** | **bool** | True if the entitlement is cloud governed | [optional] [default to False]
**requestable** | **bool** | True if the entitlement is able to be directly requested | [optional] [default to False]
**owner** | [**EntitlementV2Owner**](entitlement-v2-owner) |  | [optional] 
**manually_updated_fields** | **map[string]object** | A map of entitlement fields that have been manually updated. The key is the field name in UPPER_SNAKE_CASE format, and the value is true or false to indicate if the field has been updated. | [optional] 
**access_model_metadata** | [**EntitlementV2AccessModelMetadata**](entitlement-v2-access-model-metadata) |  | [optional] 
**created** | **datetime** | Time when the entitlement was created | [optional] 
**modified** | **datetime** | Time when the entitlement was last modified | [optional] 
**source** | [**EntitlementV2Source**](entitlement-v2-source) |  | [optional] 
**attributes** | **map[string]object** | A map of free-form key-value pairs from the source system | [optional] 
**segments** | **[]str** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**direct_permissions** | [**[]PermissionDTO**](permission-dto) |  | [optional] 
\}

## Example

```python
from sailpoint.entitlements.models.entitlement_v2 import EntitlementV2

entitlement_v2 = EntitlementV2(
id='2c91808874ff91550175097daaec161c',
name='Account Payable',
attribute='memberOf',
value='CN=Account Payable,OU=Finance,DC=xyz company',
source_schema_object_type='group',
description='This entitlement allows users to access the accounts payable module of the organization's financial management system. Users can view, process, and approve invoices, manage vendor relationships, and perform other accounts payable-related tasks.',
privilege_level=,
tags=["tag1","tag2"],
cloud_governed=True,
requestable=True,
owner=sailpoint.entitlements.models.entitlement_v2_owner.EntitlementV2_owner(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'IDENTITY', 
                    name = 'john.doe', ),
manually_updated_fields={"DISPLAY_NAME":true,"DESCRIPTION":true},
access_model_metadata=sailpoint.entitlements.models.entitlement_v2_access_model_metadata.EntitlementV2_accessModelMetadata(
                    attributes = [
                        sailpoint.entitlements.models.access_model_metadata.Access Model Metadata(
                            key = 'iscCsp', 
                            name = 'CSP', 
                            multiselect = True, 
                            status = 'active', 
                            type = 'governance', 
                            object_types = ["general"], 
                            description = 'Indicates the type of deployment environment of an access item.', 
                            values = [
                                sailpoint.entitlements.models.access_model_metadata_values_inner.AccessModelMetadata_values_inner(
                                    value = 'development', 
                                    name = 'Development', 
                                    status = 'active', )
                                ], )
                        ], ),
created='2020-10-08T18:33:52.029Z',
modified='2020-10-08T18:33:52.029Z',
source=sailpoint.entitlements.models.entitlement_v2_source.EntitlementV2_source(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'SOURCE', 
                    name = 'ODS-AD-Source', ),
attributes={"fieldName":"fieldValue"},
segments=["f7b1b8a3-5fed-4fd4-ad29-82014e137e19","29cb6c06-1da8-43ea-8be4-b3125f248f2a"],
direct_permissions=[
                    sailpoint.entitlements.models.permission_dto.Permission DTO(
                        rights = HereIsRight1, 
                        target = 'SYS.GV_$TRANSACTION', )
                    ]
)

```
[[Back to top]](#) 

