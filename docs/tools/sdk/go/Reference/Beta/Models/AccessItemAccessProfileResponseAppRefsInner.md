---
id: beta-access-item-access-profile-response-app-refs-inner
title: AccessItemAccessProfileResponseAppRefsInner
pagination_label: AccessItemAccessProfileResponseAppRefsInner
sidebar_label: AccessItemAccessProfileResponseAppRefsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemAccessProfileResponseAppRefsInner', 'BetaAccessItemAccessProfileResponseAppRefsInner'] 
slug: /tools/sdk/go/beta/models/access-item-access-profile-response-app-refs-inner
tags: ['SDK', 'Software Development Kit', 'AccessItemAccessProfileResponseAppRefsInner', 'BetaAccessItemAccessProfileResponseAppRefsInner']
---

# AccessItemAccessProfileResponseAppRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudAppId** | Pointer to **string** | the cloud app id associated with the access profile | [optional] 
**CloudAppName** | Pointer to **string** | the cloud app name associated with the access profile | [optional] 

## Methods

### NewAccessItemAccessProfileResponseAppRefsInner

`func NewAccessItemAccessProfileResponseAppRefsInner() *AccessItemAccessProfileResponseAppRefsInner`

NewAccessItemAccessProfileResponseAppRefsInner instantiates a new AccessItemAccessProfileResponseAppRefsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemAccessProfileResponseAppRefsInnerWithDefaults

`func NewAccessItemAccessProfileResponseAppRefsInnerWithDefaults() *AccessItemAccessProfileResponseAppRefsInner`

NewAccessItemAccessProfileResponseAppRefsInnerWithDefaults instantiates a new AccessItemAccessProfileResponseAppRefsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCloudAppId

`func (o *AccessItemAccessProfileResponseAppRefsInner) GetCloudAppId() string`

GetCloudAppId returns the CloudAppId field if non-nil, zero value otherwise.

### GetCloudAppIdOk

`func (o *AccessItemAccessProfileResponseAppRefsInner) GetCloudAppIdOk() (*string, bool)`

GetCloudAppIdOk returns a tuple with the CloudAppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudAppId

`func (o *AccessItemAccessProfileResponseAppRefsInner) SetCloudAppId(v string)`

SetCloudAppId sets CloudAppId field to given value.

### HasCloudAppId

`func (o *AccessItemAccessProfileResponseAppRefsInner) HasCloudAppId() bool`

HasCloudAppId returns a boolean if a field has been set.

### GetCloudAppName

`func (o *AccessItemAccessProfileResponseAppRefsInner) GetCloudAppName() string`

GetCloudAppName returns the CloudAppName field if non-nil, zero value otherwise.

### GetCloudAppNameOk

`func (o *AccessItemAccessProfileResponseAppRefsInner) GetCloudAppNameOk() (*string, bool)`

GetCloudAppNameOk returns a tuple with the CloudAppName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudAppName

`func (o *AccessItemAccessProfileResponseAppRefsInner) SetCloudAppName(v string)`

SetCloudAppName sets CloudAppName field to given value.

### HasCloudAppName

`func (o *AccessItemAccessProfileResponseAppRefsInner) HasCloudAppName() bool`

HasCloudAppName returns a boolean if a field has been set.


