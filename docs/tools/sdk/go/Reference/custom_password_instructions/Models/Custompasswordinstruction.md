---
id: v1-custompasswordinstruction
title: Custompasswordinstruction
pagination_label: Custompasswordinstruction
sidebar_label: Custompasswordinstruction
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Custompasswordinstruction', 'V1Custompasswordinstruction'] 
slug: /tools/sdk/go/custompasswordinstructions/models/custompasswordinstruction
tags: ['SDK', 'Software Development Kit', 'Custompasswordinstruction', 'V1Custompasswordinstruction']
---

# Custompasswordinstruction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageId** | Pointer to **string** | The page ID that represents the page for forget user name, reset password and unlock account flow. | [optional] 
**PageContent** | Pointer to **string** | The custom instructions for the specified page. Allow basic HTML format and maximum length is 1000 characters. The custom instructions will be sanitized to avoid attacks. If the customization text includes a link, like `<A HREF=\\\"URL\\\">...</A>` clicking on this will open the link on the current browser page. If you want your link to be redirected to a different page, please redirect it to \"_blank\" like this: `<a href=\\\"URL\" target=\\\"_blank\\\" >link</a>`. This will open a new tab when the link is clicked. Notice we're only supporting _blank as the redirection target.  | [optional] 
**Locale** | Pointer to **string** | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". | [optional] 

## Methods

### NewCustompasswordinstruction

`func NewCustompasswordinstruction() *Custompasswordinstruction`

NewCustompasswordinstruction instantiates a new Custompasswordinstruction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustompasswordinstructionWithDefaults

`func NewCustompasswordinstructionWithDefaults() *Custompasswordinstruction`

NewCustompasswordinstructionWithDefaults instantiates a new Custompasswordinstruction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPageId

`func (o *Custompasswordinstruction) GetPageId() string`

GetPageId returns the PageId field if non-nil, zero value otherwise.

### GetPageIdOk

`func (o *Custompasswordinstruction) GetPageIdOk() (*string, bool)`

GetPageIdOk returns a tuple with the PageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageId

`func (o *Custompasswordinstruction) SetPageId(v string)`

SetPageId sets PageId field to given value.

### HasPageId

`func (o *Custompasswordinstruction) HasPageId() bool`

HasPageId returns a boolean if a field has been set.

### GetPageContent

`func (o *Custompasswordinstruction) GetPageContent() string`

GetPageContent returns the PageContent field if non-nil, zero value otherwise.

### GetPageContentOk

`func (o *Custompasswordinstruction) GetPageContentOk() (*string, bool)`

GetPageContentOk returns a tuple with the PageContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageContent

`func (o *Custompasswordinstruction) SetPageContent(v string)`

SetPageContent sets PageContent field to given value.

### HasPageContent

`func (o *Custompasswordinstruction) HasPageContent() bool`

HasPageContent returns a boolean if a field has been set.

### GetLocale

`func (o *Custompasswordinstruction) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *Custompasswordinstruction) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *Custompasswordinstruction) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *Custompasswordinstruction) HasLocale() bool`

HasLocale returns a boolean if a field has been set.


