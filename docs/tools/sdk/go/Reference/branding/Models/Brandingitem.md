---
id: v1-brandingitem
title: Brandingitem
pagination_label: Brandingitem
sidebar_label: Brandingitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Brandingitem', 'V1Brandingitem'] 
slug: /tools/sdk/go/branding/models/brandingitem
tags: ['SDK', 'Software Development Kit', 'Brandingitem', 'V1Brandingitem']
---

# Brandingitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | name of branding item | [optional] 
**ProductName** | Pointer to **NullableString** | product name | [optional] 
**ActionButtonColor** | Pointer to **NullableString** | hex value of color for action button | [optional] 
**ActiveLinkColor** | Pointer to **NullableString** | hex value of color for link | [optional] 
**NavigationColor** | Pointer to **NullableString** | hex value of color for navigation bar | [optional] 
**EmailFromAddress** | Pointer to **NullableString** | email from address | [optional] 
**StandardLogoURL** | Pointer to **NullableString** | url to standard logo | [optional] 
**LoginInformationalMessage** | Pointer to **NullableString** | login information message | [optional] 

## Methods

### NewBrandingitem

`func NewBrandingitem() *Brandingitem`

NewBrandingitem instantiates a new Brandingitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBrandingitemWithDefaults

`func NewBrandingitemWithDefaults() *Brandingitem`

