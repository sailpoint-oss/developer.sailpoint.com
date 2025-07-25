---
id: v2025-access-item-app-response
title: AccessItemAppResponse
pagination_label: AccessItemAppResponse
sidebar_label: AccessItemAppResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemAppResponse', 'V2025AccessItemAppResponse'] 
slug: /tools/sdk/go/v2025/models/access-item-app-response
tags: ['SDK', 'Software Development Kit', 'AccessItemAppResponse', 'V2025AccessItemAppResponse']
---

# AccessItemAppResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the access item id | [optional] 
**AccessType** | Pointer to **string** | the access item type. entitlement in this case | [optional] 
**DisplayName** | Pointer to **string** | the access item display name | [optional] 
**SourceName** | Pointer to **NullableString** | the associated source name if it exists | [optional] 
**AppRoleId** | **NullableString** | the app role id | 

## Methods

### NewAccessItemAppResponse

`func NewAccessItemAppResponse(appRoleId NullableString, ) *AccessItemAppResponse`

NewAccessItemAppResponse instantiates a new AccessItemAppResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemAppResponseWithDefaults

`func NewAccessItemAppResponseWithDefaults() *AccessItemAppResponse`

NewAccessItemAppResponseWithDefaults instantiates a new AccessItemAppResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessItemAppResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemAppResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemAppResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemAppResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccessType

`func (o *AccessItemAppResponse) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *AccessItemAppResponse) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *AccessItemAppResponse) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *AccessItemAppResponse) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccessItemAppResponse) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccessItemAppResponse) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccessItemAppResponse) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccessItemAppResponse) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceName

`func (o *AccessItemAppResponse) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccessItemAppResponse) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccessItemAppResponse) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *AccessItemAppResponse) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### SetSourceNameNil

`func (o *AccessItemAppResponse) SetSourceNameNil(b bool)`

 SetSourceNameNil sets the value for SourceName to be an explicit nil

### UnsetSourceName
`func (o *AccessItemAppResponse) UnsetSourceName()`

UnsetSourceName ensures that no value is present for SourceName, not even an explicit nil
### GetAppRoleId

`func (o *AccessItemAppResponse) GetAppRoleId() string`

GetAppRoleId returns the AppRoleId field if non-nil, zero value otherwise.

### GetAppRoleIdOk

`func (o *AccessItemAppResponse) GetAppRoleIdOk() (*string, bool)`

GetAppRoleIdOk returns a tuple with the AppRoleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppRoleId

`func (o *AccessItemAppResponse) SetAppRoleId(v string)`

SetAppRoleId sets AppRoleId field to given value.


### SetAppRoleIdNil

`func (o *AccessItemAppResponse) SetAppRoleIdNil(b bool)`

 SetAppRoleIdNil sets the value for AppRoleId to be an explicit nil

### UnsetAppRoleId
`func (o *AccessItemAppResponse) UnsetAppRoleId()`

UnsetAppRoleId ensures that no value is present for AppRoleId, not even an explicit nil

