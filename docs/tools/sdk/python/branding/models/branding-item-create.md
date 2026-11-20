# BrandingItemCreate

# BrandingItemCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | name of branding item | [required]
**product_name** | **str** | product name | [required]
**action_button_color** | **str** | hex value of color for action button | [optional] 
**dark_action_button_color** | **str** | hex value of color for action button in dark mode | [optional] 
**active_link_color** | **str** | hex value of color for link | [optional] 
**dark_active_link_color** | **str** | hex value of color for link in dark mode | [optional] 
**navigation_color** | **str** | hex value of color for navigation bar | [optional] 
**dark_navigation_color** | **str** | hex value of color for navigation bar in dark mode | [optional] 
**email_from_address** | **str** | email from address | [optional] 
**login_informational_message** | **str** | login information message | [optional] 
**file_standard** | **bytearray** | png file with logo. To remove an existing logo, delete the branding item and create it again. Omitting this field on update keeps the current logo. | [optional] 
**dark_file_standard** | **bytearray** | png file with dark-mode logo. To remove an existing dark-mode logo, delete the branding item and create it again. Omitting this field on update keeps the current dark-mode logo. | [optional] 
\}

## Example

```python
from sailpoint.branding.models.branding_item_create import BrandingItemCreate

branding_item_create = BrandingItemCreate(
name='custom-branding-item',
product_name='product name',
action_button_color='0074D9',
dark_action_button_color='0074D9',
active_link_color='011E69',
dark_active_link_color='011E69',
navigation_color='011E69',
dark_navigation_color='011E69',
email_from_address='no-reply@sailpoint.com',
login_informational_message='',
file_standard='[B@6754ef00',
dark_file_standard='[B@619bd14c'
)

```
[[Back to top]](#) 

