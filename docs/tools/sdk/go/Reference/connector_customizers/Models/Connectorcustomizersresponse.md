---
id: v1-connectorcustomizersresponse
title: Connectorcustomizersresponse
pagination_label: Connectorcustomizersresponse
sidebar_label: Connectorcustomizersresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Connectorcustomizersresponse', 'V1Connectorcustomizersresponse'] 
slug: /tools/sdk/go/connectorcustomizers/models/connectorcustomizersresponse
tags: ['SDK', 'Software Development Kit', 'Connectorcustomizersresponse', 'V1Connectorcustomizersresponse']
---

# Connectorcustomizersresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Connector customizer ID. | [optional] [readonly] 
**Name** | Pointer to **string** | Connector customizer name. | [optional] 
**ImageVersion** | Pointer to **int64** | Connector customizer image version. | [optional] 
**ImageID** | Pointer to **string** | Connector customizer image id. | [optional] 
**TenantID** | Pointer to **string** | Connector customizer tenant id. | [optional] 
**Created** | Pointer to **SailPointTime** | Date-time when the connector customizer was created | [optional] 

## Methods

### NewConnectorcustomizersresponse

`func NewConnectorcustomizersresponse() *Connectorcustomizersresponse`

NewConnectorcustomizersresponse instantiates a new Connectorcustomizersresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorcustomizersresponseWithDefaults

`func NewConnectorcustomizersresponseWithDefaults() *Connectorcustomizersresponse`

NewConnectorcustomizersresponseWithDefaults instantiates a new Connectorcustomizersresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Connectorcustomizersresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Connectorcustomizersresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Connectorcustomizersresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Connectorcustomizersresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Connectorcustomizersresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Connectorcustomizersresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Connectorcustomizersresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Connectorcustomizersresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetImageVersion

`func (o *Connectorcustomizersresponse) GetImageVersion() int64`

GetImageVersion returns the ImageVersion field if non-nil, zero value otherwise.

### GetImageVersionOk

`func (o *Connectorcustomizersresponse) GetImageVersionOk() (*int64, bool)`

GetImageVersionOk returns a tuple with the ImageVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageVersion

`func (o *Connectorcustomizersresponse) SetImageVersion(v int64)`

SetImageVersion sets ImageVersion field to given value.

### HasImageVersion

`func (o *Connectorcustomizersresponse) HasImageVersion() bool`

HasImageVersion returns a boolean if a field has been set.

### GetImageID

`func (o *Connectorcustomizersresponse) GetImageID() string`

GetImageID returns the ImageID field if non-nil, zero value otherwise.

### GetImageIDOk

`func (o *Connectorcustomizersresponse) GetImageIDOk() (*string, bool)`

GetImageIDOk returns a tuple with the ImageID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageID

`func (o *Connectorcustomizersresponse) SetImageID(v string)`

SetImageID sets ImageID field to given value.

### HasImageID

`func (o *Connectorcustomizersresponse) HasImageID() bool`

HasImageID returns a boolean if a field has been set.

### GetTenantID

`func (o *Connectorcustomizersresponse) GetTenantID() string`

GetTenantID returns the TenantID field if non-nil, zero value otherwise.

### GetTenantIDOk

`func (o *Connectorcustomizersresponse) GetTenantIDOk() (*string, bool)`

GetTenantIDOk returns a tuple with the TenantID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantID

`func (o *Connectorcustomizersresponse) SetTenantID(v string)`

SetTenantID sets TenantID field to given value.

### HasTenantID

`func (o *Connectorcustomizersresponse) HasTenantID() bool`

HasTenantID returns a boolean if a field has been set.

### GetCreated

`func (o *Connectorcustomizersresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Connectorcustomizersresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Connectorcustomizersresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Connectorcustomizersresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


