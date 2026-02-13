---
id: v2025-resource-model
title: ResourceModel
pagination_label: ResourceModel
sidebar_label: ResourceModel
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ResourceModel', 'V2025ResourceModel'] 
slug: /tools/sdk/go/v2025/models/resource-model
tags: ['SDK', 'Software Development Kit', 'ResourceModel', 'V2025ResourceModel']
---

# ResourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** | The unique identifier for the resource. | [optional] 
**Name** | Pointer to **NullableString** | The display name or label for the resource. | [optional] 
**FullPath** | Pointer to **NullableString** | The full path to the resource within the system or application. | [optional] 
**ApplicationId** | Pointer to **int64** | The unique identifier of the application to which this resource belongs. | [optional] 
**Type** | Pointer to [**BusinessServiceType**](business-service-type) |  | [optional] 
**Owners** | Pointer to **[]string** | A list of UUIDs representing the owners of the resource. | [optional] 

## Methods

### NewResourceModel

`func NewResourceModel() *ResourceModel`

NewResourceModel instantiates a new ResourceModel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResourceModelWithDefaults

`func NewResourceModelWithDefaults() *ResourceModel`

NewResourceModelWithDefaults instantiates a new ResourceModel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ResourceModel) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ResourceModel) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ResourceModel) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *ResourceModel) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ResourceModel) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ResourceModel) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ResourceModel) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ResourceModel) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *ResourceModel) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *ResourceModel) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetFullPath

`func (o *ResourceModel) GetFullPath() string`

GetFullPath returns the FullPath field if non-nil, zero value otherwise.

### GetFullPathOk

`func (o *ResourceModel) GetFullPathOk() (*string, bool)`

GetFullPathOk returns a tuple with the FullPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullPath

`func (o *ResourceModel) SetFullPath(v string)`

SetFullPath sets FullPath field to given value.

### HasFullPath

`func (o *ResourceModel) HasFullPath() bool`

HasFullPath returns a boolean if a field has been set.

### SetFullPathNil

`func (o *ResourceModel) SetFullPathNil(b bool)`

 SetFullPathNil sets the value for FullPath to be an explicit nil

### UnsetFullPath
`func (o *ResourceModel) UnsetFullPath()`

UnsetFullPath ensures that no value is present for FullPath, not even an explicit nil
### GetApplicationId

`func (o *ResourceModel) GetApplicationId() int64`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *ResourceModel) GetApplicationIdOk() (*int64, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *ResourceModel) SetApplicationId(v int64)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *ResourceModel) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### GetType

`func (o *ResourceModel) GetType() BusinessServiceType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ResourceModel) GetTypeOk() (*BusinessServiceType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ResourceModel) SetType(v BusinessServiceType)`

SetType sets Type field to given value.

### HasType

`func (o *ResourceModel) HasType() bool`

HasType returns a boolean if a field has been set.

### GetOwners

`func (o *ResourceModel) GetOwners() []string`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *ResourceModel) GetOwnersOk() (*[]string, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *ResourceModel) SetOwners(v []string)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *ResourceModel) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### SetOwnersNil

`func (o *ResourceModel) SetOwnersNil(b bool)`

 SetOwnersNil sets the value for Owners to be an explicit nil

### UnsetOwners
`func (o *ResourceModel) UnsetOwners()`

UnsetOwners ensures that no value is present for Owners, not even an explicit nil

