---
id: custom-password-instruction
title: CustomPasswordInstruction
pagination_label: CustomPasswordInstruction
sidebar_label: CustomPasswordInstruction
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'CustomPasswordInstruction'] 
slug: /tools/sdk/go/beta/models/custom-password-instruction
tags: ['SDK', 'Software Development Kit', 'CustomPasswordInstruction']
---

# CustomPasswordInstruction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageId** |  Pointer to **string** | The page ID that represents the page for forget user name, reset password and unlock account flow. | [optional] 
**PageContent** |  Pointer to **string** | The custom instructions for the specified page. Allow basic HTML format and maximum length is 1000 characters. The custom instructions will be sanitized to avoid attacks. If the customization text includes a link, like &lt;A HREF&#x3D;\\\&quot;URL\\\&quot;&gt;...&lt;/A&gt; clicking on this will open the link on the current browser page. If you want your link to be redirected to a different page, please redirect it to \&quot;_blank\&quot; like this: &lt;a href&#x3D;\\\&quot;URL\&quot; target&#x3D;\\\&quot;_blank\\\&quot; &gt;link&lt;/a&gt;. This will open a new tab when the link is clicked. Notice we&#39;re only supporting _blank as the redirection target. | [optional] 
**Locale** |  Pointer to **string** | The locale for the custom instructions, a BCP47 language tag. The default value is \\\&quot;default\\\&quot;. | [optional] 

## Methods

### NewCustomPasswordInstruction

`func NewCustomPasswordInstruction() *CustomPasswordInstruction`

NewCustomPasswordInstruction instantiates a new CustomPasswordInstruction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomPasswordInstructionWithDefaults

`func NewCustomPasswordInstructionWithDefaults() *CustomPasswordInstruction`

NewCustomPasswordInstructionWithDefaults instantiates a new CustomPasswordInstruction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPageId

`func (o *CustomPasswordInstruction) GetPageId() string`

GetPageId returns the PageId field if non-nil, zero value otherwise.

### GetPageIdOk

`func (o *CustomPasswordInstruction) GetPageIdOk() (*string, bool)`

GetPageIdOk returns a tuple with the PageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageId

`func (o *CustomPasswordInstruction) SetPageId(v string)`

SetPageId sets PageId field to given value.

### HasPageId

`func (o *CustomPasswordInstruction) HasPageId() bool`

HasPageId returns a boolean if a field has been set.

### GetPageContent

`func (o *CustomPasswordInstruction) GetPageContent() string`

GetPageContent returns the PageContent field if non-nil, zero value otherwise.

### GetPageContentOk

`func (o *CustomPasswordInstruction) GetPageContentOk() (*string, bool)`

GetPageContentOk returns a tuple with the PageContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageContent

`func (o *CustomPasswordInstruction) SetPageContent(v string)`

SetPageContent sets PageContent field to given value.

### HasPageContent

`func (o *CustomPasswordInstruction) HasPageContent() bool`

HasPageContent returns a boolean if a field has been set.

### GetLocale

`func (o *CustomPasswordInstruction) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *CustomPasswordInstruction) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *CustomPasswordInstruction) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *CustomPasswordInstruction) HasLocale() bool`

HasLocale returns a boolean if a field has been set.


[[Back to top]](#) 


