---
id: beta-provisioning-completed-requester
title: ProvisioningCompletedRequester
pagination_label: ProvisioningCompletedRequester
sidebar_label: ProvisioningCompletedRequester
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ProvisioningCompletedRequester', 'BetaProvisioningCompletedRequester'] 
slug: /tools/sdk/go/beta/models/provisioning-completed-requester
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedRequester', 'BetaProvisioningCompletedRequester']
---

# ProvisioningCompletedRequester

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Provisioning requester's DTO type. | 
**Id** | **string** | Provisioning requester's identity ID. | 
**Name** | **string** | Provisioning requester's name. | 

## Methods

### NewProvisioningCompletedRequester

`func NewProvisioningCompletedRequester(type_ string, id string, name string, ) *ProvisioningCompletedRequester`

NewProvisioningCompletedRequester instantiates a new ProvisioningCompletedRequester object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningCompletedRequesterWithDefaults

`func NewProvisioningCompletedRequesterWithDefaults() *ProvisioningCompletedRequester`

NewProvisioningCompletedRequesterWithDefaults instantiates a new ProvisioningCompletedRequester object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ProvisioningCompletedRequester) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ProvisioningCompletedRequester) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ProvisioningCompletedRequester) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *ProvisioningCompletedRequester) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ProvisioningCompletedRequester) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ProvisioningCompletedRequester) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *ProvisioningCompletedRequester) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProvisioningCompletedRequester) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProvisioningCompletedRequester) SetName(v string)`

SetName sets Name field to given value.



