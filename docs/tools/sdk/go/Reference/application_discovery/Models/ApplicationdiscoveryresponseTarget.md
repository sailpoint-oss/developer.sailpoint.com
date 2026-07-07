---
id: v1-applicationdiscoveryresponse-target
title: ApplicationdiscoveryresponseTarget
pagination_label: ApplicationdiscoveryresponseTarget
sidebar_label: ApplicationdiscoveryresponseTarget
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApplicationdiscoveryresponseTarget', 'V1ApplicationdiscoveryresponseTarget'] 
slug: /tools/sdk/go/applicationdiscovery/models/applicationdiscoveryresponse-target
tags: ['SDK', 'Software Development Kit', 'ApplicationdiscoveryresponseTarget', 'V1ApplicationdiscoveryresponseTarget']
---

# ApplicationdiscoveryresponseTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewApplicationdiscoveryresponseTarget

`func NewApplicationdiscoveryresponseTarget() *ApplicationdiscoveryresponseTarget`

NewApplicationdiscoveryresponseTarget instantiates a new ApplicationdiscoveryresponseTarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationdiscoveryresponseTargetWithDefaults

`func NewApplicationdiscoveryresponseTargetWithDefaults() *ApplicationdiscoveryresponseTarget`

NewApplicationdiscoveryresponseTargetWithDefaults instantiates a new ApplicationdiscoveryresponseTarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ApplicationdiscoveryresponseTarget) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApplicationdiscoveryresponseTarget) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApplicationdiscoveryresponseTarget) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *ApplicationdiscoveryresponseTarget) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ApplicationdiscoveryresponseTarget) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApplicationdiscoveryresponseTarget) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApplicationdiscoveryresponseTarget) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApplicationdiscoveryresponseTarget) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ApplicationdiscoveryresponseTarget) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApplicationdiscoveryresponseTarget) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApplicationdiscoveryresponseTarget) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApplicationdiscoveryresponseTarget) HasName() bool`

HasName returns a boolean if a field has been set.


