---
id: v2025-application-discovery-response-target
title: ApplicationDiscoveryResponseTarget
pagination_label: ApplicationDiscoveryResponseTarget
sidebar_label: ApplicationDiscoveryResponseTarget
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApplicationDiscoveryResponseTarget', 'V2025ApplicationDiscoveryResponseTarget'] 
slug: /tools/sdk/go/v2025/models/application-discovery-response-target
tags: ['SDK', 'Software Development Kit', 'ApplicationDiscoveryResponseTarget', 'V2025ApplicationDiscoveryResponseTarget']
---

# ApplicationDiscoveryResponseTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewApplicationDiscoveryResponseTarget

`func NewApplicationDiscoveryResponseTarget() *ApplicationDiscoveryResponseTarget`

NewApplicationDiscoveryResponseTarget instantiates a new ApplicationDiscoveryResponseTarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationDiscoveryResponseTargetWithDefaults

`func NewApplicationDiscoveryResponseTargetWithDefaults() *ApplicationDiscoveryResponseTarget`

NewApplicationDiscoveryResponseTargetWithDefaults instantiates a new ApplicationDiscoveryResponseTarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ApplicationDiscoveryResponseTarget) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApplicationDiscoveryResponseTarget) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApplicationDiscoveryResponseTarget) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *ApplicationDiscoveryResponseTarget) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ApplicationDiscoveryResponseTarget) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApplicationDiscoveryResponseTarget) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApplicationDiscoveryResponseTarget) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApplicationDiscoveryResponseTarget) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ApplicationDiscoveryResponseTarget) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApplicationDiscoveryResponseTarget) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApplicationDiscoveryResponseTarget) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApplicationDiscoveryResponseTarget) HasName() bool`

HasName returns a boolean if a field has been set.


