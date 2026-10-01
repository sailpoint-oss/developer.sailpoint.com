# TenantUiMetadataItemUpdateRequest

# TenantUiMetadataItemUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iframe_white_list** | **str** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use \"null\". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**username_label** | **str** | Descriptor for the username input field. If you would like to reset the value use \"null\". | [optional] 
**username_empty_text** | **str** | Placeholder text displayed in the username input field. If you would like to reset the value use \"null\". | [optional] 
**instance_badge_display_name** | **str** | Display name for the instance badge. Optional. Omit this property to leave the stored value unchanged. Use null to clear it. | [optional] 
**instance_badge_color** | **str** | Hex value of color for the instance badge. Optional. Omit this property to leave the stored value unchanged. Use null to clear it. | [optional] 
**instance_badge_visible** | **bool** | Visibility toggle for the instance badge. Optional. Omit this property to leave the stored value unchanged. Null is stored as false. | [optional] 
\}

## Example

```python
from sailpoint.ui_metadata.models.tenant_ui_metadata_item_update_request import TenantUiMetadataItemUpdateRequest

tenant_ui_metadata_item_update_request = TenantUiMetadataItemUpdateRequest(
iframe_white_list='http://example.com http://example2.com',
username_label='Email',
username_empty_text='Please provide your work email address...',
instance_badge_display_name='Sandbox',
instance_badge_color='FFAA00',
instance_badge_visible=True
)

```
[[Back to top]](#) 

