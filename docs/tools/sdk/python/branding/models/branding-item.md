# BrandingItem

# BrandingItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | name of branding item | [optional] 
**product_name** | **str** | product name | [optional] 
**action_button_color** | **str** | hex value of color for action button | [optional] 
**dark_action_button_color** | **str** | hex value of color for action button in dark mode | [optional] 
**active_link_color** | **str** | hex value of color for link | [optional] 
**dark_active_link_color** | **str** | hex value of color for link in dark mode | [optional] 
**navigation_color** | **str** | hex value of color for navigation bar | [optional] 
**dark_navigation_color** | **str** | hex value of color for navigation bar in dark mode | [optional] 
**email_from_address** | **str** | email from address | [optional] 
**standard_logo_url** | **str** | url to standard logo | [optional] 
**dark_standard_logo_url** | **str** | url to dark-mode logo | [optional] 
**login_informational_message** | **str** | login information message | [optional] 
\}

## Example

```python
from sailpoint.branding.models.branding_item import BrandingItem

branding_item = BrandingItem(
name='default',
product_name='product name',
action_button_color='0074D9',
dark_action_button_color='0074D9',
active_link_color='011E69',
dark_active_link_color='011E69',
navigation_color='011E69',
dark_navigation_color='011E69',
email_from_address='no-reply@sailpoint.com',
standard_logo_url='https://example.identitynow.com/logos/standard.png',
dark_standard_logo_url='https://example.identitynow.com/logos/dark.png',
login_informational_message=''
)

```
[[Back to top]](#) 

