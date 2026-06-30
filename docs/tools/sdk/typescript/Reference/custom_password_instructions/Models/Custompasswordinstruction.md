---
id: v1-custompasswordinstruction-v1
title: CustompasswordinstructionV1
pagination_label: CustompasswordinstructionV1
sidebar_label: CustompasswordinstructionV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CustompasswordinstructionV1', 'v1CustompasswordinstructionV1']
slug: /tools/sdk/typescript/custom_password_instructions/models/custompasswordinstruction-v1
tags: ['SDK', 'Software Development Kit', 'CustompasswordinstructionV1', 'v1CustompasswordinstructionV1']
---

# CustompasswordinstructionV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pageId** | **(optional)** `string` | The page ID that represents the page for forget user name, reset password and unlock account flow. | [default to undefined]
**pageContent** | **(optional)** `string` | The custom instructions for the specified page. Allow basic HTML format and maximum length is 1000 characters. The custom instructions will be sanitized to avoid attacks. If the customization text includes a link, like `<A HREF=\\\"URL\\\">...</A>` clicking on this will open the link on the current browser page. If you want your link to be redirected to a different page, please redirect it to \"_blank\" like this: `<a href=\\\"URL\" target=\\\"_blank\\\" >link</a>`. This will open a new tab when the link is clicked. Notice we\'re only supporting _blank as the redirection target.  | [default to undefined]
**locale** | **(optional)** `string` | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". | [default to undefined]

