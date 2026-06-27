---
id: v1-approvalreference
title: Approvalreference
pagination_label: Approvalreference
sidebar_label: Approvalreference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalreference', 'V1Approvalreference'] 
slug: /tools/sdk/go/approvals/models/approvalreference
tags: ['SDK', 'Software Development Kit', 'Approvalreference', 'V1Approvalreference']
---

# Approvalreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the reference object | [optional] 
**Type** | Pointer to **string** | What reference object does this ID correspond to | [optional] 
**Name** | Pointer to **string** | Name of the reference object | [optional] 
**Email** | Pointer to **string** | Email associated with the reference object | [optional] 
**SerialOrder** | Pointer to **int64** | The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0. | [optional] 

## Methods

### NewApprovalreference

`func NewApprovalreference() *Approvalreference`

NewApprovalreference instantiates a new Approvalreference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalreferenceWithDefaults

`func NewApprovalreferenceWithDefaults() *Approvalreference`

NewApprovalreferenceWithDefaults instantiates a new Approvalreference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Approvalreference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Approvalreference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Approvalreference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Approvalreference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Approvalreference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Approvalreference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Approvalreference) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Approvalreference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *Approvalreference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Approvalreference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Approvalreference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Approvalreference) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *Approvalreference) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Approvalreference) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Approvalreference) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Approvalreference) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetSerialOrder

`func (o *Approvalreference) GetSerialOrder() int64`

GetSerialOrder returns the SerialOrder field if non-nil, zero value otherwise.

### GetSerialOrderOk

`func (o *Approvalreference) GetSerialOrderOk() (*int64, bool)`

GetSerialOrderOk returns a tuple with the SerialOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialOrder

`func (o *Approvalreference) SetSerialOrder(v int64)`

SetSerialOrder sets SerialOrder field to given value.

### HasSerialOrder

`func (o *Approvalreference) HasSerialOrder() bool`

HasSerialOrder returns a boolean if a field has been set.


