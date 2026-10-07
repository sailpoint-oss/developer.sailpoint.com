# BrandingItemCreate

# BrandingItemCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | name of branding item | [required]
**product_name** | **str** | product name | [required]
**action_button_color** | **str** | hex value of color for action button | [optional] 
**active_link_color** | **str** | hex value of color for link | [optional] 
**navigation_color** | **str** | hex value of color for navigation bar | [optional] 
**email_from_address** | **str** | email from address | [optional] 
**login_informational_message** | **str** | login information message | [optional] 
**file_standard** | **bytearray** | png file with logo | [optional] 
\}

## Example

```python
from sailpoint.branding.models.branding_item_create import BrandingItemCreate

branding_item_create = BrandingItemCreate(
name='custom-branding-item',
product_name='product name',
action_button_color='0074D9',
active_link_color='011E69',
navigation_color='011E69',
email_from_address='no-reply@sailpoint.com',
login_informational_message='',
file_standard='[B@3ad394e6'
)

```
[[Back to top]](#) 

