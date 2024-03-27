---
id: access-item-role-response
title: AccessItemRoleResponse
pagination_label: AccessItemRoleResponse
sidebar_label: AccessItemRoleResponse
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccessItemRoleResponse'] 
slug: /tools/sdk/go/beta/models/access-item-role-response
tags: ['SDK', 'Software Development Kit', 'AccessItemRoleResponse']
---

# AccessItemRoleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** |  Pointer to **string** | the access item type. role in this case | [optional] 
**Id** |  Pointer to **string** | the access item id | [optional] 
**DisplayName** |  Pointer to **string** | the role display name | [optional] 
**Description** |  Pointer to **string** | the description for the role | [optional] 
**SourceName** |  Pointer to **string** | the associated source name if it exists | [optional] 

## Methods

### NewAccessItemRoleResponse

`func NewAccessItemRoleResponse() *AccessItemRoleResponse`

NewAccessItemRoleResponse instantiates a new AccessItemRoleResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemRoleResponseWithDefaults

`func NewAccessItemRoleResponseWithDefaults() *AccessItemRoleResponse`

NewAccessItemRoleResponseWithDefaults instantiates a new AccessItemRoleResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessType

`func (o *AccessItemRoleResponse) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *AccessItemRoleResponse) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *AccessItemRoleResponse) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *AccessItemRoleResponse) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.

### GetId

`func (o *AccessItemRoleResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemRoleResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemRoleResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemRoleResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccessItemRoleResponse) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccessItemRoleResponse) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccessItemRoleResponse) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccessItemRoleResponse) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *AccessItemRoleResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessItemRoleResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessItemRoleResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessItemRoleResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSourceName

`func (o *AccessItemRoleResponse) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccessItemRoleResponse) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccessItemRoleResponse) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *AccessItemRoleResponse) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.


[[Back to top]](#) 


