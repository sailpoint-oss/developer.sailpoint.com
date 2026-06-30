---
id: v1-brandingitemcreate
title: Brandingitemcreate
pagination_label: Brandingitemcreate
sidebar_label: Brandingitemcreate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Brandingitemcreate', 'V1Brandingitemcreate'] 
slug: /tools/sdk/go/branding/models/brandingitemcreate
tags: ['SDK', 'Software Development Kit', 'Brandingitemcreate', 'V1Brandingitemcreate']
---

# Brandingitemcreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | name of branding item | 
**ProductName** | **NullableString** | product name | 
**ActionButtonColor** | Pointer to **string** | hex value of color for action button | [optional] 
**ActiveLinkColor** | Pointer to **string** | hex value of color for link | [optional] 
**NavigationColor** | Pointer to **string** | hex value of color for navigation bar | [optional] 
**EmailFromAddress** | Pointer to **string** | email from address | [optional] 
**LoginInformationalMessage** | Pointer to **string** | login information message | [optional] 
**FileStandard** | Pointer to ***os.File** | png file with logo | [optional] 

## Methods

### NewBrandingitemcreate

`func NewBrandingitemcreate(name string, productName NullableString, ) *Brandingitemcreate`

NewBrandingitemcreate instantiates a new Brandingitemcreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBrandingitemcreateWithDefaults

`func NewBrandingitemcreateWithDefaults() *Brandingitemcreate`

NewBrandingitemcreateWithDefaults instantiates a new Brandingitemcreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Brandingitemcreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Brandingitemcreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Brandingitemcreate) SetName(v string)`

SetName sets Name field to given value.


### GetProductName

`func (o *Brandingitemcreate) GetProductName() string`

GetProductName returns the ProductName field if non-nil, zero value otherwise.

### GetProductNameOk

`func (o *Brandingitemcreate) GetProductNameOk() (*string, bool)`

GetProductNameOk returns a tuple with the ProductName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductName

`func (o *Brandingitemcreate) SetProductName(v string)`

SetProductName sets ProductName field to given value.


### SetProductNameNil

`func (o *Brandingitemcreate) SetProductNameNil(b bool)`

 SetProductNameNil sets the value for ProductName to be an explicit nil

### UnsetProductName
`func (o *Brandingitemcreate) UnsetProductName()`

UnsetProductName ensures that no value is present for ProductName, not even an explicit nil
### GetActionButtonColor

`func (o *Brandingitemcreate) GetActionButtonColor() string`

GetActionButtonColor returns the ActionButtonColor field if non-nil, zero value otherwise.

### GetActionButtonColorOk

`func (o *Brandingitemcreate) GetActionButtonColorOk() (*string, bool)`

GetActionButtonColorOk returns a tuple with the ActionButtonColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionButtonColor

`func (o *Brandingitemcreate) SetActionButtonColor(v string)`

SetActionButtonColor sets ActionButtonColor field to given value.

### HasActionButtonColor

`func (o *Brandingitemcreate) HasActionButtonColor() bool`

HasActionButtonColor returns a boolean if a field has been set.

### GetActiveLinkColor

`func (o *Brandingitemcreate) GetActiveLinkColor() string`

GetActiveLinkColor returns the ActiveLinkColor field if non-nil, zero value otherwise.

### GetActiveLinkColorOk

`func (o *Brandingitemcreate) GetActiveLinkColorOk() (*string, bool)`

GetActiveLinkColorOk returns a tuple with the ActiveLinkColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveLinkColor

`func (o *Brandingitemcreate) SetActiveLinkColor(v string)`

SetActiveLinkColor sets ActiveLinkColor field to given value.

### HasActiveLinkColor

`func (o *Brandingitemcreate) HasActiveLinkColor() bool`

HasActiveLinkColor returns a boolean if a field has been set.

### GetNavigationColor

`func (o *Brandingitemcreate) GetNavigationColor() string`

GetNavigationColor returns the NavigationColor field if non-nil, zero value otherwise.

### GetNavigationColorOk

`func (o *Brandingitemcreate) GetNavigationColorOk() (*string, bool)`

GetNavigationColorOk returns a tuple with the NavigationColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNavigationColor

`func (o *Brandingitemcreate) SetNavigationColor(v string)`

SetNavigationColor sets NavigationColor field to given value.

### HasNavigationColor

`func (o *Brandingitemcreate) HasNavigationColor() bool`

HasNavigationColor returns a boolean if a field has been set.

### GetEmailFromAddress

`func (o *Brandingitemcreate) GetEmailFromAddress() string`

GetEmailFromAddress returns the EmailFromAddress field if non-nil, zero value otherwise.

### GetEmailFromAddressOk

`func (o *Brandingitemcreate) GetEmailFromAddressOk() (*string, bool)`

GetEmailFromAddressOk returns a tuple with the EmailFromAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailFromAddress

`func (o *Brandingitemcreate) SetEmailFromAddress(v string)`

SetEmailFromAddress sets EmailFromAddress field to given value.

### HasEmailFromAddress

`func (o *Brandingitemcreate) HasEmailFromAddress() bool`

HasEmailFromAddress returns a boolean if a field has been set.

### GetLoginInformationalMessage

`func (o *Brandingitemcreate) GetLoginInformationalMessage() string`

GetLoginInformationalMessage returns the LoginInformationalMessage field if non-nil, zero value otherwise.

### GetLoginInformationalMessageOk

`func (o *Brandingitemcreate) GetLoginInformationalMessageOk() (*string, bool)`

GetLoginInformationalMessageOk returns a tuple with the LoginInformationalMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoginInformationalMessage

`func (o *Brandingitemcreate) SetLoginInformationalMessage(v string)`

SetLoginInformationalMessage sets LoginInformationalMessage field to given value.

### HasLoginInformationalMessage

`func (o *Brandingitemcreate) HasLoginInformationalMessage() bool`

HasLoginInformationalMessage returns a boolean if a field has been set.

### GetFileStandard

`func (o *Brandingitemcreate) GetFileStandard() *os.File`

GetFileStandard returns the FileStandard field if non-nil, zero value otherwise.

### GetFileStandardOk

`func (o *Brandingitemcreate) GetFileStandardOk() (**os.File, bool)`

GetFileStandardOk returns a tuple with the FileStandard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileStandard

`func (o *Brandingitemcreate) SetFileStandard(v *os.File)`

SetFileStandard sets FileStandard field to given value.

### HasFileStandard

`func (o *Brandingitemcreate) HasFileStandard() bool`

HasFileStandard returns a boolean if a field has been set.


