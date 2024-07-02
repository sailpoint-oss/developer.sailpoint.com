---
id: custom-password-instruction
title: CustomPasswordInstruction
pagination_label: CustomPasswordInstruction
sidebar_label: CustomPasswordInstruction
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CustomPasswordInstruction'] 
slug: /tools/sdk/powershell/beta/models/custom-password-instruction
tags: ['SDK', 'Software Development Kit', 'CustomPasswordInstruction']
---


# CustomPasswordInstruction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageId** |  Pointer to  **Enum** [  "change-password:enter-password",    "change-password:finish",    "flow-selection:select",    "forget-username:user-email",    "mfa:enter-code",    "mfa:enter-kba",    "mfa:select",    "reset-password:enter-password",    "reset-password:enter-username",    "reset-password:finish",    "unlock-account:enter-username",    "unlock-account:finish" ] | The page ID that represents the page for forget user name, reset password and unlock account flow. | [optional] 
**PageContent** |  Pointer to **String** | The custom instructions for the specified page. Allow basic HTML format and maximum length is 1000 characters. The custom instructions will be sanitized to avoid attacks. If the customization text includes a link, like &lt;A HREF&#x3D;\&quot;&quot;URL\&quot;&quot;&gt;...&lt;/A&gt; clicking on this will open the link on the current browser page. If you want your link to be redirected to a different page, please redirect it to &quot;&quot;_blank&quot;&quot; like this: &lt;a href&#x3D;\&quot;&quot;URL&quot;&quot; target&#x3D;\&quot;&quot;_blank\&quot;&quot; &gt;link&lt;/a&gt;. This will open a new tab when the link is clicked. Notice we&#39;re only supporting _blank as the redirection target. | [optional] 
**Locale** |  Pointer to **String** | The locale for the custom instructions, a BCP47 language tag. The default value is \&quot;&quot;default\&quot;&quot;. | [optional] 

## Examples

- Prepare the resource
```powershell
$CustomPasswordInstruction = Initialize-BetaCustomPasswordInstruction  -PageId null `
 -PageContent null `
 -Locale en
```

- Convert the resource to JSON
```powershell
$CustomPasswordInstruction | ConvertTo-JSON
```


[[Back to top]](#) 

