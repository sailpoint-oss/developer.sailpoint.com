---
id: v2024-tenant-ui-metadata-item-response
title: TenantUiMetadataItemResponse
pagination_label: TenantUiMetadataItemResponse
sidebar_label: TenantUiMetadataItemResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TenantUiMetadataItemResponse', 'V2024TenantUiMetadataItemResponse'] 
slug: /tools/sdk/go/v2024/models/tenant-ui-metadata-item-response
tags: ['SDK', 'Software Development Kit', 'TenantUiMetadataItemResponse', 'V2024TenantUiMetadataItemResponse']
---

# TenantUiMetadataItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IframeWhiteList** | Pointer to **NullableString** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use \"null\". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**UsernameLabel** | Pointer to **NullableString** | Descriptor for the username input field. If you would like to reset the value use \"null\". | [optional] 
**UsernameEmptyText** | Pointer to **NullableString** | Placeholder text displayed in the username input field. If you would like to reset the value use \"null\". | [optional] 

## Methods

### NewTenantUiMetadataItemResponse

`func NewTenantUiMetadataItemResponse() *TenantUiMetadataItemResponse`

NewTenantUiMetadataItemResponse instantiates a new TenantUiMetadataItemResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenantUiMetadataItemResponseWithDefaults

`func NewTenantUiMetadataItemResponseWithDefaults() *TenantUiMetadataItemResponse`

NewTenantUiMetadataItemResponseWithDefaults instantiates a new TenantUiMetadataItemResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIframeWhiteList

`func (o *TenantUiMetadataItemResponse) GetIframeWhiteList() string`

GetIframeWhiteList returns the IframeWhiteList field if non-nil, zero value otherwise.

### GetIframeWhiteListOk

`func (o *TenantUiMetadataItemResponse) GetIframeWhiteListOk() (*string, bool)`

GetIframeWhiteListOk returns a tuple with the IframeWhiteList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIframeWhiteList

`func (o *TenantUiMetadataItemResponse) SetIframeWhiteList(v string)`

SetIframeWhiteList sets IframeWhiteList field to given value.

### HasIframeWhiteList

`func (o *TenantUiMetadataItemResponse) HasIframeWhiteList() bool`

HasIframeWhiteList returns a boolean if a field has been set.

### SetIframeWhiteListNil

`func (o *TenantUiMetadataItemResponse) SetIframeWhiteListNil(b bool)`

 SetIframeWhiteListNil sets the value for IframeWhiteList to be an explicit nil

### UnsetIframeWhiteList
`func (o *TenantUiMetadataItemResponse) UnsetIframeWhiteList()`

UnsetIframeWhiteList ensures that no value is present for IframeWhiteList, not even an explicit nil
### GetUsernameLabel

`func (o *TenantUiMetadataItemResponse) GetUsernameLabel() string`

GetUsernameLabel returns the UsernameLabel field if non-nil, zero value otherwise.

### GetUsernameLabelOk

`func (o *TenantUiMetadataItemResponse) GetUsernameLabelOk() (*string, bool)`

GetUsernameLabelOk returns a tuple with the UsernameLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsernameLabel

`func (o *TenantUiMetadataItemResponse) SetUsernameLabel(v string)`

SetUsernameLabel sets UsernameLabel field to given value.

### HasUsernameLabel

`func (o *TenantUiMetadataItemResponse) HasUsernameLabel() bool`

HasUsernameLabel returns a boolean if a field has been set.

### SetUsernameLabelNil

`func (o *TenantUiMetadataItemResponse) SetUsernameLabelNil(b bool)`

 SetUsernameLabelNil sets the value for UsernameLabel to be an explicit nil

### UnsetUsernameLabel
`func (o *TenantUiMetadataItemResponse) UnsetUsernameLabel()`

UnsetUsernameLabel ensures that no value is present for UsernameLabel, not even an explicit nil
### GetUsernameEmptyText

`func (o *TenantUiMetadataItemResponse) GetUsernameEmptyText() string`

GetUsernameEmptyText returns the UsernameEmptyText field if non-nil, zero value otherwise.

### GetUsernameEmptyTextOk

`func (o *TenantUiMetadataItemResponse) GetUsernameEmptyTextOk() (*string, bool)`

GetUsernameEmptyTextOk returns a tuple with the UsernameEmptyText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsernameEmptyText

`func (o *TenantUiMetadataItemResponse) SetUsernameEmptyText(v string)`

SetUsernameEmptyText sets UsernameEmptyText field to given value.

### HasUsernameEmptyText

`func (o *TenantUiMetadataItemResponse) HasUsernameEmptyText() bool`

HasUsernameEmptyText returns a boolean if a field has been set.

### SetUsernameEmptyTextNil

`func (o *TenantUiMetadataItemResponse) SetUsernameEmptyTextNil(b bool)`

 SetUsernameEmptyTextNil sets the value for UsernameEmptyText to be an explicit nil

### UnsetUsernameEmptyText
`func (o *TenantUiMetadataItemResponse) UnsetUsernameEmptyText()`

UnsetUsernameEmptyText ensures that no value is present for UsernameEmptyText, not even an explicit nil

