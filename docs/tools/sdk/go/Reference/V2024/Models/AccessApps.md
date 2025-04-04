---
id: v2024-access-apps
title: AccessApps
pagination_label: AccessApps
sidebar_label: AccessApps
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessApps', 'V2024AccessApps'] 
slug: /tools/sdk/go/v2024/models/access-apps
tags: ['SDK', 'Software Development Kit', 'AccessApps', 'V2024AccessApps']
---

# AccessApps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique ID of the referenced object. | [optional] 
**Name** | Pointer to **string** | Name of application | [optional] 
**Description** | Pointer to **string** | Description of application. | [optional] 
**Owner** | Pointer to [**AccessAppsOwner**](access-apps-owner) |  | [optional] 

## Methods

### NewAccessApps

`func NewAccessApps() *AccessApps`

NewAccessApps instantiates a new AccessApps object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessAppsWithDefaults

`func NewAccessAppsWithDefaults() *AccessApps`

NewAccessAppsWithDefaults instantiates a new AccessApps object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessApps) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessApps) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessApps) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessApps) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessApps) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessApps) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessApps) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessApps) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *AccessApps) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessApps) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessApps) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessApps) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOwner

`func (o *AccessApps) GetOwner() AccessAppsOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *AccessApps) GetOwnerOk() (*AccessAppsOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *AccessApps) SetOwner(v AccessAppsOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *AccessApps) HasOwner() bool`

HasOwner returns a boolean if a field has been set.


