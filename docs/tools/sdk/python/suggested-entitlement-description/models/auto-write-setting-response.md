# AutoWriteSettingResponse

# AutoWriteSettingResponse

Auto-Write Setting response with timestamps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether auto-write is currently enabled for the tenant | [optional] [default to False]
**included_source_ids** | **[]str** | Source IDs in the allowlist. Empty array means not in allowlist mode. | [optional] 
**excluded_source_ids** | **[]str** | Source IDs to exclude from auto-write. Always applied. | [optional] 
**created_at** | **datetime** | When settings were first created | [optional] 
**updated_at** | **datetime** | When settings were last modified | [optional] 
\}

## Example

```python
from sailpoint.suggested_entitlement_description.models.auto_write_setting_response import AutoWriteSettingResponse

auto_write_setting_response = AutoWriteSettingResponse(
enabled=True,
included_source_ids=[2c91808a7813090a017814552e526349, 2c91808a7813090a017814552e52634a],
excluded_source_ids=[2c91808a7813090a017814552e526350],
created_at='2026-02-15T10:30Z',
updated_at='2026-03-09T14:22Z'
)

```
[[Back to top]](#) 

