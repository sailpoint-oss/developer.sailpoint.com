# TenantUiMetadataItemResponse

# TenantUiMetadataItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iframe_white_list** | **str** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use \"null\". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**username_label** | **str** | Descriptor for the username input field. If you would like to reset the value use \"null\". | [optional] 
**username_empty_text** | **str** | Placeholder text displayed in the username input field. If you would like to reset the value use \"null\". | [optional] 
**instance_badge_display_name** | **str** | Display name for the instance badge. Null when no display name is configured. | [optional] 
**instance_badge_color** | **str** | Hex value of color for the instance badge. Null when no color is configured. | [optional] 
**instance_badge_visible** | **bool** | Whether the instance badge is visible. Defaults to false when no value is stored. | [optional] [default to False]
\}

## Example

```python
from sailpoint.ui_metadata.models.tenant_ui_metadata_item_response import TenantUiMetadataItemResponse

tenant_ui_metadata_item_response = TenantUiMetadataItemResponse(
iframe_white_list='http://example.com http://example2.com',
username_label='Email',
username_empty_text='Please provide your work email address...',
instance_badge_display_name='Sandbox',
instance_badge_color='FFAA00',
instance_badge_visible=True
)

```
[[Back to top]](#) 