NewBrandingitemWithDefaults instantiates a new Brandingitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Brandingitem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Brandingitem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Brandingitem) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Brandingitem) HasName() bool`

HasName returns a boolean if a field has been set.

### GetProductName

`func (o *Brandingitem) GetProductName() string`

GetProductName returns the ProductName field if non-nil, zero value otherwise.

### GetProductNameOk

`func (o *Brandingitem) GetProductNameOk() (*string, bool)`

GetProductNameOk returns a tuple with the ProductName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductName

`func (o *Brandingitem) SetProductName(v string)`

SetProductName sets ProductName field to given value.

### HasProductName

`func (o *Brandingitem) HasProductName() bool`

HasProductName returns a boolean if a field has been set.

### SetProductNameNil

`func (o *Brandingitem) SetProductNameNil(b bool)`

 SetProductNameNil sets the value for ProductName to be an explicit nil

### UnsetProductName
`func (o *Brandingitem) UnsetProductName()`

UnsetProductName ensures that no value is present for ProductName, not even an explicit nil
### GetActionButtonColor

`func (o *Brandingitem) GetActionButtonColor() string`

GetActionButtonColor returns the ActionButtonColor field if non-nil, zero value otherwise.

### GetActionButtonColorOk

`func (o *Brandingitem) GetActionButtonColorOk() (*string, bool)`

GetActionButtonColorOk returns a tuple with the ActionButtonColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionButtonColor

`func (o *Brandingitem) SetActionButtonColor(v string)`

SetActionButtonColor sets ActionButtonColor field to given value.

### HasActionButtonColor

`func (o *Brandingitem) HasActionButtonColor() bool`

HasActionButtonColor returns a boolean if a field has been set.

### SetActionButtonColorNil

`func (o *Brandingitem) SetActionButtonColorNil(b bool)`

 SetActionButtonColorNil sets the value for ActionButtonColor to be an explicit nil

### UnsetActionButtonColor
`func (o *Brandingitem) UnsetActionButtonColor()`

UnsetActionButtonColor ensures that no value is present for ActionButtonColor, not even an explicit nil
### GetActiveLinkColor

`func (o *Brandingitem) GetActiveLinkColor() string`

GetActiveLinkColor returns the ActiveLinkColor field if non-nil, zero value otherwise.

### GetActiveLinkColorOk

`func (o *Brandingitem) GetActiveLinkColorOk() (*string, bool)`

GetActiveLinkColorOk returns a tuple with the ActiveLinkColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveLinkColor

`func (o *Brandingitem) SetActiveLinkColor(v string)`

SetActiveLinkColor sets ActiveLinkColor field to given value.

### HasActiveLinkColor

`func (o *Brandingitem) HasActiveLinkColor() bool`

HasActiveLinkColor returns a boolean if a field has been set.

### SetActiveLinkColorNil

`func (o *Brandingitem) SetActiveLinkColorNil(b bool)`

 SetActiveLinkColorNil sets the value for ActiveLinkColor to be an explicit nil

### UnsetActiveLinkColor
`func (o *Brandingitem) UnsetActiveLinkColor()`

UnsetActiveLinkColor ensures that no value is present for ActiveLinkColor, not even an explicit nil
### GetNavigationColor

`func (o *Brandingitem) GetNavigationColor() string`

GetNavigationColor returns the NavigationColor field if non-nil, zero value otherwise.

### GetNavigationColorOk

`func (o *Brandingitem) GetNavigationColorOk() (*string, bool)`

GetNavigationColorOk returns a tuple with the NavigationColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNavigationColor

`func (o *Brandingitem) SetNavigationColor(v string)`

SetNavigationColor sets NavigationColor field to given value.

### HasNavigationColor

`func (o *Brandingitem) HasNavigationColor() bool`

HasNavigationColor returns a boolean if a field has been set.

### SetNavigationColorNil

`func (o *Brandingitem) SetNavigationColorNil(b bool)`

 SetNavigationColorNil sets the value for NavigationColor to be an explicit nil

### UnsetNavigationColor
`func (o *Brandingitem) UnsetNavigationColor()`

UnsetNavigationColor ensures that no value is present for NavigationColor, not even an explicit nil
### GetEmailFromAddress

`func (o *Brandingitem) GetEmailFromAddress() string`

GetEmailFromAddress returns the EmailFromAddress field if non-nil, zero value otherwise.

### GetEmailFromAddressOk

`func (o *Brandingitem) GetEmailFromAddressOk() (*string, bool)`

GetEmailFromAddressOk returns a tuple with the EmailFromAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailFromAddress

`func (o *Brandingitem) SetEmailFromAddress(v string)`

SetEmailFromAddress sets EmailFromAddress field to given value.

### HasEmailFromAddress

`func (o *Brandingitem) HasEmailFromAddress() bool`

HasEmailFromAddress returns a boolean if a field has been set.

### SetEmailFromAddressNil

`func (o *Brandingitem) SetEmailFromAddressNil(b bool)`

 SetEmailFromAddressNil sets the value for EmailFromAddress to be an explicit nil

### UnsetEmailFromAddress
`func (o *Brandingitem) UnsetEmailFromAddress()`

UnsetEmailFromAddress ensures that no value is present for EmailFromAddress, not even an explicit nil
### GetStandardLogoURL

`func (o *Brandingitem) GetStandardLogoURL() string`

GetStandardLogoURL returns the StandardLogoURL field if non-nil, zero value otherwise.

### GetStandardLogoURLOk

`func (o *Brandingitem) GetStandardLogoURLOk() (*string, bool)`

GetStandardLogoURLOk returns a tuple with the StandardLogoURL field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandardLogoURL

`func (o *Brandingitem) SetStandardLogoURL(v string)`

SetStandardLogoURL sets StandardLogoURL field to given value.

### HasStandardLogoURL

`func (o *Brandingitem) HasStandardLogoURL() bool`

HasStandardLogoURL returns a boolean if a field has been set.

### SetStandardLogoURLNil

`func (o *Brandingitem) SetStandardLogoURLNil(b bool)`

 SetStandardLogoURLNil sets the value for StandardLogoURL to be an explicit nil

### UnsetStandardLogoURL
`func (o *Brandingitem) UnsetStandardLogoURL()`

UnsetStandardLogoURL ensures that no value is present for StandardLogoURL, not even an explicit nil
### GetLoginInformationalMessage

`func (o *Brandingitem) GetLoginInformationalMessage() string`

GetLoginInformationalMessage returns the LoginInformationalMessage field if non-nil, zero value otherwise.

### GetLoginInformationalMessageOk

`func (o *Brandingitem) GetLoginInformationalMessageOk() (*string, bool)`

GetLoginInformationalMessageOk returns a tuple with the LoginInformationalMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoginInformationalMessage

`func (o *Brandingitem) SetLoginInformationalMessage(v string)`

SetLoginInformationalMessage sets LoginInformationalMessage field to given value.

### HasLoginInformationalMessage

`func (o *Brandingitem) HasLoginInformationalMessage() bool`

HasLoginInformationalMessage returns a boolean if a field has been set.

### SetLoginInformationalMessageNil

`func (o *Brandingitem) SetLoginInformationalMessageNil(b bool)`

 SetLoginInformationalMessageNil sets the value for LoginInformationalMessage to be an explicit nil

### UnsetLoginInformationalMessage
`func (o *Brandingitem) UnsetLoginInformationalMessage()`

UnsetLoginInformationalMessage ensures that no value is present for LoginInformationalMessage, not even an explicit nil

