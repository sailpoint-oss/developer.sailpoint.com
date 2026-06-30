---
id: v1-tenantuimetadataitemupdaterequest
title: Tenantuimetadataitemupdaterequest
pagination_label: Tenantuimetadataitemupdaterequest
sidebar_label: Tenantuimetadataitemupdaterequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Tenantuimetadataitemupdaterequest', 'V1Tenantuimetadataitemupdaterequest'] 
slug: /tools/sdk/go/uimetadata/models/tenantuimetadataitemupdaterequest
tags: ['SDK', 'Software Development Kit', 'Tenantuimetadataitemupdaterequest', 'V1Tenantuimetadataitemupdaterequest']
---

# Tenantuimetadataitemupdaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IframeWhiteList** | Pointer to **NullableString** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use \"null\". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**UsernameLabel** | Pointer to **NullableString** | Descriptor for the username input field. If you would like to reset the value use \"null\". | [optional] 
**UsernameEmptyText** | Pointer to **NullableString** | Placeholder text displayed in the username input field. If you would like to reset the value use \"null\". | [optional] 

## Methods

### NewTenantuimetadataitemupdaterequest

`func NewTenantuimetadataitemupdaterequest() *Tenantuimetadataitemupdaterequest`

NewTenantuimetadataitemupdaterequest instantiates a new Tenantuimetadataitemupdaterequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenantuimetadataitemupdaterequestWithDefaults

`func NewTenantuimetadataitemupdaterequestWithDefaults() *Tenantuimetadataitemupdaterequest`

NewTenantuimetadataitemupdaterequestWithDefaults instantiates a new Tenantuimetadataitemupdaterequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIframeWhiteList

`func (o *Tenantuimetadataitemupdaterequest) GetIframeWhiteList() string`

GetIframeWhiteList returns the IframeWhiteList field if non-nil, zero value otherwise.

### GetIframeWhiteListOk

`func (o *Tenantuimetadataitemupdaterequest) GetIframeWhiteListOk() (*string, bool)`

GetIframeWhiteListOk returns a tuple with the IframeWhiteList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIframeWhiteList

`func (o *Tenantuimetadataitemupdaterequest) SetIframeWhiteList(v string)`

SetIframeWhiteList sets IframeWhiteList field to given value.

### HasIframeWhiteList

`func (o *Tenantuimetadataitemupdaterequest) HasIframeWhiteList() bool`

HasIframeWhiteList returns a boolean if a field has been set.

### SetIframeWhiteListNil

`func (o *Tenantuimetadataitemupdaterequest) SetIframeWhiteListNil(b bool)`

 SetIframeWhiteListNil sets the value for IframeWhiteList to be an explicit nil

### UnsetIframeWhiteList
`func (o *Tenantuimetadataitemupdaterequest) UnsetIframeWhiteList()`

UnsetIframeWhiteList ensures that no value is present for IframeWhiteList, not even an explicit nil
### GetUsernameLabel

`func (o *Tenantuimetadataitemupdaterequest) GetUsernameLabel() string`

GetUsernameLabel returns the UsernameLabel field if non-nil, zero value otherwise.

### GetUsernameLabelOk

`func (o *Tenantuimetadataitemupdaterequest) GetUsernameLabelOk() (*string, bool)`

GetUsernameLabelOk returns a tuple with the UsernameLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsernameLabel

`func (o *Tenantuimetadataitemupdaterequest) SetUsernameLabel(v string)`

SetUsernameLabel sets UsernameLabel field to given value.

### HasUsernameLabel

`func (o *Tenantuimetadataitemupdaterequest) HasUsernameLabel() bool`

HasUsernameLabel returns a boolean if a field has been set.

### SetUsernameLabelNil

`func (o *Tenantuimetadataitemupdaterequest) SetUsernameLabelNil(b bool)`

 SetUsernameLabelNil sets the value for UsernameLabel to be an explicit nil

### UnsetUsernameLabel
`func (o *Tenantuimetadataitemupdaterequest) UnsetUsernameLabel()`

UnsetUsernameLabel ensures that no value is present for UsernameLabel, not even an explicit nil
### GetUsernameEmptyText

`func (o *Tenantuimetadataitemupdaterequest) GetUsernameEmptyText() string`

GetUsernameEmptyText returns the UsernameEmptyText field if non-nil, zero value otherwise.

### GetUsernameEmptyTextOk

`func (o *Tenantuimetadataitemupdaterequest) GetUsernameEmptyTextOk() (*string, bool)`

GetUsernameEmptyTextOk returns a tuple with the UsernameEmptyText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsernameEmptyText

`func (o *Tenantuimetadataitemupdaterequest) SetUsernameEmptyText(v string)`

SetUsernameEmptyText sets UsernameEmptyText field to given value.

### HasUsernameEmptyText

`func (o *Tenantuimetadataitemupdaterequest) HasUsernameEmptyText() bool`

HasUsernameEmptyText returns a boolean if a field has been set.

### SetUsernameEmptyTextNil

`func (o *Tenantuimetadataitemupdaterequest) SetUsernameEmptyTextNil(b bool)`

 SetUsernameEmptyTextNil sets the value for UsernameEmptyText to be an explicit nil

### UnsetUsernameEmptyText
`func (o *Tenantuimetadataitemupdaterequest) UnsetUsernameEmptyText()`

UnsetUsernameEmptyText ensures that no value is present for UsernameEmptyText, not even an explicit nil

