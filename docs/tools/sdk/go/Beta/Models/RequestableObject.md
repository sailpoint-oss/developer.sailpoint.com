---
id: requestable-object
title: RequestableObject
pagination_label: RequestableObject
sidebar_label: RequestableObject
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RequestableObject'] 
slug: /tools/sdk/go/beta/models/requestable-object
tags: ['SDK', 'Software Development Kit', 'RequestableObject']
---

# RequestableObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | Id of the requestable object itself | [optional] 
**Name** |  Pointer to **string** | Human-readable display name of the requestable object | [optional] 
**Created** |  Pointer to **time.Time** | The time when the requestable object was created | [optional] 
**Modified** |  Pointer to **NullableTime** | The time when the requestable object was last modified | [optional] 
**Description** |  Pointer to **NullableString** | Description of the requestable object. | [optional] 
**Type** |  Pointer to [**RequestableObjectType**](requestable-object-type) |  | [optional] 
**RequestStatus** |  Pointer to [**RequestableObjectRequestStatus**](requestable-object-request-status) |  | [optional] 
**IdentityRequestId** |  Pointer to **NullableString** | If *requestStatus* is *PENDING*, indicates the id of the associated account activity. | [optional] 
**OwnerRef** |  Pointer to [**NullableIdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 
**RequestCommentsRequired** |  Pointer to **bool** | Whether the requester must provide comments when requesting the object. | [optional] 

## Methods

### NewRequestableObject

`func NewRequestableObject() *RequestableObject`

NewRequestableObject instantiates a new RequestableObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestableObjectWithDefaults

`func NewRequestableObjectWithDefaults() *RequestableObject`

NewRequestableObjectWithDefaults instantiates a new RequestableObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RequestableObject) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RequestableObject) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RequestableObject) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RequestableObject) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RequestableObject) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RequestableObject) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RequestableObject) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RequestableObject) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *RequestableObject) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *RequestableObject) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *RequestableObject) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *RequestableObject) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *RequestableObject) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *RequestableObject) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *RequestableObject) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *RequestableObject) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *RequestableObject) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *RequestableObject) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetDescription

`func (o *RequestableObject) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RequestableObject) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RequestableObject) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RequestableObject) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *RequestableObject) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *RequestableObject) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *RequestableObject) GetType() RequestableObjectType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RequestableObject) GetTypeOk() (*RequestableObjectType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RequestableObject) SetType(v RequestableObjectType)`

SetType sets Type field to given value.

### HasType

`func (o *RequestableObject) HasType() bool`

HasType returns a boolean if a field has been set.

### GetRequestStatus

`func (o *RequestableObject) GetRequestStatus() RequestableObjectRequestStatus`

GetRequestStatus returns the RequestStatus field if non-nil, zero value otherwise.

### GetRequestStatusOk

`func (o *RequestableObject) GetRequestStatusOk() (*RequestableObjectRequestStatus, bool)`

GetRequestStatusOk returns a tuple with the RequestStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestStatus

`func (o *RequestableObject) SetRequestStatus(v RequestableObjectRequestStatus)`

SetRequestStatus sets RequestStatus field to given value.

### HasRequestStatus

`func (o *RequestableObject) HasRequestStatus() bool`

HasRequestStatus returns a boolean if a field has been set.

### GetIdentityRequestId

`func (o *RequestableObject) GetIdentityRequestId() string`

GetIdentityRequestId returns the IdentityRequestId field if non-nil, zero value otherwise.

### GetIdentityRequestIdOk

`func (o *RequestableObject) GetIdentityRequestIdOk() (*string, bool)`

GetIdentityRequestIdOk returns a tuple with the IdentityRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityRequestId

`func (o *RequestableObject) SetIdentityRequestId(v string)`

SetIdentityRequestId sets IdentityRequestId field to given value.

### HasIdentityRequestId

`func (o *RequestableObject) HasIdentityRequestId() bool`

HasIdentityRequestId returns a boolean if a field has been set.

### SetIdentityRequestIdNil

`func (o *RequestableObject) SetIdentityRequestIdNil(b bool)`

 SetIdentityRequestIdNil sets the value for IdentityRequestId to be an explicit nil

### UnsetIdentityRequestId
`func (o *RequestableObject) UnsetIdentityRequestId()`

UnsetIdentityRequestId ensures that no value is present for IdentityRequestId, not even an explicit nil
### GetOwnerRef

`func (o *RequestableObject) GetOwnerRef() IdentityReferenceWithNameAndEmail`

GetOwnerRef returns the OwnerRef field if non-nil, zero value otherwise.

### GetOwnerRefOk

`func (o *RequestableObject) GetOwnerRefOk() (*IdentityReferenceWithNameAndEmail, bool)`

GetOwnerRefOk returns a tuple with the OwnerRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRef

`func (o *RequestableObject) SetOwnerRef(v IdentityReferenceWithNameAndEmail)`

SetOwnerRef sets OwnerRef field to given value.

### HasOwnerRef

`func (o *RequestableObject) HasOwnerRef() bool`

HasOwnerRef returns a boolean if a field has been set.

### SetOwnerRefNil

`func (o *RequestableObject) SetOwnerRefNil(b bool)`

 SetOwnerRefNil sets the value for OwnerRef to be an explicit nil

### UnsetOwnerRef
`func (o *RequestableObject) UnsetOwnerRef()`

UnsetOwnerRef ensures that no value is present for OwnerRef, not even an explicit nil
### GetRequestCommentsRequired

`func (o *RequestableObject) GetRequestCommentsRequired() bool`

GetRequestCommentsRequired returns the RequestCommentsRequired field if non-nil, zero value otherwise.

### GetRequestCommentsRequiredOk

`func (o *RequestableObject) GetRequestCommentsRequiredOk() (*bool, bool)`

GetRequestCommentsRequiredOk returns a tuple with the RequestCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCommentsRequired

`func (o *RequestableObject) SetRequestCommentsRequired(v bool)`

SetRequestCommentsRequired sets RequestCommentsRequired field to given value.

### HasRequestCommentsRequired

`func (o *RequestableObject) HasRequestCommentsRequired() bool`

HasRequestCommentsRequired returns a boolean if a field has been set.


[[Back to top]](#) 


