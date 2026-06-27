---
id: custompasswordinstruction
title: Custompasswordinstruction
pagination_label: Custompasswordinstruction
sidebar_label: Custompasswordinstruction
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Custompasswordinstruction', 'Custompasswordinstruction'] 
slug: /tools/sdk/python/custom-password-instructions/models/custompasswordinstruction
tags: ['SDK', 'Software Development Kit', 'Custompasswordinstruction', 'Custompasswordinstruction']
---

# Custompasswordinstruction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_id** |  **Enum** [  'change-password:enter-password',    'change-password:finish',    'flow-selection:select',    'forget-username:user-email',    'mfa:enter-code',    'mfa:enter-kba',    'mfa:select',    'reset-password:enter-password',    'reset-password:enter-username',    'reset-password:finish',    'unlock-account:enter-username',    'unlock-account:finish' ] | The page ID that represents the page for forget user name, reset password and unlock account flow. | [optional] 
**page_content** | **str** | The custom instructions for the specified page. Allow basic HTML format and maximum length is 1000 characters. The custom instructions will be sanitized to avoid attacks. If the customization text includes a link, like `<A HREF=\\\"URL\\\">...</A>` clicking on this will open the link on the current browser page. If you want your link to be redirected to a different page, please redirect it to \"_blank\" like this: `<a href=\\\"URL\" target=\\\"_blank\\\" >link</a>`. This will open a new tab when the link is clicked. Notice we're only supporting _blank as the redirection target.  | [optional] 
**locale** | **str** | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". | [optional] 
}

## Example

```python
from sailpoint.custom_password_instructions.models.custompasswordinstruction import Custompasswordinstruction

custompasswordinstruction = Custompasswordinstruction(
page_id='change-password:enter-password',
page_content='Please enter a new password. Your password must be at least 8 characters long and contain at least one number and one letter.',
locale='en'
)

```
[[Back to top]](#) 

