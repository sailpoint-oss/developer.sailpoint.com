---
id: v1-requestableobject
title: Requestableobject
pagination_label: Requestableobject
sidebar_label: Requestableobject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Requestableobject', 'V1Requestableobject'] 
slug: /tools/sdk/go/requestableobjects/models/requestableobject
tags: ['SDK', 'Software Development Kit', 'Requestableobject', 'V1Requestableobject']
---

# Requestableobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the requestable object itself | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the requestable object | [optional] 
**Created** | Pointer to **SailPointTime** | The time when the requestable object was created | [optional] 
**Modified** | Pointer to **NullableTime** | The time when the requestable object was last modified | [optional] 
**Description** | Pointer to **NullableString** | Description of the requestable object. | [optional] 
**Type** | Pointer to [**Requestableobjecttype**](requestableobjecttype) |  | [optional] 
**RequestStatus** | Pointer to [**Requestableobjectrequeststatus**](requestableobjectrequeststatus) |  | [optional] 
**IdentityRequestId** | Pointer to **NullableString** | If *requestStatus* is *PENDING*, indicates the id of the associated account activity. | [optional] 
**OwnerRef** | Pointer to [**NullableIdentityreferencewithnameandemail**](identityreferencewithnameandemail) |  | [optional] 
**RequestCommentsRequired** | Pointer to **bool** | Whether the requester must provide comments when requesting the object. | [optional] 

## Methods

### NewRequestableobject

`func NewRequestableobject() *Requestableobject`

NewRequestableobject instantiates a new Requestableobject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestableobjectWithDefaults

`func NewRequestableobjectWithDefaults() *Requestableobject`

NewRequestableobjectWithDefaults instantiates a new Requestableobject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Requestableobject) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Requestableobject) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Requestableobject) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Requestableobject) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Requestableobject) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Requestableobject) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Requestableobject) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Requestableobject) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Requestableobject) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Requestableobject) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Requestableobject) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Requestableobject) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Requestableobject) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Requestableobject) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Requestableobject) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Requestableobject) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Requestableobject) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Requestableobject) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetDescription

`func (o *Requestableobject) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Requestableobject) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Requestableobject) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Requestableobject) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Requestableobject) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Requestableobject) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *Requestableobject) GetType() Requestableobjecttype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Requestableobject) GetTypeOk() (*Requestableobjecttype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Requestableobject) SetType(v Requestableobjecttype)`

SetType sets Type field to given value.

### HasType

`func (o *Requestableobject) HasType() bool`

HasType returns a boolean if a field has been set.

### GetRequestStatus

`func (o *Requestableobject) GetRequestStatus() Requestableobjectrequeststatus`

GetRequestStatus returns the RequestStatus field if non-nil, zero value otherwise.

### GetRequestStatusOk

`func (o *Requestableobject) GetRequestStatusOk() (*Requestableobjectrequeststatus, bool)`

GetRequestStatusOk returns a tuple with the RequestStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestStatus

`func (o *Requestableobject) SetRequestStatus(v Requestableobjectrequeststatus)`

SetRequestStatus sets RequestStatus field to given value.

### HasRequestStatus

`func (o *Requestableobject) HasRequestStatus() bool`

HasRequestStatus returns a boolean if a field has been set.

### GetIdentityRequestId

`func (o *Requestableobject) GetIdentityRequestId() string`

GetIdentityRequestId returns the IdentityRequestId field if non-nil, zero value otherwise.

### GetIdentityRequestIdOk

`func (o *Requestableobject) GetIdentityRequestIdOk() (*string, bool)`

GetIdentityRequestIdOk returns a tuple with the IdentityRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityRequestId

`func (o *Requestableobject) SetIdentityRequestId(v string)`

SetIdentityRequestId sets IdentityRequestId field to given value.

### HasIdentityRequestId

`func (o *Requestableobject) HasIdentityRequestId() bool`

HasIdentityRequestId returns a boolean if a field has been set.

### SetIdentityRequestIdNil

`func (o *Requestableobject) SetIdentityRequestIdNil(b bool)`

 SetIdentityRequestIdNil sets the value for IdentityRequestId to be an explicit nil

### UnsetIdentityRequestId
`func (o *Requestableobject) UnsetIdentityRequestId()`

UnsetIdentityRequestId ensures that no value is present for IdentityRequestId, not even an explicit nil
### GetOwnerRef

`func (o *Requestableobject) GetOwnerRef() Identityreferencewithnameandemail`

GetOwnerRef returns the OwnerRef field if non-nil, zero value otherwise.

### GetOwnerRefOk

`func (o *Requestableobject) GetOwnerRefOk() (*Identityreferencewithnameandemail, bool)`

GetOwnerRefOk returns a tuple with the OwnerRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRef

`func (o *Requestableobject) SetOwnerRef(v Identityreferencewithnameandemail)`

SetOwnerRef sets OwnerRef field to given value.

### HasOwnerRef

`func (o *Requestableobject) HasOwnerRef() bool`

HasOwnerRef returns a boolean if a field has been set.

### SetOwnerRefNil

`func (o *Requestableobject) SetOwnerRefNil(b bool)`

 SetOwnerRefNil sets the value for OwnerRef to be an explicit nil

### UnsetOwnerRef
`func (o *Requestableobject) UnsetOwnerRef()`

UnsetOwnerRef ensures that no value is present for OwnerRef, not even an explicit nil
### GetRequestCommentsRequired

`func (o *Requestableobject) GetRequestCommentsRequired() bool`

GetRequestCommentsRequired returns the RequestCommentsRequired field if non-nil, zero value otherwise.

### GetRequestCommentsRequiredOk

`func (o *Requestableobject) GetRequestCommentsRequiredOk() (*bool, bool)`

GetRequestCommentsRequiredOk returns a tuple with the RequestCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCommentsRequired

`func (o *Requestableobject) SetRequestCommentsRequired(v bool)`

SetRequestCommentsRequired sets RequestCommentsRequired field to given value.

### HasRequestCommentsRequired

`func (o *Requestableobject) HasRequestCommentsRequired() bool`

HasRequestCommentsRequired returns a boolean if a field has been set.


